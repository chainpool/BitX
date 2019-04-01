import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { isNumber, isFunction } from '../../utils';
import * as styles from './index.less';

@withRouter
class RouterGo extends PureComponent {
  render() {
    const {
      children,
      history,
      Ele = 'span',
      go = {},
      go: { pathname } = {},
      className,
      isOutSide = false,
      onClick,
    } = this.props;
    const routerGo = (payload) => {
      if (isNumber(payload)) return history.go(payload);
      payload && history.push(payload);
    };

    const url = !/http/.test(pathname) ? `http://${pathname}` : pathname;

    return isOutSide ? (
      <a className={styles.url} rel="noopener noreferrer" href={url} target="_blank">
        {children || pathname}
      </a>
    ) : (
      <Ele
        style={{ cursor: 'pointer' }}
        className={className}
        onClick={() => {
          routerGo(go);
          isFunction(onClick) && onClick();
        }}>
        {children}
      </Ele>
    );
  }
}

export default RouterGo;
