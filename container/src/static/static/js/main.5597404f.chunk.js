(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    116: function(e, t, n) {
      e.exports = {
        KnowAbout: "KnowAbout_KnowAbout__2632J",
        content: "KnowAbout_content__3ELhE"
      };
    },
    117: function(e, t, n) {
      e.exports = {
        AccountReceive: "AccountReceive_AccountReceive__1lIaP",
        desc: "AccountReceive_desc__3K_de"
      };
    },
    170: function(e, t, n) {
      e.exports = { url: "RouterGo_url__18SS2" };
    },
    173: function(e, t, n) {
      e.exports = n.p + "static/media/Bitx.41fc5ea2.png";
    },
    175: function(e, t, n) {
      e.exports = { CreateAccount: "CreateAccount_CreateAccount__Lrx00" };
    },
    177: function(e, t, n) {
      e.exports = { wrapper: "warning_wrapper__1YjSX" };
    },
    182: function(e, t, n) {
      e.exports = n(387);
    },
    188: function(e, t, n) {},
    216: function(e, t) {},
    218: function(e, t) {},
    246: function(e, t) {},
    249: function(e, t) {},
    26: function(e, t, n) {
      e.exports = {
        AccountDetail: "AccountDetail_AccountDetail__zADpZ",
        content: "AccountDetail_content__2gECl",
        selectmode: "AccountDetail_selectmode__35O3K",
        active: "AccountDetail_active__3jV8d",
        modal: "AccountDetail_modal__2adfV",
        title: "AccountDetail_title__1-_ml",
        menu: "AccountDetail_menu__1Pmz1",
        export_key: "AccountDetail_export_key__eYv0y",
        private_key: "AccountDetail_private_key__39U7E",
        warning: "AccountDetail_warning__2Mlcb"
      };
    },
    32: function(e, t, n) {
      e.exports = {
        ImportMnemonic: "ImportMnemonicOrSecret_ImportMnemonic__2krIe",
        desc: "ImportMnemonicOrSecret_desc__26Rhe",
        generatewords: "ImportMnemonicOrSecret_generatewords__3z2L1",
        errwarn: "ImportMnemonicOrSecret_errwarn__1lpB7"
      };
    },
    33: function(e, t, n) {
      e.exports = {
        AccountList: "AccountList_AccountList__3U8YL",
        listtitle: "AccountList_listtitle__2KiWx",
        seperate: "AccountList_seperate__OuUSy",
        desc: "AccountList_desc__3l4EO",
        title: "AccountList_title__3uWkq",
        badge: "AccountList_badge__3Cjr9",
        name: "AccountList_name__ensnV",
        amount: "AccountList_amount__2igYK",
        address: "AccountList_address__3tP2j"
      };
    },
    34: function(e, t, n) {
      e.exports = {
        AccountSend: "AccountSend_AccountSend__S9Kg2",
        userInput: "AccountSend_userInput__20k1k",
        addreturn: "AccountSend_addreturn__c4haL",
        returncontent: "AccountSend_returncontent__29AU1",
        input: "AccountSend_input__VE8wO",
        ASCII: "AccountSend_ASCII__2rBUi",
        label: "AccountSend_label__EM9Bf",
        button: "AccountSend_button__29T7s",
        warning: "AccountSend_warning__2Q2PF"
      };
    },
    35: function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "a", function() {
          return m;
        });
        var a = n(46),
          r = n.n(a),
          c = n(112),
          o = n.n(c),
          s = n(54),
          i = n.n(s),
          u = n(10),
          l = n.n(u),
          d = n(77);
        function p(e) {
          return e === l.a.networks.bitcoin
            ? "mainnet"
            : e === l.a.networks.testnet
            ? "testnet"
            : "";
        }
        var m = {
          generateMnemonic: function() {
            return r.a.generateMnemonic();
          },
          generateAccount: function(t) {
            var n,
              a = t.name,
              c = t.mnemonic,
              s = t.password,
              u = t.wif,
              d =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l.a.networks.testnet,
              m = "m/44'/1'/0'/0/0";
            d === l.a.networks.bitcoin && (m = "m/44'/0'/0'/0/0");
            var f = { N: 128, r: 8, p: 8 };
            if (a && c && s) {
              var h = r.a.mnemonicToSeed(c),
                v = o.a.fromSeed(h, d).derivePath(m),
                _ = l.a.payments.p2pkh({ pubkey: v.publicKey, network: d }),
                E = i.a.encrypt(v.privateKey, !0, s, null, f);
              n = {
                name: a,
                address: _.address,
                encryptedKey: E,
                network: p(d)
              };
            } else if (a && u && s) {
              var g;
              (g = /^(0x)?[\da-zA-Z]{64}$/.test(u)
                ? l.a.ECPair.fromPrivateKey(e.from(u, "hex"), { network: d })
                : l.a.ECPair.fromWIF(u, d)),
                (n = {
                  name: a,
                  address: l.a.payments.p2pkh({
                    pubkey: g.publicKey,
                    network: d
                  }).address,
                  encryptedKey: i.a.encrypt(
                    g.privateKey,
                    g.compressed,
                    s,
                    null,
                    f
                  ),
                  network: p(d)
                });
            }
            return n;
          },
          decrypt: function(e, t) {
            return i.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
          },
          decryptPair: function(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : l.a.networks.testnet,
              a = m.decrypt(e, t);
            return l.a.ECPair.fromPrivateKey(a.privateKey, {
              compressed: a.compressed,
              network: n
            });
          },
          sign: function(e, t, n, a, r, c, o, s) {
            var i =
              arguments.length > 8 && void 0 !== arguments[8]
                ? arguments[8]
                : "mainnet";
            i = "mainnet" === i ? l.a.networks.bitcoin : l.a.networks.testnet;
            var u = m.decryptPair(o, s, i);
            return Object(d.a)(e, t, n, a, r, c, u, i);
          }
        };
      }.call(this, n(9).Buffer));
    },
    385: function(e, t, n) {},
    387: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        o = n(110),
        s = n.n(o),
        i = n(166),
        u = n.n(i),
        l = (n(187), n(188), n(3)),
        d = n(4),
        p = n(6),
        m = n(5),
        f = n(7),
        h = n(391),
        v = n(392),
        _ = n(178),
        E = n(78),
        g = n(389),
        b = n(390),
        k = n(393),
        w = n(15),
        y = "/",
        O = "/createaccount",
        A = "/importAccount",
        N = "/accountdetail",
        S = n(64),
        j = n.n(S),
        M = n(63),
        C = n(168),
        x = n.n(C),
        I = n(115);
      window.require && (a = window.require("electron").ipcRenderer);
      var P = a,
        T = n(35),
        B = n(46),
        K = n.n(B),
        D = n(10),
        U = n.n(D),
        L = n(54),
        q = n.n(L),
        G = n(169),
        R = n.n(G),
        F = {
          required: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u5fc5\u586b";
            return e || 0 === e ? "" : t;
          },
          equal: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u4e0d\u76f8\u7b49";
            return e && t ? (e === t ? "" : n) : "";
          },
          strictEqual: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u4e0d\u76f8\u7b49";
            return e === t ? "" : n;
          },
          smaller: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u4f59\u989d\u4e0d\u8db3";
            return isNaN(t) ? n : Number(e) >= Number(t) ? n : "";
          },
          smallerOrEqual: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u4f59\u989d\u4e0d\u8db3";
            if (!isNaN(e) && !isNaN(t)) return Number(e) > Number(t) ? n : "";
          },
          characterLength: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0,
              a =
                e.length >= t
                  ? ""
                  : "\u6700\u5c11".concat(t, "\u4e2a\u5b57\u7b26");
            return (a =
              e.length > n
                ? "\u6700\u591a".concat(n, "\u4e2a\u5b57\u7b26")
                : a);
          },
          isBTCAddress: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u5730\u5740\u683c\u5f0f\u9519\u8bef";
            return R.a.validate(e, "BTC", "test") ? "" : t;
          },
          isValidMnemonic: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u52a9\u8bb0\u8bcd\u683c\u5f0f\u9519\u8bef";
            return K.a.validateMnemonic(e) ? "" : t;
          },
          isValidPrivateKey: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : U.a.networks.testnet,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "\u79c1\u94a5\u683c\u5f0f\u9519\u8bef";
            if (/^[\da-zA-Z]{64}$/.test(e)) return "";
            try {
              return U.a.ECPair.fromWIF(e, t), "";
            } catch (a) {
              return n;
            }
          },
          isValidPassword: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u5bc6\u7801\u9519\u8bef";
            try {
              q.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
            } catch (a) {
              return n;
            }
          },
          check: function(e) {
            return function() {
              if (F[e]) return F[e].apply(F, arguments);
            };
          }
        },
        V = {
          generateMnemonic: function() {
            return P ? P.sendSync("GENERATE_MNEMONIC") : T.a.generateMnemonic();
          },
          generateAccount: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : U.a.networks.testnet;
            return P
              ? JSON.parse(P.sendSync("GENERATE_ACCOUNT", e))
              : T.a.generateAccount(e, t);
          },
          saveAccount: function(e) {
            P
              ? P.send("SAVE_ACCOUNT", JSON.stringify(e))
              : ae.set("accounts", e);
          },
          getAccount: function() {
            return P
              ? JSON.parse(P.sendSync("GET_ACCOUNT"))
              : ae.get("accounts");
          },
          sign: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return P ? P.sendSync("SIGN", t) : T.a.sign.apply(T.a, t);
          },
          isValidPassword: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return P
              ? P.sendSync("IS_VALID_PASSWORD", t)
              : F.check("isValidPassword").apply(void 0, t);
          },
          update: function() {
            P && P.send("UPDATE");
          },
          forceUpdate: function() {
            P && P.send("FORCE_UPDATE");
          }
        };
      P &&
        (P.on("isForceUpdate", function() {
          window.confirm(
            "\u5df2\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff0c\u662f\u5426\u7acb\u5373\u5b89\u88c5?"
          ) && V.forceUpdate();
        }),
        P.on("autoUpdater", function(e, t) {}));
      var W,
        H = n(14),
        X = n.n(H),
        J = n(23),
        z = n(25),
        Q = n(83),
        Y = n(53),
        Z = n.n(Y),
        $ = function(e) {
          var t = e.url,
            n = e.method,
            a = void 0 === n ? "POST" : n,
            r = e.methodAlias,
            c = e.params,
            o = void 0 === c ? [] : c,
            s = e.body,
            i = e.timeOut,
            u = void 0 === i ? 1e4 : i,
            l = Object(Q.a)(e, [
              "url",
              "method",
              "methodAlias",
              "params",
              "body",
              "timeOut"
            ]),
            d = Z()(),
            p = s
              ? JSON.stringify(s)
              : JSON.stringify({ id: d, jsonrpc: "2.0", method: r, params: o }),
            m = function() {
              return fetch(
                t,
                Object(z.a)(
                  {
                    method: a,
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    }
                  },
                  "GET" === a.toUpperCase() ? {} : { body: p },
                  l
                )
              )
                .then(
                  (function() {
                    var e = Object(J.a)(
                      X.a.mark(function e(t) {
                        var n;
                        return X.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(t.status >= 200 && t.status < 300)) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return", t.json());
                              case 4:
                                return (e.next = 6), t.json();
                              case 6:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    Promise.reject({
                                      status: t.status,
                                      message: n
                                    })
                                  )
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
                .catch(function(e) {
                  return Promise.reject(e.message || e);
                });
            };
          return u
            ? Promise.race([
                m(),
                new Promise(function(e, t) {
                  setTimeout(function() {
                    t("\u8bf7\u6c42\u8d85\u65f6");
                  }, u);
                })
              ])
            : m();
        },
        ee = function(e) {
          return isNaN(e) || void 0 === e || "" === e || e === {};
        },
        te = function(e) {
          return "function" === typeof e;
        },
        ne = function(e) {
          return "string" === typeof e;
        },
        ae = {
          get: function(e) {
            return j.a.get(e);
          },
          set: function(e, t) {
            j.a.set(e, t);
          },
          remove: function(e) {
            j.a.remove(e);
          },
          clearAll: function() {
            j.a.clearAll();
          }
        },
        re = {
          toPrecision: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              (t = Number(t)),
              ee(e) || ee(t) || isNaN(e)
                ? ""
                : n
                ? new M.BigNumber(e).multipliedBy(Math.pow(10, t)).toFixed(0)
                : new M.BigNumber(e).dividedBy(Math.pow(10, t)).toFixed(t)
            );
          },
          toBtcPrecision: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return re.toPrecision(e, 8, t);
          }
        },
        ce = function() {
          return I.a.mobile();
        },
        oe = (function(e) {
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = Object(p.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).openModal = function(e) {
                var t = e.name,
                  a = e.data;
                n.props.setModal &&
                  n.props.setModal({ name: t, data: a, show: !0 });
              }),
              (n.closeModal = function(e) {
                n.props.setModal &&
                  n.props.setModal({ name: "", data: "", show: !1 });
              }),
              (n.changeState = function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = arguments.length > 1 ? arguments[1] : void 0;
                n._isMounted &&
                  n.setState(e, function() {
                    te(t) && t(e);
                  });
              }),
              (n._isMounted = !0),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.pageTitle &&
                    te(this.props.setPageTitle) &&
                    this.props.setPageTitle(this.pageTitle),
                    this.state &&
                      this.state.step &&
                      te(this.props.setGoBack) &&
                      this.props.setGoBack(function() {
                        e.state.step > 1 && e._isMounted
                          ? e.setState({ step: e.state.step - 1 })
                          : e.props.history && e.props.history.goBack();
                      }),
                    te(this.startInit) && this.startInit();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this._isMounted = !1;
                }
              }
            ]),
            t
          );
        })(r.Component),
        se = n(388),
        ie = n(170),
        ue =
          Object(se.a)(
            (W = (function(e) {
              function t() {
                return (
                  Object(l.a)(this, t),
                  Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
                );
              }
              return (
                Object(f.a)(t, e),
                Object(d.a)(t, [
                  {
                    key: "render",
                    value: function() {
                      var e = this.props,
                        t = e.children,
                        n = e.history,
                        a = e.Ele,
                        r = void 0 === a ? "span" : a,
                        o = e.go,
                        s = void 0 === o ? {} : o,
                        i = e.go,
                        u = (i = void 0 === i ? {} : i).pathname,
                        l = e.className,
                        d = e.isOutSide,
                        p = void 0 !== d && d,
                        m = e.onClick,
                        f = /http/.test(u) ? u : "http://".concat(u);
                      return p
                        ? c.a.createElement(
                            "a",
                            {
                              className: ie.url,
                              rel: "noopener noreferrer",
                              href: f,
                              target: "_blank",
                              onClick: function(e) {
                                if (P) {
                                  var t = window.electron.shell;
                                  e.preventDefault(), t.openExternal(f);
                                }
                              }
                            },
                            t || u
                          )
                        : c.a.createElement(
                            r,
                            {
                              style: { cursor: "pointer" },
                              className: l,
                              onClick: function() {
                                !(function(e) {
                                  if ("number" === typeof e) return n.go(e);
                                  e && n.push(e);
                                })(s),
                                  te(m) && m();
                              }
                            },
                            t
                          );
                    }
                  }
                ]),
                t
              );
            })(r.PureComponent))
          ) || W,
        le = n(41),
        de = n(16),
        pe = n.n(de),
        me = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.label,
                    n = e.errMsg,
                    a = e.value,
                    r = e.onChange,
                    o = e.onBlur,
                    s = e.prefix,
                    i = e.suffix,
                    u = e.placeholder,
                    l = e.isPassword,
                    d = e.isTextArea,
                    p = e.className,
                    m = Object(Q.a)(e, [
                      "label",
                      "errMsg",
                      "value",
                      "onChange",
                      "onBlur",
                      "prefix",
                      "suffix",
                      "placeholder",
                      "isPassword",
                      "isTextArea",
                      "className"
                    ]),
                    f = d ? "textarea" : "input";
                  return c.a.createElement(
                    "div",
                    { className: le.container },
                    t && c.a.createElement("div", { className: le.label }, t),
                    c.a.createElement(
                      "div",
                      { className: le.content },
                      s &&
                        c.a.createElement("div", { className: le.prefix }, s),
                      c.a.createElement(
                        f,
                        Object.assign(
                          {
                            className: pe()(le.input, p),
                            type: l ? "password" : "text",
                            placeholder: u,
                            value: a,
                            onChange: function(e) {
                              r(e.target.value.trim());
                            },
                            onBlur: o
                          },
                          m
                        )
                      ),
                      i && c.a.createElement("div", { className: le.suffix }, i)
                    ),
                    c.a.createElement("div", { className: le.errMsg }, n)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        fe = n(172),
        he = n.n(fe),
        ve = n(84),
        _e = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: n.props.id || Z()("clipboard_") }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.outInner,
                    t = void 0 === e ? "" : e;
                  new he.a(t ? ".outerInner" : ".clipboard");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.uid,
                    t = this.props,
                    n = t.children,
                    a = t.className,
                    r = t.width,
                    o = t.outInner,
                    s = void 0 === o ? "" : o;
                  return c.a.createElement(
                    "span",
                    { className: pe()(ve.clipboard, a) },
                    c.a.createElement(
                      "span",
                      {
                        id: e,
                        className: pe()(ve.children, r ? ve.ellipse : null),
                        style: { width: r }
                      },
                      n
                    ),
                    c.a.createElement(
                      ke,
                      { tip: "\u590d\u5236\u6210\u529f", type: "click" },
                      c.a.createElement("i", {
                        className: "clipboard iconfont iconfuzhi",
                        "data-clipboard-target": "#".concat(e),
                        style: { marginLeft: n ? 8 : null, cursor: "pointer" }
                      }),
                      s
                        ? c.a.createElement(
                            "span",
                            {
                              className: "outerInner",
                              "data-clipboard-target": "#".concat(e)
                            },
                            s
                          )
                        : null
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.PureComponent),
        Ee = n(55),
        ge = n.n(Ee),
        be = n(56),
        ke = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: Z()("tooltip_") }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.uid,
                    n = this.props,
                    a = n.children,
                    r = n.onClick,
                    o = n.type,
                    s = void 0 === o ? "hover" : o,
                    i = n.size,
                    u = void 0 === i ? "middle" : i,
                    l = n.offset,
                    d = void 0 === l ? {} : l,
                    p = n.place,
                    m = void 0 === p ? "bottom" : p,
                    f = n.tip,
                    h = void 0 === f ? "tooltip\u63d0\u793a" : f;
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    "hover" === s
                      ? c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { "data-for": t, "data-tip": h, className: be.tip },
                            a
                          ),
                          c.a.createElement(
                            ge.a,
                            {
                              effect: "solid",
                              offset: d,
                              multiline: !0,
                              id: t,
                              place: m,
                              className: pe()(be.tool, be[u])
                            },
                            h
                          )
                        )
                      : c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { id: t, "data-tip": h, className: be.tip },
                            c.a.createElement(
                              "span",
                              {
                                onClick: function(n) {
                                  n.stopPropagation(),
                                    r && te(r)
                                      ? r(function(n) {
                                          n &&
                                            e.setState({ tip: n }, function() {
                                              ge.a.show(
                                                document.getElementById(t)
                                              );
                                            });
                                        })
                                      : ge.a.show(document.getElementById(t));
                                }
                              },
                              a
                            )
                          ),
                          c.a.createElement(ge.a, {
                            className: be.content,
                            event: "none",
                            effect: "solid",
                            isCapture: !0,
                            delayShow: 150,
                            afterShow: function() {
                              setTimeout(function() {
                                ge.a.hide(document.getElementById(t));
                              }, 500);
                            }
                          })
                        )
                  );
                }
              }
            ]),
            t
          );
        })(r.PureComponent),
        we = n(47),
        ye = "https://api.chainx.org/bitx/txs";
      function Oe(e) {
        return Ae.apply(this, arguments);
      }
      function Ae() {
        return (Ae = Object(J.a)(
          X.a.mark(function e(t) {
            var n,
              a = arguments;
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.length > 1 && void 0 !== a[1] ? a[1] : "testnet"),
                      e.abrupt(
                        "return",
                        window
                          .fetch(
                            "https://api.blockcypher.com/v1/btc/"
                              .concat(
                                "mainnet" === n ? "main" : "test3",
                                "/addrs/"
                              )
                              .concat(t, "/balance")
                          )
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(e) {
                            return {
                              balance: e.final_balance,
                              confirmed: e.balance,
                              unconfirmed: e.unconfirmed_balance
                            };
                          })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ne() {
        return (Ne = Object(J.a)(
          X.a.mark(function e(t) {
            var n,
              a = arguments;
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.length > 1 && void 0 !== a[1] ? a[1] : "testnet"),
                      e.abrupt(
                        "return",
                        window
                          .fetch(
                            "https://api.blockcypher.com/v1/btc/"
                              .concat(
                                "mainnet" === n ? "main" : "test3",
                                "/addrs/"
                              )
                              .concat(t, "?unspentOnly=true&confirmations=1")
                          )
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(e) {
                            return (e.txrefs || []).map(function(e) {
                              return {
                                mintTxid: e.tx_hash,
                                mintIndex: e.tx_output_n,
                                value: e.value
                              };
                            });
                          })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Se(e) {
        return je.apply(this, arguments);
      }
      function je() {
        return (je = Object(J.a)(
          X.a.mark(function e(t) {
            var n,
              a,
              r = arguments;
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : "testnet"),
                      (a = { raw: t, network: n }),
                      e.abrupt(
                        "return",
                        $({ url: ye, method: "POST", body: a })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Me = function(e) {
          return { type: "UPDATE_ACCOUNT_BALANCE", account: e };
        },
        Ce = function(e) {
          return {
            type: "SET_Modal",
            modal: { name: e.name, show: e.show, data: e.data }
          };
        },
        xe = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "testnet";
          return function() {
            return (function(e) {
              return Ne.apply(this, arguments);
            })(e, t);
          };
        };
      function Ie(e, t) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = Object(J.a)(
          X.a.mark(function e(t, n) {
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function(e) {
                        Oe(t.address, t.network || "testnet").then(function() {
                          var a =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            r = Object(z.a)({}, t, a, {
                              balanceShow: re.toBtcPrecision(a.confirmed)
                            });
                          n(Me(r)), setTimeout(e, 500);
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Te = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.title,
                    n = e.setModal,
                    a = e.modal,
                    r = (a = void 0 === a ? {} : a).show,
                    o = e.children,
                    s = e.className,
                    i = e.closeCb;
                  return (
                    r &&
                    c.a.createElement(
                      "div",
                      {
                        className: pe()(
                          we.Modalcontainer,
                          ce() ? we.rootModalMobile : we.rootModalDesktop
                        ),
                        id: "rootModal"
                      },
                      c.a.createElement(
                        "div",
                        { className: pe()(we.content, s) },
                        t &&
                          c.a.createElement(
                            "div",
                            {
                              className: we.header,
                              onClick: function() {
                                i && i(), n(!1);
                              }
                            },
                            c.a.createElement(
                              "div",
                              { className: we.title },
                              t
                            ),
                            c.a.createElement("i", {
                              className: "iconfont iconClose"
                            })
                          ),
                        o
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Be = Object(w.b)(
          function(e) {
            return { modal: e.modal };
          },
          function(e) {
            return {
              setModal: function(t) {
                return e(Ce({ show: t }));
              }
            };
          }
        )(Te),
        Ke = n(173),
        De = n.n(Ke),
        Ue = n(48),
        Le = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { isCreate: !0, openNetworkSelection: !1 }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.changeClose,
                    a = t.accounts,
                    r = void 0 === a ? [] : a,
                    o = t.setNetwork,
                    s = this.state,
                    i = s.isCreate,
                    u = s.openNetworkSelection;
                  return c.a.createElement(
                    "div",
                    { className: Ue.SelectModeGetAccount },
                    r.length
                      ? c.a.createElement(
                          "div",
                          { className: Ue.close, onClick: n },
                          c.a.createElement("i", {
                            className: "iconfont iconClose",
                            style: { cursor: "pointer" }
                          })
                        )
                      : null,
                    c.a.createElement(
                      "div",
                      { className: Ue.bitx },
                      c.a.createElement("img", {
                        alt: "",
                        src: De.a,
                        height: 55
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { className: Ue.routerbutton },
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              return e.setState({
                                isCreate: !0,
                                openNetworkSelection: !0
                              });
                            }
                          },
                          "\u521b\u5efa\u8d26\u6237"
                        )
                      ),
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              return e.setState({
                                isCreate: !1,
                                openNetworkSelection: !0
                              });
                            }
                          },
                          "\u5bfc\u5165\u8d26\u6237"
                        )
                      )
                    ),
                    u
                      ? c.a.createElement(
                          "section",
                          {
                            className: Ue.networkSelection,
                            onClick: function() {
                              return e.setState({ openNetworkSelection: !1 });
                            }
                          },
                          c.a.createElement(
                            "main",
                            {
                              onClick: function(e) {
                                return e.stopPropagation();
                              }
                            },
                            c.a.createElement(
                              "header",
                              null,
                              c.a.createElement(
                                "h3",
                                null,
                                "\u9009\u62e9\u7f51\u7edc"
                              ),
                              c.a.createElement(
                                "span",
                                {
                                  onClick: function() {
                                    return e.setState({
                                      openNetworkSelection: !1
                                    });
                                  }
                                },
                                c.a.createElement("i", {
                                  className: "iconfont iconClose",
                                  style: { cursor: "pointer" }
                                })
                              )
                            ),
                            c.a.createElement(
                              "div",
                              null,
                              c.a.createElement(
                                ue,
                                {
                                  onClick: function() {
                                    return o("mainnet");
                                  },
                                  go: { pathname: i ? O : A }
                                },
                                "\u4e3b\u7f51"
                              ),
                              c.a.createElement("div", {
                                className: Ue.separator
                              }),
                              c.a.createElement(
                                ue,
                                {
                                  onClick: function() {
                                    return o("testnet");
                                  },
                                  go: { pathname: i ? O : A }
                                },
                                "\u6d4b\u8bd5\u7f51"
                              )
                            )
                          )
                        )
                      : null
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        qe = Object(w.b)(null, function(e) {
          return {
            setNetwork: function(t) {
              return e(
                (function(e) {
                  return { type: "SET_NETWORK", network: e };
                })(t)
              );
            }
          };
        })(Le),
        Ge = n(33),
        Re = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              ((n = Object(p.a)(this, Object(m.a)(t).call(this, e))).pageTitle =
                "BitX"),
              (n.startInit = function() {}),
              (n.changeClose = function() {
                n.setState(function(e) {
                  return { close: !e.close };
                });
              });
            var a = e.accounts,
              r = void 0 === a ? [] : a;
            return (n.state = { close: !!r.length }), n;
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.changeClose,
                    t = this.state.close,
                    n = this.props.accounts,
                    a = void 0 === n ? [] : n;
                  return c.a.createElement(
                    "div",
                    { className: Ge.AccountList },
                    c.a.createElement(
                      "div",
                      { className: Ge.listtitle },
                      c.a.createElement(
                        "div",
                        null,
                        "\u8d26\u6237\u5217\u8868"
                      ),
                      c.a.createElement(
                        "div",
                        { onClick: e },
                        c.a.createElement("i", {
                          className: "iconfont iconadd",
                          style: { cursor: "pointer" }
                        })
                      )
                    ),
                    c.a.createElement(
                      "ul",
                      null,
                      a.map(function(e, t) {
                        return c.a.createElement(
                          ue,
                          {
                            key: t,
                            Ele: "li",
                            go: {
                              pathname: N,
                              search: "?address=".concat(e.address)
                            }
                          },
                          c.a.createElement("div", { className: Ge.seperate }),
                          c.a.createElement(
                            "div",
                            { className: Ge.desc },
                            c.a.createElement(
                              "div",
                              { className: Ge.title },
                              c.a.createElement(
                                "span",
                                { className: Ge.name },
                                e.name
                              ),
                              "mainnet" !== e.network
                                ? c.a.createElement(
                                    "span",
                                    { className: Ge.badge },
                                    "\u6d4b\u8bd5\u7f51"
                                  )
                                : null
                            ),
                            c.a.createElement(
                              "div",
                              { className: Ge.amount },
                              ((n = e.balanceShow),
                              (a = "BTC"),
                              ee(n) ? a : "".concat(n, " ").concat(a))
                            )
                          ),
                          c.a.createElement(
                            "div",
                            { className: Ge.address },
                            e.address
                          )
                        );
                        var n, a;
                      })
                    ),
                    t
                      ? null
                      : c.a.createElement(
                          qe,
                          Object.assign({}, this.props, { changeClose: e })
                        )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        Fe = n(116),
        Ve = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5907\u4efd\u52a9\u8bb0\u8bcd"),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.changeStep;
                  return c.a.createElement(
                    "div",
                    { className: Fe.KnowAbout },
                    c.a.createElement("i", { className: "iconfont iconsuo" }),
                    c.a.createElement(
                      "div",
                      { className: Fe.content },
                      "\u5728BitX\u4e0a\u751f\u6210\u6216\u5bfc\u5165\u7684\u52a9\u8bb0\u8bcd\u548c\u79c1\u94a5",
                      c.a.createElement("br", null),
                      "\u7531\u7528\u6237\u81ea\u5df1\u4fdd\u7ba1\uff01\u5e73\u53f0\u65b9\u5e76\u65e0\u5907\u4efd"
                    ),
                    c.a.createElement(
                      "button",
                      {
                        onClick: function() {
                          return e(2);
                        }
                      },
                      "\u6211\u5df2\u4e86\u89e3"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        We = n(85),
        He = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.mnemonic,
                    n = e.changeStep;
                  return c.a.createElement(
                    "div",
                    { className: We.SaveMnemonic },
                    c.a.createElement(
                      "div",
                      { className: We.desc },
                      "\u8bf7\u5c06\u4ee5\u4e0b12\u4e2a\u5355\u8bcd\u8bb0\u5728\u7eb8\u4e0a",
                      c.a.createElement("br", null),
                      "\u6211\u4eec\u4f1a\u5728\u4e4b\u540e\u8fdb\u884c\u9a8c\u8bc1"
                    ),
                    c.a.createElement(
                      "div",
                      { className: We.generatewords },
                      t
                    ),
                    c.a.createElement(
                      "button",
                      {
                        onClick: function() {
                          return n(3);
                        }
                      },
                      "\u6211\u5df2\u5907\u4efd"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        Xe = n(42),
        Je = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              ((n = Object(p.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t = void 0 === e ? [] : e,
                    a = n.props.mnemonic,
                    r = F.check("strictEqual")(
                      t
                        .map(function() {
                          return (arguments.length > 0 &&
                          void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                          ).value;
                        })
                        .join(" "),
                      a
                    );
                  return n.setState({ userInputErrMsg: r }), r;
                },
                confirm: function() {
                  return ["checkUserInput"].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              });
            return (
              (n.state = {
                userInput: [],
                userInputErrMsg: "",
                mnemonicSort: e.mnemonic.split(" ").sort(function(e, t) {
                  return Math.random() > 0.5 ? -1 : 1;
                })
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.userInput,
                    r = n.userInputErrMsg,
                    o = n.mnemonicSort,
                    s = this.props.changeStep,
                    i = function(e) {
                      return a.findIndex(function(t) {
                        return t.index === e;
                      });
                    };
                  return c.a.createElement(
                    "div",
                    { className: Xe.CheckMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Xe.desc },
                      "\u9a8c\u8bc1\u60a8\u8bb0\u4e0b\u7684\u52a9\u8bb0\u8bcd"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Xe.generatewords },
                      a
                        .map(function() {
                          return (arguments.length > 0 &&
                          void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                          ).value;
                        })
                        .join(" ")
                    ),
                    c.a.createElement(
                      "div",
                      { className: pe()(Xe.writedesc, r && Xe.warn) },
                      "\u8bf7\u6309\u6b63\u786e\u7684\u987a\u5e8f\u70b9\u51fb\u5355\u8bcd"
                    ),
                    c.a.createElement(
                      "ul",
                      { className: Xe.allwords },
                      o.map(function(t, n) {
                        return c.a.createElement(
                          "li",
                          {
                            className: -1 !== i(n) ? Xe.active : null,
                            key: n,
                            onClick: function() {
                              e.setState({ userInputErrMsg: "" }),
                                -1 === i(n)
                                  ? e.setState(function(e) {
                                      return (
                                        e.userInput.push({
                                          value: t,
                                          index: n
                                        }),
                                        { userInput: e.userInput }
                                      );
                                    })
                                  : e.setState(function(e) {
                                      return (
                                        e.userInput.splice(i(n), 1),
                                        { userInput: e.userInput }
                                      );
                                    });
                            }
                          },
                          t
                        );
                      })
                    ),
                    c.a.createElement(
                      "button",
                      {
                        onClick: function() {
                          t.confirm() && s(4);
                        }
                      },
                      "\u5b8c\u6210"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        ze = n(65),
        Qe = n(174),
        Ye = n.n(Qe),
        Ze = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u8bbe\u7f6e\u5bc6\u7801"),
              (n.state = {
                name: "",
                nameErrMsg: "",
                password: "",
                passwordErrMsg: "",
                confirmPassword: "",
                confirmPasswordErrMsg: ""
              }),
              (n.checkAll = {
                checkName: function() {
                  var e = n.state.name,
                    t = F.check("required")(e);
                  return n.setState({ nameErrMsg: t }), t;
                },
                checkPassword: function() {
                  var e = n.state.password,
                    t =
                      F.check("required")(e) ||
                      F.check("characterLength")(e, 8) ||
                      n.checkAll.checkEqual();
                  if ((n.setState({ passwordErrMsg: t }), t)) return !0;
                  var a = new Ye.a()
                    .has()
                    .uppercase()
                    .has()
                    .lowercase()
                    .has()
                    .digits()
                    .validate(e, { list: !0 });
                  if (a.length > 0) {
                    var r;
                    switch (a[0]) {
                      case "uppercase":
                        r =
                          "\u5bc6\u7801\u9700\u5305\u542b\u5927\u5199\u5b57\u6bcd";
                        break;
                      case "lowercase":
                        r =
                          "\u5bc6\u7801\u9700\u5305\u542b\u5c0f\u5199\u5b57\u6bcd";
                        break;
                      case "digits":
                        r = "\u5bc6\u7801\u9700\u5305\u542b\u6570\u5b57";
                    }
                    if (r) return n.setState({ passwordErrMsg: r }), !0;
                  }
                  return !1;
                },
                checkConfirmPassword: function() {
                  var e = n.state.confirmPassword,
                    t = F.check("required")(e) || n.checkAll.checkEqual();
                  return n.setState({ confirmPasswordErrMsg: t }), t;
                },
                checkEqual: function() {
                  var e = n.state,
                    t = e.password,
                    a = e.confirmPassword;
                  if (t && a) {
                    var r = F.check("equal")(t, a);
                    return (
                      n.setState({
                        passwordErrMsg: r,
                        confirmPasswordErrMsg: r
                      }),
                      r
                    );
                  }
                },
                confirm: function() {
                  return [
                    "checkName",
                    "checkPassword",
                    "checkConfirmPassword"
                  ].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.name,
                    r = n.nameErrMsg,
                    o = n.password,
                    s = n.passwordErrMsg,
                    i = n.confirmPassword,
                    u = n.confirmPasswordErrMsg,
                    l = this.props,
                    d = l.mnemonic,
                    p = l.privateKey,
                    m = l.addAccount,
                    f = l.history,
                    h = l.network,
                    v =
                      "mainnet" === h
                        ? U.a.networks.bitcoin
                        : U.a.networks.testnet;
                  return c.a.createElement(
                    "div",
                    { className: ze.SetPassword },
                    c.a.createElement(
                      "div",
                      { className: ze.inputcontent },
                      c.a.createElement(
                        "div",
                        { className: ze.desc },
                        "\u4e3a\u4f60\u7684\u94b1\u5305\u8d26\u6237\u8bbe\u7f6e\u5bc6\u7801"
                      ),
                      c.a.createElement(me, {
                        label: "\u6635\u79f0",
                        value: a,
                        errMsg: r,
                        placeholder: "12\u5b57\u7b26\u4ee5\u5185",
                        onBlur: t.checkName,
                        onChange: function(t) {
                          return e.setState({
                            nameErrMsg: "",
                            name: t.slice(0, 12)
                          });
                        }
                      }),
                      c.a.createElement(me, {
                        isPassword: !0,
                        label: "\u5bc6\u7801",
                        value: o,
                        errMsg: s,
                        placeholder:
                          "\u5bc6\u7801\u4e0d\u5c11\u4e8e8\u4f4d\uff0c\u4e14\u5305\u542b\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u548c\u6570\u5b57",
                        onBlur: t.checkPassword,
                        onChange: function(t) {
                          return e.setState({
                            passwordErrMsg: "",
                            password: t
                          });
                        }
                      }),
                      c.a.createElement(me, {
                        isPassword: !0,
                        label: "\u786e\u8ba4\u5bc6\u7801",
                        value: i,
                        errMsg: u,
                        placeholder: "\u91cd\u590d\u8f93\u5165\u5bc6\u7801",
                        onBlur: t.checkConfirmPassword,
                        onChange: function(t) {
                          return e.setState({
                            confirmPasswordErrMsg: "",
                            confirmPassword: t
                          });
                        }
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { className: ze.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            if (t.confirm()) {
                              var e = V.generateAccount(
                                {
                                  name: a,
                                  mnemonic: d,
                                  wif: p,
                                  password: o,
                                  network: h
                                },
                                v
                              );
                              m(e), f.push({ pathname: y });
                            }
                          }
                        },
                        "\u786e\u5b9a"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        $e = Object(w.b)(
          function(e) {
            return { network: e.network };
          },
          function(e) {
            return {
              addAccount: function(t) {
                e(
                  (function(e) {
                    return { type: "ADD_ACCOUNT", account: e };
                  })(t)
                );
              }
            };
          }
        )(Ze),
        et = n(66),
        tt = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                password: "",
                passwordErrMsg: "",
                status: !1,
                hash: ""
              }),
              (n.checkAll = {
                checkPassword: function() {
                  var e = n.state.password,
                    t = n.props.currentAccount,
                    a = (t = void 0 === t ? {} : t).encryptedKey,
                    r = F.check("required")(e) || V.isValidPassword(a, e);
                  return n.setState({ passwordErrMsg: r }), r;
                },
                confirm: function() {
                  return ["checkPassword"].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.password,
                    r = n.passwordErrMsg,
                    o = n.status,
                    s = n.hash,
                    i = this.props,
                    u = i.modal,
                    l = (u = void 0 === u ? {} : u).data,
                    d = (l = void 0 === l ? {} : l).callback,
                    p = i.currentAccount,
                    m = (p = void 0 === p ? {} : p).encryptedKey,
                    f = "mainnet" !== p.network;
                  return c.a.createElement(
                    Be,
                    {
                      title: o
                        ? "\u4ea4\u6613\u5df2\u5e7f\u64ad"
                        : "\u8f93\u5165\u8d26\u6237\u5bc6\u7801"
                    },
                    o
                      ? c.a.createElement(
                          "div",
                          { className: et.success },
                          c.a.createElement("i", {
                            className: "iconfont iconsuccess"
                          }),
                          c.a.createElement(
                            "div",
                            { className: et.button },
                            c.a.createElement(
                              ue,
                              {
                                isOutSide: !0,
                                go: {
                                  pathname: "https://live.blockcypher.com/btc"
                                    .concat(f ? "-testnet" : "", "/tx/")
                                    .concat(s, "/")
                                }
                              },
                              c.a.createElement(
                                "button",
                                { onClick: function() {} },
                                "\u67e5\u770b\u4ea4\u6613"
                              )
                            )
                          )
                        )
                      : c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "div",
                            { className: et.userInput },
                            c.a.createElement(me, {
                              isPassword: !0,
                              value: a,
                              errMsg: r,
                              onChange: function(t) {
                                e.setState({ passwordErrMsg: "", password: t });
                              },
                              onBlur: t.checkPassword
                            })
                          ),
                          c.a.createElement(
                            "div",
                            { className: et.button },
                            c.a.createElement(
                              "button",
                              {
                                onClick: Object(J.a)(
                                  X.a.mark(function n() {
                                    var r, c;
                                    return X.a.wrap(
                                      function(n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              if (!t.confirm()) {
                                                n.next = 14;
                                                break;
                                              }
                                              if (!te(d)) {
                                                n.next = 14;
                                                break;
                                              }
                                              return (
                                                (n.prev = 2),
                                                (n.next = 5),
                                                d(m, a)
                                              );
                                            case 5:
                                              (r = n.sent) &&
                                                e.setState({
                                                  status: !0,
                                                  hash: r
                                                }),
                                                (n.next = 14);
                                              break;
                                            case 9:
                                              (n.prev = 9),
                                                (n.t0 = n.catch(2)),
                                                (c = ne(n.t0)
                                                  ? n.t0
                                                  : n.t0.message &&
                                                    ne(n.t0.message)
                                                  ? n.t0.message
                                                  : n.t0.message &&
                                                    n.t0.message.error &&
                                                    ne(n.t0.message.error)
                                                  ? n.t0.message.error
                                                  : "\u4ea4\u6613\u5e7f\u64ad\u5931\u8d25"),
                                                e.setState({
                                                  passwordErrMsg: c
                                                });
                                            case 14:
                                            case "end":
                                              return n.stop();
                                          }
                                      },
                                      n,
                                      null,
                                      [[2, 9]]
                                    );
                                  })
                                )
                              },
                              "\u786e\u5b9a"
                            )
                          )
                        )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        nt = n(175),
        at = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { step: 1, mnemonic: V.generateMnemonic() }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.step,
                    n = e.mnemonic,
                    a = Object(z.a)({}, this.props, {
                      mnemonic: n,
                      changeStep: this.changeStep
                    });
                  return c.a.createElement(
                    "div",
                    { className: nt.CreateAccount },
                    1 === t && c.a.createElement(Ve, a),
                    2 === t && c.a.createElement(He, a),
                    3 === t && c.a.createElement(Je, a),
                    4 === t && c.a.createElement($e, a)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        rt = Object(w.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(at),
        ct = n(32),
        ot = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { userInput: "", userInputErrMsg: "" }),
              (n.checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t =
                      F.check("required")(e) ||
                      F.check("isValidMnemonic")(e.trim());
                  return n.setState({ userInputErrMsg: t }), t;
                },
                confirm: function() {
                  return ["checkUserInput"].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.userInput,
                    r = n.userInputErrMsg,
                    o = this.props,
                    s = o.changeStep,
                    i = o.step;
                  return c.a.createElement(
                    "div",
                    { className: ct.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: ct.desc },
                          "\u8bf7\u6309\u6b63\u786e\u987a\u5e8f\u8f93\u5165\u60a8\u7684\u52a9\u8bb0\u8bcd",
                          c.a.createElement("br", null),
                          "\u4ee5\u7a7a\u683c\u952e\u533a\u5206"
                        ),
                        c.a.createElement(
                          "div",
                          { className: ct.generatewords },
                          c.a.createElement("textarea", {
                            value: a,
                            onChange: function(t) {
                              var n = t.target.value.replace(/\s+/g, " ");
                              e.setState({ userInputErrMsg: "", userInput: n });
                            }
                          })
                        ),
                        r &&
                          c.a.createElement(
                            "div",
                            { className: ct.errwarn },
                            r
                          ),
                        c.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              t.confirm() && s(2);
                            }
                          },
                          "\u5bfc\u5165"
                        )
                      ),
                    2 === i &&
                      c.a.createElement(
                        $e,
                        Object.assign({}, this.props, { mnemonic: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        st = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { userInput: "", userInputErrMsg: "" }),
              (n.checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t = void 0 === e ? [] : e,
                    a = n.props.network,
                    r =
                      F.check("required")(t) ||
                      F.check("isValidPrivateKey")(
                        t,
                        "mainnet" === a
                          ? U.a.networks.bitcoin
                          : U.a.networks.testnet
                      );
                  return n.setState({ userInputErrMsg: r }), r;
                },
                confirm: function() {
                  return ["checkUserInput"].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.userInput,
                    r = n.userInputErrMsg,
                    o = this.props,
                    s = o.changeStep,
                    i = o.step;
                  return c.a.createElement(
                    "div",
                    { className: ct.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: ct.desc },
                          "\u8bf7\u8f93\u5165\u60a8\u7684\u94b1\u5305\u79c1\u94a5"
                        ),
                        c.a.createElement(
                          "div",
                          { className: ct.generatewords },
                          c.a.createElement("textarea", {
                            value: a,
                            onChange: function(t) {
                              var n = t.target.value;
                              e.setState({ userInputErrMsg: "", userInput: n });
                            }
                          })
                        ),
                        r &&
                          c.a.createElement(
                            "div",
                            { className: ct.errwarn },
                            r
                          ),
                        c.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              t.confirm() && s(2);
                            }
                          },
                          "\u5bfc\u5165"
                        )
                      ),
                    2 === i &&
                      c.a.createElement(
                        $e,
                        Object.assign({}, this.props, { privateKey: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        it = Object(w.b)(function(e) {
          return { network: e.network };
        })(st),
        ut = n(86),
        lt = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5bfc\u5165\u8d26\u6237"),
              (n.state = { step: 1, activeIndex: 0 }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.step,
                    a = t.activeIndex,
                    r = Object(z.a)(
                      { step: n, changeStep: this.changeStep },
                      this.props
                    );
                  return c.a.createElement(
                    "div",
                    { className: ut.ImportAccount },
                    1 === n &&
                      c.a.createElement(
                        "ul",
                        { className: ut.selectmode },
                        [
                          "\u5bfc\u5165\u52a9\u8bb0\u8bcd",
                          "\u5bfc\u5165\u79c1\u94a5"
                        ].map(function(t, n) {
                          return c.a.createElement(
                            "li",
                            {
                              key: n,
                              className: a === n ? ut.active : null,
                              onClick: function() {
                                e.setState({ step: 1, activeIndex: n });
                              }
                            },
                            t
                          );
                        })
                      ),
                    0 === a && c.a.createElement(ot, r),
                    1 === a && c.a.createElement(it, r)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        dt = Object(w.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(lt),
        pt = n(67),
        mt = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.currentAccount,
                    t = void 0 === e ? {} : e,
                    n = "mainnet" !== t.network;
                  return c.a.createElement(
                    "div",
                    { className: pt.AccountInfo },
                    c.a.createElement(
                      "div",
                      { className: pt.amount },
                      t.balanceShow,
                      c.a.createElement("span", null, "BTC")
                    ),
                    c.a.createElement(
                      "div",
                      { className: pt.address },
                      c.a.createElement(_e, null, t.address)
                    ),
                    c.a.createElement(
                      "div",
                      { className: pt.watchother },
                      c.a.createElement(
                        ue,
                        {
                          isOutSide: !0,
                          go: {
                            pathname: "https://live.blockcypher.com/btc"
                              .concat(n ? "-testnet" : "", "/address/")
                              .concat(t.address, "/")
                          }
                        },
                        "\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        ft = n(176),
        ht = n.n(ft),
        vt = n(117),
        _t = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).startInit = function() {
                var e = n.props.currentAccount;
                new ht.a({
                  size: 190,
                  element: document.getElementById("qr"),
                  value: e.address
                });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: vt.AccountReceive },
                    c.a.createElement("canvas", { id: "qr" }),
                    c.a.createElement(
                      "div",
                      { className: vt.desc },
                      "\u5730\u5740\u4e8c\u7ef4\u7801"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        Et = n(34),
        gt = n(77),
        bt = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(p.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                utxos: [],
                address: "",
                addressErrMsg: "",
                amount: "",
                amountErrMsg: "",
                addOpReturn: !1,
                hex: "",
                hexErrMsg: "",
                fee: 8e-5,
                feeErrMsg: ""
              }),
              (n.checkAll = {
                checkAddress: function() {
                  var e = n.state.address,
                    t = F.check("required")(e) || F.check("isBTCAddress")(e);
                  return n.setState({ addressErrMsg: t }), t;
                },
                checkAmount: function() {
                  var e = n.state.amount,
                    t =
                      F.check("required")(e) ||
                      F.check("smallerOrEqual")(
                        0,
                        e,
                        "\u6570\u91cf\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e0"
                      );
                  return (
                    t
                      ? n.setState({ amountErrMsg: t })
                      : (t = n.checkAll.checkAmountAndFee()),
                    t
                  );
                },
                checkFee: function() {
                  var e = n.state.fee,
                    t =
                      F.check("required")(e) ||
                      F.check("smallerOrEqual")(
                        0,
                        e,
                        "\u6570\u91cf\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e0"
                      );
                  return (
                    t
                      ? n.setState({ feeErrMsg: t })
                      : (t = n.checkAll.checkAmountAndFee()),
                    t
                  );
                },
                checkAmountAndFee: function() {
                  var e = n.state,
                    t = e.fee,
                    a = e.amount,
                    r = e.utxos,
                    c = Number(re.toBtcPrecision(a, 8, !0)),
                    o = Number(re.toBtcPrecision(t, 8, !0));
                  if (!Object(gt.b)(r, c, o)) {
                    return (
                      n.setState({
                        feeErrMsg: "\u6570\u91cf\u4e0d\u8db3",
                        amountErrMsg: "\u6570\u91cf\u4e0d\u8db3"
                      }),
                      "\u6570\u91cf\u4e0d\u8db3"
                    );
                  }
                  n.setState({ feeErrMsg: "", amountErrMsg: "" });
                },
                checkHex: function() {
                  var e = n.state,
                    t = e.hex,
                    a = e.addOpReturn ? F.check("required")(t) : "";
                  return n.setState({ hexErrMsg: a }), a;
                },
                confirm: function() {
                  return [
                    "checkAddress",
                    "checkAmount",
                    "checkFee",
                    "checkHex"
                  ].every(function(e) {
                    return !n.checkAll[e]();
                  });
                }
              }),
              (n.startInit = function() {
                var e = n.props,
                  t = e.getAccountUtxos,
                  a = e.currentAccount;
                t(a.address, a.network).then(function(e) {
                  return n.setState({ utxos: e });
                });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "constructTx",
                value: function(e, t) {
                  var n = this.state,
                    a = n.address,
                    r = n.amount,
                    c = n.hex,
                    o = n.utxos,
                    s = n.fee,
                    i = this.props.currentAccount,
                    u = Number(re.toBtcPrecision(r, 8, !0)),
                    l = Number(re.toBtcPrecision(s, 8, !0));
                  return V.sign(o, i.address, a, u, l, c, e, t, i.network);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.checkAll,
                    n = this.state,
                    a = n.address,
                    r = n.addressErrMsg,
                    o = n.amount,
                    s = n.amountErrMsg,
                    i = n.addOpReturn,
                    u = n.hex,
                    l = n.hexErrMsg,
                    d = n.fee,
                    p = n.feeErrMsg,
                    m = this.props.currentAccount,
                    f = (function(e) {
                      if (!/^(0x)?[\da-fA-F]+$/.test(e)) return "";
                      var t = e.startsWith("0x") ? e.substring(2) : e;
                      if (t.length % 2 === 1) return "";
                      for (var n = "", a = 0; a < t.length; a += 2)
                        n += String.fromCharCode(parseInt(t.substr(a, 2), 16));
                      return n;
                    })(u),
                    h = this.props.modal,
                    v = (h = void 0 === h ? {} : h).name;
                  return c.a.createElement(
                    "div",
                    { className: Et.AccountSend },
                    c.a.createElement(
                      "div",
                      { className: Et.userInput },
                      c.a.createElement(me, {
                        errMsg: r,
                        label: "\u63a5\u6536\u4eba\u5730\u5740",
                        value: a,
                        onBlur: t.checkAddress,
                        onChange: function(t) {
                          e.setState({ address: t });
                        }
                      }),
                      c.a.createElement(me, {
                        errMsg: s,
                        label: "\u8f6c\u8d26\u6570\u91cf",
                        value: o,
                        suffix: "BTC",
                        onBlur: t.checkAmount,
                        onChange: function(t) {
                          e.setState({ amount: t });
                        }
                      }),
                      c.a.createElement(me, {
                        errMsg: p,
                        label: "\u4ea4\u6613\u624b\u7eed\u8d39",
                        value: d,
                        suffix: "BTC",
                        onBlur: t.checkFee,
                        onChange: function(t) {
                          e.setState({ fee: t });
                        }
                      }),
                      c.a.createElement(
                        "p",
                        { className: Et.warning },
                        "\u8bf7\u53c2\u8003\u5e02\u573a\u624b\u7eed\u8d39\u586b\u5199\uff0c\u5426\u5219\u60a8\u5c06\u9762\u4e34\u652f\u4ed8\u8fc7\u591a\u624b\u7eed\u8d39\u6216\u8005\u60a8\u7684\u4ea4\u6613\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u786e\u8ba4\u7684\u98ce\u9669\u3002"
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: Et.addreturn },
                      "\u6dfb\u52a0OP_RETURN",
                      i
                        ? c.a.createElement("i", {
                            onClick: function() {
                              e.setState({ addOpReturn: !i });
                            },
                            className: "iconfont iconopen",
                            style: { color: "#F6C94A" }
                          })
                        : c.a.createElement("i", {
                            onClick: function() {
                              e.setState({ addOpReturn: !i });
                            },
                            className: "iconfont iconclose",
                            style: { color: "rgba(34,31,31,0.26)" }
                          })
                    ),
                    i &&
                      c.a.createElement(
                        "div",
                        { className: Et.returncontent },
                        c.a.createElement(
                          "div",
                          { className: Et.input },
                          c.a.createElement(me, {
                            rows: 2,
                            isTextArea: !0,
                            errMsg: l,
                            label: "16\u8fdb\u5236 Hex",
                            value: u,
                            onBlur: t.checkHex,
                            onChange: function(t) {
                              e.setState({ hex: t });
                            }
                          })
                        ),
                        c.a.createElement(
                          "div",
                          { className: Et.ASCII },
                          c.a.createElement(
                            "div",
                            { className: Et.label },
                            "\u6587\u672c ASCII"
                          ),
                          c.a.createElement("div", null, f)
                        )
                      ),
                    c.a.createElement(
                      "div",
                      { className: Et.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            t.confirm() &&
                              e.openModal({
                                name: "transfer",
                                data: {
                                  callback: (function() {
                                    var t = Object(J.a)(
                                      X.a.mark(function t(n, a) {
                                        var r, c;
                                        return X.a.wrap(function(t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (
                                                  !(r = e.constructTx(n, a)) ||
                                                  !r.message
                                                ) {
                                                  t.next = 5;
                                                  break;
                                                }
                                                throw Error(r.message);
                                              case 5:
                                                return (
                                                  (t.next = 7), Se(r, m.network)
                                                );
                                              case 7:
                                                if (!(c = t.sent) || !c.tx) {
                                                  t.next = 10;
                                                  break;
                                                }
                                                return t.abrupt("return", c.tx);
                                              case 10:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function(e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                }
                              });
                          }
                        },
                        "\u786e\u5b9a"
                      )
                    ),
                    "transfer" === v && c.a.createElement(tt, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        kt = Object(w.b)(void 0, function(e) {
          return {
            getAccountUtxos: function(t, n) {
              return e(xe(t, n));
            }
          };
        })(bt);
      function wt(e) {
        return c.a.createElement(
          "div",
          {
            className: e.className,
            onClick: function(t) {
              t.stopPropagation(), e.onClick();
            }
          },
          c.a.createElement("i", { className: "iconfont icondaochu" }),
          c.a.createElement("span", null, "\u5bfc\u51fa\u79c1\u94a5")
        );
      }
      var yt = function(e) {
          return c.a.createElement(
            "div",
            {
              className: e.className,
              style: { display: "flex", alignItems: "center" },
              onClick: function(t) {
                t.stopPropagation(), e.onClick();
              }
            },
            c.a.createElement("i", {
              className: "iconfont iconbaseline-delete_forever-px",
              style: { fontSize: "26px" }
            }),
            c.a.createElement("span", null, "\u5220\u9664\u8d26\u6237")
          );
        },
        Ot = n(49),
        At = (function(e) {
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = Object(p.a)(this, Object(m.a)(t).call(this, e))).state = {
                password: "",
                passwordErrMsg: ""
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "checkPassword",
                value: function() {
                  var e = this.state.password,
                    t = this.props.currentAccount,
                    n = (t = void 0 === t ? {} : t).encryptedKey,
                    a = F.check("required")(e) || V.isValidPassword(n, e);
                  return this.setState({ passwordErrMsg: a }), a;
                }
              },
              {
                key: "exportPrivateKey",
                value: function() {
                  var e = this.state.password,
                    t = this.props.currentAccount,
                    n = (t = void 0 === t ? {} : t).encryptedKey,
                    a = T.a.decryptPair(n, e).privateKey;
                  this.props.setPrivateKey(a.toString("hex"));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.password,
                    a = t.passwordErrMsg;
                  return c.a.createElement(
                    "div",
                    {
                      className: pe()(this.props.className, Ot.input_password),
                      onClick: function(e) {
                        return e.stopPropagation();
                      }
                    },
                    c.a.createElement(
                      "div",
                      { className: Ot.top },
                      c.a.createElement(
                        "span",
                        { className: Ot.title },
                        "\u8f93\u5165\u8d26\u6237\u5bc6\u7801"
                      ),
                      c.a.createElement("i", {
                        className: pe()("iconfont iconClose", Ot.close),
                        onClick: function() {
                          e.props.onClose();
                        }
                      })
                    ),
                    c.a.createElement(me, {
                      className: Ot.input,
                      isPassword: !0,
                      value: n,
                      errMsg: a,
                      onChange: function(t) {
                        e.setState({ passwordErrMsg: "", password: t });
                      },
                      onBlur: function() {
                        e.checkPassword();
                      }
                    }),
                    c.a.createElement(
                      "button",
                      {
                        className: Ot.confirm,
                        onClick: function(t) {
                          t.stopPropagation(),
                            e.checkPassword() || e.props.passwordCallback(n);
                        }
                      },
                      "\u786e\u5b9a"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component);
      function Nt(e) {
        var t = e.privateKey,
          n = e.styles,
          a = e.onClose;
        return c.a.createElement(
          "div",
          {
            onClick: function(e) {
              return e.stopPropagation();
            }
          },
          c.a.createElement(
            "div",
            { className: n.title },
            c.a.createElement("span", null, "\u79c1\u94a5"),
            c.a.createElement("i", {
              className: "iconfont iconClose",
              onClick: function() {
                return a();
              },
              style: { cursor: "pointer" }
            })
          ),
          c.a.createElement("span", { className: n.private_key }, t),
          c.a.createElement(
            "span",
            { className: n.warning },
            "\u4e0d\u8981\u5c06\u60a8\u7684\u79c1\u94a5\u5b58\u50a8\u5728\u60a8\u7684\u7535\u8111\u4e0a\uff0c\u6216\u8005\u7f51\u4e0a\u67d0\u5904\u3002\u4efb\u4f55\u80fd\u591f\u8bbf\u95ee\u60a8\u5907\u4efd\u79c1\u94a5\u7684\u4eba\u5c31\u80fd\u53d6\u7528\u60a8\u7684\u8d44\u91d1"
          )
        );
      }
      var St = n(26),
        jt = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              (n = Object(p.a)(this, Object(m.a)(t).call(this, e)));
            var a = e.currentAccount;
            return (
              (n.pageTitle = a.name),
              (n.didMount = oe.prototype.componentDidMount),
              (n.state = {
                activeIndex: 0,
                showMenu: !1,
                status: "toExportKey",
                privateKey: "",
                passwordCallback: function() {}
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.didMount && this.didMount.apply(this),
                    this.props.setMenu({
                      show: !0,
                      cb: function() {
                        e.setState({ showMenu: !0 });
                      }
                    });
                }
              },
              {
                key: "handleStepChange",
                value: function(e) {
                  this.setState({ status: e });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.activeIndex,
                    a = t.status,
                    r = t.showMenu,
                    o = t.privateKey,
                    s = t.passwordCallback,
                    i = this.props,
                    u = i.currentAccount,
                    l = (u = void 0 === u ? {} : u).encryptedKey,
                    d = i.deleteAccount;
                  return c.a.createElement(
                    "div",
                    { className: St.AccountDetail },
                    c.a.createElement(mt, this.props),
                    c.a.createElement(
                      "div",
                      {
                        className: St.content,
                        style: { background: 1 === n ? "white" : "" }
                      },
                      c.a.createElement(
                        "ul",
                        { className: St.selectmode },
                        ["\u53d1\u9001", "\u63a5\u6536"].map(function(t, a) {
                          return c.a.createElement(
                            "li",
                            {
                              key: a,
                              className: n === a ? St.active : null,
                              onClick: function() {
                                e.setState({ activeIndex: a });
                              }
                            },
                            t
                          );
                        })
                      ),
                      0 === n && c.a.createElement(kt, this.props),
                      1 === n && c.a.createElement(_t, this.props)
                    ),
                    r &&
                      c.a.createElement(
                        "div",
                        {
                          className: St.modal,
                          onClick: function() {
                            e.setState({ showMenu: !1, status: "toExportKey" });
                          }
                        },
                        "toExportKey" === a &&
                          c.a.createElement(
                            "div",
                            { className: St.menu },
                            c.a.createElement(wt, {
                              className: St.export_key,
                              onClick: function() {
                                e.setState({
                                  status: "inputPassword",
                                  passwordCallback: function(t) {
                                    var n = T.a.decryptPair(l, t).privateKey;
                                    e.setState({
                                      privateKey: n.toString("hex"),
                                      status: "showPrivateKey"
                                    });
                                  }
                                });
                              }
                            }),
                            c.a.createElement(yt, {
                              onClick: function() {
                                e.setState({
                                  status: "inputPassword",
                                  passwordCallback: function() {
                                    d(e.props.currentAccount.address),
                                      te(e.props.goBack)
                                        ? e.props.goBack()
                                        : e.props.history.goBack();
                                  }
                                });
                              },
                              className: St.export_key
                            })
                          ),
                        "inputPassword" === a &&
                          c.a.createElement(
                            "div",
                            { className: St.menu },
                            c.a.createElement(
                              At,
                              Object.assign({}, this.props, {
                                onClose: function() {
                                  e.setState({
                                    showMenu: !1,
                                    status: "toExportKey"
                                  });
                                },
                                passwordCallback: s,
                                setPrivateKey: function(t) {
                                  return e.setState({
                                    privateKey: t,
                                    status: "showPrivateKey"
                                  });
                                }
                              })
                            )
                          ),
                        "showPrivateKey" === a &&
                          c.a.createElement(
                            "div",
                            { className: St.menu },
                            c.a.createElement(Nt, {
                              styles: St,
                              privateKey: o,
                              onClose: function() {
                                e.setState({
                                  showMenu: !1,
                                  status: "toExportKey"
                                });
                              }
                            })
                          )
                      )
                  );
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.setMenu({ show: !1, cb: null });
                }
              }
            ]),
            t
          );
        })(oe),
        Mt = Object(w.b)(
          function(e) {
            return { menu: e.menu, accounts: e.accounts };
          },
          function(e) {
            return {
              setMenu: function(t) {
                return e(
                  (function(e) {
                    return { type: "SET_MENU", menu: e };
                  })(t)
                );
              },
              deleteAccount: function(t) {
                return e(
                  (function(e) {
                    return { type: "DELETE_ACCOUNT", address: e };
                  })(t)
                );
              }
            };
          }
        )(jt),
        Ct = [
          { component: Re, path: y, title: "BitX" },
          { component: rt, path: O, title: "" },
          { component: dt, path: A, title: "" },
          { component: Mt, path: N, title: "" }
        ],
        xt = n(177),
        It = function(e) {
          return c.a.createElement(
            "div",
            { className: xt.wrapper },
            c.a.createElement(
              "main",
              null,
              c.a.createElement("h3", null, "\u7528\u6237\u987b\u77e5"),
              c.a.createElement(
                "p",
                null,
                "BitX\u53ea\u4f5c\u4e3a\u8de8\u94fe\u5145\u503cChainX\u94b1\u5305\u7684\u4e2d\u8f6c\u94b1\u5305\u4f7f\u7528\uff0c\u4e0d\u5efa\u8bae\u7528\u6237\u4f7f\u7528BitX\u94b1\u5305\u5b58\u50a8BTC\uff1b\u4e5f\u4e0d\u5efa\u8bae\u7528\u6237\u5bfc\u5165\u5176\u4ed6\u94b1\u5305\u7684\u79c1\u94a5\u5230BitX\u4e2d\u3002"
              ),
              c.a.createElement(
                "button",
                { onClick: e.setSeen },
                "\u6211\u5df2\u4e86\u89e3"
              )
            )
          );
        },
        Pt = n(87),
        Tt = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.history,
                    n = e.history.location.pathname,
                    a = e.goBack,
                    r = e.menu,
                    o = r.show,
                    s = r.cb;
                  return c.a.createElement(
                    "div",
                    { className: Pt.Header },
                    n !== y &&
                      c.a.createElement("i", {
                        className: pe()("iconfont iconback1", Pt.back),
                        onClick: function() {
                          te(a) ? a() : t.goBack();
                        }
                      }),
                    this.props.children,
                    o &&
                      c.a.createElement("i", {
                        className: pe()("iconfont iconmore", Pt.menu),
                        onClick: function() {
                          return s();
                        }
                      })
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Bt = n(88),
        Kt = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  (0, this.props.getAllAccountBalance)(), V.update();
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = e.accounts,
                    n = void 0 === t ? [] : t,
                    a = this.props,
                    r = a.accounts,
                    c = void 0 === r ? [] : r,
                    o = a.getAllAccountBalance;
                  n.length !== c.length && o();
                }
              },
              {
                key: "render",
                value: function() {
                  var e,
                    t = this,
                    n = this.props,
                    a = n.accounts,
                    r = void 0 === a ? [] : a,
                    o = n.pageTitle,
                    s = n.history.location,
                    i = (s = void 0 === s ? {} : s).search,
                    u = n.app,
                    l = n.setSeenWarning,
                    d = {},
                    p = ((e = i), x.a.parse(e)).address;
                  return (
                    p &&
                      (d =
                        r.filter(function() {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                            ).address === p
                          );
                        })[0] || {}),
                    c.a.createElement(
                      "div",
                      { className: Bt.CommonLayOut },
                      c.a.createElement(
                        "div",
                        { className: Bt.header },
                        c.a.createElement(Tt, this.props, o)
                      ),
                      c.a.createElement(
                        "div",
                        { className: Bt.content },
                        c.a.createElement(
                          g.a,
                          null,
                          Ct.map(function(e, n) {
                            return c.a.createElement(b.a, {
                              exact: !0,
                              key: n,
                              path: e.path,
                              render: function(n) {
                                return c.a.createElement(
                                  e.component,
                                  Object.assign({}, n, t.props, {
                                    currentAccount: d
                                  })
                                );
                              }
                            });
                          }),
                          c.a.createElement(k.a, { to: y })
                        )
                      ),
                      !u.seenWarning && c.a.createElement(It, { setSeen: l })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Dt = Object(w.b)(
          function(e) {
            return {
              goBack: e.goBack,
              accounts: e.accounts,
              pageTitle: e.pageTitle,
              modal: e.modal,
              menu: e.menu,
              app: e.app
            };
          },
          function(e) {
            return {
              setPageTitle: function(t) {
                return e({ type: "SET_PAGE_TITLE", pageTitle: t });
              },
              setModal: function(t) {
                var n = t.name,
                  a = t.show,
                  r = t.data;
                return e(Ce({ name: n, show: a, data: r }));
              },
              getAllAccountBalance: function() {
                return e(
                  (function() {
                    var e = Object(J.a)(
                      X.a.mark(function e(t, n) {
                        var a, r, c, o, s, i, u, l;
                        return X.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (a = n()),
                                    (r = a.accounts),
                                    (c = !0),
                                    (o = !1),
                                    (s = void 0),
                                    (e.prev = 4),
                                    (i = r[Symbol.iterator]());
                                case 6:
                                  if ((c = (u = i.next()).done)) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (l = u.value), (e.next = 10), Ie(l, t);
                                case 10:
                                  (c = !0), (e.next = 6);
                                  break;
                                case 13:
                                  e.next = 19;
                                  break;
                                case 15:
                                  (e.prev = 15),
                                    (e.t0 = e.catch(4)),
                                    (o = !0),
                                    (s = e.t0);
                                case 19:
                                  (e.prev = 19),
                                    (e.prev = 20),
                                    c || null == i.return || i.return();
                                case 22:
                                  if (((e.prev = 22), !o)) {
                                    e.next = 25;
                                    break;
                                  }
                                  throw s;
                                case 25:
                                  return e.finish(22);
                                case 26:
                                  return e.finish(19);
                                case 27:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[4, 15, 19, 27], [20, , 22, 26]]
                        );
                      })
                    );
                    return function(t, n) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              setGoBack: function(t) {
                return e(
                  (function(e) {
                    return { type: "SET_GO_BACK", goBack: e };
                  })(t)
                );
              },
              setSeenWarning: function() {
                return e({ type: "SET_SEEN_WARNING", seenWarning: !0 });
              }
            };
          }
        )(Kt),
        Ut = (n(385),
        (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(p.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  ce()
                    ? document
                        .getElementById("root")
                        .setAttribute("class", "root-mobile")
                    : document
                        .getElementById("root")
                        .setAttribute("class", "root-desktop");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = P ? h.a : v.a;
                  return c.a.createElement(
                    t,
                    null,
                    c.a.createElement(
                      _.a,
                      null,
                      c.a.createElement(E.a, {
                        path: "/",
                        render: function(t) {
                          return c.a.createElement(
                            Dt,
                            Object.assign({}, t, e.props)
                          );
                        }
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component));
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Lt = n(39),
        qt = n(81),
        Gt = V.getAccount();
      function Rt(e) {
        var t = e.map(function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: e.name,
            address: e.address,
            encryptedKey: e.encryptedKey,
            network: e.network
          };
        });
        V.saveAccount(t);
      }
      (Gt && Array.isArray(Gt)) || (Gt = []),
        "undefined" === typeof ae.get("accountVersion") &&
          ae.set("accountVersion", 1);
      var Ft = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Gt,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if ("ADD_ACCOUNT" === t.type) {
            var n = [].concat(Object(qt.a)(e), [t.account]);
            return Rt(n), n;
          }
          if ("DELETE_ACCOUNT" === t.type) {
            var a = e.findIndex(function(e) {
              return e.address === t.address;
            });
            return a < 0 ? e : (e.splice(a, 1), Rt(e), e);
          }
          return "UPDATE_ACCOUNT_BALANCE" === t.type
            ? e.map(function(e) {
                return e.address === t.account.address ? t.account : e;
              })
            : e;
        },
        Vt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "GENERATE_MNEMONIC" === t.type
            ? K.a.generateMnemonic().split(" ")
            : "GENERATE_MNEMONIC" === t.type
            ? []
            : e;
        },
        Wt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_UTXO" === t.type
            ? [{ utxos: t.utxos, address: t.address }].concat(Object(qt.a)(e))
            : e;
        },
        Ht = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_PAGE_TITLE" === t.type ? t.pageTitle : e;
        },
        Xt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { name: "", show: !1 },
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return "SET_Modal" === t.type ? Object(z.a)({}, e, t.modal) : e;
        },
        Jt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_GO_BACK" === t.type ? t.goBack : e;
        },
        zt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "testnet",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_NETWORK" === t.type ? t.network : e;
        },
        Qt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { show: !1, cb: null },
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_MENU" === t.type ? t.menu : e;
        },
        Yt = ae.get("appData") || {},
        Zt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Yt,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if ("SET_SEEN_WARNING" === t.type) {
            var n = Object(z.a)({}, e, { seenWarning: t.seenWarning });
            return ae.set("appData", n), n;
          }
          return e;
        },
        $t = Object(Lt.c)({
          accounts: Ft,
          network: zt,
          newMnemonic: Vt,
          utxos: Wt,
          pageTitle: Ht,
          modal: Xt,
          goBack: Jt,
          menu: Qt,
          app: Zt
        }),
        en = (n(386), n(179)),
        tn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Lt.d,
        nn = Object(Lt.e)($t, tn(Object(Lt.a)(en.a)));
      u()(),
        s.a.render(
          c.a.createElement(w.a, { store: nn }, c.a.createElement(Ut, null)),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    41: function(e, t, n) {
      e.exports = {
        container: "Input_container__io0rI",
        label: "Input_label__wm9as",
        content: "Input_content__3J-eI",
        input: "Input_input__38Ld3",
        suffix: "Input_suffix__58Mod",
        errMsg: "Input_errMsg__3Knym"
      };
    },
    42: function(e, t, n) {
      e.exports = {
        CheckMnemonic: "CheckMnemonic_CheckMnemonic__2PmdU",
        desc: "CheckMnemonic_desc__3r_mQ",
        generatewords: "CheckMnemonic_generatewords__31FMN",
        writedesc: "CheckMnemonic_writedesc__2P-BI",
        warn: "CheckMnemonic_warn__2gOUn",
        allwords: "CheckMnemonic_allwords__2XNEx",
        active: "CheckMnemonic_active__3qQQH"
      };
    },
    47: function(e, t, n) {
      e.exports = {
        Modalcontainer: "Modal_Modalcontainer__1-1i6",
        rootModalDesktop: "Modal_rootModalDesktop__1q3ON",
        content: "Modal_content__NqUgg",
        header: "Modal_header__2JJ9S",
        title: "Modal_title__tK9-d"
      };
    },
    48: function(e, t, n) {
      e.exports = {
        SelectModeGetAccount:
          "SelectModeGetAccount_SelectModeGetAccount__2tlmP",
        close: "SelectModeGetAccount_close__dKjrK",
        bitx: "SelectModeGetAccount_bitx__3pKTR",
        routerbutton: "SelectModeGetAccount_routerbutton__3UWJV",
        networkSelection: "SelectModeGetAccount_networkSelection__2JYcJ",
        separator: "SelectModeGetAccount_separator__36AmM"
      };
    },
    49: function(e, t, n) {
      e.exports = {
        input_password: "InputPassword_input_password__xHtXz",
        top: "InputPassword_top__G92ug",
        title: "InputPassword_title__3_ocN",
        close: "InputPassword_close__K_nj7",
        input: "InputPassword_input__k0YnT",
        confirm: "InputPassword_confirm__B83Pv"
      };
    },
    56: function(e, t, n) {
      e.exports = {
        tool: "Tooltip_tool__1CxeX",
        large: "Tooltip_large__rLp1V"
      };
    },
    65: function(e, t, n) {
      e.exports = {
        SetPassword: "SetPassword_SetPassword__3XwEv",
        inputcontent: "SetPassword_inputcontent__1aACH",
        desc: "SetPassword_desc__3ZVMp",
        button: "SetPassword_button__1G1mm"
      };
    },
    66: function(e, t, n) {
      e.exports = {
        success: "SignModal_success__3vCKm",
        button: "SignModal_button__1kWfr",
        userInput: "SignModal_userInput__ljZ7i"
      };
    },
    67: function(e, t, n) {
      e.exports = {
        AccountInfo: "AccountInfo_AccountInfo__13Hon",
        amount: "AccountInfo_amount__3cznI",
        address: "AccountInfo_address__2mibn",
        watchother: "AccountInfo_watchother__RHieT"
      };
    },
    77: function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "b", function() {
          return s;
        }),
          n.d(t, "a", function() {
            return i;
          });
        var a = n(63),
          r = n.n(a),
          c = n(10),
          o = n.n(c);
        function s(e, t, n) {
          return (
            e.reduce(function(e, t) {
              return e + t.value;
            }, 0) >=
            t + n
          );
        }
        function i(t, n, a, c, s, i, u) {
          var l =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : o.a.networks.testnet,
            d = (function(e, t, n) {
              var a = e.filter(function(e) {
                  return new r.a(e.value) > 0;
                }),
                c = [],
                o = 0,
                s = !0,
                i = !1,
                u = void 0;
              try {
                for (
                  var l, d = a[Symbol.iterator]();
                  !(s = (l = d.next()).done);
                  s = !0
                ) {
                  var p = l.value;
                  if ((c.push(p), (o += p.value) >= t + n)) break;
                }
              } catch (m) {
                (i = !0), (u = m);
              } finally {
                try {
                  s || null == d.return || d.return();
                } finally {
                  if (i) throw u;
                }
              }
              return o >= t + n ? c : [];
            })(t, c, s),
            p = new o.a.TransactionBuilder(l),
            m = 0,
            f = !0,
            h = !1,
            v = void 0;
          try {
            for (
              var _, E = d[Symbol.iterator]();
              !(f = (_ = E.next()).done);
              f = !0
            ) {
              var g = _.value;
              p.addInput(g.mintTxid, g.mintIndex, 0), (m += g.value);
            }
          } catch (w) {
            (h = !0), (v = w);
          } finally {
            try {
              f || null == E.return || E.return();
            } finally {
              if (h) throw v;
            }
          }
          p.addOutput(a, c);
          var b = m - c - s;
          if ((b > 1e3 && p.addOutput(n, b), i)) {
            var k = o.a.payments.embed({ data: [e.from(i, "hex")] });
            p.addOutput(k.output, 0);
          }
          return (
            d.forEach(function(e, t) {
              p.sign(t, u);
            }),
            p.build().toHex()
          );
        }
      }.call(this, n(9).Buffer));
    },
    84: function(e, t, n) {
      e.exports = {
        clipboard: "Clipboard_clipboard__3NJHh",
        children: "Clipboard_children__2QF2s",
        ellipse: "Clipboard_ellipse__2fy2X"
      };
    },
    85: function(e, t, n) {
      e.exports = {
        SaveMnemonic: "SaveMnemonic_SaveMnemonic__3U0v-",
        desc: "SaveMnemonic_desc__3l6VF",
        generatewords: "SaveMnemonic_generatewords__AJdtz"
      };
    },
    86: function(e, t, n) {
      e.exports = {
        ImportAccount: "ImportAccount_ImportAccount__1j0yl",
        selectmode: "ImportAccount_selectmode__1Nurw",
        active: "ImportAccount_active__ffKXC"
      };
    },
    87: function(e, t, n) {
      e.exports = {
        Header: "Header_Header__2CI_T",
        back: "Header_back__3QuoP",
        menu: "Header_menu__1gycx"
      };
    },
    88: function(e, t, n) {
      e.exports = {
        CommonLayOut: "CommonLayOut_CommonLayOut__3AODs",
        content: "CommonLayOut_content__1-0gL"
      };
    }
  },
  [[182, 1, 2]]
]);
//# sourceMappingURL=main.5597404f.chunk.js.map
