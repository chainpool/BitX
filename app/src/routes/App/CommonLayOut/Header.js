import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./Header.module.scss";
import { PATH } from "../../../constants";
import { isFunction } from "../../../utils";
import classnames from "classnames";

export default function Header(props) {
  const {
    history,
    history: {
      location: { pathname }
    }
  } = props;

  const { show: showMenu, cb } = useSelector(state => state.menu);
  const goBack = useSelector(state => state.goBack);
  const showBack = pathname !== PATH.home;

  const goBackMenu = showBack && (
    <i
      className={classnames("iconfont iconback1", styles.back)}
      onClick={() => {
        if (isFunction(goBack)) {
          goBack();
        } else {
          history.goBack();
        }
      }}
    />
  );

  const menu = showMenu && (
    <i
      className={classnames("iconfont iconmore", styles.menu)}
      onClick={() => cb()}
    />
  );

  return (
    <div className={styles.Header}>
      {goBackMenu}
      {props.children}
      {menu}
    </div>
  );
}
