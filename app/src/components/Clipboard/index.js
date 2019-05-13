import React, { PureComponent } from 'react';
import ClipboardJS from 'clipboard';
import classNames from 'classnames';
import { Tooltip } from '../index';
import uniqid from 'uniqid';
import * as styles from './index.module.scss';

export default class Clipboard extends PureComponent {
  state = {
    uid: this.props.id || uniqid('clipboard_'),
  };

  componentDidMount() {
    const { outInner = '' } = this.props;
    new ClipboardJS(outInner ? '.outerInner' : '.clipboard');
  }

  render() {
    const { uid } = this.state;
    const { children, className, width, outInner = '' } = this.props;
    return (
      <span className={classNames(styles.clipboard, className)}>
        <span
          id={uid}
          className={classNames(styles.children, width ? styles.ellipse : null)}
          style={{ width }}>
          {children}
        </span>
        <Tooltip tip="复制成功" type="click">
          <i
            className="clipboard iconfont iconfuzhi"
            data-clipboard-target={`#${uid}`}
            style={{ marginLeft: children ? 8 : null, cursor: "pointer" }}
          />
          {outInner ? (
            <span className="outerInner" data-clipboard-target={`#${uid}`}>
              {outInner}
            </span>
          ) : null}
        </Tooltip>
      </span>
    );
  }
}
