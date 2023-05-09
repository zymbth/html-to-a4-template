const L = document, Y = window, Et = L.documentElement, F = L.createElement.bind(L), $t = F("div"), et = F("table"), qt = F("tbody"), bt = F("tr"), { isArray: K, prototype: St } = Array, { concat: zt, filter: ot, indexOf: _t, map: At, push: Vt, slice: Rt, some: at, splice: Ut } = St, Jt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Yt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gt = /<.+>/, Xt = /^\w+$/;
function ct(t, n) {
  const e = Kt(n);
  return !t || !e && !D(n) && !b(n) ? [] : !e && Yt.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && Xt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class Q {
  constructor(n, e) {
    if (!n)
      return;
    if (st(n))
      return n;
    let i = n;
    if (T(n)) {
      const r = e || L;
      if (i = Jt.test(n) && D(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Gt.test(n) ? Ot(n) : st(r) ? r.find(n) : T(r) ? s(r).find(n) : ct(n, r), !i)
        return;
    } else if (W(n))
      return this.ready(n);
    (i.nodeType || i === Y) && (i = [i]), this.length = i.length;
    for (let r = 0, a = this.length; r < a; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new Q(n, e);
  }
}
const o = Q.prototype, s = o.init;
s.fn = s.prototype = o;
o.length = 0;
o.splice = Ut;
typeof Symbol == "function" && (o[Symbol.iterator] = St[Symbol.iterator]);
function st(t) {
  return t instanceof Q;
}
function V(t) {
  return !!t && t === t.window;
}
function D(t) {
  return !!t && t.nodeType === 9;
}
function Kt(t) {
  return !!t && t.nodeType === 11;
}
function b(t) {
  return !!t && t.nodeType === 1;
}
function Qt(t) {
  return !!t && t.nodeType === 3;
}
function Zt(t) {
  return typeof t == "boolean";
}
function W(t) {
  return typeof t == "function";
}
function T(t) {
  return typeof t == "string";
}
function S(t) {
  return t === void 0;
}
function J(t) {
  return t === null;
}
function Nt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ut(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
s.isWindow = V;
s.isFunction = W;
s.isArray = K;
s.isNumeric = Nt;
s.isPlainObject = ut;
function y(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (ut(t)) {
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
function G(...t) {
  const n = Zt(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return G(n, s, e);
  for (let r = 0; r < i; r++) {
    const a = t[r];
    for (const c in a)
      n && (K(a[c]) || ut(a[c])) ? ((!e[c] || e[c].constructor !== a[c].constructor) && (e[c] = new a[c].constructor()), G(n, e[c], a[c])) : e[c] = a[c];
  }
  return e;
}
s.extend = G;
o.extend = function(t) {
  return G(o, t);
};
const tn = /\S+/g;
function Z(t) {
  return T(t) ? t.match(tn) || [] : [];
}
o.toggleClass = function(t, n) {
  const e = Z(t), i = !S(n);
  return this.each((r, a) => {
    b(a) && y(e, (c, d) => {
      i ? n ? a.classList.add(d) : a.classList.remove(d) : a.classList.toggle(d);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const n = Z(t);
  return this.each((e, i) => {
    b(i) && y(n, (r, a) => {
      i.removeAttribute(a);
    });
  });
};
function nn(t, n) {
  if (t) {
    if (T(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !b(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return J(e) ? void 0 : e;
      }
      return S(n) ? this : J(n) ? this.removeAttr(t) : this.each((e, i) => {
        b(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
o.attr = nn;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && at.call(this, (n) => b(n) && n.classList.contains(t));
};
o.get = function(t) {
  return S(t) ? Rt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function en(t) {
  return S(t) ? this.get().map((n) => b(n) || Qt(n) ? n.textContent : "").join("") : this.each((n, e) => {
    b(e) && (e.textContent = t);
  });
}
o.text = en;
function O(t, n, e) {
  if (!b(t))
    return;
  const i = Y.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function A(t, n) {
  return parseInt(O(t, n), 10) || 0;
}
function yt(t, n) {
  return A(t, `border${n ? "Left" : "Top"}Width`) + A(t, `padding${n ? "Left" : "Top"}`) + A(t, `padding${n ? "Right" : "Bottom"}`) + A(t, `border${n ? "Right" : "Bottom"}Width`);
}
const it = {};
function rn(t) {
  if (it[t])
    return it[t];
  const n = F(t);
  L.body.insertBefore(n, null);
  const e = O(n, "display");
  return L.body.removeChild(n), it[t] = e !== "none" ? e : "block";
}
function xt(t) {
  return O(t, "display") === "none";
}
function Lt(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function tt(t) {
  return T(t) ? (n, e) => Lt(e, t) : W(t) ? t : st(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
o.filter = function(t) {
  const n = tt(t);
  return s(ot.call(this, (e, i) => n.call(e, i, e)));
};
function B(t, n) {
  return n ? t.filter(n) : t;
}
o.detach = function(t) {
  return B(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const sn = /^\s*<(\w+)[^>]*>/, on = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ct = {
  "*": $t,
  tr: qt,
  td: bt,
  th: bt,
  thead: et,
  tbody: et,
  tfoot: et
};
function Ot(t) {
  if (!T(t))
    return [];
  if (on.test(t))
    return [F(RegExp.$1)];
  const n = sn.test(t) && RegExp.$1, e = Ct[n] || Ct["*"];
  return e.innerHTML = t, s(e.childNodes).detach().get();
}
s.parseHTML = Ot;
o.has = function(t) {
  const n = T(t) ? (e, i) => ct(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
o.not = function(t) {
  const n = tt(t);
  return this.filter((e, i) => (!T(t) || b(i)) && !n.call(i, e, i));
};
function H(t, n, e, i) {
  const r = [], a = W(n), c = i && tt(i);
  for (let d = 0, k = t.length; d < k; d++)
    if (a) {
      const p = n(t[d]);
      p.length && Vt.apply(r, p);
    } else {
      let p = t[d][n];
      for (; p != null && !(i && c(-1, p)); )
        r.push(p), p = e ? p[n] : null;
    }
  return r;
}
function Ht(t) {
  return t.multiple && t.options ? H(ot.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function an(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Ft.test(e.type)) {
      const r = K(t) ? At.call(t, String) : J(t) ? [] : [String(t)];
      i ? y(e.options, (a, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = S(t) || J(t) ? "" : t;
  }) : this[0] && Ht(this[0]);
}
o.val = an;
o.is = function(t) {
  const n = tt(t);
  return at.call(this, (e, i) => n.call(e, i, e));
};
s.guid = 1;
function R(t) {
  return t.length > 1 ? ot.call(t, (n, e, i) => _t.call(i, n) === e) : t;
}
s.unique = R;
o.add = function(t, n) {
  return s(R(this.get().concat(s(t, n).get())));
};
o.children = function(t) {
  return B(s(R(H(this, (n) => n.children))), t);
};
o.parent = function(t) {
  return B(s(R(H(this, "parentNode"))), t);
};
o.index = function(t) {
  const n = t ? s(t)[0] : this[0], e = t ? this : s(n).parent().children();
  return _t.call(e, n);
};
o.closest = function(t) {
  const n = this.filter(t);
  if (n.length)
    return n;
  const e = this.parent();
  return e.length ? e.closest(t) : n;
};
o.siblings = function(t) {
  return B(s(R(H(this, (n) => s(n).parent().children().not(n)))), t);
};
o.find = function(t) {
  return s(R(H(this, (n) => ct(t, n))));
};
const cn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, un = /^$|^module$|\/(java|ecma)script/i, fn = ["type", "src", "nonce", "noModule"];
function ln(t, n) {
  const e = s(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (un.test(r.type) && Et.contains(r)) {
      const a = F("script");
      a.text = r.textContent.replace(cn, ""), y(fn, (c, d) => {
        r[d] && (a[d] = r[d]);
      }), n.head.insertBefore(a, null), n.head.removeChild(a);
    }
  });
}
function dn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && ln(n, t.ownerDocument);
}
function I(t, n, e, i, r, a, c, d) {
  return y(t, (k, p) => {
    y(s(p), (f, h) => {
      y(s(n), (g, u) => {
        const E = e ? h : u, l = e ? u : h, x = e ? f : g;
        dn(E, x ? l.cloneNode(!0) : l, i, r, !x);
      }, d);
    }, c);
  }, a), n;
}
o.after = function() {
  return I(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return I(arguments, this, !1, !1, !0);
};
function hn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (S(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    b(i) && (n ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = hn;
o.appendTo = function(t) {
  return I(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = s(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return I(arguments, this, !1, !0);
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
  return I(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return I(arguments, this, !0, !0);
};
o.prepend = function() {
  return I(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return I(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return s(R(H(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, n, e) {
  return B(s(R(H(this, "nextElementSibling", n, e))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
o.parents = function(t, n) {
  return B(s(R(H(this, "parentElement", !0, n))), t);
};
o.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
o.prev = function(t, n, e) {
  return B(s(R(H(this, "previousElementSibling", n, e))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
o.map = function(t) {
  return s(zt.apply([], At.call(this, (n, e) => t.call(n, e, n))));
};
o.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && O(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Et;
  });
};
o.slice = function(t, n) {
  return s(Rt.call(this, t, n));
};
const pn = /-([a-z])/g;
function ft(t) {
  return t.replace(pn, (n, e) => e.toUpperCase());
}
o.ready = function(t) {
  const n = () => setTimeout(t, 0, s);
  return L.readyState !== "loading" ? n() : L.addEventListener("DOMContentLoaded", n), this;
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
    top: n.top + Y.pageYOffset,
    left: n.left + Y.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = O(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && O(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && b(r)) {
      const a = s(r).offset();
      e.top -= a.top + A(r, "borderTopWidth"), e.left -= a.left + A(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - A(t, "marginTop"),
    left: e.left - A(t, "marginLeft")
  };
};
const vt = {
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
    if (T(t))
      return t = vt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[vt[t] || t];
  });
};
const gn = /^--/;
function lt(t) {
  return gn.test(t);
}
const rt = {}, { style: mn } = $t, bn = ["webkit", "moz", "ms"];
function yn(t, n = lt(t)) {
  if (n)
    return t;
  if (!rt[t]) {
    const e = ft(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${bn.join(`${i} `)}${i}`.split(" ");
    y(r, (a, c) => {
      if (c in mn)
        return rt[t] = c, !1;
    });
  }
  return rt[t];
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
function Bt(t, n, e = lt(t)) {
  return !e && !xn[t] && Nt(n) ? `${n}px` : n;
}
function Cn(t, n) {
  if (T(t)) {
    const e = lt(t);
    return t = yn(t, e), arguments.length < 2 ? this[0] && O(this[0], t, e) : t ? (n = Bt(t, n, e), this.each((i, r) => {
      b(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
o.css = Cn;
function It(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const wn = /^\s+|\s+$/;
function wt(t, n) {
  const e = t.dataset[n] || t.dataset[ft(n)];
  return wn.test(e) ? e : It(JSON.parse, e);
}
function Tn(t, n, e) {
  e = It(JSON.stringify, e), t.dataset[ft(n)] = e;
}
function kn(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = wt(this[0], i);
    return e;
  }
  if (T(t))
    return arguments.length < 2 ? this[0] && wt(this[0], t) : S(n) ? this : this.each((e, i) => {
      Tn(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
o.data = kn;
function Pt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
y([!0, !1], (t, n) => {
  y(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    o[r] = function(a) {
      if (this[0])
        return V(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : D(this[0]) ? Pt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (a && n ? A(this[0], `margin${e ? "Top" : "Left"}`) + A(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
y(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  o[e] = function(i) {
    if (!this[0])
      return S(i) ? void 0 : this;
    if (!arguments.length)
      return V(this[0]) ? this[0].document.documentElement[`client${n}`] : D(this[0]) ? Pt(this[0], n) : this[0].getBoundingClientRect()[e] - yt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((a, c) => {
      if (!b(c))
        return;
      const d = O(c, "boxSizing");
      c.style[e] = Bt(e, r + (d === "border-box" ? yt(c, !t) : 0));
    });
  };
});
const Tt = "___cd";
o.toggle = function(t) {
  return this.each((n, e) => {
    if (!b(e))
      return;
    const i = xt(e);
    (S(t) ? i : t) ? (e.style.display = e[Tt] || "", xt(e) && (e.style.display = rn(e.tagName))) : i || (e[Tt] = O(e, "display"), e.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const kt = "___ce", dt = ".", ht = { focus: "focusin", blur: "focusout" }, Mt = { mouseenter: "mouseover", mouseleave: "mouseout" }, En = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function pt(t) {
  return Mt[t] || ht[t] || t;
}
function gt(t) {
  const n = t.split(dt);
  return [n[0], n.slice(1).sort()];
}
o.trigger = function(t, n) {
  if (T(t)) {
    const [i, r] = gt(t), a = pt(i);
    if (!a)
      return this;
    const c = En.test(a) ? "MouseEvents" : "HTMLEvents";
    t = L.createEvent(c), t.initEvent(a, !0, !0), t.namespace = r.join(dt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in ht;
  return this.each((i, r) => {
    e && W(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function jt(t) {
  return t[kt] = t[kt] || {};
}
function $n(t, n, e, i, r) {
  const a = jt(t);
  a[n] = a[n] || [], a[n].push([e, i, r]), t.addEventListener(n, r);
}
function Dt(t, n) {
  return !n || !at.call(n, (e) => t.indexOf(e) < 0);
}
function X(t, n, e, i, r) {
  const a = jt(t);
  if (n)
    a[n] && (a[n] = a[n].filter(([c, d, k]) => {
      if (r && k.guid !== r.guid || !Dt(c, e) || i && i !== d)
        return !0;
      t.removeEventListener(n, k);
    }));
  else
    for (n in a)
      X(t, n, e, i, r);
}
o.off = function(t, n, e) {
  if (S(t))
    this.each((i, r) => {
      !b(r) && !D(r) && !V(r) || X(r);
    });
  else if (T(t))
    W(n) && (e = n, n = ""), y(Z(t), (i, r) => {
      const [a, c] = gt(r), d = pt(a);
      this.each((k, p) => {
        !b(p) && !D(p) && !V(p) || X(p, d, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return B(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return s(t).replaceWith(this), this;
};
function Sn(t, n, e, i, r) {
  if (!T(t)) {
    for (const a in t)
      this.on(a, n, e, t[a], r);
    return this;
  }
  return T(n) || (S(n) || J(n) ? n = "" : S(e) ? (e = n, n = "") : (i = e, e = n, n = "")), W(i) || (i = e, e = void 0), i ? (y(Z(t), (a, c) => {
    const [d, k] = gt(c), p = pt(d), f = d in Mt, h = d in ht;
    p && this.each((g, u) => {
      if (!b(u) && !D(u) && !V(u))
        return;
      const E = function(l) {
        if (l.target[`___i${l.type}`])
          return l.stopImmediatePropagation();
        if (l.namespace && !Dt(k, l.namespace.split(dt)) || !n && (h && (l.target !== u || l.___ot === p) || f && l.relatedTarget && u.contains(l.relatedTarget)))
          return;
        let x = u;
        if (n) {
          let w = l.target;
          for (; !Lt(w, n); )
            if (w === u || (w = w.parentNode, !w))
              return;
          x = w;
        }
        Object.defineProperty(l, "currentTarget", {
          configurable: !0,
          get() {
            return x;
          }
        }), Object.defineProperty(l, "delegateTarget", {
          configurable: !0,
          get() {
            return u;
          }
        }), Object.defineProperty(l, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const v = i.call(x, l, l.___td);
        r && X(u, p, k, n, E), v === !1 && (l.preventDefault(), l.stopPropagation());
      };
      E.guid = i.guid = i.guid || s.guid++, $n(u, p, k, n, E);
    });
  }), this) : this;
}
o.on = Sn;
function _n(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
o.one = _n;
const An = /\r?\n/g;
function Rn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(An, `\r
`))}`;
}
const Nn = /file|reset|submit|button|image/i, Ft = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    y(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Nn.test(r.type) || Ft.test(r.type) && !r.checked)
        return;
      const a = Ht(r);
      if (!S(a)) {
        const c = K(a) ? a : [a];
        y(c, (d, k) => {
          t += Rn(r.name, k);
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
function Hn(t) {
  return t instanceof Element ? "element" : Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/, "$1").toLowerCase();
}
const vn = `.print-container{font-size:9pt;line-height:18pt;letter-spacing:1px;width:210mm;margin:0 auto;box-sizing:border-box;background:#fff!important;color:#000!important}.print-container table{line-height:1.5}.break-page{box-shadow:0 0 8px 4px #ccc;padding:50px;margin-top:20px;page-break-after:always;position:relative;min-height:294mm;box-sizing:border-box}.break-page:first-child{margin-top:30px}.break-page:last-child{page-break-after:unset;margin-bottom:20px}table.break-table{border-collapse:collapse;border:1px solid black}table.break-table td,table.break-table th{border:1px solid black}@media print{.print-container{width:100%!important}.print-container .break-page{box-shadow:none;margin:0;max-height:294mm}.break-page:first-child{margin-top:0}img{max-height:902px}@page{size:a4;padding:0;margin:0}}
`;
function Bn(t) {
  i(vn);
  const n = function() {
    let h = document.createElement("div");
    h.id = "mm", h.style.width = "1mm", document.querySelector("body").appendChild(h);
    let g = document.getElementById("mm").getBoundingClientRect();
    return s("#mm").remove(), g.width;
  }();
  let e = 500;
  s("body").__proto__.notHidden = On;
  function i(f) {
    if (typeof f != "string") {
      console.error("print style is invalid");
      return;
    }
    if (document.getElementById("print-style"))
      return;
    console.log("create style");
    const h = document.createElement("style");
    h.id = "print-style", h.setAttribute("type", "text/css"), h.innerHTML = f, document.head.append(h);
  }
  function r() {
    const f = Hn(t);
    let h;
    ["string", "element", "htmlcollection"].includes(f) && (h = s(t)), h != null && h.length && (h.addClass("print-container"), h.children().notHidden().each(function() {
      s(this).addClass("break-page"), s(this).children().notHidden().each(function(u, E) {
        E.tagName.toLowerCase() === "table" ? s(this).addClass("break-table") : s(this).addClass("need-break");
      });
    })), console.log("start paging"), s("table.break-table").children("thead").addClass("need-break thead_break"), s("table.break-table tbody tr").addClass("need-break table_break");
    let g = a();
    for (; g.length; )
      g = a(c(g));
    console.log("end paging");
  }
  function a(f) {
    return f ? f.nextAll(".break-page").notHidden().first() : s(".break-page").notHidden().first();
  }
  function c(f, h = 0) {
    if (--e <= 0)
      throw new Error("Recursion error when breaking page");
    if (f.outerHeight() <= 294 * n + 5 || ++h > 50)
      return f;
    const g = f.offset().top, u = parseInt(f.css("paddingBottom"));
    let E = !1, l = null;
    return f.find(".need-break").notHidden().each(function(x, v) {
      if (s(this).offset().top + s(this).outerHeight() - g + parseInt(s(this).css("marginBottom")) <= 294 * n - u)
        return !0;
      E = !0;
      let w = f.attr("class");
      return f.hasClass("new-break-page") || (w += " new-break-page"), l = s(`<div class="${w}" style="display:block"></div>`), s(this).hasClass("table_break") ? p.call(this, l, x) : s(this).hasClass("thead_break") ? k.call(this, l) : d.call(this, l), f.after(l), !1;
    }), E ? c(l, h) : f;
  }
  function d(f) {
    !f || !this || (f.append(s(this).clone()), f.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
  }
  function k(f) {
    !f || !this || (f.append(s(this).parents("table").clone()), f.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove());
  }
  function p(f, h) {
    var g = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
    g.append("<tbody></tbody>");
    var u = s(this);
    let E = h > 1;
    if (h == 1 && (E = s(this).find(".need-break").notHidden().not(".thead_break").length !== 0), E) {
      g.prepend(u.parents("table").children("thead").clone());
      let l = s(this).prevAll("tr"), x = [], v = [];
      for (let m = l.length - 1; m >= 0; m--) {
        const q = l[m], z = m === l.length - 1, $ = s(q).find("td");
        if (z || (x = x.map((_) => _ - 1 > 0 ? _ - 1 : 0)), z) {
          let _ = 0;
          for (let N = 0, P = $.length; N < P; N++)
            _ += +s($[N]).attr("colspan") || 1;
          x = new Array(_).fill(0);
        }
        for (let _ = 0, N = $.length; _ < N; _++) {
          const P = $[_], U = +s(P).attr("rowspan") || 1, M = +s(P).attr("colspan") || 1;
          if (M > 0) {
            let j = x.findIndex((C) => C < 1);
            for (let C = 0; C < M; C++)
              x[j + C] = (x[j + C] || 0) + U;
            if (U > 1) {
              v[j] = [m, _, U, M];
              for (let C = 1; C < M; C++)
                v[j + C] = void 0;
            }
          }
        }
      }
      let w = x.map((m) => m > 1 ? "N" : 0);
      u.find("td").each(function(m) {
        const q = +s(this).attr("colspan") || 1, z = w.findIndex(($) => $ === 0);
        for (let $ = 0; $ < q; $++)
          w[z + $] = m + 1;
      });
      const mt = {};
      for (let m = 0; m < v.length; m++) {
        if (!v[m])
          continue;
        const [q, z, $, _] = v[m] || [], N = $ - q - 1;
        if (N <= 0)
          continue;
        const P = s(l[q]).find("td")[z];
        s(P).attr("rowspan", $ - N);
        const U = s(P).clone().attr("rowspan", N), M = "splitTd" + m;
        mt[M] = U;
        let j = w.findIndex((C) => C === "N");
        if (j !== -1)
          for (let C = 0; C < _; C++)
            w[j + C] = M;
      }
      const nt = u.clone().empty();
      [...new Set(w)].forEach((m) => {
        typeof m == "string" ? nt.append(mt[m]) : nt.append(
          u.find("td").eq(m - 1).clone()
        );
      });
      const Wt = u.prev("tr").length === 0;
      g.children("tbody").append(nt.clone()), g.children("tbody").append(u.nextAll().clone()), f.append(g), f.append(u.parents("table").nextAll().clone()), u.nextAll().remove(), u.parents("table").nextAll().remove(), Wt ? u.parents("table").remove() : u.remove();
    } else {
      u.nextAll().length ? (g.prepend(u.parents("table").children("thead").clone()), g.children("tbody").append(u.nextAll().clone()), u.nextAll().remove(), f.append(g), f.append(u.parents("table").nextAll().clone()), u.parents("table").nextAll().remove()) : (f.append(u.parents("table").nextAll().clone()), u.parents("table").nextAll().remove());
      let l = s(
        `<div style="height:${294 * n - 100}px;overflow:hidden;"></div>`
      );
      u.parents(".break-page").append(l), l.append(u.parents("table"));
    }
  }
  return {
    execPaging: r
  };
}
export {
  Bn as default
};
