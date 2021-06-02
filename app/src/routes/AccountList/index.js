import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterGo } from "../../components";
import { setBlankSpace } from "../../utils";
import SelectModeGetAccount from "./SelectModeGetAccount";
import * as styles from "./index.module.scss";
import { PATH } from "../../constants";
import { getAllAccountBalance } from "../../store/actions";

function AccountList(props) {
  const [close, setClose] = useState((props.accounts || []).length > 0);
  const dispatch = useDispatch();

  useEffect(() => {
    props.setPageTitle("BitX");
  }, []);

  useEffect(() => {
    dispatch(getAllAccountBalance());
  }, []);

  return (
    <div className={styles.AccountList}>
      <div className={styles.listtitle}>
        <div>账户列表</div>
        <div onClick={() => setClose(!close)}>
          <i className="iconfont iconadd" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <ul>
        {(props.accounts || []).map((item, index) => (
          <RouterGo
            key={index}
            Ele="li"
            go={{
              pathname: PATH.accountdetail,
              search: `?address=${item.address}`
            }}
          >
            <div className={styles.seperate} />
            <div className={styles.desc}>
              <div className={styles.title}>
                <span className={styles.name}>{item.name}</span>
                {item.network !== "mainnet" ? (
                  <span className={styles.badge}>测试网</span>
                ) : null}
              </div>
              <div className={styles.amount}>
                {setBlankSpace(item.balanceShow, "BTC")}
              </div>
            </div>
            {console.dir(item.address)}
            <div className={styles.address}>{item.address.toString()}</div>
          </RouterGo>
        ))}
      </ul>
      {close ? null : (
        <SelectModeGetAccount
          {...props}
          changeClose={() => {
            setClose(!close);
          }}
        />
      )}
    </div>
  );
}

export default AccountList;
