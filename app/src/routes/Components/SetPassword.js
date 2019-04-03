import React from 'react';
import { connect } from 'react-redux';
import { Mixin, Input } from '../../components';
import { PATH } from '../../constants';
import { bitJS, Patterns } from '../../utils';
import * as styles from './SetPassword.module.scss';
import { addAccount } from '../../store/actions';

class SetPassword extends Mixin {
  pageTitle = '设置密码';
  state = {
    name: 'wei123',
    nameErrMsg: '',
    password: '12345678',
    passwordErrMsg: '',
    confirmPassword: '12345678',
    confirmPasswordErrMsg: '',
  };

  checkAll = {
    checkName: () => {
      const { name } = this.state;
      const err = Patterns.check('required')(name);
      this.setState({
        nameErrMsg: err,
      });
      return err;
    },
    checkPassword: () => {
      const { password } = this.state;
      let err =
        Patterns.check('required')(password) ||
        Patterns.check('characterLength')(password, 8) ||
        this.checkAll.checkEqual();
      this.setState({
        passwordErrMsg: err,
      });
      return err;
    },
    checkConfirmPassword: () => {
      const { confirmPassword } = this.state;
      let err = Patterns.check('required')(confirmPassword) || this.checkAll.checkEqual();
      this.setState({
        confirmPasswordErrMsg: err,
      });
      return err;
    },
    checkEqual: () => {
      const { password, confirmPassword } = this.state;
      if (password && confirmPassword) {
        const err = Patterns.check('equal')(password, confirmPassword);
        this.setState({
          passwordErrMsg: err,
          confirmPasswordErrMsg: err,
        });
        return err;
      }
    },
    confirm: () => {
      return ['checkName', 'checkPassword', 'checkConfirmPassword'].every(
        (item) => !this.checkAll[item](),
      );
    },
  };
  render() {
    const { checkAll } = this;
    const {
      name,
      nameErrMsg,
      password,
      passwordErrMsg,
      confirmPassword,
      confirmPasswordErrMsg,
    } = this.state;
    const { mnemonic, privateKey, addAccount, history } = this.props;
    return (
      <div className={styles.SetPassword}>
        <div className={styles.inputcontent}>
          <div className={styles.desc}>为你的钱包账户设置密码</div>
          <Input
            label="昵称"
            value={name}
            errMsg={nameErrMsg}
            placeholder="12字符以内"
            onBlur={checkAll.checkName}
            onChange={(value) =>
              this.setState({
                nameErrMsg: '',
                name: value.slice(0, 12),
              })
            }
          />
          <Input
            label="密码"
            value={password}
            errMsg={passwordErrMsg}
            placeholder="密码至少包含8个字符"
            onBlur={checkAll.checkPassword}
            onChange={(value) =>
              this.setState({
                passwordErrMsg: '',
                password: value,
              })
            }
          />
          <Input
            label="确认密码"
            value={confirmPassword}
            errMsg={confirmPasswordErrMsg}
            placeholder="重复输入密码"
            onBlur={checkAll.checkConfirmPassword}
            onChange={(value) =>
              this.setState({
                confirmPasswordErrMsg: '',
                confirmPassword: value,
              })
            }
          />
        </div>
        <div className={styles.button}>
          <button
            onClick={() => {
              if (checkAll.confirm()) {
                let account;
                if (mnemonic) {
                  account = bitJS.generateAccount({
                    name: name,
                    mnemonic,
                    password: password,
                  });
                } else if (privateKey) {
                  account = bitJS.generateAccount({
                    wif: privateKey,
                  });
                }
                addAccount(account);
                history.push({
                  pathname: PATH.home,
                });
              }
            }}>
            确定
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAccount: (account) => {
      dispatch(addAccount(account));
    },
  };
};

export default connect(
  undefined,
  mapDispatchToProps,
)(SetPassword);
