import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styles from "./index.module.scss";
import { setModal } from "../../store/actions";
import { Device } from "../../utils";
import classNames from "classnames";

function Modal(props) {
  const { title, children, className, closeCb } = props;

  const { show } = useSelector(state => state.modal) || {};
  const dispatch = useDispatch();

  return (
    show && (
      <div
        className={classNames(
          styles.Modalcontainer,
          Device.isMobile() ? styles.rootModalMobile : styles.rootModalDesktop
        )}
        id="rootModal"
      >
        <div className={classNames(styles.content, className)}>
          {title && (
            <div
              className={styles.header}
              onClick={() => {
                closeCb && closeCb();
                dispatch(setModal({ show: false }));
              }}
            >
              <div className={styles.title}>{title}</div>
              <i className="iconfont iconClose" />
            </div>
          )}
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
