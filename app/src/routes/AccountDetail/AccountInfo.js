import React from "react";
import { Clipboard, RouterGo } from "../../components";
import * as styles from "./AccountInfo.module.scss";

export default function AccountInfo(props) {
  const { currentAccount = {} } = props;
  const isTestNet = currentAccount.network !== "mainnet";

  return (
    <div className={styles.AccountInfo}>
      <div className={styles.amount}>
        {currentAccount.balanceShow}
        <span>DOGE</span>
      </div>
      <div className={styles.address}>
        <Clipboard>{currentAccount.address}</Clipboard>
      </div>
      <div className={styles.watchother}>
        <RouterGo
          isOutSide
          go={{
            pathname: `https://chain.so/address/${
              isTestNet ? "DOGETEST" : "DOGE"
            }/${currentAccount.address}/`
          }}
        >
          在浏览器中查看
        </RouterGo>
      </div>
    </div>
  );
}
