import React from "react";

export default function ExportKey(props) {
  return (
    <div
      className={props.className}
      onClick={e => {
        e.stopPropagation();
        props.onClick();
      }}
    >
      <i className="iconfont icondaochu" />
      <span>导出私钥</span>
    </div>
  );
}
