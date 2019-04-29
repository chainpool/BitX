import React from "react";
import { Clipboard, Mixin, RouterGo } from "../../components";
import * as styles from "./AccountInfo.module.scss";

export default class AccountInfo extends Mixin {
  render() {
    const { currentAccount = {} } = this.props;
    const isTestnet = currentAccount.network !== "mainnet";

    return (
      <div className={styles.AccountInfo}>
        <div className={styles.amount}>
          {currentAccount.balanceShow}
          <span>BTC</span>
        </div>
        <div className={styles.address}>
          <Clipboard>{currentAccount.address}</Clipboard>
        </div>
        <div className={styles.watchother}>
          <RouterGo
            isOutSide
            go={{
              pathname: `https://live.blockcypher.com/btc${
                isTestnet ? "-testnet" : ""
              }/address/${currentAccount.address}/`
            }}
          >
            在浏览器中查看
          </RouterGo>
        </div>
      </div>
    );
  }
}
