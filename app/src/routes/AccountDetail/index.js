import React from "react";
import { connect } from "react-redux";
import { Mixin } from "../../components";
import AccountInfo from "./AccountInfo";
import AccountReceive from "./AccountReceive";
import AccountSend from "./AccountSend";
import ExportKey from "./ExportKey";
import DeleteAccount from "./DeleteAccount";
import InputPassword from "./InputPassword";
import ViewPrivateKey from "./ViewPrivateKey";
import { setMenu, deleteAccount } from "../../store/actions";
import * as styles from "./index.module.scss";
import { bitX } from "../../utils/bitX";
import { isFunction } from "../../utils";

class AccountDetail extends Mixin {
  constructor(props) {
    super(props);
    const { currentAccount } = props;
    this.pageTitle = currentAccount.name;
    this.didMount = Mixin.prototype.componentDidMount;
    this.state = {
      activeIndex: 0,
      showMenu: false,
      status: "toExportKey", //"toExportKey": 导出私钥; "inputPassword": 输入密码; "showPrivateKey":展示私钥
      privateKey: "",
      passwordCallback: () => {}
    };
  }

  componentDidMount() {
    if (this.didMount) {
      this.didMount.apply(this);
    }
    this.props.setMenu({
      show: true,
      cb: () => {
        this.setState({ showMenu: true });
      }
    });
  }

  handleStepChange(status) {
    this.setState({ status });
  }

  render() {
    const {
      activeIndex,
      status,
      showMenu,
      privateKey,
      passwordCallback
    } = this.state;
    const { currentAccount: { encryptedKey } = {}, deleteAccount } = this.props;

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
        {showMenu && (
          <div
            className={styles.modal}
            onClick={() => {
              this.setState({ showMenu: false, status: "toExportKey" });
            }}
          >
            {status === "toExportKey" && (
              <div className={styles.menu}>
                <ExportKey
                  className={styles.export_key}
                  onClick={() => {
                    this.setState({
                      status: "inputPassword",
                      passwordCallback: password => {
                        const { privateKey } = bitX.decryptPair(
                          encryptedKey,
                          password
                        );
                        this.setState({
                          privateKey: privateKey.toString("hex"),
                          status: "showPrivateKey"
                        });
                      }
                    });
                  }}
                />
                <DeleteAccount
                  onClick={() => {
                    this.setState({
                      status: "inputPassword",
                      passwordCallback: () => {
                        deleteAccount(this.props.currentAccount.address);

                        if (isFunction(this.props.goBack)) {
                          this.props.goBack();
                        } else {
                          this.props.history.goBack();
                        }
                      }
                    });
                  }}
                  className={styles.export_key}
                />
              </div>
            )}
            {status === "inputPassword" && (
              <div className={styles.menu}>
                <InputPassword
                  {...this.props}
                  onClose={() => {
                    this.setState({ showMenu: false, status: "toExportKey" });
                  }}
                  passwordCallback={passwordCallback}
                  setPrivateKey={privateKey =>
                    this.setState({ privateKey, status: "showPrivateKey" })
                  }
                />
              </div>
            )}
            {status === "showPrivateKey" && (
              <div className={styles.menu}>
                <ViewPrivateKey
                  styles={styles}
                  privateKey={privateKey}
                  onClose={() => {
                    this.setState({ showMenu: false, status: "toExportKey" });
                  }}
                />
              </div>
            )}
          </div>
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
    menu: state.menu,
    accounts: state.accounts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMenu: menu => dispatch(setMenu(menu)),
    deleteAccount: address => dispatch(deleteAccount(address))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetail);
