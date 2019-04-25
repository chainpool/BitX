(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    111: function(e, t, n) {
      e.exports = {
        KnowAbout: "KnowAbout_KnowAbout__Bn6Bp",
        content: "KnowAbout_content__3ZC3u"
      };
    },
    112: function(e, t, n) {
      e.exports = {
        AccountReceive: "AccountReceive_AccountReceive__2fTzv",
        desc: "AccountReceive_desc__Or9TB"
      };
    },
    165: function(e, t, n) {
      e.exports = { url: "RouterGo_url__2u7y-" };
    },
    169: function(e, t, n) {
      e.exports = n.p + "static/media/Bitx.41fc5ea2.png";
    },
    170: function(e, t, n) {
      e.exports = { CreateAccount: "CreateAccount_CreateAccount__39hWI" };
    },
    172: function(e, t, n) {
      e.exports = { Header: "Header_Header__2CMTx" };
    },
    174: function(e, t, n) {
      e.exports = n(378);
    },
    180: function(e, t, n) {},
    208: function(e, t) {},
    210: function(e, t) {},
    238: function(e, t) {},
    241: function(e, t) {},
    31: function(e, t, n) {
      e.exports = {
        ImportMnemonic: "ImportMnemonicOrSecret_ImportMnemonic__2BDkT",
        desc: "ImportMnemonicOrSecret_desc__3mRTl",
        generatewords: "ImportMnemonicOrSecret_generatewords__1_2yl",
        errwarn: "ImportMnemonicOrSecret_errwarn__1lcBr"
      };
    },
    32: function(e, t, n) {
      e.exports = {
        AccountSend: "AccountSend_AccountSend__QmSI2",
        userInput: "AccountSend_userInput__1C639",
        addreturn: "AccountSend_addreturn__3Av69",
        returncontent: "AccountSend_returncontent__3W2EE",
        input: "AccountSend_input__1cYxC",
        ASCII: "AccountSend_ASCII__zTmJb",
        label: "AccountSend_label__3Kxd7",
        button: "AccountSend_button__xc9JL"
      };
    },
    37: function(e, t, n) {
      e.exports = {
        container: "Input_container__1i2Xt",
        label: "Input_label__19jTK",
        content: "Input_content__3XsMh",
        input: "Input_input__2BivL",
        suffix: "Input_suffix__1H2we",
        errMsg: "Input_errMsg__xq-rx"
      };
    },
    376: function(e, t, n) {},
    378: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        o = n(105),
        s = n.n(o),
        i = n(161),
        u = n.n(i),
        l = (n(179), n(180), n(3)),
        d = n(4),
        m = n(6),
        p = n(5),
        h = n(7),
        f = n(382),
        v = n(381),
        b = n(167),
        g = n(383),
        E = n(14),
        _ = "/",
        O = "/createaccount",
        y = "/importAccount",
        k = "/accountdetail",
        A = n(61),
        w = n.n(A),
        j = n(60),
        M = n(163),
        N = n.n(M),
        S = n(110);
      window.require && (a = window.require("electron").ipcRenderer);
      var C = a,
        x = n(43),
        I = n.n(x),
        T = n(107),
        P = n.n(T),
        B = n(50),
        D = n.n(B),
        U = n(18),
        L = n.n(U),
        q = n(76),
        K = {
          generateMnemonic: function() {
            return I.a.generateMnemonic();
          },
          generateAccount: function(e) {
            var t,
              n = e.name,
              a = e.mnemonic,
              r = e.password,
              c = e.wif,
              o = { N: 128, r: 8, p: 8 };
            if (n && a && r) {
              var s = I.a.mnemonicToSeed(a),
                i = P.a.fromSeed(s).derivePath("m/44'/1'/0'/0/0"),
                u = L.a.payments.p2pkh({
                  pubkey: i.publicKey,
                  network: L.a.networks.testnet
                }),
                l = D.a.encrypt(i.privateKey, !0, r, null, o);
              t = { name: n, address: u.address, encryptedKey: l };
            } else if (n && c && r) {
              var d = L.a.ECPair.fromWIF(c, L.a.networks.testnet);
              t = {
                name: n,
                address: L.a.payments.p2pkh({
                  pubkey: d.publicKey,
                  network: L.a.networks.testnet
                }).address,
                encryptedKey: D.a.encrypt(
                  d.privateKey,
                  d.compressed,
                  r,
                  console.log,
                  o
                )
              };
            }
            return t;
          },
          decrypt: function(e, t) {
            return D.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
          },
          decryptPair: function(e, t) {
            var n = K.decrypt(e, t);
            return L.a.ECPair.fromPrivateKey(n.privateKey, {
              compressed: n.compressed,
              network: L.a.networks.testnet
            });
          },
          sign: function(e, t, n, a, r, c, o, s) {
            var i = K.decryptPair(o, s);
            return Object(q.a)(e, t, n, a, r, c, i);
          }
        },
        R = n(164),
        G = n.n(R),
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
            return G.a.validate(e, "BTC", "test") ? "" : t;
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
                : "\u79c1\u94a5\u683c\u5f0f\u9519\u8bef";
            try {
              return L.a.ECPair.fromWIF(e, L.a.networks.testnet), "";
            } catch (n) {
              return t;
            }
          },
          isValidPassword: function(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "\u5bc6\u7801\u9519\u8bef";
            try {
              D.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
            } catch (a) {
              return n;
            }
          },
          check: function(e) {
            return function() {
              return F[e]
                ? F[e].apply(F, arguments)
                : console.error(
                    "check\u5bf9\u5e94\u7684\u65b9\u6cd5\u5fc5\u987b\u5b58\u5728"
                  );
            };
          }
        },
        V = {
          generateMnemonic: function() {
            return C ? C.sendSync("GENERATE_MNEMONIC") : K.generateMnemonic();
          },
          generateAccount: function(e) {
            return C
              ? JSON.parse(C.sendSync("GENERATE_ACCOUNT", e))
              : K.generateAccount(e);
          },
          decrypt: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return C ? C.sendSync("DECRYPT", t) : K.decrypt.apply(K, t);
          },
          saveAccount: function(e) {
            C
              ? C.send("SAVE_ACCOUNT", JSON.stringify(e))
              : ae.set("accounts", e);
          },
          getAccount: function() {
            return C
              ? JSON.parse(C.sendSync("GET_ACCOUNT"))
              : ae.get("accounts");
          },
          sign: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return C ? C.sendSync("SIGN", t) : K.sign.apply(K, t);
          },
          isValidPassword: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return C
              ? C.sendSync("IS_VALID_PASSWORD", t)
              : F.check("isValidPassword").apply(void 0, t);
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
          ) && V.forceUpdate();
        }),
        C.on("autoUpdater", function(e, t) {
          console.log(t);
        }));
      var J,
        H = n(17),
        W = n.n(H),
        X = n(30),
        z = n(29),
        Y = n(79),
        Z = n(48),
        Q = n.n(Z),
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
            l = Object(Y.a)(e, [
              "url",
              "method",
              "methodAlias",
              "params",
              "body",
              "timeOut"
            ]),
            d = Q()(),
            m = s
              ? JSON.stringify(s)
              : JSON.stringify({ id: d, jsonrpc: "2.0", method: r, params: o }),
            p = function() {
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
                  "GET" === a.toUpperCase() ? {} : { body: m },
                  l
                )
              )
                .then(
                  (function() {
                    var e = Object(X.a)(
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
            return w.a.get(e);
          },
          set: function(e, t) {
            w.a.set(e, t);
          },
          remove: function(e) {
            w.a.remove(e);
          },
          clearAll: function() {
            w.a.clearAll();
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
                ? new j.BigNumber(e).multipliedBy(Math.pow(10, t)).toFixed(0)
                : new j.BigNumber(e).dividedBy(Math.pow(10, t)).toFixed(t)
            );
          },
          toBtcPrecision: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return re.toPrecision(e, 8, t);
          }
        },
        ce = function() {
          return S.a.mobile();
        },
        oe = (function(e) {
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = Object(m.a)(
                this,
                Object(p.a)(t).call(this, e)
              )).openModal = function(e) {
                var t = e.name,
                  a = e.data;
                n.props.setModal
                  ? n.props.setModal({ name: t, data: a, show: !0 })
                  : console.log(
                      "this.props.setModal\u4e0d\u5b58\u5728\uff0c\u8bf7\u628a\u5bb9\u5668\u7ec4\u4ef6\u7684setModal\u4f20\u9012\u7ed9\u5f53\u524d\u7ec4\u4ef6"
                    );
              }),
              (n.closeModal = function() {
                n.props.setModal
                  ? n.props.setModal({ name: "", data: "", show: !1 })
                  : console.log(
                      "this.props.setModal\u4e0d\u5b58\u5728\uff0c\u8bf7\u628a\u5bb9\u5668\u7ec4\u4ef6\u7684setModal\u4f20\u9012\u7ed9\u5f53\u524d\u7ec4\u4ef6"
                    );
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
            Object(h.a)(t, e),
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
                        e.state.step > 1
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
        se = n(380),
        ie = n(165),
        ue =
          Object(se.a)(
            (J = (function(e) {
              function t() {
                return (
                  Object(l.a)(this, t),
                  Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
                );
              }
              return (
                Object(h.a)(t, e),
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
                        m = void 0 !== d && d,
                        p = e.onClick,
                        h = /http/.test(u) ? u : "http://".concat(u);
                      return m
                        ? c.a.createElement(
                            "a",
                            {
                              className: ie.url,
                              rel: "noopener noreferrer",
                              href: h,
                              target: "_blank"
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
                                  te(p) && p();
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
          ) || J,
        le = n(37),
        de = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
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
                    m = Object(Y.a)(e, [
                      "label",
                      "errMsg",
                      "value",
                      "onChange",
                      "onBlur",
                      "prefix",
                      "suffix",
                      "placeholder",
                      "isPassword",
                      "isTextArea"
                    ]),
                    p = d ? "textarea" : "input";
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
                        p,
                        Object.assign(
                          {
                            className: le.input,
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
                    n && c.a.createElement("div", { className: le.errMsg }, n)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        me = n(168),
        pe = n.n(me),
        he = n(28),
        fe = n.n(he),
        ve = n(80),
        be = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: n.props.id || Q()("clipboard_") }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.outInner,
                    t = void 0 === e ? "" : e;
                  new pe.a(t ? ".outerInner" : ".clipboard");
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
                    { className: fe()(ve.clipboard, a) },
                    c.a.createElement(
                      "span",
                      {
                        id: e,
                        className: fe()(ve.children, r ? ve.ellipse : null),
                        style: { width: r }
                      },
                      n
                    ),
                    c.a.createElement(
                      Oe,
                      { tip: "\u590d\u5236\u6210\u529f", type: "click" },
                      c.a.createElement("i", {
                        className: "clipboard iconfont iconfuzhi",
                        "data-clipboard-target": "#".concat(e),
                        style: { marginLeft: n ? 8 : null }
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
        ge = n(52),
        Ee = n.n(ge),
        _e = n(53),
        Oe = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: Q()("tooltip_") }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
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
                    m = n.place,
                    p = void 0 === m ? "bottom" : m,
                    h = n.tip,
                    f = void 0 === h ? "tooltip\u63d0\u793a" : h;
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    "hover" === s
                      ? c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { "data-for": t, "data-tip": f, className: _e.tip },
                            a
                          ),
                          c.a.createElement(
                            Ee.a,
                            {
                              effect: "solid",
                              offset: d,
                              multiline: !0,
                              id: t,
                              place: p,
                              className: fe()(_e.tool, _e[u])
                            },
                            f
                          )
                        )
                      : c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { id: t, "data-tip": f, className: _e.tip },
                            c.a.createElement(
                              "span",
                              {
                                onClick: function(n) {
                                  n.stopPropagation(),
                                    r && te(r)
                                      ? r(function(n) {
                                          n &&
                                            e.setState({ tip: n }, function() {
                                              Ee.a.show(
                                                document.getElementById(t)
                                              );
                                            });
                                        })
                                      : Ee.a.show(document.getElementById(t));
                                }
                              },
                              a
                            )
                          ),
                          c.a.createElement(Ee.a, {
                            className: _e.content,
                            event: "none",
                            effect: "solid",
                            isCapture: !0,
                            delayShow: 150,
                            afterShow: function() {
                              setTimeout(function() {
                                Ee.a.hide(document.getElementById(t));
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
        ye = n(44),
        ke = "https://api.chainx.org/bitx/testnet",
        Ae = "https://api.chainx.org/bitx/txs";
      function we() {
        return (we = Object(X.a)(
          W.a.mark(function e(t) {
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      window
                        .fetch(ke + "/".concat(t, "/balance"))
                        .then(function(e) {
                          return e.json();
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
      function je() {
        return (je = Object(X.a)(
          W.a.mark(function e(t) {
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      window
                        .fetch(ke + "/".concat(t, "/utxos"))
                        .then(function(e) {
                          return e.json();
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
      function Me(e) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = Object(X.a)(
          W.a.mark(function e(t) {
            var n;
            return W.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = { raw: t }),
                      e.abrupt(
                        "return",
                        $({ url: Ae, method: "POST", body: n })
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
      var Se = function(e) {
          return {
            type: "SET_Modal",
            modal: { name: e.name, show: e.show, data: e.data }
          };
        },
        Ce = function(e) {
          return function() {
            return (function(e) {
              return je.apply(this, arguments);
            })(e);
          };
        },
        xe = function() {
          return function(e, t) {
            for (
              var n = t().accounts,
                a = function(t) {
                  (function(e) {
                    return we.apply(this, arguments);
                  })(n[t].address).then(function() {
                    var a =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = Object(z.a)({}, n[t], a, {
                        balanceShow: re.toBtcPrecision(a.balance)
                      });
                    e({ type: "UPDATE_ACCOUNT_BALANCE", account: r });
                  });
                },
                r = 0;
              r < n.length;
              r++
            )
              a(r);
          };
        },
        Ie = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.title,
                    n = e.setModal,
                    a = e.modal,
                    r = (a = void 0 === a ? {} : a).show,
                    o = e.children;
                  return (
                    r &&
                    c.a.createElement(
                      "div",
                      {
                        className: fe()(
                          ye.Modalcontainer,
                          ce() ? ye.rootModalMobile : ye.rootModalDesktop
                        ),
                        id: "rootModal"
                      },
                      c.a.createElement(
                        "div",
                        { className: ye.content },
                        c.a.createElement(
                          "div",
                          {
                            className: ye.header,
                            onClick: function() {
                              n(!1);
                            }
                          },
                          c.a.createElement("div", { className: ye.title }, t),
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
        Te = Object(E.b)(
          function(e) {
            return { modal: e.modal };
          },
          function(e) {
            return {
              setModal: function(t) {
                return e(Se({ show: t }));
              }
            };
          }
        )(Ie),
        Pe = n(169),
        Be = n.n(Pe),
        De = n(62),
        Ue = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.changeClose,
                    n = e.accounts,
                    a = void 0 === n ? [] : n;
                  return c.a.createElement(
                    "div",
                    { className: De.SelectModeGetAccount },
                    a.length
                      ? c.a.createElement(
                          "div",
                          { className: De.close, onClick: t },
                          c.a.createElement("i", {
                            className: "iconfont iconClose"
                          })
                        )
                      : null,
                    c.a.createElement(
                      "div",
                      { className: De.bitx },
                      c.a.createElement("img", {
                        alt: "",
                        src: Be.a,
                        height: 55
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { className: De.routerbutton },
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          ue,
                          { go: { pathname: O } },
                          c.a.createElement(
                            "button",
                            null,
                            "\u521b\u5efa\u8d26\u6237"
                          )
                        )
                      ),
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          ue,
                          { go: { pathname: y } },
                          c.a.createElement(
                            "button",
                            null,
                            "\u5bfc\u5165\u8d26\u6237"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Le = n(38),
        qe = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              ((n = Object(m.a)(this, Object(p.a)(t).call(this, e))).pageTitle =
                "Bitx"),
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
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.changeClose,
                    t = this.state.close,
                    n = this.props.accounts,
                    a = void 0 === n ? [] : n;
                  return (
                    console.log(a, "-----accounts"),
                    c.a.createElement(
                      "div",
                      { className: Le.AccountList },
                      c.a.createElement(
                        "div",
                        { className: Le.listtitle },
                        c.a.createElement(
                          "div",
                          null,
                          "\u8d26\u6237\u5217\u8868"
                        ),
                        c.a.createElement(
                          "div",
                          { onClick: e },
                          c.a.createElement("i", {
                            className: "iconfont iconadd"
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
                                pathname: k,
                                search: "?address=".concat(e.address)
                              }
                            },
                            c.a.createElement("div", {
                              className: Le.seperate
                            }),
                            c.a.createElement(
                              "div",
                              { className: Le.desc },
                              c.a.createElement(
                                "div",
                                { className: Le.name },
                                e.name
                              ),
                              c.a.createElement(
                                "div",
                                { className: Le.amount },
                                ((n = e.balanceShow),
                                (a = "BTC"),
                                ee(n) ? a : "".concat(n, " ").concat(a))
                              )
                            ),
                            c.a.createElement(
                              "div",
                              { className: Le.address },
                              e.address
                            )
                          );
                          var n, a;
                        })
                      ),
                      t
                        ? null
                        : c.a.createElement(
                            Ue,
                            Object.assign({}, this.props, { changeClose: e })
                          )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        Ke = Object(E.b)(void 0, void 0)(qe),
        Re = n(111),
        Ge = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5907\u4efd\u52a9\u8bb0\u8bcd"),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
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
        })(oe),
        Fe = n(81),
        Ve = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.mnemonic,
                    n = e.changeStep;
                  return c.a.createElement(
                    "div",
                    { className: Fe.SaveMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Fe.desc },
                      "\u8bf7\u5c06\u4ee5\u4e0b12\u4e2a\u5355\u8bcd\u8bb0\u5728\u7eb8\u4e0a",
                      c.a.createElement("br", null),
                      "\u6211\u4eec\u4f1a\u5728\u4e4b\u540e\u8fdb\u884c\u9a8c\u8bc1"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Fe.generatewords },
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
        Je = n(39),
        He = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              ((n = Object(m.a)(
                this,
                Object(p.a)(t).call(this, e)
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
            Object(h.a)(t, e),
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
                    { className: Je.CheckMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Je.desc },
                      "\u9a8c\u8bc1\u60a8\u8bb0\u4e0b\u7684\u52a9\u8bb0\u8bcd"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Je.generatewords },
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
                      { className: fe()(Je.writedesc, r && Je.warn) },
                      "\u8bf7\u6309\u6b63\u786e\u7684\u987a\u5e8f\u70b9\u51fb\u5355\u8bcd"
                    ),
                    c.a.createElement(
                      "ul",
                      { className: Je.allwords },
                      o.map(function(t, n) {
                        return c.a.createElement(
                          "li",
                          {
                            className: -1 !== i(n) ? Je.active : null,
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
        We = n(63),
        Xe = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
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
                  return n.setState({ passwordErrMsg: t }), t;
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
            Object(h.a)(t, e),
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
                    m = l.privateKey,
                    p = l.addAccount,
                    h = l.history;
                  return c.a.createElement(
                    "div",
                    { className: We.SetPassword },
                    c.a.createElement(
                      "div",
                      { className: We.inputcontent },
                      c.a.createElement(
                        "div",
                        { className: We.desc },
                        "\u4e3a\u4f60\u7684\u94b1\u5305\u8d26\u6237\u8bbe\u7f6e\u5bc6\u7801"
                      ),
                      c.a.createElement(de, {
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
                      c.a.createElement(de, {
                        isPassword: !0,
                        label: "\u5bc6\u7801",
                        value: o,
                        errMsg: s,
                        placeholder:
                          "\u5bc6\u7801\u81f3\u5c11\u5305\u542b8\u4e2a\u5b57\u7b26",
                        onBlur: t.checkPassword,
                        onChange: function(t) {
                          return e.setState({
                            passwordErrMsg: "",
                            password: t
                          });
                        }
                      }),
                      c.a.createElement(de, {
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
                      { className: We.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            var e;
                            t.confirm() &&
                              (d
                                ? (e = V.generateAccount({
                                    name: a,
                                    mnemonic: d,
                                    password: o
                                  }))
                                : m &&
                                  (e = V.generateAccount({
                                    name: a,
                                    wif: m,
                                    password: o
                                  })),
                              p(e),
                              h.push({ pathname: _ }));
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
        ze = Object(E.b)(void 0, function(e) {
          return {
            addAccount: function(t) {
              e(
                (function(e) {
                  return { type: "ADD_ACCOUNT", account: e };
                })(t)
              );
            }
          };
        })(Xe),
        Ye = n(64),
        Ze = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
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
            Object(h.a)(t, e),
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
                    m = i.currentAccount,
                    p = (m = void 0 === m ? {} : m).encryptedKey;
                  return c.a.createElement(
                    Te,
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
                              ue,
                              {
                                isOutSide: !0,
                                go: {
                                  pathname: "https://live.blockcypher.com/btc-testnet/tx/".concat(
                                    s,
                                    "/"
                                  )
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
                            c.a.createElement(de, {
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
                                onClick: Object(X.a)(
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
                                              if (!te(d)) {
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
                                                console.log(n.t0),
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
        Qe = n(170),
        $e = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { step: 1, mnemonic: V.generateMnemonic() }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
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
                    { className: Qe.CreateAccount },
                    1 === t && c.a.createElement(Ge, a),
                    2 === t && c.a.createElement(Ve, a),
                    3 === t && c.a.createElement(He, a),
                    4 === t && c.a.createElement(ze, a)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        et = Object(E.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )($e),
        tt = n(31),
        nt = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
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
            Object(h.a)(t, e),
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
                    { className: tt.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: tt.desc },
                          "\u8bf7\u6309\u6b63\u786e\u987a\u5e8f\u8f93\u5165\u60a8\u7684\u52a9\u8bb0\u8bcd",
                          c.a.createElement("br", null),
                          "\u4ee5\u7a7a\u683c\u952e\u533a\u5206"
                        ),
                        c.a.createElement(
                          "div",
                          { className: tt.generatewords },
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
                            { className: tt.errwarn },
                            r
                          ),
                        c.a.createElement(
                          "button",
                          {
                            onClick: function() {
                              t.confirm() && (console.log(a.trim()), s(2));
                            }
                          },
                          "\u5bfc\u5165"
                        )
                      ),
                    2 === i &&
                      c.a.createElement(
                        ze,
                        Object.assign({}, this.props, { mnemonic: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        at = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { userInput: "", userInputErrMsg: "" }),
              (n.checkAll = {
                checkUserInput: function() {
                  var e = n.state.userInput,
                    t = void 0 === e ? [] : e,
                    a =
                      F.check("required")(t) || F.check("isValidPrivateKey")(t);
                  return n.setState({ userInputErrMsg: a }), a;
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
            Object(h.a)(t, e),
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
                    { className: tt.ImportMnemonic },
                    1 === i &&
                      c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          "div",
                          { className: tt.desc },
                          "\u8bf7\u8f93\u5165\u60a8\u7684\u94b1\u5305\u79c1\u94a5"
                        ),
                        c.a.createElement(
                          "div",
                          { className: tt.generatewords },
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
                            { className: tt.errwarn },
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
                        ze,
                        Object.assign({}, this.props, { privateKey: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        rt = n(82),
        ct = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).pageTitle = "\u5bfc\u5165\u8d26\u6237"),
              (n.state = { step: 1, activeIndex: 0 }),
              (n.changeStep = function(e) {
                n.changeState({ step: e });
              }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
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
                    { className: rt.ImportAccount },
                    1 === n &&
                      c.a.createElement(
                        "ul",
                        { className: rt.selectmode },
                        [
                          "\u5bfc\u5165\u52a9\u8bb0\u8bcd",
                          "\u5bfc\u5165\u79c1\u94a5"
                        ].map(function(t, n) {
                          return c.a.createElement(
                            "li",
                            {
                              key: n,
                              className: a === n ? rt.active : null,
                              onClick: function() {
                                e.setState({ step: 1, activeIndex: n });
                              }
                            },
                            t
                          );
                        })
                      ),
                    0 === a && c.a.createElement(nt, r),
                    1 === a && c.a.createElement(at, r)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        ot = Object(E.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(ct),
        st = n(65),
        it = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.currentAccount,
                    t = void 0 === e ? {} : e;
                  return c.a.createElement(
                    "div",
                    { className: st.AccountInfo },
                    c.a.createElement(
                      "div",
                      { className: st.amount },
                      t.balanceShow,
                      c.a.createElement("span", null, "BTC")
                    ),
                    c.a.createElement(
                      "div",
                      { className: st.address },
                      c.a.createElement(be, null, t.address)
                    ),
                    c.a.createElement(
                      "div",
                      { className: st.watchother },
                      c.a.createElement(
                        ue,
                        {
                          isOutSide: !0,
                          go: {
                            pathname: "https://live.blockcypher.com/btc-testnet/address/".concat(
                              t.address,
                              "/"
                            )
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
        ut = n(171),
        lt = n.n(ut),
        dt = n(112),
        mt = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).startInit = function() {
                var e = n.props.currentAccount;
                new lt.a({
                  size: 190,
                  element: document.getElementById("qr"),
                  value: e.address
                });
              }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: dt.AccountReceive },
                    c.a.createElement("canvas", { id: "qr" }),
                    c.a.createElement(
                      "div",
                      { className: dt.desc },
                      "\u5730\u5740\u4e8c\u7ef4\u7801"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        pt = n(32),
        ht = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                utxos: [],
                address: "",
                addressErrMsg: "",
                amount: "",
                amountErrMsg: "",
                addOpReturn: !1,
                hex: "",
                hexErrMsg: "",
                fee: 1e-5,
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
                  if (!Object(q.b)(r, c, o)) {
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
                var e = n.props;
                (0, e.getAccountUtxos)(e.currentAccount.address).then(function(
                  e
                ) {
                  return n.setState({ utxos: e });
                });
              }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
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
                  return V.sign(o, i.address, a, u, l, c, e, t);
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
                    p = (function(e) {
                      if (!/^(0x)?[\da-fA-F]+$/.test(e)) return "";
                      var t = e.startsWith("0x") ? e.substring(2) : e;
                      if (t.length % 2 === 1) return "";
                      for (var n = "", a = 0; a < t.length; a += 2)
                        n += String.fromCharCode(parseInt(t.substr(a, 2), 16));
                      return n;
                    })(u),
                    h = this.props.modal,
                    f = (h = void 0 === h ? {} : h).name;
                  return c.a.createElement(
                    "div",
                    { className: pt.AccountSend },
                    c.a.createElement(
                      "div",
                      { className: pt.userInput },
                      c.a.createElement(de, {
                        errMsg: r,
                        label: "\u63a5\u6536\u4eba\u5730\u5740",
                        value: a,
                        onBlur: t.checkAddress,
                        onChange: function(t) {
                          e.setState({ address: t });
                        }
                      }),
                      c.a.createElement(de, {
                        errMsg: s,
                        label: "\u8f6c\u8d26\u6570\u91cf",
                        value: o,
                        suffix: "BTC",
                        onBlur: t.checkAmount,
                        onChange: function(t) {
                          e.setState({ amount: t });
                        }
                      }),
                      c.a.createElement(de, {
                        errMsg: m,
                        label: "\u4ea4\u6613\u624b\u7eed\u8d39",
                        value: d,
                        suffix: "BTC",
                        onBlur: t.checkFee,
                        onChange: function(t) {
                          e.setState({ fee: t });
                        }
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { className: pt.addreturn },
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
                        { className: pt.returncontent },
                        c.a.createElement(
                          "div",
                          { className: pt.input },
                          c.a.createElement(de, {
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
                          { className: pt.ASCII },
                          c.a.createElement(
                            "div",
                            { className: pt.label },
                            "\u6587\u672c ASCII"
                          ),
                          c.a.createElement("div", null, p)
                        )
                      ),
                    c.a.createElement(
                      "div",
                      { className: pt.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            t.confirm() &&
                              e.openModal({
                                name: "transfer",
                                data: {
                                  callback: (function() {
                                    var t = Object(X.a)(
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
                                                return (t.next = 7), Me(r);
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
                    "transfer" === f && c.a.createElement(Ze, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        ft = Object(E.b)(void 0, function(e) {
          return {
            getAccountUtxos: function(t) {
              return e(Ce(t));
            }
          };
        })(ht),
        vt = n(66),
        bt = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              (n = Object(m.a)(this, Object(p.a)(t).call(this, e)));
            var a = e.currentAccount;
            return (n.pageTitle = a.name), (n.state = { activeIndex: 0 }), n;
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.activeIndex;
                  return c.a.createElement(
                    "div",
                    { className: vt.AccountDetail },
                    c.a.createElement(it, this.props),
                    c.a.createElement(
                      "div",
                      {
                        className: vt.content,
                        style: { background: 1 === t ? "white" : "" }
                      },
                      c.a.createElement(
                        "ul",
                        { className: vt.selectmode },
                        ["\u53d1\u9001", "\u63a5\u6536"].map(function(n, a) {
                          return c.a.createElement(
                            "li",
                            {
                              key: a,
                              className: t === a ? vt.active : null,
                              onClick: function() {
                                e.setState({ activeIndex: a });
                              }
                            },
                            n
                          );
                        })
                      ),
                      0 === t && c.a.createElement(ft, this.props),
                      1 === t && c.a.createElement(mt, this.props)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(oe),
        gt = Object(E.b)(function(e) {
          return { accounts: e.accounts };
        })(bt),
        Et = [
          { component: Ke, path: _, title: "BitX" },
          { component: et, path: O, title: "" },
          { component: ot, path: y, title: "" },
          { component: gt, path: k, title: "" }
        ],
        _t = n(172),
        Ot = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.history,
                    n = e.history.location.pathname,
                    a = e.goBack;
                  return c.a.createElement(
                    "div",
                    { className: _t.Header },
                    n !== _ &&
                      c.a.createElement("i", {
                        className: "iconfont iconback1",
                        onClick: function() {
                          te(a) ? a() : t.goBack();
                        }
                      }),
                    this.props.children
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        yt = n(83),
        kt = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
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
                    u = {},
                    l = ((e = i), N.a.parse(e)).address;
                  return (
                    l &&
                      (u =
                        r.filter(function() {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                            ).address === l
                          );
                        })[0] || {}),
                    c.a.createElement(
                      "div",
                      { className: yt.CommonLayOut },
                      c.a.createElement(
                        "div",
                        { className: yt.header },
                        c.a.createElement(Ot, this.props, o)
                      ),
                      c.a.createElement(
                        "div",
                        { className: yt.content },
                        c.a.createElement(
                          v.a,
                          null,
                          Et.map(function(e, n) {
                            return c.a.createElement(b.a, {
                              exact: !0,
                              key: n,
                              path: e.path,
                              render: function(n) {
                                return c.a.createElement(
                                  e.component,
                                  Object.assign({}, n, t.props, {
                                    currentAccount: u
                                  })
                                );
                              }
                            });
                          }),
                          c.a.createElement(g.a, { to: _ })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        At = Object(E.b)(
          function(e) {
            return {
              goBack: e.goBack,
              accounts: e.accounts,
              pageTitle: e.pageTitle,
              modal: e.modal
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
                return e(Se({ name: n, show: a, data: r }));
              },
              getAllAccountBalance: function() {
                return e(xe());
              },
              setGoBack: function(t) {
                return e(
                  (function(e) {
                    return { type: "SET_GO_BACK", goBack: e };
                  })(t)
                );
              }
            };
          }
        )(kt),
        wt = (n(376),
        (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(m.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
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
                  var e = this;
                  return c.a.createElement(
                    f.a,
                    null,
                    c.a.createElement(
                      v.a,
                      null,
                      c.a.createElement(b.a, {
                        path: "/",
                        render: function(t) {
                          return c.a.createElement(
                            At,
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
      var jt = n(36),
        Mt = n(49),
        Nt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          if ("ADD_ACCOUNT" === t.type) {
            var n = [].concat(Object(Mt.a)(e), [t.account]),
              a = n.map(function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  name: e.name,
                  address: e.address,
                  encryptedKey: e.encryptedKey
                };
              });
            return V.saveAccount(a), n;
          }
          if ("UPDATE_ACCOUNT_BALANCE" === t.type)
            return e.map(function(e) {
              return e.address === t.account.address ? t.account : e;
            });
          var r = [];
          return (
            ae.get("accountVersion")
              ? (r = V.getAccount())
              : ((r = []), ae.remove("accounts"), ae.set("accountVersion", 1)),
            e.length ? e : r || []
          );
        },
        St = function() {
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
        Ct = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_BALANCE" === t.type
            ? [t.balance].concat(Object(Mt.a)(e))
            : e;
        },
        xt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_UTXO" === t.type
            ? [{ utxos: t.utxos, address: t.address }].concat(Object(Mt.a)(e))
            : e;
        },
        It = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_PAGE_TITLE" === t.type ? t.pageTitle : e;
        },
        Tt = function() {
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
        Pt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_GO_BACK" === t.type ? t.goBack : e;
        },
        Bt = Object(jt.c)({
          accounts: Nt,
          newMnemonic: St,
          balances: Ct,
          utxos: xt,
          pageTitle: It,
          modal: Tt,
          goBack: Pt
        }),
        Dt = (n(377), n(173)),
        Ut = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || jt.d,
        Lt = Object(jt.e)(Bt, Ut(Object(jt.a)(Dt.a)));
      u()(),
        s.a.render(
          c.a.createElement(E.a, { store: Lt }, c.a.createElement(wt, null)),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    38: function(e, t, n) {
      e.exports = {
        AccountList: "AccountList_AccountList__fzzdL",
        listtitle: "AccountList_listtitle__an34x",
        seperate: "AccountList_seperate__32MUJ",
        desc: "AccountList_desc__76a24",
        name: "AccountList_name__3yWtT",
        amount: "AccountList_amount__12Equ",
        address: "AccountList_address__3rDjI"
      };
    },
    39: function(e, t, n) {
      e.exports = {
        CheckMnemonic: "CheckMnemonic_CheckMnemonic__3cgfr",
        desc: "CheckMnemonic_desc__1N4-b",
        generatewords: "CheckMnemonic_generatewords__1CE0F",
        writedesc: "CheckMnemonic_writedesc__2VIZD",
        warn: "CheckMnemonic_warn__3OoAE",
        allwords: "CheckMnemonic_allwords__1DJDf",
        active: "CheckMnemonic_active__AJkRd"
      };
    },
    44: function(e, t, n) {
      e.exports = {
        Modalcontainer: "Modal_Modalcontainer__3YwMn",
        rootModalDesktop: "Modal_rootModalDesktop__2ON17",
        content: "Modal_content__3oLo5",
        header: "Modal_header__p5YFj",
        title: "Modal_title__3b0vO"
      };
    },
    53: function(e, t, n) {
      e.exports = {
        tool: "Tooltip_tool__1HhyG",
        large: "Tooltip_large__MoJ8z"
      };
    },
    62: function(e, t, n) {
      e.exports = {
        SelectModeGetAccount:
          "SelectModeGetAccount_SelectModeGetAccount__GyPmx",
        close: "SelectModeGetAccount_close__2jCcU",
        bitx: "SelectModeGetAccount_bitx__8xHXu",
        routerbutton: "SelectModeGetAccount_routerbutton__11RUO"
      };
    },
    63: function(e, t, n) {
      e.exports = {
        SetPassword: "SetPassword_SetPassword__3jIZZ",
        inputcontent: "SetPassword_inputcontent__3Iaa6",
        desc: "SetPassword_desc__aGUBi",
        button: "SetPassword_button__ejX43"
      };
    },
    64: function(e, t, n) {
      e.exports = {
        success: "SignModal_success__2KYhk",
        button: "SignModal_button__26Wda",
        userInput: "SignModal_userInput__30Th3"
      };
    },
    65: function(e, t, n) {
      e.exports = {
        AccountInfo: "AccountInfo_AccountInfo__3m8EK",
        amount: "AccountInfo_amount__2_74u",
        address: "AccountInfo_address__3D7Cd",
        watchother: "AccountInfo_watchother__1HHSU"
      };
    },
    66: function(e, t, n) {
      e.exports = {
        AccountDetail: "AccountDetail_AccountDetail__12iBL",
        content: "AccountDetail_content__2b3N7",
        selectmode: "AccountDetail_selectmode__1nW_k",
        active: "AccountDetail_active___bR76"
      };
    },
    76: function(e, t, n) {
      "use strict";
      (function(e) {
        n.d(t, "b", function() {
          return s;
        }),
          n.d(t, "a", function() {
            return i;
          });
        var a = n(60),
          r = n.n(a),
          c = n(18),
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
          var l = (function(e, t, n) {
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
            d = o.a.networks.testnet,
            m = new o.a.TransactionBuilder(d),
            p = 0,
            h = !0,
            f = !1,
            v = void 0;
          try {
            for (
              var b, g = l[Symbol.iterator]();
              !(h = (b = g.next()).done);
              h = !0
            ) {
              var E = b.value;
              m.addInput(E.mintTxid, E.mintIndex), (p += E.value);
            }
          } catch (y) {
            (f = !0), (v = y);
          } finally {
            try {
              h || null == g.return || g.return();
            } finally {
              if (f) throw v;
            }
          }
          m.addOutput(a, c);
          var _ = p - c - s;
          if ((_ > 1e3 && m.addOutput(n, _), i)) {
            var O = o.a.payments.embed({ data: [e.from(i, "hex")] });
            m.addOutput(O.output, 0);
          }
          return (
            l.forEach(function(e, t) {
              m.sign(t, u);
            }),
            m.build().toHex()
          );
        }
      }.call(this, n(9).Buffer));
    },
    80: function(e, t, n) {
      e.exports = {
        clipboard: "Clipboard_clipboard__21VD6",
        children: "Clipboard_children__1Btfq",
        ellipse: "Clipboard_ellipse__1CQJs"
      };
    },
    81: function(e, t, n) {
      e.exports = {
        SaveMnemonic: "SaveMnemonic_SaveMnemonic__ejnU-",
        desc: "SaveMnemonic_desc__1RXIT",
        generatewords: "SaveMnemonic_generatewords__3A-rp"
      };
    },
    82: function(e, t, n) {
      e.exports = {
        ImportAccount: "ImportAccount_ImportAccount__2WL_J",
        selectmode: "ImportAccount_selectmode__yV4eo",
        active: "ImportAccount_active__2Pny0"
      };
    },
    83: function(e, t, n) {
      e.exports = {
        CommonLayOut: "CommonLayOut_CommonLayOut__3vp86",
        content: "CommonLayOut_content__3QXdm"
      };
    }
  },
  [[174, 1, 2]]
]);
//# sourceMappingURL=main.e2e6fb75.chunk.js.map
