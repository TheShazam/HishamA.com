var Stats = function() {
    function h(a) {
        c.appendChild(a.dom);
        return a
    }

    function k(a) {
        for (var d = 0; d < c.children.length; d++) c.children[d].style.display = d === a ? "block" : "none";
        l = a
    }
    var l = 0,
        c = document.createElement("div");
    var g = (performance || Date).now(),
        e = g,
        a = 0,
        r = h(new Stats.Panel()),
        f = h(new Stats.Panel());
    if (self.performance && self.performance.memory) var t = h(new Stats.Panel());
    k(0);
    return {
        REVISION: 16,
        dom: c,
        addPanel: h,
        showPanel: k,
        begin: function() {
            g = (performance || Date).now()
        },
        end: function() {
            a++;
            var c = (performance || Date).now();
            f.update(c - g, 200);
            if (c > e + 1E3 && (r.update(1E3 * a / (c - e), 100), e = c, a = 0, t)) {
                var d = performance.memory;
                t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576)
            }
            return c
        },
        update: function() {
            g = this.end()
        },
        domElement: c,
        setMode: k
    }
};
Stats.Panel = function(h, k, l) {
    var c = Infinity,
        g = 0,
        e = Math.round,
        a = e(window.devicePixelRatio || 1),
        r = 80 * a,
        f = 48 * a,
        t = 3 * a,
        u = 2 * a,
        d = 3 * a,
        m = 15 * a,
        n = 74 * a,
        p = 30 * a,
        q = document.createElement("canvas");
    q.width = r;
    q.height = f;
    q.style.cssText = "width:80px;height:48px";
    var b = q.getContext("2d");

    return {
        dom: q,
        update: function(f,
            v) {
            c = Math.min(c, f);
            g = Math.max(g, f);
        }
    }
};
"object" === typeof module && (module.exports = Stats);