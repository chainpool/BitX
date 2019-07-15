import React, { useState } from "react";
import * as styles from "./index.module.scss";
import AccountSend from "./AccountSend";
import AccountReceive from "./AccountReceive";

export default function OperationSwitch(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={styles.content}
      style={{ background: activeIndex === 1 ? "white" : "" }}
    >
      <ul className={styles.selectmode}>
        {["发送", "接收"].map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? styles.active : null}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      {activeIndex === 0 && <AccountSend {...props} />}
      {activeIndex === 1 && <AccountReceive {...props} />}
    </div>
  );
}
