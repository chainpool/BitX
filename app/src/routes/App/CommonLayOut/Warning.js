import React from "react";
import * as styles from "./warning.module.scss";

export default function(props) {
  return (
    <div className={styles.wrapper}>
      <main>
        <h3>用户须知</h3>
        <p>
          BitX只作为跨链充值ChainX钱包的中转钱包使用，不建议用户使用BitX钱包存储DOGE；也不建议用户导入其他钱包的私钥到BitX中。
        </p>
        <button onClick={props.setSeen}>我已了解</button>
      </main>
    </div>
  );
}
