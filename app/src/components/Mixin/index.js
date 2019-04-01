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
    isFunction(this.startInit) && this.startInit();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
}
