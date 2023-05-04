const _ = document, K = window, kt = _.documentElement, D = _.createElement.bind(_), Rt = D("div"), st = D("table"), Ut = D("tbody"), Ct = D("tr"), { isArray: tt, prototype: _t } = Array, { concat: zt, filter: ft, indexOf: Nt, map: Lt, push: Jt, slice: vt, some: at, splice: Yt } = _t, Gt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Kt = /<.+>/, Qt = /^\w+$/;
function lt(t, n) {
  const e = Zt(n);
  return !t || !e && !j(n) && !p(n) ? [] : !e && Xt.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && Qt.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
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
      if (i = Gt.test(n) && j(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : Kt.test(n) ? It(n) : ct(r) ? r.find(n) : b(r) ? s(r).find(n) : lt(n, r), !i)
        return;
    } else if (F(n))
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
function j(t) {
  return !!t && t.nodeType === 9;
}
function Zt(t) {
  return !!t && t.nodeType === 11;
}
function p(t) {
  return !!t && t.nodeType === 1;
}
function tn(t) {
  return !!t && t.nodeType === 3;
}
function nn(t) {
  return typeof t == "boolean";
}
function F(t) {
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
s.isFunction = F;
s.isArray = tt;
s.isNumeric = Ot;
s.isPlainObject = ht;
function m(t, n, e) {
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
s.each = m;
o.each = function(t) {
  return m(this, t);
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
    p(u) && m(e, (c, a) => {
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
    p(i) && m(n, (r, u) => {
      i.removeAttribute(u);
    });
  });
};
function rn(t, n) {
  if (t) {
    if (b(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !p(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return G(e) ? void 0 : e;
      }
      return $(n) ? this : G(n) ? this.removeAttr(t) : this.each((e, i) => {
        p(i) && i.setAttribute(t, n);
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
  return !!t && at.call(this, (n) => p(n) && n.classList.contains(t));
};
o.get = function(t) {
  return $(t) ? vt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
  return $(t) ? this.get().map((n) => p(n) || tn(n) ? n.textContent : "").join("") : this.each((n, e) => {
    p(e) && (e.textContent = t);
  });
}
o.text = sn;
function N(t, n, e) {
  if (!p(t))
    return;
  const i = K.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function S(t, n) {
  return parseInt(N(t, n), 10) || 0;
}
function xt(t, n) {
  return S(t, `border${n ? "Left" : "Top"}Width`) + S(t, `padding${n ? "Left" : "Top"}`) + S(t, `padding${n ? "Right" : "Bottom"}`) + S(t, `border${n ? "Right" : "Bottom"}Width`);
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
  return b(t) ? (n, e) => Ht(e, t) : F(t) ? t : ct(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
o.filter = function(t) {
  const n = it(t);
  return s(ft.call(this, (e, i) => n.call(e, i, e)));
};
function O(t, n) {
  return n ? t.filter(n) : t;
}
o.detach = function(t) {
  return O(this, t).each((n, e) => {
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
  return this.filter((e, i) => (!b(t) || p(i)) && !n.call(i, e, i));
};
function L(t, n, e, i) {
  const r = [], u = F(n), c = i && it(i);
  for (let a = 0, h = t.length; a < h; a++)
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
  return t.multiple && t.options ? L(ft.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function fn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Vt.test(e.type)) {
      const r = tt(t) ? Lt.call(t, String) : G(t) ? [] : [String(t)];
      i ? m(e.options, (u, c) => {
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
function A(t) {
  return t.length > 1 ? ft.call(t, (n, e, i) => Nt.call(i, n) === e) : t;
}
s.unique = A;
o.add = function(t, n) {
  return s(A(this.get().concat(s(t, n).get())));
};
o.children = function(t) {
  return O(s(A(L(this, (n) => n.children))), t);
};
o.parent = function(t) {
  return O(s(A(L(this, "parentNode"))), t);
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
  return O(s(A(L(this, (n) => s(n).parent().children().not(n)))), t);
};
o.find = function(t) {
  return s(A(L(this, (n) => lt(t, n))));
};
const an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ln = /^$|^module$|\/(java|ecma)script/i, hn = ["type", "src", "nonce", "noModule"];
function dn(t, n) {
  const e = s(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (ln.test(r.type) && kt.contains(r)) {
      const u = D("script");
      u.text = r.textContent.replace(an, ""), m(hn, (c, a) => {
        r[a] && (u[a] = r[a]);
      }), n.head.insertBefore(u, null), n.head.removeChild(u);
    }
  });
}
function pn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && dn(n, t.ownerDocument);
}
function H(t, n, e, i, r, u, c, a) {
  return m(t, (h, l) => {
    m(s(l), (v, g) => {
      m(s(n), (U, w) => {
        const C = e ? g : w, f = e ? w : g, k = e ? v : U;
        pn(C, k ? f.cloneNode(!0) : f, i, r, !k);
      }, a);
    }, c);
  }, u), n;
}
o.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function gn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if ($(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    p(i) && (n ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = gn;
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
  return s(A(L(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, n, e) {
  return O(s(A(L(this, "nextElementSibling", n, e))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
o.parents = function(t, n) {
  return O(s(A(L(this, "parentElement", !0, n))), t);
};
o.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
o.prev = function(t, n, e) {
  return O(s(A(L(this, "previousElementSibling", n, e))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
o.map = function(t) {
  return s(zt.apply([], Lt.call(this, (n, e) => t.call(n, e, n))));
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
  return s(vt.call(this, t, n));
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
    if (r !== t && p(r)) {
      const u = s(r).offset();
      e.top -= u.top + S(r, "borderTopWidth"), e.left -= u.left + S(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - S(t, "marginTop"),
    left: e.left - S(t, "marginLeft")
  };
};
const Pt = {
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
      return t = Pt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Pt[t] || t];
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
    m(r, (u, c) => {
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
function Mt(t, n, e = pt(t)) {
  return !e && !xn[t] && Ot(n) ? `${n}px` : n;
}
function Tn(t, n) {
  if (b(t)) {
    const e = pt(t);
    return t = Cn(t, e), arguments.length < 2 ? this[0] && N(this[0], t, e) : t ? (n = Mt(t, n, e), this.each((i, r) => {
      p(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
o.css = Tn;
function jt(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const $n = /^\s+|\s+$/;
function Et(t, n) {
  const e = t.dataset[n] || t.dataset[dt(n)];
  return $n.test(e) ? e : jt(JSON.parse, e);
}
function En(t, n, e) {
  e = jt(JSON.stringify, e), t.dataset[dt(n)] = e;
}
function Sn(t, n) {
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
o.data = Sn;
function Dt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
m([!0, !1], (t, n) => {
  m(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    o[r] = function(u) {
      if (this[0])
        return V(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : j(this[0]) ? Dt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (u && n ? S(this[0], `margin${e ? "Top" : "Left"}`) + S(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
m(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  o[e] = function(i) {
    if (!this[0])
      return $(i) ? void 0 : this;
    if (!arguments.length)
      return V(this[0]) ? this[0].document.documentElement[`client${n}`] : j(this[0]) ? Dt(this[0], n) : this[0].getBoundingClientRect()[e] - xt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((u, c) => {
      if (!p(c))
        return;
      const a = N(c, "boxSizing");
      c.style[e] = Mt(e, r + (a === "border-box" ? xt(c, !t) : 0));
    });
  };
});
const St = "___cd";
o.toggle = function(t) {
  return this.each((n, e) => {
    if (!p(e))
      return;
    const i = Tt(e);
    ($(t) ? i : t) ? (e.style.display = e[St] || "", Tt(e) && (e.style.display = on(e.tagName))) : i || (e[St] = N(e, "display"), e.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const At = "___ce", gt = ".", mt = { focus: "focusin", blur: "focusout" }, Ft = { mouseenter: "mouseover", mouseleave: "mouseout" }, An = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
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
    const c = An.test(u) ? "MouseEvents" : "HTMLEvents";
    t = _.createEvent(c), t.initEvent(u, !0, !0), t.namespace = r.join(gt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in mt;
  return this.each((i, r) => {
    e && F(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Wt(t) {
  return t[At] = t[At] || {};
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
    u[n] && (u[n] = u[n].filter(([c, a, h]) => {
      if (r && h.guid !== r.guid || !qt(c, e) || i && i !== a)
        return !0;
      t.removeEventListener(n, h);
    }));
  else
    for (n in u)
      Z(t, n, e, i, r);
}
o.off = function(t, n, e) {
  if ($(t))
    this.each((i, r) => {
      !p(r) && !j(r) && !V(r) || Z(r);
    });
  else if (b(t))
    F(n) && (e = n, n = ""), m(et(t), (i, r) => {
      const [u, c] = bt(r), a = yt(u);
      this.each((h, l) => {
        !p(l) && !j(l) && !V(l) || Z(l, a, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return O(this, t).detach().off(), this;
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
  return b(n) || ($(n) || G(n) ? n = "" : $(e) ? (e = n, n = "") : (i = e, e = n, n = "")), F(i) || (i = e, e = void 0), i ? (m(et(t), (u, c) => {
    const [a, h] = bt(c), l = yt(a), v = a in Ft, g = a in mt;
    l && this.each((U, w) => {
      if (!p(w) && !j(w) && !V(w))
        return;
      const C = function(f) {
        if (f.target[`___i${f.type}`])
          return f.stopImmediatePropagation();
        if (f.namespace && !qt(h, f.namespace.split(gt)) || !n && (g && (f.target !== w || f.___ot === l) || v && f.relatedTarget && w.contains(f.relatedTarget)))
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
        r && Z(w, l, h, n, C), X === !1 && (f.preventDefault(), f.stopPropagation());
      };
      C.guid = i.guid = i.guid || s.guid++, kn(w, l, h, n, C);
    });
  }), this) : this;
}
o.on = Rn;
function _n(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
o.one = _n;
const Nn = /\r?\n/g;
function Ln(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Nn, `\r
`))}`;
}
const vn = /file|reset|submit|button|image/i, Vt = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    m(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || vn.test(r.type) || Vt.test(r.type) && !r.checked)
        return;
      const u = Bt(r);
      if (!$(u)) {
        const c = tt(u) ? u : [u];
        m(c, (a, h) => {
          t += Ln(r.name, h);
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
  return t instanceof Element ? "element" : Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/, "$1").toLowerCase();
}
function Bn(t) {
  const n = function() {
    let a = document.createElement("div");
    a.id = "mm", a.style.width = "1mm", document.querySelector("body").appendChild(a);
    let h = document.getElementById("mm").getBoundingClientRect();
    return s("#mm").remove(), h.width;
  }();
  let e = 500;
  s("body").__proto__.notHidden = Hn;
  function i() {
    const c = In(t);
    let a;
    ["string", "element", "htmlcollection"].includes(c) && (a = s(t)), a != null && a.length && (a.addClass("print-container"), a.children().notHidden().each(function() {
      s(this).addClass("break-page"), s(this).children().notHidden().each(function(l, v) {
        v.tagName.toLowerCase() === "table" ? s(this).addClass("break-table") : s(this).addClass("need-break");
      });
    })), console.log("start paging"), s("table.break-table").children("thead").addClass("need-break thead_break"), s("table.break-table tbody tr").addClass("need-break table_break");
    let h = r();
    for (; h.length; )
      h = r(u(h));
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
    const h = c.offset().top, l = parseInt(c.css("paddingBottom"));
    let v = !1, g = null;
    return c.find(".need-break").notHidden().each(function(U, w) {
      if (s(this).offset().top + s(this).outerHeight() - h + parseInt(s(this).css("marginBottom")) > 294 * n - l) {
        v = !0;
        let k = c.attr("class");
        if (c.hasClass("new-break-page") || (k += " new-break-page"), g = s(`<div class="${k}" style="display:block"></div>`), s(this).hasClass("table_break")) {
          var C = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
          C.append("<tbody></tbody>");
          var f = s(this);
          let X = U > 1;
          if (U == 1 && (X = s(this).find(".need-break").notHidden().not(".thead_break").length !== 0), X) {
            C.prepend(f.parents("table").children("thead").clone());
            let x = s(this).prevAll("tr"), I = [], z = [];
            for (let d = x.length - 1; d >= 0; d--) {
              const W = x[d], q = d === x.length - 1, T = s(W).find("td");
              if (q || (I = I.map((E) => E - 1 > 0 ? E - 1 : 0)), q) {
                let E = 0;
                for (let R = 0, B = T.length; R < B; R++)
                  E += +s(T[R]).attr("colspan") || 1;
                I = new Array(E).fill(0);
              }
              for (let E = 0, R = T.length; E < R; E++) {
                const B = T[E], Y = +s(B).attr("rowspan") || 1, P = +s(B).attr("colspan") || 1;
                if (P > 0) {
                  let M = I.findIndex((y) => y < 1);
                  for (let y = 0; y < P; y++)
                    I[M + y] = (I[M + y] || 0) + Y;
                  if (Y > 1) {
                    z[M] = [d, E, Y, P];
                    for (let y = 1; y < P; y++)
                      z[M + y] = void 0;
                  }
                }
              }
            }
            let J = I.map((d) => d > 1 ? "N" : 0);
            f.find("td").each(function(d) {
              const W = +s(this).attr("colspan") || 1, q = J.findIndex((T) => T === 0);
              for (let T = 0; T < W; T++)
                J[q + T] = d + 1;
            });
            const wt = {};
            for (let d = 0; d < z.length; d++) {
              if (!z[d])
                continue;
              const [W, q, T, E] = z[d] || [], R = T - W - 1;
              if (R <= 0)
                continue;
              const B = s(x[W]).find("td")[q];
              s(B).attr("rowspan", T - R);
              const Y = s(B).clone().attr("rowspan", R), P = "splitTd" + d;
              wt[P] = Y;
              let M = J.findIndex((y) => y === "N");
              if (M !== -1)
                for (let y = 0; y < E; y++)
                  J[M + y] = P;
            }
            const rt = f.clone().empty();
            [...new Set(J)].forEach((d) => {
              typeof d == "string" ? rt.append(wt[d]) : rt.append(
                f.find("td").eq(d - 1).clone()
              );
            }), C.children("tbody").append(rt.clone()), C.children("tbody").append(f.nextAll().clone()), g.append(C), g.append(f.parents("table").nextAll().clone()), f.nextAll().remove(), f.parents("table").nextAll().remove(), f.remove();
          } else {
            f.nextAll().length ? (C.prepend(f.parents("table").children("thead").clone()), C.children("tbody").append(f.nextAll().clone()), f.nextAll().remove(), g.append(C), g.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove()) : (g.append(f.parents("table").nextAll().clone()), f.parents("table").nextAll().remove());
            let x = s(
              `<div style="height:${294 * n - 100}px;overflow:hidden;"></div>`
            );
            f.parents(".break-page").append(x), x.append(f.parents("table"));
          }
        } else
          s(this).hasClass("thead_break") ? (g.append(s(this).parents("table").clone()), g.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove()) : (g.append(s(this).clone()), g.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
        return c.after(g), !1;
      }
    }), v ? u(g, a) : c;
  }
  return {
    execPaging: i
  };
}
export {
  Bn as default
};
