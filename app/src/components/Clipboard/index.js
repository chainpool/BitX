import React, { useEffect } from "react";
import ClipboardJS from "clipboard";
import classNames from "classnames";
import { Tooltip } from "../index";
import uniqid from "uniqid";
import * as styles from "./index.module.scss";

export default function Clipboard(props) {
  useEffect(() => {
    const clipBoard = new ClipboardJS(".clipboard");

    return function() {
      clipBoard.destroy();
    };
  }, []);

  const uid = props.id || uniqid("clipboard_");

  const { children, className, width } = props;
  return (
    <span className={classNames(styles.clipboard, className)}>
      <span
        id={uid}
        className={classNames(styles.children, width ? styles.ellipse : null)}
        style={{ width }}
      >
        {children}
      </span>
      <Tooltip tip="复制成功" type="click">
        <i
          className="clipboard iconfont iconfuzhi"
          data-clipboard-target={`#${uid}`}
          style={{ marginLeft: children ? 8 : null, cursor: "pointer" }}
        />
      </Tooltip>
    </span>
  );
}
