import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RouterGo } from "../../components";
import { PATH } from "../../constants";
import BitX from "../../resources/Bitx.png";
import * as styles from "./SelectModeGetAccount.module.scss";
import { setNetwork } from "../../store/actions";

function SelectModeGetAccount(props) {
  const [isCreate, setIsCreate] = useState(true);
  const [openNetworkSelection, setOpenNetworkSelection] = useState(false);
  const dispatch = useDispatch();

  const { changeClose, accounts = [] } = props;

  return (
    <div className={styles.SelectModeGetAccount}>
      {accounts.length ? (
        <div className={styles.close} onClick={changeClose}>
          <i className="iconfont iconClose" style={{ cursor: "pointer" }} />
        </div>
      ) : null}

      <div className={styles.bitx}>
        <img alt="" src={BitX} height={55} />
      </div>
      <div className={styles.routerbutton}>
        <div>
          <button
            onClick={() => {
              setIsCreate(true);
              setOpenNetworkSelection(true);
            }}
          >
            创建账户
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setIsCreate(false);
              setOpenNetworkSelection(true);
            }}
          >
            导入账户
          </button>
        </div>
      </div>

      {openNetworkSelection ? (
        <section
          className={styles.networkSelection}
          onClick={() => setOpenNetworkSelection(false)}
        >
          <main onClick={event => event.stopPropagation()}>
            <header>
              <h3>选择网络</h3>
              <span onClick={() => setOpenNetworkSelection(false)}>
                <i
                  className="iconfont iconClose"
                  style={{ cursor: "pointer" }}
                />
              </span>
            </header>
            <div>
              <RouterGo
                onClick={() => dispatch(setNetwork("mainnet"))}
                go={{
                  pathname: isCreate ? PATH.createaccount : PATH.importaccount
                }}
              >
                主网
              </RouterGo>
              <div className={styles.separator} />
              <RouterGo
                onClick={() => dispatch(setNetwork("testnet"))}
                go={{
                  pathname: isCreate ? PATH.createaccount : PATH.importaccount
                }}
              >
                测试网
              </RouterGo>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
}

export default SelectModeGetAccount;
