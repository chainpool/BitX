import React from "react";
import { Mixin, RouterGo } from "../../components";
import { setBlankSpace } from "../../utils";
import SelectModeGetAccount from "./SelectModeGetAccount";
import * as styles from "./index.module.scss";
import { PATH } from "../../constants";

class AccountList extends Mixin {
  pageTitle = "BitX";
  constructor(props) {
    super(props);
    const { accounts = [] } = props;
    this.state = {
      close: !!accounts.length
    };
  }

  startInit = () => {
    this.props.getAllAccountBalance();
  };

  changeClose = () => {
    this.setState(prevState => ({
      close: !prevState.close
    }));
  };

  render() {
    const { changeClose } = this;
    const { close } = this.state;
    const { accounts = [] } = this.props;

    return (
      <div className={styles.AccountList}>
        <div className={styles.listtitle}>
          <div>账户列表</div>
          <div onClick={changeClose}>
            <i className="iconfont iconadd" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <ul>
          {accounts.map((item, index) => (
            <RouterGo
              key={index}
              Ele="li"
              go={{
                pathname: PATH.accountdetail,
                search: `?address=${item.address}`
              }}
            >
              <div className={styles.seperate} />
              <div className={styles.desc}>
                <div className={styles.title}>
                  <span className={styles.name}>{item.name}</span>
                  {item.network !== "mainnet" ? (
                    <span className={styles.badge}>测试网</span>
                  ) : null}
                </div>
                <div className={styles.amount}>
                  {setBlankSpace(item.balanceShow, "BTC")}
                </div>
              </div>
              <div className={styles.address}>{item.address}</div>
            </RouterGo>
          ))}
        </ul>
        {close ? null : (
          <SelectModeGetAccount {...this.props} changeClose={changeClose} />
        )}
      </div>
    );
  }
}

export default AccountList;
