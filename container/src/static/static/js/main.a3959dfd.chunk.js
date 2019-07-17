(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    117: function(e, t, n) {
      e.exports = {
        KnowAbout: "KnowAbout_KnowAbout__2632J",
        content: "KnowAbout_content__3ELhE"
      };
    },
    118: function(e, t, n) {
      e.exports = {
        AccountReceive: "AccountReceive_AccountReceive__1lIaP",
        desc: "AccountReceive_desc__3K_de"
      };
    },
    171: function(e, t, n) {
      e.exports = { url: "RouterGo_url__18SS2" };
    },
    174: function(e, t, n) {
      e.exports = n.p + "static/media/Bitx.41fc5ea2.png";
    },
    176: function(e, t, n) {
      e.exports = { CreateAccount: "CreateAccount_CreateAccount__Lrx00" };
    },
    178: function(e, t, n) {
      e.exports = { wrapper: "warning_wrapper__1YjSX" };
    },
    181: function(e, t, n) {
      e.exports = n(386);
    },
    187: function(e, t, n) {},
    215: function(e, t) {},
    217: function(e, t) {},
    24: function(e, t, n) {
      e.exports = {
        AccountDetail: "AccountDetail_AccountDetail__zADpZ",
        content: "AccountDetail_content__2gECl",
        selectmode: "AccountDetail_selectmode__35O3K",
        active: "AccountDetail_active__3jV8d",
        modalWrapper: "AccountDetail_modalWrapper__3kdCs",
        title: "AccountDetail_title__1-_ml",
        menu: "AccountDetail_menu__1Pmz1",
        export_key: "AccountDetail_export_key__eYv0y",
        private_key: "AccountDetail_private_key__39U7E",
        warning: "AccountDetail_warning__2Mlcb"
      };
    },
    245: function(e, t) {},
    248: function(e, t) {},
    33: function(e, t, n) {
      e.exports = {
        ImportMnemonic: "ImportMnemonicOrSecret_ImportMnemonic__2krIe",
        desc: "ImportMnemonicOrSecret_desc__26Rhe",
        generatewords: "ImportMnemonicOrSecret_generatewords__3z2L1",
        errwarn: "ImportMnemonicOrSecret_errwarn__1lpB7"
      };
    },
    34: function(e, t, n) {
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
    35: function(e, t, n) {
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
    384: function(e, t, n) {},
    386: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        o = n(64),
        s = n.n(o),
        i = n(167),
        u = n.n(i),
        l = (n(186), n(187), n(390)),
        d = n(391),
        m = n(393),
        p = n(389),
        f = n(4),
        h = n(5),
        v = n(7),
        E = n(6),
        _ = n(8),
        g = n(392),
        b = n(12),
        k = {
          home: "/",
          createaccount: "/createaccount",
          importaccount: "/importAccount",
          accountdetail: "/accountdetail"
        },
        w = n(32),
        y = n(67),
        A = n.n(y),
        O = n(65),
        N = n(169),
        S = n.n(N),
        M = n(116);
      window.require && (a = window.require("electron").ipcRenderer);
      var C = a,
        j = n(47),
        x = n(46),
        I = n.n(x),
        P = n(10),
        T = n.n(P),
        B = n(55),
        K = n.n(B),
        D = n(170),
        U = n.n(D),
        L = {
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
            return U.a.validate(e, "BTC", "test") ? "" : t;
          },
          isValidMnemonic: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u52a9\u8bb0\u8bcd\u683c\u5f0f\u9519\u8bef";
            return I.a.validateMnemonic(e) ? "" : t;
          },
          isValidPrivateKey: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : T.a.networks.testnet,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "\u79c1\u94a5\u683c\u5f0f\u9519\u8bef";
            if (/^[\da-zA-Z]{64}$/.test(e)) return "";
            try {
              return T.a.ECPair.fromWIF(e, t), "";
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
              K.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
            } catch (a) {
              return n;
            }
          },
          check: function(e) {
            return function() {
              if (L[e]) return L[e].apply(L, arguments);
            };
          }
        },
        R = {
          generateMnemonic: function() {
            return C ? C.sendSync("GENERATE_MNEMONIC") : j.a.generateMnemonic();
          },
          generateAccount: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : T.a.networks.testnet;
            return C
              ? JSON.parse(C.sendSync("GENERATE_ACCOUNT", e))
              : j.a.generateAccount(e, t);
          },
          saveAccount: function(e) {
            C
              ? C.send("SAVE_ACCOUNT", JSON.stringify(e))
              : $.set("accounts", e);
          },
          getAccount: function() {
            return C
              ? JSON.parse(C.sendSync("GET_ACCOUNT"))
              : $.get("accounts");
          },
          sign: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return C ? C.sendSync("SIGN", t) : j.a.sign.apply(j.a, t);
          },
          isValidPassword: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return C
              ? C.sendSync("IS_VALID_PASSWORD", t)
              : L.check("isValidPassword").apply(void 0, t);
          },
          update: function() {
            C && C.send("UPDATE");
          },
          forceUpdate: function() {
            C && C.send("FORCE_UPDATE");
          }
        };
      C &&
        (C.on("isForceUpdate", function() {
          window.confirm(
            "\u5df2\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff0c\u662f\u5426\u7acb\u5373\u5b89\u88c5?"
          ) && R.forceUpdate();
        }),
        C.on("autoUpdater", function(e, t) {}));
      var q,
        G = n(13),
        W = n.n(G),
        F = n(22),
        V = n(26),
        X = n(85),
        H = n(54),
        J = n.n(H),
        z = function(e) {
          var t = e.url,
            n = e.method,
            a = void 0 === n ? "POST" : n,
            r = e.methodAlias,
            c = e.params,
            o = void 0 === c ? [] : c,
            s = e.body,
            i = e.timeOut,
            u = void 0 === i ? 1e4 : i,
            l = Object(X.a)(e, [
              "url",
              "method",
              "methodAlias",
              "params",
              "body",
              "timeOut"
            ]),
            d = J()(),
            m = s
              ? JSON.stringify(s)
              : JSON.stringify({ id: d, jsonrpc: "2.0", method: r, params: o }),
            p = function() {
              return fetch(
                t,
                Object(V.a)(
                  {
                    method: a,
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    }
                  },
                  "GET" === a.toUpperCase() ? {} : { body: m },
                  l
                )
              )
                .then(
                  (function() {
                    var e = Object(F.a)(
                      W.a.mark(function e(t) {
                        var n;
                        return W.a.wrap(function(e) {
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
                p(),
                new Promise(function(e, t) {
                  setTimeout(function() {
                    t("\u8bf7\u6c42\u8d85\u65f6");
                  }, u);
                })
              ])
            : p();
        },
        Q = function(e) {
          return isNaN(e) || void 0 === e || "" === e || e === {};
        },
        Y = function(e) {
          return "function" === typeof e;
        },
        Z = function(e) {
          return "string" === typeof e;
        },
        $ = {
          get: function(e) {
            return A.a.get(e);
          },
          set: function(e, t) {
            A.a.set(e, t);
          },
          remove: function(e) {
            A.a.remove(e);
          },
          clearAll: function() {
            A.a.clearAll();
          }
        },
        ee = {
          toPrecision: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              (t = Number(t)),
              Q(e) || Q(t) || isNaN(e)
                ? ""
                : n
                ? new O.BigNumber(e).multipliedBy(Math.pow(10, t)).toFixed(0)
                : new O.BigNumber(e).dividedBy(Math.pow(10, t)).toFixed(t)
            );
          },
          toBtcPrecision: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return ee.toPrecision(e, 8, t);
          }
        },
        te = function(e, t) {
          return Q(e) ? t : "".concat(e, " ").concat(t);
        },
        ne = {
          isMobile: function() {
            return M.a.mobile();
          },
          isDesktop: function() {
            return M.a.desktop();
          }
        },
        ae = (function(e) {
          function t(e) {
            var n;
            return (
              Object(f.a)(this, t),
              ((n = Object(v.a)(
                this,
                Object(E.a)(t).call(this, e)
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
                    Y(t) && t(e);
                  });
              }),
              (n._isMounted = !0),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.pageTitle &&
                    Y(this.props.setPageTitle) &&
                    this.props.setPageTitle(this.pageTitle),
                    this.state &&
                      this.state.step &&
                      Y(this.props.setGoBack) &&
                      this.props.setGoBack(function() {
                        e.state.step > 1 && e._isMounted
                          ? e.setState({ step: e.state.step - 1 })
                          : e.props.history && e.props.history.goBack();
                      }),
                    Y(this.startInit) && this.startInit();
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
        re = n(388),
        ce = n(171),
        oe =
          Object(re.a)(
            (q = (function(e) {
              function t() {
                return (
                  Object(f.a)(this, t),
                  Object(v.a)(this, Object(E.a)(t).apply(this, arguments))
                );
              }
              return (
                Object(_.a)(t, e),
                Object(h.a)(t, [
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
                        m = void 0 !== d && d,
                        p = e.onClick,
                        f = /http/.test(u) ? u : "http://".concat(u);
                      return m
                        ? c.a.createElement(
                            "a",
                            {
                              className: ce.url,
                              rel: "noopener noreferrer",
                              href: f,
                              target: "_blank",
                              onClick: function(e) {
                                if (C) {
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
                                  Y(p) && p();
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
          ) || q,
        se = n(41),
        ie = n(17),
        ue = n.n(ie),
        le = (function(e) {
          function t() {
            return (
              Object(f.a)(this, t),
              Object(v.a)(this, Object(E.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    m = e.className,
                    p = Object(X.a)(e, [
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
                    { className: se.container },
                    t && c.a.createElement("div", { className: se.label }, t),
                    c.a.createElement(
                      "div",
                      { className: se.content },
                      s &&
                        c.a.createElement("div", { className: se.prefix }, s),
                      c.a.createElement(
                        f,
                        Object.assign(
                          {
                            className: ue()(se.input, m),
                            type: l ? "password" : "text",
                            placeholder: u,
                            value: a,
                            onChange: function(e) {
                              r(e.target.value.trim());
                            },
                            onBlur: o
                          },
                          p
                        )
                      ),
                      i && c.a.createElement("div", { className: se.suffix }, i)
                    ),
                    c.a.createElement("div", { className: se.errMsg }, n)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        de = n(173),
        me = n.n(de),
        pe = n(86);
      function fe(e) {
        Object(r.useEffect)(function() {
          var e = new me.a(".clipboard");
          return function() {
            e.destroy();
          };
        }, []);
        var t = e.id || J()("clipboard_"),
          n = e.children,
          a = e.className,
          o = e.width;
        return c.a.createElement(
          "span",
          { className: ue()(pe.clipboard, a) },
          c.a.createElement(
            "span",
            {
              id: t,
              className: ue()(pe.children, o ? pe.ellipse : null),
              style: { width: o }
            },
            n
          ),
          c.a.createElement(
            _e,
            { tip: "\u590d\u5236\u6210\u529f", type: "click" },
            c.a.createElement("i", {
              className: "clipboard iconfont iconfuzhi",
              "data-clipboard-target": "#".concat(t),
              style: { marginLeft: n ? 8 : null, cursor: "pointer" }
            })
          )
        );
      }
      var he = n(56),
        ve = n.n(he),
        Ee = n(57),
        _e = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: J()("tooltip_") }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    m = n.place,
                    p = void 0 === m ? "bottom" : m,
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
                            { "data-for": t, "data-tip": h, className: Ee.tip },
                            a
                          ),
                          c.a.createElement(
                            ve.a,
                            {
                              effect: "solid",
                              offset: d,
                              multiline: !0,
                              id: t,
                              place: p,
                              className: ue()(Ee.tool, Ee[u])
                            },
                            h
                          )
                        )
                      : c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { id: t, "data-tip": h, className: Ee.tip },
                            c.a.createElement(
                              "span",
                              {
                                onClick: function(n) {
                                  n.stopPropagation(),
                                    r && Y(r)
                                      ? r(function(n) {
                                          n &&
                                            e.setState({ tip: n }, function() {
                                              ve.a.show(
                                                document.getElementById(t)
                                              );
                                            });
                                        })
                                      : ve.a.show(document.getElementById(t));
                                }
                              },
                              a
                            )
                          ),
                          c.a.createElement(ve.a, {
                            className: Ee.content,
                            event: "none",
                            effect: "solid",
                            isCapture: !0,
                            delayShow: 150,
                            afterShow: function() {
                              setTimeout(function() {
                                ve.a.hide(document.getElementById(t));
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
        ge = n(48),
        be = "https://api.chainx.org/bitx/txs";
      function ke(e) {
        return we.apply(this, arguments);
      }
      function we() {
        return (we = Object(F.a)(
          W.a.mark(function e(t) {
            var n,
              a,
              r = arguments;
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : "testnet"),
                      (a = "https://api.chainx.org.cn/bitx/"
                        .concat(n, "/")
                        .concat(t, "/balance")),
                      e.abrupt(
                        "return",
                        window.fetch(a).then(function(e) {
                          return e.json();
                        })
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
      function ye(e) {
        return Ae.apply(this, arguments);
      }
      function Ae() {
        return (Ae = Object(F.a)(
          W.a.mark(function e(t) {
            var n,
              a,
              r = arguments;
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : "testnet"),
                      (a = "https://api.chainx.org.cn/bitx/"
                        .concat(n, "/")
                        .concat(t, "/utxos")),
                      e.abrupt(
                        "return",
                        window.fetch(a).then(function(e) {
                          return e.json();
                        })
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
      function Oe(e) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = Object(F.a)(
          W.a.mark(function e(t) {
            var n,
              a,
              r = arguments;
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : "testnet"),
                      (a = { raw: t, network: n }),
                      e.abrupt(
                        "return",
                        z({ url: be, method: "POST", body: a })
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
      var Se = function(e) {
          return { type: "UPDATE_ACCOUNT_BALANCE", account: e };
        },
        Me = function(e) {
          return {
            type: "SET_Modal",
            modal: { name: e.name, show: e.show, data: e.data }
          };
        },
        Ce = function() {
          return (function() {
            var e = Object(F.a)(
              W.a.mark(function e(t, n) {
                var a, r, c, o, s, i, u;
                return W.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (
                            a = n(),
                              r = a.accounts,
                              c = !0,
                              o = !1,
                              s = void 0,
                              e.prev = 4,
                              i = r[Symbol.iterator]();
                            !(c = (u = i.next()).done);
                            c = !0
                          )
                            je(u.value, t);
                          e.next = 12;
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(4)),
                            (o = !0),
                            (s = e.t0);
                        case 12:
                          (e.prev = 12),
                            (e.prev = 13),
                            c || null == i.return || i.return();
                        case 15:
                          if (((e.prev = 15), !o)) {
                            e.next = 18;
                            break;
                          }
                          throw s;
                        case 18:
                          return e.finish(15);
                        case 19:
                          return e.finish(12);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 8, 12, 20], [13, , 15, 19]]
                );
              })
            );
            return function(t, n) {
              return e.apply(this, arguments);
            };
          })();
        };
      function je(e, t) {
        return xe.apply(this, arguments);
      }
      function xe() {
        return (xe = Object(F.a)(
          W.a.mark(function e(t, n) {
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    ke(t.address, t.network || "testnet").then(function() {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        a = Object(V.a)({}, t, e, {
                          balanceShow: ee.toBtcPrecision(e.confirmed)
                        });
                      n(Se(a));
                    });
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Ie = function(e) {
        return { type: "SET_NETWORK", network: e };
      };
      var Pe = function(e) {
          var t = e.title,
            n = e.children,
            a = e.className,
            r = e.closeCb,
            o = (
              Object(b.d)(function(e) {
                return e.modal;
              }) || {}
            ).show,
            s = Object(b.c)();
          return (
            o &&
            c.a.createElement(
              "div",
              {
                className: ue()(
                  ge.Modalcontainer,
                  ne.isMobile() ? ge.rootModalMobile : ge.rootModalDesktop
                ),
                id: "rootModal"
              },
              c.a.createElement(
                "div",
                { className: ue()(ge.content, a) },
                t &&
                  c.a.createElement(
                    "div",
                    {
                      className: ge.header,
                      onClick: function() {
                        r && r(), s(Me({ show: !1 }));
                      }
                    },
                    c.a.createElement("div", { className: ge.title }, t),
                    c.a.createElement("i", { className: "iconfont iconClose" })
                  ),
                n
              )
            )
          );
        },
        Te = n(174),
        Be = n.n(Te),
        Ke = n(49);
      var De = function(e) {
          var t = Object(r.useState)(!0),
            n = Object(w.a)(t, 2),
            a = n[0],
            o = n[1],
            s = Object(r.useState)(!1),
            i = Object(w.a)(s, 2),
            u = i[0],
            l = i[1],
            d = Object(b.c)(),
            m = e.changeClose,
            p = e.accounts,
            f = void 0 === p ? [] : p;
          return c.a.createElement(
            "div",
            { className: Ke.SelectModeGetAccount },
            f.length
              ? c.a.createElement(
                  "div",
                  { className: Ke.close, onClick: m },
                  c.a.createElement("i", {
                    className: "iconfont iconClose",
                    style: { cursor: "pointer" }
                  })
                )
              : null,
            c.a.createElement(
              "div",
              { className: Ke.bitx },
              c.a.createElement("img", { alt: "", src: Be.a, height: 55 })
            ),
            c.a.createElement(
              "div",
              { className: Ke.routerbutton },
              c.a.createElement(
                "div",
                null,
                c.a.createElement(
                  "button",
                  {
                    onClick: function() {
                      o(!0), l(!0);
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
                      o(!1), l(!0);
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
                    className: Ke.networkSelection,
                    onClick: function() {
                      return l(!1);
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
                      c.a.createElement("h3", null, "\u9009\u62e9\u7f51\u7edc"),
                      c.a.createElement(
                        "span",
                        {
                          onClick: function() {
                            return l(!1);
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
                        oe,
                        {
                          onClick: function() {
                            return d(Ie("mainnet"));
                          },
                          go: {
                            pathname: a ? k.createaccount : k.importaccount
                          }
                        },
                        "\u4e3b\u7f51"
                      ),
                      c.a.createElement("div", { className: Ke.separator }),
                      c.a.createElement(
                        oe,
                        {
                          onClick: function() {
                            return d(Ie("testnet"));
                          },
                          go: {
                            pathname: a ? k.createaccount : k.importaccount
                          }
                        },
                        "\u6d4b\u8bd5\u7f51"
                      )
                    )
                  )
                )
              : null
          );
        },
        Ue = n(34);
      var Le = function(e) {
          var t = Object(r.useState)((e.accounts || []).length > 0),
            n = Object(w.a)(t, 2),
            a = n[0],
            o = n[1],
            s = Object(b.c)();
          return (
            Object(r.useEffect)(function() {
              e.setPageTitle("BitX");
            }, []),
            Object(r.useEffect)(function() {
              s(Ce());
            }, []),
            c.a.createElement(
              "div",
              { className: Ue.AccountList },
              c.a.createElement(
                "div",
                { className: Ue.listtitle },
                c.a.createElement("div", null, "\u8d26\u6237\u5217\u8868"),
                c.a.createElement(
                  "div",
                  {
                    onClick: function() {
                      return o(!a);
                    }
                  },
                  c.a.createElement("i", {
                    className: "iconfont iconadd",
                    style: { cursor: "pointer" }
                  })
                )
              ),
              c.a.createElement(
                "ul",
                null,
                (e.accounts || []).map(function(e, t) {
                  return c.a.createElement(
                    oe,
                    {
                      key: t,
                      Ele: "li",
                      go: {
                        pathname: k.accountdetail,
                        search: "?address=".concat(e.address)
                      }
                    },
                    c.a.createElement("div", { className: Ue.seperate }),
                    c.a.createElement(
                      "div",
                      { className: Ue.desc },
                      c.a.createElement(
                        "div",
                        { className: Ue.title },
                        c.a.createElement(
                          "span",
                          { className: Ue.name },
                          e.name
                        ),
                        "mainnet" !== e.network
                          ? c.a.createElement(
                              "span",
                              { className: Ue.badge },
                              "\u6d4b\u8bd5\u7f51"
                            )
                          : null
                      ),
                      c.a.createElement(
                        "div",
                        { className: Ue.amount },
                        te(e.balanceShow, "BTC")
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: Ue.address },
                      e.address
                    )
                  );
                })
              ),
              a
                ? null
                : c.a.createElement(
                    De,
                    Object.assign({}, e, {
                      changeClose: function() {
                        o(!a);
                      }
                    })
                  )
            )
          );
        },
        Re = n(117),
        qe = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5907\u4efd\u52a9\u8bb0\u8bcd"),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.changeStep;
                  return c.a.createElement(
                    "div",
                    { className: Re.KnowAbout },
                    c.a.createElement("i", { className: "iconfont iconsuo" }),
                    c.a.createElement(
                      "div",
                      { className: Re.content },
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
        })(ae),
        Ge = n(87),
        We = (function(e) {
          function t() {
            return (
              Object(f.a)(this, t),
              Object(v.a)(this, Object(E.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.mnemonic,
                    n = e.changeStep;
                  return c.a.createElement(
                    "div",
                    { className: Ge.SaveMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Ge.desc },
                      "\u8bf7\u5c06\u4ee5\u4e0b12\u4e2a\u5355\u8bcd\u8bb0\u5728\u7eb8\u4e0a",
                      c.a.createElement("br", null),
                      "\u6211\u4eec\u4f1a\u5728\u4e4b\u540e\u8fdb\u884c\u9a8c\u8bc1"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Ge.generatewords },
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
        })(ae),
        Fe = n(42),
        Ve = (function(e) {
          function t(e) {
            var n;
            Object(f.a)(this, t),
              ((n = Object(v.a)(
                this,
                Object(E.a)(t).call(this, e)
              )).checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t = void 0 === e ? [] : e,
                    a = n.props.mnemonic,
                    r = L.check("strictEqual")(
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
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    { className: Fe.CheckMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Fe.desc },
                      "\u9a8c\u8bc1\u60a8\u8bb0\u4e0b\u7684\u52a9\u8bb0\u8bcd"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Fe.generatewords },
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
                      { className: ue()(Fe.writedesc, r && Fe.warn) },
                      "\u8bf7\u6309\u6b63\u786e\u7684\u987a\u5e8f\u70b9\u51fb\u5355\u8bcd"
                    ),
                    c.a.createElement(
                      "ul",
                      { className: Fe.allwords },
                      o.map(function(t, n) {
                        return c.a.createElement(
                          "li",
                          {
                            className: -1 !== i(n) ? Fe.active : null,
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
        })(ae),
        Xe = n(68),
        He = n(175),
        Je = n.n(He),
        ze = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
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
                    t = L.check("required")(e);
                  return n.setState({ nameErrMsg: t }), t;
                },
                checkPassword: function() {
                  var e = n.state.password,
                    t =
                      L.check("required")(e) ||
                      L.check("characterLength")(e, 8) ||
                      n.checkAll.checkEqual();
                  if ((n.setState({ passwordErrMsg: t }), t)) return !0;
                  var a = new Je.a()
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
                    t = L.check("required")(e) || n.checkAll.checkEqual();
                  return n.setState({ confirmPasswordErrMsg: t }), t;
                },
                checkEqual: function() {
                  var e = n.state,
                    t = e.password,
                    a = e.confirmPassword;
                  if (t && a) {
                    var r = L.check("equal")(t, a);
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
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    m = l.privateKey,
                    p = l.addAccount,
                    f = l.history,
                    h = l.network,
                    v =
                      "mainnet" === h
                        ? T.a.networks.bitcoin
                        : T.a.networks.testnet;
                  return c.a.createElement(
                    "div",
                    { className: Xe.SetPassword },
                    c.a.createElement(
                      "div",
                      { className: Xe.inputcontent },
                      c.a.createElement(
                        "div",
                        { className: Xe.desc },
                        "\u4e3a\u4f60\u7684\u94b1\u5305\u8d26\u6237\u8bbe\u7f6e\u5bc6\u7801"
                      ),
                      c.a.createElement(le, {
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
                      c.a.createElement(le, {
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
                      c.a.createElement(le, {
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
                      { className: Xe.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            if (t.confirm()) {
                              var e = R.generateAccount(
                                {
                                  name: a,
                                  mnemonic: d,
                                  wif: m,
                                  password: o,
                                  network: h
                                },
                                v
                              );
                              p(e), f.push({ pathname: k.home });
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
        })(ae),
        Qe = Object(b.b)(
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
        )(ze),
        Ye = n(69),
        Ze = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
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
                    r = L.check("required")(e) || R.isValidPassword(a, e);
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
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    m = i.currentAccount,
                    p = (m = void 0 === m ? {} : m).encryptedKey,
                    f = "mainnet" !== m.network;
                  return c.a.createElement(
                    Pe,
                    {
                      title: o
                        ? "\u4ea4\u6613\u5df2\u5e7f\u64ad"
                        : "\u8f93\u5165\u8d26\u6237\u5bc6\u7801"
                    },
                    o
                      ? c.a.createElement(
                          "div",
                          { className: Ye.success },
                          c.a.createElement("i", {
                            className: "iconfont iconsuccess"
                          }),
                          c.a.createElement(
                            "div",
                            { className: Ye.button },
                            c.a.createElement(
                              oe,
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
                            { className: Ye.userInput },
                            c.a.createElement(le, {
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
                            { className: Ye.button },
                            c.a.createElement(
                              "button",
                              {
                                onClick: Object(F.a)(
                                  W.a.mark(function n() {
                                    var r, c;
                                    return W.a.wrap(
                                      function(n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              if (!t.confirm()) {
                                                n.next = 14;
                                                break;
                                              }
                                              if (!Y(d)) {
                                                n.next = 14;
                                                break;
                                              }
                                              return (
                                                (n.prev = 2),
                                                (n.next = 5),
                                                d(p, a)
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
                                                (c = Z(n.t0)
                                                  ? n.t0
                                                  : n.t0.message &&
                                                    Z(n.t0.message)
                                                  ? n.t0.message
                                                  : n.t0.message &&
                                                    n.t0.message.error &&
                                                    Z(n.t0.message.error)
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
        })(ae),
        $e = n(176),
        et = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).state = { step: 1, mnemonic: R.generateMnemonic() }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.step,
                    n = e.mnemonic,
                    a = Object(V.a)({}, this.props, {
                      mnemonic: n,
                      changeStep: this.changeStep
                    });
                  return c.a.createElement(
                    "div",
                    { className: $e.CreateAccount },
                    1 === t && c.a.createElement(qe, a),
                    2 === t && c.a.createElement(We, a),
                    3 === t && c.a.createElement(Ve, a),
                    4 === t && c.a.createElement(Qe, a)
                  );
                }
              }
            ]),
            t
          );
        })(ae),
        tt = Object(b.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(et),
        nt = n(33),
        at = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).state = { userInput: "", userInputErrMsg: "" }),
              (n.checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t =
                      L.check("required")(e) ||
                      L.check("isValidMnemonic")(e.trim());
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
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    { className: nt.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: nt.desc },
                          "\u8bf7\u6309\u6b63\u786e\u987a\u5e8f\u8f93\u5165\u60a8\u7684\u52a9\u8bb0\u8bcd",
                          c.a.createElement("br", null),
                          "\u4ee5\u7a7a\u683c\u952e\u533a\u5206"
                        ),
                        c.a.createElement(
                          "div",
                          { className: nt.generatewords },
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
                            { className: nt.errwarn },
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
                        Qe,
                        Object.assign({}, this.props, { mnemonic: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(ae),
        rt = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).state = { userInput: "", userInputErrMsg: "" }),
              (n.checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t = void 0 === e ? [] : e,
                    a = n.props.network,
                    r =
                      L.check("required")(t) ||
                      L.check("isValidPrivateKey")(
                        t,
                        "mainnet" === a
                          ? T.a.networks.bitcoin
                          : T.a.networks.testnet
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
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                    { className: nt.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: nt.desc },
                          "\u8bf7\u8f93\u5165\u60a8\u7684\u94b1\u5305\u79c1\u94a5"
                        ),
                        c.a.createElement(
                          "div",
                          { className: nt.generatewords },
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
                            { className: nt.errwarn },
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
                        Qe,
                        Object.assign({}, this.props, { privateKey: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(ae),
        ct = Object(b.b)(function(e) {
          return { network: e.network };
        })(rt),
        ot = n(88),
        st = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5bfc\u5165\u8d26\u6237"),
              (n.state = { step: 1, activeIndex: 0 }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    n = t.step,
                    a = t.activeIndex,
                    r = Object(V.a)(
                      { step: n, changeStep: this.changeStep },
                      this.props
                    );
                  return c.a.createElement(
                    "div",
                    { className: ot.ImportAccount },
                    1 === n &&
                      c.a.createElement(
                        "ul",
                        { className: ot.selectmode },
                        [
                          "\u5bfc\u5165\u52a9\u8bb0\u8bcd",
                          "\u5bfc\u5165\u79c1\u94a5"
                        ].map(function(t, n) {
                          return c.a.createElement(
                            "li",
                            {
                              key: n,
                              className: a === n ? ot.active : null,
                              onClick: function() {
                                e.setState({ step: 1, activeIndex: n });
                              }
                            },
                            t
                          );
                        })
                      ),
                    0 === a && c.a.createElement(at, r),
                    1 === a && c.a.createElement(ct, r)
                  );
                }
              }
            ]),
            t
          );
        })(ae),
        it = Object(b.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(st),
        ut = n(70);
      function lt(e) {
        var t = e.currentAccount,
          n = void 0 === t ? {} : t,
          a = "mainnet" !== n.network;
        return c.a.createElement(
          "div",
          { className: ut.AccountInfo },
          c.a.createElement(
            "div",
            { className: ut.amount },
            n.balanceShow,
            c.a.createElement("span", null, "BTC")
          ),
          c.a.createElement(
            "div",
            { className: ut.address },
            c.a.createElement(fe, null, n.address)
          ),
          c.a.createElement(
            "div",
            { className: ut.watchother },
            c.a.createElement(
              oe,
              {
                isOutSide: !0,
                go: {
                  pathname: "https://live.blockcypher.com/btc"
                    .concat(a ? "-testnet" : "", "/address/")
                    .concat(n.address, "/")
                }
              },
              "\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b"
            )
          )
        );
      }
      function dt(e) {
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
      var mt = function(e) {
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
        pt = n(50);
      function ft(e) {
        var t = Object(r.useState)(""),
          n = Object(w.a)(t, 2),
          a = n[0],
          o = n[1],
          s = Object(r.useState)(""),
          i = Object(w.a)(s, 2),
          u = i[0],
          l = i[1],
          d = function() {
            var t = e.currentAccount,
              n = (t = void 0 === t ? {} : t).encryptedKey,
              r = L.check("required")(a) || R.isValidPassword(n, a);
            return l(r), r;
          };
        return c.a.createElement(
          "div",
          {
            className: ue()(e.className, pt.input_password),
            onClick: function(e) {
              return e.stopPropagation();
            }
          },
          c.a.createElement(
            "div",
            { className: pt.top },
            c.a.createElement(
              "span",
              { className: pt.title },
              "\u8f93\u5165\u8d26\u6237\u5bc6\u7801"
            ),
            c.a.createElement("i", {
              className: ue()("iconfont iconClose", pt.close),
              onClick: e.onClose
            })
          ),
          c.a.createElement(le, {
            className: pt.input,
            isPassword: !0,
            value: a,
            errMsg: u,
            onChange: function(e) {
              o(e), l("");
            },
            onBlur: d
          }),
          c.a.createElement(
            "button",
            {
              className: pt.confirm,
              onClick: function(t) {
                t.stopPropagation(), d() || e.passwordCallback(a);
              }
            },
            "\u786e\u5b9a"
          )
        );
      }
      function ht(e) {
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
      var vt = n(24),
        Et = n(35),
        _t = n(80),
        gt = (function(e) {
          function t() {
            var e, n;
            Object(f.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(E.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
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
                    t = L.check("required")(e) || L.check("isBTCAddress")(e);
                  return n.setState({ addressErrMsg: t }), t;
                },
                checkAmount: function() {
                  var e = n.state.amount,
                    t =
                      L.check("required")(e) ||
                      L.check("smallerOrEqual")(
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
                      L.check("required")(e) ||
                      L.check("smallerOrEqual")(
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
                    r = n.props.utxos,
                    c = Number(ee.toBtcPrecision(a, 8, !0)),
                    o = Number(ee.toBtcPrecision(t, 8, !0));
                  if (!Object(_t.b)(r, c, o)) {
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
                    a = e.addOpReturn ? L.check("required")(t) : "";
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
                t(a.address, a.network);
              }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "constructTx",
                value: function(e, t) {
                  var n = this.state,
                    a = n.address,
                    r = n.amount,
                    c = n.hex,
                    o = n.fee,
                    s = this.props.utxos,
                    i = this.props.currentAccount,
                    u = Number(ee.toBtcPrecision(r, 8, !0)),
                    l = Number(ee.toBtcPrecision(o, 8, !0));
                  return R.sign(s, i.address, a, u, l, c, e, t, i.network);
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
                    m = n.feeErrMsg,
                    p = this.props.currentAccount,
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
                      c.a.createElement(le, {
                        errMsg: r,
                        label: "\u63a5\u6536\u4eba\u5730\u5740",
                        value: a,
                        onBlur: t.checkAddress,
                        onChange: function(t) {
                          e.setState({ address: t });
                        }
                      }),
                      c.a.createElement(le, {
                        errMsg: s,
                        label: "\u8f6c\u8d26\u6570\u91cf",
                        value: o,
                        suffix: "BTC",
                        onBlur: t.checkAmount,
                        onChange: function(t) {
                          e.setState({ amount: t });
                        }
                      }),
                      c.a.createElement(le, {
                        errMsg: m,
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
                          c.a.createElement(le, {
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
                              e.props.openModal({
                                name: "transfer",
                                data: {
                                  callback: (function() {
                                    var t = Object(F.a)(
                                      W.a.mark(function t(n, a) {
                                        var r, c;
                                        return W.a.wrap(function(t) {
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
                                                  (t.next = 7), Oe(r, p.network)
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
                    "transfer" === v && c.a.createElement(Ze, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(ae),
        bt = Object(b.b)(
          function(e, t) {
            var n = (t.currentAccount || {}).address,
              a = e.utxos.find(function(e) {
                return e.address === n;
              });
            return { utxos: a ? a.utxos : [] };
          },
          function(e) {
            return {
              getAccountUtxos: function(t, n) {
                return e(
                  (function(e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "testnet";
                    return (function() {
                      var n = Object(F.a)(
                        W.a.mark(function n(a) {
                          var r;
                          return W.a.wrap(function(n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (n.next = 2), ye(e, t);
                                case 2:
                                  (r = n.sent),
                                    a({
                                      type: "ADD_UTXO",
                                      address: e,
                                      utxos: r
                                    });
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function(e) {
                        return n.apply(this, arguments);
                      };
                    })();
                  })(t, n)
                );
              },
              openModal: function(t) {
                var n = t.name,
                  a = t.data;
                e(Me({ name: n, data: a, show: !0 }));
              }
            };
          }
        )(gt),
        kt = n(177),
        wt = n.n(kt),
        yt = n(118);
      function At(e) {
        var t = Object(r.useRef)(null),
          n = e.currentAccount;
        return (
          Object(r.useEffect)(function() {
            new wt.a({ size: 190, element: t.current, value: n.address });
          }, []),
          c.a.createElement(
            "div",
            { className: yt.AccountReceive },
            c.a.createElement("canvas", { ref: t }),
            c.a.createElement(
              "div",
              { className: yt.desc },
              "\u5730\u5740\u4e8c\u7ef4\u7801"
            )
          )
        );
      }
      function Ot(e) {
        var t = Object(r.useState)(0),
          n = Object(w.a)(t, 2),
          a = n[0],
          o = n[1];
        return c.a.createElement(
          "div",
          {
            className: vt.content,
            style: { background: 1 === a ? "white" : "" }
          },
          c.a.createElement(
            "ul",
            { className: vt.selectmode },
            ["\u53d1\u9001", "\u63a5\u6536"].map(function(e, t) {
              return c.a.createElement(
                "li",
                {
                  key: t,
                  className: a === t ? vt.active : null,
                  onClick: function() {
                    return o(t);
                  }
                },
                e
              );
            })
          ),
          0 === a && c.a.createElement(bt, e),
          1 === a && c.a.createElement(At, e)
        );
      }
      var Nt = (function(e) {
          function t(e) {
            var n;
            Object(f.a)(this, t),
              (n = Object(v.a)(this, Object(E.a)(t).call(this, e)));
            var a = e.currentAccount;
            return (
              (n.pageTitle = a.name),
              (n.didMount = ae.prototype.componentDidMount),
              (n.state = {
                showMenu: !1,
                status: "toExportKey",
                privateKey: "",
                passwordCallback: function() {}
              }),
              n
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
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
                  var t = this.props.currentAccount,
                    n = void 0 === t ? {} : t;
                  this.props.getAccountBalance(n);
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
                    n = t.status,
                    a = t.showMenu,
                    r = t.privateKey,
                    o = t.passwordCallback,
                    s = this.props,
                    i = s.currentAccount,
                    u = (i = void 0 === i ? {} : i).encryptedKey,
                    l = s.deleteAccount;
                  return c.a.createElement(
                    "div",
                    { className: vt.AccountDetail },
                    c.a.createElement(lt, this.props),
                    c.a.createElement(Ot, this.props),
                    a &&
                      c.a.createElement(
                        "div",
                        {
                          className: vt.modalWrapper,
                          onClick: function() {
                            e.setState({ showMenu: !1, status: "toExportKey" });
                          }
                        },
                        "toExportKey" === n &&
                          c.a.createElement(
                            "div",
                            { className: vt.menu },
                            c.a.createElement(dt, {
                              className: vt.export_key,
                              onClick: function() {
                                e.setState({
                                  status: "inputPassword",
                                  passwordCallback: function(t) {
                                    var n = j.a.decryptPair(u, t).privateKey;
                                    e.setState({
                                      privateKey: n.toString("hex"),
                                      status: "showPrivateKey"
                                    });
                                  }
                                });
                              }
                            }),
                            c.a.createElement(mt, {
                              onClick: function() {
                                e.setState({
                                  status: "inputPassword",
                                  passwordCallback: function() {
                                    l(e.props.currentAccount.address),
                                      Y(e.props.goBack)
                                        ? e.props.goBack()
                                        : e.props.history.goBack();
                                  }
                                });
                              },
                              className: vt.export_key
                            })
                          ),
                        "inputPassword" === n &&
                          c.a.createElement(
                            "div",
                            { className: vt.menu },
                            c.a.createElement(
                              ft,
                              Object.assign({}, this.props, {
                                onClose: function() {
                                  e.setState({
                                    showMenu: !1,
                                    status: "toExportKey"
                                  });
                                },
                                passwordCallback: o,
                                setPrivateKey: function(t) {
                                  return e.setState({
                                    privateKey: t,
                                    status: "showPrivateKey"
                                  });
                                }
                              })
                            )
                          ),
                        "showPrivateKey" === n &&
                          c.a.createElement(
                            "div",
                            { className: vt.menu },
                            c.a.createElement(ht, {
                              styles: vt,
                              privateKey: r,
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
        })(ae),
        St = Object(b.b)(
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
              },
              getAccountBalance: function(t) {
                return e(
                  (function(e) {
                    return (function() {
                      var t = Object(F.a)(
                        W.a.mark(function t(n) {
                          return W.a.wrap(function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), je(e, n);
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function(e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t)
                );
              }
            };
          }
        )(Nt),
        Mt = [
          { component: Le, path: k.home, title: "BitX" },
          { component: tt, path: k.createaccount, title: "" },
          { component: it, path: k.importaccount, title: "" },
          { component: St, path: k.accountdetail, title: "" }
        ],
        Ct = n(178),
        jt = function(e) {
          return c.a.createElement(
            "div",
            { className: Ct.wrapper },
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
        xt = n(89);
      function It(e) {
        var t = e.history,
          n = e.history.location.pathname,
          a = Object(b.d)(function(e) {
            return e.menu;
          }),
          r = a.show,
          o = a.cb,
          s = Object(b.d)(function(e) {
            return e.goBack;
          }),
          i =
            n !== k.home &&
            c.a.createElement("i", {
              className: ue()("iconfont iconback1", xt.back),
              onClick: function() {
                Y(s) ? s() : t.goBack();
              }
            }),
          u =
            r &&
            c.a.createElement("i", {
              className: ue()("iconfont iconmore", xt.menu),
              onClick: function() {
                return o();
              }
            });
        return c.a.createElement(
          "div",
          { className: xt.Header },
          i,
          e.children,
          u
        );
      }
      var Pt = n(90),
        Tt = (function(e) {
          function t() {
            return (
              Object(f.a)(this, t),
              Object(v.a)(this, Object(E.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_.a)(t, e),
            Object(h.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  R.update();
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
                    f = ((e = i), S.a.parse(e)).address;
                  return (
                    f &&
                      (d =
                        r.filter(function() {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                            ).address === f
                          );
                        })[0] || {}),
                    c.a.createElement(
                      "div",
                      { className: Pt.CommonLayOut },
                      c.a.createElement(
                        "div",
                        { className: Pt.header },
                        c.a.createElement(It, this.props, o)
                      ),
                      c.a.createElement(
                        "div",
                        { className: Pt.content },
                        c.a.createElement(
                          m.a,
                          null,
                          Mt.map(function(e, n) {
                            return c.a.createElement(p.a, {
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
                          c.a.createElement(g.a, { to: k.home })
                        )
                      ),
                      !u.seenWarning && c.a.createElement(jt, { setSeen: l })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Bt = Object(b.b)(
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
                return e(Me({ name: n, show: a, data: r }));
              },
              getAllAccountBalance: function() {
                return e(Ce());
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
        )(Tt);
      n(384);
      var Kt = function(e) {
        Object(r.useEffect)(function() {
          ne.isMobile()
            ? document
                .getElementById("root")
                .setAttribute("class", "root-mobile")
            : document
                .getElementById("root")
                .setAttribute("class", "root-desktop");
        }, []);
        var t = C ? l.a : d.a;
        return c.a.createElement(
          t,
          null,
          c.a.createElement(
            m.a,
            null,
            c.a.createElement(p.a, {
              path: "/",
              render: function(t) {
                return c.a.createElement(Bt, Object.assign({}, t, e));
              }
            })
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Dt = n(39),
        Ut = n(66),
        Lt = R.getAccount();
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
        R.saveAccount(t);
      }
      (Lt && Array.isArray(Lt)) || (Lt = []),
        "undefined" === typeof $.get("accountVersion") &&
          $.set("accountVersion", 1);
      var qt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Lt,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if ("ADD_ACCOUNT" === t.type) {
            var n = [].concat(Object(Ut.a)(e), [t.account]);
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
        Gt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "GENERATE_MNEMONIC" === t.type
            ? I.a.generateMnemonic().split(" ")
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
          if ("ADD_UTXO" === t.type) {
            var n = e.findIndex(function(e) {
              return e.address === t.address;
            });
            if (n < 0)
              return [{ utxos: t.utxos, address: t.address }].concat(
                Object(Ut.a)(e)
              );
            var a = Object(Ut.a)(e);
            return a.splice(n, 1, { utxos: t.utxos, address: t.address }), a;
          }
          return e;
        },
        Ft = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_PAGE_TITLE" === t.type ? t.pageTitle : e;
        },
        Vt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { name: "", show: !1 },
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return "SET_Modal" === t.type ? Object(V.a)({}, e, t.modal) : e;
        },
        Xt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_GO_BACK" === t.type ? t.goBack : e;
        },
        Ht = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "testnet",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_NETWORK" === t.type ? t.network : e;
        },
        Jt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { show: !1, cb: null },
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_MENU" === t.type ? t.menu : e;
        },
        zt = $.get("appData") || {},
        Qt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : zt,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if ("SET_SEEN_WARNING" === t.type) {
            var n = Object(V.a)({}, e, { seenWarning: t.seenWarning });
            return $.set("appData", n), n;
          }
          return e;
        },
        Yt = Object(Dt.c)({
          accounts: qt,
          network: Ht,
          newMnemonic: Gt,
          utxos: Wt,
          pageTitle: Ft,
          modal: Vt,
          goBack: Xt,
          menu: Jt,
          app: Qt
        }),
        Zt = (n(385), n(179)),
        $t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Dt.d,
        en = Object(Dt.e)(Yt, $t(Object(Dt.a)(Zt.a)));
      u()(),
        s.a.render(
          c.a.createElement(b.a, { store: en }, c.a.createElement(Kt, null)),
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
      "use strict";
      (function(e) {
        n.d(t, "a", function() {
          return p;
        });
        var a = n(46),
          r = n.n(a),
          c = n(113),
          o = n.n(c),
          s = n(55),
          i = n.n(s),
          u = n(10),
          l = n.n(u),
          d = n(80);
        function m(e) {
          return e === l.a.networks.bitcoin
            ? "mainnet"
            : e === l.a.networks.testnet
            ? "testnet"
            : "";
        }
        var p = {
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
              p = "m/44'/1'/0'/0/0";
            d === l.a.networks.bitcoin && (p = "m/44'/0'/0'/0/0");
            var f = { N: 128, r: 8, p: 8 };
            if (a && c && s) {
              var h = r.a.mnemonicToSeed(c),
                v = o.a.fromSeed(h, d).derivePath(p),
                E = l.a.payments.p2pkh({ pubkey: v.publicKey, network: d }),
                _ = i.a.encrypt(v.privateKey, !0, s, null, f);
              n = {
                name: a,
                address: E.address,
                encryptedKey: _,
                network: m(d)
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
                  network: m(d)
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
              a = p.decrypt(e, t);
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
            var u = p.decryptPair(o, s, i);
            return Object(d.a)(e, t, n, a, r, c, u, i);
          }
        };
      }.call(this, n(9).Buffer));
    },
    48: function(e, t, n) {
      e.exports = {
        Modalcontainer: "Modal_Modalcontainer__1-1i6",
        rootModalDesktop: "Modal_rootModalDesktop__1q3ON",
        content: "Modal_content__NqUgg",
        header: "Modal_header__2JJ9S",
        title: "Modal_title__tK9-d"
      };
    },
    49: function(e, t, n) {
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
    50: function(e, t, n) {
      e.exports = {
        input_password: "InputPassword_input_password__xHtXz",
        top: "InputPassword_top__G92ug",
        title: "InputPassword_title__3_ocN",
        close: "InputPassword_close__K_nj7",
        input: "InputPassword_input__k0YnT",
        confirm: "InputPassword_confirm__B83Pv"
      };
    },
    57: function(e, t, n) {
      e.exports = {
        tool: "Tooltip_tool__1CxeX",
        large: "Tooltip_large__rLp1V"
      };
    },
    68: function(e, t, n) {
      e.exports = {
        SetPassword: "SetPassword_SetPassword__3XwEv",
        inputcontent: "SetPassword_inputcontent__1aACH",
        desc: "SetPassword_desc__3ZVMp",
        button: "SetPassword_button__1G1mm"
      };
    },
    69: function(e, t, n) {
      e.exports = {
        success: "SignModal_success__3vCKm",
        button: "SignModal_button__1kWfr",
        userInput: "SignModal_userInput__ljZ7i"
      };
    },
    70: function(e, t, n) {
      e.exports = {
        AccountInfo: "AccountInfo_AccountInfo__13Hon",
        amount: "AccountInfo_amount__3cznI",
        address: "AccountInfo_address__2mibn",
        watchother: "AccountInfo_watchother__RHieT"
      };
    },
    80: function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "b", function() {
          return s;
        }),
          n.d(t, "a", function() {
            return i;
          });
        var a = n(65),
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
                  var m = l.value;
                  if ((c.push(m), (o += m.value) >= t + n)) break;
                }
              } catch (p) {
                (i = !0), (u = p);
              } finally {
                try {
                  s || null == d.return || d.return();
                } finally {
                  if (i) throw u;
                }
              }
              return o >= t + n ? c : [];
            })(t, c, s),
            m = new o.a.TransactionBuilder(l);
          m.setVersion(1);
          var p = 0,
            f = !0,
            h = !1,
            v = void 0;
          try {
            for (
              var E, _ = d[Symbol.iterator]();
              !(f = (E = _.next()).done);
              f = !0
            ) {
              var g = E.value;
              m.addInput(g.mintTxid, g.mintIndex, 0), (p += g.value);
            }
          } catch (w) {
            (h = !0), (v = w);
          } finally {
            try {
              f || null == _.return || _.return();
            } finally {
              if (h) throw v;
            }
          }
          m.addOutput(a, c);
          var b = p - c - s;
          if ((b > 1e3 && m.addOutput(n, b), i)) {
            var k = o.a.payments.embed({ data: [e.from(i, "hex")] });
            m.addOutput(k.output, 0);
          }
          return (
            d.forEach(function(e, t) {
              m.sign(t, u);
            }),
            m.build().toHex()
          );
        }
      }.call(this, n(9).Buffer));
    },
    86: function(e, t, n) {
      e.exports = {
        clipboard: "Clipboard_clipboard__3NJHh",
        children: "Clipboard_children__2QF2s",
        ellipse: "Clipboard_ellipse__2fy2X"
      };
    },
    87: function(e, t, n) {
      e.exports = {
        SaveMnemonic: "SaveMnemonic_SaveMnemonic__3U0v-",
        desc: "SaveMnemonic_desc__3l6VF",
        generatewords: "SaveMnemonic_generatewords__AJdtz"
      };
    },
    88: function(e, t, n) {
      e.exports = {
        ImportAccount: "ImportAccount_ImportAccount__1j0yl",
        selectmode: "ImportAccount_selectmode__1Nurw",
        active: "ImportAccount_active__ffKXC"
      };
    },
    89: function(e, t, n) {
      e.exports = {
        Header: "Header_Header__2CI_T",
        back: "Header_back__3QuoP",
        menu: "Header_menu__1gycx"
      };
    },
    90: function(e, t, n) {
      e.exports = {
        CommonLayOut: "CommonLayOut_CommonLayOut__3AODs",
        content: "CommonLayOut_content__1-0gL"
      };
    }
  },
  [[181, 1, 2]]
]);
//# sourceMappingURL=main.a3959dfd.chunk.js.map
