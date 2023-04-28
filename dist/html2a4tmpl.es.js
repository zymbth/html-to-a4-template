const _ = document, K = window, kt = _.documentElement, D = _.createElement.bind(_), Rt = D("div"), st = D("table"), Ut = D("tbody"), Ct = D("tr"), { isArray: tt, prototype: _t } = Array, { concat: zt, filter: ft, indexOf: Nt, map: vt, push: Jt, slice: Lt, some: at, splice: Yt } = _t, Gt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Kt = /<.+>/, Qt = /^\w+$/;
function lt(t, n) {
  const e = Zt(n);
  return !t || !e && !P(n) && !d(n) ? [] : !e && Xt.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && Qt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class nt {
  constructor(n, e) {
    if (!n)
      return;
    if (ct(n))
      return n;
    let i = n;
    if (b(n)) {
      const r = e || _;
      if (i = Gt.test(n) && P(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Kt.test(n) ? It(n) : ct(r) ? r.find(n) : b(r) ? s(r).find(n) : lt(n, r), !i)
        return;
    } else if (j(n))
      return this.ready(n);
    (i.nodeType || i === K) && (i = [i]), this.length = i.length;
    for (let r = 0, u = this.length; r < u; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new nt(n, e);
  }
}
const o = nt.prototype, s = o.init;
s.fn = s.prototype = o;
o.length = 0;
o.splice = Yt;
typeof Symbol == "function" && (o[Symbol.iterator] = _t[Symbol.iterator]);
function ct(t) {
  return t instanceof nt;
}
function V(t) {
  return !!t && t === t.window;
}
function P(t) {
  return !!t && t.nodeType === 9;
}
function Zt(t) {
  return !!t && t.nodeType === 11;
}
function d(t) {
  return !!t && t.nodeType === 1;
}
function tn(t) {
  return !!t && t.nodeType === 3;
}
function nn(t) {
  return typeof t == "boolean";
}
function j(t) {
  return typeof t == "function";
}
function b(t) {
  return typeof t == "string";
}
function $(t) {
  return t === void 0;
}
function G(t) {
  return t === null;
}
function Ot(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ht(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
s.isWindow = V;
s.isFunction = j;
s.isArray = tt;
s.isNumeric = Ot;
s.isPlainObject = ht;
function g(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (ht(t)) {
    const i = Object.keys(t);
    for (let r = 0, u = i.length; r < u; r++) {
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
s.each = g;
o.each = function(t) {
  return g(this, t);
};
o.empty = function() {
  return this.each((t, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function Q(...t) {
  const n = nn(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return Q(n, s, e);
  for (let r = 0; r < i; r++) {
    const u = t[r];
    for (const c in u)
      n && (tt(u[c]) || ht(u[c])) ? ((!e[c] || e[c].constructor !== u[c].constructor) && (e[c] = new u[c].constructor()), Q(n, e[c], u[c])) : e[c] = u[c];
  }
  return e;
}
s.extend = Q;
o.extend = function(t) {
  return Q(o, t);
};
const en = /\S+/g;
function et(t) {
  return b(t) ? t.match(en) || [] : [];
}
o.toggleClass = function(t, n) {
  const e = et(t), i = !$(n);
  return this.each((r, u) => {
    d(u) && g(e, (c, a) => {
      i ? n ? u.classList.add(a) : u.classList.remove(a) : u.classList.toggle(a);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const n = et(t);
  return this.each((e, i) => {
    d(i) && g(n, (r, u) => {
      i.removeAttribute(u);
    });
  });
};
function rn(t, n) {
  if (t) {
    if (b(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !d(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return G(e) ? void 0 : e;
      }
      return $(n) ? this : G(n) ? this.removeAttr(t) : this.each((e, i) => {
        d(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
o.attr = rn;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && at.call(this, (n) => d(n) && n.classList.contains(t));
};
o.get = function(t) {
  return $(t) ? Lt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function sn(t) {
  return $(t) ? this.get().map((n) => d(n) || tn(n) ? n.textContent : "").join("") : this.each((n, e) => {
    d(e) && (e.textContent = t);
  });
}
o.text = sn;
function N(t, n, e) {
  if (!d(t))
    return;
  const i = K.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function A(t, n) {
  return parseInt(N(t, n), 10) || 0;
}
function xt(t, n) {
  return A(t, `border${n ? "Left" : "Top"}Width`) + A(t, `padding${n ? "Left" : "Top"}`) + A(t, `padding${n ? "Right" : "Bottom"}`) + A(t, `border${n ? "Right" : "Bottom"}Width`);
}
const ot = {};
function on(t) {
  if (ot[t])
    return ot[t];
  const n = D(t);
  _.body.insertBefore(n, null);
  const e = N(n, "display");
  return _.body.removeChild(n), ot[t] = e !== "none" ? e : "block";
}
function Tt(t) {
  return N(t, "display") === "none";
}
function Ht(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function it(t) {
  return b(t) ? (n, e) => Ht(e, t) : j(t) ? t : ct(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
o.filter = function(t) {
  const n = it(t);
  return s(ft.call(this, (e, i) => n.call(e, i, e)));
};
function L(t, n) {
  return n ? t.filter(n) : t;
}
o.detach = function(t) {
  return L(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const un = /^\s*<(\w+)[^>]*>/, cn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, $t = {
  "*": Rt,
  tr: Ut,
  td: Ct,
  th: Ct,
  thead: st,
  tbody: st,
  tfoot: st
};
function It(t) {
  if (!b(t))
    return [];
  if (cn.test(t))
    return [D(RegExp.$1)];
  const n = un.test(t) && RegExp.$1, e = $t[n] || $t["*"];
  return e.innerHTML = t, s(e.childNodes).detach().get();
}
s.parseHTML = It;
o.has = function(t) {
  const n = b(t) ? (e, i) => lt(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
o.not = function(t) {
  const n = it(t);
  return this.filter((e, i) => (!b(t) || d(i)) && !n.call(i, e, i));
};
function v(t, n, e, i) {
  const r = [], u = j(n), c = i && it(i);
  for (let a = 0, m = t.length; a < m; a++)
    if (u) {
      const l = n(t[a]);
      l.length && Jt.apply(r, l);
    } else {
      let l = t[a][n];
      for (; l != null && !(i && c(-1, l)); )
        r.push(l), l = e ? l[n] : null;
    }
  return r;
}
function Bt(t) {
  return t.multiple && t.options ? v(ft.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function fn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Vt.test(e.type)) {
      const r = tt(t) ? vt.call(t, String) : G(t) ? [] : [String(t)];
      i ? g(e.options, (u, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = $(t) || G(t) ? "" : t;
  }) : this[0] && Bt(this[0]);
}
o.val = fn;
o.is = function(t) {
  const n = it(t);
  return at.call(this, (e, i) => n.call(e, i, e));
};
s.guid = 1;
function S(t) {
  return t.length > 1 ? ft.call(t, (n, e, i) => Nt.call(i, n) === e) : t;
}
s.unique = S;
o.add = function(t, n) {
  return s(S(this.get().concat(s(t, n).get())));
};
o.children = function(t) {
  return L(s(S(v(this, (n) => n.children))), t);
};
o.parent = function(t) {
  return L(s(S(v(this, "parentNode"))), t);
};
o.index = function(t) {
  const n = t ? s(t)[0] : this[0], e = t ? this : s(n).parent().children();
  return Nt.call(e, n);
};
o.closest = function(t) {
  const n = this.filter(t);
  if (n.length)
    return n;
  const e = this.parent();
  return e.length ? e.closest(t) : n;
};
o.siblings = function(t) {
  return L(s(S(v(this, (n) => s(n).parent().children().not(n)))), t);
};
o.find = function(t) {
  return s(S(v(this, (n) => lt(t, n))));
};
const an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ln = /^$|^module$|\/(java|ecma)script/i, hn = ["type", "src", "nonce", "noModule"];
function dn(t, n) {
  const e = s(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (ln.test(r.type) && kt.contains(r)) {
      const u = D("script");
      u.text = r.textContent.replace(an, ""), g(hn, (c, a) => {
        r[a] && (u[a] = r[a]);
      }), n.head.insertBefore(u, null), n.head.removeChild(u);
    }
  });
}
function pn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && dn(n, t.ownerDocument);
}
function O(t, n, e, i, r, u, c, a) {
  return g(t, (m, l) => {
    g(s(l), (F, p) => {
      g(s(n), (U, w) => {
        const C = e ? p : w, f = e ? w : p, k = e ? F : U;
        pn(C, k ? f.cloneNode(!0) : f, i, r, !k);
      }, a);
    }, c);
  }, u), n;
}
o.after = function() {
  return O(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return O(arguments, this, !1, !1, !0);
};
function gn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if ($(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    d(i) && (n ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = gn;
o.appendTo = function(t) {
  return O(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = s(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return O(arguments, this, !1, !0);
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
  return O(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return O(arguments, this, !0, !0);
};
o.prepend = function() {
  return O(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return O(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return s(S(v(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, n, e) {
  return L(s(S(v(this, "nextElementSibling", n, e))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
o.parents = function(t, n) {
  return L(s(S(v(this, "parentElement", !0, n))), t);
};
o.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
o.prev = function(t, n, e) {
  return L(s(S(v(this, "previousElementSibling", n, e))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
o.map = function(t) {
  return s(zt.apply([], vt.call(this, (n, e) => t.call(n, e, n))));
};
o.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && N(e, "position") === "static"; )
      e = e.offsetParent;
    return e || kt;
  });
};
o.slice = function(t, n) {
  return s(Lt.call(this, t, n));
};
const mn = /-([a-z])/g;
function dt(t) {
  return t.replace(mn, (n, e) => e.toUpperCase());
}
o.ready = function(t) {
  const n = () => setTimeout(t, 0, s);
  return _.readyState !== "loading" ? n() : _.addEventListener("DOMContentLoaded", n), this;
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
    top: n.top + K.pageYOffset,
    left: n.left + K.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = N(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && N(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && d(r)) {
      const u = s(r).offset();
      e.top -= u.top + A(r, "borderTopWidth"), e.left -= u.left + A(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - A(t, "marginTop"),
    left: e.left - A(t, "marginLeft")
  };
};
const Mt = {
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
    if (b(t))
      return t = Mt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Mt[t] || t];
  });
};
const yn = /^--/;
function pt(t) {
  return yn.test(t);
}
const ut = {}, { style: bn } = Rt, wn = ["webkit", "moz", "ms"];
function Cn(t, n = pt(t)) {
  if (n)
    return t;
  if (!ut[t]) {
    const e = dt(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${wn.join(`${i} `)}${i}`.split(" ");
    g(r, (u, c) => {
      if (c in bn)
        return ut[t] = c, !1;
    });
  }
  return ut[t];
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
function Pt(t, n, e = pt(t)) {
  return !e && !xn[t] && Ot(n) ? `${n}px` : n;
}
function Tn(t, n) {
  if (b(t)) {
    const e = pt(t);
    return t = Cn(t, e), arguments.length < 2 ? this[0] && N(this[0], t, e) : t ? (n = Pt(t, n, e), this.each((i, r) => {
      d(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
o.css = Tn;
function Dt(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const $n = /^\s+|\s+$/;
function Et(t, n) {
  const e = t.dataset[n] || t.dataset[dt(n)];
  return $n.test(e) ? e : Dt(JSON.parse, e);
}
function En(t, n, e) {
  e = Dt(JSON.stringify, e), t.dataset[dt(n)] = e;
}
function An(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = Et(this[0], i);
    return e;
  }
  if (b(t))
    return arguments.length < 2 ? this[0] && Et(this[0], t) : $(n) ? this : this.each((e, i) => {
      En(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
o.data = An;
function jt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
g([!0, !1], (t, n) => {
  g(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    o[r] = function(u) {
      if (this[0])
        return V(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : P(this[0]) ? jt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (u && n ? A(this[0], `margin${e ? "Top" : "Left"}`) + A(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
g(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  o[e] = function(i) {
    if (!this[0])
      return $(i) ? void 0 : this;
    if (!arguments.length)
      return V(this[0]) ? this[0].document.documentElement[`client${n}`] : P(this[0]) ? jt(this[0], n) : this[0].getBoundingClientRect()[e] - xt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((u, c) => {
      if (!d(c))
        return;
      const a = N(c, "boxSizing");
      c.style[e] = Pt(e, r + (a === "border-box" ? xt(c, !t) : 0));
    });
  };
});
const At = "___cd";
o.toggle = function(t) {
  return this.each((n, e) => {
    if (!d(e))
      return;
    const i = Tt(e);
    ($(t) ? i : t) ? (e.style.display = e[At] || "", Tt(e) && (e.style.display = on(e.tagName))) : i || (e[At] = N(e, "display"), e.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const St = "___ce", gt = ".", mt = { focus: "focusin", blur: "focusout" }, Ft = { mouseenter: "mouseover", mouseleave: "mouseout" }, Sn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function yt(t) {
  return Ft[t] || mt[t] || t;
}
function bt(t) {
  const n = t.split(gt);
  return [n[0], n.slice(1).sort()];
}
o.trigger = function(t, n) {
  if (b(t)) {
    const [i, r] = bt(t), u = yt(i);
    if (!u)
      return this;
    const c = Sn.test(u) ? "MouseEvents" : "HTMLEvents";
    t = _.createEvent(c), t.initEvent(u, !0, !0), t.namespace = r.join(gt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in mt;
  return this.each((i, r) => {
    e && j(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Wt(t) {
  return t[St] = t[St] || {};
}
function kn(t, n, e, i, r) {
  const u = Wt(t);
  u[n] = u[n] || [], u[n].push([e, i, r]), t.addEventListener(n, r);
}
function qt(t, n) {
  return !n || !at.call(n, (e) => t.indexOf(e) < 0);
}
function Z(t, n, e, i, r) {
  const u = Wt(t);
  if (n)
    u[n] && (u[n] = u[n].filter(([c, a, m]) => {
      if (r && m.guid !== r.guid || !qt(c, e) || i && i !== a)
        return !0;
      t.removeEventListener(n, m);
    }));
  else
    for (n in u)
      Z(t, n, e, i, r);
}
o.off = function(t, n, e) {
  if ($(t))
    this.each((i, r) => {
      !d(r) && !P(r) && !V(r) || Z(r);
    });
  else if (b(t))
    j(n) && (e = n, n = ""), g(et(t), (i, r) => {
      const [u, c] = bt(r), a = yt(u);
      this.each((m, l) => {
        !d(l) && !P(l) && !V(l) || Z(l, a, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return L(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return s(t).replaceWith(this), this;
};
function Rn(t, n, e, i, r) {
  if (!b(t)) {
    for (const u in t)
      this.on(u, n, e, t[u], r);
    return this;
  }
  return b(n) || ($(n) || G(n) ? n = "" : $(e) ? (e = n, n = "") : (i = e, e = n, n = "")), j(i) || (i = e, e = void 0), i ? (g(et(t), (u, c) => {
    const [a, m] = bt(c), l = yt(a), F = a in Ft, p = a in mt;
    l && this.each((U, w) => {
      if (!d(w) && !P(w) && !V(w))
        return;
      const C = function(f) {
        if (f.target[`___i${f.type}`])
          return f.stopImmediatePropagation();
        if (f.namespace && !qt(m, f.namespace.split(gt)) || !n && (p && (f.target !== w || f.___ot === l) || F && f.relatedTarget && w.contains(f.relatedTarget)))
          return;
        let k = w;
        if (n) {
          let x = f.target;
          for (; !Ht(x, n); )
            if (x === w || (x = x.parentNode, !x))
              return;
          k = x;
        }
        Object.defineProperty(f, "currentTarget", {
          configurable: !0,
          get() {
            return k;
          }
        }), Object.defineProperty(f, "delegateTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(f, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const X = i.call(k, f, f.___td);
        r && Z(w, l, m, n, C), X === !1 && (f.preventDefault(), f.stopPropagation());
      };
      C.guid = i.guid = i.guid || s.guid++, kn(w, l, m, n, C);
    });
  }), this) : this;
}
o.on = Rn;
function _n(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
o.one = _n;
const Nn = /\r?\n/g;
function vn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Nn, `\r
`))}`;
}
const Ln = /file|reset|submit|button|image/i, Vt = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    g(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Ln.test(r.type) || Vt.test(r.type) && !r.checked)
        return;
      const u = Bt(r);
      if (!$(u)) {
        const c = tt(u) ? u : [u];
        g(c, (a, m) => {
          t += vn(r.name, m);
        });
      }
    });
  }), t.slice(1);
};
function On(t) {
  var n = window.getComputedStyle(t);
  return n.display === "none" || parseInt(n.height) === 0;
}
function Hn() {
  return this.filter(function(t, n) {
    return !On(n);
  });
}
function In(t) {
  const n = function() {
    let a = document.createElement("div");
    a.id = "mm", a.style.width = "1mm", document.querySelector("body").appendChild(a);
    let m = document.getElementById("mm").getBoundingClientRect();
    return s("#mm").remove(), m.width;
  }();
  let e = 500;
  s("#app").__proto__.notHidden = Hn, s(t).length && (s(t).addClass("print-container"), s(t).children().notHidden().each(function() {
    s(this).addClass("break-page"), s(this).children().notHidden().each(function(c, a) {
      a.tagName === "table" ? s(this).addClass("break-table") : s(this).addClass("need-break");
    });
  }));
  function i() {
    console.log("start paging"), s("table.break-table").children("thead").addClass("need-break thead_break"), s("table.break-table tbody tr").addClass("need-break table_break");
    let c = r();
    for (; c.length; )
      c = r(u(c));
    console.log("end paging");
  }
  function r(c) {
    return c ? c.nextAll(".break-page").notHidden().first() : s(".break-page").notHidden().first();
  }
  function u(c, a = 0) {
    if (--e <= 0)
      throw new Error("Recursion error when breaking page");
    if (c.outerHeight() <= 294 * n + 5 || ++a > 50)
      return c;
    const m = c.offset().top, l = parseInt(c.css("paddingBottom"));
    let F = !1, p = null;
    return c.find(".need-break").notHidden().each(function(U, w) {
      if (s(this).offset().top + s(this).outerHeight() - m + parseInt(s(this).css("marginBottom")) > 294 * n - l) {
        F = !0;
        let k = c.attr("class");
        if (c.hasClass("new-break-page") || (k += " new-break-page"), p = s(`<div class="${k}" style="display:block"></div>`), s(this).hasClass("table_break")) {
          var C = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
          C.append("<tbody></tbody>");
          var f = s(this);
          let X = U > 1;
          if (U == 1 && (X = s(this).find(".need-break").notHidden().not(".thead_break").length !== 0), X) {
            C.prepend(f.parents("table").children("thead").clone());
            let x = s(this).prevAll("tr"), H = [], z = [];
            for (let h = x.length - 1; h >= 0; h--) {
              const W = x[h], q = h === x.length - 1, T = s(W).find("td");
              if (q || (H = H.map((E) => E - 1 > 0 ? E - 1 : 0)), q) {
                let E = 0;
                for (let R = 0, I = T.length; R < I; R++)
                  E += +s(T[R]).attr("colspan") || 1;
                H = new Array(E).fill(0);
              }
              for (let E = 0, R = T.length; E < R; E++) {
                const I = T[E], Y = +s(I).attr("rowspan") || 1, B = +s(I).attr("colspan") || 1;
                if (B > 0) {
                  let M = H.findIndex((y) => y < 1);
                  for (let y = 0; y < B; y++)
                    H[M + y] = (H[M + y] || 0) + Y;
                  if (Y > 1) {
                    z[M] = [h, E, Y, B];
                    for (let y = 1; y < B; y++)
                      z[M + y] = void 0;
                  }
                }
              }
            }
            let J = H.map((h) => h > 1 ? "N" : 0);
            f.find("td").each(function(h) {
              const W = +s(this).attr("colspan") || 1, q = J.findIndex((T) => T === 0);
              for (let T = 0; T < W; T++)
                J[q + T] = h + 1;
            });
            const wt = {};
            for (let h = 0; h < z.length; h++) {
              if (!z[h])
                continue;
              const [W, q, T, E] = z[h] || [], R = T - W - 1;
              if (R <= 0)
                continue;
              const I = s(x[W]).find("td")[q];
              s(I).attr("rowspan", T - R);
              const Y = s(I).clone().attr("rowspan", R), B = "splitTd" + h;
              wt[B] = Y;
              let M = J.findIndex((y) => y === "N");
              if (M !== -1)
                for (let y = 0; y < E; y++)
                  J[M + y] = B;
            }
            const rt = f.clone().empty();
            [...new Set(J)].forEach((h) => {
              typeof h == "string" ? rt.append(wt[h]) : rt.append(
                f.find("td").eq(h - 1).clone()
              );
            }), C.children("tbody").append(rt.clone()), C.children("tbody").append(f.nextAll().clone()), p.append(C), p.append(f.parents("table").nextAll().clone()), f.nextAll().remove(), f.parents("table").nextAll().remove(), f.remove();
          } else {
            f.nextAll().length ? (C.prepend(f.parents("table").children("thead").clone()), C.children("tbody").append(f.nextAll().clone()), f.nextAll().remove(), p.append(C), p.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove()) : (p.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove());
            let x = s(
              `<div style="height:${294 * n - 100}px;overflow:hidden;"></div>`
            );
            f.parents(".break-page").append(x), x.append(f.parents("table"));
          }
        } else
          s(this).hasClass("thead_break") ? (p.append(s(this).parents("table").clone()), p.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove()) : (p.append(s(this).clone()), p.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
        return c.after(p), !1;
      }
    }), F ? u(p, a) : c;
  }
  return {
    execPaging: i
  };
}
export {
  In as default
};
