import React, { useEffect, useRef } from "react";
import QRious from "qrious";
import * as styles from "./AccountReceive.module.scss";

export default function AccountAccept(props) {
  const element = useRef(null);
  const { currentAccount } = props;

  useEffect(() => {
    new QRious({
      size: 190,
      element: element.current,
      value: currentAccount.address
    });
  }, []);

  return (
    <div className={styles.AccountReceive}>
      <canvas ref={element} />
      <div className={styles.desc}>地址二维码</div>
    </div>
  );
}
