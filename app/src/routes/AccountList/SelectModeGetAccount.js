import React, { Component } from "react";
import { RouterGo } from "../../components";
import { PATH } from "../../constants";
import BitX from "../../resources/Bitx.png";
import * as styles from "./SelectModeGetAccount.module.scss";

class SelectModeGetAccount extends Component {
  render() {
    const { changeClose, accounts = [] } = this.props;
    return (
      <div className={styles.SelectModeGetAccount}>
        {accounts.length ? (
          <div className={styles.close} onClick={changeClose}>
            <i className="iconfont iconClose" />
          </div>
        ) : null}

        <div className={styles.bitx}>
          <img src={BitX} height={55} />
        </div>
        <div className={styles.routerbutton}>
          <div>
            <RouterGo go={{ pathname: PATH.createaccount }}>
              <button>创建账户</button>
            </RouterGo>
          </div>
          <div>
            <RouterGo go={{ pathname: PATH.importaccount }}>
              <button>导入账户</button>
            </RouterGo>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectModeGetAccount;
