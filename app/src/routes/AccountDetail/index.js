import React from "react";
import { connect } from "react-redux";
import { Mixin, Modal } from "../../components";
import AccountInfo from "./AccountInfo";
import AccountReceive from "./AccountReceive";
import AccountSend from "./AccountSend";
import ExportKey from "./ExportKey";
import InputPassword from "./InputPassword";
import { setMenu } from "../../store/actions";
import * as styles from "./index.module.scss";
// import classnames from "classnames";

class AccountDetail extends Mixin {
  constructor(props) {
    super(props);
    const { currentAccount } = props;
    this.pageTitle = currentAccount.name;
    this.state = {
      activeIndex: 0,
      shadowActive: true, //false,
      step: 1,
      privateKey: "1231213123834747287474934934739273c9842743846845858374974598"
    };
  }
  componentDidMount() {
    this.props.setMenu({
      show: true,
      cb: () => {
        this.openModal({});
      }
    });
  }

  handleStepChange(step) {
    this.setState({ step });
  }

  render() {
    const { activeIndex, step, shadowActive, privateKey } = this.state;
    return (
      <div className={styles.AccountDetail}>
        <AccountInfo {...this.props} />
        <div
          className={styles.content}
          style={{ background: activeIndex === 1 ? "white" : "" }}
        >
          <ul className={styles.selectmode}>
            {["发送", "接收"].map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? styles.active : null}
                onClick={() => {
                  this.setState({
                    activeIndex: index
                  });
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          {activeIndex === 0 && <AccountSend {...this.props} />}
          {activeIndex === 1 && <AccountReceive {...this.props} />}
        </div>
        {shadowActive && (
          <>
            {step === 1 && (
              <Modal className={styles.modal}>
                <ExportKey
                  className={styles.export_key}
                  handleStepChange={step => {
                    this.handleStepChange(step);
                  }}
                />
              </Modal>
            )}
            {step === 2 && (
              <Modal
                title="输入账户密码"
                closeCb={() => this.setState({ step: 0 })}
              >
                <InputPassword
                  {...this.props}
                  setPrivateKey={privateKey => this.setState({ privateKey })}
                  handleStepChange={step => {
                    this.handleStepChange(step);
                  }}
                />
              </Modal>
            )}
            {step === 3 && (
              <Modal title="私钥" closeCb={() => this.setState({ step: 0 })}>
                <div>
                  <span className={styles.private_key}>{privateKey}</span>
                  <span className={styles.warning}>
                    不要将您的私钥存储在您的电脑上，或者网上某处。任何能够访问您备份私钥的人就能取用您的资金
                  </span>
                </div>
              </Modal>
            )}
          </>
        )}
      </div>
    );
  }
  componentWillUnmount() {
    this.props.setMenu({
      show: false,
      cb: null
    });
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMenu: menu => dispatch(setMenu(menu))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetail);
