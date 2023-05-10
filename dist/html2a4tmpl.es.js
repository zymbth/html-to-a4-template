const R = document, X = window, Et = R.documentElement, F = R.createElement.bind(R), St = F("div"), rt = F("table"), Vt = F("tbody"), xt = F("tr"), { isArray: Z, prototype: _t } = Array, { concat: Ut, filter: ct, indexOf: Nt, map: Rt, push: Jt, slice: vt, some: ut, splice: Yt } = _t, Gt = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xt = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Kt = /<.+>/, Qt = /^\w+$/;
function lt(t, e) {
  const n = Zt(e);
  return !t || !n && !j(e) && !y(e) ? [] : !n && Xt.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Qt.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class tt {
  constructor(e, n) {
    if (!e)
      return;
    if (at(e))
      return e;
    let i = e;
    if (T(e)) {
      const r = n || R;
      if (i = Gt.test(e) && j(r) ? r.getElementById(e.slice(1).replace(/\\/g, "")) : Kt.test(e) ? Ot(e) : at(r) ? r.find(e) : T(r) ? s(r).find(e) : lt(e, r), !i)
        return;
    } else if (W(e))
      return this.ready(e);
    (i.nodeType || i === X) && (i = [i]), this.length = i.length;
    for (let r = 0, a = this.length; r < a; r++)
      this[r] = i[r];
  }
  init(e, n) {
    return new tt(e, n);
  }
}
const o = tt.prototype, s = o.init;
s.fn = s.prototype = o;
o.length = 0;
o.splice = Yt;
typeof Symbol == "function" && (o[Symbol.iterator] = _t[Symbol.iterator]);
function at(t) {
  return t instanceof tt;
}
function U(t) {
  return !!t && t === t.window;
}
function j(t) {
  return !!t && t.nodeType === 9;
}
function Zt(t) {
  return !!t && t.nodeType === 11;
}
function y(t) {
  return !!t && t.nodeType === 1;
}
function te(t) {
  return !!t && t.nodeType === 3;
}
function ee(t) {
  return typeof t == "boolean";
}
function W(t) {
  return typeof t == "function";
}
function T(t) {
  return typeof t == "string";
}
function A(t) {
  return t === void 0;
}
function G(t) {
  return t === null;
}
function Ht(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ft(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
s.isWindow = U;
s.isFunction = W;
s.isArray = Z;
s.isNumeric = Ht;
s.isPlainObject = ft;
function x(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (ft(t)) {
    const i = Object.keys(t);
    for (let r = 0, a = i.length; r < a; r++) {
      const u = i[r];
      if (e.call(t[u], u, t[u]) === !1)
        return t;
    }
  } else
    for (let i = 0, r = t.length; i < r; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
s.each = x;
o.each = function(t) {
  return x(this, t);
};
o.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function K(...t) {
  const e = ee(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return K(e, s, n);
  for (let r = 0; r < i; r++) {
    const a = t[r];
    for (const u in a)
      e && (Z(a[u]) || ft(a[u])) ? ((!n[u] || n[u].constructor !== a[u].constructor) && (n[u] = new a[u].constructor()), K(e, n[u], a[u])) : n[u] = a[u];
  }
  return n;
}
s.extend = K;
o.extend = function(t) {
  return K(o, t);
};
const ne = /\S+/g;
function et(t) {
  return T(t) ? t.match(ne) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = et(t), i = !A(e);
  return this.each((r, a) => {
    y(a) && x(n, (u, d) => {
      i ? e ? a.classList.add(d) : a.classList.remove(d) : a.classList.toggle(d);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = et(t);
  return this.each((n, i) => {
    y(i) && x(e, (r, a) => {
      i.removeAttribute(a);
    });
  });
};
function ie(t, e) {
  if (t) {
    if (T(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !y(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return G(n) ? void 0 : n;
      }
      return A(e) ? this : G(e) ? this.removeAttr(t) : this.each((n, i) => {
        y(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = ie;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && ut.call(this, (e) => y(e) && e.classList.contains(t));
};
o.get = function(t) {
  return A(t) ? vt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function re(t) {
  return A(t) ? this.get().map((e) => y(e) || te(e) ? e.textContent : "").join("") : this.each((e, n) => {
    y(n) && (n.textContent = t);
  });
}
o.text = re;
function v(t, e, n) {
  if (!y(t))
    return;
  const i = X.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function S(t, e) {
  return parseInt(v(t, e), 10) || 0;
}
function Ct(t, e) {
  return S(t, `border${e ? "Left" : "Top"}Width`) + S(t, `padding${e ? "Left" : "Top"}`) + S(t, `padding${e ? "Right" : "Bottom"}`) + S(t, `border${e ? "Right" : "Bottom"}Width`);
}
const st = {};
function se(t) {
  if (st[t])
    return st[t];
  const e = F(t);
  R.body.insertBefore(e, null);
  const n = v(e, "display");
  return R.body.removeChild(e), st[t] = n !== "none" ? n : "block";
}
function wt(t) {
  return v(t, "display") === "none";
}
function It(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function nt(t) {
  return T(t) ? (e, n) => It(n, t) : W(t) ? t : at(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = nt(t);
  return s(ct.call(this, (n, i) => e.call(n, i, n)));
};
function O(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return O(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const oe = /^\s*<(\w+)[^>]*>/, ae = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Tt = {
  "*": St,
  tr: Vt,
  td: xt,
  th: xt,
  thead: rt,
  tbody: rt,
  tfoot: rt
};
function Ot(t) {
  if (!T(t))
    return [];
  if (ae.test(t))
    return [F(RegExp.$1)];
  const e = oe.test(t) && RegExp.$1, n = Tt[e] || Tt["*"];
  return n.innerHTML = t, s(n.childNodes).detach().get();
}
s.parseHTML = Ot;
o.has = function(t) {
  const e = T(t) ? (n, i) => lt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = nt(t);
  return this.filter((n, i) => (!T(t) || y(i)) && !e.call(i, n, i));
};
function H(t, e, n, i) {
  const r = [], a = W(e), u = i && nt(i);
  for (let d = 0, w = t.length; d < w; d++)
    if (a) {
      const p = e(t[d]);
      p.length && Jt.apply(r, p);
    } else {
      let p = t[d][e];
      for (; p != null && !(i && u(-1, p)); )
        r.push(p), p = n ? p[e] : null;
    }
  return r;
}
function Bt(t) {
  return t.multiple && t.options ? H(ct.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ce(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || qt.test(n.type)) {
      const r = Z(t) ? Rt.call(t, String) : G(t) ? [] : [String(t)];
      i ? x(n.options, (a, u) => {
        u.selected = r.indexOf(u.value) >= 0;
      }, !0) : n.checked = r.indexOf(n.value) >= 0;
    } else
      n.value = A(t) || G(t) ? "" : t;
  }) : this[0] && Bt(this[0]);
}
o.val = ce;
o.is = function(t) {
  const e = nt(t);
  return ut.call(this, (n, i) => e.call(n, i, n));
};
s.guid = 1;
function _(t) {
  return t.length > 1 ? ct.call(t, (e, n, i) => Nt.call(i, e) === n) : t;
}
s.unique = _;
o.add = function(t, e) {
  return s(_(this.get().concat(s(t, e).get())));
};
o.children = function(t) {
  return O(s(_(H(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return O(s(_(H(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? s(t)[0] : this[0], n = t ? this : s(e).parent().children();
  return Nt.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return O(s(_(H(this, (e) => s(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return s(_(H(this, (e) => lt(t, e))));
};
const ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, le = /^$|^module$|\/(java|ecma)script/i, fe = ["type", "src", "nonce", "noModule"];
function de(t, e) {
  const n = s(t);
  n.filter("script").add(n.find("script")).each((i, r) => {
    if (le.test(r.type) && Et.contains(r)) {
      const a = F("script");
      a.text = r.textContent.replace(ue, ""), x(fe, (u, d) => {
        r[d] && (a[d] = r[d]);
      }), e.head.insertBefore(a, null), e.head.removeChild(a);
    }
  });
}
function he(t, e, n, i, r) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), r && de(e, t.ownerDocument);
}
function B(t, e, n, i, r, a, u, d) {
  return x(t, (w, p) => {
    x(s(p), (J, z) => {
      x(s(e), (l, f) => {
        const h = n ? z : f, c = n ? f : z, k = n ? J : l;
        he(h, k ? c.cloneNode(!0) : c, i, r, !k);
      }, d);
    }, u);
  }, a), e;
}
o.after = function() {
  return B(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return B(arguments, this, !1, !1, !0);
};
function pe(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (A(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    y(i) && (e ? s(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = pe;
o.appendTo = function(t) {
  return B(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = s(n), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return B(arguments, this, !1, !0);
};
o.wrapAll = function(t) {
  let e = s(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
o.wrap = function(t) {
  return this.each((e, n) => {
    const i = s(t)[0];
    s(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
o.insertAfter = function(t) {
  return B(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return B(arguments, this, !0, !0);
};
o.prepend = function() {
  return B(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return B(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return s(_(H(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return O(s(_(H(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return O(s(_(H(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return O(s(_(H(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return s(Ut.apply([], Rt.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && v(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Et;
  });
};
o.slice = function(t, e) {
  return s(vt.call(this, t, e));
};
const ge = /-([a-z])/g;
function dt(t) {
  return t.replace(ge, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, s);
  return R.readyState !== "loading" ? e() : R.addEventListener("DOMContentLoaded", e), this;
};
o.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = s(e);
    n.replaceWith(n.children());
  }), this;
};
o.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + X.pageYOffset,
    left: e.left + X.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = v(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && v(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && y(r)) {
      const a = s(r).offset();
      n.top -= a.top + S(r, "borderTopWidth"), n.left -= a.left + S(r, "borderLeftWidth");
    }
  }
  return {
    top: n.top - S(t, "marginTop"),
    left: n.left - S(t, "marginLeft")
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
o.prop = function(t, e) {
  if (t) {
    if (T(t))
      return t = Mt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Mt[t] || t];
  });
};
const me = /^--/;
function ht(t) {
  return me.test(t);
}
const ot = {}, { style: be } = St, ye = ["webkit", "moz", "ms"];
function xe(t, e = ht(t)) {
  if (e)
    return t;
  if (!ot[t]) {
    const n = dt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, r = `${n} ${ye.join(`${i} `)}${i}`.split(" ");
    x(r, (a, u) => {
      if (u in be)
        return ot[t] = u, !1;
    });
  }
  return ot[t];
}
const Ce = {
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
function Pt(t, e, n = ht(t)) {
  return !n && !Ce[t] && Ht(e) ? `${e}px` : e;
}
function we(t, e) {
  if (T(t)) {
    const n = ht(t);
    return t = xe(t, n), arguments.length < 2 ? this[0] && v(this[0], t, n) : t ? (e = Pt(t, e, n), this.each((i, r) => {
      y(r) && (n ? r.style.setProperty(t, e) : r.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = we;
function Lt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Te = /^\s+|\s+$/;
function kt(t, e) {
  const n = t.dataset[e] || t.dataset[dt(e)];
  return Te.test(n) ? n : Lt(JSON.parse, n);
}
function ke(t, e, n) {
  n = Lt(JSON.stringify, n), t.dataset[dt(e)] = n;
}
function $e(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = kt(this[0], i);
    return n;
  }
  if (T(t))
    return arguments.length < 2 ? this[0] && kt(this[0], t) : A(e) ? this : this.each((n, i) => {
      ke(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = $e;
function jt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
x([!0, !1], (t, e) => {
  x(["Width", "Height"], (n, i) => {
    const r = `${e ? "outer" : "inner"}${i}`;
    o[r] = function(a) {
      if (this[0])
        return U(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : j(this[0]) ? jt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (a && e ? S(this[0], `margin${n ? "Top" : "Left"}`) + S(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
x(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return A(i) ? void 0 : this;
    if (!arguments.length)
      return U(this[0]) ? this[0].document.documentElement[`client${e}`] : j(this[0]) ? jt(this[0], e) : this[0].getBoundingClientRect()[n] - Ct(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((a, u) => {
      if (!y(u))
        return;
      const d = v(u, "boxSizing");
      u.style[n] = Pt(n, r + (d === "border-box" ? Ct(u, !t) : 0));
    });
  };
});
const $t = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!y(n))
      return;
    const i = wt(n);
    (A(t) ? i : t) ? (n.style.display = n[$t] || "", wt(n) && (n.style.display = se(n.tagName))) : i || (n[$t] = v(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const At = "___ce", pt = ".", gt = { focus: "focusin", blur: "focusout" }, Ft = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ae = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function mt(t) {
  return Ft[t] || gt[t] || t;
}
function bt(t) {
  const e = t.split(pt);
  return [e[0], e.slice(1).sort()];
}
o.trigger = function(t, e) {
  if (T(t)) {
    const [i, r] = bt(t), a = mt(i);
    if (!a)
      return this;
    const u = Ae.test(a) ? "MouseEvents" : "HTMLEvents";
    t = R.createEvent(u), t.initEvent(a, !0, !0), t.namespace = r.join(pt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in gt;
  return this.each((i, r) => {
    n && W(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Wt(t) {
  return t[At] = t[At] || {};
}
function Ee(t, e, n, i, r) {
  const a = Wt(t);
  a[e] = a[e] || [], a[e].push([n, i, r]), t.addEventListener(e, r);
}
function zt(t, e) {
  return !e || !ut.call(e, (n) => t.indexOf(n) < 0);
}
function Q(t, e, n, i, r) {
  const a = Wt(t);
  if (e)
    a[e] && (a[e] = a[e].filter(([u, d, w]) => {
      if (r && w.guid !== r.guid || !zt(u, n) || i && i !== d)
        return !0;
      t.removeEventListener(e, w);
    }));
  else
    for (e in a)
      Q(t, e, n, i, r);
}
o.off = function(t, e, n) {
  if (A(t))
    this.each((i, r) => {
      !y(r) && !j(r) && !U(r) || Q(r);
    });
  else if (T(t))
    W(e) && (n = e, e = ""), x(et(t), (i, r) => {
      const [a, u] = bt(r), d = mt(a);
      this.each((w, p) => {
        !y(p) && !j(p) && !U(p) || Q(p, d, u, e, n);
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
function Se(t, e, n, i, r) {
  if (!T(t)) {
    for (const a in t)
      this.on(a, e, n, t[a], r);
    return this;
  }
  return T(e) || (A(e) || G(e) ? e = "" : A(n) ? (n = e, e = "") : (i = n, n = e, e = "")), W(i) || (i = n, n = void 0), i ? (x(et(t), (a, u) => {
    const [d, w] = bt(u), p = mt(d), J = d in Ft, z = d in gt;
    p && this.each((l, f) => {
      if (!y(f) && !j(f) && !U(f))
        return;
      const h = function(c) {
        if (c.target[`___i${c.type}`])
          return c.stopImmediatePropagation();
        if (c.namespace && !zt(w, c.namespace.split(pt)) || !e && (z && (c.target !== f || c.___ot === p) || J && c.relatedTarget && f.contains(c.relatedTarget)))
          return;
        let k = f;
        if (e) {
          let m = c.target;
          for (; !It(m, e); )
            if (m === f || (m = m.parentNode, !m))
              return;
          k = m;
        }
        Object.defineProperty(c, "currentTarget", {
          configurable: !0,
          get() {
            return k;
          }
        }), Object.defineProperty(c, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(c, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const g = i.call(k, c, c.___td);
        r && Q(f, p, w, e, h), g === !1 && (c.preventDefault(), c.stopPropagation());
      };
      h.guid = i.guid = i.guid || s.guid++, Ee(f, p, w, e, h);
    });
  }), this) : this;
}
o.on = Se;
function _e(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = _e;
const Ne = /\r?\n/g;
function Re(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Ne, `\r
`))}`;
}
const ve = /file|reset|submit|button|image/i, qt = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    x(n.elements || [n], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || ve.test(r.type) || qt.test(r.type) && !r.checked)
        return;
      const a = Bt(r);
      if (!A(a)) {
        const u = Z(a) ? a : [a];
        x(u, (d, w) => {
          t += Re(r.name, w);
        });
      }
    });
  }), t.slice(1);
};
function He(t) {
  var e = window.getComputedStyle(t);
  return e.display === "none" || parseInt(e.height) === 0;
}
function Ie() {
  return this.filter(function(t, e) {
    return !He(e);
  });
}
function Oe(t) {
  return t instanceof Element ? "element" : Object.prototype.toString.call(t).replace(/\[object\s(.+)\]/, "$1").toLowerCase();
}
const Be = `.print-container{font-size:9pt;line-height:18pt;letter-spacing:1px;width:210mm;margin:0 auto;box-sizing:border-box;background:#fff!important;color:#000!important}.print-container table{line-height:1.5}.break-page{box-shadow:0 0 8px 4px #ccc;padding:50px;margin-top:20px;page-break-after:always;position:relative;min-height:294mm;box-sizing:border-box}.break-page:first-child{margin-top:30px}.break-page:last-child{page-break-after:unset;margin-bottom:20px}table.break-table{border-collapse:collapse;border:1px solid black}table.break-table td,table.break-table th{border:1px solid black}@media print{.print-container{width:100%!important}.print-container .break-page{box-shadow:none;margin:0;max-height:294mm}.break-page:first-child{margin-top:0}img{max-height:902px}@page{size:a4;padding:0;margin:0}}
`;
function Me(t, e = 500, n = 500) {
  e = isNaN(parseInt(e)) ? 500 : parseInt(e), n = isNaN(parseInt(n)) ? 500 : parseInt(n), e < 1 && (e = 10), n < 1 && (n = 10), r(Be);
  const i = function() {
    let f = document.createElement("div");
    f.id = "mm", f.style.width = "1mm", document.querySelector("body").appendChild(f);
    let h = document.getElementById("mm").getBoundingClientRect();
    return s("#mm").remove(), h.width;
  }();
  s("body").__proto__.notHidden = Ie;
  function r(l) {
    if (typeof l != "string") {
      console.error("print style is invalid");
      return;
    }
    if (document.getElementById("print-style"))
      return;
    const f = document.createElement("style");
    f.id = "print-style", f.setAttribute("type", "text/css"), f.innerHTML = l, document.head.append(f);
  }
  function a() {
    const l = Oe(t);
    let f;
    ["string", "element", "htmlcollection"].includes(l) && (f = s(t)), f != null && f.length && (f.addClass("print-container"), f.children().notHidden().each(function() {
      s(this).addClass("break-page"), s(this).children().notHidden().each(function(k, g) {
        if (g.tagName.toLowerCase() === "table")
          s(this).addClass("break-table");
        else {
          if (["wrap-break"].some((m) => g.classList.contains(m)))
            return;
          s(this).addClass("need-break");
        }
      });
    })), console.log("start paging"), s("table.break-table").children("thead").addClass("need-break thead-break"), s("table.break-table tbody tr").addClass("need-break table-break"), s(".wrap-break").children().notHidden().addClass("need-break");
    let h = 0, c = u();
    for (; c.length; ) {
      if (++h > n) {
        console.error(`Pagination operation exceeds limit (${n} pages), you can change this limit in the initialization method.`);
        break;
      }
      c = u(d(c));
    }
    console.log("end paging");
  }
  function u(l) {
    return l ? l.nextAll(".break-page").notHidden().first() : s(".break-page").notHidden().first();
  }
  function d(l, f = 0) {
    if (l.outerHeight() <= 294 * i + 5)
      return l;
    if (++f > e)
      return console.error(`Pagination operation exceeds recursion limit (${e} pages), you can change this limit in the initialization method.`), l;
    const h = l.offset().top, c = parseInt(l.css("paddingBottom"));
    let k = !1, g = null;
    return l.find(".need-break").notHidden().each(function(m, q) {
      if (s(this).offset().top + s(this).outerHeight() - h + parseInt(s(this).css("marginBottom")) <= 294 * i - c)
        return !0;
      k = !0;
      let I = l.attr("class");
      return l.hasClass("new-break-page") || (I += " new-break-page"), g = s(`<div class="${I}" style="display:block"></div>`), m === 0 ? (console.warn("There is an element that exceeds the page height, and the page height is fixed to avoid pagnation bug."), console.log(this), l.css("overflow", "hidden"), l.css("height", `${294 * i}px`), g.append(s(this).nextAll().clone()), s(this).nextAll().remove(), l.after(g), !1) : (s(this).hasClass("table-break") ? z.call(this, g, m) : s(this).hasClass("thead-break") ? J.call(this, g) : s(this).parent().hasClass("wrap-break") ? p.call(this, g) : w.call(this, g), l.after(g), !1);
    }), k ? d(g, f) : l;
  }
  function w(l) {
    !l || !this || (l.append(s(this).clone()), l.append(s(this).nextAll().clone()), s(this).nextAll().remove(), s(this).remove());
  }
  function p(l) {
    if (!l || !this)
      return;
    if (s(this).prev().length === 0)
      w.call(s(this).parent(), l);
    else {
      const h = s(this).parent().clone().empty();
      h.append(s(this).clone()), h.append(s(this).nextAll().clone()), l.append(h), l.append(s(this).parent().nextAll().clone()), s(this).parent().nextAll().remove(), s(this).nextAll().remove(), s(this).remove();
    }
  }
  function J(l) {
    !l || !this || (l.append(s(this).parents("table").clone()), l.append(s(this).parents("table").nextAll().clone()), s(this).parents("table").nextAll().remove(), s(this).parents("table").remove());
  }
  function z(l, f) {
    var h = s(`<table class="${s(this).parents("table").attr("class")}"></table>`);
    h.append("<tbody></tbody>");
    var c = s(this);
    let k = f > 1;
    if (f == 1 && (k = s(this).find(".need-break").notHidden().not(".thead-break").length !== 0), k) {
      h.prepend(c.parents("table").children("thead").clone());
      let g = s(this).prevAll("tr"), m = [], q = [];
      for (let b = g.length - 1; b >= 0; b--) {
        const D = g[b], V = b === g.length - 1, $ = s(D).find("td");
        if (V || (m = m.map((E) => E - 1 > 0 ? E - 1 : 0)), V) {
          let E = 0;
          for (let N = 0, M = $.length; N < M; N++)
            E += +s($[N]).attr("colspan") || 1;
          m = new Array(E).fill(0);
        }
        for (let E = 0, N = $.length; E < N; E++) {
          const M = $[E], Y = +s(M).attr("rowspan") || 1, P = +s(M).attr("colspan") || 1;
          if (P > 0) {
            let L = m.findIndex((C) => C < 1);
            for (let C = 0; C < P; C++)
              m[L + C] = (m[L + C] || 0) + Y;
            if (Y > 1) {
              q[L] = [b, E, Y, P];
              for (let C = 1; C < P; C++)
                q[L + C] = void 0;
            }
          }
        }
      }
      let I = m.map((b) => b > 1 ? "N" : 0);
      c.find("td").each(function(b) {
        const D = +s(this).attr("colspan") || 1, V = I.findIndex(($) => $ === 0);
        for (let $ = 0; $ < D; $++)
          I[V + $] = b + 1;
      });
      const yt = {};
      for (let b = 0; b < q.length; b++) {
        if (!q[b])
          continue;
        const [D, V, $, E] = q[b] || [], N = $ - D - 1;
        if (N <= 0)
          continue;
        const M = s(g[D]).find("td")[V];
        s(M).attr("rowspan", $ - N);
        const Y = s(M).clone().attr("rowspan", N), P = "splitTd" + b;
        yt[P] = Y;
        let L = I.findIndex((C) => C === "N");
        if (L !== -1)
          for (let C = 0; C < E; C++)
            I[L + C] = P;
      }
      const it = c.clone().empty();
      [...new Set(I)].forEach((b) => {
        typeof b == "string" ? it.append(yt[b]) : it.append(
          c.find("td").eq(b - 1).clone()
        );
      });
      const Dt = c.prev("tr").length === 0;
      h.children("tbody").append(it.clone()), h.children("tbody").append(c.nextAll().clone()), l.append(h), l.append(c.parents("table").nextAll().clone()), c.nextAll().remove(), c.parents("table").nextAll().remove(), Dt ? c.parents("table").remove() : c.remove();
    } else {
      c.nextAll().length ? (h.prepend(c.parents("table").children("thead").clone()), h.children("tbody").append(c.nextAll().clone()), c.nextAll().remove(), l.append(h), l.append(c.parents("table").nextAll().clone()), c.parents("table").nextAll().remove()) : (l.append(c.parents("table").nextAll().clone()), c.parents("table").nextAll().remove());
      let g = s(
        `<div style="height:${294 * i - 100}px;overflow:hidden;"></div>`
      );
      c.parents(".break-page").append(g), g.append(c.parents("table"));
    }
  }
  return {
    execPaging: a
  };
}
export {
  Me as default
};
