const I = document, G = window, At = I.documentElement, F = I.createElement.bind(I), Et = F("div"), it = F("table"), qt = F("tbody"), yt = F("tr"), { isArray: Q, prototype: St } = Array, { concat: Vt, filter: at, indexOf: _t, map: Nt, push: Ut, slice: Rt, some: ct, splice: Jt } = St, Yt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Gt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xt = /<.+>/, Kt = /^\w+$/;
function ut(t, n) {
  const e = Qt(n);
  return !t || !e && !L(n) && !y(n) ? [] : !e && Gt.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && Kt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class Z {
  constructor(n, e) {
    if (!n)
      return;
    if (ot(n))
      return n;
    let i = n;
    if (w(n)) {
      const r = e || I;
      if (i = Yt.test(n) && L(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Xt.test(n) ? vt(n) : ot(r) ? r.find(n) : w(r) ? s(r).find(n) : ut(n, r), !i)
        return;
    } else if (z(n))
      return this.ready(n);
    (i.nodeType || i === G) && (i = [i]), this.length = i.length;
    for (let r = 0, a = this.length; r < a; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new Z(n, e);
  }
}
const o = Z.prototype, s = o.init;
s.fn = s.prototype = o;
o.length = 0;
o.splice = Jt;
typeof Symbol == "function" && (o[Symbol.iterator] = St[Symbol.iterator]);
function ot(t) {
  return t instanceof Z;
}
function V(t) {
  return !!t && t === t.window;
}
function L(t) {
  return !!t && t.nodeType === 9;
}
function Qt(t) {
  return !!t && t.nodeType === 11;
}
function y(t) {
  return !!t && t.nodeType === 1;
}
function Zt(t) {
  return !!t && t.nodeType === 3;
}
function tn(t) {
  return typeof t == "boolean";
}
function z(t) {
  return typeof t == "function";
}
function w(t) {
  return typeof t == "string";
}
function A(t) {
  return t === void 0;
}
function Y(t) {
  return t === null;
}
function It(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ft(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
s.isWindow = V;
s.isFunction = z;
s.isArray = Q;
s.isNumeric = It;
s.isPlainObject = ft;
function x(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (ft(t)) {
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
s.each = x;
o.each = function(t) {
  return x(this, t);
};
o.empty = function() {
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
    return X(n, s, e);
  for (let r = 0; r < i; r++) {
    const a = t[r];
    for (const c in a)
      n && (Q(a[c]) || ft(a[c])) ? ((!e[c] || e[c].constructor !== a[c].constructor) && (e[c] = new a[c].constructor()), X(n, e[c], a[c])) : e[c] = a[c];
  }
  return e;
}
s.extend = X;
o.extend = function(t) {
  return X(o, t);
};
const nn = /\S+/g;
function tt(t) {
  return w(t) ? t.match(nn) || [] : [];
}
o.toggleClass = function(t, n) {
  const e = tt(t), i = !A(n);
  return this.each((r, a) => {
    y(a) && x(e, (c, l) => {
      i ? n ? a.classList.add(l) : a.classList.remove(l) : a.classList.toggle(l);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const n = tt(t);
  return this.each((e, i) => {
    y(i) && x(n, (r, a) => {
      i.removeAttribute(a);
    });
  });
};
function en(t, n) {
  if (t) {
    if (w(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !y(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return Y(e) ? void 0 : e;
      }
      return A(n) ? this : Y(n) ? this.removeAttr(t) : this.each((e, i) => {
        y(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
o.attr = en;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && ct.call(this, (n) => y(n) && n.classList.contains(t));
};
o.get = function(t) {
  return A(t) ? Rt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function rn(t) {
  return A(t) ? this.get().map((n) => y(n) || Zt(n) ? n.textContent : "").join("") : this.each((n, e) => {
    y(e) && (e.textContent = t);
  });
}
o.text = rn;
function O(t, n, e) {
  if (!y(t))
    return;
  const i = G.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function _(t, n) {
  return parseInt(O(t, n), 10) || 0;
}
function xt(t, n) {
  return _(t, `border${n ? "Left" : "Top"}Width`) + _(t, `padding${n ? "Left" : "Top"}`) + _(t, `padding${n ? "Right" : "Bottom"}`) + _(t, `border${n ? "Right" : "Bottom"}Width`);
}
const rt = {};
function sn(t) {
  if (rt[t])
    return rt[t];
  const n = F(t);
  I.body.insertBefore(n, null);
  const e = O(n, "display");
  return I.body.removeChild(n), rt[t] = e !== "none" ? e : "block";
}
function Ct(t) {
  return O(t, "display") === "none";
}
function Ot(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function nt(t) {
  return w(t) ? (n, e) => Ot(e, t) : z(t) ? t : ot(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
o.filter = function(t) {
  const n = nt(t);
  return s(at.call(this, (e, i) => n.call(e, i, e)));
};
function B(t, n) {
  return n ? t.filter(n) : t;
}
o.detach = function(t) {
  return B(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const on = /^\s*<(\w+)[^>]*>/, an = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, wt = {
  "*": Et,
  tr: qt,
  td: yt,
  th: yt,
  thead: it,
  tbody: it,
  tfoot: it
};
function vt(t) {
  if (!w(t))
    return [];
  if (an.test(t))
    return [F(RegExp.$1)];
  const n = on.test(t) && RegExp.$1, e = wt[n] || wt["*"];
  return e.innerHTML = t, s(e.childNodes).detach().get();
}
s.parseHTML = vt;
o.has = function(t) {
  const n = w(t) ? (e, i) => ut(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
o.not = function(t) {
  const n = nt(t);
  return this.filter((e, i) => (!w(t) || y(i)) && !n.call(i, e, i));
};
function v(t, n, e, i) {
  const r = [], a = z(n), c = i && nt(i);
  for (let l = 0, T = t.length; l < T; l++)
    if (a) {
      const m = n(t[l]);
      m.length && Ut.apply(r, m);
    } else {
      let m = t[l][n];
      for (; m != null && !(i && c(-1, m)); )
        r.push(m), m = e ? m[n] : null;
    }
  return r;
}
function Ht(t) {
  return t.multiple && t.options ? v(at.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function cn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || zt.test(e.type)) {
      const r = Q(t) ? Nt.call(t, String) : Y(t) ? [] : [String(t)];
      i ? x(e.options, (a, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = A(t) || Y(t) ? "" : t;
  }) : this[0] && Ht(this[0]);
}
o.val = cn;
o.is = function(t) {
  const n = nt(t);
  return ct.call(this, (e, i) => n.call(e, i, e));
};
s.guid = 1;
function N(t) {
  return t.length > 1 ? at.call(t, (n, e, i) => _t.call(i, n) === e) : t;
}
s.unique = N;
o.add = function(t, n) {
  return s(N(this.get().concat(s(t, n).get())));
};
o.children = function(t) {
  return B(s(N(v(this, (n) => n.children))), t);
};
o.parent = function(t) {
  return B(s(N(v(this, "parentNode"))), t);
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
  return B(s(N(v(this, (n) => s(n).parent().children().not(n)))), t);
};
o.find = function(t) {
  return s(N(v(this, (n) => ut(t, n))));
};
const un = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fn = /^$|^module$|\/(java|ecma)script/i, ln = ["type", "src", "nonce", "noModule"];
function dn(t, n) {
  const e = s(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (fn.test(r.type) && At.contains(r)) {
      const a = F("script");
      a.text = r.textContent.replace(un, ""), x(ln, (c, l) => {
        r[l] && (a[l] = r[l]);
      }), n.head.insertBefore(a, null), n.head.removeChild(a);
    }
  });
}
function hn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && dn(n, t.ownerDocument);
}
function M(t, n, e, i, r, a, c, l) {
  return x(t, (T, m) => {
    x(s(m), (U, u) => {
      x(s(n), (g, d) => {
        const f = e ? u : d, h = e ? d : u, p = e ? U : g;
        hn(f, p ? h.cloneNode(!0) : h, i, r, !p);
      }, l);
    }, c);
  }, a), n;
}
o.after = function() {
  return M(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return M(arguments, this, !1, !1, !0);
};
function pn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (A(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    y(i) && (n ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = pn;
o.appendTo = function(t) {
  return M(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = s(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return M(arguments, this, !1, !0);
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
  return M(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return M(arguments, this, !0, !0);
};
o.prepend = function() {
  return M(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return M(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return s(N(v(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, n, e) {
  return B(s(N(v(this, "nextElementSibling", n, e))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
o.parents = function(t, n) {
  return B(s(N(v(this, "parentElement", !0, n))), t);
};
o.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
o.prev = function(t, n, e) {
  return B(s(N(v(this, "previousElementSibling", n, e))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
o.map = function(t) {
  return s(Vt.apply([], Nt.call(this, (n, e) => t.call(n, e, n))));
};
o.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && O(e, "position") === "static"; )
      e = e.offsetParent;
    return e || At;
  });
};
o.slice = function(t, n) {
  return s(Rt.call(this, t, n));
};
const gn = /-([a-z])/g;
function lt(t) {
  return t.replace(gn, (n, e) => e.toUpperCase());
}
o.ready = function(t) {
  const n = () => setTimeout(t, 0, s);
  return I.readyState !== "loading" ? n() : I.addEventListener("DOMContentLoaded", n), this;
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
    top: n.top + G.pageYOffset,
    left: n.left + G.pageXOffset
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
    if (r !== t && y(r)) {
      const a = s(r).offset();
      e.top -= a.top + _(r, "borderTopWidth"), e.left -= a.left + _(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - _(t, "marginTop"),
    left: e.left - _(t, "marginLeft")
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
o.prop = function(t, n) {
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
o.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Bt[t] || t];
  });
};
const mn = /^--/;
function dt(t) {
  return mn.test(t);
}
const st = {}, { style: bn } = Et, yn = ["webkit", "moz", "ms"];
function xn(t, n = dt(t)) {
  if (n)
    return t;
  if (!st[t]) {
    const e = lt(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${yn.join(`${i} `)}${i}`.split(" ");
    x(r, (a, c) => {
      if (c in bn)
        return st[t] = c, !1;
    });
  }
  return st[t];
}
const Cn = {
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
  return !e && !Cn[t] && It(n) ? `${n}px` : n;
}
function wn(t, n) {
  if (w(t)) {
    const e = dt(t);
    return t = xn(t, e), arguments.length < 2 ? this[0] && O(this[0], t, e) : t ? (n = Mt(t, n, e), this.each((i, r) => {
      y(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
o.css = wn;
function Pt(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const Tn = /^\s+|\s+$/;
function Tt(t, n) {
  const e = t.dataset[n] || t.dataset[lt(n)];
  return Tn.test(e) ? e : Pt(JSON.parse, e);
}
function kn(t, n, e) {
  e = Pt(JSON.stringify, e), t.dataset[lt(n)] = e;
}
function $n(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = Tt(this[0], i);
    return e;
  }
  if (w(t))
    return arguments.length < 2 ? this[0] && Tt(this[0], t) : A(n) ? this : this.each((e, i) => {
      kn(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
o.data = $n;
function jt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
x([!0, !1], (t, n) => {
  x(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    o[r] = function(a) {
      if (this[0])
        return V(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : L(this[0]) ? jt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (a && n ? _(this[0], `margin${e ? "Top" : "Left"}`) + _(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
x(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  o[e] = function(i) {
    if (!this[0])
      return A(i) ? void 0 : this;
    if (!arguments.length)
      return V(this[0]) ? this[0].document.documentElement[`client${n}`] : L(this[0]) ? jt(this[0], n) : this[0].getBoundingClientRect()[e] - xt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((a, c) => {
      if (!y(c))
        return;
      const l = O(c, "boxSizing");
      c.style[e] = Mt(e, r + (l === "border-box" ? xt(c, !t) : 0));
    });
  };
});
const kt = "___cd";
o.toggle = function(t) {
  return this.each((n, e) => {
    if (!y(e))
      return;
    const i = Ct(e);
    (A(t) ? i : t) ? (e.style.display = e[kt] || "", Ct(e) && (e.style.display = sn(e.tagName))) : i || (e[kt] = O(e, "display"), e.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const $t = "___ce", ht = ".", pt = { focus: "focusin", blur: "focusout" }, Dt = { mouseenter: "mouseover", mouseleave: "mouseout" }, An = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function gt(t) {
  return Dt[t] || pt[t] || t;
}
function mt(t) {
  const n = t.split(ht);
  return [n[0], n.slice(1).sort()];
}
o.trigger = function(t, n) {
  if (w(t)) {
    const [i, r] = mt(t), a = gt(i);
    if (!a)
      return this;
    const c = An.test(a) ? "MouseEvents" : "HTMLEvents";
    t = I.createEvent(c), t.initEvent(a, !0, !0), t.namespace = r.join(ht), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in pt;
  return this.each((i, r) => {
    e && z(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Lt(t) {
  return t[$t] = t[$t] || {};
}
function En(t, n, e, i, r) {
  const a = Lt(t);
  a[n] = a[n] || [], a[n].push([e, i, r]), t.addEventListener(n, r);
}
function Ft(t, n) {
  return !n || !ct.call(n, (e) => t.indexOf(e) < 0);
}
function K(t, n, e, i, r) {
  const a = Lt(t);
  if (n)
    a[n] && (a[n] = a[n].filter(([c, l, T]) => {
      if (r && T.guid !== r.guid || !Ft(c, e) || i && i !== l)
        return !0;
      t.removeEventListener(n, T);
    }));
  else
    for (n in a)
      K(t, n, e, i, r);
}
o.off = function(t, n, e) {
  if (A(t))
    this.each((i, r) => {
      !y(r) && !L(r) && !V(r) || K(r);
    });
  else if (w(t))
    z(n) && (e = n, n = ""), x(tt(t), (i, r) => {
      const [a, c] = mt(r), l = gt(a);
      this.each((T, m) => {
        !y(m) && !L(m) && !V(m) || K(m, l, c, n, e);
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
  if (!w(t)) {
    for (const a in t)
      this.on(a, n, e, t[a], r);
    return this;
  }
  return w(n) || (A(n) || Y(n) ? n = "" : A(e) ? (e = n, n = "") : (i = e, e = n, n = "")), z(i) || (i = e, e = void 0), i ? (x(tt(t), (a, c) => {
    const [l, T] = mt(c), m = gt(l), U = l in Dt, u = l in pt;
    m && this.each((g, d) => {
      if (!y(d) && !L(d) && !V(d))
        return;
      const f = function(h) {
        if (h.target[`___i${h.type}`])
          return h.stopImmediatePropagation();
        if (h.namespace && !Ft(T, h.namespace.split(ht)) || !n && (u && (h.target !== d || h.___ot === m) || U && h.relatedTarget && d.contains(h.relatedTarget)))
          return;
        let p = d;
        if (n) {
          let k = h.target;
          for (; !Ot(k, n); )
            if (k === d || (k = k.parentNode, !k))
              return;
          p = k;
        }
        Object.defineProperty(h, "currentTarget", {
          configurable: !0,
          get() {
            return p;
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
        const E = i.call(p, h, h.___td);
        r && K(d, m, T, n, f), E === !1 && (h.preventDefault(), h.stopPropagation());
      };
      f.guid = i.guid = i.guid || s.guid++, En(d, m, T, n, f);
    });
  }), this) : this;
}
o.on = Sn;
function _n(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
o.one = _n;
const Nn = /\r?\n/g;
function Rn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Nn, `\r
`))}`;
}
const In = /file|reset|submit|button|image/i, zt = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    x(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || In.test(r.type) || zt.test(r.type) && !r.checked)
        return;
      const a = Ht(r);
      if (!A(a)) {
        const c = Q(a) ? a : [a];
        x(c, (l, T) => {
          t += Rn(r.name, T);
        });
      }
    });
  }), t.slice(1);
};
function On(t) {
  var n = window.getComputedStyle(t);
  return n.display === "none" || parseInt(n.height) === 0;
}
function vn() {
  return this.filter(function(t, n) {
    return !On(n);
  });
}
function Hn(t) {
  return t instanceof Element ? "element" : Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/, "$1").toLowerCase();
}
const Bn = `.print-container{font-size:9pt;line-height:18pt;letter-spacing:1px;width:210mm;margin:0 auto;box-sizing:border-box;background:#fff!important;color:#000!important}.print-container table{line-height:1.5}.break-page{box-shadow:0 0 8px 4px #ccc;padding:50px;margin-top:20px;page-break-after:always;position:relative;min-height:294mm;box-sizing:border-box}.break-page:first-child{margin-top:30px}.break-page:last-child{page-break-after:unset;margin-bottom:20px}table.break-table{border-collapse:collapse;border:1px solid black}table.break-table td,table.break-table th{border:1px solid black}@media print{.print-container{width:100%!important}.print-container .break-page{box-shadow:none;margin:0;max-height:294mm}.break-page:first-child{margin-top:0}img{max-height:902px}@page{size:a4;padding:0;margin:0}}
`;
function Mn(t, n = 500, e = 500) {
  n = isNaN(parseInt(n)) ? 500 : parseInt(n), e = isNaN(parseInt(e)) ? 500 : parseInt(e), n < 1 && (n = 10), e < 1 && (e = 10), r(Bn);
  const i = function() {
    let g = document.createElement("div");
    g.id = "mm", g.style.width = "1mm", document.querySelector("body").appendChild(g);
    let d = document.getElementById("mm").getBoundingClientRect();
    return s("#mm").remove(), d.width;
  }();
  s("body").__proto__.notHidden = vn;
  function r(u) {
    if (typeof u != "string") {
      console.error("print style is invalid");
      return;
    }
    if (document.getElementById("print-style"))
      return;
    const g = document.createElement("style");
    g.id = "print-style", g.setAttribute("type", "text/css"), g.innerHTML = u, document.head.append(g);
  }
  function a() {
    const u = Hn(t);
    let g;
    ["string", "element", "htmlcollection"].includes(u) && (g = s(t)), g != null && g.length && (g.addClass("print-container"), g.children().notHidden().each(function() {
      s(this).addClass("break-page"), s(this).children().notHidden().each(function(h, p) {
        p.tagName.toLowerCase() === "table" ? s(this).addClass("break-table") : s(this).addClass("need-break");
      });
    })), console.log("start paging"), s("table.break-table").children("thead").addClass("need-break thead_break"), s("table.break-table tbody tr").addClass("need-break table_break");
    let d = 0, f = c();
    for (; f.length; ) {
      if (++d > e) {
        console.error(`Pagination operation exceeds limit (${e} pages), you can change this limit in the initialization method.`);
        break;
      }
      f = c(l(f));
    }
    console.log("end paging");
  }
  function c(u) {
    return u ? u.nextAll(".break-page").notHidden().first() : s(".break-page").notHidden().first();
  }
  function l(u, g = 0) {
    if (u.outerHeight() <= 294 * i + 5)
      return u;
    if (++g > n)
      return console.error(`Pagination operation exceeds recursion limit (${n} pages), you can change this limit in the initialization method.`), u;
    const d = u.offset().top, f = parseInt(u.css("paddingBottom"));
    let h = !1, p = null;
    return u.find(".need-break").notHidden().each(function(E, k) {
      if (s(this).offset().top + s(this).outerHeight() - d + parseInt(s(this).css("marginBottom")) <= 294 * i - f)
        return !0;
      h = !0;
      let H = u.attr("class");
      return u.hasClass("new-break-page") || (H += " new-break-page"), p = s(`<div class="${H}" style="display:block"></div>`), E === 0 ? (console.warn("There is an element that exceeds the page height, and the page height is fixed to avoid pagnation bug."), console.log(this), u.css("overflow", "hidden"), u.css("height", `${294 * i}px`), p.append(s(this).nextAll().clone()), s(this).nextAll().remove(), u.after(p), !1) : (s(this).hasClass("table_break") ? U.call(this, p, E) : s(this).hasClass("thead_break") ? m.call(this, p) : T.call(this, p), u.after(p), !1);
    }), h ? l(p, g) : u;
  }
  function T(u) {
    !u || !this || (u.append(s(this).clone()), u.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
  }
  function m(u) {
    !u || !this || (u.append(s(this).parents("table").clone()), u.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove());
  }
  function U(u, g) {
    var d = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
    d.append("<tbody></tbody>");
    var f = s(this);
    let h = g > 1;
    if (g == 1 && (h = s(this).find(".need-break").notHidden().not(".thead_break").length !== 0), h) {
      d.prepend(f.parents("table").children("thead").clone());
      let p = s(this).prevAll("tr"), E = [], k = [];
      for (let b = p.length - 1; b >= 0; b--) {
        const W = p[b], q = b === p.length - 1, $ = s(W).find("td");
        if (q || (E = E.map((S) => S - 1 > 0 ? S - 1 : 0)), q) {
          let S = 0;
          for (let R = 0, P = $.length; R < P; R++)
            S += +s($[R]).attr("colspan") || 1;
          E = new Array(S).fill(0);
        }
        for (let S = 0, R = $.length; S < R; S++) {
          const P = $[S], J = +s(P).attr("rowspan") || 1, j = +s(P).attr("colspan") || 1;
          if (j > 0) {
            let D = E.findIndex((C) => C < 1);
            for (let C = 0; C < j; C++)
              E[D + C] = (E[D + C] || 0) + J;
            if (J > 1) {
              k[D] = [b, S, J, j];
              for (let C = 1; C < j; C++)
                k[D + C] = void 0;
            }
          }
        }
      }
      let H = E.map((b) => b > 1 ? "N" : 0);
      f.find("td").each(function(b) {
        const W = +s(this).attr("colspan") || 1, q = H.findIndex(($) => $ === 0);
        for (let $ = 0; $ < W; $++)
          H[q + $] = b + 1;
      });
      const bt = {};
      for (let b = 0; b < k.length; b++) {
        if (!k[b])
          continue;
        const [W, q, $, S] = k[b] || [], R = $ - W - 1;
        if (R <= 0)
          continue;
        const P = s(p[W]).find("td")[q];
        s(P).attr("rowspan", $ - R);
        const J = s(P).clone().attr("rowspan", R), j = "splitTd" + b;
        bt[j] = J;
        let D = H.findIndex((C) => C === "N");
        if (D !== -1)
          for (let C = 0; C < S; C++)
            H[D + C] = j;
      }
      const et = f.clone().empty();
      [...new Set(H)].forEach((b) => {
        typeof b == "string" ? et.append(bt[b]) : et.append(
          f.find("td").eq(b - 1).clone()
        );
      });
      const Wt = f.prev("tr").length === 0;
      d.children("tbody").append(et.clone()), d.children("tbody").append(f.nextAll().clone()), u.append(d), u.append(f.parents("table").nextAll().clone()), f.nextAll().remove(), f.parents("table").nextAll().remove(), Wt ? f.parents("table").remove() : f.remove();
    } else {
      f.nextAll().length ? (d.prepend(f.parents("table").children("thead").clone()), d.children("tbody").append(f.nextAll().clone()), f.nextAll().remove(), u.append(d), u.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove()) : (u.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove());
      let p = s(
        `<div style="height:${294 * i - 100}px;overflow:hidden;"></div>`
      );
      f.parents(".break-page").append(p), p.append(f.parents("table"));
    }
  }
  return {
    execPaging: a
  };
}
export {
  Mn as default
};
