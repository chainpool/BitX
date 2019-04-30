import React, { Component } from "react";
import { connect } from "react-redux";
import { RouterGo } from "../../components";
import { PATH } from "../../constants";
import BitX from "../../resources/Bitx.png";
import * as styles from "./SelectModeGetAccount.module.scss";
import { setNetwork } from "../../store/actions";

class SelectModeGetAccount extends Component {
  state = {
    isCreate: true,
    openNetworkSelection: false
  };

  render() {
    const { changeClose, accounts = [], setNetwork } = this.props;

    const { isCreate, openNetworkSelection } = this.state;

    return (
      <div className={styles.SelectModeGetAccount}>
        {accounts.length ? (
          <div className={styles.close} onClick={changeClose}>
            <i className="iconfont iconClose" />
          </div>
        ) : null}

        <div className={styles.bitx}>
          <img alt="" src={BitX} height={55} />
        </div>
        <div className={styles.routerbutton}>
          <div>
            <button
              onClick={() =>
                this.setState({ isCreate: true, openNetworkSelection: true })
              }
            >
              创建账户
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.setState({ isCreate: false, openNetworkSelection: true })
              }
            >
              导入账户
            </button>
          </div>
        </div>

        {openNetworkSelection ? (
          <section
            className={styles.networkSelection}
            onClick={() => this.setState({ openNetworkSelection: false })}
          >
            <main onClick={event => event.stopPropagation()}>
              <header>
                <h3>选择网络</h3>
                <span
                  onClick={() => this.setState({ openNetworkSelection: false })}
                >
                  <i className="iconfont iconClose" />
                </span>
              </header>
              <div>
                <RouterGo
                  onClick={() => setNetwork("mainnet")}
                  go={{
                    pathname: isCreate ? PATH.createaccount : PATH.importaccount
                  }}
                >
                  主网
                </RouterGo>
                <div className={styles.separator} />
                <RouterGo
                  onClick={() => setNetwork("testnet")}
                  go={{
                    pathname: isCreate ? PATH.createaccount : PATH.importaccount
                  }}
                >
                  测试网
                </RouterGo>
              </div>
            </main>
          </section>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNetwork: network => dispatch(setNetwork(network))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SelectModeGetAccount);
