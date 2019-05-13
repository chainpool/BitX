import React from "react";

export default function ViewPrivateKey({ privateKey, styles, onClose }) {
  return (
    <div onClick={e => e.stopPropagation()}>
      <div className={styles.title}>
        <span>私钥</span>
        <i
          className="iconfont iconClose"
          onClick={() => onClose()}
          style={{
            cursor: "pointer"
          }}
        />
      </div>
      <span className={styles.private_key}>{privateKey}</span>
      <span className={styles.warning}>
        不要将您的私钥存储在您的电脑上，或者网上某处。任何能够访问您备份私钥的人就能取用您的资金
      </span>
    </div>
  );
}
