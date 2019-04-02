import React from 'react';
import classNames from 'classnames';
import { Mixin } from '../../components';
import * as styles from './CheckMnemonic.module.scss';

export default class CheckMnemonic extends Mixin {
  state = {
    userInput: [],
    userInputErrMsg: '',
  };

  checkAll = {
    checkUserInput: () => {
      const { userInput = [], userInputErrMsg } = this.state;
      const { mnemonic } = this.props;
      if (userInput.map((item = {}) => item.value).join() !== mnemonic.join()) {
        this.setState({
          userInputErrMsg: '请按正确的顺序输入',
        });
      }
      return userInputErrMsg;
    },
    confirm: () => {
      return ['checkUserInput'].every((item) => !this.checkAll[item]());
    },
  };

  render() {
    const { checkAll } = this;
    const { userInput, userInputErrMsg } = this.state;
    const { mnemonic = [], changeStep } = this.props;

    const getPostion = (index) => userInput.findIndex((item) => item.index === index);
    return (
      <div className={styles.CheckMnemonic}>
        <div className={styles.desc}>验证您记下的助记词</div>
        <ul className={styles.generatewords}>
          {userInput.map((item = {}) => item.value).join(' ')}
        </ul>
        <div className={classNames(styles.writedesc, userInputErrMsg && styles.warn)}>
          请按正确的顺序点击单词
        </div>
        <ul className={styles.allwords}>
          {mnemonic.map((item, index) => (
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
