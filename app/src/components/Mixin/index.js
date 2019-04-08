import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFunction } from '../../utils';

export default class Mixin extends Component {
  constructor(props) {
    super(props);
    this._isMounted = true;
  }

  componentDidMount() {
    if (this.pageTitle && isFunction(this.props.setPageTitle)) {
      this.props.setPageTitle(this.pageTitle);
    }
    if (this.state && this.state.step && isFunction(this.props.setGoBack)) {
      this.props.setGoBack(() => {
        if (this.state.step > 1) {
          this.setState({
            step: this.state.step - 1,
          });
        } else if (this.props.history) {
          this.props.history.goBack();
        }
      });
    }
    isFunction(this.startInit) && this.startInit();
  }

  openModal = ({ name, data }) => {
    if (this.props.setModal) {
      this.props.setModal({
        name,
        data,
        show: true,
      });
    } else {
      console.log('this.props.setModal不存在，请把容器组件的setModal传递给当前组件');
    }
  };

  closeModal = () => {
    if (this.props.setModal) {
      this.props.setModal({
        name: '',
        data: '',
        show: false,
      });
    } else {
      console.log('this.props.setModal不存在，请把容器组件的setModal传递给当前组件');
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
}
