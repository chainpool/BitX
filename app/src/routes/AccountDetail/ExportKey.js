import React from "react";

export default function ExportKey(props) {
  return (
    <div
      className={props.className}
      onClick={e => {
        e.stopPropagation()
        props.handleStepChange("inputPassword");
      }}
    >
      <i className="iconfont iconexport" />
      <span>导出私钥</span>
    </div>
  );
}
