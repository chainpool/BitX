import React from 'react';
import classNames from 'classnames';
import { Mixin } from '../../components';
import * as styles from './CheckMnemonic.module.scss';
import { Patterns } from '../../utils';

export default class CheckMnemonic extends Mixin {
  state = {
    userInput: [],
    userInputErrMsg: '',
  };

  checkAll = {
    checkUserInput: () => {
      const { userInput = [] } = this.state;
      const { mnemonic } = this.props;
      const err = Patterns.check('strictEqual')(
        userInput.map((item = {}) => item.value).join(' '),
        mnemonic,
      );
      this.setState({
        userInputErrMsg: err,
      });
      return err;
    },
    confirm: () => {
      return ['checkUserInput'].every((item) => !this.checkAll[item]());
    },
  };

  render() {
    const { checkAll } = this;
    const { userInput, userInputErrMsg } = this.state;
    const { mnemonic, changeStep } = this.props;

    const getPostion = (index) => userInput.findIndex((item) => item.index === index);
    return (
      <div className={styles.CheckMnemonic}>
        <div className={styles.desc}>验证您记下的助记词</div>
        <div className={styles.generatewords}>
          {userInput.map((item = {}) => item.value).join(' ')}
        </div>
        <div className={classNames(styles.writedesc, userInputErrMsg && styles.warn)}>
          请按正确的顺序点击单词
        </div>
        <ul className={styles.allwords}>
          {mnemonic.split(' ').map((item, index) => (
            <li
              className={getPostion(index) !== -1 ? styles.active : null}
              key={index}
              onClick={() => {
                this.setState({
                  userInputErrMsg: '',
                });
                if (getPostion(index) === -1) {
                  this.setState((prevState) => {
                    prevState.userInput.push({
                      value: item,
                      index,
                    });
                    return {
                      userInput: prevState.userInput,
                    };
                  });
                } else {
                  this.setState((prevState) => {
                    prevState.userInput.splice(getPostion(index), 1);
                    return {
                      userInput: prevState.userInput,
                    };
                  });
                }
              }}>
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            if (checkAll.confirm()) {
              changeStep(4);
            }
          }}>
          完成
        </button>
      </div>
    );
  }
}
