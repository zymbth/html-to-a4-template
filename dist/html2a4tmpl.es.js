const N = document, G = window, St = N.documentElement, j = N.createElement.bind(N), kt = j("div"), rt = j("table"), Ut = j("tbody"), wt = j("tr"), { isArray: Q, prototype: Rt } = Array, { concat: Vt, filter: ct, indexOf: _t, map: Nt, push: zt, slice: vt, some: ft, splice: Jt } = Rt, Yt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xt = /<.+>/, Kt = /^\w+$/;
function at(t, n) {
  const e = Qt(n);
  return !t || !e && !D(n) && !g(n) ? [] : !e && Gt.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && Kt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class Z {
  constructor(n, e) {
    if (!n)
      return;
    if (ut(n))
      return n;
    let i = n;
    if (w(n)) {
      const r = e || N;
      if (i = Yt.test(n) && D(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Xt.test(n) ? Ht(n) : ut(r) ? r.find(n) : w(r) ? u(r).find(n) : at(n, r), !i)
        return;
    } else if (F(n))
      return this.ready(n);
    (i.nodeType || i === G) && (i = [i]), this.length = i.length;
    for (let r = 0, o = this.length; r < o; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new Z(n, e);
  }
}
const s = Z.prototype, u = s.init;
u.fn = u.prototype = s;
s.length = 0;
s.splice = Jt;
typeof Symbol == "function" && (s[Symbol.iterator] = Rt[Symbol.iterator]);
function ut(t) {
  return t instanceof Z;
}
function U(t) {
  return !!t && t === t.window;
}
function D(t) {
  return !!t && t.nodeType === 9;
}
function Qt(t) {
  return !!t && t.nodeType === 11;
}
function g(t) {
  return !!t && t.nodeType === 1;
}
function Zt(t) {
  return !!t && t.nodeType === 3;
}
function tn(t) {
  return typeof t == "boolean";
}
function F(t) {
  return typeof t == "function";
}
function w(t) {
  return typeof t == "string";
}
function $(t) {
  return t === void 0;
}
function Y(t) {
  return t === null;
}
function Lt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function lt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
u.isWindow = U;
u.isFunction = F;
u.isArray = Q;
u.isNumeric = Lt;
u.isPlainObject = lt;
function m(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (lt(t)) {
    const i = Object.keys(t);
    for (let r = 0, o = i.length; r < o; r++) {
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
u.each = m;
s.each = function(t) {
  return m(this, t);
};
s.empty = function() {
  return this.each((t, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function X(...t) {
  const n = tn(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return X(n, u, e);
  for (let r = 0; r < i; r++) {
    const o = t[r];
    for (const c in o)
      n && (Q(o[c]) || lt(o[c])) ? ((!e[c] || e[c].constructor !== o[c].constructor) && (e[c] = new o[c].constructor()), X(n, e[c], o[c])) : e[c] = o[c];
  }
  return e;
}
u.extend = X;
s.extend = function(t) {
  return X(s, t);
};
const nn = /\S+/g;
function tt(t) {
  return w(t) ? t.match(nn) || [] : [];
}
s.toggleClass = function(t, n) {
  const e = tt(t), i = !$(n);
  return this.each((r, o) => {
    g(o) && m(e, (c, f) => {
      i ? n ? o.classList.add(f) : o.classList.remove(f) : o.classList.toggle(f);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const n = tt(t);
  return this.each((e, i) => {
    g(i) && m(n, (r, o) => {
      i.removeAttribute(o);
    });
  });
};
function en(t, n) {
  if (t) {
    if (w(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !g(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return Y(e) ? void 0 : e;
      }
      return $(n) ? this : Y(n) ? this.removeAttr(t) : this.each((e, i) => {
        g(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
s.attr = en;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && ft.call(this, (n) => g(n) && n.classList.contains(t));
};
s.get = function(t) {
  return $(t) ? vt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
s.eq = function(t) {
  return u(this.get(t));
};
s.first = function() {
  return this.eq(0);
};
s.last = function() {
  return this.eq(-1);
};
function rn(t) {
  return $(t) ? this.get().map((n) => g(n) || Zt(n) ? n.textContent : "").join("") : this.each((n, e) => {
    g(e) && (e.textContent = t);
  });
}
s.text = rn;
function v(t, n, e) {
  if (!g(t))
    return;
  const i = G.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function A(t, n) {
  return parseInt(v(t, n), 10) || 0;
}
function xt(t, n) {
  return A(t, `border${n ? "Left" : "Top"}Width`) + A(t, `padding${n ? "Left" : "Top"}`) + A(t, `padding${n ? "Right" : "Bottom"}`) + A(t, `border${n ? "Right" : "Bottom"}Width`);
}
const st = {};
function sn(t) {
  if (st[t])
    return st[t];
  const n = j(t);
  N.body.insertBefore(n, null);
  const e = v(n, "display");
  return N.body.removeChild(n), st[t] = e !== "none" ? e : "block";
}
function Ct(t) {
  return v(t, "display") === "none";
}
function Ot(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function nt(t) {
  return w(t) ? (n, e) => Ot(e, t) : F(t) ? t : ut(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
s.filter = function(t) {
  const n = nt(t);
  return u(ct.call(this, (e, i) => n.call(e, i, e)));
};
function O(t, n) {
  return n ? t.filter(n) : t;
}
s.detach = function(t) {
  return O(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const on = /^\s*<(\w+)[^>]*>/, un = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Tt = {
  "*": kt,
  tr: Ut,
  td: wt,
  th: wt,
  thead: rt,
  tbody: rt,
  tfoot: rt
};
function Ht(t) {
  if (!w(t))
    return [];
  if (un.test(t))
    return [j(RegExp.$1)];
  const n = on.test(t) && RegExp.$1, e = Tt[n] || Tt["*"];
  return e.innerHTML = t, u(e.childNodes).detach().get();
}
u.parseHTML = Ht;
s.has = function(t) {
  const n = w(t) ? (e, i) => at(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
s.not = function(t) {
  const n = nt(t);
  return this.filter((e, i) => (!w(t) || g(i)) && !n.call(i, e, i));
};
function L(t, n, e, i) {
  const r = [], o = F(n), c = i && nt(i);
  for (let f = 0, x = t.length; f < x; f++)
    if (o) {
      const l = n(t[f]);
      l.length && zt.apply(r, l);
    } else {
      let l = t[f][n];
      for (; l != null && !(i && c(-1, l)); )
        r.push(l), l = e ? l[n] : null;
    }
  return r;
}
function It(t) {
  return t.multiple && t.options ? L(ct.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function cn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || qt.test(e.type)) {
      const r = Q(t) ? Nt.call(t, String) : Y(t) ? [] : [String(t)];
      i ? m(e.options, (o, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = $(t) || Y(t) ? "" : t;
  }) : this[0] && It(this[0]);
}
s.val = cn;
s.is = function(t) {
  const n = nt(t);
  return ft.call(this, (e, i) => n.call(e, i, e));
};
u.guid = 1;
function S(t) {
  return t.length > 1 ? ct.call(t, (n, e, i) => _t.call(i, n) === e) : t;
}
u.unique = S;
s.add = function(t, n) {
  return u(S(this.get().concat(u(t, n).get())));
};
s.children = function(t) {
  return O(u(S(L(this, (n) => n.children))), t);
};
s.parent = function(t) {
  return O(u(S(L(this, "parentNode"))), t);
};
s.index = function(t) {
  const n = t ? u(t)[0] : this[0], e = t ? this : u(n).parent().children();
  return _t.call(e, n);
};
s.closest = function(t) {
  const n = this.filter(t);
  if (n.length)
    return n;
  const e = this.parent();
  return e.length ? e.closest(t) : n;
};
s.siblings = function(t) {
  return O(u(S(L(this, (n) => u(n).parent().children().not(n)))), t);
};
s.find = function(t) {
  return u(S(L(this, (n) => at(t, n))));
};
const fn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = /^$|^module$|\/(java|ecma)script/i, ln = ["type", "src", "nonce", "noModule"];
function hn(t, n) {
  const e = u(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (an.test(r.type) && St.contains(r)) {
      const o = j("script");
      o.text = r.textContent.replace(fn, ""), m(ln, (c, f) => {
        r[f] && (o[f] = r[f]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function dn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && hn(n, t.ownerDocument);
}
function H(t, n, e, i, r, o, c, f) {
  return m(t, (x, l) => {
    m(u(l), (y, I) => {
      m(u(n), (et, d) => {
        const a = e ? I : d, h = e ? d : I, k = e ? y : et;
        dn(a, k ? h.cloneNode(!0) : h, i, r, !k);
      }, f);
    }, c);
  }, o), n;
}
s.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function pn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if ($(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    g(i) && (n ? u(i).empty().append(t) : i.innerHTML = t);
  });
}
s.html = pn;
s.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = u(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
s.before = function() {
  return H(arguments, this, !1, !0);
};
s.wrapAll = function(t) {
  let n = u(t), e = n[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(n), this.appendTo(e);
};
s.wrap = function(t) {
  return this.each((n, e) => {
    const i = u(t)[0];
    u(e).wrapAll(n ? i.cloneNode(!0) : i);
  });
};
s.insertAfter = function(t) {
  return H(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return H(arguments, this, !0, !0);
};
s.prepend = function() {
  return H(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return H(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return u(S(L(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, n, e) {
  return O(u(S(L(this, "nextElementSibling", n, e))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
s.parents = function(t, n) {
  return O(u(S(L(this, "parentElement", !0, n))), t);
};
s.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
s.prev = function(t, n, e) {
  return O(u(S(L(this, "previousElementSibling", n, e))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
s.map = function(t) {
  return u(Vt.apply([], Nt.call(this, (n, e) => t.call(n, e, n))));
};
s.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && v(e, "position") === "static"; )
      e = e.offsetParent;
    return e || St;
  });
};
s.slice = function(t, n) {
  return u(vt.call(this, t, n));
};
const gn = /-([a-z])/g;
function ht(t) {
  return t.replace(gn, (n, e) => e.toUpperCase());
}
s.ready = function(t) {
  const n = () => setTimeout(t, 0, u);
  return N.readyState !== "loading" ? n() : N.addEventListener("DOMContentLoaded", n), this;
};
s.unwrap = function() {
  return this.parent().each((t, n) => {
    if (n.tagName === "BODY")
      return;
    const e = u(n);
    e.replaceWith(e.children());
  }), this;
};
s.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const n = t.getBoundingClientRect();
  return {
    top: n.top + G.pageYOffset,
    left: n.left + G.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = v(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && v(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && g(r)) {
      const o = u(r).offset();
      e.top -= o.top + A(r, "borderTopWidth"), e.left -= o.left + A(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - A(t, "marginTop"),
    left: e.left - A(t, "marginLeft")
  };
};
const Bt = {
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
s.prop = function(t, n) {
  if (t) {
    if (w(t))
      return t = Bt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Bt[t] || t];
  });
};
const mn = /^--/;
function dt(t) {
  return mn.test(t);
}
const ot = {}, { style: yn } = kt, bn = ["webkit", "moz", "ms"];
function wn(t, n = dt(t)) {
  if (n)
    return t;
  if (!ot[t]) {
    const e = ht(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${bn.join(`${i} `)}${i}`.split(" ");
    m(r, (o, c) => {
      if (c in yn)
        return ot[t] = c, !1;
    });
  }
  return ot[t];
}
const xn = {
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
function Mt(t, n, e = dt(t)) {
  return !e && !xn[t] && Lt(n) ? `${n}px` : n;
}
function Cn(t, n) {
  if (w(t)) {
    const e = dt(t);
    return t = wn(t, e), arguments.length < 2 ? this[0] && v(this[0], t, e) : t ? (n = Mt(t, n, e), this.each((i, r) => {
      g(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
s.css = Cn;
function Pt(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const Tn = /^\s+|\s+$/;
function $t(t, n) {
  const e = t.dataset[n] || t.dataset[ht(n)];
  return Tn.test(e) ? e : Pt(JSON.parse, e);
}
function $n(t, n, e) {
  e = Pt(JSON.stringify, e), t.dataset[ht(n)] = e;
}
function En(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = $t(this[0], i);
    return e;
  }
  if (w(t))
    return arguments.length < 2 ? this[0] && $t(this[0], t) : $(n) ? this : this.each((e, i) => {
      $n(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
s.data = En;
function Dt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
m([!0, !1], (t, n) => {
  m(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    s[r] = function(o) {
      if (this[0])
        return U(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : D(this[0]) ? Dt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (o && n ? A(this[0], `margin${e ? "Top" : "Left"}`) + A(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
m(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  s[e] = function(i) {
    if (!this[0])
      return $(i) ? void 0 : this;
    if (!arguments.length)
      return U(this[0]) ? this[0].document.documentElement[`client${n}`] : D(this[0]) ? Dt(this[0], n) : this[0].getBoundingClientRect()[e] - xt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((o, c) => {
      if (!g(c))
        return;
      const f = v(c, "boxSizing");
      c.style[e] = Mt(e, r + (f === "border-box" ? xt(c, !t) : 0));
    });
  };
});
const Et = "___cd";
s.toggle = function(t) {
  return this.each((n, e) => {
    if (!g(e))
      return;
    const i = Ct(e);
    ($(t) ? i : t) ? (e.style.display = e[Et] || "", Ct(e) && (e.style.display = sn(e.tagName))) : i || (e[Et] = v(e, "display"), e.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const At = "___ce", pt = ".", gt = { focus: "focusin", blur: "focusout" }, jt = { mouseenter: "mouseover", mouseleave: "mouseout" }, An = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function mt(t) {
  return jt[t] || gt[t] || t;
}
function yt(t) {
  const n = t.split(pt);
  return [n[0], n.slice(1).sort()];
}
s.trigger = function(t, n) {
  if (w(t)) {
    const [i, r] = yt(t), o = mt(i);
    if (!o)
      return this;
    const c = An.test(o) ? "MouseEvents" : "HTMLEvents";
    t = N.createEvent(c), t.initEvent(o, !0, !0), t.namespace = r.join(pt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in gt;
  return this.each((i, r) => {
    e && F(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Ft(t) {
  return t[At] = t[At] || {};
}
function Sn(t, n, e, i, r) {
  const o = Ft(t);
  o[n] = o[n] || [], o[n].push([e, i, r]), t.addEventListener(n, r);
}
function Wt(t, n) {
  return !n || !ft.call(n, (e) => t.indexOf(e) < 0);
}
function K(t, n, e, i, r) {
  const o = Ft(t);
  if (n)
    o[n] && (o[n] = o[n].filter(([c, f, x]) => {
      if (r && x.guid !== r.guid || !Wt(c, e) || i && i !== f)
        return !0;
      t.removeEventListener(n, x);
    }));
  else
    for (n in o)
      K(t, n, e, i, r);
}
s.off = function(t, n, e) {
  if ($(t))
    this.each((i, r) => {
      !g(r) && !D(r) && !U(r) || K(r);
    });
  else if (w(t))
    F(n) && (e = n, n = ""), m(tt(t), (i, r) => {
      const [o, c] = yt(r), f = mt(o);
      this.each((x, l) => {
        !g(l) && !D(l) && !U(l) || K(l, f, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
s.remove = function(t) {
  return O(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return u(t).replaceWith(this), this;
};
function kn(t, n, e, i, r) {
  if (!w(t)) {
    for (const o in t)
      this.on(o, n, e, t[o], r);
    return this;
  }
  return w(n) || ($(n) || Y(n) ? n = "" : $(e) ? (e = n, n = "") : (i = e, e = n, n = "")), F(i) || (i = e, e = void 0), i ? (m(tt(t), (o, c) => {
    const [f, x] = yt(c), l = mt(f), y = f in jt, I = f in gt;
    l && this.each((et, d) => {
      if (!g(d) && !D(d) && !U(d))
        return;
      const a = function(h) {
        if (h.target[`___i${h.type}`])
          return h.stopImmediatePropagation();
        if (h.namespace && !Wt(x, h.namespace.split(pt)) || !n && (I && (h.target !== d || h.___ot === l) || y && h.relatedTarget && d.contains(h.relatedTarget)))
          return;
        let k = d;
        if (n) {
          let C = h.target;
          for (; !Ot(C, n); )
            if (C === d || (C = C.parentNode, !C))
              return;
          k = C;
        }
        Object.defineProperty(h, "currentTarget", {
          configurable: !0,
          get() {
            return k;
          }
        }), Object.defineProperty(h, "delegateTarget", {
          configurable: !0,
          get() {
            return d;
          }
        }), Object.defineProperty(h, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const R = i.call(k, h, h.___td);
        r && K(d, l, x, n, a), R === !1 && (h.preventDefault(), h.stopPropagation());
      };
      a.guid = i.guid = i.guid || u.guid++, Sn(d, l, x, n, a);
    });
  }), this) : this;
}
s.on = kn;
function Rn(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
s.one = Rn;
const _n = /\r?\n/g;
function Nn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(_n, `\r
`))}`;
}
const vn = /file|reset|submit|button|image/i, qt = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    m(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || vn.test(r.type) || qt.test(r.type) && !r.checked)
        return;
      const o = It(r);
      if (!$(o)) {
        const c = Q(o) ? o : [o];
        m(c, (f, x) => {
          t += Nn(r.name, x);
        });
      }
    });
  }), t.slice(1);
};
function Ln(t) {
  var n = window.getComputedStyle(t);
  return n.display === "none" || parseInt(n.height) === 0;
}
function On() {
  return this.filter(function(t, n) {
    return !Ln(n);
  });
}
function Hn() {
  const t = function() {
    let c = document.createElement("div");
    c.id = "mm", c.style.width = "1mm", document.querySelector("body").appendChild(c);
    let f = document.getElementById("mm").getBoundingClientRect();
    return u("#mm").remove(), f.width;
  }();
  let n = 500;
  u("#app").__proto__.notHidden = On;
  function e() {
    console.log("start paging"), u("table.break-table").children("thead").addClass("need-break thead_break"), u("table.break-table tbody tr").addClass("need-break table_break");
    let o = i();
    for (; o.length; )
      o = i(r(o));
    console.log("end paging");
  }
  function i(o) {
    return o ? o.nextAll(".break-page").notHidden().first() : u(".break-page").notHidden().first();
  }
  function r(o, c = 0) {
    if (--n <= 0)
      throw new Error("Recursion error when breaking page");
    if (o.outerHeight() <= 294 * t + 5 || ++c > 50)
      return o;
    const f = o.offset().top, x = parseInt(o.css("paddingBottom"));
    let l = !1, y = null;
    return o.find(".need-break").notHidden().each(function(I, et) {
      if (u(this).offset().top + u(this).outerHeight() - f + parseInt(u(this).css("marginBottom")) > 294 * t - x) {
        l = !0;
        let h = o.attr("class");
        if (o.hasClass("new-break-page") || (h += " new-break-page"), y = u(`<div class="${h}" style="display:block"></div>`), u(this).hasClass("table_break")) {
          var d = u(`<table class="${u(this).parents("table").attr("class")}"></table>`);
          d.append("<tbody></tbody>");
          var a = u(this);
          let k = I > 1;
          if (I == 1 && (k = u(this).find(".need-break").notHidden().not(".thead_break").length !== 0), k) {
            d.prepend(a.parents("table").children("thead").clone());
            let R = u(this).prevAll("tr"), C = [], V = [];
            for (let p = R.length - 1; p >= 0; p--) {
              const W = R[p], q = p === R.length - 1, T = u(W).find("td");
              if (q || (C = C.map((E) => E - 1 > 0 ? E - 1 : 0)), q) {
                let E = 0;
                for (let _ = 0, B = T.length; _ < B; _++)
                  E += +u(T[_]).attr("colspan") || 1;
                C = new Array(E).fill(0);
              }
              for (let E = 0, _ = T.length; E < _; E++) {
                const B = T[E], J = +u(B).attr("rowspan") || 1, M = +u(B).attr("colspan") || 1;
                if (M > 0) {
                  let P = C.findIndex((b) => b < 1);
                  for (let b = 0; b < M; b++)
                    C[P + b] = (C[P + b] || 0) + J;
                  if (J > 1) {
                    V[P] = [p, E, J, M];
                    for (let b = 1; b < M; b++)
                      V[P + b] = void 0;
                  }
                }
              }
            }
            let z = C.map((p) => p > 1 ? "N" : 0);
            a.find("td").each(function(p) {
              const W = +u(this).attr("colspan") || 1, q = z.findIndex((T) => T === 0);
              for (let T = 0; T < W; T++)
                z[q + T] = p + 1;
            });
            const bt = {};
            for (let p = 0; p < V.length; p++) {
              if (!V[p])
                continue;
              const [W, q, T, E] = V[p] || [], _ = T - W - 1;
              if (_ <= 0)
                continue;
              const B = u(R[W]).find("td")[q];
              u(B).attr("rowspan", T - _);
              const J = u(B).clone().attr("rowspan", _), M = "splitTd" + p;
              bt[M] = J;
              let P = z.findIndex((b) => b === "N");
              if (P !== -1)
                for (let b = 0; b < E; b++)
                  z[P + b] = M;
            }
            const it = a.clone().empty();
            [...new Set(z)].forEach((p) => {
              typeof p == "string" ? it.append(bt[p]) : it.append(
                a.find("td").eq(p - 1).clone()
              );
            }), d.children("tbody").append(it.clone()), d.children("tbody").append(a.nextAll().clone()), y.append(d), y.append(a.parents("table").nextAll().clone()), a.nextAll().remove(), a.parents("table").nextAll().remove(), a.remove();
          } else {
            a.nextAll().length ? (d.prepend(a.parents("table").children("thead").clone()), d.children("tbody").append(a.nextAll().clone()), a.nextAll().remove(), y.append(d), y.append(a.parents("table").nextAll().clone()), a.parents("table").nextAll().remove()) : (y.append(a.parents("table").nextAll().clone()), a.parents("table").nextAll().remove());
            let R = u(
              `<div style="height:${294 * t - 100}px;overflow:hidden;"></div>`
            );
            a.parents(".break-page").append(R), R.append(a.parents("table"));
          }
        } else
          u(this).hasClass("thead_break") ? (y.append(u(this).parents("table").clone()), y.append(u(this).parents("table").nextAll().clone()), u(this).parents("table").nextAll().remove(), u(this).parents("table").remove()) : (y.append(u(this).clone()), y.append(u(this).nextAll().clone()), u(this).nextAll().remove(), u(this).remove());
        return o.after(y), !1;
      }
    }), l ? r(y, c) : o;
  }
  return {
    execPaging: e
  };
}
export {
  Hn as default
};
