import React from "react";

export default function ExportKey(props) {
  return (
    <div
      className={props.className}
      onClick={e => {
        props.handleStepChange(2);
      }}
    >
      <i className="iconfont iconexport" />
      <span>导出私钥</span>
    </div>
  );
}
