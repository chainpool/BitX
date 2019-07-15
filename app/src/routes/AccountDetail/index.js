import React from "react";
import { connect } from "react-redux";
import { Mixin } from "../../components";
import AccountInfo from "./AccountInfo";
import ExportKey from "./ExportKey";
import DeleteAccount from "./DeleteAccount";
import InputPassword from "./InputPassword";
import ViewPrivateKey from "./ViewPrivateKey";
import { deleteAccount, getAccountBalance, setMenu } from "../../store/actions";
import * as styles from "./index.module.scss";
import { bitX } from "../../utils/bitX";
import { isFunction } from "../../utils";
import OperationSwitch from "./SendOrReceive";

class AccountDetail extends Mixin {
  constructor(props) {
    super(props);
    const { currentAccount } = props;
    this.pageTitle = currentAccount.name;
    this.didMount = Mixin.prototype.componentDidMount;
    this.state = {
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

    const { currentAccount = {} } = this.props;
    this.props.getAccountBalance(currentAccount);
  }

  handleStepChange(status) {
    this.setState({ status });
  }

  render() {
    const { status, showMenu, privateKey, passwordCallback } = this.state;
    const { currentAccount: { encryptedKey } = {}, deleteAccount } = this.props;

    return (
      <div className={styles.AccountDetail}>
        <AccountInfo {...this.props} />
        <OperationSwitch {...this.props} />
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
    deleteAccount: address => dispatch(deleteAccount(address)),
    getAccountBalance: account => dispatch(getAccountBalance(account))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetail);
