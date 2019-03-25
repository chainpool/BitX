import React, { Component } from 'react';
import QRious from 'qrious';

class Receive extends Component {
  componentDidMount() {
    new QRious({
      element: document.getElementById('qr'),
      value: this.props.address,
    });
  }

  render() {
    return (
      <div>
        <canvas id="qr" />
        <p>地址二维码</p>
      </div>
    );
  }
}

export default Receive;
