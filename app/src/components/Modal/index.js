import React, { Component } from "react";
import { connect } from "react-redux";

import * as styles from "./index.module.scss";
import { setModal } from "../../store/actions";
import { Device } from "../../utils";
import classNames from "classnames";

class Modal extends Component {
  render() {
    const {
      title,
      setModal,
      modal: { show } = {},
      children,
      className,
      closeCb
    } = this.props;
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
                  setModal(false);
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
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModal: status => dispatch(setModal({ show: status }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
