import React from "react";

export default function(props) {
  return (
    <div
      className={props.className}
      style={{ display: "flex", alignItems: "center" }}
      onClick={e => {
        e.stopPropagation();
        props.onClick();
      }}
    >
      <i
        className="iconfont iconbaseline-delete_forever-px"
        style={{ fontSize: "26px" }}
      />
      <span>删除账户</span>
    </div>
  );
}
