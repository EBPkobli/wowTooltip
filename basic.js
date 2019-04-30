if (typeof WH === "undefined") {
    var WH = {}
}
WH.data = WH.data || {};
WH.entities = WH.entities || {};
WH.Types = {
    NPC: 1,
    OBJECT: 2,
    ITEM: 3,
    ITEM_SET: 4,
    QUEST: 5,
    SPELL: 6,
    ZONE: 7,
    FACTION: 8,
    PET: 9,
    ACHIEVEMENT: 10,
    TITLE: 11,
    EVENT: 12,
    CLASS: 13,
    RACE: 14,
    SKILL: 15,
    CURRENCY: 17,
    PROJECT: 18,
    SOUND: 19,
    BUILDING: 20,
    FOLLOWER: 21,
    MISSION_ABILITY: 22,
    MISSION: 23,
    SHIP: 25,
    THREAT: 26,
    RESOURCE: 27,
    CHAMPION: 28,
    ICON: 29,
    ORDER_ADVANCEMENT: 30,
    FOLLOWER_A: 31,
    FOLLOWER_H: 32,
    SHIP_A: 33,
    SHIP_H: 34,
    CHAMPION_A: 35,
    CHAMPION_H: 36,
    TRANSMOG_ITEM: 37,
    BFA_CHAMPION: 38,
    BFA_CHAMPION_A: 39,
    AFFIX: 40,
    BFA_CHAMPION_H: 41,
    GUIDE: 100,
    TRANSMOG_SET: 101,
    OUTFIT: 110,
    PET_ABILITY: 200
};
WH.dataEnv = {
    LIVE: "live",
    PTR: "ptr",
    BETA: "beta",
    CLASSIC: "classic"
};
WH.BETA_DOMAIN = "bfa";
WH.staticUrl = typeof g_staticUrl == "string" ? g_staticUrl : "https://wow.zamimg.com";
if (!Function.prototype.bind) {
    Function.prototype.bind = function() {
        var a = this,
            c = Array.prototype.slice.call(arguments),
            b = c.shift();
        return function() {
            return a.apply(b, c.concat(Array.prototype.slice.call(arguments)))
        }
    }
}
if (!String.prototype.ltrim) {
    String.prototype.ltrim = function() {
        return this.replace(/^\s*/, "")
    }
}
if (!String.prototype.rtrim) {
    String.prototype.rtrim = function() {
        return this.replace(/\s*$/, "")
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/(^\s*|\s*$)/g, "")
    }
}
if (!String.prototype.repeat) {
    String.prototype.repeat = function(a) {
        if (this == null) {
            throw new TypeError("can't convert " + this + " to object")
        }
        var c = "" + this;
        a = +a;
        if (a != a) {
            a = 0
        }
        if (a < 0) {
            throw new RangeError("repeat count must be non-negative")
        }
        if (a == Infinity) {
            throw new RangeError("repeat count must be less than infinity")
        }
        a = Math.floor(a);
        if (c.length == 0 || a == 0) {
            return ""
        }
        if (c.length * a >= 1 << 28) {
            throw new RangeError("repeat count must not overflow maximum string size")
        }
        var b = c.length * a;
        a = Math.floor(Math.log(a) / Math.log(2));
        while (a) {
            c += c;
            a--
        }
        c += c.substring(0, b - c.length);
        return c
    }
}
if (Element.prototype.getAttributeNames == undefined) {
    Element.prototype.getAttributeNames = function() {
        var b = this.attributes;
        var d = b.length;
        var a = new Array(d);
        for (var c = 0; c < d; c++) {
            a[c] = b[c].name
        }
        return a
    }
}
if (!Math.sign) {
    Math.sign = function(a) {
        return ((a > 0) - (a < 0)) || +a
    }
}
WH.error = function(a) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error.apply(console.error, Array.prototype.slice.call(arguments))
    }
};
WH.info = function(a) {
    if (typeof console !== "undefined" && typeof console.info === "function") {
        console.info.apply(console.info, Array.prototype.slice.call(arguments))
    }
};
WH.log = function(a) {
    if (typeof console !== "undefined" && typeof console.log === "function") {
        console.log.apply(console.log, Array.prototype.slice.call(arguments))
    }
};
WH.warn = function(a) {
    if (typeof console !== "undefined" && typeof console.warn === "function") {
        console.warn.apply(console.warn, Array.prototype.slice.call(arguments))
    }
};
WH.isArray = function(a) {
    return a instanceof Array
};
WH.isBool = function(a) {
    return typeof a === "boolean"
};
WH.isElement = function(a) {
    return typeof a === "object" && a.nodeType === Node.ELEMENT_NODE
};
WH.isNull = function(a) {
    return a === null
};
WH.isNumber = function(a) {
    return typeof a === "number"
};
WH.isObject = function(a) {
    return typeof a === "object" && a !== null && !(a instanceof Array)
};
WH.isString = function(a) {
    return typeof a === "string"
};
WH.data.get = function(b) {
    var a = WH.data;
    b = Array.prototype.slice.call(arguments);
    while (b.length) {
        if (a[b[0]]) {
            a = a[b.shift()]
        } else {
            return null
        }
    }
    return a
};
WH.data.set = function(a, b) {
    return WH.setValueOnObject(WH.data, a, b)
};
WH.setValueOnObject = function(b, d, e, f) {
    if (typeof d === "number" || typeof d === "string") {
        b[d] = e;
        return true
    }
    if (!(d instanceof Array)) {
        WH.error("Invalid key type passed to WH.setValueOnObject:", typeof d, b, d, e);
        return false
    }
    if (d.length < 1) {
        WH.error("WH.setValueOnObject called with an empty key list:", b, d, e);
        return false
    }
    while (d.length > 1) {
        var a = d.shift();
        if (typeof b[a] === "undefined") {
            b[a] = {}
        }
        if (typeof b[a] !== "object") {
            WH.error("Dead end while setting value on object.", b, d, e);
            return false
        }
        b = b[a]
    }
    if (f) {
        var c = d.shift();
        if (typeof b[c] === "undefined") {
            b[c] = e
        }
    } else {
        b[d.shift()] = e
    }
    return true
};
WH.normalizeEvent = function(a) {
    if (!a) {
        if (typeof window.event != "undefined") {
            a = window.event
        } else {
            return null
        }
    }
    if (a.which) {
        a._button = a.which
    } else {
        a._button = a.button + 1
    }
    a._target = a.target || a.srcElement;
    a._wheelDelta = a.wheelDelta || -a.detail;
    return a
};
WH.stringCompare = function(d, c) {
    if (d == c) {
        return 0
    }
    if (d == null) {
        return -1
    }
    if (c == null) {
        return 1
    }
    var f = parseFloat(d);
    var e = parseFloat(c);
    if (!isNaN(f) && !isNaN(e) && f != e) {
        return f < e ? -1 : 1
    }
    if (typeof d == "string" && typeof c == "string") {
        return d.localeCompare(c)
    }
    return d < c ? -1 : 1
};
WH.trim = function(a) {
    return a.replace(/(^\s*|\s*$)/g, "")
};
WH.rtrim = function(b, c) {
    var a = b.length;
    while (--a > 0 && b.charAt(a) == c) {}
    b = b.substring(0, a + 1);
    if (b == c) {
        b = ""
    }
    return b
};
WH.sprintf = function(c) {
    for (var b = 1, a = arguments.length; b < a; ++b) {
        c = c.replace("$" + b, arguments[b])
    }
    return c
};
WH.sprintfGlobal = function(c) {
    for (var b = 1, a = arguments.length; b < a; ++b) {
        c = c.replace(new RegExp("\\$" + b, "g"), arguments[b])
    }
    return c
};
WH.stringReplace = function(c, b, a) {
    while (c.indexOf(b) != -1) {
        c = c.replace(b, a)
    }
    return c
};
WH.htmlEntities = function(a) {
    return a.replace(/[\u00A0-\u9999<>\&]/gim, function(b) {
        return "&#" + b.charCodeAt(0) + ";"
    })
};
WH.urlEncode = function(a) {
    a = encodeURIComponent(a);
    a = WH.stringReplace(a, "+", "%2B");
    return a
};
WH.urlEncodeHref = function(a) {
    a = encodeURIComponent(a);
    a = WH.stringReplace(a, "%20", "+");
    a = WH.stringReplace(a, "%3D", "=");
    return a
};
WH.numberFormat = function(b) {
    var c = ("" + parseFloat(b)).split(".");
    b = c[0];
    var a = c.length > 1 ? "." + c[1] : "";
    if (b.length <= 3) {
        return b + a
    }
    return WH.numberFormat(b.substr(0, b.length - 3)) + "," + b.substr(b.length - 3) + a
};
WH.numberLocaleFormat = function(d, b) {
    var c = "";
    if (typeof b == "number") {
        c = Locale.locales[b].name
    } else {
        if (typeof b == "string") {
            c = b
        } else {
            c = Locale.getName()
        }
    }
    if (c.length == 4) {
        c = c.substr(0, 2).toLowerCase() + "-" + c.substr(2).toUpperCase()
    }
    var a = "" + d;
    try {
        a = d.toLocaleString(c)
    } catch (f) {
        a = d.toLocaleString()
    }
    return a
};
WH.inArray = function(f, g, b, e) {
    if (f == null) {
        return -1
    }
    var a;
    if (b) {
        a = f.length;
        for (var d = e || 0; d < a; ++d) {
            if (b(f[d]) == g) {
                return d
            }
        }
        return -1
    }
    a = f.length;
    for (var c = e || 0; c < a; ++c) {
        if (f[c] == g) {
            return c
        }
    }
    return -1
};
WH.isSet = function(a) {
    return typeof window[a] !== "undefined"
};
if (!WH.isSet("console")) {
    var console = {
        log: function() {}
    }
}
WH.arrayWalk = function(f, e, c) {
    for (var d = 0, b = f.length; d < b; ++d) {
        var a = e(f[d], c, f, d);
        if (a != null) {
            f[d] = a
        }
    }
};
WH.arrayApply = function(e, d, b) {
    for (var c = 0, a = e.length; c < a; ++c) {
        d(e[c], b, e, c)
    }
};
WH.arrayFilter = function(e, d) {
    var b = [];
    for (var c = 0, a = e.length; c < a; ++c) {
        if (d(e[c])) {
            b.push(e[c])
        }
    }
    return b
};
WH.arrayUnique = function(e) {
    var b = {};
    for (var c = e.length - 1; c >= 0; --c) {
        b[e[c]] = 1
    }
    var a = [];
    for (var d in b) {
        a.push(d)
    }
    return a
};
WH.ge = function(a) {
    if (typeof a != "string") {
        return a
    }
    return document.getElementById(a)
};
WH.gE = function(b, a) {
    return b.getElementsByTagName(a)
};
WH.qs = function(a, b) {
    if (typeof b !== "undefined") {
        return b.querySelector(a)
    } else {
        return document.querySelector(a)
    }
};
WH.ce = function(a, b, c) {};
WH.ce = (function(a) {
    return function(b, d, e) {
        var c = a(b);
        if (d) {
            WH.cOr(c, d)
        }
        if (e) {
            WH.ae(c, e)
        }
        return c
    }
})(typeof document.createElementOriginal === "function" ? document.createElementOriginal.bind(document) : document.createElement.bind(document));
WH.de = function(a) {
    if (!a || !a.parentNode) {
        return
    }
    a.parentNode.removeChild(a)
};
WH.ae = function(a, b) {
    if (WH.isArray(b)) {
        WH.arrayApply(b, a.appendChild.bind(a));
        return b
    } else {
        return a.appendChild(b)
    }
};
WH.aef = function(a, b) {
    return a.insertBefore(b, a.firstChild)
};
WH.ee = function(b, a) {
    if (!a) {
        a = 0
    }
    while (b.childNodes[a]) {
        b.removeChild(b.childNodes[a])
    }
};
WH.ct = function(a) {
    return document.createTextNode(a)
};
WH.st = function(a, b) {
    if (a.firstChild && a.firstChild.nodeType == 3) {
        a.firstChild.nodeValue = b
    } else {
        WH.aef(a, WH.ct(b))
    }
};
WH.noWrap = function(a) {
    a.style.whiteSpace = "nowrap"
};
WH.rf = function() {
    return false
};
WH.rfWithoutControlKey = function(a) {
    a = WH.normalizeEvent(a);
    if (a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) {
        return
    }
    return false
};
WH.aE = function(b, a, c) {
    if (b.addEventListener) {
        b.addEventListener(a, c, false)
    } else {
        if (b.attachEvent) {
            b.attachEvent("on" + a, c)
        }
    }
};
WH.dE = function(b, a, c) {
    if (b.removeEventListener) {
        b.removeEventListener(a, c, false)
    } else {
        if (b.detachEvent) {
            b.detachEvent("on" + a, c)
        }
    }
};
WH.sp = function(a) {
    if (!a) {
        a = window.event
    }
    a.stopPropagation()
};
WH.setCookie = function(b, g, e, f, d) {
    var a = new Date();
    var c = b + "=" + encodeURI(e) + "; ";
    a.setDate(a.getDate() + g);
    c += "expires=" + a.toUTCString() + "; ";
    if (f) {
        c += "path=" + f + "; "
    }
    if (d) {
        c += "domain=" + d + "; "
    }
    document.cookie = c;
    WH.getCookies(b);
    WH.getCookies.C[b] = e
};
WH.deleteCookie = function(a) {
    WH.setCookie(a, -1);
    WH.getCookies.C[a] = null
};
WH.getCookies = function(b) {
    if (WH.getCookies.I == null) {
        var e = decodeURI(document.cookie).split("; ");
        WH.getCookies.C = {};
        for (var c = 0, a = e.length; c < a; ++c) {
            var g = e[c].indexOf("="),
                f, d;
            if (g != -1) {
                f = e[c].substr(0, g);
                d = e[c].substr(g + 1)
            } else {
                f = e[c];
                d = ""
            }
            WH.getCookies.C[f] = d
        }
        WH.getCookies.I = 1
    }
    if (!b) {
        return WH.getCookies.C
    } else {
        return WH.getCookies.C[b]
    }
};
WH.dO = function(a) {
    function b() {}
    b.prototype = a;
    return new b
};
WH.cO = function(c, b) {
    for (var a in b) {
        if (b[a] !== null && typeof b[a] == "object" && b[a].length) {
            c[a] = b[a].slice(0)
        } else {
            c[a] = b[a]
        }
    }
    return c
};
WH.cOr = function(d, c, b) {
    for (var a in c) {
        if (b && (a.substr(0, b.length) == b)) {
            continue
        }
        if (c[a] !== null && typeof c[a] == "object") {
            if (c[a].length) {
                d[a] = c[a].slice(0)
            } else {
                if (!d[a]) {
                    d[a] = {}
                }
                WH.cOr(d[a], c[a], b)
            }
        } else {
            d[a] = c[a]
        }
    }
    return d
};
WH.fround = function(b) {
    if (Math.fround) {
        return Math.fround(b)
    } else {
        if (typeof Float32Array != "undefined" && Float32Array) {
            var a = new Float32Array(1);
            a[0] = +b;
            return a[0]
        } else {
            return b
        }
    }
};
WH.Browser = {
    ie: !!(window.attachEvent && !window.opera),
    opera: !!window.opera,
    safari: navigator.userAgent.indexOf("Safari") != -1,
    firefox: navigator.userAgent.indexOf("Firefox") != -1,
    chrome: navigator.userAgent.indexOf("Chrome") != -1
};
WH.OS = {
    windows: navigator.appVersion.indexOf("Windows") != -1,
    mac: navigator.appVersion.indexOf("Macintosh") != -1,
    linux: navigator.appVersion.indexOf("Linux") != -1
};
WH.getWindowSize = function() {
    var b = 0,
        a = 0;
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        b = document.documentElement.clientWidth;
        a = document.documentElement.clientHeight
    } else {
        if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            b = document.body.clientWidth;
            a = document.body.clientHeight
        } else {
            if (typeof window.innerWidth == "number") {
                b = window.innerWidth;
                a = window.innerHeight
            }
        }
    }
    return {
        w: b,
        h: a
    }
};
WH.getScroll = function() {
    var a = 0,
        b = 0;
    if (typeof window.pageYOffset == "number") {
        a = window.pageXOffset;
        b = window.pageYOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            a = document.body.scrollLeft;
            b = document.body.scrollTop
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                a = document.documentElement.scrollLeft;
                b = document.documentElement.scrollTop
            }
        }
    }
    return {
        x: a,
        y: b
    }
};
WH.getCursorPos = function(c) {
    var b, d;
    if (window.innerHeight) {
        b = c.pageX;
        d = c.pageY
    } else {
        var a = WH.getScroll();
        b = c.clientX + a.x;
        d = c.clientY + a.y
    }
    return {
        x: b,
        y: d
    }
};
WH.ac = function(f, d) {
    var c = 0,
        g = 0,
        e;
    while (f) {
        c += f.offsetLeft;
        g += f.offsetTop;
        e = f.parentNode;
        while (e && e != f.offsetParent && e.offsetParent) {
            if (e.scrollLeft || e.scrollTop) {
                c -= (e.scrollLeft | 0);
                g -= (e.scrollTop | 0);
                break
            }
            e = e.parentNode
        }
        f = f.offsetParent
    }
    if (WH.isSet("Lightbox") && Lightbox.isVisible()) {
        d = true
    }
    if (d) {
        var b = WH.getScroll();
        c += b.x;
        g += b.y
    }
    var a = [c, g];
    a.x = c;
    a.y = g;
    return a
};
WH.scrollTo = function(c, b) {
    var o, l = WH.getWindowSize(),
        m = WH.getScroll(),
        j = l.w,
        e = l.h,
        g = m.x,
        d = m.y;
    c = WH.ge(c);
    if (b == null) {
        b = []
    } else {
        if (typeof b == "number") {
            b = [b]
        }
    }
    o = b.length;
    if (o == 0) {
        b[0] = b[1] = b[2] = b[3] = 0
    } else {
        if (o == 1) {
            b[1] = b[2] = b[3] = b[0]
        } else {
            if (o == 2) {
                b[2] = b[0];
                b[3] = b[1]
            } else {
                if (o == 3) {
                    b[3] = b[1]
                }
            }
        }
    }
    o = WH.ac(c);
    var a = o[0] - b[3],
        h = o[1] - b[0],
        k = o[0] + c.offsetWidth + b[1],
        f = o[1] + c.offsetHeight + b[2];
    if (k - a > j || a < g) {
        g = a
    } else {
        if (k - j > g) {
            g = k - j
        }
    }
    if (f - h > e || h < d) {
        d = h
    } else {
        if (f - e > d) {
            d = f - e
        }
    }
    scrollTo(g, d)
};
WH.createReverseLookupJson = function(c) {
    var a = {};
    for (var b in c) {
        a[c[b]] = b
    }
    return a
};
WH.getLocaleFromDomain = function(a) {
    var c = WH.getLocaleFromDomain.L;
    if (a && (typeof a == "string")) {
        var b = a.split(".");
        return c[b[0]] || 0
    }
    return 0
};
WH.getLocaleFromDomain.L = {
    ko: 1,
    fr: 2,
    de: 3,
    cn: 4,
    es: 6,
    ru: 7,
    pt: 8,
    it: 9
};
WH.getDomainFromLocale = function(a) {
    var b;
    if (WH.getDomainFromLocale.L) {
        b = WH.getDomainFromLocale.L
    } else {
        b = WH.getDomainFromLocale.L = WH.createReverseLookupJson(WH.getLocaleFromDomain.L)
    }
    return (b[a] ? b[a] : "")
};
WH.getIdFromTypeName = function(a) {
    var b = WH.getIdFromTypeName.L;
    return (b[a] ? b[a] : -1)
};
WH.getIdFromTypeName.L = {
    npc: 1,
    object: 2,
    item: 3,
    itemset: 4,
    "item-set": 4,
    quest: 5,
    spell: 6,
    zone: 7,
    faction: 8,
    pet: 9,
    achievement: 10,
    title: 11,
    event: 12,
    statistic: 16,
    currency: 17,
    building: 20,
    follower: 21,
    garrisonability: 22,
    missionability: 22,
    "mission-ability": 22,
    mission: 23,
    ship: 25,
    threat: 26,
    resource: 27,
    champion: 28,
    icon: 29,
    "order-advancement": 30,
    "bfa-champion": 38,
    affix: 40,
    guide: 100,
    "transmog-set": 101,
    outfit: 110,
    petability: 200,
    "pet-ability": 200
};
WH.ajaxIshRequest = function(c, f) {
    var d = document.getElementsByTagName("head")[0];
    if (c.substr(0, 5) == "http:" && location.protocol == "https:") {
        if (typeof console != "undefined" && console) {
            var e = "Refused to ajaxish load " + c + " from " + location.href;
            if (typeof console.log == "function") {
                console.log(e)
            } else {
                if (typeof console.error == "function") {
                    console.error(e)
                }
            }
            WH.Track.nonInteractiveEvent("Error", "ajaxIshRequest", c, location.href)
        }
        return undefined
    }
    if (f) {
        var a = WH.ce("script", {
            type: "text/javascript",
            src: c
        });
        WH.ae(d, a);
        return a
    }
    var b = WH.getGets();
    if (b.refresh != null) {
        if (b.refresh.length) {
            c += ("&refresh=" + b.refresh)
        } else {
            c += "&refresh"
        }
    }
    if (b.locale != null) {
        c += "&locale=" + b.locale
    }
    if (b.ptr != null) {
        c += "&ptr"
    }
    var a = WH.ce("script", {
        type: "text/javascript",
        src: c,
        charset: "utf8"
    });
    WH.ae(d, a);
    return a
};
WH.xhrJsonRequest = function(a, c) {
    var b = new XMLHttpRequest();
    b.onload = function(d) {
        var f = d.target.response;
        switch (d.target.responseType) {
            case "json":
                break;
            case "":
            case "text":
                try {
                    f = JSON.parse(f)
                } catch (g) {
                    WH.error("Could not parse expected JSON response", d.target);
                    return c()
                }
                break;
            default:
                WH.error("Unexpected response type from JSON request", d.target);
                return c()
        }
        return c(f)
    };
    b.onerror = function() {
        return c()
    };
    b.open("GET", a, true);
    b.responseType = "json";
    b.send()
};
WH.getGets = function() {
    if (WH.getGets.C != null) {
        return WH.getGets.C
    }
    var b = WH.getQueryString();
    var a = WH.parseQueryString(b);
    WH.getGets.C = a;
    return a
};
WH.escapeHtml = function(a) {
    var b = WH.ce("div");
    WH.ae(b, WH.ct(a));
    return b.innerHTML
};
WH.visitUrlWithPostData = function(b, d) {
    var c = WH.ce("form");
    c.action = b;
    c.method = "post";
    for (var a in d) {
        if (d.hasOwnProperty(a)) {
            var e = WH.ce("input");
            e.type = "hidden";
            e.name = a;
            e.value = d[a];
            WH.ae(c, e)
        }
    }
    WH.ae(document.body, c);
    c.submit()
};
WH.getQueryString = function() {
    var a = "";
    if (location.pathname) {
        a += location.pathname.substr(1)
    }
    if (location.search) {
        if (location.pathname) {
            a += "&"
        }
        a += location.search.substr(1)
    }
    return a
};
WH.parseQueryString = function(e) {
    e = decodeURIComponent(e);
    var d = e.split("&");
    var c = {};
    for (var b = 0, a = d.length; b < a; ++b) {
        WH.splitQueryParam(d[b], c)
    }
    return c
};
WH.splitQueryParam = function(c, d) {
    var e = c.indexOf("=");
    var a;
    var b;
    if (e != -1) {
        a = c.substr(0, e);
        b = c.substr(e + 1)
    } else {
        a = c;
        b = ""
    }
    d[a] = b
};
WH.createRect = function(d, c, b, a) {
    return {
        l: d,
        t: c,
        r: d + b,
        b: c + a
    }
};
WH.intersectRect = function(d, c) {
    return !(d.l >= c.r || c.l >= d.r || d.t >= c.b || c.t >= d.b)
};
WH.getViewport = function() {
    var a = $(window);
    return new Rectangle(a.scrollLeft(), a.scrollTop(), a.width(), a.height())
};
WH.keyPressIsAlphaNumeric = function(b) {
    var a = document.all ? b.keycode : b.which;
    return ((a > 47 && a < 58) || (a > 64 && a < 91) || (a > 95 && a < 112) || a == 222 || a == 0)
};
WH.isRemote = function() {
    return typeof g_wowhead == "undefined" || !g_wowhead
};
WH.isDev = function() {
    return typeof g_dev != "undefined" && g_dev
};
WH.getDataEnv = function() {
    return typeof g_dataEnv !== "undefined" ? g_dataEnv.env : WH.dataEnv.LIVE
};
WH.isBeta = function() {
    return typeof g_dataEnv !== "undefined" && g_dataEnv.env === WH.dataEnv.BETA
};
WH.isBetaActive = function() {
    if (typeof g_dataEnv !== "undefined") {
        return g_dataEnv.active.beta
    }
    return !!WH.wowheadRemote
};
WH.isClassicEnvTree = function() {
    return typeof g_dataEnv !== "undefined" && g_dataEnv.root === WH.dataEnv.CLASSIC
};
WH.isEnvTree = function(a) {
    return typeof g_dataEnv !== "undefined" && g_dataEnv.root === a
};
WH.isLiveEnvTree = function() {
    return typeof g_dataEnv !== "undefined" && g_dataEnv.root === WH.dataEnv.LIVE
};
WH.isPtr = function() {
    return typeof g_dataEnv !== "undefined" && g_dataEnv.env === WH.dataEnv.PTR
};
WH.isPtrActive = function() {
    if (typeof g_dataEnv !== "undefined") {
        return g_dataEnv.active.ptr
    }
    return !!WH.wowheadRemote
};
WH.suppressExternalDebug = function() {
    return typeof g_suppressExternalDebug !== "undefined" && g_suppressExternalDebug
};
WH.setupFooterMenus = function() {
    var b = {
        "footer-help-menu": mn_footer_help,
        "footer-tools-menu": mn_footer_tools,
        "footer-about-menu": mn_footer_about
    };
    for (var c in b) {
        if (!b.hasOwnProperty(c)) {
            continue
        }
        var a = $("#" + c);
        if (a.length) {
            a.addClass("hassubmenu");
            Menu.add(a.get(0), b[c])
        }
    }
};
WH.getScreenshotUrl = function(d, b, c) {
    if (!b) {
        b = "normal"
    }
    var a = b == "normal" && typeof c == "string" && c ? "-" + WH.Strings.slug(c, true) : "";
    return WH.staticUrl + "/uploads/screenshots/" + b + "/" + d + a + ".jpg"
};
WH.maxLevel = WH.maxLevel || 120;
WH.maxSkill = WH.maxSkill || 800;
WH.convertRatingToPercent = function(a, b, h, g) {
    var c = WH.convertRatingToPercent.RB,
        d = WH.convertRatingToPercent.LH,
        e = WH.convertRatingToPercent.LT;
    if (a < 0) {
        a = 1
    } else {
        if (a > WH.maxLevel) {
            a = WH.maxLevel
        }
    }
    if ((b == 12 || b == 13 || b == 14 || b == 15) && a < 34) {
        a = 34
    }
    if ((b == 28 || b == 36) && (g == 2 || g == 6 || g == 7 || g == 11)) {
        c[b] /= 1.3
    }
    if (h < 0) {
        h = 0
    }
    if (e && e[b] && (a >= 80) && (a - 80 < e[b].length)) {
        return h / e[b][a - 80]
    }
    var f;
    if (!c || c[b] == null) {
        f = 0
    } else {
        var j;
        if (a > 80) {
            j = d[a]
        } else {
            if (a > 70) {
                j = (82 / 52) * Math.pow((131 / 63), ((a - 70) / 10))
            } else {
                if (a > 60) {
                    j = (82 / (262 - 3 * a))
                } else {
                    if (a > 10) {
                        j = ((a - 8) / 52)
                    } else {
                        j = 2 / 52
                    }
                }
            }
        }
        f = h / c[b] / j
    }
    return f
};
WH.statToRating = {
    11: 0,
    12: 1,
    13: 2,
    14: 3,
    15: 4,
    16: 5,
    17: 6,
    18: 7,
    19: 8,
    20: 9,
    21: 10,
    25: 15,
    26: 15,
    27: 15,
    28: 17,
    29: 18,
    30: 19,
    31: 5,
    32: 8,
    34: 15,
    35: 15,
    36: 17,
    37: 23,
    44: 24,
    49: 25,
    57: 26,
    59: 11,
    60: 12,
    61: 13,
    62: 16,
    63: 20,
    64: 21,
    40: 29
};
WH.statToJson = {
    0: "mana",
    1: "health",
    3: "agi",
    4: "str",
    5: "int",
    6: "spi",
    7: "sta",
    8: "energy",
    9: "rage",
    10: "focus",
    13: "dodgertng",
    14: "parryrtng",
    16: "mlehitrtng",
    17: "rgdhitrtng",
    18: "splhitrtng",
    19: "mlecritstrkrtng",
    20: "rgdcritstrkrtng",
    21: "splcritstrkrtng",
    22: "_mlehitrtng",
    23: "_rgdhitrtng",
    24: "_splhitrtng",
    25: "_mlecritstrkrtng",
    26: "_rgdcritstrkrtng",
    27: "_splcritstrkrtng",
    28: "mlehastertng",
    29: "rgdhastertng",
    30: "splhastertng",
    31: "hitrtng",
    32: "critstrkrtng",
    33: "_hitrtng",
    34: "_critstrkrtng",
    35: "resirtng",
    36: "hastertng",
    37: "exprtng",
    38: "atkpwr",
    39: "rgdatkpwr",
    40: "versatility",
    41: "splheal",
    42: "spldmg",
    43: "manargn",
    44: "armorpenrtng",
    45: "splpwr",
    46: "healthrgn",
    47: "splpen",
    49: "mastrtng",
    50: "armorbonus",
    51: "firres",
    52: "frores",
    53: "holres",
    54: "shares",
    55: "natres",
    56: "arcres",
    57: "pvppower",
    58: "amplify",
    59: "multistrike",
    60: "readiness",
    61: "speedbonus",
    62: "lifesteal",
    63: "avoidance",
    64: "sturdiness",
    66: "cleave",
    71: "agistrint",
    72: "agistr",
    73: "agiint",
    74: "strint"
};
WH.jsonToStat = {};
for (var i in WH.statToJson) {
    WH.jsonToStat[WH.statToJson[i]] = i
}
WH.individualToGlobalStat = {
    16: 31,
    17: 31,
    18: 31,
    19: 32,
    20: 32,
    21: 32,
    22: 33,
    23: 33,
    24: 33,
    25: 34,
    26: 34,
    27: 34,
    28: 36,
    29: 36,
    30: 36
};
WH.convertScalingFactor = function(b, g, f, d, j) {
    var a = WH.convertScalingFactor.SV;
    var c = WH.convertScalingFactor.SD;
    if (!a || !a[b]) {
        if (g_user.roles & U_GROUP_ADMIN) {
            alert("There are no item scaling values for level " + b)
        }
        return (j ? {} : 0)
    }
    var k = {},
        h = a[b],
        e = c[f];
    if (!e || !(d >= 0 && d <= 9)) {
        k.v = h[g]
    } else {
        k.n = WH.statToJson[e[d]];
        k.s = e[d];
        k.v = Math.floor(h[g] * e[d + 10] / 10000)
    }
    return (j ? k : k.v)
};
g_itemScalingCallbacks = [];
WH.effectAverage = function(f, j, e, a) {
    var c = WH.convertScalingSpell.RandPropPoints;
    var h = f.scalingClass;
    var d = f.coefficient[a];
    var g = 1;
    var b = 0;
    if (d != 0 && h != 0) {
        if (f.scalesWithItemLevel) {
            if (h == 19) {
                b = c[e][0]
            } else {
                b = c[e][1]
            }
        } else {
            b = WH.convertScalingSpell.SV[j][h - 1]
        }
        if (h == 255) {
            g = WH.getCombatRatingMult(e, 3)
        }
        return d * b * g
    }
    return f.effectBasePoints[a]
};
WH.convertScalingSpell = function(o, d, a, e, p, j) {
    var f = WH.convertScalingSpell.SpellInformation;
    if (!f || !f[d]) {
        return o
    }
    a = a - 1;
    if (o.effects == undefined) {
        o.effects = {}
    }
    if (!o.effects.hasOwnProperty(a + 1)) {
        o.effects[a + 1] = {}
    }
    var l = f[d];
    var n = 0;
    var c = WH.effectAverage(l, p, j, a);
    if (l.deltaCoefficient[a] != 0) {
        var h = l.deltaCoefficient[a];
        var b = Math.ceil(c - (c * h / 2));
        var m = Math.floor(c + (c * h / 2));
        if (e == 0) {
            n = (b + m) / 2
        } else {
            if (e == 1) {
                n = b
            } else {
                if (e == 2) {
                    n = m
                }
            }
        }
    } else {
        if (l.coefficient[a] != 0) {
            n = c
        } else {
            n = l.effectBasePoints[a]
        }
    }
    n = Math.abs(n);
    var g = "avg";
    switch (parseInt(e)) {
        case 0:
        case 3:
            g = "avg";
            break;
        case 1:
            g = "min";
            break;
        case 2:
            g = "max";
            break;
        case 4:
            g = "pts";
            break;
        default:
            g = "avg"
    }
    var k = 5;
    if (l.scalesWithItemLevel && l.appliesRatingAura && l.appliesRatingAura[a]) {
        n *= WH.getCombatRatingMult(j, k)
    }
    o.effects[a + 1][g] = n;
    return o
};
WH.getDataSource = function() {
    if (WH.isSet("g_pageInfo")) {
        switch (g_pageInfo.type) {
            case 3:
                if (WH.isSet("g_items")) {
                    return g_items
                }
                break;
            case 6:
                if (WH.isSet("g_spells")) {
                    return g_spells
                }
                break;
            case 200:
                if (WH.isSet("g_petabilities")) {
                    return g_petabilities
                }
                break
        }
    }
    return []
};
WH.setJsonItemLevel = function(s, b, h) {
    if (h && ((h.scalingcategory - 11) > 0)) {
        var u = h.maxlvlscaling ? Math.min(b, h.maxlvlscaling) : b;
        var g = WH.getSpellScalingValue(h.scalingcategory, u);
        for (var q = 1; q < 3; ++q) {
            var a = h["itemenchspell" + q];
            var l = h["itemenchtype" + q];
            var m = WH.statToJson[a];
            if ((l == 5) && s[m]) {
                var j = h["damage" + q];
                if (j) {
                    s[m] = Math.round(g * j)
                }
            }
        }
        if (h.allstats) {
            for (var t in s) {
                s[t] = Math.round(g * h.damage1)
            }
        }
    }
    if (!s.scadist || !s.scaflags) {
        return
    }
    s.bonuses = s.bonuses || {};
    var k = s.scaflags & 255,
        d = (s.scaflags >> 8) & 255,
        n = (s.scaflags & (1 << 16)) != 0,
        f = (s.scaflags & (1 << 17)) != 0,
        o = (s.scaflags & (1 << 18)) != 0,
        p;
    switch (k) {
        case 5:
        case 1:
        case 7:
        case 17:
            p = 7;
            break;
        case 3:
        case 12:
            p = 8;
            break;
        case 16:
        case 11:
        case 14:
            p = 9;
            break;
        case 15:
            p = 10;
            break;
        case 23:
        case 21:
        case 22:
        case 13:
            p = 11;
            break;
        default:
            p = -1
    }
    if (p >= 0) {
        for (var q = 0; q < 10; ++q) {
            var e = WH.convertScalingFactor(b, p, s.scadist, q, 1);
            if (e.n) {
                s[e.n] = e.v
            }
            s.bonuses[e.s] = e.v
        }
    }
    if (o) {
        s.splpwr = s.bonuses[45] = WH.convertScalingFactor(b, 6)
    }
    if (n) {
        switch (k) {
            case 3:
                s.armor = WH.convertScalingFactor(b, 11 + d);
                break;
            case 5:
                s.armor = WH.convertScalingFactor(b, 15 + d);
                break;
            case 1:
                s.armor = WH.convertScalingFactor(b, 19 + d);
                break;
            case 7:
                s.armor = WH.convertScalingFactor(b, 23 + d);
                break;
            case 16:
                s.armor = WH.convertScalingFactor(b, 28);
                break;
            case 14:
                s.armor = WH.convertScalingFactor(b, 29);
                break;
            default:
                s.armor = 0
        }
    }
    if (f) {
        var c = (s.mledps ? "mle" : "rgd"),
            r;
        switch (k) {
            case 23:
            case 21:
            case 22:
            case 13:
                s.dps = s[c + "dps"] = WH.convertScalingFactor(b, o ? 2 : 0);
                r = 0.3;
                break;
            case 17:
                s.dps = s[c + "dps"] = WH.convertScalingFactor(b, o ? 3 : 1);
                r = 0.2;
                break;
            case 15:
                s.dps = s[c + "dps"] = WH.convertScalingFactor(b, d == 19 ? 5 : 4);
                r = 0.3;
                break;
            default:
                s.dps = s[c + "dps"] = 0;
                r = 0
        }
        s.dmgmin = s[c + "dmgmin"] = Math.floor(s.dps * s.speed * (1 - r));
        s.dmgmax = s[c + "dmgmax"] = Math.floor(s.dps * s.speed * (1 + r))
    }
};
WH.scaleItemEnchantment = function(h, b) {
    var f = h.enchantment;
    if (h.scalinginfo && (h.scalinginfo.scalingcategory - 11) > 0) {
        var e = f.match(/\d+/g);
        if (e) {
            var g = parseInt(h.scalinginfo.maxlvlscaling) ? Math.min(b, parseInt(h.scalinginfo.maxlvlscaling)) : b;
            var a = WH.getSpellScalingValue(h.scalinginfo.scalingcategory, g);
            for (var c = 0; c < e.length; ++c) {
                var d = h.scalinginfo["damage" + (c + 1)];
                if (d) {
                    f = f.replace(e[c], Math.round(a * d))
                }
            }
        }
    }
    return f
};
WH.getItemRandPropPointsType = function(a) {
    var b = a.slotbak ? a.slotbak : a.slot;
    switch (b) {
        case 1:
        case 4:
        case 5:
        case 7:
        case 15:
        case 17:
        case 20:
        case 25:
            return 0;
        case 2:
        case 9:
        case 11:
        case 16:
            return 2;
        case 3:
        case 6:
        case 8:
        case 10:
        case 12:
            return 1;
        case 13:
        case 14:
        case 21:
        case 22:
        case 23:
            return 3;
        case 26:
            if (a.subclass == 19) {
                return 3
            }
            return 0;
        case 28:
            return 4;
            break;
        default:
            return -1
    }
};
WH.scaleItemLevel = function(m, o) {
    var c = m.level;
    if (m.scadist) {
        var f = WH.convertScalingFactor.SD;
        var s = WH.curvePoints;
        var b = f ? f[m.scadist] : null;
        if (s && b && b[22] && b[22] > 0) {
            var u = b[22];
            var t = o ? o : WH.maxLevel;
            if (b[20] && t < b[20]) {
                t = b[20]
            }
            if (b[21] && t > b[21]) {
                t = b[21]
            }
            var h = s[u];
            if (h && h.length > 0) {
                var p = -1;
                for (var e in h) {
                    var q = h[e];
                    if (q[1] >= t) {
                        p = e;
                        break
                    }
                }
                var a = h[p != -1 ? p : (h.length - 1)];
                var d = null;
                var k = 0;
                if (p > 0) {
                    d = h[p - 1];
                    var r = a[1] - d[1];
                    if (r > 0) {
                        var l = t - d[1];
                        var n = l / r;
                        var j = a[2] - d[2];
                        var g = n * j;
                        k = d[2] + g
                    }
                } else {
                    k = a[2]
                }
                if (k > 0) {
                    c = Math.round(k)
                }
            }
        }
    }
    return c
};
WH.applyStatModifications = function(Y, o, M, u, ab, h, C) {
    if (!Y.quality && Y.name && Y.name.length && parseInt(Y.name[0])) {
        Y.quality = 8 - parseInt(Y.name[0])
    }
    var a = {};
    if (Y.hasOwnProperty("level")) {
        a = WH.dO(Y)
    } else {
        WH.cOr(a, Y, "__")
    }
    if (ab && ab.length) {
        var A = false;
        for (var U = 0; U < ab.length; ++U) {
            var p = ab[U];
            if (p > 0 && WH.isSet("g_itembonuses") && g_itembonuses[p]) {
                var D = g_itembonuses[p];
                for (var T = 0; T < D.length; ++T) {
                    var v = D[T];
                    switch (v[0]) {
                        case 11:
                        case 13:
                            if (A === false || v[2] < A) {
                                a.scadist = v[1];
                                a.scadistbonus = p;
                                A = v[2]
                            }
                            break;
                        default:
                            break
                    }
                }
            }
        }
    }
    a.level = WH.scaleItemLevel(a, h);
    if (M == "pvp" && Y.pvpUpgrade) {
        a.level += Y.pvpUpgrade
    }
    if (a.subitems && a.subitems[o]) {
        for (var ac in a.subitems[o].jsonequip) {
            if (!a.hasOwnProperty(ac)) {
                a[ac] = 0
            }
            a[ac] += a.subitems[o].jsonequip[ac]
        }
    }
    if (ab && ab.length) {
        if (Y.statsInfo) {
            a.statsInfo = {};
            for (var U in Y.statsInfo) {
                a.statsInfo[U] = {
                    alloc: parseInt(Y.statsInfo[U].alloc),
                    qty: Y.statsInfo[U].qty,
                    socketMult: Y.statsInfo[U].socketMult
                }
            }
        }
        var z = [0, 0, 0, 0, 2147483647, 2147483647, 2147483647, 2147483647];
        a.extraStats = [];
        var k = a.scadistbonus ? false : 0;
        for (var U = 0; U < ab.length; ++U) {
            var p = ab[U];
            if (p > 0 && WH.isSet("g_itembonuses") && g_itembonuses[p]) {
                var D = g_itembonuses[p];
                for (var T = 0; T < D.length; ++T) {
                    var v = D[T];
                    switch (v[0]) {
                        case 1:
                            if (!a.scadistbonus) {
                                a.level += v[1];
                                k = false
                            }
                            break;
                        case 2:
                            if (a.statsInfo) {
                                if (a.statsInfo.hasOwnProperty(v[1])) {
                                    a.statsInfo[v[1]].alloc += v[2]
                                } else {
                                    a.extraStats.push(v[1]);
                                    a.statsInfo[v[1]] = {
                                        alloc: parseInt(v[2]),
                                        qty: 0,
                                        socketMult: 0
                                    }
                                }
                            }
                            break;
                        case 3:
                            a.name = (8 - parseInt(v[1])) + (a.name ? a.name.substr(1) : "");
                            a.quality = parseInt(v[1]);
                            break;
                        case 4:
                            var e = v[1];
                            var b = v[2];
                            var Q = 4;
                            var P = 4;
                            do {
                                if (b <= z[Q]) {
                                    var t = e;
                                    e = z[Q - 4];
                                    z[Q - 4] = t;
                                    var O = b;
                                    b = z[Q];
                                    z[Q] = O
                                }++Q;
                                --P
                            } while (P);
                            break;
                        case 5:
                            if (WH.isSet("g_item_namedescriptions") && g_item_namedescriptions[v[1]]) {
                                a.nameSuffix = g_item_namedescriptions[v[1]][0]
                            }
                            break;
                        case 6:
                            var I = a.nsockets ? a.nsockets : 0;
                            a.nsockets = I + v[1];
                            for (var R = I; R < (I + v[1]); ++R) {
                                a["socket" + (R + 1)] = v[2]
                            }
                            break;
                        case 7:
                            break;
                        case 8:
                            a.reqlevel += v[1];
                            break;
                        case 14:
                            if (k !== false) {
                                k = Math.max(k, v[1])
                            }
                            break;
                        default:
                            break
                    }
                }
            }
        }
        if (k) {
            a.level = k;
            a.previewLevel = k
        }
        if (WH.isSet("g_item_namedescriptions")) {
            a.namedesc = a.namedesc ? a.namedesc : "";
            for (var T = 0; T < 4; ++T) {
                if (z[T] && g_item_namedescriptions[z[T]]) {
                    a.namedesc += (!a.namedesc ? "" : " ") + g_item_namedescriptions[z[T]][0];
                    if (!T) {
                        a.namedesccolor = g_item_namedescriptions[z[T]][1]
                    }
                }
            }
        }
    }
    if (Y.statsInfo && Y.level && WH.applyStatModifications.ScalingData) {
        var W = WH.applyStatModifications.ScalingData.AV,
            m = WH.applyStatModifications.ScalingData.SV,
            y = WH.applyStatModifications.ScalingData.AL;
        a.level = u ? u : (M && Y.upgrades && Y.upgrades[M - 1] ? (a.level + Y.upgrades[M - 1]) : a.level);
        var s = a.level - Y.level;
        var K = Math.pow(1.15, s / 15);
        var G = WH.getItemRandPropPointsType(a);
        var N = [];
        for (var V = a.level; V >= 0; V--) {
            if (m.hasOwnProperty(V)) {
                N = m[V];
                break
            }
        }
        var r = 0;
        if (G != -1) {
            var L = 0;
            switch (a.quality) {
                case 5:
                case 4:
                    L = 0;
                    break;
                case 7:
                case 3:
                    L = 1;
                    break;
                case 2:
                    L = 2;
                    break;
                default:
                    break
            }
            var q = L * 5 + G;
            r = N[q] ? N[q] : 0
        }
        var J = N[15];
        for (var U in WH.statToJson) {
            var g = WH.statToJson[U];
            if (a[g] || (a.statsInfo && a.statsInfo[U])) {
                var l = 0;
                var aa = 0;
                if (a.statsInfo.hasOwnProperty(U)) {
                    l = parseFloat(a.statsInfo[U].socketMult);
                    aa = parseInt(a.statsInfo[U].alloc)
                }
                var x = Math.round(l * J);
                if (aa && r > 0) {
                    a[g] = Math.floor(aa * 0.0001 * r - x + 0.5)
                } else {
                    a[g] = Math.floor(((a[g] + x) * K) - x)
                }
                if (g == "sta") {
                    a[g] = Math.floor(a[g] * WH.getStaminaRatingMult(a.level, a.slot || g_items[a.id].slot))
                } else {
                    if (C && WH.inArray(WH.applyStatModifications.BASE_STATS, U) < 0) {
                        a[g] = Math.floor(a[g] * WH.getCombatRatingMult(a.level, a.slot || g_items[a.id].slot))
                    }
                }
                switch (g) {
                    case "agistrint":
                        a.agi = a.str = a["int"] = a[g];
                        break;
                    case "agistr":
                        a.agi = a.str = a[g];
                        break;
                    case "agiint":
                        a.agi = a["int"] = a[g];
                        break;
                    case "strint":
                        a.str = a["int"] = a[g];
                        break;
                    default:
                        break
                }
            }
        }
        if (a.armor && W[a.level]) {
            var B = (a.quality == 7) ? 3 : a.quality;
            var c = (a.subclass == -6) ? 1 : a.subclass;
            if (WH.inArray([1, 2, 3, 4], c) != -1) {
                var Z = W[a.level][11 + B];
                var H = W[a.level][c - 1];
                var f = y[a.slot][c - 1];
                a.armor = Math.floor(H * Z * f + 0.5)
            }
            if (a.subclass == 6) {
                a.armor = W[a.level][4 + B]
            }
        }
        if (a.dps) {
            var d = ["dps", "mledps", "rgddps"];
            var S = ["dmgmin1", "mledmgmin", "rgddmgmin", "dmgmax1", "mledmgmax", "rgddmgmax"];
            var X = WH.getEffectiveWeaponDamage(a, false);
            var w = WH.getEffectiveWeaponDamage(a, true);
            X = Math.floor(Math.max(1, X));
            w = Math.max(1, w);
            if (WH.isClassicEnvTree()) {
                X = a.damagemin || X;
                w = a.damagemax || w
            }
            var F = ((X + w) / 2) / a.speed;
            var E = F >= 1000 ? 0 : (WH.isClassicEnvTree() ? 2 : 1);
            F = parseFloat(F.toFixed(E));
            for (var U in d) {
                if (a[d[U]]) {
                    a[d[U]] = F
                }
            }
            for (var U in S) {
                if (a[S[U]]) {
                    if (S[U].indexOf("max") != -1) {
                        a[S[U]] = w
                    } else {
                        a[S[U]] = X
                    }
                }
            }
        }
    }
    return a
};
WH.applyStatModifications.BASE_STATS = [4, 3, 5, 71, 72, 73, 74, 7, 1, 0, 8, 9, 2, 10];
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL = 67;
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL = 92;
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL = 104;
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL = 116;
WH.getItemDamageValue = function(c, e, a) {
    var b = WH.applyStatModifications.ScalingData.DV;
    var d = 7 * a + e;
    if (b && b[c] && b[c][d]) {
        return b[c][d]
    }
    return 0
};
WH.getEffectiveWeaponDamage = function(j, a) {
    var f = j.level;
    var c = j.subclass;
    var h = j.quality;
    var d = j.slotbak ? j.slotbak : j.slot;
    var g = 0;
    var k = false;
    var b = j.flags2 & 512;
    if (j.classs != 2) {
        return 0
    }
    if (h > 7) {
        return 0
    }
    if (h == 7) {
        h = 3
    }
    if (d > 22) {
        if (d == 24) {
            g = 0;
            k = true
        }
        if (!k && (d <= 24 || d > 26)) {
            k = true
        }
    } else {
        if (d == 21 || d == 22 || d == 13) {
            if (!b) {
                g = WH.getItemDamageValue(f, h, 0)
            } else {
                g = WH.getItemDamageValue(f, h, 1)
            }
            k = true
        }
        if (!k && d != 15) {
            if (d != 17) {
                k = true
            } else {
                if (!b) {
                    g = WH.getItemDamageValue(f, h, 2)
                } else {
                    g = WH.getItemDamageValue(f, h, 3)
                }
                k = true
            }
        }
    }
    if (!k && c >= 2) {
        if (c == 2 || c == 3 || c == 18) {
            if (!b) {
                g = WH.getItemDamageValue(f, h, 2)
            } else {
                g = WH.getItemDamageValue(f, h, 3)
            }
            k = true
        }
        if (!k && c == 19) {
            g = WH.getItemDamageValue(f, h, 1)
        }
    }
    if (g > 0) {
        var e = j.dmgrange || 0;
        if (!a) {
            return g * j.speed * (1 - e / 2)
        } else {
            return Math.floor((g * j.speed * (1 + e / 2)) + 0.5)
        }
    }
    return 0
};
WH.getJsonReforge = function(c, a) {
    if (!a) {
        if (!WH.reforgeStats) {
            return []
        }
        c.__reforge = {};
        c.__reforge.all = [];
        for (var a in WH.reforgeStats) {
            var d = WH.getJsonReforge(c, a);
            if (d.amount) {
                c.__reforge.all.push(d)
            }
        }
        return c.__reforge.all
    }
    if (!WH.reforgeStats || !WH.reforgeStats[a]) {
        return {}
    }
    c.__statidx = {};
    for (var b in c) {
        if (WH.individualToGlobalStat[WH.jsonToStat[b]]) {
            c.__statidx[WH.individualToGlobalStat[WH.jsonToStat[b]]] = c[b]
        } else {
            c.__statidx[WH.jsonToStat[b]] = c[b]
        }
    }
    if (!c.__reforge) {
        c.__reforge = {}
    }
    var d = c.__reforge[a] = WH.dO(WH.reforgeStats[a]);
    c.__reforge[a].amount = Math.floor(d.v * (c.__statidx[d.i1] && !c.__statidx[d.i2] ? c.__statidx[d.i1] : 0));
    return c.__reforge[a]
};
WH.getJsonItemEnchantMask = function(a) {
    if (a.classs == 2 && a.subclass == 19) {
        return 1 << (21 - 1)
    }
    return 1 << (a.slot - 1)
};
WH.getArtifactKnowledgeMultiplier = function(d) {
    var c = 1;
    for (var b = 0, a; a = WH.data.artifactKnowledgeMultiplier[b]; b++) {
        if (b > d) {
            break
        }
        c = a
    }
    return c
};
WH.getCurveValue = function(c, b) {
    var d;
    if (!WH.curvePoints || !(d = WH.curvePoints[c])) {
        return undefined
    }
    var f = d[0][1];
    var e = d[0][2];
    if (f > b) {
        return e
    }
    for (var g = 0, a; a = d[g]; g++) {
        if (b == a[1]) {
            return a[2]
        }
        if (b < a[1]) {
            return (a[2] - e) / (a[1] - f) * (b - f) + e
        }
        f = a[1];
        e = a[2]
    }
    return e
};
WH.setItemModifications = function(C, s, M, H, g, u) {
    if (!WH.isSet("g_items") || !g_items[s] || !g_items[s].jsonequip) {
        return C
    }
    if (!g) {
        g = WH.maxLevel
    }
    M = M ? M.split(":") : null;
    var B = g_items[s].bonusesData;
    var y = 0;
    var q = M ? M.indexOf("u") : -1;
    if (B && q != -1) {
        y = M[q + 1];
        M.splice(q, 1)
    }
    if (!u) {
        u = 0;
        switch (H) {
            case "twtbc":
                u = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL;
                break;
            case "twwotlk":
                u = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL;
                break;
            case "twcata":
                u = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL;
                break;
            case "twmists":
                u = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL;
                break
        }
    }
    H = !u ? H : null;
    var J = WH.applyStatModifications(g_items[s].jsonequip, 0, H, u, M, g);
    if (!J.name && g_items[s].hasOwnProperty("name_" + Locale.getName())) {
        J.name = "" + (8 - g_items[s].quality) + g_items[s]["name_" + Locale.getName()]
    }
    if (y) {
        var o = WH.bonusesBtnGetContextBonusId(M);
        var w = B[o].sub[y].sub;
        for (var n in w) {
            var k = WH.applyStatModifications(g_items[s].jsonequip, 0, H, u, [o, n]);
            for (var d in k.statsInfo) {
                var K = k[WH.statToJson[d]];
                if (J.statsInfo[d]) {
                    if (typeof J[WH.statToJson[d]] == "number" || !J[WH.statToJson[d]]) {
                        var l = J[WH.statToJson[d]] ? J[WH.statToJson[d]] : K;
                        J[WH.statToJson[d]] = {};
                        J[WH.statToJson[d]]["min"] = l;
                        J[WH.statToJson[d]]["max"] = l
                    }
                    var a = J[WH.statToJson[d]]["min"];
                    var p = J[WH.statToJson[d]]["max"];
                    if (K < a) {
                        J[WH.statToJson[d]]["min"] = K
                    } else {
                        if (K > p) {
                            J[WH.statToJson[d]]["max"] = K
                        }
                    }
                }
            }
        }
    }
    C = C.replace(/(<!--ilvl-->)\d+\+?/, function(N, O) {
        return O + J.level + (J.previewLevel ? "+" : "")
    });
    var E = false;
    if (J.scadist) {
        var z = WH.convertScalingFactor.SD;
        var m = z ? z[J.scadist] : null;
        if (m && m[21]) {
            E = true;
            var v = (m[20] ? m[20] : 1);
            var A = m[21];
            g = ((g && g <= A) ? g : A);
            C = C.replace(/(<!--lvl-->)\d+/g, function(N, O) {
                return O + ((g && g <= A) ? g : A)
            });
            C = C.replace(/(<!--minlvl-->)\d+/, function(N, O) {
                return O + v
            });
            C = C.replace(/(<!--maxlvl-->)\d+/, function(N, O) {
                return O + A
            });
            var F = false;
            C = C.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, function(R, T, Q, N, O, P, S) {
                F = true;
                return "<!--i?" + T + ":" + v + ":" + A + ":" + g + ":" + J.scadist + ":" + (S || 0)
            });
            if (!F) {
                C += "<!--i?" + s + ":" + v + ":" + A + ":" + g + ":" + J.scadist + ":0-->"
            }
            C = C.replace(/(<!--huindex-->)\d+/, function(P, Q) {
                var R = 0;
                if (J.scadistbonus && J.heirloombonuses) {
                    for (var N = 0, O; O = J.heirloombonuses[N]; N++) {
                        if (parseInt(J.scadistbonus) === O) {
                            R = N + 1;
                            break
                        }
                    }
                }
                return Q + R
            })
        }
    } else {
        C = C.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, function(R, T, Q, N, O, P, S) {
            return "<!--i?" + T + ":" + Q + ":" + N + ":" + (g ? g : N)
        })
    }
    var I;
    if (I = WH.ge("sl" + s)) {
        I.style.display = E ? "" : "none"
    }
    C = C.replace(/(<!--pvpilvl-->)\d+/, function(N, O) {
        return O + (J.level + ((H != "pvp") ? J.pvpUpgrade : 0))
    });
    C = C.replace(/(<!--ilvldelta-->)\d+/, function(O, P) {
        var N = 1718;
        var Q = Math.floor(WH.getCurveValue(N, J.level) || 2);
        return P + Q
    });
    C = C.replace(/(<!--rlvl-->)\d+/, function(N, O) {
        return O + J.reqlevel
    });
    C = C.replace(/(<!--uindex-->)\d+/, function(N, O) {
        return (H && H != "pvp") ? (O + H) : N
    });
    var b = (typeof J.dmgrange != "undefined") && J.dmgrange;
    var e = new RegExp("(<!--dmg-->)[\\d,]+" + (b ? "(\\D*?)[\\d,]+" : "") + "");
    C = C.replace(e, function(O, P, N) {
        return P + WH.numberFormat(J.dmgmin1) + (b ? (N + WH.numberFormat(J.dmgmax1)) : "")
    });
    C = C.replace(/(<!--dps-->\D*?)([\d,]+(?:\.\d+)?)/, function(O, P) {
        var N = J.dps >= 1000 ? 0 : (WH.isClassicEnvTree() ? 2 : 1);
        return P + (J.dps ? WH.numberFormat(J.dps.toFixed(N)) : "0")
    });
    C = C.replace(/(<!--amr-->)\d+/, function(N, O) {
        return O + J.armor
    });
    C = C.replace(/<span><!--stat(\d+)-->[-+][\d\.,]+(\D*?)<\/span>(<!--e-->)?(<!--ps-->)?(<br ?\/?>)?/gi, function(O, R, Q, T, N, W) {
        var P, V = (J[WH.statToJson[R]] ? J[WH.statToJson[R]] : 0);
        if (V) {
            var S = y && V.min ? V.min : V;
            var U = y && V.max ? V.max : V;
            V = (S > 0 ? "+" : "-") + WH.numberLocaleFormat(S != U ? (S + "-" + U) : S);
            P = "";
            W = (W ? "<br />" : "")
        } else {
            V = "+0";
            P = ' style="display: none"';
            W = (W ? "<!--br-->" : "")
        }
        return "<span" + P + "><!--stat" + R + "-->" + V + Q + "</span>" + (T || "") + (N || "") + W
    });
    var x = WH.getCombatRatingMult(J.level, g_items[s].slot);
    C = C.replace(/<span class="q2">((?:<!--stat\d+-->)?.*?[-+])<!--rtg(\d+)-->[\d\.,]+(.*?)<\/span>(<br \/>)?/gi, function(N, R, P, U, V) {
        var O, T = (J[WH.statToJson[P]] ? J[WH.statToJson[P]] : 0);
        if (T) {
            var Q = Math.floor((y && T.min ? T.min : T) * x);
            var S = Math.floor((y && T.max ? T.max : T) * x);
            T = WH.numberLocaleFormat(Q != S ? (Q + "-" + S) : Q);
            O = "";
            V = (V ? "<br />" : "")
        } else {
            O = ' style="display: none"';
            V = (V ? "<!--br-->" : "")
        }
        return '<span class="q2"' + O + ">" + R + "<!--rtg" + P + "-->" + T + U + "</span>" + V
    });
    if (J.extraStats && J.extraStats.length) {
        C = C.replace(/<!--re--><span[^<]*?<\/span>(<br \/>)?/, "");
        var r = WH.applyStatModifications.BASE_STATS;
        C = C.replace(/<!--ebstats-->/, function(V) {
            var Q = "";
            for (var P = 0; P < J.extraStats.length; ++P) {
                var N = J.extraStats[P];
                if (r.indexOf(N) == -1) {
                    continue
                }
                var S = "$1$2 " + (WH.statToJson && WH.statToJson[N] && LANG.traits[WH.statToJson[N]] ? LANG.traits[WH.statToJson[N]][1] : "Unknown");
                var R = WH.statToJson && WH.statToJson[N] ? J[WH.statToJson[N]] : 0;
                var O = Math.floor((y && R.min ? R.min : R) * x);
                var T = Math.floor((y && R.max ? R.max : R) * x);
                var U = WH.numberLocaleFormat(O != T ? (O + "-" + T) : O);
                Q += "<br /><span><!--stat" + N + "-->" + WH.sprintf(S, (O < 0) ? "-" : "+", U) + "</span>"
            }
            return Q + V
        });
        C = C.replace(/<!--egstats-->/, function(W) {
            var Q = "";
            for (var P = 0; P < J.extraStats.length; ++P) {
                var N = J.extraStats[P];
                if (r.indexOf(N) != -1) {
                    continue
                }
                var T = "$1$2 " + (WH.statToJson && WH.statToJson[N] && LANG.traits[WH.statToJson[N]] ? LANG.traits[WH.statToJson[N]][1] : "Unknown");
                var S = WH.statToJson && WH.statToJson[N] ? J[WH.statToJson[N]] : 0;
                var O = Math.floor((y && S.min ? S.min : S) * x);
                var U = Math.floor((y && S.max ? S.max : S) * x);
                var V = WH.numberLocaleFormat(O != U ? (O + "-" + U) : O);
                var R = WH.sprintf("<!--rtg$1-->$2", N, V);
                var X = "";
                if (WH.statToRating && WH.statToRating[N]) {
                    X = WH.sprintf("&nbsp;<small>(<!--rtg%$1-->0&nbsp;@&nbsp;L$2" + WH.maxLevel + ")</small>", N, y ? "" : "<!--lvl-->")
                }
                var Y = "";
                if (N == 50) {
                    Y = "<!--stat%d-->"
                }
                if (N == 64) {
                    T = T.substr(5);
                    X = ""
                }
                Q += '<br /><span class="q2">' + Y + WH.sprintf(T, (O >= 0) ? "+" : "-", R) + X + "</span>"
            }
            return Q + W
        })
    }
    C = C.replace(/(<!--nstart-->)(.*)(<!--nend-->)/, function(R, O, P, N) {
        var T = 8 - parseInt(J.name.substr(0, 1));
        var Q = J.name.substr(1);
        var S = J.nameSuffix ? (" " + J.nameSuffix) : "";
        return O + WH.sprintf('<b class="q$1">$2</b>', T, Q + S) + N
    });
    C = C.replace(/(<!--ndstart-->)(.*)(<!--ndend-->)/, function(Q, O, N, R) {
        if (!J.namedesc) {
            return O + R
        }
        if (!J.namedesccolor) {
            return Q
        }
        var P = parseInt(J.namedesccolor).toString(16);
        while (P.length < 6) {
            P = "0" + P
        }
        return O + WH.sprintf('<br /><span style="color: $1">$2</span>', "#" + P, J.namedesc) + R
    });
    var G = g_items[s].jsonequip.nsockets | 0;
    if ((!G && J.nsockets) || (G && J.nsockets > G)) {
        C = C.replace(/<!--ps-->(<br(?: \/)?>)?/, function(T, V) {
            var Q = "";
            for (var O = G; O < J.nsockets; ++O) {
                if (!J["socket" + (O + 1)]) {
                    continue
                }
                var R = J["socket" + (O + 1)];
                var P = "socket-unknown";
                var N = 81;
                var S = R;
                switch (R) {
                    case 1:
                        P = "socket-meta";
                        N = 81;
                        S = 1;
                        break;
                    case 2:
                        P = "socket-red";
                        N = 81;
                        S = 2;
                        break;
                    case 3:
                        P = "socket-yellow";
                        N = 81;
                        S = 3;
                        break;
                    case 4:
                        P = "socket-blue";
                        N = 81;
                        S = 4;
                        break;
                    case 5:
                        P = "socket-hydraulic";
                        N = 81;
                        S = 5;
                        break;
                    case 6:
                        P = "socket-cogwheel";
                        N = 81;
                        S = 6;
                        break;
                    case 7:
                        P = "socket-prismatic";
                        N = 81;
                        S = 9;
                        break;
                    case 8:
                        P = "socket-relic-iron";
                        N = 225;
                        S = 64;
                        break;
                    case 9:
                        P = "socket-relic-blood";
                        N = 225;
                        S = 128;
                        break;
                    case 10:
                        P = "socket-relic-shadow";
                        N = 225;
                        S = 256;
                        break;
                    case 11:
                        P = "socket-relic-fel";
                        N = 225;
                        S = 512;
                        break;
                    case 12:
                        P = "socket-relic-arcane";
                        N = 225;
                        S = 1024;
                        break;
                    case 13:
                        P = "socket-relic-frost";
                        N = 225;
                        S = 2048;
                        break;
                    case 14:
                        P = "socket-relic-fire";
                        N = 225;
                        S = 4096;
                        break;
                    case 15:
                        P = "socket-relic-water";
                        N = 225;
                        S = 8192;
                        break;
                    case 16:
                        P = "socket-relic-life";
                        N = 225;
                        S = 16384;
                        break;
                    case 17:
                        P = "socket-relic-storm";
                        N = 225;
                        S = 32768;
                        break;
                    case 18:
                        P = "socket-relic-holy";
                        N = 225;
                        S = 65536;
                        break;
                    default:
                        break
                }
                var U = WH.sprintf('<a href="/items/gems?filter=$1;$2;0" class="$3 q0">', N, S, P);
                U += g_socket_names[R] ? g_socket_names[R] : (g_gem_types[R] ? WH.sprintf(LANG.tooltip_emptyrelicslot.replace("%s", "$1"), g_gem_types[R]) : "Unknown Socket");
                U += "</a>";
                Q += "<br>" + U
            }
            return (G == 0 ? "<br>" : "") + Q + "<br><br>"
        })
    }
    if (WH.applyStatModifications && WH.convertScalingSpell.SpellInformation) {
        var j;
        var L = {
            effects: {}
        };
        var c = /(<!--pts(\d):(\d):(\d+(?:\.\d+)?):(\d+)(:\d+(?:\.\d+)?)?(:crm)?-->(?:<!--rtg\d+-->)?)(\d+(?:\.\d+)?)(<!---->(%?))?/g;
        while ((j = c.exec(C)) !== null) {
            var h = j[2];
            var f = j[3];
            var t = j[5];
            if (t <= 0) {
                continue
            }
            L[t] = L[t] || {};
            WH.cO(L[t], WH.convertScalingSpell(L[t], t, h, f, g, J.level))
        }
        C = WH.adjustSpellPoints(C, L, J.level, g_items[s].jsonequip.slot)
    }
    var D = 0;
    switch (u) {
        case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL:
            D = 70;
            break;
        case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL:
            D = 80;
            break;
        case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL:
            D = 85;
            break;
        case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL:
            D = 90;
            break;
        default:
            break
    }
    if (D) {
        C = C.replace(/<!--ee(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi, function(N, W, O, P, V, T, R, S) {
            var U = {
                enchantment: S,
                scalinginfo: {
                    scalingcategory: W,
                    minlvlscaling: O,
                    maxlvlscaling: P,
                    damage1: V / 1000,
                    damage2: T / 1000,
                    damage3: R / 1000
                }
            };
            var Q = WH.scaleItemEnchantment(U, D);
            return "<!--ee-->" + Q + "</span>"
        })
    }
    C = C.replace(/(<!--rtg%(\d+)-->)([\.,0-9]+)%?/g, function(P, R, Q, O) {
        _ = C.match(new RegExp("<!--rtg" + Q + "-->([\\d\\.,]+)(-[\\d\\.,]+)?"));
        if (!_) {
            return P
        }
        if (_[2]) {
            _[2] = _[2].replace(/\D/, "")
        }
        _[1] = _[1].replace(/\D/, "");
        var N = _[2] ? ((Math.abs(parseInt(_[2])) + parseInt(_[1])) / 2) : _[1];
        return R + (_[2] ? "~" : "") + (Math.round(WH.convertRatingToPercent(g ? g : WH.maxLevel, Q, N) * 100) / 100) + (Q != 49 ? "%" : "")
    });
    return C
};
WH.setTooltipLevel = function(e, b, v) {
    var h = typeof e;
    if (h == "number") {
        var a = WH.getDataSource();
        if (a[e] && a[e][(v ? "buff_" : "tooltip_") + Locale.getName()]) {
            e = a[e][(v ? "buff_" : "tooltip_") + Locale.getName()]
        } else {
            return e
        }
    } else {
        if (h != "string") {
            return e
        }
    }
    e = e.replace(/<!--(gem|ee)(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi, function(j, I, H, z, A, G, E, C, D) {
        var F = {
            enchantment: D,
            scalinginfo: {
                scalingcategory: H,
                minlvlscaling: z,
                maxlvlscaling: A,
                damage1: G / 1000,
                damage2: E / 1000,
                damage3: C / 1000
            }
        };
        var B = WH.scaleItemEnchantment(F, b);
        return "<!--" + I + "-->" + B + "</span>"
    });
    var w = e.match(/<!--i?\?([0-9-:]*)-->/);
    if (!w) {
        return e
    }
    var f = w[1].split(":").map(Number);
    b = Math.min(f[2], Math.max(f[1], b));
    var m = f[4] || 0;
    if (m) {
        if (!e.match(/<!--pts\d:\d:\d+(?:\.\d+)?:\d+-->/g) && !(m < 0) && !v) {
            e = WH.setItemModifications(e, f[0], null, null, b);
            WH.updateItemStringLink.call(this)
        } else {
            if (m > 0) {
                if (!f[7] && WH.isSet("g_pageInfo") && g_pageInfo.type == 3 && g_items[g_pageInfo.typeId] && g_items[g_pageInfo.typeId].quality != 7) {
                    b = Math.min(g_items[g_pageInfo.typeId].reqlevel, b)
                }
                var u = {
                    scadist: m
                };
                e = e.replace(/<!--cast-->\d+\.\d+/, "<!--cast-->" + u.cast);
                var l = /<!--pts([0-9-:]*)-->/g;
                var q = l.exec(e);
                u.effects = true;
                while (q != null) {
                    var t = q[1].split(":").map(Number);
                    var o = t[0];
                    var y = t[1];
                    var c = t[3];
                    if (c > 0) {
                        if (u[c] == undefined) {
                            u[c] = {};
                            u[c].effects = {}
                        }
                        WH.cO(u[c], WH.convertScalingSpell(u[c], c, o, y, b, b))
                    }
                    q = l.exec(e)
                }
                if (u.effects) {
                    var d = 5;
                    e = WH.adjustSpellPoints(e, u, b, d);
                    if (this.modified) {
                        for (var k in this.modified[1]) {
                            var x = this.modified[1][k];
                            for (var r = 0; r < x.length; ++r) {
                                x[r][0] = WH.adjustSpellPoints(x[r][0], u, b, d);
                                x[r][1] = WH.adjustSpellPoints(x[r][1], u, b, d)
                            }
                        }
                    }
                }
            } else {
                var n = -m;
                var g = WH.getSpellScalingValue(n, b);
                for (var s = 0; s < 3; ++s) {
                    var p = f[5 + s] / 1000;
                    e = e.replace(new RegExp("<!--gem" + (s + 1) + "-->(.+?)<"), "<!--gem" + (s + 1) + "-->" + Math.round(g * p) + "<")
                }
            }
        }
    }
    e = e.replace(/<!--ppl(\d+):(\d+):(\d+):(\d+)-->\s*\d+/gi, function(A, z, j, B, C) {
        return "<!--ppl" + z + ":" + j + ":" + B + ":" + C + "-->" + Math.round(parseInt(B) + (Math.min(Math.max(b, z), j) - z) * C / 100)
    });
    e = e.replace(/(<!--rtg%(\d+)-->)([\.0-9]+)%?/g, function(z, B, A, j) {
        _ = e.match(new RegExp("<!--rtg" + A + "-->(\\d+)"));
        if (!_) {
            return z
        }
        return B + (Math.round(WH.convertRatingToPercent(b, A, _[1]) * 100) / 100) + (A != 49 ? "%" : "")
    });
    e = e.replace(/(<!--i?\?\d+:\d+:\d+:)\d+/g, "$1" + b);
    e = e.replace(/<!--lvl-->\d+/g, "<!--lvl-->" + b);
    return e
};
WH.getSpellScalingValue = function(a, c) {
    var b = WH.convertScalingSpell ? WH.convertScalingSpell.SV : null;
    if (!b) {
        return 0
    }
    return b[c][a - 1]
};
WH.adjustSpellPoints = function(e, c, b, f) {
    var a = 1;
    if (b && f) {
        a = WH.getCombatRatingMult(b, f)
    }
    for (var d = 1; d <= 20; ++d) {
        e = e.replace(new RegExp("<!--pts" + d + ":0:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?-->(<!--rtg\\d+-->)?(.+?)<", "g"), function(m, h, k, g, j) {
            var l = (c[h] && c[h].hasOwnProperty("effects")) ? c[h].effects[d] : c.effects[d];
            if (!l) {
                return m
            }
            var n = Math.round(l.avg * (g ? a : 1));
            return "<!--pts" + d + ":0:0:" + h + (k || "") + (g || "") + "-->" + (j ? j : "") + n + "<"
        });
        e = e.replace(new RegExp("<!--pts" + d + ":1:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?-->(<!--rtg\\d+-->)?(.+?)<", "g"), function(m, h, k, g, j) {
            var l = (c[h] && c[h].hasOwnProperty("effects")) ? c[h].effects[d] : c.effects[d];
            if (!l) {
                return m
            }
            var n = Math.round(l.min * (g ? a : 1));
            return "<!--pts" + d + ":1:0:" + h + (k || "") + (g || "") + "-->" + (j ? j : "") + n + "<"
        });
        e = e.replace(new RegExp("<!--pts" + d + ":2:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?-->(<!--rtg\\d+-->)?(.+?)<", "g"), function(m, h, k, g, j) {
            var l = (c[h] && c[h].hasOwnProperty("effects")) ? c[h].effects[d] : c.effects[d];
            if (!l) {
                return m
            }
            var n = Math.round(l.max * (g ? a : 1));
            return "<!--pts" + d + ":2:0:" + h + (k || "") + (g || "") + "-->" + (j ? j : "") + n + "<"
        });
        e = e.replace(new RegExp("<!--pts" + d + ":3:(\\d+(?:\\.\\d+)?):(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?-->(<!--rtg\\d+-->)?(.+?)<", "g"), function(n, m, h, k, g, j) {
            var l = (c[h] && c[h].hasOwnProperty("effects")) ? c[h].effects[d] : c.effects[d];
            if (!l) {
                return n
            }
            var o = Math.round(l.avg * m * (g ? a : 1));
            return "<!--pts" + d + ":3:" + m + ":" + h + (k || "") + (g || "") + "-->" + (j ? j : "") + o + "<"
        });
        e = e.replace(new RegExp("<!--pts" + d + ":4:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?-->(<!--rtg\\d+-->)?(.+?)<", "g"), function(m, h, k, g, j) {
            var l = (c[h] && c[h].hasOwnProperty("effects")) ? c[h].effects[d] : c.effects[d];
            if (!l) {
                return m
            }
            var n = Math.round(l.pts * (g ? a : 1));
            return "<!--pts" + d + ":4:0:" + h + (k || "") + (g || "") + "-->" + (j ? j : "") + n + "<"
        })
    }
    return e
};
WH.getStaminaRatingMult = function(b, d) {
    var a = 0;
    switch (d) {
        case 2:
        case 11:
            a = 3;
            break;
        case 12:
            a = 2;
            break;
        case 13:
        case 14:
        case 15:
        case 17:
        case 21:
        case 22:
        case 23:
        case 25:
        case 26:
            a = 1;
            break
    }
    var c = WH.hasOwnProperty("staminaFactor") ? WH.staminaFactor[b][a] : 1;
    if (typeof c == "undefined") {
        c = 1
    }
    return c
};
WH.getCombatRatingMult = function(d, c) {
    var a = 0;
    switch (c) {
        case 2:
        case 11:
            a = 3;
            break;
        case 12:
            a = 2;
            break;
        case 13:
        case 14:
        case 15:
        case 17:
        case 21:
        case 22:
        case 23:
        case 25:
        case 26:
            a = 1;
            break
    }
    var b = (WH.convertRatingToPercent.hasOwnProperty("RM") && WH.convertRatingToPercent.RM.hasOwnProperty(d)) ? WH.convertRatingToPercent.RM[d][a] : 1;
    if (typeof b == "undefined") {
        b = 1
    }
    return b
};
WH.roundArtifactPower = function(b) {
    var a = 1;
    if (b > 50) {
        a = 5
    }
    if (b > 1000) {
        a = 25
    }
    if (b > 5000) {
        a = 50
    }
    return WH.roundHalfEven(b / a) * a
};
WH.roundHalfEven = function(b) {
    if (Math.floor(b * 100000) % 100000 == 50000) {
        var a = Math.floor(b);
        return a + a % 2
    }
    return Math.round(b)
};
WH.setTooltipSpells = function(k, a, l, d) {
    var h = {},
        f = "<!--sp([0-9]+):[01]-->.*?<!--sp\\1-->",
        b;
    if (a == null) {
        a = []
    }
    if (d == null) {
        d = {}
    }
    for (var c = 0; c < a.length; ++c) {
        h[a[c]] = 1
    }
    if (b = k.match(new RegExp(f, "g"))) {
        for (var c = 0; c < b.length; ++c) {
            var e = b[c].match(f)[1];
            h[e] = (h[e] | 0);
            if (d[e] == null) {
                d[e] = -1
            }
            d[e]++;
            if (l[e] == null || l[e][d[e]] == null || l[e][d[e]][h[e]] == null) {
                continue
            }
            var j = l[e][d[e]][h[e]];
            j = WH.setTooltipSpells(j, a, l, d);
            if (h[e] && !l[e][d[e]][0] && (c < (b.length - 1)) && (k.indexOf(b[c] + b[c + 1]) != -1)) {
                var g = b[c + 1].match(f)[1];
                h[g] = (h[g] | 0);
                k = k.replace(b[c + 1], "<!--sp" + g + ":" + h[g] + "-->" + j + "<!--sp" + g + "-->");
                continue
            }
            k = k.replace(b[c], "<!--sp" + e + ":" + h[e] + "-->" + j + "<!--sp" + e + "-->")
        }
    }
    return k
};
WH.enhanceTooltip = function(H, G, t, O, q, f, b, M, L, u, d, D, F, E) {
    if ((!WH.applyStatModifications || !WH.applyStatModifications.ScalingData) && (E || M)) {
        g_itemScalingCallbacks.push((function(U) {
            return function() {
                var V = WH.enhanceTooltip.call(U, H, G, t, O, q, f, b, M, L, u, d, D, F, E);
                WH.updateTooltip.call(U, V)
            }
        })(this));
        return LANG.tooltip_loading
    }
    var T = typeof H,
        P, I;
    var s = WH.getDataSource();
    var l = WH.isSet("g_pageInfo") ? g_pageInfo.type : null;
    I = WH.isSet("g_pageInfo") ? g_pageInfo.typeId : null;
    this._knownSpells = f;
    if (T == "number") {
        I = H;
        var J = "tooltip_";
        if (q) {
            J = "buff_"
        }
        if (D) {
            J = "tooltip_premium_"
        }
        if (F) {
            J = "text_"
        }
        if (s[I] && s[I][J + Locale.getName()]) {
            H = s[I][J + Locale.getName()];
            P = s[I][(q ? "buff" : "") + "spells_" + Locale.getName()];
            this._rppmModList = s[I]["rppmmod"];
            if (P) {
                H = WH.setTooltipSpells(H, f, P)
            }
        } else {
            return H
        }
    } else {
        if (T != "string") {
            return H
        }
    }
    var m;
    if (t) {
        var Q = WH.getGets();
        if (Q.lvl) {
            H = WH.setTooltipLevel(H, Q.lvl, q)
        }
        m = Q.ilvl
    }
    if ((E || M) && I) {
        H = WH.setItemModifications(H, I, E, M, this._selectedLevel ? this._selectedLevel : null, m)
    }
    if (G) {
        H = H.replace(/\(([^\)]*?<!--lvl-->[^\(]*?)\)/gi, function(V, U) {
            return '(<a href="javascript:;" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipLevelClick(this, null, 0)" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + LANG.tooltip_changelevel + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' + U + "</a>)"
        });
        if (H.indexOf("<!--artpow:") > 0) {
            if (!this.hasOwnProperty("_knowledgeLevel")) {
                var z = /(&|\?)artk=(\d+)/.exec(location.href);
                if (z && parseInt(z[2]) <= g_artifact_knowledge_max_level) {
                    this._knowledgeLevel = parseInt(z[2])
                }
            }
            var y = this._knowledgeLevel ? parseInt(this._knowledgeLevel) : 0;
            H = H.replace(/(<!--ndstart-->)?<!--ndend-->/i, function(U, V) {
                return (V ? V + "<br />" : " ") + '<a href="javascript:;" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipKnowledgeLevelClick(this, null, ' + I + ')" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + LANG.tooltip_changelevel + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' + WH.sprintf(LANG.tooltip_knowledgeformat.replace("%d", "$1"), y) + "</a>"
            });
            H = H.replace(/(<!--artpow:(\d+)-->)[\d\.\,]+/, function(U, W, V) {
                return W + WH.numberLocaleFormat(WH.roundArtifactPower(parseInt(V) * WH.getArtifactKnowledgeMultiplier(y)))
            })
        }
    }
    if (O && Slider) {
        var N = WH.groupSizeScalingShouldShow(I);
        if (q) {
            q.bufftip = this;
            if (N && WH.isSet("g_difficulties") && g_difficulties[N]) {
                H = WH.groupSizeScalingOnChange.call(q, this, g_difficulties[N].maxplayers, 1, true)
            }
        } else {
            var e = new RegExp("<!--" + ((l && l == 3) ? "i" : "") + "\\?(\\d+):(\\d+):(\\d+):(\\d+)");
            var h = H.match(e);
            if (typeof h == "undefined" && l == 3) {
                e = new RegExp("<!--\\?(\\d+):(\\d+):(\\d+):(\\d+)");
                h = H.match(e)
            }
            if (N && WH.isSet("g_difficulties") && g_difficulties[N]) {
                var n = WH.ce("label");
                n.innerHTML = LANG.tooltip_difficulty + ": ";
                this._difficultyBtn = WH.ce("a");
                this._difficultyBtn.ttId = I;
                WH.difficultyBtnBuildMenu.call(this, I);
                Menu.add(this._difficultyBtn, this._difficultyBtn.menu);
                $("#dd" + I).append(n).append(this._difficultyBtn);
                WH.difficultyBtnOnChange.call(this, s[I].initial_dd || N, s[I].initial_ddSize);
                H = WH.groupSizeScalingOnChange.call(this, this, g_difficulties[N].maxplayers, 0, true)
            } else {
                if (h) {
                    if (h[2] != h[3]) {
                        this.slider = Slider.init(O, {
                            minValue: parseInt(h[2]),
                            maxValue: parseInt(h[3]),
                            onMove: WH.tooltipSliderMove.bind(this)
                        });
                        Slider.setValue(this.slider, parseInt(h[4]));
                        this.slider.onmouseover = function(U) {
                            WH.Tooltip.showAtCursor(U, LANG.tooltip_changelevel2, 0, 0, "q2")
                        };
                        this.slider.onmousemove = WH.Tooltip.cursorUpdate;
                        this.slider.onmouseout = WH.Tooltip.hide;
                        this.slider.input.onmouseover = function(U) {
                            WH.Tooltip.showAtCursor(U, LANG.tooltip_changelevel, 0, 0, "q2")
                        };
                        this.slider.input.onmousemove = WH.Tooltip.cursorUpdate;
                        this.slider.input.onmouseout = WH.Tooltip.hide
                    }
                }
            }
        }
    }
    if (b) {
        if (q && q.modified) {
            q.bufftip = this
        } else {
            for (var R in P) {
                if (!g_spells[R] || WH.inArray(f, R) != -1) {
                    continue
                }
                $(b).append('<input type="checkbox" id="known-' + R + '" />').append('<label for="known-' + R + '"><a rel="spell=' + R + "&know=" + R + '">' + g_spells[R]["name_" + Locale.getName()] + (g_spells[R]["rank_" + Locale.getName()] ? " (" + g_spells[R]["rank_" + Locale.getName()] + ")" : "") + "</a></label>").append("<br />");
                $("#known-" + R).change(WH.tooltipSpellsChange.bind(this))
            }
        }
        this.modified = [b, P, f];
        $(b).toggle(!$(b).is(":empty"))
    }
    if (d) {
        var a = H.match(/<!--rppm-->(\d+(?:\.\d+)?)<!--rppm-->/);
        if (a) {
            var k = $("#rppm" + I);
            if (this._rppmModList.hasOwnProperty(4)) {
                this._rppmModBase = parseFloat(a[1]);
                if (k.is(":empty")) {
                    this._rppmSpecModList = this._rppmModList[4];
                    this._rppmSpecModList.splice(0, 0, {
                        spec: -1,
                        modifiervalue: 0,
                        filename: ""
                    });
                    k.append(WH.getMajorHeading(LANG.realppmmodifiers, 2, 3));
                    for (var R in this._rppmSpecModList) {
                        var o = Icon.create(this._rppmSpecModList[R]["filename"], 0, null);
                        o.style.display = "inline-block";
                        o.style.verticalAlign = "middle";
                        var j = $('<input name="rppmmod" type="radio" id="rppm-' + R + '" />');
                        j.get(0).checked = (this._rppmSpecModList[R]["spec"] == -1);
                        k.append(j).append(this._rppmSpecModList[R]["spec"] == -1 ? "" : o).append('<label for="rppm-' + R + '"> <a>' + (this._rppmSpecModList[R]["spec"] == -1 ? WH.TERMS.none : g_chr_specs[this._rppmSpecModList[R]["spec"]]) + "</a></label>").append("<br />");
                        var K = this;
                        $("#rppm-" + R).change(function() {
                            WH.tooltipRPPMChange.call(this, K)
                        })
                    }
                } else {
                    var v = this._rppmModBase;
                    var x = this._rppmSpecModList;
                    H = H.replace(/<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function(U, X, W, V) {
                        return "<!--rppm-->" + X + (v * (1 + parseFloat(x[$('input[name="rppmmod"]:checked', k).attr("id").match(/\d+$/)[0]].modifiervalue))).toFixed(2) + V + "<!--rppm-->"
                    })
                }
            }
            k.toggle(!(k.is(":empty")));
            var C = "";
            if (this._rppmModList.hasOwnProperty(1)) {
                C += " + " + LANG.traits.hastertng[2]
            } else {
                if (this._rppmModList.hasOwnProperty(2)) {
                    C += " + " + LANG.traits.critstrkrtng[2]
                }
            }
            if (g_pageInfo.type == 6 && this._rppmModList.hasOwnProperty(6)) {
                C += " + Budget"
            }
            if (C.length > 0) {
                H = H.replace(/<!--rppm-->\[?(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function(U, W, V) {
                    return "<!--rppm-->[" + W + C + "]" + V + "<!--rppm-->"
                })
            }
        }
    }
    if (u) {
        for (R = 1; R <= L; ++R) {
            $(u).append('<input type="checkbox" id="item-upgrade-' + R + '" />').append('<label for="item-upgrade-' + R + '"><a>' + WH.sprintf(LANG.itemupgrade_format, R) + "</a></label>").append("<br />");
            $("#item-upgrade-" + R).change(WH.upgradeItemTooltip.bind(this, u, R))
        }
        if (s[I] && s[I].hasOwnProperty("tooltip_" + Locale.getName() + "_pvp")) {
            $(u).append('<input type="checkbox" id="item-upgrade-pvp" />').append('<label for="item-upgrade-pvp"><a>' + LANG.su_menu_pvpmode + "</a></label>").append("<br />");
            $("#item-upgrade-pvp").change(WH.upgradeItemTooltip.bind(this, u, "pvp"))
        }
        if (s[I] && s[I].hasOwnProperty("tooltip_" + Locale.getName() + "_twtbc")) {
            $(u).append('<input type="checkbox" id="item-upgrade-twtbc" />').append('<label for="item-upgrade-twtbc"><a>' + g_difficulty_names[24] + " " + LANG.su_note_bc + "</a></label>").append("<br />");
            $("#item-upgrade-twtbc").change(WH.upgradeItemTooltip.bind(this, u, "twtbc"))
        }
        if (s[I] && s[I].hasOwnProperty("tooltip_" + Locale.getName() + "_twwotlk")) {
            $(u).append('<input type="checkbox" id="item-upgrade-twwotlk" />').append('<label for="item-upgrade-twwotlk"><a>' + g_difficulty_names[24] + " " + LANG.su_note_wotlk + "</a></label>").append("<br />");
            $("#item-upgrade-twwotlk").change(WH.upgradeItemTooltip.bind(this, u, "twwotlk"))
        }
        if (s[I] && s[I].hasOwnProperty("tooltip_" + Locale.getName() + "_twcata")) {
            $(u).append('<input type="checkbox" id="item-upgrade-twcata" />').append('<label for="item-upgrade-twcata"><a>' + g_difficulty_names[24] + " " + LANG.su_note_cata + "</a></label>").append("<br />");
            $("#item-upgrade-twcata").change(WH.upgradeItemTooltip.bind(this, u, "twcata"))
        }
        if (s[I] && s[I].hasOwnProperty("tooltip_" + Locale.getName() + "_twmists")) {
            $(u).append('<input type="checkbox" id="item-upgrade-twmists" />').append('<label for="item-upgrade-twmists"><a>' + g_difficulty_names[24] + " " + LANG.su_note_mists + "</a></label>").append("<br />");
            $("#item-upgrade-twmists").change(WH.upgradeItemTooltip.bind(this, u, "twmists"))
        }
        $(u).toggle(!$(u).is(":empty"))
    }
    if (l == 3) {
        var p = $("#cs" + I);
        if (p && WH.Wow.Item.tooltipHasSpecStats(H)) {
            if (!this._classSpecBtn) {
                var r = WH.ce("label");
                r.innerHTML = LANG.tooltip_showingtooltipfor + " ";
                this._classSpecBtn = WH.ce("a");
                this._classSpecBtn.ttId = I;
                WH.classSpecBtnBuildMenu.call(this, s[I].hasOwnProperty("validMenuSpecs") ? s[I].validMenuSpecs : false);
                Menu.add(this._classSpecBtn, this._classSpecBtn.menu);
                p.append(r).append(this._classSpecBtn).show()
            }
            var B = WH.LocalStorage.get("tooltips_class:spec");
            B = B ? B.split(":") : null;
            var w = /(&|\?)spec=(\d+)/.exec(location.href);
            var S, A;
            if (w) {
                S = w[2];
                A = WH.getClassFromSpec(S);
                if (A) {
                    B = [A, S]
                }
            }
            if (B && B.length == 2) {
                H = WH.classSpecBtnOnChange.call(this, B[0], B[1], H, true)
            } else {
                $(this._classSpecBtn).text(LANG.tooltip_chooseaspec)
            }
        }
    }
    if (s[I] && WH.bonusesBtnShouldShow(s[I].bonusesData)) {
        var c = $("#bs" + I);
        if (c && !this._bonusesBtn) {
            var g = WH.ce("label");
            g.innerHTML = LANG.tooltip_itembonuses + ": ";
            this._bonusesBtn = WH.ce("a");
            this._bonusesBtn.ttId = I;
            this._bonusesBtn.menu = WH.bonusesBtnBuildMenu.call(this, s[I]);
            Menu.add(this._bonusesBtn, this._bonusesBtn.menu);
            $(this._bonusesBtn).text(LANG.selectbonus);
            c.append(g).append(this._bonusesBtn).show();
            if (E !== "") {
                WH.bonusesBtnOnChange.call(this, E, true)
            }
        }
    }
    if (l == 3) {
        WH.updateItemStringLink.call(this)
    }
    return H
};
WH.evalPlayerCondition = function(c, h) {
    switch (h.id) {
        case 34116:
            h.achievementLogic = 6;
            h.achievement_2 = 6566;
            break;
        case 34647:
        case 34645:
            h.achievementLogic = 65536;
            h.achievement_0 = 6566;
            break;
        case 34648:
            h.achievementLogic = 65537;
            h.achievement_1 = 6566;
            break;
        case 33788:
        case 33790:
            h.prevquest1 = 38445;
            h.prevquest2 = 37935;
            break;
        default:
            break
    }
    if (h.minLevel && c.level < h.minLevel) {
        return false
    }
    if (h.maxLevel && c.level > h.maxLevel) {
        return false
    }
    if (h.raceMask && !((1 << (c.race - 1)) & h.raceMask)) {
        return false
    }
    if (h.classMask && !((1 << (c["class"] - 1)) & h.classMask)) {
        return false
    }
    if (typeof h.gender != "undefined" && h.gender != -1 && c.gender != h.gender) {
        return false
    }
    if (h.minAvgItemLevel && c.items && h.minAvgItemLevel > c.items.averageItemLevel) {
        return false
    }
    if (h.maxAvgItemLevel && c.items && h.maxAvgItemLevel < c.items.averageItemLevel) {
        return false
    }
    if (h.minAvgEquippedItemLevel && c.items && h.minAvgEquippedItemLevel > c.items.averageItemLevelEquipped) {
        return false
    }
    if (h.maxAvgEquippedItemLevel && c.items && h.maxAvgEquippedItemLevel > c.items.averageItemLevelEquipped) {
        return false
    }
    if (h.skillID_0 && c.professions) {
        var a = {};
        for (var b in c.professions.primary) {
            a[c.professions.primary[b].id] = parseInt(c.professions.primary[b].rank)
        }
        for (var b in c.professions.secondary) {
            a[c.professions.secondary[b].id] = parseInt(c.professions.secondary[b].rank)
        }
        if (!WH.evalComplexCondition(h.skillLogic, function(j) {
                return a[h["skillID_" + j]] && (!h["minSkill_" + j] || a[h["skillID_" + j]] >= h["minSkill_" + j]) && (!h["maxSkill_" + j] || a[h["skillID_" + j]] <= h["maxSkill_" + j])
            })) {
            return false
        }
    }
    if (h.time_0 && h.time_1) {
        var g = WH.decodeBlizzDate(h.time_0);
        var f = WH.decodeBlizzDate(h.time_1);
        if (h.id == 34518) {
            g = new Date(g.getTime() - 24 * 3600 * 1000);
            f = new Date(g.getTime() - 24 * 3600 * 1000)
        }
        if (g_serverTime < g || g_serverTime > f) {
            return false
        }
    }
    if (h.worldStateExpressionID && WH.worldStateExpressionToEvent.hasOwnProperty(h.worldStateExpressionID)) {
        if (!WH.isSet("g_events")) {
            return false
        }
        var d = g_events[WH.worldStateExpressionToEvent[h.worldStateExpressionID]];
        if (!d) {
            return false
        }
        var e = WH.getEventNextDates(d);
        if (!e[0] || !e[1] || g_serverTime < e[0] || g_serverTime > e[1]) {
            return false
        }
    }
    if (h.prevquest0 && c.quests) {
        if (!WH.evalComplexCondition(h.prevquestlogic, function(j) {
                return WH.inArray(c.quests, h["prevquest" + j]) != -1
            })) {
            return 0
        }
    }
    if (h.achievement_0 && c.achievements) {
        if (!WH.evalComplexCondition(h.achievementLogic, function(j) {
                return WH.inArray(c.achievements.achievementsCompleted, h["achievement_" + j]) != -1
            })) {
            return 0
        }
    }
    return true
};
WH.worldStateExpressionToEvent = {
    1368: 141,
    2941: 321,
    2978: 324,
    3555: 341,
    4546: 372,
    6572: 404,
    11286: 479,
    17483: 559,
    17484: 562,
    18046: 587,
    17485: 561,
    17486: 563,
    17499: 560,
    17500: 564,
    17503: 565,
    17567: 566,
    20936: 634,
    20943: 635,
    21269: 638,
    21273: 643,
    21345: 642,
    21408: 645,
    21455: 648,
    21464: 647,
    21638: 644,
    21659: 646,
    22303: 691,
    22386: 692,
    22449: 694,
    22699: 696,
    28169: 643,
    28170: 559,
    28171: 587,
    28172: 562,
    21795: 0,
    21796: 0,
    21797: 0,
    21798: 0,
    21886: 0,
    22984: 737,
    22985: 972,
    22986: 739,
    22987: 684,
    22988: 738,
    22989: 0,
    22990: 688,
    22991: 701,
    22992: 735,
    23058: 736,
    23211: 0,
    23212: 0,
    23213: 0,
    23215: 0,
    23289: 0,
    23290: 0,
    23297: 0,
    23298: 0,
    24562: 0,
    25206: 0,
    25207: 0,
    25208: 0,
    27295: 0,
    27296: 0,
    27297: 0,
    27515: 0,
    27516: 0
};
WH.evalComplexCondition = function(a, j) {
    var b = (a >> 16) & 15;
    var f = (a >> 0) & 255;
    var h = j(0);
    h = (b & 1) ? !h : h;
    var d = 0;
    opLoop: while (d < 3) {
        var g = j(d + 1);
        var c = (b >> (d + 1)) & 1;
        g = c ? !g : g;
        var e = (f >> (d * 2)) & 3;
        switch (e) {
            case 0:
                break opLoop;
            case 1:
                h = h && g;
                break;
            case 2:
                h = h || g;
                break
        }++d
    }
    return h
};
WH.decodeBlizzDate = function(d) {
    var g = new Date();
    var e = d & 63;
    var k = (d >> 6) & 31;
    var c = (d >> 20) & 15;
    var l = (d >> 14) & 63;
    var h = (d >> 24) & 31;
    g.setMinutes(e == 63 ? 0 : e, 0, 0);
    g.setHours(k == 31 ? 0 : k);
    g.setFullYear(1900 + (h == 31 ? 0 : (h + 100)), c == 15 ? 0 : c, l == 63 ? 1 : (l + 1));
    var b = g.getTime();
    var a = 7 * 24 * 3600 * 1000;
    var f = 0;
    if (a > 0) {
        f = Math.ceil((g_serverTime.getTime() - b) / a) * a
    }
    var j = new Date();
    j.setTime(b + f);
    return j
};
WH.getEventNextDates = function(b, e) {
    if (e == null) {
        e = g_serverTime
    }
    var g = null;
    var o = null;
    if (b.dates[0] == "" && b.startDate) {
        b.dates[0] = b.startDate
    }
    var h = b.duration0 ? b.duration0 : 0;
    var f = b.duration1 ? b.duration1 : 0;
    var a = b.filtertype ? b.filtertype : 0;
    var p = 0;
    for (var n = 0; n < b.dates.length; ++n) {
        if (b.dates[n] && b.dates[n] != "") {
            ++p
        }
    }
    if (p > 0) {
        if (p > 1) {
            for (var n = 0; n < b.dates.length; ++n) {
                if (!b.dates[n] || b.dates[n] == "") {
                    continue
                }
                var d = new Date(b.dates[n]).getTime();
                var k;
                if (f) {
                    d += h * 3600 * 1000;
                    k = d + f * 3600 * 1000
                } else {
                    k = d + h * 3600 * 1000
                }
                if (e.getTime() < k || (n == b.dates.length - 1)) {
                    g = new Date();
                    g.setTime(d);
                    o = new Date();
                    o.setTime(k);
                    break
                }
            }
        } else {
            if (a == -1) {
                if (b.rec && b.rec == -2) {
                    g = new Date(b.dates[0]);
                    o = new Date();
                    o.setTime(g.getTime() + h * 3600 * 1000)
                } else {
                    var d = new Date(b.dates[0]);
                    for (var n = 0; n < 2; ++n) {
                        var m = new Date(e.getFullYear() + n, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()).getTime();
                        var j;
                        if (f) {
                            m += h * 3600 * 1000;
                            j = m + f * 3600 * 1000
                        } else {
                            j = m + h * 3600 * 1000
                        }
                        if (e.getTime() < j) {
                            g = new Date();
                            g.setTime(m);
                            o = new Date();
                            o.setTime(j);
                            break
                        }
                    }
                }
            } else {
                var d = new Date(b.dates[0]).getTime();
                if (b.id == 301) {
                    d -= 24 * 3600 * 1000
                }
                var k = d + h * 3600 * 1000;
                var c = 0;
                if (f > 0) {
                    c = f * 3600 * 1000
                } else {
                    switch (a) {
                        case 0:
                            c = 7 * 24 * 3600 * 1000;
                            break;
                        default:
                            break
                    }
                }
                var l = 0;
                if (c > 0) {
                    l = Math.ceil((e.getTime() - k) / c) * c
                }
                g = new Date();
                g.setTime(d + l);
                o = new Date();
                o.setTime(k + l)
            }
        }
    }
    return [g, o]
};
WH.groupSizeScalingShouldShow = function(a) {
    if (WH.isSet("g_difficulties") && WH.isSet("g_spells") && g_spells[a] && g_spells[a].difficulties && g_spells[a].difficulties.length > 0) {
        return g_spells[a].difficulties[0]
    }
    return false
};
WH.groupSizeScalingSliderMove = function(j, f, c) {
    var b = WH.getDataSource();
    var d = WH.isSet("g_pageInfo") ? g_pageInfo.typeId : null;
    if (!b[d]) {
        return
    }
    var a = this._difficultyBtn.selectedDD;
    var h = c.value;
    var g = "";
    if (a != WH.groupSizeScalingShouldShow(d) || h != g_difficulties[WH.groupSizeScalingShouldShow(d)].maxplayers) {
        g = "&dd=" + a + "&ddsize=" + h
    }
    if (window.history) {
        if (location.pathname.indexOf("&dd") != -1) {
            window.history.replaceState({}, "", location.pathname.replace(/&ddsize=\d+/i, "").replace(/&dd=\d+/i, g) + location.hash)
        } else {
            if (!location.hash) {
                window.history.replaceState({}, "", location.pathname + g)
            } else {
                window.history.replaceState({}, "", location.pathname + g + location.hash)
            }
        }
    }
    WH.groupSizeScalingOnChange.call(this, this, c.value, 0);
    if (this.bufftip) {
        WH.groupSizeScalingOnChange.call(this, this.bufftip, c.value, 1)
    }
    WH.Tooltip.hide()
};
WH.groupSizeScalingOnChange = function(a, c, m, n) {
    while (a.className.indexOf("tooltip") == -1) {
        a = a.parentNode
    }
    c = parseInt(c);
    if (isNaN(c)) {
        return
    }
    var f = WH.getDataSource();
    var h = WH.isSet("g_pageInfo") ? g_pageInfo.typeId : null;
    if (!f[h]) {
        return
    }
    var o = this;
    var e = this._difficultyBtn.selectedDD;
    var k = Locale.getName();
    var d = "server_" + (m ? "buff_" : "tooltip_") + k;
    var l = "dd" + e + "ddsize" + c;
    WH.groupSizeScalingOnChange.lastCall = l;
    if (!f[h][d]) {
        f[h]["server_tooltip_" + k] = {};
        f[h]["server_buff_" + k] = {};
        var b = "dd" + f[h].initial_dd + "ddsize" + f[h].initial_ddSize;
        f[h]["server_tooltip_" + k][b] = f[h]["tooltip_" + k];
        f[h]["server_buff_" + k][b] = f[h]["buff_" + k]
    }
    if (f[h][d][l]) {
        var g = f[h][d][l];
        if (n) {
            return g
        }
        WH.updateTooltip.call(a, g);
        return
    }
    if (n) {
        return f[h][d.substr(7)]
    }
    if (m) {
        return
    }
    if (f[h][d].hasOwnProperty(l)) {
        return
    }
    f[h][d][l] = "";
    var j = "/spell=" + h + "&dd=" + e + "&ddsize=" + c;
    if ((WH.isBeta() || WH.isPtr()) && (typeof g_wow_build !== "undefined")) {
        j += "&" + g_wow_build
    }
    j += "&json&power";
    WH.xhrJsonRequest(j, (function(p) {
        if (!p) {
            return
        }
        f[h]["server_tooltip_" + k][l] = p.tooltip;
        f[h]["server_buff_" + k][l] = p.buff;
        if (WH.groupSizeScalingOnChange.lastCall === l) {
            WH.groupSizeScalingOnChange.call(o, a, c);
            if (o.bufftip) {
                WH.groupSizeScalingOnChange.call(o, o.bufftip, c, true)
            }
        }
    }))
};
WH.difficultyBtnBuildMenu = function(f) {
    var e = [];
    var a = g_spells[f];
    for (var d = 0; d < a.difficulties.length; ++d) {
        var c = a.difficulties[d];
        var b = [c, g_difficulty_names[c], WH.difficultyBtnOnChange.bind(this, c, false)];
        e.push(b)
    }
    this._difficultyBtn.menu = e
};
WH.difficultyBtnOnChange = function(b, d) {
    this._difficultyBtn.selectedDD = b;
    $(this._difficultyBtn).text("");
    WH.arrayWalk(this._difficultyBtn.menu, function(j) {
        j.checked = false
    });
    var h = Menu.findItem(this._difficultyBtn.menu, [b]);
    h.checked = true;
    $(this._difficultyBtn).text(h[MENU_IDX_LABEL]);
    var f = this._difficultyBtn.selectedPlayers || d;
    var e = g_difficulties[b].minplayers,
        a = g_difficulties[b].maxplayers,
        c = g_difficulties[b].maxplayers;
    if (f) {
        if (f > a) {
            c = a
        } else {
            if (f < e) {
                c = e
            } else {
                c = f
            }
        }
    }
    e = a;
    var g = $("#sl" + this._difficultyBtn.ttId);
    g.html("").hide();
    this.slider = null;
    if (e != a) {
        g.show();
        this.slider = Slider.init(g.get(0), {
            minValue: parseInt(e),
            maxValue: parseInt(a),
            onMove: WH.groupSizeScalingSliderMove.bind(this)
        });
        Slider.setValue(this.slider, parseInt(c));
        this.slider.onmouseover = function(j) {
            WH.Tooltip.showAtCursor(j, LANG.tooltip_changeplayers2, 0, 0, "q2")
        };
        this.slider.onmousemove = WH.Tooltip.cursorUpdate;
        this.slider.onmouseout = WH.Tooltip.hide;
        this.slider.input.onmouseover = function(j) {
            WH.Tooltip.showAtCursor(j, LANG.tooltip_changeplayers, 0, 0, "q2")
        };
        this.slider.input.onmousemove = WH.Tooltip.cursorUpdate;
        this.slider.input.onmouseout = WH.Tooltip.hide
    }
    WH.groupSizeScalingSliderMove.call(this, null, null, {
        value: c
    })
};
WH.classSpecBtnOnChange = function(e, h, j, f) {
    e = parseInt(e);
    h = parseInt(h);
    $(this._classSpecBtn).html("");
    this._classSpecBtn.selectedSpec = h;
    var a = $("<span></span>");
    a.text(WH.sprintf(" $1 $2", g_chr_specs[h], g_chr_classes[e]));
    var b = Menu.findItem(this._classSpecBtn.menu, [e, h]);
    if (b && b[MENU_IDX_OPT] && b[MENU_IDX_OPT].tinyIcon) {
        var d = b[MENU_IDX_OPT].tinyIcon;
        var g = Icon.create(d, 0, null, "javascript:;");
        g.style.display = "inline-block";
        g.style.verticalAlign = "middle";
        $(this._classSpecBtn).append(g)
    }
    $(this._classSpecBtn).append(a);
    if (!f) {
        WH.LocalStorage.set("tooltips_class:spec", e + ":" + h)
    }
    var c = j ? j : this.innerHTML;
    c = c.replace(/<span[^>]*?><!--stat(\d+)-->([-+][\d\.,]+(?:-[\d\.,]+)?)(\D*?)<\/span>/gi, function(q, p, m, l) {
        p = parseInt(p);
        var n = p == 50 ? ' class="q2"' : "";
        if (g_grayedOutStats[p] && (g_grayedOutStats[p].indexOf(h) != -1)) {
            n = ' class="q0"'
        }
        var k = WH.getStatForSpec(p, parseInt(h));
        if (k !== p && WH.statToJson[k]) {
            var o = LANG.traits[WH.statToJson[k]];
            if (o) {
                l = " " + o[1]
            }
        }
        return "<span" + n + "><!--stat" + p + "-->" + m + l + "</span>"
    });
    c = c.replace(/<!--scstart(\d+):(\d+)--><span class="q(\d+)">(<!--asc\d+-->)?(.*?)<\/span><!--scend-->/i, function(p, m, n, l, o, k) {
        l = 1;
        var r = m == 2 && (!g_classes_allowed_weapon[e] || WH.inArray(g_classes_allowed_weapon[e], n) == -1);
        var q = m == 4 && (!g_classes_allowed_armor[e] || WH.inArray(g_classes_allowed_armor[e], n) == -1);
        if (r || q) {
            l = 10
        }
        return "<!--scstart" + m + ":" + n + '--><span class="q' + l + '">' + (o ? o : "") + k + "</span><!--scend-->"
    });
    c = c.replace(/(<!--traitspecstart:(\d+)(?::(\d+))?-->)[\w\W]*?(<!--traitspecend-->)/g, function(o, n, k, m, l) {
        var p = "";
        if (WH.isSet("g_pageInfo") && g_pageInfo.hasOwnProperty("typeId") && g_pageInfo.type == 3 && g_items.hasOwnProperty(g_pageInfo.typeId) && g_items[g_pageInfo.typeId].hasOwnProperty("affectsArtifactPowerTypesData") && g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData.hasOwnProperty(k) && g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData[k].hasOwnProperty(h)) {
            p = g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData[k][h]
        } else {
            if (m) {
                p = '<span style="color: #00FF00">' + WH.sprintf(LANG["tooltip_relicrank" + (m > 1 ? "s" : "") + "increase"].replace("%d", "$1"), m) + ": </span>" + LANG.tooltip_relicminortrait
            }
        }
        return n + p + l
    });
    if (window.history) {
        if (location.pathname.indexOf("&spec") != -1) {
            window.history.replaceState({}, "", location.pathname.replace(/&spec=\d+/, "&spec=" + h) + location.hash)
        } else {
            if (!location.hash) {
                window.history.replaceState({}, "", location.pathname + "&spec=" + h)
            } else {
                window.history.replaceState({}, "", location.pathname + "&spec=" + h + location.hash)
            }
        }
    }
    if (j) {
        return c
    } else {
        this.innerHTML = WH.Tooltip.evalFormulas(c)
    }
};
WH.classSpecBtnBuildMenu = function(m) {
    var b = [
        [, LANG.tooltip_chooseaspec]
    ];
    var o = Menu.findItem(mn_spells, [-12]);
    b = b.concat($.extend(true, [], o[MENU_IDX_SUB]));
    for (var h in g_chr_specs_by_class) {
        var e = g_chr_specs_by_class[h];
        var k = null;
        for (var n in b) {
            var a = b[n];
            if (a[MENU_IDX_NAME] == h) {
                if (a[MENU_IDX_URL]) {
                    a[MENU_IDX_URL] = null
                }
                k = n;
                break
            }
        }
        if (k == null) {
            continue
        }
        for (var g in e) {
            var f = b[k][MENU_IDX_SUB];
            for (var d in f) {
                var c = f[d];
                if (c[MENU_IDX_NAME] == e[g]) {
                    if (m && (WH.inArray(m, e[g]) < 0)) {
                        delete c[MENU_IDX_OPT].tinyIcon;
                        c[MENU_IDX_OPT].className = "q0";
                        c[MENU_IDX_URL] = "javascript:;"
                    } else {
                        c[MENU_IDX_URL] = WH.classSpecBtnOnChange.bind(this, h, e[g], false)
                    }
                    break
                }
            }
        }
    }
    this._classSpecBtn.menu = b
};
WH.getClassFromSpec = function(d) {
    for (var c in g_chr_specs_by_class) {
        if (!g_chr_specs_by_class.hasOwnProperty(c)) {
            continue
        }
        for (var b = 0, a; a = g_chr_specs_by_class[c][b]; b++) {
            if (a == d) {
                return c
            }
        }
    }
    return null
};
WH.getStatForSpec = function(d, m) {
    var a = 3;
    var n = 4;
    var h = 5;
    var b = 71;
    var j = 72;
    var f = 73;
    var g = 74;
    var c;
    var e;
    var l = g_specPrimaryStatOrders[m];
    var k = g_specPrimaryStatOrders[m].length;
    if (d === b) {
        e = 0;
        if (!k) {
            return h
        }
        while (1) {
            c = l[e];
            if (c >= a && c <= h) {
                break
            }
            e++;
            if (e >= k) {
                return h
            }
        }
    } else {
        if (d !== j) {
            if (d !== f) {
                if (d !== g) {
                    return d
                }
                e = 0;
                if (k) {
                    while (1) {
                        c = l[e];
                        if (c >= n && c <= h) {
                            break
                        }
                        e++;
                        if (e >= k) {
                            return h
                        }
                    }
                    return c
                }
                return h
            }
            e = 0;
            if (k) {
                while (1) {
                    c = l[e];
                    if (l[e] === a) {
                        break
                    }
                    if (l[e] === h) {
                        break
                    }
                    e++;
                    if (e >= k) {
                        return h
                    }
                }
                return c
            }
            return h
        }
        e = 0;
        if (!k) {
            return a
        }
        while (1) {
            c = l[e];
            if (c >= a && c <= n) {
                break
            }
            e++;
            if (e >= k) {
                return a
            }
        }
    }
    return c
};
WH.bonusesBtnShouldShow = function(a) {
    for (var b in a) {
        if (a.hasOwnProperty(b)) {
            return true
        }
    }
    return false
};
WH.bonusesBtnBuildMenu = function(p) {
    var s = [];
    var e = p.bonusesData;
    if (e) {
        for (var h in e) {
            var q = e[h].groupedUpgrade;
            var l = WH.getItemBonusName.call(this, h, p);
            var d = [h, l, WH.bonusesBtnOnChange.bind(this, (q ? "u:" : "") + h, false)];
            if (typeof q == "undefined") {
                for (var m in e[h].sub) {
                    q = e[h].sub[m].groupedUpgrade;
                    l = WH.getItemBonusName.call(this, m, p, h);
                    if (l == "???") {
                        continue
                    }
                    var g = [m, l, WH.bonusesBtnOnChange.bind(this, h + ":" + (q ? "u:" : "") + m, false, true)];
                    if (!d[MENU_IDX_SUB]) {
                        d[MENU_IDX_SUB] = []
                    }
                    d[MENU_IDX_SUB].push(g)
                }
            }
            if (d[MENU_IDX_SUB]) {
                d[MENU_IDX_SUB].sort(function(u, t) {
                    var w = WH.getItemBonusChanceType(u[MENU_IDX_NAME]);
                    var v = WH.getItemBonusChanceType(t[MENU_IDX_NAME]);
                    return WH.stringCompare(w, v) || WH.stringCompare(u[MENU_IDX_LABEL], t[MENU_IDX_LABEL])
                });
                var r = [];
                var c = 0;
                for (var o = 0; o < d[MENU_IDX_SUB].length; ++o) {
                    var m = d[MENU_IDX_SUB][o][MENU_IDX_NAME];
                    if (m && e[h].sub[m].type != c) {
                        c = e[h].sub[m].type;
                        var n = LANG.unknown;
                        switch (c) {
                            case 1:
                                n = LANG.upgrades;
                                break;
                            case 2:
                                n = LANG.su_note_stats;
                                break;
                            case 4:
                                n = LANG.sockets;
                                break;
                            default:
                                break
                        }
                        r.push([o, n])
                    }
                }
                for (var o = 0; o < r.length; ++o) {
                    var b = r[o][0] + o;
                    var k = [null, r[o][1]];
                    d[MENU_IDX_SUB].splice(b, 0, k)
                }
            }
            s.push(d)
        }
        var f = {};
        for (var j = 0; j < s.length; j++) {
            if (f.hasOwnProperty(s[j][1])) {
                s[j][1] += LANG.wordspace + LANG.parens_open + ++f[s[j][1]] + LANG.parens_close
            } else {
                f[s[j][1]] = 1
            }
        }
        s.sort(function(v, t) {
            var w = v[1].innerText ? v[1].innerText : v[1];
            var u = t[1].innerText ? t[1].innerText : t[1];
            return WH.stringCompare(w, u)
        })
    }
    var a = [
        [null, LANG.selectbonus]
    ];
    if (s.length > 0) {
        a = a.concat(s)
    }
    return a
};
WH.getItemBonusChanceType = function(f) {
    var e = 0;
    if (f > 0 && WH.isSet("g_itembonuses") && g_itembonuses && g_itembonuses[f]) {
        var a = g_itembonuses[f];
        for (var c = 0; c < a.length; ++c) {
            var b = a[c];
            var d = 0;
            switch (b[0]) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 11:
                    d = 1;
                    break;
                case 2:
                    d = 2;
                    break;
                case 6:
                    d = 4;
                    break;
                default:
                    break
            }
            if (d && (!e || d < e)) {
                e = d
            }
        }
    }
    return e
};
WH.getItemBonusUpgradeType = function(d) {
    if (d > 0 && WH.isSet("g_itembonuses") && g_itembonuses && g_itembonuses[d]) {
        var a = g_itembonuses[d];
        for (var c = 0; c < a.length; ++c) {
            var b = a[c];
            switch (b[0]) {
                case 3:
                case 4:
                case 5:
                case 11:
                    return 1 << b[0];
                default:
                    break
            }
        }
    }
    return 0
};
WH.getItemBonusName = function(g, p, f) {
    var h = "";
    var c = p.level;
    if (f && WH.isSet("g_itembonuses") && f > 0 && g_itembonuses[f]) {
        for (var d = 0; d < g_itembonuses[f].length; ++d) {
            var l = g_itembonuses[f][d];
            if (l[0] == 1) {
                c += l[1]
            }
        }
    }
    if (WH.isSet("g_itembonuses") && g > 0 && g_itembonuses[g]) {
        var e = g_itembonuses[g].slice();
        e.sort(function(q, j) {
            return q[0] - j[0]
        });
        var a = "";
        var o = "";
        for (var d = 0; d < e.length; ++d) {
            var l = e[d];
            switch (l[0]) {
                case 1:
                    a = LANG.itemlevel + " " + (c + l[1]);
                    break;
                case 2:
                    h += (h ? " / " : "") + ((WH.statToJson[l[1]] && LANG.traits[WH.statToJson[l[1]]]) ? LANG.traits[WH.statToJson[l[1]]][1] : "Unknown stat");
                    break;
                case 3:
                    o = l[1];
                    break;
                case 4:
                    if (WH.isSet("g_item_namedescriptions") && g_item_namedescriptions[l[1]]) {
                        h += (h ? " / " : "") + g_item_namedescriptions[l[1]][0]
                    }
                    break;
                case 5:
                    if (WH.isSet("g_item_namedescriptions") && g_item_namedescriptions[l[1]]) {
                        h = g_item_namedescriptions[l[1]][0]
                    }
                    break;
                case 6:
                    var k = l[2];
                    h += (h ? " / " : "") + l[1] + " " + (g_socket_names[k] || (g_gem_types[k] ? WH.sprintf(LANG.tooltip_emptyrelicslot.replace("%s", "$1"), g_gem_types[k]) : "Unknown Socket"));
                    break;
                case 8:
                    h += (h ? " / " : "") + WH.sprintf(LANG.tooltip_reqlevel_format.replace("%s", "$1"), p.reqlevel + l[1]);
                    break;
                case 11:
                    if (p.heirloombonuses) {
                        var m = "?";
                        for (var b = 0, n; n = p.heirloombonuses[b]; b++) {
                            if (parseInt(g) === n) {
                                m = b + 1;
                                break
                            }
                        }
                        h += (h ? " / " : "") + WH.sprintf(LANG.heirloomupgrade_format, m)
                    }
                    break;
                case 13:
                    a = WH.TERMS.scaleswithlevel_stc;
                    break;
                case 14:
                    if (p.actualBonusLevels && p.actualBonusLevels[g]) {
                        a = LANG.itemlevel + " " + p.actualBonusLevels[g] + "+"
                    } else {
                        a = LANG.itemlevel + " " + l[1] + "+"
                    }
                    break;
                default:
                    break
            }
        }
        h += a ? " / " + a : "";
        h += (o && p.quality != o) ? " / " + WH.Wow.Item.getQualityName(o) : "";
        if (h.substr(0, 3) == " / ") {
            h = h.substr(3)
        }
    } else {
        if (g == "0") {
            h = LANG.normal
        }
    }
    return h ? h : (f ? "???" : LANG.normal)
};
WH.bonusesBtnGetContextBonusId = function(c) {
    var b = 0;
    if (c && c.length) {
        for (var a = 0; a < c.length; ++a) {
            if (WH.isSet("g_itembonuses") && g_itembonuses["-1"].indexOf(parseInt(c[a])) != -1) {
                b = c[a];
                break
            }
        }
    }
    return b
};
WH.bonusesBtnIsComboValid = function(g, d, h) {
    if (!g[d] || !g[d].sub) {
        return false
    }
    var e = g[d].sub;
    var f = 32768;
    var c = 32768;
    for (var a in h) {
        var j = h[a];
        if (j != d) {
            if (e[j]) {
                if ((f & e[j].type) == 1) {} else {
                    if (f & e[j].type) {
                        f = false;
                        break
                    } else {
                        f |= e[j].type
                    }
                }
                if (c & e[j].upgradeType) {
                    c = false;
                    break
                } else {
                    c |= e[j].upgradeType
                }
            } else {
                f = false;
                break
            }
        }
    }
    return f && c
};
WH.bonusesGetItem = function() {
    var a = WH.getDataSource();
    var b = this._bonusesBtn.ttId;
    return a[b]
};
WH.bonusesGetDefaultAdjustmentBonus = function(c) {
    var b = WH.bonusesGetItem.call(this);
    var a = WH.bonusesBtnGetContextBonusId(c);
    if (b.defaultAdjustmentBonuses[a]) {
        return b.defaultAdjustmentBonuses[a].toString()
    }
    return null
};
WH.bonusesBtnOnChange = function(O, X, c) {
    var B = WH.getDataSource();
    var C = this._bonusesBtn.ttId;
    var N = B[C].bonusesData;
    if (c === true) {
        var f = O.split(":");
        var E = 0;
        var y = f.indexOf("u");
        if (y != -1) {
            E = f[y + 1];
            f.splice(y, 1)
        }
        var n = f[0];
        var L = !Menu.findItem(this._bonusesBtn.menu, f).checked;
        var R = 0;
        var r = [];
        WH.arrayWalk(this._bonusesBtn.menu, function(j) {
            if (j.checked) {
                R = j[MENU_IDX_NAME];
                if (j[MENU_IDX_SUB]) {
                    WH.arrayWalk(j[MENU_IDX_SUB], function(ae) {
                        if (ae[MENU_IDX_NAME] && ae.checked) {
                            r.push(ae[MENU_IDX_NAME]);
                            if (R == n && N[R].sub[ae[MENU_IDX_NAME]].groupedUpgrade && !E) {
                                E = ae[MENU_IDX_NAME]
                            }
                        }
                    })
                }
            }
        });
        var e;
        if (R == n) {
            if (L) {
                e = r.concat(f)
            } else {
                r.splice(r.indexOf(f[1]), 1);
                e = r.concat([n])
            }
        } else {
            e = f
        }
        e.sort(function(ae, j) {
            return ae - j
        });
        if (!WH.bonusesBtnIsComboValid(N, n, e)) {
            e = f;
            var G = N[n].sub[f[1]].type;
            var M = N[n].sub[f[1]].upgradeType;
            for (var Z = 0; Z < r.length; ++Z) {
                if (G != N[n].sub[r[Z]].type) {
                    e.push(r[Z])
                } else {
                    if (M != N[n].sub[r[Z]].upgradeType) {
                        e.push(r[Z])
                    }
                }
            }
            e.sort(function(ae, j) {
                return ae - j
            })
        }
        if (E) {
            var H = e.indexOf(E);
            if (H != -1) {
                e.splice(e.indexOf(E), 0, "u")
            }
        }
        O = e.join(":").replace(/^0:/, "")
    }
    this._bonusesBtn.selectedBonus = O;
    var K = this._bonusesBtn.selectedBonus.split(":");
    var S = WH.bonusesGetDefaultAdjustmentBonus.call(this, K);
    if (S != null) {
        var Q = false;
        for (var Z in K) {
            var w = K[Z];
            if (1372 <= w && w <= 1672) {
                Q = true
            }
        }
        if (!Q) {
            K.push(S);
            this._bonusesBtn.selectedBonus = K.join(":")
        }
    }
    var y = K.indexOf("u");
    if (y != -1) {
        K.splice(y, 1)
    }
    var v = [];
    for (var Z = 0; Z < this._bonusesBtn.menu.length; Z++) {
        var z = this._bonusesBtn.menu[Z][MENU_IDX_NAME];
        if (z && v.indexOf(z) < 0) {
            v.push(z)
        }
    }
    K.sort(function(ae, j) {
        return (v.indexOf(ae) < 0 ? 1 : -1) - (v.indexOf(j) < 0 ? 1 : -1)
    });
    $(this._bonusesBtn).html("");
    var q = WH.bonusesBtnGetContextBonusId(K);
    WH.arrayWalk(this._bonusesBtn.menu, function(j) {
        j.checked = j[MENU_IDX_NAME] == q;
        if (j[MENU_IDX_SUB]) {
            WH.arrayWalk(j[MENU_IDX_SUB], function(ae) {
                if (ae[MENU_IDX_NAME]) {
                    ae.checked = j.checked && K.indexOf(ae[MENU_IDX_NAME]) != -1;
                    if (ae.$a) {
                        ae[MENU_IDX_OPT] = null;
                        Menu.updateItem(ae)
                    }
                }
            })
        }
    });
    var ac = Menu.findItem(this._bonusesBtn.menu, [q]);
    if (ac && ac[MENU_IDX_SUB]) {
        WH.arrayWalk(ac[MENU_IDX_SUB], function(ae) {
            if (ae[MENU_IDX_NAME]) {
                var j = K;
                if (K.indexOf(ae[MENU_IDX_NAME]) == -1) {
                    j = j.concat([ae[MENU_IDX_NAME]])
                }
                j.sort(function(ag, af) {
                    return ag - af
                });
                if (!WH.bonusesBtnIsComboValid(N, q, j) && K.indexOf(S) == -1) {
                    ae[MENU_IDX_OPT] = {
                        "class": "q0"
                    }
                } else {
                    ae[MENU_IDX_OPT] = {}
                }
                Menu.updateItem(ae)
            }
        })
    }
    var x = (ac && ac[MENU_IDX_LABEL]) || WH.getItemBonusName.call(this, q, B[C]);
    for (var Z = 0; Z < K.length; ++Z) {
        if (K[Z] != q && K[Z] != S) {
            x += " + " + WH.getItemBonusName.call(this, K[Z], B[C], q)
        }
    }
    $(this._bonusesBtn).append(x);
    var t = 0;
    if (WH.isSet("g_itembonuses") && g_items && g_items[C]) {
        for (var Z in K) {
            var p = K[Z];
            if (g_itembonuses[p]) {
                for (var Y = 0; Y < g_itembonuses[p].length; ++Y) {
                    var D = g_itembonuses[p][Y];
                    if (D[0] == 7 && g_items[C].appearances && g_items[C].appearances[D[1]]) {
                        t = g_items[C].appearances[D[1]][0];
                        break
                    }
                }
            }
        }
    }
    var ab = $("#d1c4b6d5a978ecb63b47c2e6a45e3389");
    if (ab.length > 0) {
        var k = "/upgrade?items=0;" + C;
        if (K.length > 0) {
            k += Array(10).join(".0") + "." + K.join(".")
        }
        ab.get(0).href = k
    }
    var T = $("#e8c7e052e3e0");
    if (T.length > 0) {
        var m = T.get(0).attributes.onclick.value;
        var h = new RegExp("\\(this, " + C + ", \\[[^\\]]*?],");
        if (h.test(m)) {
            var P = [];
            for (var g in K) {
                var l = K[g];
                if (l == 0) {
                    P.push(l);
                    continue
                }
                var W = WH.isSet("g_itembonuses") && g_itembonuses[l] ? g_itembonuses[l] : [];
                for (var A in W) {
                    if (!W.hasOwnProperty(A)) {
                        continue
                    }
                    var ad = W[A][0];
                    var J = W[A][1];
                    if (WH.inArray([1, 2, 6, 14], ad) != -1) {
                        if (ad == 2 && WH.inArray([61, 62, 63, 64, 66], J) != -1) {
                            continue
                        }
                        P.push(l)
                    }
                }
            }
            T.get(0).attributes.onclick.value = m.replace(h, "(this, " + C + ", [" + P.join(",") + "],")
        }
    }
    var aa = $("#ic" + C);
    if (aa.length > 0 && g_items) {
        var V = g_items.getIcon(C, K);
        if (V) {
            aa[0].removeChild(aa[0].firstChild);
            aa[0].appendChild(Icon.create(V, 2))
        }
    }
    var b = $("#dsgndslgn464d");
    if (b.length > 0) {
        var o = b[0].attributes.onclick.value;
        if (!b[0]._defaultDisplayId) {
            var h = new RegExp("displayId: (\\d+),", "g");
            var F = h.exec(o);
            if (F) {
                b[0]._defaultDisplayId = F[1]
            }
        }
        if (!t && b[0]._defaultDisplayId) {
            t = b[0]._defaultDisplayId
        }
        if (t) {
            b[0].attributes.onclick.value = o.replace(/displayId: \d+/, "displayId: " + t)
        }
    }
    var u = $("#e8c6e055e3e0");
    if (u.length > 0) {
        var o = u[0].attributes.onclick.value;
        var a = "";
        if (K.length > 0) {
            var s = [];
            while (s.length < 9) {
                s.push(0)
            }
            for (var Z = 0; Z < K.length; ++Z) {
                s.push(K[Z])
            }
            a = "." + s.join(".")
        }
        u[0].attributes.onclick.value = o.replace(/su_addToSaved\("?(\d+)[.\w]*"?, 1\)/, 'su_addToSaved("$1' + a + '", 1)')
    }
    if (window.history) {
        var I = this._bonusesBtn.selectedBonus.replace(/u:/, "");
        if (location.pathname.indexOf("&bonus") != -1) {
            window.history.replaceState({}, "", location.pathname.replace(/&bonus=\d+(:\d+)*/, "&bonus=" + I) + location.hash)
        } else {
            if (!location.hash) {
                window.history.replaceState({}, "", location.pathname + "&bonus=" + I)
            } else {
                window.history.replaceState({}, "", location.pathname + "&bonus=" + I + location.hash)
            }
        }
    }
    WH.updateItemStringLink.call(this);
    if (!X && B[C]["tooltip_" + Locale.getName()]) {
        var d = WH.ge("sl" + C);
        d.innerHTML = "";
        this.slider = null;
        var U = WH.enhanceTooltip.call(this, C, true, true, d, null, this._knownSpells, WH.ge("ks" + C), this._selectedUpgrade, null, null, true, null, null, this._bonusesBtn.selectedBonus);
        WH.updateTooltip.call(this, U)
    }
};
WH.updateItemStringLink = function() {
    var j = WH.getDataSource();
    var n = WH.isSet("g_pageInfo") ? g_pageInfo.typeId : null;
    if (j[n]) {
        var d = "";
        var h = [];
        if (this._bonusesBtn && this._bonusesBtn.selectedBonus) {
            d = this._bonusesBtn.selectedBonus.replace(/u:/, "");
            h = d.split(":")
        }
        var b = (typeof this._selectedUpgrade == "number") ? this._selectedUpgrade : 0;
        var a = (j[n].upgradeData.length > 0) ? j[n].upgradeData[b].id : "";
        var q = this._selectedLevel ? this._selectedLevel : WH.maxLevel;
        var o = this._knowledgeLevel ? this._knowledgeLevel : 0;
        var p = (this._classSpecBtn && this._classSpecBtn.selectedSpec) ? this._classSpecBtn.selectedSpec : "";
        var c = 0;
        var f = "";
        if (a) {
            c |= 4;
            f = (f ? ":" : "") + a
        } else {
            if (h.length && g_itembonuses) {
                bonus_check_block: for (var k = 0, m; m = h[k]; k++) {
                    if (!g_itembonuses[m]) {
                        continue
                    }
                    for (var l = 0, g; g = g_itembonuses[m][l]; l++) {
                        if (g[0] == 11 || g[0] == 13) {
                            c |= 512;
                            f = (f ? ":" : "") + q;
                            break bonus_check_block
                        }
                    }
                }
            }
        }
        if (o) {
            c |= 8388608;
            f = (f ? ":" : "") + (o + 1)
        }
        var e = "" + (c ? c : "") + "::" + (h.length ? h.length + ":" : "") + d + ":" + f;
        $("#open-links-button").click(function() {
            this.blur();
            var r = {
                type: 3,
                typeId: n,
                linkColor: "ff" + WH.Wow.Item.getQualityColor(j[n].quality, true).replace(/^#/, ""),
                linkId: "item:" + n + "::::::::" + q + ":" + p + ":" + e,
                linkName: j[n]["name_" + Locale.getName()],
                bonuses: h,
                slot: j[n].slot
            };
            if (q != WH.maxLevel) {
                r.lvl = q
            }
            if (p) {
                r.spec = p
            }
            if (sliderControl = WH.ge("sl" + n)) {
                r.dropLevel = $(sliderControl).find("input").val()
            }
            Links.show(r)
        })
    }
};
WH.upgradeItemTooltip = function(d, j) {
    var c = WH.getDataSource();
    var g = g_pageInfo.typeId;
    if (c[g]) {
        var e = $("#" + d.id + " > input");
        var a = null;
        if (typeof j != "number") {
            e.each(function(k, l) {
                if (l.id.indexOf(j) != -1) {
                    a = l;
                    return false
                }
            })
        } else {
            a = e.get(j - 1)
        }
        var h = a.checked;
        e.each(function(k, l) {
            l.checked = false
        });
        a.checked = h;
        if (!h) {
            j = null
        }
        this._selectedUpgrade = j;
        WH.updateItemStringLink.call(this);
        if (c[g]["tooltip_" + Locale.getName()]) {
            var f = this._bonusesBtn && this._bonusesBtn.selectedBonus ? this._bonusesBtn.selectedBonus : null;
            var b = WH.enhanceTooltip.call(this, g, true, true, false, null, this._knownSpells, WH.ge("ks" + g), j, null, null, true, null, null, f);
            WH.updateTooltip.call(this, b)
        }
    }
};
WH.updateTooltip = function(a) {
    this.innerHTML = "<table><tr><td>" + WH.Tooltip.evalFormulas(a) + '</td><th style="background-position: top right"></th></tr><tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr></table>';
    WH.Tooltip.fixSafe(this, 1, 1)
};
WH.staticTooltipLevelClick = function(b, c, h, m) {
    while (b.className.indexOf("tooltip") == -1) {
        b = b.parentNode
    }
    var k = b.innerHTML;
    k = k.match(/<!--i?\?(\d+):(\d+):(\d+):(\d+)/);
    if (!k) {
        return
    }
    var g = parseInt(k[1]),
        a = parseInt(k[2]),
        j = parseInt(k[3]),
        e = parseInt(k[4]);
    if (a >= j) {
        return
    }
    if (!c) {
        c = prompt(WH.sprintf(LANG.prompt_ratinglevel, a, j), e)
    }
    c = parseInt(c);
    if (isNaN(c)) {
        return
    }
    if (c == e || c < a || c > j) {
        return
    }
    b._selectedLevel = c;
    var d = WH.getDataSource();
    k = (WH.setTooltipLevel.bind(b, d[g][(m ? "buff_" : "tooltip_") + Locale.getName()], c, m))();
    var f = b._bonusesBtn && b._bonusesBtn.selectedBonus ? b._bonusesBtn.selectedBonus : null;
    var l = b._selectedUpgrade ? b._selectedUpgrade : 0;
    k = WH.enhanceTooltip.call(b, k, true, null, null, null, null, null, l, null, null, null, null, null, f);
    WH.updateTooltip.call(b, k);
    if (b.slider && !h) {
        Slider.setValue(b.slider, c)
    }
    if (!m) {
        (WH.tooltipSpellsChange.bind(b))()
    }
};
WH.staticTooltipKnowledgeLevelClick = function(h, g, e) {
    while (h.className.indexOf("tooltip") == -1) {
        h = h.parentNode
    }
    var c = h.innerHTML;
    if (!g) {
        WH.Tooltip.hide();
        g = prompt(WH.sprintf(LANG.prompt_ratinglevel, 0, g_artifact_knowledge_max_level), h._knowledgeLevel ? h._knowledgeLevel : 0)
    }
    g = parseInt(g);
    if (isNaN(g)) {
        return
    }
    if (g < 0 || g > g_artifact_knowledge_max_level) {
        return
    }
    h._knowledgeLevel = g;
    if (window.history) {
        var b = g ? "&artk=" + g : "";
        if (location.pathname.indexOf("&artk=") != -1) {
            window.history.replaceState({}, "", location.pathname.replace(/&artk=\d+/, b) + location.hash)
        } else {
            window.history.replaceState({}, "", location.pathname + b + location.hash)
        }
    }
    var a = WH.getDataSource();
    c = (WH.setTooltipLevel.bind(h, a[e]["tooltip_" + Locale.getName()], h._selectedLevel, null))();
    var f = h._bonusesBtn && h._bonusesBtn.selectedBonus ? h._bonusesBtn.selectedBonus : null;
    var d = h._selectedUpgrade ? h._selectedUpgrade : 0;
    c = WH.enhanceTooltip.call(h, c, true, null, null, null, null, null, d, null, null, null, null, null, f);
    WH.updateTooltip.call(h, c)
};
WH.tooltipSliderMove = function(c, b, a) {
    WH.staticTooltipLevelClick(this, a.value, 1);
    if (this.bufftip) {
        WH.staticTooltipLevelClick(this.bufftip, a.value, 1, 1)
    }
    WH.Tooltip.hide()
};
WH.tooltipSpellsChange = function() {
    if (!this.modified) {
        return
    }
    var c = this.modified[0],
        a = this.modified[1],
        b = [];
    $.each($("input:checked", c), function(d, e) {
        b.push(parseInt(e.id.replace("known-", "")))
    });
    this.modified[2] = b;
    this.innerHTML = WH.setTooltipSpells(this.innerHTML, b, a);
    if (this.bufftip) {
        (WH.tooltipSpellsChange.bind(this.bufftip))()
    }
};
WH.tooltipRPPMChange = function(b) {
    var a = $(this).attr("id").match(/\d+$/)[0];
    b.innerHTML = WH.Tooltip.evalFormulas(b.innerHTML.replace(/<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function(c, f, e, d) {
        return "<!--rppm-->" + f + (b._rppmModBase * (1 + parseFloat(b._rppmSpecModList[a].modifiervalue))).toFixed(2) + d + "<!--rppm-->"
    }))
};
WH.validateBpet = function(j, d) {
    var a = 1,
        h = 25,
        k = 25,
        b = 0,
        f = 4,
        e = 3,
        l = (1 << 10) - 1,
        c = 3,
        g = $.extend({}, d);
    if (j.minlevel) {
        a = j.minlevel
    }
    if (j.maxlevel) {
        h = j.maxlevel
    }
    if (j.companion) {
        h = a
    }
    if (!g.level) {
        g.level = k
    }
    g.level = Math.min(Math.max(g.level, a), h);
    if (j.minquality) {
        b = j.minquality;
        if (j.untameable) {
            f = b
        }
    }
    if (j.maxquality) {
        f = j.maxquality
    }
    if (g.quality == null) {
        g.quality = e
    }
    g.quality = Math.min(Math.max(g.quality, b), f);
    if (j.companion) {
        delete(g.quality)
    }
    if (j.breeds > 0) {
        l = j.breeds & l
    }
    if (!(l & (1 << c - 3))) {
        c = Math.floor(3 + Math.log(l) / Math.LN2)
    }
    if (g.breed && g.breed >= 13) {
        g.breed -= 10
    }
    if (!g.breed || !(l & (1 << g.breed - 3))) {
        g.breed = c
    }
    return g
};
WH.calcBattlePetStats = function(j, c, k, a, d) {
    if (!WH.battlePetBreedStats[c]) {
        c = 3
    }
    var h = j.health;
    if (isNaN(h)) {
        h = 0
    }
    var b = j.power;
    if (isNaN(b)) {
        b = 0
    }
    var f = j.speed;
    if (isNaN(f)) {
        f = 0
    }
    if (isNaN(k)) {
        k = 1
    }
    k = Math.min(Math.max(0, k), 5);
    if (isNaN(a)) {
        a = 1
    }
    a = Math.min(Math.max(1, a), 25);
    var e = WH.battlePetBreedStats[c];
    var g = 1 + (k / 10);
    h = ((h + e[0]) * 5 * a * g) + 100;
    b = (b + e[1]) * a * g;
    f = (f + e[2]) * a * g;
    if (d) {
        h = h * 5 / 6;
        b = b * 4 / 5
    }
    return {
        health: Math.round(h),
        power: Math.round(b),
        speed: Math.round(f)
    }
};
WH.battlePetBreedStats = {
    3: [0.5, 0.5, 0.5],
    4: [0, 2, 0],
    5: [0, 0, 2],
    6: [2, 0, 0],
    7: [0.9, 0.9, 0],
    8: [0, 0.9, 0.9],
    9: [0.9, 0, 0.9],
    10: [0.4, 0.9, 0.4],
    11: [0.4, 0.4, 0.9],
    12: [0.9, 0.4, 0.4]
};
WH.battlePetAbilityLevels = [1, 2, 4, 10, 15, 20];
WH.Tooltip = {
    showingTooltip: false,
    create: function(j, l) {
        var g = WH.ce("div"),
            n = WH.ce("table"),
            c = WH.ce("tbody"),
            f = WH.ce("tr"),
            b = WH.ce("tr"),
            a = WH.ce("td"),
            m = WH.ce("th"),
            k = WH.ce("th"),
            h = WH.ce("th");
        g.className = "wowhead-tooltip";
        m.style.backgroundPosition = "top right";
        k.style.backgroundPosition = "bottom left";
        h.style.backgroundPosition = "bottom right";
        if (j) {
            a.innerHTML = WH.Tooltip.evalFormulas(j)
        }
        WH.ae(f, a);
        WH.ae(f, m);
        WH.ae(c, f);
        WH.ae(b, k);
        WH.ae(b, h);
        WH.ae(c, b);
        WH.ae(n, c);
        if (!l) {
            WH.Tooltip.icon = WH.ce("p");
            WH.Tooltip.icon.style.visibility = "hidden";
            WH.ae(WH.Tooltip.icon, WH.ce("div"));
            WH.ae(g, WH.Tooltip.icon)
        }
        WH.ae(g, n);
        if (!l) {
            var e = WH.ce("div");
            e.className = "wowhead-tooltip-powered";
            WH.ae(g, e);
            WH.Tooltip.logo = e
        }
        return g
    },
    getMultiPartHtml: function(b, a) {
        return "<table><tr><td>" + b + "</td></tr></table><table><tr><td>" + a + "</td></tr></table>"
    },
    evalFormulas: function(e) {
        if (typeof e !== "string") {
            return e
        }
        e = e.replace(/<span class="wh-tooltip-formula" style="display:none">(\[[\w\W]*?\])<\/span>\d*/g, "$1");
        var a = 0;
        var d = 0;
        var c = "";
        var g = 0;
        for (var f = 0; f < e.length; f++) {
            var b = e.substr(f, 1);
            switch (b) {
                case "[":
                    a++;
                    d = 0;
                    c = "";
                    break;
                case "]":
                    a--;
                    if (a < 0) {
                        a = 0
                    }
                    d = 0;
                    c = "";
                    break;
                case "(":
                    if (a > 0) {
                        break
                    }
                    c += b;
                    d++;
                    break;
                case ")":
                    if (a > 0) {
                        break
                    }
                    if (d > 0) {
                        c += b;
                        d--
                    }
                    break;
                default:
                    if (a == 0 && d > 0) {
                        c += b
                    }
            }
            if (a == 0 && d == 0 && c) {
                g = f - c.length + 1;
                if (/[^ ()0-9\+\*\/\.-]/.test(c.replace(/<!--[\w\W]*?-->/g, "").replace(/\b(floor|ceil|abs)\b/gi, ""))) {
                    c = "";
                    continue
                }
                if (/^\([0-9\.]*\)$/.test(c)) {
                    c = "";
                    continue
                }
                if (!/<!--[\w\W]*?-->/g.test(c)) {
                    c = "";
                    continue
                }
                e = e.substr(0, g) + "[" + e.substring(g, f + 1) + "]" + e.substr(f + 1);
                f += 2;
                c = ""
            }
        }
        e = e.replace(/\[([^\]]+)\]/g, function(j, l) {
            var h;
            l = l.replace(/<!--[\w\W]*?-->/g, "");
            l = l.replace(/\b(floor|ceil|abs)\b/gi, "Math.$1");
            try {
                h = Function('"use strict";return (' + l + ")")()
            } catch (k) {
                h = undefined
            }
            if (typeof h === "undefined") {
                return j
            }
            return '<span class="wh-tooltip-formula" style="display:none">' + j + "</span>" + Math.abs(h)
        });
        return e
    },
    fix: function(k, b, d) {
        var j = WH.gE(k, "table")[0],
            f = WH.gE(j, "td")[0],
            g = f.childNodes;
        k.className = WH.trim(k.className.replace("tooltip-slider", ""));
        if (g.length >= 2 && g[0].nodeName == "TABLE" && g[1].nodeName == "TABLE") {
            g[0].style.whiteSpace = "nowrap";
            var e = parseInt(k.style.width);
            if (!k.slider || !e) {
                if (g[1].offsetWidth == 0) {
                    e = 320
                } else {
                    if (g[1].offsetWidth > 300) {
                        e = Math.max(300, g[0].offsetWidth) + 20
                    } else {
                        e = Math.max(g[0].offsetWidth, g[1].offsetWidth) + 20
                    }
                }
            }
            for (var h = 2; h < g.length; h++) {
                if (g[h].nodeName == "BLOCKQUOTE") {
                    e = Math.max(e, g[h].offsetWidth + 20)
                }
            }
            e = Math.min(320, e);
            if (e > 20) {
                if (k.slider) {
                    Slider.setSize(k.slider, e - 6);
                    k.className += " tooltip-slider"
                }
                k.className += " wowhead-tooltip-width-restriction wowhead-tooltip-width-" + e;
                k.style.width = e + "px";
                g[0].style.width = g[1].style.width = "100%";
                if (!b && k.offsetHeight > document.body.clientHeight) {
                    j.className = "shrink"
                }
            }
        } else {
            if (g.length >= 1 && k.slider) {
                var a = g[0].nodeName == "TABLE";
                if (a) {
                    g[0].style.whiteSpace = "nowrap"
                }
                var e = parseInt(k.style.width);
                if (!e && a) {
                    e = g[0].offsetWidth + 20
                } else {
                    e = j.offsetWidth + 20
                }
                e = Math.min(320, e);
                if (e > 20) {
                    k.style.width = e + "px";
                    if (a) {
                        g[0].style.width = "100%"
                    }
                    if (k.slider) {
                        Slider.setSize(k.slider, e - 6);
                        k.className += " tooltip-slider"
                    }
                    if (!b && k.offsetHeight > document.body.clientHeight) {
                        j.className = "shrink"
                    }
                }
            }
        }
        if (d) {
            WH.Tooltip.setTooltipVisibility(k, true)
        }
    },
    fixSafe: function(c, b, a) {
        WH.Tooltip.fix(c, b, a)
    },
    attachImage: function(d, e, h, k) {
        if (typeof k == "undefined") {
            k = ""
        }
        if (typeof jQuery != "undefined") {
            jQuery(d.parentNode).children(".image" + k).remove()
        } else {
            var l = new RegExp("\\bimage" + k + "\\b");
            for (var g = 0; g < d.parentNode.childNodes.length; g++) {
                if (l.test(d.parentNode.childNodes[g].className)) {
                    d.parentNode.removeChild(d.parentNode.childNodes[g]);
                    g--
                }
            }
        }
        var j = typeof e;
        if (j == "number") {
            var f = WH.getDataSource(),
                b = e;
            if (f[b] && f[b]["image_" + Locale.getName() + k]) {
                e = f[b]["image_" + Locale.getName() + k]
            } else {
                return
            }
        } else {
            if (j != "string") {
                return
            }
        }
        var a = WH.ce("div");
        a.className = "image" + k + (h ? " " + h : "");
        a.style.backgroundImage = "url(" + e + ")";
        if (typeof jQuery != "undefined") {
            jQuery(d).after(a)
        } else {
            d.parentNode.insertBefore(a, d.nextSibling)
        }
    },
    append: function(e, b, a, d) {
        var e = WH.ge(e);
        var f = WH.Tooltip.create(b, a);
        if (d) {
            var c = WH.ce("p");
            c.style.backgroundImage = "url(" + WH.staticUrl + "/images/wow/icons/medium/" + d.toLowerCase() + ".jpg)";
            WH.ae(c, WH.ce("div"));
            WH.ae(f, c)
        }
        WH.ae(e, f);
        WH.Tooltip.fixSafe(f, 1, 1)
    },
    reset: function() {
        if (WH.Tooltip.tooltip) {
            WH.Tooltip.tooltip.parentNode.removeChild(WH.Tooltip.tooltip);
            WH.Tooltip.tooltip = null
        }
        if (WH.Tooltip.tooltip2) {
            WH.Tooltip.tooltip2.parentNode.removeChild(WH.Tooltip.tooltip2);
            WH.Tooltip.tooltip2 = null
        }
    },
    prepare: function(b) {
        if (WH.Tooltip.tooltip) {
            return
        }
        var c = (typeof b != "undefined") ? b : document.body;
        var a = WH.Tooltip.create();
        a.style.position = "absolute";
        a.style.left = a.style.top = "-2323px";
        WH.ae(c, a);
        WH.Tooltip.tooltip = a;
        WH.Tooltip.tooltipTable = WH.gE(a, "table")[0];
        WH.Tooltip.tooltipTd = WH.gE(a, "td")[0];
        var a = WH.Tooltip.create(null, true);
        a.style.position = "absolute";
        a.style.left = a.style.top = "-2323px";
        WH.ae(c, a);
        WH.Tooltip.tooltip2 = a;
        WH.Tooltip.tooltipTable2 = WH.gE(a, "table")[0];
        WH.Tooltip.tooltipTd2 = WH.gE(a, "td")[0]
    },
    prepareScreen: function() {
        if (WH.Tooltip.screen) {
            WH.Tooltip.screen.style.display = "block"
        } else {
            WH.Tooltip.screen = WH.ce("div", {
                id: "wowhead-tooltip-screen",
                className: "wowhead-tooltip-screen"
            });
            WH.Tooltip.screenCloser = WH.ce("a", {
                id: "wowhead-tooltip-screen-close",
                className: "wowhead-tooltip-screen-close",
                onclick: $WowheadPower.clearTouchTooltip
            });
            WH.Tooltip.screenInnerWrapper = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner-wrapper",
                className: "wowhead-tooltip-screen-inner-wrapper"
            });
            WH.Tooltip.screenInner = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner",
                className: "wowhead-tooltip-screen-inner"
            });
            WH.Tooltip.screenInnerBox = WH.ce("div", {
                id: "wowhead-tooltip-screen-inner-box",
                className: "wowhead-tooltip-screen-inner-box"
            });
            WH.Tooltip.screenCaption = WH.ce("div", {
                id: "wowhead-tooltip-screen-caption",
                className: "wowhead-tooltip-screen-caption"
            });
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCloser);
            WH.ae(WH.Tooltip.screenInner, WH.Tooltip.screenInnerBox);
            WH.ae(WH.Tooltip.screenInnerWrapper, WH.Tooltip.screenInner);
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenInnerWrapper);
            WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCaption);
            WH.ae(document.body, WH.Tooltip.screen)
        }
        WH.Tooltip.mobileTooltipShown = true;
        WH.Tooltip.setupIScroll()
    },
    destroyIScroll: function() {
        if (WH.Tooltip.iScroll) {
            WH.Tooltip.iScroll.destroy();
            WH.Tooltip.iScroll = null
        }
    },
    setupIScroll: function() {
        if (!WH.Tooltip.mobileScrollSetUp) {
            var a = function(b) {
                if (WH.Tooltip.mobileTooltipShown) {
                    if (!document.getElementById("wowhead-tooltip-screen-inner").contains(b.target)) {
                        b.preventDefault()
                    }
                }
            };
            WH.aE(document.body, "touchmove", a);
            WH.aE(document.body, "mousewheel", a);
            WH.Tooltip.mobileScrollSetUp = true
        }
        if (typeof IScroll != "function") {
            return
        }
        setTimeout(function() {
            WH.Tooltip.destroyIScroll();
            WH.Tooltip.iScroll = new IScroll(WH.Tooltip.screenInnerWrapper, {
                mouseWheel: true,
                tap: true
            })
        }, 1)
    },
    setTooltipVisibility: function(a, b) {
        if (b) {
            a.setAttribute("data-visible", "yes");
            a.style.visibility = "visible"
        } else {
            a.setAttribute("data-visible", "no");
            a.style.visibility = "hidden"
        }
    },
    set: function(g, d, f, c) {
        var b = WH.Tooltip.tooltip;
        b.style.width = "550px";
        b.style.left = "-2323px";
        b.style.top = "-2323px";
        WH.Tooltip.tooltip.className = "wowhead-tooltip";
        if (g.nodeName) {
            WH.ee(WH.Tooltip.tooltipTd);
            WH.ae(WH.Tooltip.tooltipTd, g)
        } else {
            WH.Tooltip.tooltipTd.innerHTML = WH.Tooltip.evalFormulas(g)
        }
        b.style.display = "";
        WH.Tooltip.setTooltipVisibility(b, true);
        WH.Tooltip.fix(b, 0, 0);
        if (d) {
            WH.Tooltip.showSecondary = true;
            var b = WH.Tooltip.tooltip2;
            b.style.width = "550px";
            b.style.left = "-2323px";
            b.style.top = "-2323px";
            if (d.nodeName) {
                WH.ee(WH.Tooltip.tooltipTd2);
                WH.ae(WH.Tooltip.tooltipTd2, d)
            } else {
                WH.Tooltip.tooltipTd2.innerHTML = WH.Tooltip.evalFormulas(d)
            }
            b.style.display = "";
            WH.Tooltip.fix(b, 0, 0)
        } else {
            WH.Tooltip.showSecondary = false
        }
        var a = null;
        if (typeof Platform !== "undefined") {
            a = Platform.isTouch()
        } else {
            if (typeof WH !== "undefined") {
                a = WH.isTouch()
            }
        }
        if (a) {
            var e = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTd2 : WH.Tooltip.tooltipTd;
            var h = WH.ce("a");
            h.href = "javascript:;";
            h.className = "wowhead-touch-tooltip-closer";
            h.onclick = $WowheadPower.clearTouchTooltip;
            WH.ae(e, h)
        }
        WH.Tooltip.tooltipTable.style.display = (g == "") ? "none" : "";
        WH.Tooltip.attachImage(WH.Tooltip.tooltipTable, f, c);
        WH.Tooltip.generateEvent("show")
    },
    moveTests: [
        [null, null],
        [null, false],
        [false, null],
        [false, false]
    ],
    move: function(o, n, e, q, d, b) {
        if (!WH.Tooltip.tooltipTable) {
            return
        }
        var r = WH.Tooltip.tooltip,
            j = WH.Tooltip.tooltipTable.offsetWidth,
            c = WH.Tooltip.tooltipTable.offsetHeight,
            l = WH.Tooltip.tooltip2,
            g = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetWidth : 0,
            a = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetHeight : 0,
            p;
        r.style.width = (j == 0) ? "auto" : (j + "px");
        l.style.width = g + "px";
        var m, f;
        for (var h = 0, k = WH.Tooltip.moveTests.length; h < k; ++h) {
            p = WH.Tooltip.moveTests[h];
            m = WH.Tooltip.moveTest(o, n, e, q, d, b, p[0], p[1]);
            if (WH.isSet("WAS") && !WAS.intersect(m)) {
                f = true;
                break
            } else {
                if (!WH.isSet("WAS")) {
                    break
                }
            }
        }
        if (WH.isSet("WAS") && !f) {
            WAS.intersect(m, true)
        }
        r.style.left = m.l + "px";
        r.style.top = m.t + "px";
        WH.Tooltip.setTooltipVisibility(r, true);
        if (WH.Tooltip.showSecondary) {
            l.style.left = m.l + j + "px";
            l.style.top = m.t + "px";
            WH.Tooltip.setTooltipVisibility(l, true)
        }
        WH.Tooltip.generateEvent("move")
    },
    moveTest: function(e, m, r, n, b, a, o, l) {
        var A = e,
            q = m,
            f = WH.Tooltip.tooltip,
            k = WH.Tooltip.tooltipTable.offsetWidth,
            t = WH.Tooltip.tooltipTable.offsetHeight,
            p = WH.Tooltip.tooltip2,
            z = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetWidth : 0,
            g = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetHeight : 0,
            j = WH.getWindowSize(),
            d = WH.getScroll(),
            h = j.w,
            s = j.h,
            c = d.x,
            y = d.y,
            x = c,
            w = y,
            v = c + h,
            u = y + s;
        if (o == null) {
            o = (e + r + k + z <= v)
        }
        if (l == null) {
            l = (m - Math.max(t, g) >= w)
        }
        if (o) {
            e += r + b
        } else {
            e = Math.max(e - (k + z), x) - b
        }
        if (l) {
            m -= Math.max(t, g) + a
        } else {
            m += n + a
        }
        if (e < x) {
            e = x
        } else {
            if (e + k + z > v) {
                e = v - (k + z)
            }
        }
        if (m < w) {
            m = w
        } else {
            if (m + Math.max(t, g) > u) {
                m = Math.max(y, u - Math.max(t, g))
            }
        }
        if (WH.Tooltip.iconVisible) {
            if (A >= e - 48 && A <= e && q >= m - 4 && q <= m + 48) {
                m -= 48 - (q - m)
            }
        }
        return WH.createRect(e, m, k, t)
    },
    show: function(f, j, c, a, b, d, e, h) {
        if (WH.Tooltip.disabled) {
            return
        }
        if (!c || c < 1) {
            c = 1
        }
        if (!a || a < 1) {
            a = 1
        }
        if (b) {
            j = '<span class="' + b + '">' + j + "</span>"
        }
        var g = WH.ac(f);
        WH.Tooltip.prepare();
        WH.Tooltip.set(j, d, e, h);
        WH.Tooltip.move(g.x, g.y, f.offsetWidth, f.offsetHeight, c, a)
    },
    showAtCursor: function(g, k, c, a, b, d, f, j) {
        if (WH.Tooltip.disabled) {
            return
        }
        if (!c || c < 10) {
            c = 10
        }
        if (!a || a < 10) {
            a = 10
        }
        if (b) {
            k = '<span class="' + b + '">' + k + "</span>";
            if (d) {
                d = '<span class="' + b + '">' + d + "</span>"
            }
        }
        g = WH.normalizeEvent(g);
        var h = WH.getCursorPos(g);
        WH.Tooltip.prepare();
        WH.Tooltip.set(k, d, f, j);
        WH.Tooltip.move(h.x, h.y, 0, 0, c, a)
    },
    showAtXY: function(g, a, h, d, b, e, f, c) {
        if (WH.Tooltip.disabled) {
            return
        }
        WH.Tooltip.prepare();
        WH.Tooltip.set(g, e, f, c);
        WH.Tooltip.move(a, h, 0, 0, d, b)
    },
    showInScreen: function(e, j, b, c, d, h, f) {
        $WowheadPower.clearTouchTooltip(true);
        if (WH.Tooltip.disabled) {
            return
        }
        if (b) {
            j = '<span class="' + b + '">' + j + "</span>"
        }
        WH.Tooltip.prepareScreen();
        WH.ee(WH.Tooltip.screenCaption);
        var g = WH.ce("a", {
            innerHTML: WH.isRemote() ? "Tap Link" : LANG.tooltip_taplink,
            onclick: (function(l, a) {
                l.setAttribute("data-disable-wowhead-tooltip", "true");
                if (l.fireEvent) {
                    l.fireEvent("on" + a)
                } else {
                    if (typeof MouseEvent == "function") {
                        l.dispatchEvent(new MouseEvent(a, {
                            bubbles: true,
                            cancelable: true
                        }))
                    } else {
                        var m = document.createEvent("Events");
                        m.initEvent(a, true, true);
                        l.dispatchEvent(m)
                    }
                }
                if (l) {
                    l.removeAttribute("data-disable-wowhead-tooltip")
                }
                $WowheadPower.clearTouchTooltip()
            }).bind(null, e, "click")
        });
        var k = WH.ce("i", {
            className: "fa fa-hand-o-up"
        });
        WH.aef(g, k);
        WH.ae(WH.Tooltip.screenCaption, g);
        $WowheadPower.setParent(WH.Tooltip.screenInnerBox);
        WH.Tooltip.setIcon(f);
        WH.Tooltip.set(j, c, d, h);
        WH.Tooltip.move()
    },
    cursorUpdate: function(b, a, d) {
        if (WH.Tooltip.disabled || !WH.Tooltip.tooltip) {
            return
        }
        b = WH.normalizeEvent(b);
        if (!a || a < 10) {
            a = 10
        }
        if (!d || d < 10) {
            d = 10
        }
        var c = WH.getCursorPos(b);
        WH.Tooltip.move(c.x, c.y, 0, 0, a, d)
    },
    hide: function() {
        if (WH.Tooltip.tooltip) {
            WH.Tooltip.showingTooltip = false;
            WH.Tooltip.tooltip.style.display = "none";
            WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip, false);
            WH.Tooltip.tooltipTable.className = "";
            WH.Tooltip.setIcon(null);
            if (WH.isSet("WAS")) {
                WAS.restoreHidden()
            }
            WH.Tooltip.generateEvent("hide")
        }
        if (WH.Tooltip.tooltip2) {
            WH.Tooltip.tooltip2.style.display = "none";
            WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip2, false);
            WH.Tooltip.tooltipTable2.className = ""
        }
    },
    setIcon: function(a) {
        WH.Tooltip.prepare();
        if (a) {
            WH.Tooltip.icon.style.backgroundImage = "url(" + WH.staticUrl + "/images/wow/icons/medium/" + a.toLowerCase() + ".jpg)";
            WH.Tooltip.icon.style.visibility = "visible"
        } else {
            WH.Tooltip.icon.style.backgroundImage = "none";
            WH.Tooltip.icon.style.visibility = "hidden"
        }
        WH.Tooltip.iconVisible = a ? 1 : 0
    },
    generateEvent: function(a) {
        if (!WH.Tooltip.tooltip) {
            return
        }
        try {
            WH.Tooltip.tooltip.dispatchEvent(new Event(a))
        } catch (c) {
            try {
                var b = document.createEvent("Event");
                b.initEvent(a, true, true);
                WH.Tooltip.tooltip.dispatchEvent(b)
            } catch (c) {
                void(0)
            }
        }
    },
    addTooltipText: function(a, c, b) {
        if (!a) {
            WH.error("Tooltip text addition element not found!", a, c, b);
            return
        }
        a._fixTooltip = (function(f, l, h, e) {
            var g = /<\/table>\s*$/;
            var k = typeof h === "function" ? h() : h;
            var j = h ? ' class="' + k + '"' : "";
            var d = typeof l === "function" ? l() : l;
            if (g.test(e)) {
                return e.replace(g, '<tr><td colspan="2"><div' + j + ' style="margin-top:10px">' + d + "</div></td></tr></table>")
            } else {
                return e + "<div" + j + ' style="margin-top:10px">' + d + "</div>"
            }
        }).bind(null, a, c, b)
    },
    simple: function(c, j, f, a, g, e, h) {
        if (c instanceof jQuery) {
            for (var d = 0, b; b = c[d]; d++) {
                WH.Tooltip.simple(b, j, f, a, g, e, h)
            }
            return
        }
        if (e) {
            j = '<div class="no-wrap">' + j + "</div>"
        }
        if (h && !isNaN(h)) {
            j = '<div style="max-width:' + h + 'px">' + j + "</div>"
        }
        if (a) {
            if (g) {
                c.onmouseover = function(k) {
                    WH.Tooltip.show(c, typeof j === "function" ? j.call(this, k) : j, false, false, f);
                    k.stopPropagation()
                }
            } else {
                c.onmouseover = function(k) {
                    WH.Tooltip.show(c, typeof j === "function" ? j.call(this, k) : j, false, false, f)
                }
            }
        } else {
            if (g) {
                c.onmouseover = function(k) {
                    WH.Tooltip.showAtCursor(k, typeof j === "function" ? j.call(this, k) : j, false, false, f);
                    k.stopPropagation()
                }
            } else {
                c.onmouseover = function(k) {
                    WH.Tooltip.showAtCursor(k, typeof j === "function" ? j.call(this, k) : j, false, false, f)
                }
            }
            c.onmousemove = WH.Tooltip.cursorUpdate
        }
        c.onmouseout = WH.Tooltip.hide
    },
    simpleNonTouch: function(a, d, b, c, e) {
        if (!Platform.isTouch()) {
            WH.Tooltip.simple(a, d, b, c, false, e)
        }
    },
    simpleOverride: function(e, f, c, a, h, g, j, d, k, b, l) {
        e.overrideTooltip = {
            html: f,
            htmlGenerator: c,
            spanClass: a,
            icon: h,
            html2: g,
            html2Generator: j,
            image: d,
            imageClass: k,
            map: b,
            spellData: l
        }
    }
};
WH.createButton = function(l, d, o) {
    var j = "btn btn-site";
    var h = "";
    var e = "";
    var c = "";
    var n = "";
    var f = [];
    var m = [];
    if (!o) {
        o = {}
    }
    if (!o["no-margin"]) {
        m.push("margin-left:5px")
    }
    if (typeof d != "string" || d === "") {
        d = "javascript:;"
    }
    if (o["new-window"]) {
        h = ' target="_blank"'
    }
    if (typeof o.id == "string") {
        e = ' id="' + o.id + '"'
    }
    if (typeof o.size != "undefined") {
        switch (o.size) {
            case "small":
            case "large":
                f.push("btn-" + o.size);
                break
        }
    } else {
        f.push("btn-small")
    }
    if (typeof o["class"] == "string") {
        f.push(o["class"])
    }
    if (typeof o.type == "string") {
        switch (o.type) {
            case "default":
            case "gray":
                j = "btn";
                break;
            default:
                j = "btn btn-" + o.type
        }
    }
    if (o.disabled) {
        f.push("btn-disabled");
        d = "javascript:;"
    }
    if (f.length) {
        j += " " + f.join(" ")
    }
    if (j) {
        j = ' class="' + j + '"'
    }
    if (!(typeof o["float"] != "undefined" && !o["float"])) {
        m.push("float:right")
    }
    if (typeof o.style == "string") {
        m.push(o.style)
    }
    if (m.length) {
        c = ' style="' + m.join(";") + '"'
    }
    var g = '<a href="' + d + '"' + h + e + j + c + ">" + (l || "") + "</a>";
    var b = WH.ce("div");
    b.innerHTML = g;
    var k = b.childNodes[0];
    if (typeof o.click == "function" && !o.disabled) {
        k.onclick = o.click
    }
    if (typeof o.tooltip != "undefined") {
        if (o.tooltip !== false) {
            k.setAttribute("data-whattach", "true")
        }
        if (o.tooltip === false) {
            k.rel = "np"
        } else {
            if (typeof o.tooltip == "string") {
                WH.Tooltip.simple(k, o.tooltip, null, true)
            } else {
                if (typeof o.tooltip == "object" && o.tooltip["text"]) {
                    WH.Tooltip.simple(k, o.tooltip["text"], o.tooltip["class"], true)
                }
            }
        }
    }
    return k
};
if (WH.isSet("$WowheadPower")) {
    $WowheadPower.init()
};