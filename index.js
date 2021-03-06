"use strict";
function _classCallCheck(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
} (),
Rail = function() {
    function e(t) {
        _classCallCheck(this, e),
        this.ele = document.querySelectorAll(t)
    }
    return _createClass(e, null, [{
        key: "getInstance",
        value: function(t) {
            return e.instances || (e.instances = {}),
            e.instances[t] || (e.instances[t] = new e(t)),
            e.instances[t]
        }
    },
    {
        key: "filter",
        value: function(e, t) {
            var n = [],
            r = !0,
            a = !1,
            l = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); ! (r = (i = s.next()).done); r = !0) {
                    var o = i.value;
                    t(o) && n.push(o)
                }
            } catch(u) {
                a = !0,
                l = u
            } finally {
                try { ! r && s["return"] && s["return"]()
                } finally {
                    if (a) throw l
                }
            }
            return n
        }
    }]),
    _createClass(e, [{
        key: "addClass",
        value: function(t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var l, i = this.ele[Symbol.iterator](); ! (n = (l = i.next()).done); n = !0) {
                    var s = l.value,
                    o = e.filter(s.className.split(" "),
                    function(e) {
                        return !! e
                    });
                    o.push(t),
                    s.className = o.join(" ")
                }
            } catch(u) {
                r = !0,
                a = u
            } finally {
                try { ! n && i["return"] && i["return"]()
                } finally {
                    if (r) throw a
                }
            }
            return this
        }
    },
    {
        key: "removeClass",
        value: function(t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var l, i = this.ele[Symbol.iterator](); ! (n = (l = i.next()).done); n = !0) {
                    var s = l.value,
                    o = s.className.split(" ");
                    s.className = e.filter(o,
                    function(e) {
                        return e !== t
                    }).join(" ")
                }
            } catch(u) {
                r = !0,
                a = u
            } finally {
                try { ! n && i["return"] && i["return"]()
                } finally {
                    if (r) throw a
                }
            }
            return this
        }
    },
    {
        key: "getOrigionalElement",
        value: function(e) {
            return e ? this.ele[e] : this.ele
        }
    },
    {
        key: "setStyle",
        value: function(e, t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var l, i = this.ele[Symbol.iterator](); ! (n = (l = i.next()).done); n = !0) {
                    var s = l.value;
                    s.style[e] = t
                }
            } catch(o) {
                r = !0,
                a = o
            } finally {
                try { ! n && i["return"] && i["return"]()
                } finally {
                    if (r) throw a
                }
            }
            return this
        }
    }]),
    e
} ();
window.$ = function(e) {
    return Rail.getInstance(e)
},
window.addEventListener("load",
function() {
    $("h1").addClass("ready"),
    $(".bio").addClass("ready"),
    $("li").addClass("ready")
});
