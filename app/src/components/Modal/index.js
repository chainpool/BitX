import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as styles from './index.module.scss';
import { setModal } from '../../store/actions';

class Modal extends Component {
  render() {
    const { title, setModal, modal: { show } = {} } = this.props;
    return (
      show && (
        <div className={styles.Modalcontainer}>
          <div className={styles.content}>
            <div
              className={styles.header}
              onClick={() => {
                setModal(false);
              }}>
              <div className={styles.title}>{title}</div>
              <i className="iconfont iconClose" />
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (status) => dispatch(setModal({ show: status })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
