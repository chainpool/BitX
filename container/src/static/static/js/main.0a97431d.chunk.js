(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    112: function(e, t, n) {
      e.exports = {
        KnowAbout: "KnowAbout_KnowAbout__Bn6Bp",
        content: "KnowAbout_content__3ZC3u"
      };
    },
    113: function(e, t, n) {
      e.exports = {
        AccountReceive: "AccountReceive_AccountReceive__2fTzv",
        desc: "AccountReceive_desc__Or9TB"
      };
    },
    166: function(e, t, n) {
      e.exports = { url: "RouterGo_url__2u7y-" };
    },
    170: function(e, t, n) {
      e.exports = n.p + "static/media/Bitx.41fc5ea2.png";
    },
    171: function(e, t, n) {
      e.exports = { CreateAccount: "CreateAccount_CreateAccount__39hWI" };
    },
    173: function(e, t, n) {
      e.exports = { Header: "Header_Header__2CMTx" };
    },
    175: function(e, t, n) {
      e.exports = n(379);
    },
    181: function(e, t, n) {},
    209: function(e, t) {},
    211: function(e, t) {},
    239: function(e, t) {},
    242: function(e, t) {},
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
    377: function(e, t, n) {},
    379: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        o = n(106),
        s = n.n(o),
        i = n(162),
        u = n.n(i),
        l = (n(180), n(181), n(3)),
        d = n(4),
        m = n(6),
        p = n(5),
        h = n(7),
        f = n(383),
        v = n(384),
        b = n(382),
        g = n(168),
        E = n(385),
        _ = n(14),
        O = "/",
        y = "/createaccount",
        k = "/importAccount",
        A = "/accountdetail",
        w = n(61),
        j = n.n(w),
        N = n(60),
        M = n(164),
        S = n.n(M),
        C = n(111);
      window.require && (a = window.require("electron").ipcRenderer);
      var x = a,
        I = n(44),
        T = n.n(I),
        P = n(108),
        B = n.n(P),
        D = n(51),
        U = n.n(D),
        L = n(19),
        q = n.n(L),
        K = n(76),
        R = {
          generateMnemonic: function() {
            return T.a.generateMnemonic();
          },
          generateAccount: function(e) {
            var t,
              n = e.name,
              a = e.mnemonic,
              r = e.password,
              c = e.wif,
              o = { N: 128, r: 8, p: 8 };
            if (n && a && r) {
              var s = T.a.mnemonicToSeed(a),
                i = B.a.fromSeed(s).derivePath("m/44'/1'/0'/0/0"),
                u = q.a.payments.p2pkh({
                  pubkey: i.publicKey,
                  network: q.a.networks.testnet
                }),
                l = U.a.encrypt(i.privateKey, !0, r, null, o);
              t = { name: n, address: u.address, encryptedKey: l };
            } else if (n && c && r) {
              var d = q.a.ECPair.fromWIF(c, q.a.networks.testnet);
              t = {
                name: n,
                address: q.a.payments.p2pkh({
                  pubkey: d.publicKey,
                  network: q.a.networks.testnet
                }).address,
                encryptedKey: U.a.encrypt(
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
            return U.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
          },
          decryptPair: function(e, t) {
            var n = R.decrypt(e, t);
            return q.a.ECPair.fromPrivateKey(n.privateKey, {
              compressed: n.compressed,
              network: q.a.networks.testnet
            });
          },
          sign: function(e, t, n, a, r, c, o, s) {
            var i = R.decryptPair(o, s);
            return Object(K.a)(e, t, n, a, r, c, i);
          }
        },
        G = n(165),
        F = n.n(G),
        V = {
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
            return F.a.validate(e, "BTC", "test") ? "" : t;
          },
          isValidMnemonic: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u52a9\u8bb0\u8bcd\u683c\u5f0f\u9519\u8bef";
            return T.a.validateMnemonic(e) ? "" : t;
          },
          isValidPrivateKey: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "\u79c1\u94a5\u683c\u5f0f\u9519\u8bef";
            try {
              return q.a.ECPair.fromWIF(e, q.a.networks.testnet), "";
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
              U.a.decrypt(e, t, function() {}, { N: 128, r: 8, p: 8 });
            } catch (a) {
              return n;
            }
          },
          check: function(e) {
            return function() {
              if (V[e]) return V[e].apply(V, arguments);
            };
          }
        },
        J = {
          generateMnemonic: function() {
            return x ? x.sendSync("GENERATE_MNEMONIC") : R.generateMnemonic();
          },
          generateAccount: function(e) {
            return x
              ? JSON.parse(x.sendSync("GENERATE_ACCOUNT", e))
              : R.generateAccount(e);
          },
          decrypt: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return x ? x.sendSync("DECRYPT", t) : R.decrypt.apply(R, t);
          },
          saveAccount: function(e) {
            x
              ? x.send("SAVE_ACCOUNT", JSON.stringify(e))
              : re.set("accounts", e);
          },
          getAccount: function() {
            return x
              ? JSON.parse(x.sendSync("GET_ACCOUNT"))
              : re.get("accounts");
          },
          sign: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return x ? x.sendSync("SIGN", t) : R.sign.apply(R, t);
          },
          isValidPassword: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return x
              ? x.sendSync("IS_VALID_PASSWORD", t)
              : V.check("isValidPassword").apply(void 0, t);
          },
          update: function() {
            x && x.send("UPDATE");
          },
          forceUpdate: function() {
            x && x.send("FORCE_UPDATE");
          }
        };
      x &&
        (x.on("isForceUpdate", function() {
          window.confirm(
            "\u5df2\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff0c\u662f\u5426\u7acb\u5373\u5b89\u88c5?"
          ) && J.forceUpdate();
        }),
        x.on("autoUpdater", function(e, t) {}));
      var H,
        W = n(18),
        X = n.n(W),
        z = n(30),
        Y = n(29),
        Z = n(80),
        Q = n(49),
        $ = n.n(Q),
        ee = function(e) {
          var t = e.url,
            n = e.method,
            a = void 0 === n ? "POST" : n,
            r = e.methodAlias,
            c = e.params,
            o = void 0 === c ? [] : c,
            s = e.body,
            i = e.timeOut,
            u = void 0 === i ? 1e4 : i,
            l = Object(Z.a)(e, [
              "url",
              "method",
              "methodAlias",
              "params",
              "body",
              "timeOut"
            ]),
            d = $()(),
            m = s
              ? JSON.stringify(s)
              : JSON.stringify({ id: d, jsonrpc: "2.0", method: r, params: o }),
            p = function() {
              return fetch(
                t,
                Object(Y.a)(
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
                    var e = Object(z.a)(
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
                p(),
                new Promise(function(e, t) {
                  setTimeout(function() {
                    t("\u8bf7\u6c42\u8d85\u65f6");
                  }, u);
                })
              ])
            : p();
        },
        te = function(e) {
          return isNaN(e) || void 0 === e || "" === e || e === {};
        },
        ne = function(e) {
          return "function" === typeof e;
        },
        ae = function(e) {
          return "string" === typeof e;
        },
        re = {
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
        ce = {
          toPrecision: function(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              (t = Number(t)),
              te(e) || te(t) || isNaN(e)
                ? ""
                : n
                ? new N.BigNumber(e).multipliedBy(Math.pow(10, t)).toFixed(0)
                : new N.BigNumber(e).dividedBy(Math.pow(10, t)).toFixed(t)
            );
          },
          toBtcPrecision: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return ce.toPrecision(e, 8, t);
          }
        },
        oe = function() {
          return C.a.mobile();
        },
        se = (function(e) {
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
                n.props.setModal &&
                  n.props.setModal({ name: t, data: a, show: !0 });
              }),
              (n.closeModal = function() {
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
                    ne(t) && t(e);
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
                    ne(this.props.setPageTitle) &&
                    this.props.setPageTitle(this.pageTitle),
                    this.state &&
                      this.state.step &&
                      ne(this.props.setGoBack) &&
                      this.props.setGoBack(function() {
                        e.state.step > 1
                          ? e.setState({ step: e.state.step - 1 })
                          : e.props.history && e.props.history.goBack();
                      }),
                    ne(this.startInit) && this.startInit();
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
        ie = n(381),
        ue = n(166),
        le =
          Object(ie.a)(
            (H = (function(e) {
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
                              className: ue.url,
                              rel: "noopener noreferrer",
                              href: h,
                              target: "_blank",
                              onClick: function(e) {
                                if (x) {
                                  var t = window.electron.shell;
                                  e.preventDefault(),
                                    t.openExternal(e.target.href);
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
                                  ne(p) && p();
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
          ) || H,
        de = n(38),
        me = (function(e) {
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
                    m = Object(Z.a)(e, [
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
                    { className: de.container },
                    t && c.a.createElement("div", { className: de.label }, t),
                    c.a.createElement(
                      "div",
                      { className: de.content },
                      s &&
                        c.a.createElement("div", { className: de.prefix }, s),
                      c.a.createElement(
                        p,
                        Object.assign(
                          {
                            className: de.input,
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
                      i && c.a.createElement("div", { className: de.suffix }, i)
                    ),
                    n && c.a.createElement("div", { className: de.errMsg }, n)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        pe = n(169),
        he = n.n(pe),
        fe = n(28),
        ve = n.n(fe),
        be = n(81),
        ge = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: n.props.id || $()("clipboard_") }),
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
                    { className: ve()(be.clipboard, a) },
                    c.a.createElement(
                      "span",
                      {
                        id: e,
                        className: ve()(be.children, r ? be.ellipse : null),
                        style: { width: r }
                      },
                      n
                    ),
                    c.a.createElement(
                      ye,
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
        Ee = n(52),
        _e = n.n(Ee),
        Oe = n(53),
        ye = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { uid: $()("tooltip_") }),
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
                            { "data-for": t, "data-tip": f, className: Oe.tip },
                            a
                          ),
                          c.a.createElement(
                            _e.a,
                            {
                              effect: "solid",
                              offset: d,
                              multiline: !0,
                              id: t,
                              place: p,
                              className: ve()(Oe.tool, Oe[u])
                            },
                            f
                          )
                        )
                      : c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            "span",
                            { id: t, "data-tip": f, className: Oe.tip },
                            c.a.createElement(
                              "span",
                              {
                                onClick: function(n) {
                                  n.stopPropagation(),
                                    r && ne(r)
                                      ? r(function(n) {
                                          n &&
                                            e.setState({ tip: n }, function() {
                                              _e.a.show(
                                                document.getElementById(t)
                                              );
                                            });
                                        })
                                      : _e.a.show(document.getElementById(t));
                                }
                              },
                              a
                            )
                          ),
                          c.a.createElement(_e.a, {
                            className: Oe.content,
                            event: "none",
                            effect: "solid",
                            isCapture: !0,
                            delayShow: 150,
                            afterShow: function() {
                              setTimeout(function() {
                                _e.a.hide(document.getElementById(t));
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
        ke = n(45),
        Ae = "https://api.chainx.org/bitx/testnet",
        we = "https://api.chainx.org/bitx/txs";
      function je() {
        return (je = Object(z.a)(
          X.a.mark(function e(t) {
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      window
                        .fetch(Ae + "/".concat(t, "/balance"))
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
      function Ne() {
        return (Ne = Object(z.a)(
          X.a.mark(function e(t) {
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      window
                        .fetch(Ae + "/".concat(t, "/utxos"))
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
        return Se.apply(this, arguments);
      }
      function Se() {
        return (Se = Object(z.a)(
          X.a.mark(function e(t) {
            var n;
            return X.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = { raw: t }),
                      e.abrupt(
                        "return",
                        ee({ url: we, method: "POST", body: n })
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
      var Ce = function(e) {
          return {
            type: "SET_Modal",
            modal: { name: e.name, show: e.show, data: e.data }
          };
        },
        xe = function(e) {
          return function() {
            return (function(e) {
              return Ne.apply(this, arguments);
            })(e);
          };
        },
        Ie = function() {
          return function(e, t) {
            for (
              var n = t().accounts,
                a = function(t) {
                  (function(e) {
                    return je.apply(this, arguments);
                  })(n[t].address).then(function() {
                    var a =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = Object(Y.a)({}, n[t], a, {
                        balanceShow: ce.toBtcPrecision(a.balance)
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
        Te = (function(e) {
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
                        className: ve()(
                          ke.Modalcontainer,
                          oe() ? ke.rootModalMobile : ke.rootModalDesktop
                        ),
                        id: "rootModal"
                      },
                      c.a.createElement(
                        "div",
                        { className: ke.content },
                        c.a.createElement(
                          "div",
                          {
                            className: ke.header,
                            onClick: function() {
                              n(!1);
                            }
                          },
                          c.a.createElement("div", { className: ke.title }, t),
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
        Pe = Object(_.b)(
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
        Be = n(170),
        De = n.n(Be),
        Ue = n(62),
        Le = (function(e) {
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
                    { className: Ue.SelectModeGetAccount },
                    a.length
                      ? c.a.createElement(
                          "div",
                          { className: Ue.close, onClick: t },
                          c.a.createElement("i", {
                            className: "iconfont iconClose"
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
                          le,
                          { go: { pathname: y } },
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
                          le,
                          { go: { pathname: k } },
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
        qe = n(39),
        Ke = (function(e) {
          function t(e) {
            var n;
            Object(l.a)(this, t),
              ((n = Object(m.a)(this, Object(p.a)(t).call(this, e))).pageTitle =
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
            Object(h.a)(t, e),
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
                    { className: qe.AccountList },
                    c.a.createElement(
                      "div",
                      { className: qe.listtitle },
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
                          le,
                          {
                            key: t,
                            Ele: "li",
                            go: {
                              pathname: A,
                              search: "?address=".concat(e.address)
                            }
                          },
                          c.a.createElement("div", { className: qe.seperate }),
                          c.a.createElement(
                            "div",
                            { className: qe.desc },
                            c.a.createElement(
                              "div",
                              { className: qe.name },
                              e.name
                            ),
                            c.a.createElement(
                              "div",
                              { className: qe.amount },
                              ((n = e.balanceShow),
                              (a = "BTC"),
                              te(n) ? a : "".concat(n, " ").concat(a))
                            )
                          ),
                          c.a.createElement(
                            "div",
                            { className: qe.address },
                            e.address
                          )
                        );
                        var n, a;
                      })
                    ),
                    t
                      ? null
                      : c.a.createElement(
                          Le,
                          Object.assign({}, this.props, { changeClose: e })
                        )
                  );
                }
              }
            ]),
            t
          );
        })(se),
        Re = Object(_.b)(void 0, void 0)(Ke),
        Ge = n(112),
        Fe = (function(e) {
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
                    { className: Ge.KnowAbout },
                    c.a.createElement("i", { className: "iconfont iconsuo" }),
                    c.a.createElement(
                      "div",
                      { className: Ge.content },
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
        })(se),
        Ve = n(82),
        Je = (function(e) {
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
                    { className: Ve.SaveMnemonic },
                    c.a.createElement(
                      "div",
                      { className: Ve.desc },
                      "\u8bf7\u5c06\u4ee5\u4e0b12\u4e2a\u5355\u8bcd\u8bb0\u5728\u7eb8\u4e0a",
                      c.a.createElement("br", null),
                      "\u6211\u4eec\u4f1a\u5728\u4e4b\u540e\u8fdb\u884c\u9a8c\u8bc1"
                    ),
                    c.a.createElement(
                      "div",
                      { className: Ve.generatewords },
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
        })(se),
        He = n(40),
        We = (function(e) {
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
                    r = V.check("strictEqual")(
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
                    { className: He.CheckMnemonic },
                    c.a.createElement(
                      "div",
                      { className: He.desc },
                      "\u9a8c\u8bc1\u60a8\u8bb0\u4e0b\u7684\u52a9\u8bb0\u8bcd"
                    ),
                    c.a.createElement(
                      "div",
                      { className: He.generatewords },
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
                      { className: ve()(He.writedesc, r && He.warn) },
                      "\u8bf7\u6309\u6b63\u786e\u7684\u987a\u5e8f\u70b9\u51fb\u5355\u8bcd"
                    ),
                    c.a.createElement(
                      "ul",
                      { className: He.allwords },
                      o.map(function(t, n) {
                        return c.a.createElement(
                          "li",
                          {
                            className: -1 !== i(n) ? He.active : null,
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
        })(se),
        Xe = n(63),
        ze = (function(e) {
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
                    t = V.check("required")(e);
                  return n.setState({ nameErrMsg: t }), t;
                },
                checkPassword: function() {
                  var e = n.state.password,
                    t =
                      V.check("required")(e) ||
                      V.check("characterLength")(e, 8) ||
                      n.checkAll.checkEqual();
                  return n.setState({ passwordErrMsg: t }), t;
                },
                checkConfirmPassword: function() {
                  var e = n.state.confirmPassword,
                    t = V.check("required")(e) || n.checkAll.checkEqual();
                  return n.setState({ confirmPasswordErrMsg: t }), t;
                },
                checkEqual: function() {
                  var e = n.state,
                    t = e.password,
                    a = e.confirmPassword;
                  if (t && a) {
                    var r = V.check("equal")(t, a);
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
                    { className: Xe.SetPassword },
                    c.a.createElement(
                      "div",
                      { className: Xe.inputcontent },
                      c.a.createElement(
                        "div",
                        { className: Xe.desc },
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
                          "\u5bc6\u7801\u81f3\u5c11\u5305\u542b8\u4e2a\u5b57\u7b26",
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
                      { className: Xe.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            var e;
                            t.confirm() &&
                              (d
                                ? (e = J.generateAccount({
                                    name: a,
                                    mnemonic: d,
                                    password: o
                                  }))
                                : m &&
                                  (e = J.generateAccount({
                                    name: a,
                                    wif: m,
                                    password: o
                                  })),
                              p(e),
                              h.push({ pathname: O }));
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
        })(se),
        Ye = Object(_.b)(void 0, function(e) {
          return {
            addAccount: function(t) {
              e(
                (function(e) {
                  return { type: "ADD_ACCOUNT", account: e };
                })(t)
              );
            }
          };
        })(ze),
        Ze = n(64),
        Qe = (function(e) {
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
                    r = V.check("required")(e) || J.isValidPassword(a, e);
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
                    Pe,
                    {
                      title: o
                        ? "\u4ea4\u6613\u5df2\u5e7f\u64ad"
                        : "\u8f93\u5165\u8d26\u6237\u5bc6\u7801"
                    },
                    o
                      ? c.a.createElement(
                          "div",
                          { className: Ze.success },
                          c.a.createElement("i", {
                            className: "iconfont iconsuccess"
                          }),
                          c.a.createElement(
                            "div",
                            { className: Ze.button },
                            c.a.createElement(
                              le,
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
                            { className: Ze.userInput },
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
                            { className: Ze.button },
                            c.a.createElement(
                              "button",
                              {
                                onClick: Object(z.a)(
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
                                              if (!ne(d)) {
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
                                                (c = ae(n.t0)
                                                  ? n.t0
                                                  : n.t0.message &&
                                                    ae(n.t0.message)
                                                  ? n.t0.message
                                                  : n.t0.message &&
                                                    n.t0.message.error &&
                                                    ae(n.t0.message.error)
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
        })(se),
        $e = n(171),
        et = (function(e) {
          function t() {
            var e, n;
            Object(l.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { step: 1, mnemonic: J.generateMnemonic() }),
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
                    a = Object(Y.a)({}, this.props, {
                      mnemonic: n,
                      changeStep: this.changeStep
                    });
                  return c.a.createElement(
                    "div",
                    { className: $e.CreateAccount },
                    1 === t && c.a.createElement(Fe, a),
                    2 === t && c.a.createElement(Je, a),
                    3 === t && c.a.createElement(We, a),
                    4 === t && c.a.createElement(Ye, a)
                  );
                }
              }
            ]),
            t
          );
        })(se),
        tt = Object(_.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(et),
        nt = n(31),
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
                    t =
                      V.check("required")(e) ||
                      V.check("isValidMnemonic")(e.trim());
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
                        Ye,
                        Object.assign({}, this.props, { mnemonic: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(se),
        rt = (function(e) {
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
                      V.check("required")(t) || V.check("isValidPrivateKey")(t);
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
                        Ye,
                        Object.assign({}, this.props, { privateKey: a.trim() })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(se),
        ct = n(83),
        ot = (function(e) {
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
                    r = Object(Y.a)(
                      { step: n, changeStep: this.changeStep },
                      this.props
                    );
                  return c.a.createElement(
                    "div",
                    { className: ct.ImportAccount },
                    1 === n &&
                      c.a.createElement(
                        "ul",
                        { className: ct.selectmode },
                        [
                          "\u5bfc\u5165\u52a9\u8bb0\u8bcd",
                          "\u5bfc\u5165\u79c1\u94a5"
                        ].map(function(t, n) {
                          return c.a.createElement(
                            "li",
                            {
                              key: n,
                              className: a === n ? ct.active : null,
                              onClick: function() {
                                e.setState({ step: 1, activeIndex: n });
                              }
                            },
                            t
                          );
                        })
                      ),
                    0 === a && c.a.createElement(at, r),
                    1 === a && c.a.createElement(rt, r)
                  );
                }
              }
            ]),
            t
          );
        })(se),
        st = Object(_.b)(
          function(e) {
            return { state: e };
          },
          function() {
            return {};
          }
        )(ot),
        it = n(65),
        ut = (function(e) {
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
                    { className: it.AccountInfo },
                    c.a.createElement(
                      "div",
                      { className: it.amount },
                      t.balanceShow,
                      c.a.createElement("span", null, "BTC")
                    ),
                    c.a.createElement(
                      "div",
                      { className: it.address },
                      c.a.createElement(ge, null, t.address)
                    ),
                    c.a.createElement(
                      "div",
                      { className: it.watchother },
                      c.a.createElement(
                        le,
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
        })(se),
        lt = n(172),
        dt = n.n(lt),
        mt = n(113),
        pt = (function(e) {
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
                new dt.a({
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
                    { className: mt.AccountReceive },
                    c.a.createElement("canvas", { id: "qr" }),
                    c.a.createElement(
                      "div",
                      { className: mt.desc },
                      "\u5730\u5740\u4e8c\u7ef4\u7801"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(se),
        ht = n(32),
        ft = (function(e) {
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
                    t = V.check("required")(e) || V.check("isBTCAddress")(e);
                  return n.setState({ addressErrMsg: t }), t;
                },
                checkAmount: function() {
                  var e = n.state.amount,
                    t =
                      V.check("required")(e) ||
                      V.check("smallerOrEqual")(
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
                      V.check("required")(e) ||
                      V.check("smallerOrEqual")(
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
                    c = Number(ce.toBtcPrecision(a, 8, !0)),
                    o = Number(ce.toBtcPrecision(t, 8, !0));
                  if (!Object(K.b)(r, c, o)) {
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
                    a = e.addOpReturn ? V.check("required")(t) : "";
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
                    u = Number(ce.toBtcPrecision(r, 8, !0)),
                    l = Number(ce.toBtcPrecision(s, 8, !0));
                  return J.sign(o, i.address, a, u, l, c, e, t);
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
                    { className: ht.AccountSend },
                    c.a.createElement(
                      "div",
                      { className: ht.userInput },
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
                      { className: ht.addreturn },
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
                        { className: ht.returncontent },
                        c.a.createElement(
                          "div",
                          { className: ht.input },
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
                          { className: ht.ASCII },
                          c.a.createElement(
                            "div",
                            { className: ht.label },
                            "\u6587\u672c ASCII"
                          ),
                          c.a.createElement("div", null, p)
                        )
                      ),
                    c.a.createElement(
                      "div",
                      { className: ht.button },
                      c.a.createElement(
                        "button",
                        {
                          onClick: function() {
                            t.confirm() &&
                              e.openModal({
                                name: "transfer",
                                data: {
                                  callback: (function() {
                                    var t = Object(z.a)(
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
                    "transfer" === f && c.a.createElement(Qe, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(se),
        vt = Object(_.b)(void 0, function(e) {
          return {
            getAccountUtxos: function(t) {
              return e(xe(t));
            }
          };
        })(ft),
        bt = n(66),
        gt = (function(e) {
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
                    { className: bt.AccountDetail },
                    c.a.createElement(ut, this.props),
                    c.a.createElement(
                      "div",
                      {
                        className: bt.content,
                        style: { background: 1 === t ? "white" : "" }
                      },
                      c.a.createElement(
                        "ul",
                        { className: bt.selectmode },
                        ["\u53d1\u9001", "\u63a5\u6536"].map(function(n, a) {
                          return c.a.createElement(
                            "li",
                            {
                              key: a,
                              className: t === a ? bt.active : null,
                              onClick: function() {
                                e.setState({ activeIndex: a });
                              }
                            },
                            n
                          );
                        })
                      ),
                      0 === t && c.a.createElement(vt, this.props),
                      1 === t && c.a.createElement(pt, this.props)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(se),
        Et = Object(_.b)(function(e) {
          return { accounts: e.accounts };
        })(gt),
        _t = [
          { component: Re, path: O, title: "BitX" },
          { component: tt, path: y, title: "" },
          { component: st, path: k, title: "" },
          { component: Et, path: A, title: "" }
        ],
        Ot = n(173),
        yt = (function(e) {
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
                    { className: Ot.Header },
                    n !== O &&
                      c.a.createElement("i", {
                        className: "iconfont iconback1",
                        onClick: function() {
                          ne(a) ? a() : t.goBack();
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
        kt = n(84),
        At = (function(e) {
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
                  (0, this.props.getAllAccountBalance)(), J.update();
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
                    l = ((e = i), S.a.parse(e)).address;
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
                      { className: kt.CommonLayOut },
                      c.a.createElement(
                        "div",
                        { className: kt.header },
                        c.a.createElement(yt, this.props, o)
                      ),
                      c.a.createElement(
                        "div",
                        { className: kt.content },
                        c.a.createElement(
                          b.a,
                          null,
                          _t.map(function(e, n) {
                            return c.a.createElement(g.a, {
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
                          c.a.createElement(E.a, { to: O })
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
        wt = Object(_.b)(
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
                return e(Ce({ name: n, show: a, data: r }));
              },
              getAllAccountBalance: function() {
                return e(Ie());
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
        )(At),
        jt = (n(377),
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
                  oe()
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
                    t = x ? f.a : v.a;
                  return c.a.createElement(
                    t,
                    null,
                    c.a.createElement(
                      b.a,
                      null,
                      c.a.createElement(g.a, {
                        path: "/",
                        render: function(t) {
                          return c.a.createElement(
                            wt,
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
      var Nt = n(36),
        Mt = n(50),
        St = function() {
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
            return J.saveAccount(a), n;
          }
          if ("UPDATE_ACCOUNT_BALANCE" === t.type)
            return e.map(function(e) {
              return e.address === t.account.address ? t.account : e;
            });
          var r = [];
          return (
            re.get("accountVersion")
              ? (r = J.getAccount())
              : ((r = []), re.remove("accounts"), re.set("accountVersion", 1)),
            e.length ? e : r || []
          );
        },
        Ct = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "GENERATE_MNEMONIC" === t.type
            ? T.a.generateMnemonic().split(" ")
            : "GENERATE_MNEMONIC" === t.type
            ? []
            : e;
        },
        xt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_BALANCE" === t.type
            ? [t.balance].concat(Object(Mt.a)(e))
            : e;
        },
        It = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_UTXO" === t.type
            ? [{ utxos: t.utxos, address: t.address }].concat(Object(Mt.a)(e))
            : e;
        },
        Tt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_PAGE_TITLE" === t.type ? t.pageTitle : e;
        },
        Pt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { name: "", show: !1 },
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return "SET_Modal" === t.type ? Object(Y.a)({}, e, t.modal) : e;
        },
        Bt = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "SET_GO_BACK" === t.type ? t.goBack : e;
        },
        Dt = Object(Nt.c)({
          accounts: St,
          newMnemonic: Ct,
          balances: xt,
          utxos: It,
          pageTitle: Tt,
          modal: Pt,
          goBack: Bt
        }),
        Ut = (n(378), n(174)),
        Lt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Nt.d,
        qt = Object(Nt.e)(Dt, Lt(Object(Nt.a)(Ut.a)));
      u()(),
        s.a.render(
          c.a.createElement(_.a, { store: qt }, c.a.createElement(jt, null)),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    38: function(e, t, n) {
      e.exports = {
        container: "Input_container__1i2Xt",
        label: "Input_label__19jTK",
        content: "Input_content__3XsMh",
        input: "Input_input__2BivL",
        suffix: "Input_suffix__1H2we",
        errMsg: "Input_errMsg__xq-rx"
      };
    },
    39: function(e, t, n) {
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
    40: function(e, t, n) {
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
    45: function(e, t, n) {
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
          c = n(19),
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
    81: function(e, t, n) {
      e.exports = {
        clipboard: "Clipboard_clipboard__21VD6",
        children: "Clipboard_children__1Btfq",
        ellipse: "Clipboard_ellipse__1CQJs"
      };
    },
    82: function(e, t, n) {
      e.exports = {
        SaveMnemonic: "SaveMnemonic_SaveMnemonic__ejnU-",
        desc: "SaveMnemonic_desc__1RXIT",
        generatewords: "SaveMnemonic_generatewords__3A-rp"
      };
    },
    83: function(e, t, n) {
      e.exports = {
        ImportAccount: "ImportAccount_ImportAccount__2WL_J",
        selectmode: "ImportAccount_selectmode__yV4eo",
        active: "ImportAccount_active__2Pny0"
      };
    },
    84: function(e, t, n) {
      e.exports = {
        CommonLayOut: "CommonLayOut_CommonLayOut__3vp86",
        content: "CommonLayOut_content__3QXdm"
      };
    }
  },
  [[175, 1, 2]]
]);
//# sourceMappingURL=main.0a97431d.chunk.js.map
