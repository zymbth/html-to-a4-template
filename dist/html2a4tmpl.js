function ri(ge, q) {
  for (var Se = 0; Se < q.length; Se++) {
    const X = q[Se];
    if (typeof X != "string" && !Array.isArray(X)) {
      for (const xe in X)
        if (xe !== "default" && !(xe in ge)) {
          const B = Object.getOwnPropertyDescriptor(X, xe);
          B && Object.defineProperty(ge, xe, B.get ? B : {
            enumerable: !0,
            get: () => X[xe]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(ge, Symbol.toStringTag, { value: "Module" }));
}
var ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ot = {}, oi = {
  get exports() {
    return Ot;
  },
  set exports(ge) {
    Ot = ge;
  }
};
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
(function(ge) {
  (function(q, Se) {
    ge.exports = q.document ? Se(q, !0) : function(X) {
      if (!X.document)
        throw new Error("jQuery requires a window with a document");
      return Se(X);
    };
  })(typeof window < "u" ? window : ii, function(q, Se) {
    var X = [], xe = Object.getPrototypeOf, B = X.slice, Ae = X.flat ? function(e) {
      return X.flat.call(e);
    } : function(e) {
      return X.concat.apply([], e);
    }, Be = X.push, Ke = X.indexOf, Fe = {}, ne = Fe.toString, We = Fe.hasOwnProperty, Ne = We.toString, G = Ne.call(Object), M = {}, O = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
    }, ie = function(t) {
      return t != null && t === t.window;
    }, H = q.document, $e = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function Ie(e, t, n) {
      n = n || H;
      var r, o, a = n.createElement("script");
      if (a.text = e, t)
        for (r in $e)
          o = t[r] || t.getAttribute && t.getAttribute(r), o && a.setAttribute(r, o);
      n.head.appendChild(a).parentNode.removeChild(a);
    }
    function qe(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? Fe[ne.call(e)] || "object" : typeof e;
    }
    var Ze = "3.6.4", i = function(e, t) {
      return new i.fn.init(e, t);
    };
    i.fn = i.prototype = {
      // The current version of jQuery being used
      jquery: Ze,
      constructor: i,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return B.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(e) {
        return e == null ? B.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(e) {
        var t = i.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      // Execute a callback for every element in the matched set.
      each: function(e) {
        return i.each(this, e);
      },
      map: function(e) {
        return this.pushStack(i.map(this, function(t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function() {
        return this.pushStack(B.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(i.grep(this, function(e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(i.grep(this, function(e, t) {
          return t % 2;
        }));
      },
      eq: function(e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: Be,
      sort: X.sort,
      splice: X.splice
    }, i.extend = i.fn.extend = function() {
      var e, t, n, r, o, a, s = arguments[0] || {}, c = 1, f = arguments.length, h = !1;
      for (typeof s == "boolean" && (h = s, s = arguments[c] || {}, c++), typeof s != "object" && !O(s) && (s = {}), c === f && (s = this, c--); c < f; c++)
        if ((e = arguments[c]) != null)
          for (t in e)
            r = e[t], !(t === "__proto__" || s === r) && (h && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], o && !Array.isArray(n) ? a = [] : !o && !i.isPlainObject(n) ? a = {} : a = n, o = !1, s[t] = i.extend(h, a, r)) : r !== void 0 && (s[t] = r));
      return s;
    }, i.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (Ze + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {
      },
      isPlainObject: function(e) {
        var t, n;
        return !e || ne.call(e) !== "[object Object]" ? !1 : (t = xe(e), t ? (n = We.call(t, "constructor") && t.constructor, typeof n == "function" && Ne.call(n) === G) : !0);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(e, t, n) {
        Ie(e, { nonce: t && t.nonce }, n);
      },
      each: function(e, t) {
        var n, r = 0;
        if (Ee(e))
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
            ;
        else
          for (r in e)
            if (t.call(e[r], r, e[r]) === !1)
              break;
        return e;
      },
      // results is for internal usage only
      makeArray: function(e, t) {
        var n = t || [];
        return e != null && (Ee(Object(e)) ? i.merge(
          n,
          typeof e == "string" ? [e] : e
        ) : Be.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return t == null ? -1 : Ke.call(t, e, n);
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++)
          e[o++] = t[r];
        return e.length = o, e;
      },
      grep: function(e, t, n) {
        for (var r, o = [], a = 0, s = e.length, c = !n; a < s; a++)
          r = !t(e[a], a), r !== c && o.push(e[a]);
        return o;
      },
      // arg is for internal usage only
      map: function(e, t, n) {
        var r, o, a = 0, s = [];
        if (Ee(e))
          for (r = e.length; a < r; a++)
            o = t(e[a], a, n), o != null && s.push(o);
        else
          for (a in e)
            o = t(e[a], a, n), o != null && s.push(o);
        return Ae(s);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: M
    }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = X[Symbol.iterator]), i.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(e, t) {
        Fe["[object " + t + "]"] = t.toLowerCase();
      }
    );
    function Ee(e) {
      var t = !!e && "length" in e && e.length, n = qe(e);
      return O(e) || ie(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
    }
    var oe = (
      /*!
       * Sizzle CSS Selector Engine v2.3.10
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2023-02-14
       */
      function(e) {
        var t, n, r, o, a, s, c, f, h, y, x, g, v, A, P, S, K, J, ce, W = "sizzle" + 1 * /* @__PURE__ */ new Date(), L = e.document, fe = 0, R = 0, V = Dt(), gt = Dt(), Nt = Dt(), de = Dt(), Xe = function(u, l) {
          return u === l && (x = !0), 0;
        }, Ge = {}.hasOwnProperty, le = [], Re = le.pop, be = le.push, _e = le.push, Rn = le.slice, Qe = function(u, l) {
          for (var d = 0, b = u.length; d < b; d++)
            if (u[d] === l)
              return d;
          return -1;
        }, Qt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", Ye = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", _n = "\\[" + F + "*(" + Ye + ")(?:" + F + // Operator (capture 2)
        "*([*^$|!~]?=)" + F + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ye + "))|)" + F + "*\\]", Yt = ":(" + Ye + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + _n + ")*)|.*)\\)|)", $r = new RegExp(F + "+", "g"), Et = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), zr = new RegExp("^" + F + "*," + F + "*"), Bn = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), Ur = new RegExp(F + "|>"), Vr = new RegExp(Yt), Xr = new RegExp("^" + Ye + "$"), kt = {
          ID: new RegExp("^#(" + Ye + ")"),
          CLASS: new RegExp("^\\.(" + Ye + ")"),
          TAG: new RegExp("^(" + Ye + "|[*])"),
          ATTR: new RegExp("^" + _n),
          PSEUDO: new RegExp("^" + Yt),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Qt + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
        }, Gr = /HTML$/i, Qr = /^(?:input|select|textarea|button)$/i, Yr = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/, Jr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Jt = /[+~]/, He = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"), Pe = function(u, l) {
          var d = "0x" + u.slice(1) - 65536;
          return l || // Replace a hexadecimal escape sequence with the encoded Unicode code point
          // Support: IE <=11+
          // For values outside the Basic Multilingual Plane (BMP), manually construct a
          // surrogate pair
          (d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320));
        }, Fn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Wn = function(u, l) {
          return l ? u === "\0" ? "�" : u.slice(0, -1) + "\\" + u.charCodeAt(u.length - 1).toString(16) + " " : "\\" + u;
        }, $n = function() {
          g();
        }, Kr = qt(
          function(u) {
            return u.disabled === !0 && u.nodeName.toLowerCase() === "fieldset";
          },
          { dir: "parentNode", next: "legend" }
        );
        try {
          _e.apply(
            le = Rn.call(L.childNodes),
            L.childNodes
          ), le[L.childNodes.length].nodeType;
        } catch {
          _e = {
            apply: le.length ? (
              // Leverage slice if possible
              function(l, d) {
                be.apply(l, Rn.call(d));
              }
            ) : (
              // Support: IE<9
              // Otherwise append directly
              function(l, d) {
                for (var b = l.length, p = 0; l[b++] = d[p++]; )
                  ;
                l.length = b - 1;
              }
            )
          };
        }
        function $(u, l, d, b) {
          var p, m, T, C, w, k, N, j = l && l.ownerDocument, I = l ? l.nodeType : 9;
          if (d = d || [], typeof u != "string" || !u || I !== 1 && I !== 9 && I !== 11)
            return d;
          if (!b && (g(l), l = l || v, P)) {
            if (I !== 11 && (w = Jr.exec(u)))
              if (p = w[1]) {
                if (I === 9)
                  if (T = l.getElementById(p)) {
                    if (T.id === p)
                      return d.push(T), d;
                  } else
                    return d;
                else if (j && (T = j.getElementById(p)) && ce(l, T) && T.id === p)
                  return d.push(T), d;
              } else {
                if (w[2])
                  return _e.apply(d, l.getElementsByTagName(u)), d;
                if ((p = w[3]) && n.getElementsByClassName && l.getElementsByClassName)
                  return _e.apply(d, l.getElementsByClassName(p)), d;
              }
            if (n.qsa && !de[u + " "] && (!S || !S.test(u)) && // Support: IE 8 only
            // Exclude object elements
            (I !== 1 || l.nodeName.toLowerCase() !== "object")) {
              if (N = u, j = l, I === 1 && (Ur.test(u) || Bn.test(u))) {
                for (j = Jt.test(u) && Zt(l.parentNode) || l, (j !== l || !n.scope) && ((C = l.getAttribute("id")) ? C = C.replace(Fn, Wn) : l.setAttribute("id", C = W)), k = s(u), m = k.length; m--; )
                  k[m] = (C ? "#" + C : ":scope") + " " + jt(k[m]);
                N = k.join(",");
              }
              try {
                return _e.apply(
                  d,
                  j.querySelectorAll(N)
                ), d;
              } catch {
                de(u, !0);
              } finally {
                C === W && l.removeAttribute("id");
              }
            }
          }
          return f(u.replace(Et, "$1"), l, d, b);
        }
        function Dt() {
          var u = [];
          function l(d, b) {
            return u.push(d + " ") > r.cacheLength && delete l[u.shift()], l[d + " "] = b;
          }
          return l;
        }
        function we(u) {
          return u[W] = !0, u;
        }
        function me(u) {
          var l = v.createElement("fieldset");
          try {
            return !!u(l);
          } catch {
            return !1;
          } finally {
            l.parentNode && l.parentNode.removeChild(l), l = null;
          }
        }
        function Kt(u, l) {
          for (var d = u.split("|"), b = d.length; b--; )
            r.attrHandle[d[b]] = l;
        }
        function zn(u, l) {
          var d = l && u, b = d && u.nodeType === 1 && l.nodeType === 1 && u.sourceIndex - l.sourceIndex;
          if (b)
            return b;
          if (d) {
            for (; d = d.nextSibling; )
              if (d === l)
                return -1;
          }
          return u ? 1 : -1;
        }
        function Zr(u) {
          return function(l) {
            var d = l.nodeName.toLowerCase();
            return d === "input" && l.type === u;
          };
        }
        function ei(u) {
          return function(l) {
            var d = l.nodeName.toLowerCase();
            return (d === "input" || d === "button") && l.type === u;
          };
        }
        function Un(u) {
          return function(l) {
            return "form" in l ? l.parentNode && l.disabled === !1 ? "label" in l ? "label" in l.parentNode ? l.parentNode.disabled === u : l.disabled === u : l.isDisabled === u || // Where there is no isDisabled, check manually
            /* jshint -W018 */
            l.isDisabled !== !u && Kr(l) === u : l.disabled === u : "label" in l ? l.disabled === u : !1;
          };
        }
        function Je(u) {
          return we(function(l) {
            return l = +l, we(function(d, b) {
              for (var p, m = u([], d.length, l), T = m.length; T--; )
                d[p = m[T]] && (d[p] = !(b[p] = d[p]));
            });
          });
        }
        function Zt(u) {
          return u && typeof u.getElementsByTagName < "u" && u;
        }
        n = $.support = {}, a = $.isXML = function(u) {
          var l = u && u.namespaceURI, d = u && (u.ownerDocument || u).documentElement;
          return !Gr.test(l || d && d.nodeName || "HTML");
        }, g = $.setDocument = function(u) {
          var l, d, b = u ? u.ownerDocument || u : L;
          return b == v || b.nodeType !== 9 || !b.documentElement || (v = b, A = v.documentElement, P = !a(v), L != v && (d = v.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", $n, !1) : d.attachEvent && d.attachEvent("onunload", $n)), n.scope = me(function(p) {
            return A.appendChild(p).appendChild(v.createElement("div")), typeof p.querySelectorAll < "u" && !p.querySelectorAll(":scope fieldset div").length;
          }), n.cssHas = me(function() {
            try {
              return v.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), n.attributes = me(function(p) {
            return p.className = "i", !p.getAttribute("className");
          }), n.getElementsByTagName = me(function(p) {
            return p.appendChild(v.createComment("")), !p.getElementsByTagName("*").length;
          }), n.getElementsByClassName = yt.test(v.getElementsByClassName), n.getById = me(function(p) {
            return A.appendChild(p).id = W, !v.getElementsByName || !v.getElementsByName(W).length;
          }), n.getById ? (r.filter.ID = function(p) {
            var m = p.replace(He, Pe);
            return function(T) {
              return T.getAttribute("id") === m;
            };
          }, r.find.ID = function(p, m) {
            if (typeof m.getElementById < "u" && P) {
              var T = m.getElementById(p);
              return T ? [T] : [];
            }
          }) : (r.filter.ID = function(p) {
            var m = p.replace(He, Pe);
            return function(T) {
              var C = typeof T.getAttributeNode < "u" && T.getAttributeNode("id");
              return C && C.value === m;
            };
          }, r.find.ID = function(p, m) {
            if (typeof m.getElementById < "u" && P) {
              var T, C, w, k = m.getElementById(p);
              if (k) {
                if (T = k.getAttributeNode("id"), T && T.value === p)
                  return [k];
                for (w = m.getElementsByName(p), C = 0; k = w[C++]; )
                  if (T = k.getAttributeNode("id"), T && T.value === p)
                    return [k];
              }
              return [];
            }
          }), r.find.TAG = n.getElementsByTagName ? function(p, m) {
            if (typeof m.getElementsByTagName < "u")
              return m.getElementsByTagName(p);
            if (n.qsa)
              return m.querySelectorAll(p);
          } : function(p, m) {
            var T, C = [], w = 0, k = m.getElementsByTagName(p);
            if (p === "*") {
              for (; T = k[w++]; )
                T.nodeType === 1 && C.push(T);
              return C;
            }
            return k;
          }, r.find.CLASS = n.getElementsByClassName && function(p, m) {
            if (typeof m.getElementsByClassName < "u" && P)
              return m.getElementsByClassName(p);
          }, K = [], S = [], (n.qsa = yt.test(v.querySelectorAll)) && (me(function(p) {
            var m;
            A.appendChild(p).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", p.querySelectorAll("[msallowcapture^='']").length && S.push("[*^$]=" + F + `*(?:''|"")`), p.querySelectorAll("[selected]").length || S.push("\\[" + F + "*(?:value|" + Qt + ")"), p.querySelectorAll("[id~=" + W + "-]").length || S.push("~="), m = v.createElement("input"), m.setAttribute("name", ""), p.appendChild(m), p.querySelectorAll("[name='']").length || S.push("\\[" + F + "*name" + F + "*=" + F + `*(?:''|"")`), p.querySelectorAll(":checked").length || S.push(":checked"), p.querySelectorAll("a#" + W + "+*").length || S.push(".#.+[+~]"), p.querySelectorAll("\\\f"), S.push("[\\r\\n\\f]");
          }), me(function(p) {
            p.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var m = v.createElement("input");
            m.setAttribute("type", "hidden"), p.appendChild(m).setAttribute("name", "D"), p.querySelectorAll("[name=d]").length && S.push("name" + F + "*[*^$|!~]?="), p.querySelectorAll(":enabled").length !== 2 && S.push(":enabled", ":disabled"), A.appendChild(p).disabled = !0, p.querySelectorAll(":disabled").length !== 2 && S.push(":enabled", ":disabled"), p.querySelectorAll("*,:x"), S.push(",.*:");
          })), (n.matchesSelector = yt.test(J = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && me(function(p) {
            n.disconnectedMatch = J.call(p, "*"), J.call(p, "[s!='']:x"), K.push("!=", Yt);
          }), n.cssHas || S.push(":has"), S = S.length && new RegExp(S.join("|")), K = K.length && new RegExp(K.join("|")), l = yt.test(A.compareDocumentPosition), ce = l || yt.test(A.contains) ? function(p, m) {
            var T = p.nodeType === 9 && p.documentElement || p, C = m && m.parentNode;
            return p === C || !!(C && C.nodeType === 1 && (T.contains ? T.contains(C) : p.compareDocumentPosition && p.compareDocumentPosition(C) & 16));
          } : function(p, m) {
            if (m) {
              for (; m = m.parentNode; )
                if (m === p)
                  return !0;
            }
            return !1;
          }, Xe = l ? function(p, m) {
            if (p === m)
              return x = !0, 0;
            var T = !p.compareDocumentPosition - !m.compareDocumentPosition;
            return T || (T = (p.ownerDocument || p) == (m.ownerDocument || m) ? p.compareDocumentPosition(m) : (
              // Otherwise we know they are disconnected
              1
            ), T & 1 || !n.sortDetached && m.compareDocumentPosition(p) === T ? p == v || p.ownerDocument == L && ce(L, p) ? -1 : m == v || m.ownerDocument == L && ce(L, m) ? 1 : y ? Qe(y, p) - Qe(y, m) : 0 : T & 4 ? -1 : 1);
          } : function(p, m) {
            if (p === m)
              return x = !0, 0;
            var T, C = 0, w = p.parentNode, k = m.parentNode, N = [p], j = [m];
            if (!w || !k)
              return p == v ? -1 : m == v ? 1 : (
                /* eslint-enable eqeqeq */
                w ? -1 : k ? 1 : y ? Qe(y, p) - Qe(y, m) : 0
              );
            if (w === k)
              return zn(p, m);
            for (T = p; T = T.parentNode; )
              N.unshift(T);
            for (T = m; T = T.parentNode; )
              j.unshift(T);
            for (; N[C] === j[C]; )
              C++;
            return C ? (
              // Do a sibling check if the nodes have a common ancestor
              zn(N[C], j[C])
            ) : (
              // Otherwise nodes in our document sort first
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              /* eslint-disable eqeqeq */
              N[C] == L ? -1 : j[C] == L ? 1 : (
                /* eslint-enable eqeqeq */
                0
              )
            );
          }), v;
        }, $.matches = function(u, l) {
          return $(u, null, null, l);
        }, $.matchesSelector = function(u, l) {
          if (g(u), n.matchesSelector && P && !de[l + " "] && (!K || !K.test(l)) && (!S || !S.test(l)))
            try {
              var d = J.call(u, l);
              if (d || n.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              u.document && u.document.nodeType !== 11)
                return d;
            } catch {
              de(l, !0);
            }
          return $(l, v, null, [u]).length > 0;
        }, $.contains = function(u, l) {
          return (u.ownerDocument || u) != v && g(u), ce(u, l);
        }, $.attr = function(u, l) {
          (u.ownerDocument || u) != v && g(u);
          var d = r.attrHandle[l.toLowerCase()], b = d && Ge.call(r.attrHandle, l.toLowerCase()) ? d(u, l, !P) : void 0;
          return b !== void 0 ? b : n.attributes || !P ? u.getAttribute(l) : (b = u.getAttributeNode(l)) && b.specified ? b.value : null;
        }, $.escape = function(u) {
          return (u + "").replace(Fn, Wn);
        }, $.error = function(u) {
          throw new Error("Syntax error, unrecognized expression: " + u);
        }, $.uniqueSort = function(u) {
          var l, d = [], b = 0, p = 0;
          if (x = !n.detectDuplicates, y = !n.sortStable && u.slice(0), u.sort(Xe), x) {
            for (; l = u[p++]; )
              l === u[p] && (b = d.push(p));
            for (; b--; )
              u.splice(d[b], 1);
          }
          return y = null, u;
        }, o = $.getText = function(u) {
          var l, d = "", b = 0, p = u.nodeType;
          if (p) {
            if (p === 1 || p === 9 || p === 11) {
              if (typeof u.textContent == "string")
                return u.textContent;
              for (u = u.firstChild; u; u = u.nextSibling)
                d += o(u);
            } else if (p === 3 || p === 4)
              return u.nodeValue;
          } else
            for (; l = u[b++]; )
              d += o(l);
          return d;
        }, r = $.selectors = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: we,
          match: kt,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(u) {
              return u[1] = u[1].replace(He, Pe), u[3] = (u[3] || u[4] || u[5] || "").replace(He, Pe), u[2] === "~=" && (u[3] = " " + u[3] + " "), u.slice(0, 4);
            },
            CHILD: function(u) {
              return u[1] = u[1].toLowerCase(), u[1].slice(0, 3) === "nth" ? (u[3] || $.error(u[0]), u[4] = +(u[4] ? u[5] + (u[6] || 1) : 2 * (u[3] === "even" || u[3] === "odd")), u[5] = +(u[7] + u[8] || u[3] === "odd")) : u[3] && $.error(u[0]), u;
            },
            PSEUDO: function(u) {
              var l, d = !u[6] && u[2];
              return kt.CHILD.test(u[0]) ? null : (u[3] ? u[2] = u[4] || u[5] || "" : d && Vr.test(d) && // Get excess from tokenize (recursively)
              (l = s(d, !0)) && // advance to the next closing parenthesis
              (l = d.indexOf(")", d.length - l) - d.length) && (u[0] = u[0].slice(0, l), u[2] = d.slice(0, l)), u.slice(0, 3));
            }
          },
          filter: {
            TAG: function(u) {
              var l = u.replace(He, Pe).toLowerCase();
              return u === "*" ? function() {
                return !0;
              } : function(d) {
                return d.nodeName && d.nodeName.toLowerCase() === l;
              };
            },
            CLASS: function(u) {
              var l = V[u + " "];
              return l || (l = new RegExp("(^|" + F + ")" + u + "(" + F + "|$)")) && V(
                u,
                function(d) {
                  return l.test(
                    typeof d.className == "string" && d.className || typeof d.getAttribute < "u" && d.getAttribute("class") || ""
                  );
                }
              );
            },
            ATTR: function(u, l, d) {
              return function(b) {
                var p = $.attr(b, u);
                return p == null ? l === "!=" : l ? (p += "", l === "=" ? p === d : l === "!=" ? p !== d : l === "^=" ? d && p.indexOf(d) === 0 : l === "*=" ? d && p.indexOf(d) > -1 : l === "$=" ? d && p.slice(-d.length) === d : l === "~=" ? (" " + p.replace($r, " ") + " ").indexOf(d) > -1 : l === "|=" ? p === d || p.slice(0, d.length + 1) === d + "-" : !1) : !0;
              };
            },
            CHILD: function(u, l, d, b, p) {
              var m = u.slice(0, 3) !== "nth", T = u.slice(-4) !== "last", C = l === "of-type";
              return b === 1 && p === 0 ? (
                // Shortcut for :nth-*(n)
                function(w) {
                  return !!w.parentNode;
                }
              ) : function(w, k, N) {
                var j, I, z, D, Z, te, pe = m !== T ? "nextSibling" : "previousSibling", U = w.parentNode, vt = C && w.nodeName.toLowerCase(), bt = !N && !C, he = !1;
                if (U) {
                  if (m) {
                    for (; pe; ) {
                      for (D = w; D = D[pe]; )
                        if (C ? D.nodeName.toLowerCase() === vt : D.nodeType === 1)
                          return !1;
                      te = pe = u === "only" && !te && "nextSibling";
                    }
                    return !0;
                  }
                  if (te = [T ? U.firstChild : U.lastChild], T && bt) {
                    for (D = U, z = D[W] || (D[W] = {}), I = z[D.uniqueID] || (z[D.uniqueID] = {}), j = I[u] || [], Z = j[0] === fe && j[1], he = Z && j[2], D = Z && U.childNodes[Z]; D = ++Z && D && D[pe] || // Fallback to seeking `elem` from the start
                    (he = Z = 0) || te.pop(); )
                      if (D.nodeType === 1 && ++he && D === w) {
                        I[u] = [fe, Z, he];
                        break;
                      }
                  } else if (bt && (D = w, z = D[W] || (D[W] = {}), I = z[D.uniqueID] || (z[D.uniqueID] = {}), j = I[u] || [], Z = j[0] === fe && j[1], he = Z), he === !1)
                    for (; (D = ++Z && D && D[pe] || (he = Z = 0) || te.pop()) && !((C ? D.nodeName.toLowerCase() === vt : D.nodeType === 1) && ++he && (bt && (z = D[W] || (D[W] = {}), I = z[D.uniqueID] || (z[D.uniqueID] = {}), I[u] = [fe, he]), D === w)); )
                      ;
                  return he -= p, he === b || he % b === 0 && he / b >= 0;
                }
              };
            },
            PSEUDO: function(u, l) {
              var d, b = r.pseudos[u] || r.setFilters[u.toLowerCase()] || $.error("unsupported pseudo: " + u);
              return b[W] ? b(l) : b.length > 1 ? (d = [u, u, "", l], r.setFilters.hasOwnProperty(u.toLowerCase()) ? we(function(p, m) {
                for (var T, C = b(p, l), w = C.length; w--; )
                  T = Qe(p, C[w]), p[T] = !(m[T] = C[w]);
              }) : function(p) {
                return b(p, 0, d);
              }) : b;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: we(function(u) {
              var l = [], d = [], b = c(u.replace(Et, "$1"));
              return b[W] ? we(function(p, m, T, C) {
                for (var w, k = b(p, null, C, []), N = p.length; N--; )
                  (w = k[N]) && (p[N] = !(m[N] = w));
              }) : function(p, m, T) {
                return l[0] = p, b(l, null, T, d), l[0] = null, !d.pop();
              };
            }),
            has: we(function(u) {
              return function(l) {
                return $(u, l).length > 0;
              };
            }),
            contains: we(function(u) {
              return u = u.replace(He, Pe), function(l) {
                return (l.textContent || o(l)).indexOf(u) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            lang: we(function(u) {
              return Xr.test(u || "") || $.error("unsupported lang: " + u), u = u.replace(He, Pe).toLowerCase(), function(l) {
                var d;
                do
                  if (d = P ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang"))
                    return d = d.toLowerCase(), d === u || d.indexOf(u + "-") === 0;
                while ((l = l.parentNode) && l.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(u) {
              var l = e.location && e.location.hash;
              return l && l.slice(1) === u.id;
            },
            root: function(u) {
              return u === A;
            },
            focus: function(u) {
              return u === v.activeElement && (!v.hasFocus || v.hasFocus()) && !!(u.type || u.href || ~u.tabIndex);
            },
            // Boolean properties
            enabled: Un(!1),
            disabled: Un(!0),
            checked: function(u) {
              var l = u.nodeName.toLowerCase();
              return l === "input" && !!u.checked || l === "option" && !!u.selected;
            },
            selected: function(u) {
              return u.parentNode && u.parentNode.selectedIndex, u.selected === !0;
            },
            // Contents
            empty: function(u) {
              for (u = u.firstChild; u; u = u.nextSibling)
                if (u.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(u) {
              return !r.pseudos.empty(u);
            },
            // Element/input types
            header: function(u) {
              return Yr.test(u.nodeName);
            },
            input: function(u) {
              return Qr.test(u.nodeName);
            },
            button: function(u) {
              var l = u.nodeName.toLowerCase();
              return l === "input" && u.type === "button" || l === "button";
            },
            text: function(u) {
              var l;
              return u.nodeName.toLowerCase() === "input" && u.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              ((l = u.getAttribute("type")) == null || l.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Je(function() {
              return [0];
            }),
            last: Je(function(u, l) {
              return [l - 1];
            }),
            eq: Je(function(u, l, d) {
              return [d < 0 ? d + l : d];
            }),
            even: Je(function(u, l) {
              for (var d = 0; d < l; d += 2)
                u.push(d);
              return u;
            }),
            odd: Je(function(u, l) {
              for (var d = 1; d < l; d += 2)
                u.push(d);
              return u;
            }),
            lt: Je(function(u, l, d) {
              for (var b = d < 0 ? d + l : d > l ? l : d; --b >= 0; )
                u.push(b);
              return u;
            }),
            gt: Je(function(u, l, d) {
              for (var b = d < 0 ? d + l : d; ++b < l; )
                u.push(b);
              return u;
            })
          }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          r.pseudos[t] = Zr(t);
        for (t in { submit: !0, reset: !0 })
          r.pseudos[t] = ei(t);
        function Vn() {
        }
        Vn.prototype = r.filters = r.pseudos, r.setFilters = new Vn(), s = $.tokenize = function(u, l) {
          var d, b, p, m, T, C, w, k = gt[u + " "];
          if (k)
            return l ? 0 : k.slice(0);
          for (T = u, C = [], w = r.preFilter; T; ) {
            (!d || (b = zr.exec(T))) && (b && (T = T.slice(b[0].length) || T), C.push(p = [])), d = !1, (b = Bn.exec(T)) && (d = b.shift(), p.push({
              value: d,
              // Cast descendant combinators to space
              type: b[0].replace(Et, " ")
            }), T = T.slice(d.length));
            for (m in r.filter)
              (b = kt[m].exec(T)) && (!w[m] || (b = w[m](b))) && (d = b.shift(), p.push({
                value: d,
                type: m,
                matches: b
              }), T = T.slice(d.length));
            if (!d)
              break;
          }
          return l ? T.length : T ? $.error(u) : (
            // Cache the tokens
            gt(u, C).slice(0)
          );
        };
        function jt(u) {
          for (var l = 0, d = u.length, b = ""; l < d; l++)
            b += u[l].value;
          return b;
        }
        function qt(u, l, d) {
          var b = l.dir, p = l.next, m = p || b, T = d && m === "parentNode", C = R++;
          return l.first ? (
            // Check against closest ancestor/preceding element
            function(w, k, N) {
              for (; w = w[b]; )
                if (w.nodeType === 1 || T)
                  return u(w, k, N);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(w, k, N) {
              var j, I, z, D = [fe, C];
              if (N) {
                for (; w = w[b]; )
                  if ((w.nodeType === 1 || T) && u(w, k, N))
                    return !0;
              } else
                for (; w = w[b]; )
                  if (w.nodeType === 1 || T)
                    if (z = w[W] || (w[W] = {}), I = z[w.uniqueID] || (z[w.uniqueID] = {}), p && p === w.nodeName.toLowerCase())
                      w = w[b] || w;
                    else {
                      if ((j = I[m]) && j[0] === fe && j[1] === C)
                        return D[2] = j[2];
                      if (I[m] = D, D[2] = u(w, k, N))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function en(u) {
          return u.length > 1 ? function(l, d, b) {
            for (var p = u.length; p--; )
              if (!u[p](l, d, b))
                return !1;
            return !0;
          } : u[0];
        }
        function ti(u, l, d) {
          for (var b = 0, p = l.length; b < p; b++)
            $(u, l[b], d);
          return d;
        }
        function Lt(u, l, d, b, p) {
          for (var m, T = [], C = 0, w = u.length, k = l != null; C < w; C++)
            (m = u[C]) && (!d || d(m, b, p)) && (T.push(m), k && l.push(C));
          return T;
        }
        function tn(u, l, d, b, p, m) {
          return b && !b[W] && (b = tn(b)), p && !p[W] && (p = tn(p, m)), we(function(T, C, w, k) {
            var N, j, I, z = [], D = [], Z = C.length, te = T || ti(
              l || "*",
              w.nodeType ? [w] : w,
              []
            ), pe = u && (T || !l) ? Lt(te, z, u, w, k) : te, U = d ? (
              // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
              p || (T ? u : Z || b) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                C
              )
            ) : pe;
            if (d && d(pe, U, w, k), b)
              for (N = Lt(U, D), b(N, [], w, k), j = N.length; j--; )
                (I = N[j]) && (U[D[j]] = !(pe[D[j]] = I));
            if (T) {
              if (p || u) {
                if (p) {
                  for (N = [], j = U.length; j--; )
                    (I = U[j]) && N.push(pe[j] = I);
                  p(null, U = [], N, k);
                }
                for (j = U.length; j--; )
                  (I = U[j]) && (N = p ? Qe(T, I) : z[j]) > -1 && (T[N] = !(C[N] = I));
              }
            } else
              U = Lt(
                U === C ? U.splice(Z, U.length) : U
              ), p ? p(null, C, U, k) : _e.apply(C, U);
          });
        }
        function nn(u) {
          for (var l, d, b, p = u.length, m = r.relative[u[0].type], T = m || r.relative[" "], C = m ? 1 : 0, w = qt(function(j) {
            return j === l;
          }, T, !0), k = qt(function(j) {
            return Qe(l, j) > -1;
          }, T, !0), N = [function(j, I, z) {
            var D = !m && (z || I !== h) || ((l = I).nodeType ? w(j, I, z) : k(j, I, z));
            return l = null, D;
          }]; C < p; C++)
            if (d = r.relative[u[C].type])
              N = [qt(en(N), d)];
            else {
              if (d = r.filter[u[C].type].apply(null, u[C].matches), d[W]) {
                for (b = ++C; b < p && !r.relative[u[b].type]; b++)
                  ;
                return tn(
                  C > 1 && en(N),
                  C > 1 && jt(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    u.slice(0, C - 1).concat({ value: u[C - 2].type === " " ? "*" : "" })
                  ).replace(Et, "$1"),
                  d,
                  C < b && nn(u.slice(C, b)),
                  b < p && nn(u = u.slice(b)),
                  b < p && jt(u)
                );
              }
              N.push(d);
            }
          return en(N);
        }
        function ni(u, l) {
          var d = l.length > 0, b = u.length > 0, p = function(m, T, C, w, k) {
            var N, j, I, z = 0, D = "0", Z = m && [], te = [], pe = h, U = m || b && r.find.TAG("*", k), vt = fe += pe == null ? 1 : Math.random() || 0.1, bt = U.length;
            for (k && (h = T == v || T || k); D !== bt && (N = U[D]) != null; D++) {
              if (b && N) {
                for (j = 0, !T && N.ownerDocument != v && (g(N), C = !P); I = u[j++]; )
                  if (I(N, T || v, C)) {
                    w.push(N);
                    break;
                  }
                k && (fe = vt);
              }
              d && ((N = !I && N) && z--, m && Z.push(N));
            }
            if (z += D, d && D !== z) {
              for (j = 0; I = l[j++]; )
                I(Z, te, T, C);
              if (m) {
                if (z > 0)
                  for (; D--; )
                    Z[D] || te[D] || (te[D] = Re.call(w));
                te = Lt(te);
              }
              _e.apply(w, te), k && !m && te.length > 0 && z + l.length > 1 && $.uniqueSort(w);
            }
            return k && (fe = vt, h = pe), Z;
          };
          return d ? we(p) : p;
        }
        return c = $.compile = function(u, l) {
          var d, b = [], p = [], m = Nt[u + " "];
          if (!m) {
            for (l || (l = s(u)), d = l.length; d--; )
              m = nn(l[d]), m[W] ? b.push(m) : p.push(m);
            m = Nt(
              u,
              ni(p, b)
            ), m.selector = u;
          }
          return m;
        }, f = $.select = function(u, l, d, b) {
          var p, m, T, C, w, k = typeof u == "function" && u, N = !b && s(u = k.selector || u);
          if (d = d || [], N.length === 1) {
            if (m = N[0] = N[0].slice(0), m.length > 2 && (T = m[0]).type === "ID" && l.nodeType === 9 && P && r.relative[m[1].type]) {
              if (l = (r.find.ID(T.matches[0].replace(He, Pe), l) || [])[0], l)
                k && (l = l.parentNode);
              else
                return d;
              u = u.slice(m.shift().value.length);
            }
            for (p = kt.needsContext.test(u) ? 0 : m.length; p-- && (T = m[p], !r.relative[C = T.type]); )
              if ((w = r.find[C]) && (b = w(
                T.matches[0].replace(He, Pe),
                Jt.test(m[0].type) && Zt(l.parentNode) || l
              ))) {
                if (m.splice(p, 1), u = b.length && jt(m), !u)
                  return _e.apply(d, b), d;
                break;
              }
          }
          return (k || c(u, N))(
            b,
            l,
            !P,
            d,
            !l || Jt.test(u) && Zt(l.parentNode) || l
          ), d;
        }, n.sortStable = W.split("").sort(Xe).join("") === W, n.detectDuplicates = !!x, g(), n.sortDetached = me(function(u) {
          return u.compareDocumentPosition(v.createElement("fieldset")) & 1;
        }), me(function(u) {
          return u.innerHTML = "<a href='#'></a>", u.firstChild.getAttribute("href") === "#";
        }) || Kt("type|href|height|width", function(u, l, d) {
          if (!d)
            return u.getAttribute(l, l.toLowerCase() === "type" ? 1 : 2);
        }), (!n.attributes || !me(function(u) {
          return u.innerHTML = "<input/>", u.firstChild.setAttribute("value", ""), u.firstChild.getAttribute("value") === "";
        })) && Kt("value", function(u, l, d) {
          if (!d && u.nodeName.toLowerCase() === "input")
            return u.defaultValue;
        }), me(function(u) {
          return u.getAttribute("disabled") == null;
        }) || Kt(Qt, function(u, l, d) {
          var b;
          if (!d)
            return u[l] === !0 ? l.toLowerCase() : (b = u.getAttributeNode(l)) && b.specified ? b.value : null;
        }), $;
      }(q)
    );
    i.find = oe, i.expr = oe.selectors, i.expr[":"] = i.expr.pseudos, i.uniqueSort = i.unique = oe.uniqueSort, i.text = oe.getText, i.isXMLDoc = oe.isXML, i.contains = oe.contains, i.escapeSelector = oe.escape;
    var Q = function(e, t, n) {
      for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (o && i(e).is(n))
            break;
          r.push(e);
        }
      return r;
    }, re = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && n.push(e);
      return n;
    }, ye = i.expr.match.needsContext;
    function Y(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Te(e, t, n) {
      return O(t) ? i.grep(e, function(r, o) {
        return !!t.call(r, o, r) !== n;
      }) : t.nodeType ? i.grep(e, function(r) {
        return r === t !== n;
      }) : typeof t != "string" ? i.grep(e, function(r) {
        return Ke.call(t, r) > -1 !== n;
      }) : i.filter(t, e, n);
    }
    i.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
        return o.nodeType === 1;
      }));
    }, i.fn.extend({
      find: function(e) {
        var t, n, r = this.length, o = this;
        if (typeof e != "string")
          return this.pushStack(i(e).filter(function() {
            for (t = 0; t < r; t++)
              if (i.contains(o[t], this))
                return !0;
          }));
        for (n = this.pushStack([]), t = 0; t < r; t++)
          i.find(e, o[t], n);
        return r > 1 ? i.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(Te(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(Te(this, e || [], !0));
      },
      is: function(e) {
        return !!Te(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof e == "string" && ye.test(e) ? i(e) : e || [],
          !1
        ).length;
      }
    });
    var ke, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Xn = i.fn.init = function(e, t, n) {
      var r, o;
      if (!e)
        return this;
      if (n = n || ke, typeof e == "string")
        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = ee.exec(e), r && (r[1] || !t))
          if (r[1]) {
            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(
              r[1],
              t && t.nodeType ? t.ownerDocument || t : H,
              !0
            )), Me.test(r[1]) && i.isPlainObject(t))
              for (r in t)
                O(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          } else
            return o = H.getElementById(r[2]), o && (this[0] = o, this.length = 1), this;
        else
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      else {
        if (e.nodeType)
          return this[0] = e, this.length = 1, this;
        if (O(e))
          return n.ready !== void 0 ? n.ready(e) : (
            // Execute immediately if ready is not present
            e(i)
          );
      }
      return i.makeArray(e, this);
    };
    Xn.prototype = i.fn, ke = i(H);
    var Gn = /^(?:parents|prev(?:Until|All))/, Qn = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    i.fn.extend({
      has: function(e) {
        var t = i(e, this), n = t.length;
        return this.filter(function() {
          for (var r = 0; r < n; r++)
            if (i.contains(this, t[r]))
              return !0;
        });
      },
      closest: function(e, t) {
        var n, r = 0, o = this.length, a = [], s = typeof e != "string" && i(e);
        if (!ye.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : (
                // Don't pass non-elements to Sizzle
                n.nodeType === 1 && i.find.matchesSelector(n, e)
              ))) {
                a.push(n);
                break;
              }
        }
        return this.pushStack(a.length > 1 ? i.uniqueSort(a) : a);
      },
      // Determine the position of an element within the set
      index: function(e) {
        return e ? typeof e == "string" ? Ke.call(i(e), this[0]) : Ke.call(
          this,
          // If it receives a jQuery object, the first element is used
          e.jquery ? e[0] : e
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(e, t) {
        return this.pushStack(
          i.uniqueSort(
            i.merge(this.get(), i(e, t))
          )
        );
      },
      addBack: function(e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }
    });
    function rn(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; )
        ;
      return e;
    }
    i.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function(e) {
        return Q(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return Q(e, "parentNode", n);
      },
      next: function(e) {
        return rn(e, "nextSibling");
      },
      prev: function(e) {
        return rn(e, "previousSibling");
      },
      nextAll: function(e) {
        return Q(e, "nextSibling");
      },
      prevAll: function(e) {
        return Q(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return Q(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return Q(e, "previousSibling", n);
      },
      siblings: function(e) {
        return re((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return re(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        xe(e.contentDocument) ? e.contentDocument : (Y(e, "template") && (e = e.content || e), i.merge([], e.childNodes));
      }
    }, function(e, t) {
      i.fn[e] = function(n, r) {
        var o = i.map(this, t, n);
        return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (o = i.filter(r, o)), this.length > 1 && (Qn[e] || i.uniqueSort(o), Gn.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var De = /[^\x20\t\r\n\f]+/g;
    function Yn(e) {
      var t = {};
      return i.each(e.match(De) || [], function(n, r) {
        t[r] = !0;
      }), t;
    }
    i.Callbacks = function(e) {
      e = typeof e == "string" ? Yn(e) : i.extend({}, e);
      var t, n, r, o, a = [], s = [], c = -1, f = function() {
        for (o = o || e.once, r = t = !0; s.length; c = -1)
          for (n = s.shift(); ++c < a.length; )
            a[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = a.length, n = !1);
        e.memory || (n = !1), t = !1, o && (n ? a = [] : a = "");
      }, h = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return a && (n && !t && (c = a.length - 1, s.push(n)), function y(x) {
            i.each(x, function(g, v) {
              O(v) ? (!e.unique || !h.has(v)) && a.push(v) : v && v.length && qe(v) !== "string" && y(v);
            });
          }(arguments), n && !t && f()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return i.each(arguments, function(y, x) {
            for (var g; (g = i.inArray(x, a, g)) > -1; )
              a.splice(g, 1), g <= c && c--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(y) {
          return y ? i.inArray(y, a) > -1 : a.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return a && (a = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return o = s = [], a = n = "", this;
        },
        disabled: function() {
          return !a;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return o = s = [], !n && !t && (a = n = ""), this;
        },
        locked: function() {
          return !!o;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(y, x) {
          return o || (x = x || [], x = [y, x.slice ? x.slice() : x], s.push(x), t || f()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return h.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!r;
        }
      };
      return h;
    };
    function et(e) {
      return e;
    }
    function mt(e) {
      throw e;
    }
    function on(e, t, n, r) {
      var o;
      try {
        e && O(o = e.promise) ? o.call(e).done(t).fail(n) : e && O(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (a) {
        n.apply(void 0, [a]);
      }
    }
    i.extend({
      Deferred: function(e) {
        var t = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], n = "pending", r = {
          state: function() {
            return n;
          },
          always: function() {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function(a) {
            return r.then(null, a);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var a = arguments;
            return i.Deferred(function(s) {
              i.each(t, function(c, f) {
                var h = O(a[f[4]]) && a[f[4]];
                o[f[1]](function() {
                  var y = h && h.apply(this, arguments);
                  y && O(y.promise) ? y.promise().progress(s.notify).done(s.resolve).fail(s.reject) : s[f[0] + "With"](
                    this,
                    h ? [y] : arguments
                  );
                });
              }), a = null;
            }).promise();
          },
          then: function(a, s, c) {
            var f = 0;
            function h(y, x, g, v) {
              return function() {
                var A = this, P = arguments, S = function() {
                  var J, ce;
                  if (!(y < f)) {
                    if (J = g.apply(A, P), J === x.promise())
                      throw new TypeError("Thenable self-resolution");
                    ce = J && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof J == "object" || typeof J == "function") && J.then, O(ce) ? v ? ce.call(
                      J,
                      h(f, x, et, v),
                      h(f, x, mt, v)
                    ) : (f++, ce.call(
                      J,
                      h(f, x, et, v),
                      h(f, x, mt, v),
                      h(
                        f,
                        x,
                        et,
                        x.notifyWith
                      )
                    )) : (g !== et && (A = void 0, P = [J]), (v || x.resolveWith)(A, P));
                  }
                }, K = v ? S : function() {
                  try {
                    S();
                  } catch (J) {
                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(
                      J,
                      K.stackTrace
                    ), y + 1 >= f && (g !== mt && (A = void 0, P = [J]), x.rejectWith(A, P));
                  }
                };
                y ? K() : (i.Deferred.getStackHook && (K.stackTrace = i.Deferred.getStackHook()), q.setTimeout(K));
              };
            }
            return i.Deferred(function(y) {
              t[0][3].add(
                h(
                  0,
                  y,
                  O(c) ? c : et,
                  y.notifyWith
                )
              ), t[1][3].add(
                h(
                  0,
                  y,
                  O(a) ? a : et
                )
              ), t[2][3].add(
                h(
                  0,
                  y,
                  O(s) ? s : mt
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(a) {
            return a != null ? i.extend(a, r) : r;
          }
        }, o = {};
        return i.each(t, function(a, s) {
          var c = s[2], f = s[5];
          r[s[1]] = c.add, f && c.add(
            function() {
              n = f;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            t[3 - a][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            t[3 - a][3].disable,
            // progress_callbacks.lock
            t[0][2].lock,
            // progress_handlers.lock
            t[0][3].lock
          ), c.add(s[3].fire), o[s[0]] = function() {
            return o[s[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[s[0] + "With"] = c.fireWith;
        }), r.promise(o), e && e.call(o, o), o;
      },
      // Deferred helper
      when: function(e) {
        var t = arguments.length, n = t, r = Array(n), o = B.call(arguments), a = i.Deferred(), s = function(c) {
          return function(f) {
            r[c] = this, o[c] = arguments.length > 1 ? B.call(arguments) : f, --t || a.resolveWith(r, o);
          };
        };
        if (t <= 1 && (on(
          e,
          a.done(s(n)).resolve,
          a.reject,
          !t
        ), a.state() === "pending" || O(o[n] && o[n].then)))
          return a.then();
        for (; n--; )
          on(o[n], s(n), a.reject);
        return a.promise();
      }
    });
    var Jn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(e, t) {
      q.console && q.console.warn && e && Jn.test(e.name) && q.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, i.readyException = function(e) {
      q.setTimeout(function() {
        throw e;
      });
    };
    var Ht = i.Deferred();
    i.fn.ready = function(e) {
      return Ht.then(e).catch(function(t) {
        i.readyException(t);
      }), this;
    }, i.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(e) {
        (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && Ht.resolveWith(H, [i]));
      }
    }), i.ready.then = Ht.then;
    function xt() {
      H.removeEventListener("DOMContentLoaded", xt), q.removeEventListener("load", xt), i.ready();
    }
    H.readyState === "complete" || H.readyState !== "loading" && !H.documentElement.doScroll ? q.setTimeout(i.ready) : (H.addEventListener("DOMContentLoaded", xt), q.addEventListener("load", xt));
    var Le = function(e, t, n, r, o, a, s) {
      var c = 0, f = e.length, h = n == null;
      if (qe(n) === "object") {
        o = !0;
        for (c in n)
          Le(e, t, c, n[c], !0, a, s);
      } else if (r !== void 0 && (o = !0, O(r) || (s = !0), h && (s ? (t.call(e, r), t = null) : (h = t, t = function(y, x, g) {
        return h.call(i(y), g);
      })), t))
        for (; c < f; c++)
          t(
            e[c],
            n,
            s ? r : r.call(e[c], c, t(e[c], n))
          );
      return o ? e : h ? t.call(e) : f ? t(e[0], n) : a;
    }, Kn = /^-ms-/, Zn = /-([a-z])/g;
    function er(e, t) {
      return t.toUpperCase();
    }
    function je(e) {
      return e.replace(Kn, "ms-").replace(Zn, er);
    }
    var st = function(e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function ut() {
      this.expando = i.expando + ut.uid++;
    }
    ut.uid = 1, ut.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, st(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function(e, t, n) {
        var r, o = this.cache(e);
        if (typeof t == "string")
          o[je(t)] = n;
        else
          for (r in t)
            o[je(r)] = t[r];
        return o;
      },
      get: function(e, t) {
        return t === void 0 ? this.cache(e) : (
          // Always use camelCase key (gh-2257)
          e[this.expando] && e[this.expando][je(t)]
        );
      },
      access: function(e, t, n) {
        return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t);
      },
      remove: function(e, t) {
        var n, r = e[this.expando];
        if (r !== void 0) {
          if (t !== void 0)
            for (Array.isArray(t) ? t = t.map(je) : (t = je(t), t = t in r ? [t] : t.match(De) || []), n = t.length; n--; )
              delete r[t[n]];
          (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return t !== void 0 && !i.isEmptyObject(t);
      }
    };
    var E = new ut(), ae = new ut(), tr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, nr = /[A-Z]/g;
    function rr(e) {
      return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : tr.test(e) ? JSON.parse(e) : e;
    }
    function an(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (r = "data-" + t.replace(nr, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
          try {
            n = rr(n);
          } catch {
          }
          ae.set(e, t, n);
        } else
          n = void 0;
      return n;
    }
    i.extend({
      hasData: function(e) {
        return ae.hasData(e) || E.hasData(e);
      },
      data: function(e, t, n) {
        return ae.access(e, t, n);
      },
      removeData: function(e, t) {
        ae.remove(e, t);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(e, t, n) {
        return E.access(e, t, n);
      },
      _removeData: function(e, t) {
        E.remove(e, t);
      }
    }), i.fn.extend({
      data: function(e, t) {
        var n, r, o, a = this[0], s = a && a.attributes;
        if (e === void 0) {
          if (this.length && (o = ae.get(a), a.nodeType === 1 && !E.get(a, "hasDataAttrs"))) {
            for (n = s.length; n--; )
              s[n] && (r = s[n].name, r.indexOf("data-") === 0 && (r = je(r.slice(5)), an(a, r, o[r])));
            E.set(a, "hasDataAttrs", !0);
          }
          return o;
        }
        return typeof e == "object" ? this.each(function() {
          ae.set(this, e);
        }) : Le(this, function(c) {
          var f;
          if (a && c === void 0)
            return f = ae.get(a, e), f !== void 0 || (f = an(a, e), f !== void 0) ? f : void 0;
          this.each(function() {
            ae.set(this, e, c);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function(e) {
        return this.each(function() {
          ae.remove(this, e);
        });
      }
    }), i.extend({
      queue: function(e, t, n) {
        var r;
        if (e)
          return t = (t || "fx") + "queue", r = E.get(e, t), n && (!r || Array.isArray(n) ? r = E.access(e, t, i.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = i.queue(e, t), r = n.length, o = n.shift(), a = i._queueHooks(e, t), s = function() {
          i.dequeue(e, t);
        };
        o === "inprogress" && (o = n.shift(), r--), o && (t === "fx" && n.unshift("inprogress"), delete a.stop, o.call(e, s, a)), !r && a && a.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return E.get(e, n) || E.access(e, n, {
          empty: i.Callbacks("once memory").add(function() {
            E.remove(e, [t + "queue", n]);
          })
        });
      }
    }), i.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function() {
          var r = i.queue(this, e, t);
          i._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
        });
      },
      dequeue: function(e) {
        return this.each(function() {
          i.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(e, t) {
        var n, r = 1, o = i.Deferred(), a = this, s = this.length, c = function() {
          --r || o.resolveWith(a, [a]);
        };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; s--; )
          n = E.get(a[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(c));
        return c(), o.promise(t);
      }
    });
    var sn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ft = new RegExp("^(?:([+-])=|)(" + sn + ")([a-z%]*)$", "i"), Oe = ["Top", "Right", "Bottom", "Left"], ze = H.documentElement, tt = function(e) {
      return i.contains(e.ownerDocument, e);
    }, ir = { composed: !0 };
    ze.getRootNode && (tt = function(e) {
      return i.contains(e.ownerDocument, e) || e.getRootNode(ir) === e.ownerDocument;
    });
    var Tt = function(e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      tt(e) && i.css(e, "display") === "none";
    };
    function un(e, t, n, r) {
      var o, a, s = 20, c = r ? function() {
        return r.cur();
      } : function() {
        return i.css(e, t, "");
      }, f = c(), h = n && n[3] || (i.cssNumber[t] ? "" : "px"), y = e.nodeType && (i.cssNumber[t] || h !== "px" && +f) && ft.exec(i.css(e, t));
      if (y && y[3] !== h) {
        for (f = f / 2, h = h || y[3], y = +f || 1; s--; )
          i.style(e, t, y + h), (1 - a) * (1 - (a = c() / f || 0.5)) <= 0 && (s = 0), y = y / a;
        y = y * 2, i.style(e, t, y + h), n = n || [];
      }
      return n && (y = +y || +f || 0, o = n[1] ? y + (n[1] + 1) * n[2] : +n[2], r && (r.unit = h, r.start = y, r.end = o)), o;
    }
    var fn = {};
    function or(e) {
      var t, n = e.ownerDocument, r = e.nodeName, o = fn[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = i.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), fn[r] = o, o);
    }
    function nt(e, t) {
      for (var n, r, o = [], a = 0, s = e.length; a < s; a++)
        r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (o[a] = E.get(r, "display") || null, o[a] || (r.style.display = "")), r.style.display === "" && Tt(r) && (o[a] = or(r))) : n !== "none" && (o[a] = "none", E.set(r, "display", n)));
      for (a = 0; a < s; a++)
        o[a] != null && (e[a].style.display = o[a]);
      return e;
    }
    i.fn.extend({
      show: function() {
        return nt(this, !0);
      },
      hide: function() {
        return nt(this);
      },
      toggle: function(e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
          Tt(this) ? i(this).show() : i(this).hide();
        });
      }
    });
    var lt = /^(?:checkbox|radio)$/i, ln = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, cn = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var e = H.createDocumentFragment(), t = e.appendChild(H.createElement("div")), n = H.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), M.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", M.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", M.option = !!t.lastChild;
    })();
    var ve = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, M.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
    function se(e, t) {
      var n;
      return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && Y(e, t) ? i.merge([e], n) : n;
    }
    function Pt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        E.set(
          e[n],
          "globalEval",
          !t || E.get(t[n], "globalEval")
        );
    }
    var ar = /<|&#?\w+;/;
    function dn(e, t, n, r, o) {
      for (var a, s, c, f, h, y, x = t.createDocumentFragment(), g = [], v = 0, A = e.length; v < A; v++)
        if (a = e[v], a || a === 0)
          if (qe(a) === "object")
            i.merge(g, a.nodeType ? [a] : a);
          else if (!ar.test(a))
            g.push(t.createTextNode(a));
          else {
            for (s = s || x.appendChild(t.createElement("div")), c = (ln.exec(a) || ["", ""])[1].toLowerCase(), f = ve[c] || ve._default, s.innerHTML = f[1] + i.htmlPrefilter(a) + f[2], y = f[0]; y--; )
              s = s.lastChild;
            i.merge(g, s.childNodes), s = x.firstChild, s.textContent = "";
          }
      for (x.textContent = "", v = 0; a = g[v++]; ) {
        if (r && i.inArray(a, r) > -1) {
          o && o.push(a);
          continue;
        }
        if (h = tt(a), s = se(x.appendChild(a), "script"), h && Pt(s), n)
          for (y = 0; a = s[y++]; )
            cn.test(a.type || "") && n.push(a);
      }
      return x;
    }
    var pn = /^([^.]*)(?:\.(.+)|)/;
    function rt() {
      return !0;
    }
    function it() {
      return !1;
    }
    function sr(e, t) {
      return e === ur() == (t === "focus");
    }
    function ur() {
      try {
        return H.activeElement;
      } catch {
      }
    }
    function It(e, t, n, r, o, a) {
      var s, c;
      if (typeof t == "object") {
        typeof n != "string" && (r = r || n, n = void 0);
        for (c in t)
          It(e, c, n, r, t[c], a);
        return e;
      }
      if (r == null && o == null ? (o = n, r = n = void 0) : o == null && (typeof n == "string" ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1)
        o = it;
      else if (!o)
        return e;
      return a === 1 && (s = o, o = function(f) {
        return i().off(f), s.apply(this, arguments);
      }, o.guid = s.guid || (s.guid = i.guid++)), e.each(function() {
        i.event.add(this, t, o, r, n);
      });
    }
    i.event = {
      global: {},
      add: function(e, t, n, r, o) {
        var a, s, c, f, h, y, x, g, v, A, P, S = E.get(e);
        if (st(e))
          for (n.handler && (a = n, n = a.handler, o = a.selector), o && i.find.matchesSelector(ze, o), n.guid || (n.guid = i.guid++), (f = S.events) || (f = S.events = /* @__PURE__ */ Object.create(null)), (s = S.handle) || (s = S.handle = function(K) {
            return typeof i < "u" && i.event.triggered !== K.type ? i.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(De) || [""], h = t.length; h--; )
            c = pn.exec(t[h]) || [], v = P = c[1], A = (c[2] || "").split(".").sort(), v && (x = i.event.special[v] || {}, v = (o ? x.delegateType : x.bindType) || v, x = i.event.special[v] || {}, y = i.extend({
              type: v,
              origType: P,
              data: r,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && i.expr.match.needsContext.test(o),
              namespace: A.join(".")
            }, a), (g = f[v]) || (g = f[v] = [], g.delegateCount = 0, (!x.setup || x.setup.call(e, r, A, s) === !1) && e.addEventListener && e.addEventListener(v, s)), x.add && (x.add.call(e, y), y.handler.guid || (y.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, y) : g.push(y), i.event.global[v] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(e, t, n, r, o) {
        var a, s, c, f, h, y, x, g, v, A, P, S = E.hasData(e) && E.get(e);
        if (!(!S || !(f = S.events))) {
          for (t = (t || "").match(De) || [""], h = t.length; h--; ) {
            if (c = pn.exec(t[h]) || [], v = P = c[1], A = (c[2] || "").split(".").sort(), !v) {
              for (v in f)
                i.event.remove(e, v + t[h], n, r, !0);
              continue;
            }
            for (x = i.event.special[v] || {}, v = (r ? x.delegateType : x.bindType) || v, g = f[v] || [], c = c[2] && new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = g.length; a--; )
              y = g[a], (o || P === y.origType) && (!n || n.guid === y.guid) && (!c || c.test(y.namespace)) && (!r || r === y.selector || r === "**" && y.selector) && (g.splice(a, 1), y.selector && g.delegateCount--, x.remove && x.remove.call(e, y));
            s && !g.length && ((!x.teardown || x.teardown.call(e, A, S.handle) === !1) && i.removeEvent(e, v, S.handle), delete f[v]);
          }
          i.isEmptyObject(f) && E.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t, n, r, o, a, s, c = new Array(arguments.length), f = i.event.fix(e), h = (E.get(this, "events") || /* @__PURE__ */ Object.create(null))[f.type] || [], y = i.event.special[f.type] || {};
        for (c[0] = f, t = 1; t < arguments.length; t++)
          c[t] = arguments[t];
        if (f.delegateTarget = this, !(y.preDispatch && y.preDispatch.call(this, f) === !1)) {
          for (s = i.event.handlers.call(this, f, h), t = 0; (o = s[t++]) && !f.isPropagationStopped(); )
            for (f.currentTarget = o.elem, n = 0; (a = o.handlers[n++]) && !f.isImmediatePropagationStopped(); )
              (!f.rnamespace || a.namespace === !1 || f.rnamespace.test(a.namespace)) && (f.handleObj = a, f.data = a.data, r = ((i.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, c), r !== void 0 && (f.result = r) === !1 && (f.preventDefault(), f.stopPropagation()));
          return y.postDispatch && y.postDispatch.call(this, f), f.result;
        }
      },
      handlers: function(e, t) {
        var n, r, o, a, s, c = [], f = t.delegateCount, h = e.target;
        if (f && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        h.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(e.type === "click" && e.button >= 1)) {
          for (; h !== this; h = h.parentNode || this)
            if (h.nodeType === 1 && !(e.type === "click" && h.disabled === !0)) {
              for (a = [], s = {}, n = 0; n < f; n++)
                r = t[n], o = r.selector + " ", s[o] === void 0 && (s[o] = r.needsContext ? i(o, this).index(h) > -1 : i.find(o, this, null, [h]).length), s[o] && a.push(r);
              a.length && c.push({ elem: h, handlers: a });
            }
        }
        return h = this, f < t.length && c.push({ elem: h, handlers: t.slice(f) }), c;
      },
      addProp: function(e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: O(t) ? function() {
            if (this.originalEvent)
              return t(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[e];
          },
          set: function(n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            });
          }
        });
      },
      fix: function(e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: !0
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(e) {
            var t = this || e;
            return lt.test(t.type) && t.click && Y(t, "input") && Ct(t, "click", rt), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return lt.test(t.type) && t.click && Y(t, "input") && Ct(t, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(e) {
            var t = e.target;
            return lt.test(t.type) && t.click && Y(t, "input") && E.get(t, "click") || Y(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    };
    function Ct(e, t, n) {
      if (!n) {
        E.get(e, t) === void 0 && i.event.add(e, t, rt);
        return;
      }
      E.set(e, t, !1), i.event.add(e, t, {
        namespace: !1,
        handler: function(r) {
          var o, a, s = E.get(this, t);
          if (r.isTrigger & 1 && this[t]) {
            if (s.length)
              (i.event.special[t] || {}).delegateType && r.stopPropagation();
            else if (s = B.call(arguments), E.set(this, t, s), o = n(this, t), this[t](), a = E.get(this, t), s !== a || o ? E.set(this, t, !1) : a = {}, s !== a)
              return r.stopImmediatePropagation(), r.preventDefault(), a && a.value;
          } else
            s.length && (E.set(this, t, {
              value: i.event.trigger(
                // Support: IE <=9 - 11+
                // Extend with the prototype to reset the above stopImmediatePropagation()
                i.extend(s[0], i.Event.prototype),
                s.slice(1),
                this
              )
            }), r.stopImmediatePropagation());
        }
      });
    }
    i.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, i.Event = function(e, t) {
      if (!(this instanceof i.Event))
        return new i.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
      e.returnValue === !1 ? rt : it, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0;
    }, i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: it,
      isPropagationStopped: it,
      isImmediatePropagationStopped: it,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = rt, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = rt, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = rt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, i.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, i.event.addProp), i.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      i.event.special[e] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          return Ct(this, e, sr), !1;
        },
        trigger: function() {
          return Ct(this, e), !0;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(n) {
          return E.get(n.target, e);
        },
        delegateType: t
      };
    }), i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      i.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(n) {
          var r, o = this, a = n.relatedTarget, s = n.handleObj;
          return (!a || a !== o && !i.contains(o, a)) && (n.type = s.origType, r = s.handler.apply(this, arguments), n.type = t), r;
        }
      };
    }), i.fn.extend({
      on: function(e, t, n, r) {
        return It(this, e, t, n, r);
      },
      one: function(e, t, n, r) {
        return It(this, e, t, n, r, 1);
      },
      off: function(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          return r = e.handleObj, i(e.delegateTarget).off(
            r.namespace ? r.origType + "." + r.namespace : r.origType,
            r.selector,
            r.handler
          ), this;
        if (typeof e == "object") {
          for (o in e)
            this.off(o, t, e[o]);
          return this;
        }
        return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = it), this.each(function() {
          i.event.remove(this, e, n, t);
        });
      }
    });
    var fr = /<script|<style|<link/i, lr = /checked\s*(?:[^=]|=\s*.checked.)/i, cr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function hn(e, t) {
      return Y(e, "table") && Y(t.nodeType !== 11 ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e;
    }
    function dr(e) {
      return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
    }
    function pr(e) {
      return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function gn(e, t) {
      var n, r, o, a, s, c, f;
      if (t.nodeType === 1) {
        if (E.hasData(e) && (a = E.get(e), f = a.events, f)) {
          E.remove(t, "handle events");
          for (o in f)
            for (n = 0, r = f[o].length; n < r; n++)
              i.event.add(t, o, f[o][n]);
        }
        ae.hasData(e) && (s = ae.access(e), c = i.extend({}, s), ae.set(t, c));
      }
    }
    function hr(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && lt.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
    }
    function ot(e, t, n, r) {
      t = Ae(t);
      var o, a, s, c, f, h, y = 0, x = e.length, g = x - 1, v = t[0], A = O(v);
      if (A || x > 1 && typeof v == "string" && !M.checkClone && lr.test(v))
        return e.each(function(P) {
          var S = e.eq(P);
          A && (t[0] = v.call(this, P, S.html())), ot(S, t, n, r);
        });
      if (x && (o = dn(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, o.childNodes.length === 1 && (o = a), a || r)) {
        for (s = i.map(se(o, "script"), dr), c = s.length; y < x; y++)
          f = o, y !== g && (f = i.clone(f, !0, !0), c && i.merge(s, se(f, "script"))), n.call(e[y], f, y);
        if (c)
          for (h = s[s.length - 1].ownerDocument, i.map(s, pr), y = 0; y < c; y++)
            f = s[y], cn.test(f.type || "") && !E.access(f, "globalEval") && i.contains(h, f) && (f.src && (f.type || "").toLowerCase() !== "module" ? i._evalUrl && !f.noModule && i._evalUrl(f.src, {
              nonce: f.nonce || f.getAttribute("nonce")
            }, h) : Ie(f.textContent.replace(cr, ""), f, h));
      }
      return e;
    }
    function yn(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, a = 0; (r = o[a]) != null; a++)
        !n && r.nodeType === 1 && i.cleanData(se(r)), r.parentNode && (n && tt(r) && Pt(se(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, n) {
        var r, o, a, s, c = e.cloneNode(!0), f = tt(e);
        if (!M.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
          for (s = se(c), a = se(e), r = 0, o = a.length; r < o; r++)
            hr(a[r], s[r]);
        if (t)
          if (n)
            for (a = a || se(e), s = s || se(c), r = 0, o = a.length; r < o; r++)
              gn(a[r], s[r]);
          else
            gn(e, c);
        return s = se(c, "script"), s.length > 0 && Pt(s, !f && se(e, "script")), c;
      },
      cleanData: function(e) {
        for (var t, n, r, o = i.event.special, a = 0; (n = e[a]) !== void 0; a++)
          if (st(n)) {
            if (t = n[E.expando]) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[E.expando] = void 0;
            }
            n[ae.expando] && (n[ae.expando] = void 0);
          }
      }
    }), i.fn.extend({
      detach: function(e) {
        return yn(this, e, !0);
      },
      remove: function(e) {
        return yn(this, e);
      },
      text: function(e) {
        return Le(this, function(t) {
          return t === void 0 ? i.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
          });
        }, null, e, arguments.length);
      },
      append: function() {
        return ot(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = hn(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return ot(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = hn(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return ot(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return ot(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (i.cleanData(se(e, !1)), e.textContent = "");
        return this;
      },
      clone: function(e, t) {
        return e = e ?? !1, t = t ?? e, this.map(function() {
          return i.clone(this, e, t);
        });
      },
      html: function(e) {
        return Le(this, function(t) {
          var n = this[0] || {}, r = 0, o = this.length;
          if (t === void 0 && n.nodeType === 1)
            return n.innerHTML;
          if (typeof t == "string" && !fr.test(t) && !ve[(ln.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = i.htmlPrefilter(t);
            try {
              for (; r < o; r++)
                n = this[r] || {}, n.nodeType === 1 && (i.cleanData(se(n, !1)), n.innerHTML = t);
              n = 0;
            } catch {
            }
          }
          n && this.empty().append(t);
        }, null, e, arguments.length);
      },
      replaceWith: function() {
        var e = [];
        return ot(this, arguments, function(t) {
          var n = this.parentNode;
          i.inArray(this, e) < 0 && (i.cleanData(se(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      i.fn[e] = function(n) {
        for (var r, o = [], a = i(n), s = a.length - 1, c = 0; c <= s; c++)
          r = c === s ? this : this.clone(!0), i(a[c])[t](r), Be.apply(o, r.get());
        return this.pushStack(o);
      };
    });
    var Mt = new RegExp("^(" + sn + ")(?!px)[a-z%]+$", "i"), Rt = /^--/, wt = function(e) {
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = q), t.getComputedStyle(e);
    }, vn = function(e, t, n) {
      var r, o, a = {};
      for (o in t)
        a[o] = e.style[o], e.style[o] = t[o];
      r = n.call(e);
      for (o in t)
        e.style[o] = a[o];
      return r;
    }, gr = new RegExp(Oe.join("|"), "i"), bn = "[\\x20\\t\\r\\n\\f]", yr = new RegExp(
      "^" + bn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + bn + "+$",
      "g"
    );
    (function() {
      function e() {
        if (h) {
          f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ze.appendChild(f).appendChild(h);
          var y = q.getComputedStyle(h);
          n = y.top !== "1%", c = t(y.marginLeft) === 12, h.style.right = "60%", a = t(y.right) === 36, r = t(y.width) === 36, h.style.position = "absolute", o = t(h.offsetWidth / 3) === 12, ze.removeChild(f), h = null;
        }
      }
      function t(y) {
        return Math.round(parseFloat(y));
      }
      var n, r, o, a, s, c, f = H.createElement("div"), h = H.createElement("div");
      h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = h.style.backgroundClip === "content-box", i.extend(M, {
        boxSizingReliable: function() {
          return e(), r;
        },
        pixelBoxStyles: function() {
          return e(), a;
        },
        pixelPosition: function() {
          return e(), n;
        },
        reliableMarginLeft: function() {
          return e(), c;
        },
        scrollboxSize: function() {
          return e(), o;
        },
        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function() {
          var y, x, g, v;
          return s == null && (y = H.createElement("table"), x = H.createElement("tr"), g = H.createElement("div"), y.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", x.style.cssText = "border:1px solid", x.style.height = "1px", g.style.height = "9px", g.style.display = "block", ze.appendChild(y).appendChild(x).appendChild(g), v = q.getComputedStyle(x), s = parseInt(v.height, 10) + parseInt(v.borderTopWidth, 10) + parseInt(v.borderBottomWidth, 10) === x.offsetHeight, ze.removeChild(y)), s;
        }
      }));
    })();
    function ct(e, t, n) {
      var r, o, a, s, c = Rt.test(t), f = e.style;
      return n = n || wt(e), n && (s = n.getPropertyValue(t) || n[t], c && s && (s = s.replace(yr, "$1") || void 0), s === "" && !tt(e) && (s = i.style(e, t)), !M.pixelBoxStyles() && Mt.test(s) && gr.test(t) && (r = f.width, o = f.minWidth, a = f.maxWidth, f.minWidth = f.maxWidth = f.width = s, s = n.width, f.width = r, f.minWidth = o, f.maxWidth = a)), s !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        s + ""
      ) : s;
    }
    function mn(e, t) {
      return {
        get: function() {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        }
      };
    }
    var xn = ["Webkit", "Moz", "ms"], Tn = H.createElement("div").style, Cn = {};
    function vr(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = xn.length; n--; )
        if (e = xn[n] + t, e in Tn)
          return e;
    }
    function _t(e) {
      var t = i.cssProps[e] || Cn[e];
      return t || (e in Tn ? e : Cn[e] = vr(e) || e);
    }
    var br = /^(none|table(?!-c[ea]).+)/, mr = { position: "absolute", visibility: "hidden", display: "block" }, wn = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Sn(e, t, n) {
      var r = ft.exec(t);
      return r ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, r[2] - (n || 0)) + (r[3] || "px")
      ) : t;
    }
    function Bt(e, t, n, r, o, a) {
      var s = t === "width" ? 1 : 0, c = 0, f = 0;
      if (n === (r ? "border" : "content"))
        return 0;
      for (; s < 4; s += 2)
        n === "margin" && (f += i.css(e, n + Oe[s], !0, o)), r ? (n === "content" && (f -= i.css(e, "padding" + Oe[s], !0, o)), n !== "margin" && (f -= i.css(e, "border" + Oe[s] + "Width", !0, o))) : (f += i.css(e, "padding" + Oe[s], !0, o), n !== "padding" ? f += i.css(e, "border" + Oe[s] + "Width", !0, o) : c += i.css(e, "border" + Oe[s] + "Width", !0, o));
      return !r && a >= 0 && (f += Math.max(0, Math.ceil(
        e["offset" + t[0].toUpperCase() + t.slice(1)] - a - f - c - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), f;
    }
    function An(e, t, n) {
      var r = wt(e), o = !M.boxSizingReliable() || n, a = o && i.css(e, "boxSizing", !1, r) === "border-box", s = a, c = ct(e, t, r), f = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Mt.test(c)) {
        if (!n)
          return c;
        c = "auto";
      }
      return (!M.boxSizingReliable() && a || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !M.reliableTrDimensions() && Y(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      c === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(c) && i.css(e, "display", !1, r) === "inline") && // Make sure the element is visible & connected
      e.getClientRects().length && (a = i.css(e, "boxSizing", !1, r) === "border-box", s = f in e, s && (c = e[f])), c = parseFloat(c) || 0, c + Bt(
        e,
        t,
        n || (a ? "border" : "content"),
        s,
        r,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        c
      ) + "px";
    }
    i.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = ct(e, "opacity");
              return n === "" ? "1" : n;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function(e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var o, a, s, c = je(t), f = Rt.test(t), h = e.style;
          if (f || (t = _t(c)), s = i.cssHooks[t] || i.cssHooks[c], n !== void 0) {
            if (a = typeof n, a === "string" && (o = ft.exec(n)) && o[1] && (n = un(e, t, o), a = "number"), n == null || n !== n)
              return;
            a === "number" && !f && (n += o && o[3] || (i.cssNumber[c] ? "" : "px")), !M.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (h[t] = "inherit"), (!s || !("set" in s) || (n = s.set(e, n, r)) !== void 0) && (f ? h.setProperty(t, n) : h[t] = n);
          } else
            return s && "get" in s && (o = s.get(e, !1, r)) !== void 0 ? o : h[t];
        }
      },
      css: function(e, t, n, r) {
        var o, a, s, c = je(t), f = Rt.test(t);
        return f || (t = _t(c)), s = i.cssHooks[t] || i.cssHooks[c], s && "get" in s && (o = s.get(e, !0, n)), o === void 0 && (o = ct(e, t, r)), o === "normal" && t in wn && (o = wn[t]), n === "" || n ? (a = parseFloat(o), n === !0 || isFinite(a) ? a || 0 : o) : o;
      }
    }), i.each(["height", "width"], function(e, t) {
      i.cssHooks[t] = {
        get: function(n, r, o) {
          if (r)
            return br.test(i.css(n, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!n.getClientRects().length || !n.getBoundingClientRect().width) ? vn(n, mr, function() {
              return An(n, t, o);
            }) : An(n, t, o);
        },
        set: function(n, r, o) {
          var a, s = wt(n), c = !M.scrollboxSize() && s.position === "absolute", f = c || o, h = f && i.css(n, "boxSizing", !1, s) === "border-box", y = o ? Bt(
            n,
            t,
            o,
            h,
            s
          ) : 0;
          return h && c && (y -= Math.ceil(
            n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - Bt(n, t, "border", !1, s) - 0.5
          )), y && (a = ft.exec(r)) && (a[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), Sn(n, r, y);
        }
      };
    }), i.cssHooks.marginLeft = mn(
      M.reliableMarginLeft,
      function(e, t) {
        if (t)
          return (parseFloat(ct(e, "marginLeft")) || e.getBoundingClientRect().left - vn(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left;
          })) + "px";
      }
    ), i.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      i.cssHooks[e + t] = {
        expand: function(n) {
          for (var r = 0, o = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++)
            o[e + Oe[r] + t] = a[r] || a[r - 2] || a[0];
          return o;
        }
      }, e !== "margin" && (i.cssHooks[e + t].set = Sn);
    }), i.fn.extend({
      css: function(e, t) {
        return Le(this, function(n, r, o) {
          var a, s, c = {}, f = 0;
          if (Array.isArray(r)) {
            for (a = wt(n), s = r.length; f < s; f++)
              c[r[f]] = i.css(n, r[f], !1, a);
            return c;
          }
          return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
        }, e, t, arguments.length > 1);
      }
    });
    function ue(e, t, n, r, o) {
      return new ue.prototype.init(e, t, n, r, o);
    }
    i.Tween = ue, ue.prototype = {
      constructor: ue,
      init: function(e, t, n, r, o, a) {
        this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (i.cssNumber[n] ? "" : "px");
      },
      cur: function() {
        var e = ue.propHooks[this.prop];
        return e && e.get ? e.get(this) : ue.propHooks._default.get(this);
      },
      run: function(e) {
        var t, n = ue.propHooks[this.prop];
        return this.options.duration ? this.pos = t = i.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
        ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ue.propHooks._default.set(this), this;
      }
    }, ue.prototype.init.prototype = ue.prototype, ue.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
        },
        set: function(e) {
          i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[_t(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, ue.propHooks.scrollTop = ue.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, i.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, i.fx = ue.prototype.init, i.fx.step = {};
    var at, St, xr = /^(?:toggle|show|hide)$/, Tr = /queueHooks$/;
    function Ft() {
      St && (H.hidden === !1 && q.requestAnimationFrame ? q.requestAnimationFrame(Ft) : q.setTimeout(Ft, i.fx.interval), i.fx.tick());
    }
    function Nn() {
      return q.setTimeout(function() {
        at = void 0;
      }), at = Date.now();
    }
    function At(e, t) {
      var n, r = 0, o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        n = Oe[r], o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function En(e, t, n) {
      for (var r, o = (Ce.tweeners[t] || []).concat(Ce.tweeners["*"]), a = 0, s = o.length; a < s; a++)
        if (r = o[a].call(n, t, e))
          return r;
    }
    function Cr(e, t, n) {
      var r, o, a, s, c, f, h, y, x = "width" in t || "height" in t, g = this, v = {}, A = e.style, P = e.nodeType && Tt(e), S = E.get(e, "fxshow");
      n.queue || (s = i._queueHooks(e, "fx"), s.unqueued == null && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
        s.unqueued || c();
      }), s.unqueued++, g.always(function() {
        g.always(function() {
          s.unqueued--, i.queue(e, "fx").length || s.empty.fire();
        });
      }));
      for (r in t)
        if (o = t[r], xr.test(o)) {
          if (delete t[r], a = a || o === "toggle", o === (P ? "hide" : "show"))
            if (o === "show" && S && S[r] !== void 0)
              P = !0;
            else
              continue;
          v[r] = S && S[r] || i.style(e, r);
        }
      if (f = !i.isEmptyObject(t), !(!f && i.isEmptyObject(v))) {
        x && e.nodeType === 1 && (n.overflow = [A.overflow, A.overflowX, A.overflowY], h = S && S.display, h == null && (h = E.get(e, "display")), y = i.css(e, "display"), y === "none" && (h ? y = h : (nt([e], !0), h = e.style.display || h, y = i.css(e, "display"), nt([e]))), (y === "inline" || y === "inline-block" && h != null) && i.css(e, "float") === "none" && (f || (g.done(function() {
          A.display = h;
        }), h == null && (y = A.display, h = y === "none" ? "" : y)), A.display = "inline-block")), n.overflow && (A.overflow = "hidden", g.always(function() {
          A.overflow = n.overflow[0], A.overflowX = n.overflow[1], A.overflowY = n.overflow[2];
        })), f = !1;
        for (r in v)
          f || (S ? "hidden" in S && (P = S.hidden) : S = E.access(e, "fxshow", { display: h }), a && (S.hidden = !P), P && nt([e], !0), g.done(function() {
            P || nt([e]), E.remove(e, "fxshow");
            for (r in v)
              i.style(e, r, v[r]);
          })), f = En(P ? S[r] : 0, r, g), r in S || (S[r] = f.start, P && (f.end = f.start, f.start = 0));
      }
    }
    function wr(e, t) {
      var n, r, o, a, s;
      for (n in e)
        if (r = je(n), o = t[r], a = e[n], Array.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), s = i.cssHooks[r], s && "expand" in s) {
          a = s.expand(a), delete e[r];
          for (n in a)
            n in e || (e[n] = a[n], t[n] = o);
        } else
          t[r] = o;
    }
    function Ce(e, t, n) {
      var r, o, a = 0, s = Ce.prefilters.length, c = i.Deferred().always(function() {
        delete f.elem;
      }), f = function() {
        if (o)
          return !1;
        for (var x = at || Nn(), g = Math.max(0, h.startTime + h.duration - x), v = g / h.duration || 0, A = 1 - v, P = 0, S = h.tweens.length; P < S; P++)
          h.tweens[P].run(A);
        return c.notifyWith(e, [h, A, g]), A < 1 && S ? g : (S || c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h]), !1);
      }, h = c.promise({
        elem: e,
        props: i.extend({}, t),
        opts: i.extend(!0, {
          specialEasing: {},
          easing: i.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: at || Nn(),
        duration: n.duration,
        tweens: [],
        createTween: function(x, g) {
          var v = i.Tween(
            e,
            h.opts,
            x,
            g,
            h.opts.specialEasing[x] || h.opts.easing
          );
          return h.tweens.push(v), v;
        },
        stop: function(x) {
          var g = 0, v = x ? h.tweens.length : 0;
          if (o)
            return this;
          for (o = !0; g < v; g++)
            h.tweens[g].run(1);
          return x ? (c.notifyWith(e, [h, 1, 0]), c.resolveWith(e, [h, x])) : c.rejectWith(e, [h, x]), this;
        }
      }), y = h.props;
      for (wr(y, h.opts.specialEasing); a < s; a++)
        if (r = Ce.prefilters[a].call(h, e, y, h.opts), r)
          return O(r.stop) && (i._queueHooks(h.elem, h.opts.queue).stop = r.stop.bind(r)), r;
      return i.map(y, En, h), O(h.opts.start) && h.opts.start.call(e, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), i.fx.timer(
        i.extend(f, {
          elem: e,
          anim: h,
          queue: h.opts.queue
        })
      ), h;
    }
    i.Animation = i.extend(Ce, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return un(n.elem, e, ft.exec(t), n), n;
        }]
      },
      tweener: function(e, t) {
        O(e) ? (t = e, e = ["*"]) : e = e.match(De);
        for (var n, r = 0, o = e.length; r < o; r++)
          n = e[r], Ce.tweeners[n] = Ce.tweeners[n] || [], Ce.tweeners[n].unshift(t);
      },
      prefilters: [Cr],
      prefilter: function(e, t) {
        t ? Ce.prefilters.unshift(e) : Ce.prefilters.push(e);
      }
    }), i.speed = function(e, t, n) {
      var r = e && typeof e == "object" ? i.extend({}, e) : {
        complete: n || !n && t || O(e) && e,
        duration: e,
        easing: n && t || t && !O(t) && t
      };
      return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        O(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
      }, r;
    }, i.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Tt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function(e, t, n, r) {
        var o = i.isEmptyObject(e), a = i.speed(t, n, r), s = function() {
          var c = Ce(this, i.extend({}, e), a);
          (o || E.get(this, "finish")) && c.stop(!0);
        };
        return s.finish = s, o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s);
      },
      stop: function(e, t, n) {
        var r = function(o) {
          var a = o.stop;
          delete o.stop, a(n);
        };
        return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var o = !0, a = e != null && e + "queueHooks", s = i.timers, c = E.get(this);
          if (a)
            c[a] && c[a].stop && r(c[a]);
          else
            for (a in c)
              c[a] && c[a].stop && Tr.test(a) && r(c[a]);
          for (a = s.length; a--; )
            s[a].elem === this && (e == null || s[a].queue === e) && (s[a].anim.stop(n), o = !1, s.splice(a, 1));
          (o || !n) && i.dequeue(this, e);
        });
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = E.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], a = i.timers, s = r ? r.length : 0;
          for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--; )
            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
          for (t = 0; t < s; t++)
            r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish;
        });
      }
    }), i.each(["toggle", "show", "hide"], function(e, t) {
      var n = i.fn[t];
      i.fn[t] = function(r, o, a) {
        return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(At(t, !0), r, o, a);
      };
    }), i.each({
      slideDown: At("show"),
      slideUp: At("hide"),
      slideToggle: At("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(e, t) {
      i.fn[e] = function(n, r, o) {
        return this.animate(t, n, r, o);
      };
    }), i.timers = [], i.fx.tick = function() {
      var e, t = 0, n = i.timers;
      for (at = Date.now(); t < n.length; t++)
        e = n[t], !e() && n[t] === e && n.splice(t--, 1);
      n.length || i.fx.stop(), at = void 0;
    }, i.fx.timer = function(e) {
      i.timers.push(e), i.fx.start();
    }, i.fx.interval = 13, i.fx.start = function() {
      St || (St = !0, Ft());
    }, i.fx.stop = function() {
      St = null;
    }, i.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, i.fn.delay = function(e, t) {
      return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
        var o = q.setTimeout(n, e);
        r.stop = function() {
          q.clearTimeout(o);
        };
      });
    }, function() {
      var e = H.createElement("input"), t = H.createElement("select"), n = t.appendChild(H.createElement("option"));
      e.type = "checkbox", M.checkOn = e.value !== "", M.optSelected = n.selected, e = H.createElement("input"), e.value = "t", e.type = "radio", M.radioValue = e.value === "t";
    }();
    var kn, dt = i.expr.attrHandle;
    i.fn.extend({
      attr: function(e, t) {
        return Le(this, i.attr, e, t, arguments.length > 1);
      },
      removeAttr: function(e) {
        return this.each(function() {
          i.removeAttr(this, e);
        });
      }
    }), i.extend({
      attr: function(e, t, n) {
        var r, o, a = e.nodeType;
        if (!(a === 3 || a === 8 || a === 2)) {
          if (typeof e.getAttribute > "u")
            return i.prop(e, t, n);
          if ((a !== 1 || !i.isXMLDoc(e)) && (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? kn : void 0)), n !== void 0) {
            if (n === null) {
              i.removeAttr(e, t);
              return;
            }
            return o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
          }
          return o && "get" in o && (r = o.get(e, t)) !== null ? r : (r = i.find.attr(e, t), r ?? void 0);
        }
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!M.radioValue && t === "radio" && Y(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, r = 0, o = t && t.match(De);
        if (o && e.nodeType === 1)
          for (; n = o[r++]; )
            e.removeAttribute(n);
      }
    }), kn = {
      set: function(e, t, n) {
        return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = dt[t] || i.find.attr;
      dt[t] = function(r, o, a) {
        var s, c, f = o.toLowerCase();
        return a || (c = dt[f], dt[f] = s, s = n(r, o, a) != null ? f : null, dt[f] = c), s;
      };
    });
    var Sr = /^(?:input|select|textarea|button)$/i, Ar = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function(e, t) {
        return Le(this, i.prop, e, t, arguments.length > 1);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[i.propFix[e] || e];
        });
      }
    }), i.extend({
      prop: function(e, t, n) {
        var r, o, a = e.nodeType;
        if (!(a === 3 || a === 8 || a === 2))
          return (a !== 1 || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, o = i.propHooks[t]), n !== void 0 ? o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : e[t] = n : o && "get" in o && (r = o.get(e, t)) !== null ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = i.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Sr.test(e.nodeName) || Ar.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), M.optSelected || (i.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), i.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      i.propFix[this.toLowerCase()] = this;
    });
    function Ue(e) {
      var t = e.match(De) || [];
      return t.join(" ");
    }
    function Ve(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Wt(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(De) || [] : [];
    }
    i.fn.extend({
      addClass: function(e) {
        var t, n, r, o, a, s;
        return O(e) ? this.each(function(c) {
          i(this).addClass(e.call(this, c, Ve(this)));
        }) : (t = Wt(e), t.length ? this.each(function() {
          if (r = Ve(this), n = this.nodeType === 1 && " " + Ue(r) + " ", n) {
            for (a = 0; a < t.length; a++)
              o = t[a], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            s = Ue(n), r !== s && this.setAttribute("class", s);
          }
        }) : this);
      },
      removeClass: function(e) {
        var t, n, r, o, a, s;
        return O(e) ? this.each(function(c) {
          i(this).removeClass(e.call(this, c, Ve(this)));
        }) : arguments.length ? (t = Wt(e), t.length ? this.each(function() {
          if (r = Ve(this), n = this.nodeType === 1 && " " + Ue(r) + " ", n) {
            for (a = 0; a < t.length; a++)
              for (o = t[a]; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            s = Ue(n), r !== s && this.setAttribute("class", s);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(e, t) {
        var n, r, o, a, s = typeof e, c = s === "string" || Array.isArray(e);
        return O(e) ? this.each(function(f) {
          i(this).toggleClass(
            e.call(this, f, Ve(this), t),
            t
          );
        }) : typeof t == "boolean" && c ? t ? this.addClass(e) : this.removeClass(e) : (n = Wt(e), this.each(function() {
          if (c)
            for (a = i(this), o = 0; o < n.length; o++)
              r = n[o], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
          else
            (e === void 0 || s === "boolean") && (r = Ve(this), r && E.set(this, "__className__", r), this.setAttribute && this.setAttribute(
              "class",
              r || e === !1 ? "" : E.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++]; )
          if (n.nodeType === 1 && (" " + Ue(Ve(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
    var Nr = /\r/g;
    i.fn.extend({
      val: function(e) {
        var t, n, r, o = this[0];
        return arguments.length ? (r = O(e), this.each(function(a) {
          var s;
          this.nodeType === 1 && (r ? s = e.call(this, a, i(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : Array.isArray(s) && (s = i.map(s, function(c) {
            return c == null ? "" : c + "";
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, s, "value") === void 0) && (this.value = s));
        })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== void 0 ? n : (n = o.value, typeof n == "string" ? n.replace(Nr, "") : n ?? "")) : void 0;
      }
    }), i.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = i.find.attr(e, "value");
            return t ?? // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            Ue(i.text(e));
          }
        },
        select: {
          get: function(e) {
            var t, n, r, o = e.options, a = e.selectedIndex, s = e.type === "select-one", c = s ? null : [], f = s ? a + 1 : o.length;
            for (a < 0 ? r = f : r = s ? a : 0; r < f; r++)
              if (n = o[r], (n.selected || r === a) && // Don't return options that are disabled or in a disabled optgroup
              !n.disabled && (!n.parentNode.disabled || !Y(n.parentNode, "optgroup"))) {
                if (t = i(n).val(), s)
                  return t;
                c.push(t);
              }
            return c;
          },
          set: function(e, t) {
            for (var n, r, o = e.options, a = i.makeArray(t), s = o.length; s--; )
              r = o[s], (r.selected = i.inArray(i.valHooks.option.get(r), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a;
          }
        }
      }
    }), i.each(["radio", "checkbox"], function() {
      i.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return e.checked = i.inArray(i(e).val(), t) > -1;
        }
      }, M.checkOn || (i.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      });
    }), M.focusin = "onfocusin" in q;
    var Dn = /^(?:focusinfocus|focusoutblur)$/, jn = function(e) {
      e.stopPropagation();
    };
    i.extend(i.event, {
      trigger: function(e, t, n, r) {
        var o, a, s, c, f, h, y, x, g = [n || H], v = We.call(e, "type") ? e.type : e, A = We.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = x = s = n = n || H, !(n.nodeType === 3 || n.nodeType === 8) && !Dn.test(v + i.event.triggered) && (v.indexOf(".") > -1 && (A = v.split("."), v = A.shift(), A.sort()), f = v.indexOf(":") < 0 && "on" + v, e = e[i.expando] ? e : new i.Event(v, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = A.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), y = i.event.special[v] || {}, !(!r && y.trigger && y.trigger.apply(n, t) === !1))) {
          if (!r && !y.noBubble && !ie(n)) {
            for (c = y.delegateType || v, Dn.test(c + v) || (a = a.parentNode); a; a = a.parentNode)
              g.push(a), s = a;
            s === (n.ownerDocument || H) && g.push(s.defaultView || s.parentWindow || q);
          }
          for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
            x = a, e.type = o > 1 ? c : y.bindType || v, h = (E.get(a, "events") || /* @__PURE__ */ Object.create(null))[e.type] && E.get(a, "handle"), h && h.apply(a, t), h = f && a[f], h && h.apply && st(a) && (e.result = h.apply(a, t), e.result === !1 && e.preventDefault());
          return e.type = v, !r && !e.isDefaultPrevented() && (!y._default || y._default.apply(g.pop(), t) === !1) && st(n) && f && O(n[v]) && !ie(n) && (s = n[f], s && (n[f] = null), i.event.triggered = v, e.isPropagationStopped() && x.addEventListener(v, jn), n[v](), e.isPropagationStopped() && x.removeEventListener(v, jn), i.event.triggered = void 0, s && (n[f] = s)), e.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(e, t, n) {
        var r = i.extend(
          new i.Event(),
          n,
          {
            type: e,
            isSimulated: !0
          }
        );
        i.event.trigger(r, null, t);
      }
    }), i.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          i.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n)
          return i.event.trigger(e, t, n, !0);
      }
    }), M.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      var n = function(r) {
        i.event.simulate(t, r.target, i.event.fix(r));
      };
      i.event.special[t] = {
        setup: function() {
          var r = this.ownerDocument || this.document || this, o = E.access(r, t);
          o || r.addEventListener(e, n, !0), E.access(r, t, (o || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this.document || this, o = E.access(r, t) - 1;
          o ? E.access(r, t, o) : (r.removeEventListener(e, n, !0), E.remove(r, t));
        }
      };
    });
    var pt = q.location, qn = { guid: Date.now() }, $t = /\?/;
    i.parseXML = function(e) {
      var t, n;
      if (!e || typeof e != "string")
        return null;
      try {
        t = new q.DOMParser().parseFromString(e, "text/xml");
      } catch {
      }
      return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
        return r.textContent;
      }).join(`
`) : e)), t;
    };
    var Er = /\[\]$/, Ln = /\r?\n/g, kr = /^(?:submit|button|image|reset|file)$/i, Dr = /^(?:input|select|textarea|keygen)/i;
    function zt(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function(a, s) {
          n || Er.test(e) ? r(e, s) : zt(
            e + "[" + (typeof s == "object" && s != null ? a : "") + "]",
            s,
            n,
            r
          );
        });
      else if (!n && qe(t) === "object")
        for (o in t)
          zt(e + "[" + o + "]", t[o], n, r);
      else
        r(e, t);
    }
    i.param = function(e, t) {
      var n, r = [], o = function(a, s) {
        var c = O(s) ? s() : s;
        r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c ?? "");
      };
      if (e == null)
        return "";
      if (Array.isArray(e) || e.jquery && !i.isPlainObject(e))
        i.each(e, function() {
          o(this.name, this.value);
        });
      else
        for (n in e)
          zt(n, e[n], t, o);
      return r.join("&");
    }, i.fn.extend({
      serialize: function() {
        return i.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = i.prop(this, "elements");
          return e ? i.makeArray(e) : this;
        }).filter(function() {
          var e = this.type;
          return this.name && !i(this).is(":disabled") && Dr.test(this.nodeName) && !kr.test(e) && (this.checked || !lt.test(e));
        }).map(function(e, t) {
          var n = i(this).val();
          return n == null ? null : Array.isArray(n) ? i.map(n, function(r) {
            return { name: t.name, value: r.replace(Ln, `\r
`) };
          }) : { name: t.name, value: n.replace(Ln, `\r
`) };
        }).get();
      }
    });
    var jr = /%20/g, qr = /#.*$/, Lr = /([?&])_=[^&]*/, Or = /^(.*?):[ \t]*([^\r\n]*)$/mg, Hr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pr = /^(?:GET|HEAD)$/, Ir = /^\/\//, On = {}, Ut = {}, Hn = "*/".concat("*"), Vt = H.createElement("a");
    Vt.href = pt.href;
    function Pn(e) {
      return function(t, n) {
        typeof t != "string" && (n = t, t = "*");
        var r, o = 0, a = t.toLowerCase().match(De) || [];
        if (O(n))
          for (; r = a[o++]; )
            r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }
    function In(e, t, n, r) {
      var o = {}, a = e === Ut;
      function s(c) {
        var f;
        return o[c] = !0, i.each(e[c] || [], function(h, y) {
          var x = y(t, n, r);
          if (typeof x == "string" && !a && !o[x])
            return t.dataTypes.unshift(x), s(x), !1;
          if (a)
            return !(f = x);
        }), f;
      }
      return s(t.dataTypes[0]) || !o["*"] && s("*");
    }
    function Xt(e, t) {
      var n, r, o = i.ajaxSettings.flatOptions || {};
      for (n in t)
        t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function Mr(e, t, n) {
      for (var r, o, a, s, c = e.contents, f = e.dataTypes; f[0] === "*"; )
        f.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) {
        for (o in c)
          if (c[o] && c[o].test(r)) {
            f.unshift(o);
            break;
          }
      }
      if (f[0] in n)
        a = f[0];
      else {
        for (o in n) {
          if (!f[0] || e.converters[o + " " + f[0]]) {
            a = o;
            break;
          }
          s || (s = o);
        }
        a = a || s;
      }
      if (a)
        return a !== f[0] && f.unshift(a), n[a];
    }
    function Rr(e, t, n, r) {
      var o, a, s, c, f, h = {}, y = e.dataTypes.slice();
      if (y[1])
        for (s in e.converters)
          h[s.toLowerCase()] = e.converters[s];
      for (a = y.shift(); a; )
        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), f = a, a = y.shift(), a) {
          if (a === "*")
            a = f;
          else if (f !== "*" && f !== a) {
            if (s = h[f + " " + a] || h["* " + a], !s) {
              for (o in h)
                if (c = o.split(" "), c[1] === a && (s = h[f + " " + c[0]] || h["* " + c[0]], s)) {
                  s === !0 ? s = h[o] : h[o] !== !0 && (a = c[0], y.unshift(c[1]));
                  break;
                }
            }
            if (s !== !0)
              if (s && e.throws)
                t = s(t);
              else
                try {
                  t = s(t);
                } catch (x) {
                  return {
                    state: "parsererror",
                    error: s ? x : "No conversion from " + f + " to " + a
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    i.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pt.href,
        type: "GET",
        isLocal: Hr.test(pt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": Hn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": !0,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": i.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(e, t) {
        return t ? (
          // Building a settings object
          Xt(Xt(e, i.ajaxSettings), t)
        ) : (
          // Extending ajaxSettings
          Xt(i.ajaxSettings, e)
        );
      },
      ajaxPrefilter: Pn(On),
      ajaxTransport: Pn(Ut),
      // Main method
      ajax: function(e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var n, r, o, a, s, c, f, h, y, x, g = i.ajaxSetup({}, t), v = g.context || g, A = g.context && (v.nodeType || v.jquery) ? i(v) : i.event, P = i.Deferred(), S = i.Callbacks("once memory"), K = g.statusCode || {}, J = {}, ce = {}, W = "canceled", L = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(R) {
            var V;
            if (f) {
              if (!a)
                for (a = {}; V = Or.exec(o); )
                  a[V[1].toLowerCase() + " "] = (a[V[1].toLowerCase() + " "] || []).concat(V[2]);
              V = a[R.toLowerCase() + " "];
            }
            return V == null ? null : V.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return f ? o : null;
          },
          // Caches the header
          setRequestHeader: function(R, V) {
            return f == null && (R = ce[R.toLowerCase()] = ce[R.toLowerCase()] || R, J[R] = V), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(R) {
            return f == null && (g.mimeType = R), this;
          },
          // Status-dependent callbacks
          statusCode: function(R) {
            var V;
            if (R)
              if (f)
                L.always(R[L.status]);
              else
                for (V in R)
                  K[V] = [K[V], R[V]];
            return this;
          },
          // Cancel the request
          abort: function(R) {
            var V = R || W;
            return n && n.abort(V), fe(0, V), this;
          }
        };
        if (P.promise(L), g.url = ((e || g.url || pt.href) + "").replace(Ir, pt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(De) || [""], g.crossDomain == null) {
          c = H.createElement("a");
          try {
            c.href = g.url, c.href = c.href, g.crossDomain = Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host;
          } catch {
            g.crossDomain = !0;
          }
        }
        if (g.data && g.processData && typeof g.data != "string" && (g.data = i.param(g.data, g.traditional)), In(On, g, t, L), f)
          return L;
        h = i.event && g.global, h && i.active++ === 0 && i.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Pr.test(g.type), r = g.url.replace(qr, ""), g.hasContent ? g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (g.data = g.data.replace(jr, "+")) : (x = g.url.slice(r.length), g.data && (g.processData || typeof g.data == "string") && (r += ($t.test(r) ? "&" : "?") + g.data, delete g.data), g.cache === !1 && (r = r.replace(Lr, "$1"), x = ($t.test(r) ? "&" : "?") + "_=" + qn.guid++ + x), g.url = r + x), g.ifModified && (i.lastModified[r] && L.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && L.setRequestHeader("If-None-Match", i.etag[r])), (g.data && g.hasContent && g.contentType !== !1 || t.contentType) && L.setRequestHeader("Content-Type", g.contentType), L.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + Hn + "; q=0.01" : "") : g.accepts["*"]
        );
        for (y in g.headers)
          L.setRequestHeader(y, g.headers[y]);
        if (g.beforeSend && (g.beforeSend.call(v, L, g) === !1 || f))
          return L.abort();
        if (W = "abort", S.add(g.complete), L.done(g.success), L.fail(g.error), n = In(Ut, g, t, L), !n)
          fe(-1, "No Transport");
        else {
          if (L.readyState = 1, h && A.trigger("ajaxSend", [L, g]), f)
            return L;
          g.async && g.timeout > 0 && (s = q.setTimeout(function() {
            L.abort("timeout");
          }, g.timeout));
          try {
            f = !1, n.send(J, fe);
          } catch (R) {
            if (f)
              throw R;
            fe(-1, R);
          }
        }
        function fe(R, V, gt, Nt) {
          var de, Xe, Ge, le, Re, be = V;
          f || (f = !0, s && q.clearTimeout(s), n = void 0, o = Nt || "", L.readyState = R > 0 ? 4 : 0, de = R >= 200 && R < 300 || R === 304, gt && (le = Mr(g, L, gt)), !de && i.inArray("script", g.dataTypes) > -1 && i.inArray("json", g.dataTypes) < 0 && (g.converters["text script"] = function() {
          }), le = Rr(g, le, L, de), de ? (g.ifModified && (Re = L.getResponseHeader("Last-Modified"), Re && (i.lastModified[r] = Re), Re = L.getResponseHeader("etag"), Re && (i.etag[r] = Re)), R === 204 || g.type === "HEAD" ? be = "nocontent" : R === 304 ? be = "notmodified" : (be = le.state, Xe = le.data, Ge = le.error, de = !Ge)) : (Ge = be, (R || !be) && (be = "error", R < 0 && (R = 0))), L.status = R, L.statusText = (V || be) + "", de ? P.resolveWith(v, [Xe, be, L]) : P.rejectWith(v, [L, be, Ge]), L.statusCode(K), K = void 0, h && A.trigger(
            de ? "ajaxSuccess" : "ajaxError",
            [L, g, de ? Xe : Ge]
          ), S.fireWith(v, [L, be]), h && (A.trigger("ajaxComplete", [L, g]), --i.active || i.event.trigger("ajaxStop")));
        }
        return L;
      },
      getJSON: function(e, t, n) {
        return i.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return i.get(e, void 0, t, "script");
      }
    }), i.each(["get", "post"], function(e, t) {
      i[t] = function(n, r, o, a) {
        return O(r) && (a = a || o, o = r, r = void 0), i.ajax(i.extend({
          url: n,
          type: t,
          dataType: a,
          data: r,
          success: o
        }, i.isPlainObject(n) && n));
      };
    }), i.ajaxPrefilter(function(e) {
      var t;
      for (t in e.headers)
        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
    }), i._evalUrl = function(e, t, n) {
      return i.ajax({
        url: e,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(r) {
          i.globalEval(r, t, n);
        }
      });
    }, i.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (O(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var n = this; n.firstElementChild; )
            n = n.firstElementChild;
          return n;
        }).append(this)), this;
      },
      wrapInner: function(e) {
        return O(e) ? this.each(function(t) {
          i(this).wrapInner(e.call(this, t));
        }) : this.each(function() {
          var t = i(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function(e) {
        var t = O(e);
        return this.each(function(n) {
          i(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          i(this).replaceWith(this.childNodes);
        }), this;
      }
    }), i.expr.pseudos.hidden = function(e) {
      return !i.expr.pseudos.visible(e);
    }, i.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, i.ajaxSettings.xhr = function() {
      try {
        return new q.XMLHttpRequest();
      } catch {
      }
    };
    var _r = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, ht = i.ajaxSettings.xhr();
    M.cors = !!ht && "withCredentials" in ht, M.ajax = ht = !!ht, i.ajaxTransport(function(e) {
      var t, n;
      if (M.cors || ht && !e.crossDomain)
        return {
          send: function(r, o) {
            var a, s = e.xhr();
            if (s.open(
              e.type,
              e.url,
              e.async,
              e.username,
              e.password
            ), e.xhrFields)
              for (a in e.xhrFields)
                s[a] = e.xhrFields[a];
            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
            for (a in r)
              s.setRequestHeader(a, r[a]);
            t = function(c) {
              return function() {
                t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, c === "abort" ? s.abort() : c === "error" ? typeof s.status != "number" ? o(0, "error") : o(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  s.status,
                  s.statusText
                ) : o(
                  _r[s.status] || s.status,
                  s.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (s.responseType || "text") !== "text" || typeof s.responseText != "string" ? { binary: s.response } : { text: s.responseText },
                  s.getAllResponseHeaders()
                ));
              };
            }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), s.onabort !== void 0 ? s.onabort = n : s.onreadystatechange = function() {
              s.readyState === 4 && q.setTimeout(function() {
                t && n();
              });
            }, t = t("abort");
            try {
              s.send(e.hasContent && e.data || null);
            } catch (c) {
              if (t)
                throw c;
            }
          },
          abort: function() {
            t && t();
          }
        };
    }), i.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }), i.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return i.globalEval(e), e;
        }
      }
    }), i.ajaxPrefilter("script", function(e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), i.ajaxTransport("script", function(e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, n;
        return {
          send: function(r, o) {
            t = i("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(a) {
              t.remove(), n = null, a && o(a.type === "error" ? 404 : 200, a.type);
            }), H.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
    var Mn = [], Gt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Mn.pop() || i.expando + "_" + qn.guid++;
        return this[e] = !0, e;
      }
    }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r, o, a, s = e.jsonp !== !1 && (Gt.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Gt.test(e.data) && "data");
      if (s || e.dataTypes[0] === "jsonp")
        return r = e.jsonpCallback = O(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + r) : e.jsonp !== !1 && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
          return a || i.error(r + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = q[r], q[r] = function() {
          a = arguments;
        }, n.always(function() {
          o === void 0 ? i(q).removeProp(r) : q[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Mn.push(r)), a && O(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), M.createHTMLDocument = function() {
      var e = H.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
    }(), i.parseHTML = function(e, t, n) {
      if (typeof e != "string")
        return [];
      typeof t == "boolean" && (n = t, t = !1);
      var r, o, a;
      return t || (M.createHTMLDocument ? (t = H.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = H.location.href, t.head.appendChild(r)) : t = H), o = Me.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = dn([e], t, a), a && a.length && i(a).remove(), i.merge([], o.childNodes));
    }, i.fn.load = function(e, t, n) {
      var r, o, a, s = this, c = e.indexOf(" ");
      return c > -1 && (r = Ue(e.slice(c)), e = e.slice(0, c)), O(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), s.length > 0 && i.ajax({
        url: e,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(f) {
        a = arguments, s.html(r ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          i("<div>").append(i.parseHTML(f)).find(r)
        ) : (
          // Otherwise use the full result
          f
        ));
      }).always(n && function(f, h) {
        s.each(function() {
          n.apply(this, a || [f.responseText, h, f]);
        });
      }), this;
    }, i.expr.pseudos.animated = function(e) {
      return i.grep(i.timers, function(t) {
        return e === t.elem;
      }).length;
    }, i.offset = {
      setOffset: function(e, t, n) {
        var r, o, a, s, c, f, h, y = i.css(e, "position"), x = i(e), g = {};
        y === "static" && (e.style.position = "relative"), c = x.offset(), a = i.css(e, "top"), f = i.css(e, "left"), h = (y === "absolute" || y === "fixed") && (a + f).indexOf("auto") > -1, h ? (r = x.position(), s = r.top, o = r.left) : (s = parseFloat(a) || 0, o = parseFloat(f) || 0), O(t) && (t = t.call(e, n, i.extend({}, c))), t.top != null && (g.top = t.top - c.top + s), t.left != null && (g.left = t.left - c.left + o), "using" in t ? t.using.call(e, g) : x.css(g);
      }
    }, i.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(e) {
        if (arguments.length)
          return e === void 0 ? this : this.each(function(o) {
            i.offset.setOffset(this, e, o);
          });
        var t, n, r = this[0];
        if (r)
          return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0], o = { top: 0, left: 0 };
          if (i.css(r, "position") === "fixed")
            t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static"; )
              e = e.parentNode;
            e && e !== r && e.nodeType === 1 && (o = i(e).offset(), o.top += i.css(e, "borderTopWidth", !0), o.left += i.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - o.top - i.css(r, "marginTop", !0),
            left: t.left - o.left - i.css(r, "marginLeft", !0)
          };
        }
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && i.css(e, "position") === "static"; )
            e = e.offsetParent;
          return e || ze;
        });
      }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
      var n = t === "pageYOffset";
      i.fn[e] = function(r) {
        return Le(this, function(o, a, s) {
          var c;
          if (ie(o) ? c = o : o.nodeType === 9 && (c = o.defaultView), s === void 0)
            return c ? c[t] : o[a];
          c ? c.scrollTo(
            n ? c.pageXOffset : s,
            n ? s : c.pageYOffset
          ) : o[a] = s;
        }, e, r, arguments.length);
      };
    }), i.each(["top", "left"], function(e, t) {
      i.cssHooks[t] = mn(
        M.pixelPosition,
        function(n, r) {
          if (r)
            return r = ct(n, t), Mt.test(r) ? i(n).position()[t] + "px" : r;
        }
      );
    }), i.each({ Height: "height", Width: "width" }, function(e, t) {
      i.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, r) {
        i.fn[r] = function(o, a) {
          var s = arguments.length && (n || typeof o != "boolean"), c = n || (o === !0 || a === !0 ? "margin" : "border");
          return Le(this, function(f, h, y) {
            var x;
            return ie(f) ? r.indexOf("outer") === 0 ? f["inner" + e] : f.document.documentElement["client" + e] : f.nodeType === 9 ? (x = f.documentElement, Math.max(
              f.body["scroll" + e],
              x["scroll" + e],
              f.body["offset" + e],
              x["offset" + e],
              x["client" + e]
            )) : y === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              i.css(f, h, c)
            ) : (
              // Set width or height on the element
              i.style(f, h, y, c)
            );
          }, t, s ? o : void 0, s);
        };
      });
    }), i.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(e, t) {
      i.fn[t] = function(n) {
        return this.on(t, n);
      };
    }), i.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function(e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(e, t) {
        i.fn[t] = function(n, r) {
          return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t);
        };
      }
    );
    var Br = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    i.proxy = function(e, t) {
      var n, r, o;
      if (typeof t == "string" && (n = e[t], t = e, e = n), !!O(e))
        return r = B.call(arguments, 2), o = function() {
          return e.apply(t || this, r.concat(B.call(arguments)));
        }, o.guid = e.guid = e.guid || i.guid++, o;
    }, i.holdReady = function(e) {
      e ? i.readyWait++ : i.ready(!0);
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = Y, i.isFunction = O, i.isWindow = ie, i.camelCase = je, i.type = qe, i.now = Date.now, i.isNumeric = function(e) {
      var t = i.type(e);
      return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(e - parseFloat(e));
    }, i.trim = function(e) {
      return e == null ? "" : (e + "").replace(Br, "$1");
    };
    var Fr = q.jQuery, Wr = q.$;
    return i.noConflict = function(e) {
      return q.$ === i && (q.$ = Wr), e && q.jQuery === i && (q.jQuery = Fr), i;
    }, typeof Se > "u" && (q.jQuery = q.$ = i), i;
  });
})(oi);
const ai = Ot, _ = /* @__PURE__ */ ri({
  __proto__: null,
  default: ai
}, [Ot]);
function si() {
  const ge = function() {
    let Ae = document.createElement("div");
    Ae.id = "mm", Ae.style.width = "1mm", document.querySelector("body").appendChild(Ae);
    let Be = document.getElementById("mm").getBoundingClientRect();
    return _(Ae).remove(), Be.width;
  }();
  console.log("pixel_ratio", ge);
  let q = 500;
  function Se() {
    console.log("start paging"), _("table.break-table").children("thead").addClass("need-break thead_break"), _("table.break-table tbody tr").addClass("need-break table_break");
    let B = X();
    for (; B.length; )
      B = X(xe(B));
    console.log("end paging");
  }
  function X(B) {
    return B ? B.nextAll(".break-page").not(":hidden").first() : _(".break-page").not(":hidden").first();
  }
  function xe(B, Ae = 0) {
    if (--q <= 0)
      throw new Error("Recursion error when breaking page");
    if (B.outerHeight() <= 294 * ge + 5 || ++Ae > 50)
      return B;
    const Be = B.offset().top, Ke = parseInt(B.css("paddingBottom"));
    let Fe = !1, ne = null;
    return B.find(".need-break").not(":hidden").each(function(We) {
      if (_(this).offset().top + _(this).outerHeight() - Be + parseInt(_(this).css("marginBottom")) > 294 * ge - Ke) {
        Fe = !0;
        let M = B.attr("class");
        if (B.hasClass("new-break-page") || (M += " new-break-page"), ne = _(`<div class="${M}" style="display:block"></div>`), _(this).hasClass("table_break")) {
          var Ne = _(`
            <table class="${_(this).parents("table").attr("class")}">
              <tbody></tbody>
            </table>
          `), G = _(this);
          let O = We > 1;
          if (We == 1 && (O = _(this).find(".need-break").not(":hidden").not(".thead_break").length !== 0), O) {
            Ne.prepend(G.parents("table").children("thead").clone());
            let ie = _(this).prevAll("tr"), H = [], $e = [];
            for (let i = ie.length - 1; i >= 0; i--) {
              const Ee = ie[i], oe = i === ie.length - 1, Q = _(Ee).find("td");
              if (oe || (H = H.map((re) => re - 1 > 0 ? re - 1 : 0)), oe) {
                let re = 0;
                for (let ye = 0, Y = Q.length; ye < Y; ye++)
                  re += +_(Q[ye]).attr("colspan") || 1;
                H = new Array(re).fill(0);
              }
              for (let re = 0, ye = Q.length; re < ye; re++) {
                const Y = Q[re], Me = +_(Y).attr("rowspan") || 1, Te = +_(Y).attr("colspan") || 1;
                if (Te > 0) {
                  let ke = H.findIndex((ee) => ee < 1);
                  for (let ee = 0; ee < Te; ee++)
                    H[ke + ee] = (H[ke + ee] || 0) + Me;
                  if (Me > 1) {
                    $e[ke] = [i, re, Me, Te];
                    for (let ee = 1; ee < Te; ee++)
                      $e[ke + ee] = void 0;
                  }
                }
              }
            }
            let Ie = H.map((i) => i > 1 ? "N" : 0);
            G.find("td").each(function(i) {
              const Ee = +_(this).attr("colspan") || 1, oe = Ie.findIndex((Q) => Q === 0);
              for (let Q = 0; Q < Ee; Q++)
                Ie[oe + Q] = i + 1;
            });
            const qe = {};
            for (let i = 0; i < $e.length; i++) {
              if (!$e[i])
                continue;
              const [Ee, oe, Q, re] = $e[i] || [], ye = Q - Ee - 1;
              if (ye <= 0)
                continue;
              const Y = _(ie[Ee]).find("td")[oe];
              _(Y).attr("rowspan", Q - ye);
              const Me = _(Y).clone().attr("rowspan", ye), Te = "splitTd" + i;
              qe[Te] = Me;
              let ke = Ie.findIndex((ee) => ee === "N");
              if (ke !== -1)
                for (let ee = 0; ee < re; ee++)
                  Ie[ke + ee] = Te;
            }
            const Ze = G.clone().empty();
            [...new Set(Ie)].forEach((i) => {
              typeof i == "string" ? Ze.append(qe[i]) : Ze.append(
                G.find("td").eq(i - 1).clone()
              );
            }), Ne.children("tbody").append(Ze.clone()), Ne.children("tbody").append(G.nextAll().clone()), G.nextAll().remove(), ne.append(Ne), ne.append(G.parents("table").nextAll().clone()), G.parents("table").nextAll().remove(), G.remove();
          } else {
            G.nextAll().length ? (Ne.prepend(G.parents("table").children("thead").clone()), Ne.children("tbody").append(G.nextAll().clone()), G.nextAll().remove(), ne.append(Ne), ne.append(G.parents("table").nextAll().clone()), G.parents("table").nextAll().remove()) : (ne.append(G.parents("table").nextAll().clone()), G.parents("table").nextAll().remove());
            let ie = _(
              `<div style="height:${294 * ge - 100}px;overflow:hidden;"></div>`
            );
            G.parents(".break-page").append(ie), ie.append(G.parents("table"));
          }
        } else
          _(this).hasClass("thead_break") ? (ne.append(_(this).parents("table").clone()), ne.append(_(this).parents("table").nextAll().clone()), _(this).parents("table").nextAll().remove(), _(this).parents("table").remove()) : (ne.append(_(this).clone()), ne.append(_(this).nextAll().clone()), _(this).nextAll().remove(), _(this).remove());
        return B.after(ne), !1;
      }
    }), Fe ? xe(ne, Ae) : B;
  }
  return {
    execPaging: Se
  };
}
export {
  si as default
};
