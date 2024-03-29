import React, { PureComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import { isFunction } from '../../utils';
import uniqid from 'uniqid';
import * as styles from './index.module.scss';

export default class Tooltip extends PureComponent {
  state = {
    uid: uniqid('tooltip_'),
  };

  render() {
    const { uid } = this.state;
    const {
      children,
      onClick,
      type = 'hover',
      size = 'middle',
      offset = {},
      place = 'bottom',
      tip = 'tooltip提示',
    } = this.props;

    return (
      <>
        {type === 'hover' ? (
          <>
            <span data-for={uid} data-tip={tip} className={styles.tip}>
              {children}
            </span>
            <ReactTooltip
              effect="solid"
              offset={offset}
              multiline
              id={uid}
              place={place}
              className={classNames(styles.tool, styles[size])}>
              {tip}
            </ReactTooltip>
          </>
        ) : (
          <>
            <span id={uid} data-tip={tip} className={styles.tip}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  if (onClick && isFunction(onClick)) {
                    onClick((tip) => {
                      tip &&
                        this.setState(
                          {
                            tip,
                          },
                          () => {
                            ReactTooltip.show(document.getElementById(uid));
                          },
                        );
                    });
                  } else {
                    ReactTooltip.show(document.getElementById(uid));
                  }
                }}>
                {children}
              </span>
            </span>

            <ReactTooltip
              className={styles.content}
              event="none"
              effect="solid"
              isCapture={true}
              delayShow={150}
              afterShow={() => {
                setTimeout(() => {
                  ReactTooltip.hide(document.getElementById(uid));
                }, 500);
              }}
            />
          </>
        )}
      </>
    );
  }
}
