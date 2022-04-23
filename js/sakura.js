(function (e) {
    function s(e) {
        if (e instanceof jQuery) {
            e = e[0];
        }
        var t = e.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    function o(e) {
        return e[Math.floor(Math.random() * e.length)];
    }
    function u(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
    }
    var t = 0;
    var n = ["webkit", "o", "ms", "moz", ""];
    var r = n.length;
    for (var i = 0; i < r && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[n[i] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[n[i] + "CancelAnimationFrame"] || window[n[i] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (e) {
            var n = new Date().getTime();
            var r = Math.max(0, 16 - (n - t));
            var i = window.setTimeout(function () {
                e(n + r);
            }, r);
            t = n + r;
            return i;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (e) {
            clearTimeout(e);
        };
    }
    e.fn.prefixedEvent = function (e, t) {
        for (var i = 0; i < r; ++i) {
            if (!n[i]) {
                e = e.toLowerCase();
            }
            el = this instanceof jQuery ? this[0] : this;
            el.addEventListener(n[i] + e, t, false);
        }
        return this;
    };
    e.fn.sakura = function (t, n) {
        var r = this.selector == "" ? e("body") : this;
        var i = {
            blowAnimations: ["blow-soft-left", "blow-medium-left", "blow-soft-right", "blow-medium-right"],
            className: "sakura",
            fallSpeed: 1,
            maxSize: 14,
            minSize: 10,
            newOn: 300,
            swayAnimations: ["sway-0", "sway-1", "sway-2", "sway-3", "sway-4", "sway-5", "sway-6", "sway-7", "sway-8"],
        };
        var n = e.extend({}, i, n);
        if (typeof t === "undefined" || t === "start") {
            r.css({ "overflow-x": "hidden" });
            var a = function () {
                if (r.data("sakura-anim-id")) {
                    setTimeout(function () {
                        requestAnimationFrame(a);
                    }, n.newOn);
                }
                var t = o(n.blowAnimations);
                var i = o(n.swayAnimations);
                var f = (document.documentElement.clientHeight * 0.007 + Math.round(Math.random() * 5)) * n.fallSpeed;
                var l = "fall " + f + "s linear 0s 1" + ", " + t + " " + ((f > 30 ? f : 30) - 20 + u(0, 20)) + "s linear 0s infinite" + ", " + i + " " + u(2, 4) + "s linear 0s infinite";
                var c = e('<div class="' + n.className + '" />');
                var h = u(n.minSize, n.maxSize);
                var p = h - Math.floor(u(0, n.minSize) / 3);
                c.prefixedEvent("AnimationEnd", function () {
                    if (!s(this)) {
                        e(this).remove();
                    }
                })
                    .prefixedEvent("AnimationIteration", function (t) {
                        if ((e.inArray(t.animationName, n.blowAnimations) != -1 || e.inArray(t.animationName, n.swayAnimations) != -1) && !s(this)) {
                            e(this).remove();
                        }
                    })
                    .css({
                        "-webkit-animation": l,
                        animation: l,
                        "border-radius": u(n.maxSize, n.maxSize + Math.floor(Math.random() * 10)) + "px " + u(1, Math.floor(p / 4)) + "px",
                        height: h + "px",
                        left: Math.random() * document.documentElement.clientWidth - 100 + "px",
                        "margin-top": -(Math.floor(Math.random() * 20) + 15) + "px",
                        width: p + "px",
                    });
                r.append(c);
            };
            r.data("sakura-anim-id", requestAnimationFrame(a));
        } else if (t === "stop") {
            var f = r.data("sakura-anim-id");
            if (f) {
                cancelAnimationFrame(f);
                r.data("sakura-anim-id", null);
            }
            setTimeout(function () {
                e("." + n.className).remove();
            }, n.newOn + 50);
        }
    };
})(jQuery);
