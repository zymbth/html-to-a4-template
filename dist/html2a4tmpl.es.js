const N = document, W = window, mt = N.documentElement, M = N.createElement.bind(N), yt = M("div"), Y = M("table"), Bt = M("tbody"), ct = M("tr"), { isArray: D, prototype: bt } = Array, { concat: Mt, filter: Q, indexOf: xt, map: Ct, push: Pt, slice: wt, some: Z, splice: Lt } = bt, jt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ft = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Wt = /<.+>/, zt = /^\w+$/;
function tt(t, n) {
  const e = qt(n);
  return !t || !e && !B(n) && !m(n) ? [] : !e && Ft.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && zt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class U {
  constructor(n, e) {
    if (!n)
      return;
    if (K(n))
      return n;
    let i = n;
    if (x(n)) {
      const r = e || N;
      if (i = jt.test(n) && B(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Wt.test(n) ? At(n) : K(r) ? r.find(n) : x(r) ? s(r).find(n) : tt(n, r), !i)
        return;
    } else if (P(n))
      return this.ready(n);
    (i.nodeType || i === W) && (i = [i]), this.length = i.length;
    for (let r = 0, a = this.length; r < a; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new U(n, e);
  }
}
const o = U.prototype, s = o.init;
s.fn = s.prototype = o;
o.length = 0;
o.splice = Lt;
typeof Symbol == "function" && (o[Symbol.iterator] = bt[Symbol.iterator]);
function K(t) {
  return t instanceof U;
}
function L(t) {
  return !!t && t === t.window;
}
function B(t) {
  return !!t && t.nodeType === 9;
}
function qt(t) {
  return !!t && t.nodeType === 11;
}
function m(t) {
  return !!t && t.nodeType === 1;
}
function Dt(t) {
  return !!t && t.nodeType === 3;
}
function Ut(t) {
  return typeof t == "boolean";
}
function P(t) {
  return typeof t == "function";
}
function x(t) {
  return typeof t == "string";
}
function T(t) {
  return t === void 0;
}
function F(t) {
  return t === null;
}
function Tt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function nt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
s.isWindow = L;
s.isFunction = P;
s.isArray = D;
s.isNumeric = Tt;
s.isPlainObject = nt;
function y(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (nt(t)) {
    const i = Object.keys(t);
    for (let r = 0, a = i.length; r < a; r++) {
      const c = i[r];
      if (n.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let i = 0, r = t.length; i < r; i++)
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
s.each = y;
o.each = function(t) {
  return y(this, t);
};
o.empty = function() {
  return this.each((t, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function z(...t) {
  const n = Ut(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return z(n, s, e);
  for (let r = 0; r < i; r++) {
    const a = t[r];
    for (const c in a)
      n && (D(a[c]) || nt(a[c])) ? ((!e[c] || e[c].constructor !== a[c].constructor) && (e[c] = new a[c].constructor()), z(n, e[c], a[c])) : e[c] = a[c];
  }
  return e;
}
s.extend = z;
o.extend = function(t) {
  return z(o, t);
};
const Vt = /\S+/g;
function V(t) {
  return x(t) ? t.match(Vt) || [] : [];
}
o.toggleClass = function(t, n) {
  const e = V(t), i = !T(n);
  return this.each((r, a) => {
    m(a) && y(e, (c, u) => {
      i ? n ? a.classList.add(u) : a.classList.remove(u) : a.classList.toggle(u);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const n = V(t);
  return this.each((e, i) => {
    m(i) && y(n, (r, a) => {
      i.removeAttribute(a);
    });
  });
};
function Jt(t, n) {
  if (t) {
    if (x(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !m(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return F(e) ? void 0 : e;
      }
      return T(n) ? this : F(n) ? this.removeAttr(t) : this.each((e, i) => {
        m(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
o.attr = Jt;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && Z.call(this, (n) => m(n) && n.classList.contains(t));
};
o.get = function(t) {
  return T(t) ? wt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
o.eq = function(t) {
  return s(this.get(t));
};
o.first = function() {
  return this.eq(0);
};
o.last = function() {
  return this.eq(-1);
};
function Yt(t) {
  return T(t) ? this.get().map((n) => m(n) || Dt(n) ? n.textContent : "").join("") : this.each((n, e) => {
    m(e) && (e.textContent = t);
  });
}
o.text = Yt;
function R(t, n, e) {
  if (!m(t))
    return;
  const i = W.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function A(t, n) {
  return parseInt(R(t, n), 10) || 0;
}
function ut(t, n) {
  return A(t, `border${n ? "Left" : "Top"}Width`) + A(t, `padding${n ? "Left" : "Top"}`) + A(t, `padding${n ? "Right" : "Bottom"}`) + A(t, `border${n ? "Right" : "Bottom"}Width`);
}
const G = {};
function Gt(t) {
  if (G[t])
    return G[t];
  const n = M(t);
  N.body.insertBefore(n, null);
  const e = R(n, "display");
  return N.body.removeChild(n), G[t] = e !== "none" ? e : "block";
}
function lt(t) {
  return R(t, "display") === "none";
}
function $t(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function J(t) {
  return x(t) ? (n, e) => $t(e, t) : P(t) ? t : K(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
o.filter = function(t) {
  const n = J(t);
  return s(Q.call(this, (e, i) => n.call(e, i, e)));
};
function I(t, n) {
  return n ? t.filter(n) : t;
}
o.detach = function(t) {
  return I(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Xt = /^\s*<(\w+)[^>]*>/, Kt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ft = {
  "*": yt,
  tr: Bt,
  td: ct,
  th: ct,
  thead: Y,
  tbody: Y,
  tfoot: Y
};
function At(t) {
  if (!x(t))
    return [];
  if (Kt.test(t))
    return [M(RegExp.$1)];
  const n = Xt.test(t) && RegExp.$1, e = ft[n] || ft["*"];
  return e.innerHTML = t, s(e.childNodes).detach().get();
}
s.parseHTML = At;
o.has = function(t) {
  const n = x(t) ? (e, i) => tt(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
o.not = function(t) {
  const n = J(t);
  return this.filter((e, i) => (!x(t) || m(i)) && !n.call(i, e, i));
};
function k(t, n, e, i) {
  const r = [], a = P(n), c = i && J(i);
  for (let u = 0, d = t.length; u < d; u++)
    if (a) {
      const h = n(t[u]);
      h.length && Pt.apply(r, h);
    } else {
      let h = t[u][n];
      for (; h != null && !(i && c(-1, h)); )
        r.push(h), h = e ? h[n] : null;
    }
  return r;
}
function Et(t) {
  return t.multiple && t.options ? k(Q.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function Qt(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Ot.test(e.type)) {
      const r = D(t) ? Ct.call(t, String) : F(t) ? [] : [String(t)];
      i ? y(e.options, (a, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = T(t) || F(t) ? "" : t;
  }) : this[0] && Et(this[0]);
}
o.val = Qt;
o.is = function(t) {
  const n = J(t);
  return Z.call(this, (e, i) => n.call(e, i, e));
};
s.guid = 1;
function E(t) {
  return t.length > 1 ? Q.call(t, (n, e, i) => xt.call(i, n) === e) : t;
}
s.unique = E;
o.add = function(t, n) {
  return s(E(this.get().concat(s(t, n).get())));
};
o.children = function(t) {
  return I(s(E(k(this, (n) => n.children))), t);
};
o.parent = function(t) {
  return I(s(E(k(this, "parentNode"))), t);
};
o.index = function(t) {
  const n = t ? s(t)[0] : this[0], e = t ? this : s(n).parent().children();
  return xt.call(e, n);
};
o.closest = function(t) {
  const n = this.filter(t);
  if (n.length)
    return n;
  const e = this.parent();
  return e.length ? e.closest(t) : n;
};
o.siblings = function(t) {
  return I(s(E(k(this, (n) => s(n).parent().children().not(n)))), t);
};
o.find = function(t) {
  return s(E(k(this, (n) => tt(t, n))));
};
const Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, tn = /^$|^module$|\/(java|ecma)script/i, nn = ["type", "src", "nonce", "noModule"];
function en(t, n) {
  const e = s(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (tn.test(r.type) && mt.contains(r)) {
      const a = M("script");
      a.text = r.textContent.replace(Zt, ""), y(nn, (c, u) => {
        r[u] && (a[u] = r[u]);
      }), n.head.insertBefore(a, null), n.head.removeChild(a);
    }
  });
}
function rn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && en(n, t.ownerDocument);
}
function H(t, n, e, i, r, a, c, u) {
  return y(t, (d, h) => {
    y(s(h), (S, _) => {
      y(s(n), (f, p) => {
        const w = e ? _ : p, l = e ? p : _, g = e ? S : f;
        rn(w, g ? l.cloneNode(!0) : l, i, r, !g);
      }, u);
    }, c);
  }, a), n;
}
o.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function sn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (T(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    m(i) && (n ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = sn;
o.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = s(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return H(arguments, this, !1, !0);
};
o.wrapAll = function(t) {
  let n = s(t), e = n[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(n), this.appendTo(e);
};
o.wrap = function(t) {
  return this.each((n, e) => {
    const i = s(t)[0];
    s(e).wrapAll(n ? i.cloneNode(!0) : i);
  });
};
o.insertAfter = function(t) {
  return H(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return H(arguments, this, !0, !0);
};
o.prepend = function() {
  return H(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return H(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return s(E(k(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, n, e) {
  return I(s(E(k(this, "nextElementSibling", n, e))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
o.parents = function(t, n) {
  return I(s(E(k(this, "parentElement", !0, n))), t);
};
o.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
o.prev = function(t, n, e) {
  return I(s(E(k(this, "previousElementSibling", n, e))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
o.map = function(t) {
  return s(Mt.apply([], Ct.call(this, (n, e) => t.call(n, e, n))));
};
o.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && R(e, "position") === "static"; )
      e = e.offsetParent;
    return e || mt;
  });
};
o.slice = function(t, n) {
  return s(wt.call(this, t, n));
};
const on = /-([a-z])/g;
function et(t) {
  return t.replace(on, (n, e) => e.toUpperCase());
}
o.ready = function(t) {
  const n = () => setTimeout(t, 0, s);
  return N.readyState !== "loading" ? n() : N.addEventListener("DOMContentLoaded", n), this;
};
o.unwrap = function() {
  return this.parent().each((t, n) => {
    if (n.tagName === "BODY")
      return;
    const e = s(n);
    e.replaceWith(e.children());
  }), this;
};
o.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const n = t.getBoundingClientRect();
  return {
    top: n.top + W.pageYOffset,
    left: n.left + W.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = R(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && R(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && m(r)) {
      const a = s(r).offset();
      e.top -= a.top + A(r, "borderTopWidth"), e.left -= a.left + A(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - A(t, "marginTop"),
    left: e.left - A(t, "marginLeft")
  };
};
const St = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
o.prop = function(t, n) {
  if (t) {
    if (x(t))
      return t = St[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[St[t] || t];
  });
};
const an = /^--/;
function it(t) {
  return an.test(t);
}
const X = {}, { style: cn } = yt, un = ["webkit", "moz", "ms"];
function ln(t, n = it(t)) {
  if (n)
    return t;
  if (!X[t]) {
    const e = et(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${un.join(`${i} `)}${i}`.split(" ");
    y(r, (a, c) => {
      if (c in cn)
        return X[t] = c, !1;
    });
  }
  return X[t];
}
const fn = {
  animationIterationCount: !0,
  columnCount: !0,
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
  zIndex: !0
};
function _t(t, n, e = it(t)) {
  return !e && !fn[t] && Tt(n) ? `${n}px` : n;
}
function dn(t, n) {
  if (x(t)) {
    const e = it(t);
    return t = ln(t, e), arguments.length < 2 ? this[0] && R(this[0], t, e) : t ? (n = _t(t, n, e), this.each((i, r) => {
      m(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
o.css = dn;
function Nt(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const hn = /^\s+|\s+$/;
function dt(t, n) {
  const e = t.dataset[n] || t.dataset[et(n)];
  return hn.test(e) ? e : Nt(JSON.parse, e);
}
function pn(t, n, e) {
  e = Nt(JSON.stringify, e), t.dataset[et(n)] = e;
}
function gn(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = dt(this[0], i);
    return e;
  }
  if (x(t))
    return arguments.length < 2 ? this[0] && dt(this[0], t) : T(n) ? this : this.each((e, i) => {
      pn(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
o.data = gn;
function Rt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
y([!0, !1], (t, n) => {
  y(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    o[r] = function(a) {
      if (this[0])
        return L(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : B(this[0]) ? Rt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (a && n ? A(this[0], `margin${e ? "Top" : "Left"}`) + A(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
y(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  o[e] = function(i) {
    if (!this[0])
      return T(i) ? void 0 : this;
    if (!arguments.length)
      return L(this[0]) ? this[0].document.documentElement[`client${n}`] : B(this[0]) ? Rt(this[0], n) : this[0].getBoundingClientRect()[e] - ut(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((a, c) => {
      if (!m(c))
        return;
      const u = R(c, "boxSizing");
      c.style[e] = _t(e, r + (u === "border-box" ? ut(c, !t) : 0));
    });
  };
});
const ht = "___cd";
o.toggle = function(t) {
  return this.each((n, e) => {
    if (!m(e))
      return;
    const i = lt(e);
    (T(t) ? i : t) ? (e.style.display = e[ht] || "", lt(e) && (e.style.display = Gt(e.tagName))) : i || (e[ht] = R(e, "display"), e.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const pt = "___ce", rt = ".", st = { focus: "focusin", blur: "focusout" }, kt = { mouseenter: "mouseover", mouseleave: "mouseout" }, mn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ot(t) {
  return kt[t] || st[t] || t;
}
function at(t) {
  const n = t.split(rt);
  return [n[0], n.slice(1).sort()];
}
o.trigger = function(t, n) {
  if (x(t)) {
    const [i, r] = at(t), a = ot(i);
    if (!a)
      return this;
    const c = mn.test(a) ? "MouseEvents" : "HTMLEvents";
    t = N.createEvent(c), t.initEvent(a, !0, !0), t.namespace = r.join(rt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in st;
  return this.each((i, r) => {
    e && P(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function It(t) {
  return t[pt] = t[pt] || {};
}
function yn(t, n, e, i, r) {
  const a = It(t);
  a[n] = a[n] || [], a[n].push([e, i, r]), t.addEventListener(n, r);
}
function Ht(t, n) {
  return !n || !Z.call(n, (e) => t.indexOf(e) < 0);
}
function q(t, n, e, i, r) {
  const a = It(t);
  if (n)
    a[n] && (a[n] = a[n].filter(([c, u, d]) => {
      if (r && d.guid !== r.guid || !Ht(c, e) || i && i !== u)
        return !0;
      t.removeEventListener(n, d);
    }));
  else
    for (n in a)
      q(t, n, e, i, r);
}
o.off = function(t, n, e) {
  if (T(t))
    this.each((i, r) => {
      !m(r) && !B(r) && !L(r) || q(r);
    });
  else if (x(t))
    P(n) && (e = n, n = ""), y(V(t), (i, r) => {
      const [a, c] = at(r), u = ot(a);
      this.each((d, h) => {
        !m(h) && !B(h) && !L(h) || q(h, u, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return I(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return s(t).replaceWith(this), this;
};
function bn(t, n, e, i, r) {
  if (!x(t)) {
    for (const a in t)
      this.on(a, n, e, t[a], r);
    return this;
  }
  return x(n) || (T(n) || F(n) ? n = "" : T(e) ? (e = n, n = "") : (i = e, e = n, n = "")), P(i) || (i = e, e = void 0), i ? (y(V(t), (a, c) => {
    const [u, d] = at(c), h = ot(u), S = u in kt, _ = u in st;
    h && this.each((f, p) => {
      if (!m(p) && !B(p) && !L(p))
        return;
      const w = function(l) {
        if (l.target[`___i${l.type}`])
          return l.stopImmediatePropagation();
        if (l.namespace && !Ht(d, l.namespace.split(rt)) || !n && (_ && (l.target !== p || l.___ot === h) || S && l.relatedTarget && p.contains(l.relatedTarget)))
          return;
        let g = p;
        if (n) {
          let C = l.target;
          for (; !$t(C, n); )
            if (C === p || (C = C.parentNode, !C))
              return;
          g = C;
        }
        Object.defineProperty(l, "currentTarget", {
          configurable: !0,
          get() {
            return g;
          }
        }), Object.defineProperty(l, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(l, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const $ = i.call(g, l, l.___td);
        r && q(p, h, d, n, w), $ === !1 && (l.preventDefault(), l.stopPropagation());
      };
      w.guid = i.guid = i.guid || s.guid++, yn(p, h, d, n, w);
    });
  }), this) : this;
}
o.on = bn;
function xn(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
o.one = xn;
const Cn = /\r?\n/g;
function wn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Cn, `\r
`))}`;
}
const Tn = /file|reset|submit|button|image/i, Ot = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    y(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Tn.test(r.type) || Ot.test(r.type) && !r.checked)
        return;
      const a = Et(r);
      if (!T(a)) {
        const c = D(a) ? a : [a];
        y(c, (u, d) => {
          t += wn(r.name, d);
        });
      }
    });
  }), t.slice(1);
};
function $n(t) {
  var n = window.getComputedStyle(t);
  return n.display === "none" || parseInt(n.height) === 0;
}
function An() {
  return this.filter(function(t, n) {
    return !$n(n);
  });
}
function En(t) {
  return t instanceof Element ? "element" : Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/, "$1").toLowerCase();
}
const Sn = ".a4-container{font-size:9pt;line-height:18pt;letter-spacing:1px;width:210mm;margin:0 auto;box-sizing:border-box;background:#fff!important;color:#000!important}.a4-container table{line-height:1.5}.a4-page{box-shadow:0 0 8px 4px #ccc;padding:50px;margin-top:20px;page-break-after:always;position:relative;min-height:294mm;box-sizing:border-box}.a4-page:first-child{margin-top:30px}.a4-page:last-child{page-break-after:unset;margin-bottom:20px}table.a4-table{border-collapse:collapse;border:1px solid black}table.a4-table td,table.a4-table th{border:1px solid black}@media print{.a4-container{width:100%!important}.a4-container .a4-page{box-shadow:none;margin:0;max-height:294mm}.a4-page:first-child{margin-top:0}img{max-height:902px}@page{size:a4;padding:0;margin:0}}";
function vn(t = "a4-container", n = "auto", e = 500, i = 500) {
  e = isNaN(parseInt(e)) ? 500 : parseInt(e), i = isNaN(parseInt(i)) ? 500 : parseInt(i), e < 10 && (e = 10), i < 10 && (i = 10), t || (t = ".a4-container"), ["manual", "auto"].includes(n) || (n = "auto"), _n(Sn);
  const r = Nn();
  s("body").__proto__.notHidden = An;
  function a() {
    Rn(t, n), kn(), console.log("start paging:", { mode: n, root: t || ".a4-container" });
    let u = 0, d = gt();
    for (; d.length; ) {
      if (++u > i) {
        console.error(
          `Pagination operation exceeds limit (${i} pages). If it's normal, you can change this limit in the initialization method.`
        );
        break;
      }
      d = gt(c(d));
    }
    console.log("end paging");
  }
  function c(u, d = 0) {
    if (u.outerHeight() <= 294 * r + 5)
      return u;
    if (++d > e)
      return console.error(
        `Pagination operation exceeds recursion limit (${e} pages), you can change this limit in the initialization method.`
      ), u;
    const h = u.offset().top, S = parseInt(u.css("paddingBottom"));
    let _ = !1, f = null;
    return u.find(".a4-unit").notHidden().each(function(p, w) {
      if (s(this).offset().top + s(this).outerHeight() - h + parseInt(s(this).css("marginBottom")) <= 294 * r - S)
        return !0;
      _ = !0;
      let l = u.attr("class");
      return u.hasClass("new-a4-page") || (l += " new-a4-page"), f = s(`<div class="${l}" style="display:block"></div>`), p === 0 ? (console.warn(
        "There is an element that exceeds the page height, and the page height is fixed to avoid pagnation bug."
      ), console.log(this), u.css("overflow", "hidden"), u.css("height", `${294 * r}px`), f.append(s(this).nextAll().clone()), s(this).nextAll().remove(), u.after(f), !1) : (s(this).hasClass("table-break") ? On.call(this, f, p) : s(this).hasClass("thead-break") ? Hn.call(this, f) : s(this).parent().hasClass("a4-unit-wrap") ? In.call(this, f) : vt.call(this, f), u.after(f), !1);
    }), _ ? c(f, d) : u;
  }
  return {
    execPaging: a
  };
}
function _n(t) {
  if (document.getElementById("print-style"))
    return;
  const n = document.createElement("style");
  n.id = "print-style", n.setAttribute("type", "text/css"), n.innerHTML = t, document.head.append(n);
}
function Nn() {
  const t = document.createElement("div");
  t.id = "mm", t.style.width = "1mm", document.querySelector("body").appendChild(t);
  let n = document.getElementById("mm").getBoundingClientRect();
  return s("#mm").remove(), n.width;
}
function Rn(t, n) {
  if (n === "manual")
    return;
  let e;
  const i = En(t);
  ["string", "element", "htmlcollection"].includes(i) ? e = s(t) : console.warn("Unexpected root type:", i), e != null && e.length && (e.addClass("a4-container"), e.children().notHidden().each(function() {
    s(this).addClass("a4-page"), s(this).children().notHidden().each(function(r, a) {
      if (a.tagName.toLowerCase() === "table")
        s(this).addClass("a4-table");
      else {
        if (["a4-unit", "a4-unit-wrap"].some((c) => a.classList.contains(c)))
          return;
        s(this).addClass("a4-unit");
      }
    });
  }));
}
function kn() {
  s("table.a4-table").children("thead").addClass("a4-unit thead-break"), s("table.a4-table tbody tr").addClass("a4-unit table-break"), s(".a4-unit-wrap").children().notHidden().addClass("a4-unit");
}
function gt(t) {
  return t ? t.nextAll(".a4-page").notHidden().first() : s(".a4-page").notHidden().first();
}
function vt(t) {
  !t || !this || (t.append(s(this).clone()), t.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
}
function In(t) {
  if (!t || !this)
    return;
  if (s(this).prev().length === 0)
    vt.call(s(this).parent(), t);
  else {
    const e = s(this).parent().clone().empty();
    e.append(s(this).clone()), e.append(s(this).nextAll().clone()), t.append(e), t.append(s(this).parent().nextAll().clone()), s(this).parent().nextAll().remove(), s(this).nextAll().remove(), s(this).remove();
  }
}
function Hn(t) {
  !t || !this || (t.append(s(this).parents("table").clone()), t.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove());
}
function On(t, n) {
  var e = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
  e.append("<tbody></tbody>");
  var i = s(this);
  let r = n > 1;
  if (n == 1 && (r = s(this).find(".a4-unit").notHidden().not(".thead-break").length !== 0), r) {
    e.prepend(i.parents("table").children("thead").clone());
    let a = s(this).prevAll("tr"), c = [], u = [];
    for (let f = a.length - 1; f >= 0; f--) {
      const p = a[f], w = f === a.length - 1, l = s(p).find("td");
      if (w || (c = c.map((g) => g - 1 > 0 ? g - 1 : 0)), w) {
        let g = 0;
        for (let $ = 0, C = l.length; $ < C; $++)
          g += +s(l[$]).attr("colspan") || 1;
        c = new Array(g).fill(0);
      }
      for (let g = 0, $ = l.length; g < $; g++) {
        const C = l[g], j = +s(C).attr("rowspan") || 1, O = +s(C).attr("colspan") || 1;
        if (O > 0) {
          let v = c.findIndex((b) => b < 1);
          for (let b = 0; b < O; b++)
            c[v + b] = (c[v + b] || 0) + j;
          if (j > 1) {
            u[v] = [f, g, j, O];
            for (let b = 1; b < O; b++)
              u[v + b] = void 0;
          }
        }
      }
    }
    let d = c.map((f) => f > 1 ? "N" : 0);
    i.find("td").each(function(f) {
      const p = +s(this).attr("colspan") || 1, w = d.findIndex((l) => l === 0);
      for (let l = 0; l < p; l++)
        d[w + l] = f + 1;
    });
    const h = {};
    for (let f = 0; f < u.length; f++) {
      if (!u[f])
        continue;
      const [p, w, l, g] = u[f] || [], $ = l - p - 1;
      if ($ <= 0)
        continue;
      const C = s(a[p]).find("td")[w];
      s(C).attr("rowspan", l - $);
      const j = s(C).clone().attr("rowspan", $), O = "splitTd" + f;
      h[O] = j;
      let v = d.findIndex((b) => b === "N");
      if (v !== -1)
        for (let b = 0; b < g; b++)
          d[v + b] = O;
    }
    const S = i.clone().empty();
    [...new Set(d)].forEach((f) => {
      typeof f == "string" ? S.append(h[f]) : S.append(
        i.find("td").eq(f - 1).clone()
      );
    });
    const _ = i.prev("tr").length === 0;
    e.children("tbody").append(S.clone()), e.children("tbody").append(i.nextAll().clone()), t.append(e), t.append(i.parents("table").nextAll().clone()), i.nextAll().remove(), i.parents("table").nextAll().remove(), _ ? i.parents("table").remove() : i.remove();
  } else {
    i.nextAll().length ? (e.prepend(i.parents("table").children("thead").clone()), e.children("tbody").append(i.nextAll().clone()), i.nextAll().remove(), t.append(e), t.append(i.parents("table").nextAll().clone()), i.parents("table").nextAll().remove()) : (t.append(i.parents("table").nextAll().clone()), i.parents("table").nextAll().remove());
    let a = s(`<div style="height:${294 * pixelRatio - 100}px;overflow:hidden;"></div>`);
    i.parents(".a4-page").append(a), a.append(i.parents("table"));
  }
}
export {
  vn as default
};
