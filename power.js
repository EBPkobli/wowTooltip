if (typeof WH === "undefined") {
    var g_staticUrl = "https://wow.zamimg.com";
    var WH = {
        data: {},
        entities: {},
        wowheadRemote: true
    }
}
WH.isTouch = function() {
    if (!WH.wowheadRemote && typeof Platform !== "undefined") {
        WH.isTouch = function() {
            return Platform.isTouch()
        }
    } else {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var a = {
            isMobile: false,
            isTablet: false
        };
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a.isMobile = true
        }
        if (!a.isMobile && /(android|ipad|playbook|silk)/i.test(b)) {
            a.isTablet = true
        }
        WH.isTouch = (function(c) {
            return c.isMobile || c.isTablet
        }).bind(null, a);
        WH.isMobile = (function(c) {
            return c
        }).bind(null, a.isMobile);
        WH.isTablet = (function(c) {
            return c
        }).bind(null, a.isTablet)
    }
    return WH.isTouch()
};
if (typeof $WowheadPower === "undefined") {
    var $WowheadPower = new function() {
        var ab = {
            1: {
                name: "NPC",
                path: "npc",
                data: {},
                maxId: 500000
            },
            2: {
                name: "Object",
                path: "object",
                data: {},
                maxId: 750000
            },
            3: {
                name: "Item",
                path: "item",
                data: {},
                maxId: 500000
            },
            4: {
                name: "Item Set",
                path: "item-set",
                data: {},
                maxId: 10000,
                minId: -5000
            },
            5: {
                name: "Quest",
                path: "quest",
                data: {},
                maxId: 100000
            },
            6: {
                name: "Spell",
                path: "spell",
                data: {},
                maxId: 500000
            },
            7: {
                name: "Zone",
                path: "zone",
                data: {},
                maxId: 50000
            },
            10: {
                name: "Achievement",
                path: "achievement",
                data: {},
                maxId: 50000
            },
            12: {
                name: "Holiday",
                path: "event",
                data: {},
                maxId: 10000
            },
            17: {
                name: "Currency",
                path: "currency",
                data: {},
                maxId: 10000
            },
            20: {
                name: "Building",
                path: "building",
                data: {},
                maxId: 1000
            },
            21: {
                name: "Follower",
                path: "follower",
                data: {},
                maxId: 10000
            },
            22: {
                name: "Mission Ability",
                path: "mission-ability",
                data: {},
                maxId: 10000
            },
            23: {
                name: "Mission",
                path: "mission",
                data: {},
                maxId: 10000
            },
            25: {
                name: "Ship",
                path: "ship",
                data: {},
                maxId: 10000
            },
            26: {
                name: "Threat",
                path: "threat",
                data: {},
                maxId: 1000
            },
            27: {
                name: "Resource",
                path: "resource",
                data: {},
                maxId: 100,
                minId: 0
            },
            28: {
                name: "Champion",
                path: "champion",
                data: {},
                maxId: 10000
            },
            30: {
                name: "Order Advancement",
                path: "order-advancement",
                data: {},
                maxId: 5000
            },
            38: {
                name: "BFA Champion",
                path: "bfa-champion",
                data: {},
                maxId: 10000
            },
            40: {
                name: "Affix",
                path: "affix",
                data: {},
                maxId: 1000
            },
            100: {
                name: "Guide",
                path: "guide",
                data: {}
            },
            101: {
                name: "Transmog Set",
                path: "transmog-set",
                data: {},
                maxId: 50000
            },
            110: {
                name: "Outfit",
                path: "outfit",
                data: {}
            },
            200: {
                name: "Pet Ability",
                path: "pet-ability",
                data: {},
                maxId: 10000
            }
        };
        var P = WH.wowheadRemote;
        var B = false;
        var ax = {
                applyto: 3
            },
            M = document.getElementsByTagName("head")[0],
            aJ, aC = {
                "float": 0,
                attachToIcon: 1,
                screen: 2,
                attach: 3,
                attachWithoutScreenshot: 4
            },
            A = 550,
            aQ = {
                colorLinks: "colorlinks",
                iconizeLinks: "iconizelinks",
                renameLinks: "renamelinks"
            },
            aj, F, T, av, p, an, at, ar, am = aC["float"],
            H = false,
            ad = null,
            G = 1,
            E = 1,
            aG = -1,
            o = 0,
            d = 1,
            O = 0,
            ae = 1,
            aB = 2,
            g = 3,
            ak = 4,
            y = 5,
            ac = 1,
            U = 2,
            x = 3,
            l = 4,
            aE = 5,
            ag = 6,
            W = 7,
            X = 10,
            m = 12,
            k = 17,
            aD = 20,
            aa = 21,
            D = 22,
            aF = 23,
            t = 25,
            ah = 26,
            q = 27,
            N = 28,
            aP = 30,
            aL = 38,
            c = 40,
            n = 100,
            aI = 101,
            b = 110,
            ap = 200,
            f = 15,
            C = 15,
            a = {
                0: {
                    loading: "Loadingâ€¦",
                    noResponse: "No response from server :(",
                    achievementComplete: "Achievement earned by $1 on $2/$3/$4"
                },
                1: {
                    loading: "ë¡œë”© ì¤‘â€¦",
                    noResponse: "ì„œë²„ê°€ ì‘ë‹µí•˜ì§€ ì•ŠìŠµë‹ˆë‹¤ :(",
                    achievementComplete: "$1ì´(ê°€) $2/$3/$4ì— ì—…ì ì„ ë‹¬ì„±í•¨"
                },
                2: {
                    loading: "Chargementâ€¦",
                    noResponse: "Pas de rÃ©ponse du serveur :(",
                    achievementComplete: "Haut-fait reÃ§u par $1 le $2/$3/$4"
                },
                3: {
                    loading: "LÃ¤dtâ€¦",
                    noResponse: "Keine Antwort vom Server :(",
                    achievementComplete: "Erfolg wurde von $1 am $3.$2.$4 errungen"
                },
                4: {
                    loading: "æ­£åœ¨è½½å…¥â€¦",
                    noResponse: "æœåŠ¡å™¨æ²¡æœ‰å“åº” :(",
                    achievementComplete: "$1åœ¨$2/$3/$4ä¸ŠèŽ·å¾—æˆå°±"
                },
                6: {
                    loading: "Cargandoâ€¦",
                    noResponse: "No hay respuesta del servidor :(",
                    achievementComplete: "Logro conseguido por $1 el $2/$3/$4"
                },
                7: {
                    loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°â€¦",
                    noResponse: "ÐÐµÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚Ð° Ð¾Ñ‚ ÑÐµÑ€Ð²ÐµÑ€Ð° :(",
                    achievementComplete: "$1 Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»(Ð°) ÑÑ‚Ð¾ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ðµ $2/$3/$4"
                },
                8: {
                    loading: "Carregandoâ€¦",
                    noResponse: "Sem resposta do servidor :(",
                    achievementComplete: "Conquista conseguida por $1 em $3/$2/$4"
                },
                9: {
                    loading: "Caricamentoâ€¦",
                    noResponse: "Nessuna risposta dal server :(",
                    achievementComplete: "Impresa compiuta da $1 su $2/$3/$4"
                }
            },
            v = [n];
        var Z = new function() {
            var aV = {};
            var aU = {};
            var aT = {};
            var aS = {};
            this.fetch = function(aZ, a1) {
                if (!aS.hasOwnProperty(aZ) || aS[aZ].hasOwnProperty(a1)) {
                    return
                }
                aS[aZ][a1] = ae;
                aV[aZ][a1] = [];
                var a0 = a1;
                switch (a1) {
                    case "beta":
                        a0 = WH.BETA_DOMAIN || a0;
                        break;
                    case "live":
                        a0 = "www";
                        break
                }
                var aY = ai(a0) + aU[aZ];
                aY += (typeof g_wow_build !== "undefined") ? "&" + g_wow_build : "";
                aY += "&json";
                WH.xhrJsonRequest(aY, (function(a2, a4, a3) {
                    if (!a3) {
                        WH.error("Wowhead tooltips failed to load scaling data for " + au(a2));
                        return
                    }
                    Z.setData(a2, a4, a3)
                }).bind(null, aZ, a1))
            };
            this.isLoaded = function(aY, aZ) {
                if (!aS.hasOwnProperty(aY)) {
                    return true
                }
                if (aS[aY][aZ] === ak) {
                    aW();
                    return true
                }
                return false
            };
            this.registerCallback = function(aY, a0, aZ) {
                if (this.isLoaded(aY, a0)) {
                    window.requestAnimationFrame(aZ);
                    return
                }
                if (!aV[aY].hasOwnProperty(a0)) {
                    this.fetch(aY, a0)
                }
                aV[aY][a0].push(aZ)
            };
            this.setData = function(aZ, a1, a0) {
                aS[aZ][a1] = ak;
                aV[aZ][a1] = aV[aZ][a1] || [];
                aT[aZ][a1] = a0;
                aW();
                var aY = aV[aZ][a1];
                while (aY.length) {
                    aY.shift()()
                }
            };

            function aX() {
                aU[x] = "/data/item-scaling";
                aU[ag] = "/data/spell-scaling";
                for (var aY in aU) {
                    if (!aU.hasOwnProperty(aY)) {
                        continue
                    }
                    aS[aY] = {};
                    aV[aY] = {};
                    aT[aY] = {}
                }
            }

            function aW() {
                var aZ = T || WH.getDataEnv();
                var aY;
                if (aY = aT[x][aZ]) {
                    WH.convertRatingToPercent.RB = aY.combatRatingsBase;
                    WH.convertRatingToPercent.LH = aY.ratingsToPercentLH;
                    WH.convertRatingToPercent.RM = aY.ratingsToPercentRM;
                    WH.convertRatingToPercent.LT = aY.ratingsToPercentLT;
                    WH.convertScalingFactor.SV = aY.itemScalingValue;
                    WH.convertScalingFactor.SD = aY.scalingFactors;
                    WH.curvePoints = aY.curvePoints;
                    WH.applyStatModifications.ScalingData = aY.scalingData;
                    WH.data.artifactKnowledgeMultiplier = aY.artifactKnowledgeMultiplier
                }
                if (aY = aT[ag][aZ]) {
                    WH.convertScalingSpell.SV = aY.scalingValue;
                    WH.convertScalingSpell.SpellInformation = aY.spellInformation;
                    WH.convertScalingSpell.RandPropPoints = aY.randPropPoints
                }
            }
            aX()
        };
        this.setScales = Z.setData;
        var s = {
            0: "enus",
            1: "kokr",
            2: "frfr",
            3: "dede",
            4: "zhcn",
            6: "eses",
            7: "ruru",
            8: "ptbr",
            9: "itit"
        };
        var Y = {
            getId: function() {
                return 0
            },
            getName: function() {
                return "enus"
            }
        };
        if (typeof aK === "undefined") {
            var aK = {
                tooltip_genericrating: '<span class="q2">Equip: Increases your $1 by <!--rtg$2-->$3&nbsp;<small>(<!--rtg%$2-->0&nbsp;@&nbsp;L<!--lvl-->0)</small>.</span><br />',
                tooltip_reforged: "Reforged ($1 $2 &rarr; $1 $3)",
                traits: {
                    agi: ["Agility", "Agi", "Agi"],
                    arcres: ["Arcane resistance", "Arcane Resist", "ArcR"],
                    arcsplpwr: ["Arcane spell power", "Arcane Power", "ArcP"],
                    armor: ["Armor", "Armor", "Armor"],
                    armorbonus: ["Additional armor", "Bonus Armor", "AddAr"],
                    armorpenrtng: ["Armor penetration rating", "Armor Pen", "Pen"],
                    atkpwr: ["Attack power", "AP", "AP"],
                    block: ["Block value", "Block Value", "BkVal"],
                    blockrtng: ["Block rating", "Block", "Block"],
                    critstrkrtng: ["Critical strike rating", "Crit", "Crit"],
                    defrtng: ["Defense rating", "Defense", "Def"],
                    dmg: ["Weapon damage", "Damage", "Dmg"],
                    dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                    dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                    dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                    dps: ["Damage per second", "DPS", "DPS"],
                    exprtng: ["Expertise rating", "Expertise", "Exp"],
                    firres: ["Fire resistance", "Fire Resist", "FirR"],
                    firsplpwr: ["Fire spell power", "Fire Power", "FireP"],
                    frores: ["Frost resistance", "Frost Resist", "FroR"],
                    frosplpwr: ["Frost spell power", "Frost Power", "FroP"],
                    hastertng: ["Haste rating", "Haste", "Haste"],
                    health: ["Health", "Health", "Hlth"],
                    healthrgn: ["Health regeneration", "HP5", "HP5"],
                    hitrtng: ["Hit rating", "Hit", "Hit"],
                    holres: ["Holy resistance", "Holy Resist", "HolR"],
                    holsplpwr: ["Holy spell power", "Holy Power", "HolP"],
                    "int": ["Intellect", "Int", "Int"],
                    level: ["Level", "Level", "Lvl"],
                    mana: ["Mana", "Mana", "Mana"],
                    manargn: ["Mana regeneration", "MP5", "MP5"],
                    mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                    mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                    mlecritstrkrtng: ["Melee critical strike rating", "Melee Crit", "Crit"],
                    mledmgmax: ["Melee maximum damage", "Melee Max Damage", "Max"],
                    mledmgmin: ["Melee minimum damage", "Melee Min Damage", "Min"],
                    mledps: ["Melee DPS", "Melee DPS", "DPS"],
                    mlehastertng: ["Melee haste rating", "Melee Haste", "Haste"],
                    mlehitrtng: ["Melee hit rating", "Melee Hit", "Hit"],
                    mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                    natres: ["Nature resistance", "Nature Resist", "NatR"],
                    natsplpwr: ["Nature spell power", "Nature Power", "NatP"],
                    nsockets: ["Number of sockets", "Sockets", "Sockt"],
                    parryrtng: ["Parry rating", "Parry", "Parry"],
                    reqarenartng: ["Required personal and team arena rating", "Req Rating", "Rating"],
                    reqlevel: ["Required level", "Req Level", "Level"],
                    resirtng: ["PvP Resilience rating", "PvP Resilience", "Resil"],
                    rgdatkpwr: ["Ranged attack power", "Ranged AP", "RAP"],
                    rgdcritstrkrtng: ["Ranged critical strike rating", "Ranged Crit", "Crit"],
                    rgddmgmax: ["Ranged maximum damage", "Ranged Max Damage", "Max"],
                    rgddmgmin: ["Ranged minimum damage", "Ranged Min Damage", "Min"],
                    rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                    rgdhastertng: ["Ranged haste rating", "Ranged Haste", "Haste"],
                    rgdhitrtng: ["Ranged hit rating", "Ranged Hit", "Hit"],
                    rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                    sepbasestats: "Base stats",
                    sepdefensivestats: "Defensive stats",
                    sepindividualstats: "Individual stats",
                    sepoffensivestats: "Offensive stats",
                    sepresistances: "Resistances",
                    sepweaponstats: "Weapon stats",
                    shares: ["Shadow resistance", "Shadow Resist", "ShaR"],
                    shasplpwr: ["Shadow spell power", "Shadow Power", "ShaP"],
                    speed: ["Speed", "Speed", "Speed"],
                    spi: ["Spirit", "Spi", "Spi"],
                    splcritstrkrtng: ["Spell critical strike rating", "Spell Crit", "Crit"],
                    spldmg: ["Damage done by spells", "Spell Damage", "Dmg"],
                    splheal: ["Healing done by spells", "Healing", "Heal"],
                    splpwr: ["Spell power", "Spell Power", "SP"],
                    splhastertng: ["Spell haste rating", "Spell Haste", "Haste"],
                    splhitrtng: ["Spell hit rating", "Spell Hit", "Hit"],
                    splpen: ["Spell penetration", "Spell Pen", "Pen"],
                    sta: ["Stamina", "Sta", "Sta"],
                    str: ["Strength", "Str", "Str"],
                    pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                }
            }
        }

        function aq() {
            if (WH.Tooltip) {
                WH.wowheadRemotePreload = true
            }
            if (P) {
                if (!WH.wowheadRemotePreload) {
                    var aS = ["basic.js?20"];
                    if (j("iconSize")) {
                        aS.push("global/WH/Icon.js")
                    }
                    for (var aV = 0, aU; aU = aS[aV]; aV++) {
                        var aT = document.createElement("script");
                        aT.src = g_staticUrl + "/js/" + aU;
                        M.appendChild(aT)
                    }
                }
            } else {
                R();
                u(function() {
                    Y = window.Locale;
                    Z.fetch(x, WH.getDataEnv());
                    Z.fetch(ag, WH.getDataEnv())
                })
            }
        }

        function aw() {
            var aT = j("hide");
            if (!aT) {
                return
            }
            if (typeof aJ !== "undefined") {
                return
            }
            if (!document.styleSheets) {
                return
            }
            var aU = document.createElement("style");
            aU.type = "text/css";
            M.appendChild(aU);
            if (!window.createPopup) {
                M.appendChild(document.createTextNode(""))
            }
            aJ = document.styleSheets[document.styleSheets.length - 1];
            for (var aS in aT) {
                if (!aT.hasOwnProperty(aS) || !aT[aS]) {
                    continue
                }
                if (aJ.insertRule) {
                    aJ.insertRule(".wowhead-tooltip .whtt-" + aS + "{display: none}", aJ.cssRules.length)
                } else {
                    if (aJ.addRule) {
                        aJ.addRule(".wowhead-tooltip .whtt-" + aS, "display: none", -1)
                    }
                }
            }
        }
        this.getEntity = function(aT, aW, aV, aS) {
            var aU = aO(aT);
            aU[aW] = aU[aW] || {};
            aU[aW][aV] = aU[aW][aV] || {};
            aU[aW][aV][aS] = aU[aW][aV][aS] || {
                status: O,
                callbacks: [],
                data: {}
            };
            return aU[aW][aV][aS]
        };

        function aO(aS) {
            if (typeof ab[aS] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aS);
                return null
            }
            return ab[aS].data
        }

        function aH(aS) {
            if (typeof ab[aS] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aS);
                return undefined
            }
            if (!WH.wowheadRemote || !ab[aS].hasOwnProperty("maxId")) {
                return undefined
            }
            return {
                min: ab[aS].hasOwnProperty("minId") ? ab[aS].minId : 1,
                max: ab[aS].maxId
            }
        }

        function au(aS) {
            if (typeof ab[aS] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aS);
                return "Entity"
            }
            return ab[aS].name
        }

        function al(aS) {
            if (typeof ab[aS] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aS);
                return "unknown"
            }
            return ab[aS].path
        }

        function e(aS, aT) {
            var aU = a[aS] || a[0];
            return aU[aT] || ""
        }

        function j(aT) {
            var aS = S();
            if (!aS) {
                return null
            }
            if (!aS.hasOwnProperty(aT)) {
                if (aQ[aT] && aS.hasOwnProperty(aQ[aT])) {
                    return aS[aQ[aT]]
                }
                return null
            }
            return aS[aT]
        }

        function S() {
            if (typeof whTooltips === "object") {
                return whTooltips
            }
            if (typeof wowhead_tooltips === "object") {
                return wowhead_tooltips
            }
            return null
        }

        function R() {
            if (H) {
                return
            }
            H = true;
            WH.aE(document, "keydown", function(aS) {
                aS = WH.normalizeEvent(aS);
                switch (aS.keyCode) {
                    case 27:
                        $WowheadPower.clearTouchTooltip();
                        WH.Tooltip.hide();
                        break
                }
            });
            if (WH.isTouch()) {
                i()
            } else {
                WH.aE(document, "mouseover", I)
            }
        }
        this.attachTouchTooltips = function(aS) {
            if (!WH.isTouch()) {
                return
            }
            if (aS && aS.nodeType === 1) {
                i(aS)
            }
        };

        function u(aS) {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", aS)
            } else {
                aS()
            }
        }

        function i(aS) {
            if (!WH.isTouch()) {
                return
            }
            u(function() {
                aS = aS || document.body;
                var aT = WH.gE(aS, "a");
                for (var aU in aT) {
                    if (aT[aU].onclick == null) {
                        aT[aU].onclick = r;
                        continue
                    }
                    WH.aE(aT[aU], "click", r)
                }
            })
        }
        this.init = function() {
            if (j("iconSize") && typeof Icon === "undefined") {
                setTimeout($WowheadPower.init, 10);
                return
            }
            if (P) {
                if (!WH.wowheadRemotePreload) {
                    WH.ae(M, WH.ce("link", {
                        type: "text/css",
                        href: g_staticUrl + "/css/basic.css?&14",
                        rel: "stylesheet"
                    }));
                    if (j("iconSize")) {
                        WH.ae(M, WH.ce("link", {
                            type: "text/css",
                            href: g_staticUrl + "/css/global/icon.css",
                            rel: "stylesheet"
                        }))
                    }
                }
            }
            R();
            u(function() {
                if (j("renameLinks") || j("colorLinks") || j("iconizeLinks") || j("iconSize")) {
                    for (var aS = 0; aS < document.links.length; aS++) {
                        var aT = document.links[aS];
                        J(aT)
                    }
                    aw()
                }
            })
        };

        function L(aS) {
            var aT = WH.getCursorPos(aS);
            at = aT.x;
            ar = aT.y
        }

        function J(aV, bh) {
            if (aV.nodeName !== "A" && aV.nodeName !== "AREA") {
                return aG
            }
            var aZ = aV.rel;
            try {
                if (aV.dataset && aV.dataset.hasOwnProperty("wowhead")) {
                    aZ = aV.dataset.wowhead
                } else {
                    if (aV.getAttribute && aV.getAttribute("data-wowhead")) {
                        aZ = aV.getAttribute("data-wowhead")
                    }
                }
            } catch (bm) {
                void(0)
            }
            if ((!aV.href.length && !aZ) || (aZ && /^np\b/.test(aZ)) || (aV.getAttribute("data-disable-wowhead-tooltip") === "true") || (WH.isTouch() && aV.getAttribute("data-disable-wowhead-touch-tooltip") === "true")) {
                return o
            }
            var be, bd, bc, aT, bj = {};
            p = bj;
            var aY = function(bo, bp, bq) {
                switch (bp) {
                    case "buff":
                    case "map":
                    case "noimage":
                    case "notip":
                    case "premium":
                    case "pvp":
                    case "sock":
                    case "text":
                    case "twcata":
                    case "twmists":
                    case "twtbc":
                    case "twwotlk":
                        bj[bp] = true;
                        break;
                    case "artk":
                    case "c":
                    case "dd":
                    case "ddsize":
                    case "diff":
                    case "diffnew":
                    case "ench":
                    case "gem1lvl":
                    case "gem2lvl":
                    case "gem3lvl":
                    case "ilvl":
                    case "level":
                    case "lvl":
                    case "nlc":
                    case "pwr":
                    case "q":
                    case "rand":
                    case "rank":
                    case "spec":
                    case "tink":
                    case "upgd":
                        bj[bp] = parseInt(bq);
                        break;
                    case "abil":
                    case "azerite-powers":
                    case "bonus":
                    case "cri":
                    case "forg":
                    case "gem1bonus":
                    case "gem2bonus":
                    case "gem3bonus":
                    case "gems":
                    case "know":
                    case "pcs":
                    case "rewards":
                        bj[bp] = bq.split(":");
                        break;
                    case "domain":
                    case "who":
                        bj[bp] = bq;
                        break;
                    case "image":
                        if (bq === "premium") {
                            bj[bq] = true
                        } else {
                            bj[bp] = bq ? ("_" + bq) : ""
                        }
                        break;
                    case "transmog":
                        if (bq === "hidden") {
                            bj[bp] = bq
                        } else {
                            bj[bp] = parseInt(bq)
                        }
                        break;
                    case "when":
                        bj[bp] = new Date(parseInt(bq));
                        break
                }
            };
            var a0 = false;
            if (ax.applyto & 1) {
                bd = 2;
                bc = 3;
                if (aV.href.indexOf("http://") == 0 || aV.href.indexOf("https://") == 0) {
                    be = 1;
                    aT = aV.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix)[=/]([0-9\.-]+)/);
                    if (!aT) {
                        aT = aV.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&]+)/)
                    }
                    E = 0
                } else {
                    a0 = true;
                    aT = aV.href.match(/()\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide)[=/]([0-9\.-]+)/);
                    if (!aT) {
                        aT = aV.href.match(/()\/(guide)s\/([^\?&]+)/)
                    }
                    E = 1
                }
            }
            if (aT == null && aZ && (ax.applyto & 2)) {
                be = 0;
                bd = 1;
                bc = 2;
                aT = aZ.match(/(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|guide).?([0-9\.-]+)/);
                E = 1;
                a0 = true
            }
            if (!aT) {
                return
            }
            aV.href.replace(/([a-zA-Z0-9-]+)=?([^&?]*)/g, aY);
            if (aZ) {
                aZ.replace(/([a-zA-Z0-9-]+)=?([^&?]*)/g, aY)
            }
            if (bj.gems && bj.gems.length > 0) {
                var bi;
                for (bi = Math.min(3, bj.gems.length - 1); bi >= 0; --bi) {
                    if (parseInt(bj.gems[bi])) {
                        break
                    }
                }++bi;
                if (bi == 0) {
                    delete bj.gems
                } else {
                    if (bi < bj.gems.length) {
                        bj.gems = bj.gems.slice(0, bi)
                    }
                }
            }
            var aU = ["bonus", "gem1bonus", "gem2bonus", "gem3bonus"];
            for (var ba = 0, a1; a1 = aU[ba]; ba++) {
                if (bj[a1] && bj[a1].length > 0) {
                    for (bi = Math.min(16, bj[a1].length - 1); bi >= 0; --bi) {
                        if (parseInt(bj[a1][bi])) {
                            break
                        }
                    }++bi;
                    if (bi == 0) {
                        delete bj[a1]
                    } else {
                        if (bi < bj[a1].length) {
                            bj[a1] = bj[a1].slice(0, bi)
                        }
                    }
                }
            }
            if (bj.abil && bj.abil.length > 0) {
                var bi, bl = [],
                    bg;
                for (bi = 0; bi < Math.min(8, bj.abil.length); bi++) {
                    if (bg = parseInt(bj.abil[bi])) {
                        bl.push(bg)
                    }
                }
                if (bl.length == 0) {
                    delete bj.abil
                } else {
                    bj.abil = bl
                }
            }
            if (bj.rewards && bj.rewards.length > 0) {
                var bi;
                for (bi = Math.min(3, bj.rewards.length - 1); bi >= 0; --bi) {
                    if (/^\d+.\d+$/.test(bj.rewards[bi])) {
                        break
                    }
                }++bi;
                if (bi == 0) {
                    delete bj.rewards
                } else {
                    if (bi < bj.rewards.length) {
                        bj.rewards = bj.rewards.slice(0, bi)
                    }
                }
            }
            an = aV;
            var bn = null;
            var bf = Y.getId();
            var aS = WH.getDataEnv();
            if (bj.domain) {
                bn = bj.domain.toLowerCase()
            } else {
                if (be && aT[be]) {
                    bn = aT[be].toLowerCase().replace(/(?:^|\.)(staging|dev)$/, "")
                }
            }
            if (bn !== null) {
                bf = WH.getLocaleFromDomain(bn);
                if ((new RegExp("\\b" + WH.BETA_DOMAIN + "\\b")).test(bn)) {
                    aS = "beta"
                } else {
                    for (var a8 in WH.dataEnv) {
                        if (!WH.dataEnv.hasOwnProperty(a8)) {
                            continue
                        }
                        if ((new RegExp("\\b" + WH.dataEnv[a8] + "\\b")).test(bn)) {
                            aS = WH.dataEnv[a8];
                            break
                        }
                    }
                }
            }
            if (aS === "ptr" && !WH.isPtrActive()) {
                aS = "live"
            }
            if (aS === "beta" && !WH.isBetaActive()) {
                aS = "live"
            }
            if (["beta", "ptr", "classic"].indexOf(aS) >= 0) {
                bf = 0
            }
            if (aV.href.indexOf("#") != -1 && document.location.href.indexOf(aT[bd] + "=" + aT[bc]) != -1) {
                return o
            }
            var a4 = false;
            if (WH.isTouch()) {
                if ("innerWidth" in window) {
                    a4 = window.innerWidth < A
                } else {
                    var bk = document.documentElement || document.body;
                    a4 = !isNaN(bk.clientWidth) && bk.clientWidth < A
                }
            }
            am = aC["float"];
            if (a4) {
                am = aC.screen
            } else {
                if ((aV.parentNode.className.indexOf("icon") == 0 && aV.parentNode.nodeName == "DIV") || aV.getAttribute("data-whattach") == "icon") {
                    am = aC.attachToIcon
                } else {
                    if (WH.isTouch() || aV.getAttribute("data-whattach") == "true") {
                        am = aC.attach
                    } else {
                        var a3 = aV.parentNode;
                        var a2 = 0;
                        while (a3) {
                            if (a3.className && a3.className.indexOf("menu-inner") == 0) {
                                am = aC.attachWithoutScreenshot;
                                break
                            }
                            a2++;
                            if (a2 > 9) {
                                break
                            }
                            a3 = a3.parentNode
                        }
                    }
                }
            }
            if (!WH.isTouch() && !aV.onmouseout) {
                if (am == aC["float"]) {
                    aV.onmousemove = az
                }
                aV.onmouseout = af
            }
            if (bh) {
                B = true;
                L(bh)
            }
            var a6 = aT[bd];
            var aX = WH.getIdFromTypeName(a6),
                aW = aT[bc];
            WH.Tooltip.showingTooltip = true;
            if (typeof aV.overrideTooltip == "object") {
                var a9 = aV.overrideTooltip.html;
                var a7 = aV.overrideTooltip.html2;
                if (typeof aV.overrideTooltip.htmlGenerator == "function") {
                    a9 = aV.overrideTooltip.htmlGenerator(aV.overrideTooltip)
                }
                if (typeof aV.overrideTooltip.html2Generator == "function") {
                    a7 = aV.overrideTooltip.html2Generator(aV.overrideTooltip)
                }
                if (aV.overrideTooltip.spanClass) {
                    a9 = '<span class="' + aV.overrideTooltip.spanClass + '">' + a9 + "</span>";
                    if (a7) {
                        a7 = '<span class="' + aV.overrideTooltip.spanClass + '">' + a7 + "</span>"
                    }
                }
                aN(bf, a9, aV.overrideTooltip.icon, aV.overrideTooltip.map, aV.overrideTooltip.spellData, a7, aV.overrideTooltip.image, aV.overrideTooltip.imageClass)
            } else {
                h(aX, aW, aS, bf, bj)
            }
            if (bh || !S()) {
                return d
            }
            var bb = $WowheadPower.getEntity(aX, ao(aX, aW, bj), aS, bf);
            var a5 = function(bp) {
                if (bb.status !== ak && bb.status !== g) {
                    window.setTimeout(function() {
                        a5(bp)
                    }, 5);
                    return d
                }
                if ((j("renameLinks") && bp.getAttribute("data-wh-rename-link") !== "false") || bp.getAttribute("data-wh-rename-link") === "true") {
                    bp.innerHTML = "<span>" + bb.data.name + "</span>"
                }
                var bo = bp.getAttribute("data-wh-icon-size");
                if ((bo || j("iconizeLinks")) && (aX === x || aX === X || aX === ag) && bb.data.icon) {
                    if (!bo) {
                        bo = j("iconSize")
                    }
                    aA(bp, bb.data, bo)
                }
                if (j("colorLinks")) {
                    if (aX === x) {
                        bp.className += " q" + bb.data.quality
                    }
                }
            };
            a5(aV);
            return d
        }

        function aA(aT, aU, aS) {
            if (!aS || typeof Icon === "undefined" || WH.inArray(Icon.sizes, aS) < 0) {
                aS = "tiny"
            }
            var aV = aU.icon.toLocaleLowerCase();
            if (aS === "tiny") {
                aT.className += " icontinyl";
                if (aT.style.setProperty) {
                    aT.style.setProperty("padding-left", "18px", "important")
                } else {
                    aT.style.paddingLeft = "18px"
                }
                aT.style.verticalAlign = "center";
                aT.style.background = "url(" + g_staticUrl + "/images/wow/icons/tiny/" + aV + ".gif) left center no-repeat"
            } else {
                if (aT.getAttribute("data-wh-icon-added") === "true") {
                    return
                }
                WH.aef(aT, Icon.create(aV, Icon.sizeIds[aS], undefined, false, undefined, undefined, undefined, undefined, true))
            }
            aT.setAttribute("data-wh-icon-added", "true")
        }

        function I(aU) {
            aU = WH.normalizeEvent(aU);
            var aT = aU._target;
            var aS = 0;
            while (aT != null && aS < 5 && J(aT, aU) === aG) {
                aT = aT.parentNode;
                ++aS
            }
        }

        function r(aV) {
            aV = WH.normalizeEvent(aV);
            var aU = this;
            if (aU.hasWHTouchTooltip === true) {
                return
            }
            var aT = 0;
            var aS;
            while (aU != null && aT < 5 && (aS = J(aU, aV)) === aG) {
                aU = aU.parentNode;
                ++aT
            }
            if (aS === d) {
                if (ad !== null) {
                    ad.removeAttribute("data-showing-touch-tooltip");
                    ad.hasWHTouchTooltip = false
                }
                ad = aU;
                ad.hasWHTouchTooltip = true;
                if (aV.stopPropagation) {
                    aV.stopPropagation()
                }
                if (aV.preventDefault) {
                    aV.preventDefault()
                }
                return false
            }
        }

        function az(aS) {
            aS = WH.normalizeEvent(aS);
            L(aS);
            WH.Tooltip.move(at, ar, 0, 0, f, C)
        }

        function af() {
            aj = null;
            an = null;
            WH.Tooltip.hide()
        }

        function ai(aU) {
            if (!WH.isDev()) {
                return "https://" + aU + ".wowhead.com"
            }
            var aS = document.location.hostname.split(".");
            aS = aS[aS.length - 3];
            if (aU === "www") {
                aU = aS
            } else {
                aU = aU + "." + aS
            }
            var aT = "https://" + aU + ".wowhead.com";
            if (document.location.port !== "") {
                aT += ((document.location.port.indexOf(":") < 0) ? ":" : "") + document.location.port
            }
            if (document.location.protocol !== "https:") {
                aT = aT.replace(/^https:/, "http:")
            }
            return aT
        }

        function w(aT) {
            var aS = "tooltip";
            if (p && p.buff) {
                aS = "buff"
            }
            if (p && p.text) {
                aS = "text"
            }
            if (p && p.premium) {
                aS = "tooltip_premium"
            }
            return aS + (aT || "")
        }

        function aM() {
            return (p && p.text) ? "text_icon" : "icon"
        }

        function aR() {
            return (p && p.buff ? "buff" : "") + "spells"
        }

        function z(aS) {
            if (typeof aS === "undefined") {
                return "image_NONE"
            }
            return "image" + aS
        }

        function h(aX, aT, aU, aZ, aV) {
            if (!aV) {
                aV = {}
            }
            var aY = ao(aX, aT, aV);
            aj = aX;
            F = aY;
            T = aU;
            av = aZ;
            p = aV;
            Z.isLoaded(aX, aU);
            var aW = $WowheadPower.getEntity(aX, aY, aU, aZ);
            if (aW.status === ak || aW.status === g) {
                var a0 = aW.data[z(aV.image)];
                var a1 = aW.data["image" + aV.image + "_class"];
                var aS = K(aX, aT);
                if (aS) {
                    a0 = aS[0];
                    a1 = aS[1]
                }
                aN(aZ, aW.data[w()], aW.data[aM()], aW.data.map, aW.data[aR()], aW.data[w(2)], a0, a1)
            } else {
                if (aW.status === ae || aW.status === y) {
                    if (WH.inArray(v, aX) == -1) {
                        aN(aZ, e(aZ, "loading"))
                    }
                } else {
                    ay(aX, aT, aU, aZ, WH.inArray(v, aX) != -1, aV)
                }
            }
        }

        function ay(a2, aS, aT, a5, a1, aV) {
            var a3 = ao(a2, aS, aV);
            var aX = $WowheadPower.getEntity(a2, a3, aT, a5);
            if (aX.status !== O && aX.status !== aB) {
                return
            }
            aX.status = ae;
            var aZ = aH(a2);
            if (aZ && (parseInt(aS, 10) < aZ.min || parseInt(aS, 10) > aZ.max)) {
                $WowheadPower.register(a2, aS, aT, a5, {
                    error: "ID is out of range"
                });
                return
            }
            if (!a1) {
                aX.timer = setTimeout(V.bind(this, a2, a3, aT, a5), 333)
            }
            var aU = "";
            for (var aY in aV) {
                switch (aY) {
                    case "abil":
                    case "artk":
                    case "azerite-powers":
                    case "bonus":
                    case "dd":
                    case "ddsize":
                    case "diff":
                    case "diffnew":
                    case "ench":
                    case "gem1bonus":
                    case "gem1lvl":
                    case "gem2bonus":
                    case "gem2lvl":
                    case "gem3bonus":
                    case "gem3lvl":
                    case "gems":
                    case "ilvl":
                    case "level":
                    case "lvl":
                    case "nlc":
                    case "pvp":
                    case "q":
                    case "rand":
                    case "rank":
                    case "rewards":
                    case "sock":
                    case "spec":
                    case "tink":
                    case "transmog":
                    case "twcata":
                    case "twmists":
                    case "twtbc":
                    case "twwotlk":
                    case "upgd":
                        if (typeof aV[aY] === "object") {
                            aU += "&" + aY + "=" + aV[aY].join(":")
                        } else {
                            if (aV[aY] === true) {
                                aU += "&" + aY
                            } else {
                                aU += "&" + aY + "=" + aV[aY]
                            }
                        }
                        break
                }
            }
            var aW = WH.getDomainFromLocale(a5);
            switch (aT) {
                case "live":
                    break;
                case "beta":
                    if (WH.BETA_DOMAIN) {
                        aW += (aW ? "." : "") + WH.BETA_DOMAIN;
                        break
                    }
                default:
                    aW += (aW ? "." : "") + aT
            }
            if (!aW) {
                aW = "www"
            }
            var a0 = ai(aW);
            var a6 = "";
            if (aT === "ptr" || aT === "beta") {
                a6 = (typeof g_wow_build !== "undefined") ? "&" + g_wow_build : ""
            }
            a6 += "&json&power";
            if (!Z.isLoaded(a2, aT)) {
                Z.fetch(a2, aT)
            }
            if (a2 == x && aV && aV.hasOwnProperty("lvl") && !Z.isLoaded(ag, aT)) {
                Z.fetch(ag, aT)
            }
            var a4 = a0 + "/tooltip/" + al(a2) + "/" + aS + aU + a6;
            WH.xhrJsonRequest(a4, (function(a9, bc, a8, bb, a7, ba) {
                if (!ba) {
                    WH.error("Wowhead tooltips failed to load data for " + au(a9) + " #" + bc);
                    return
                }
                $WowheadPower.register(a9, a8, bb, a7, ba)
            }).bind(null, a2, aS, a3, aT, a5))
        }

        function aN(bc, a0, bj, bn, aU, aZ, a5, aV) {
            aw();
            if (B) {
                return
            }
            if (an && an._fixTooltip) {
                a0 = an._fixTooltip(a0, aj, F, an)
            }
            var aW = false;
            if (!a0) {
                a0 = au(aj) + " not found :(";
                bj = "inv_misc_questionmark";
                aW = true
            } else {
                if (p != null) {
                    if (WH.reforgeStats && p.forg && WH.reforgeStats[p.forg]) {
                        var bm = WH.reforgeStats[p.forg];
                        var bo = [bm.i1];
                        for (var bf in WH.individualToGlobalStat) {
                            if (WH.individualToGlobalStat[bf] == bo[0]) {
                                bo.push(bf)
                            }
                        }
                        var a9;
                        if ((a9 = a0.match(new RegExp("(<!--(stat|rtg)(" + bo.join("|") + ")-->)[+-]?([0-9]+)"))) && !a0.match(new RegExp("<!--(stat|rtg)" + bm.i2 + "-->[+-]?[0-9]+"))) {
                            var a8 = Math.floor(a9[4] * bm.v),
                                a4 = aK.traits[bm.s2][0];
                            if (bm.i2 == 6) {
                                a0 = a0.replace("<!--rs-->", "<br />+" + a8 + " " + a4)
                            } else {
                                a0 = a0.replace("<!--rr-->", WH.sprintfGlobal(aK.tooltip_genericrating, a4.toLowerCase(), bm.i2, a8))
                            }
                            a0 = a0.replace(a9[0], a9[1] + (a9[4] - a8));
                            a0 = a0.replace("<!--rf-->", '<span class="q2">' + WH.sprintfGlobal(aK.tooltip_reforged, a8, aK.traits[bm.s1][2], aK.traits[bm.s2][2]) + "</span><br />")
                        }
                    }
                    if (p.pcs && p.pcs.length) {
                        var a7 = 0;
                        for (var bf = 0, bh = p.pcs.length; bf < bh; ++bf) {
                            var a9;
                            var bq = new RegExp("<span><!--si([0-9]+:)*" + p.pcs[bf] + '(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>');
                            if (a9 = a0.match(bq)) {
                                var be = !isNaN(parseInt(av)) ? s[av] : "enus";
                                var bp = (WH.isSet("g_items") && g_items[p.pcs[bf]]) ? g_items[p.pcs[bf]]["name_" + be] : a9[4];
                                var aX = '<a href="/item=' + a9[3] + '">' + bp + "</a>";
                                var bd = '<span class="q13"><!--si' + p.pcs[bf] + "-->" + aX + "</span>";
                                a0 = a0.replace(a9[0], bd);
                                ++a7
                            }
                        }
                        if (a7 > 0) {
                            a0 = a0.replace("(0/", "(" + a7 + "/");
                            a0 = a0.replace(new RegExp("<span>\\(([0-" + a7 + "])\\)", "g"), '<span class="q2">($1)')
                        }
                    }
                    if (p.know && p.know.length) {
                        a0 = WH.setTooltipSpells(a0, p.know, aU)
                    }
                    if (p.lvl) {
                        a0 = WH.setTooltipLevel(a0, (p.lvl ? p.lvl : 100), p.buff)
                    }
                    if (p.who && p.when) {
                        a0 = a0.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + WH.sprintf(e(bc, "achievementComplete"), p.who, p.when.getMonth() + 1, p.when.getDate(), p.when.getFullYear()) + "</span><br /><br />");
                        a0 = a0.replace(/class="q0"/g, 'class="r3"')
                    }
                    if (p.notip && a5) {
                        a0 = "";
                        bj = null
                    }
                    if ((aj == ap) && p.pwr) {
                        a0 = a0.replace(/<!--sca-->(\d+)<!--sca-->/g, function(br, bs) {
                            return Math.floor(parseInt(bs) * (1 + 0.05 * p.pwr))
                        })
                    }
                    if ((aj == X) && p.cri) {
                        for (var bf = 0; bf < p.cri.length; bf++) {
                            a0 = a0.replace(new RegExp("<!--cr" + parseInt(p.cri[bf]) + ":[^<]+", "g"), '<span class="q2">$&</span>')
                        }
                    }
                }
            }
            if (!P && WH.isSet("g_user") && ("lists" in g_user) && WH.isSet("g_completion")) {
                var bb = "";
                var aS = ((aj in g_types) && (g_types[aj] in g_completion)) ? g_completion[g_types[aj]] : false;
                var a3 = $WowheadPower.getEntity(aj, F);
                if (aS && (aj == aE)) {
                    if (aW || a0 === e(bc, "loading") || (a3.hasOwnProperty("worldquesttype") && a3.worldquesttype != 0) || (a3.hasOwnProperty("daily") && a3.daily != 0) || (a3.hasOwnProperty("weekly") && a3.weekly != 0)) {
                        aS = false
                    }
                }
                var a6 = !(aS && (aj in g_completion_categories) && WH.inArray(g_completion_categories[aj], a3.completion_category) === -1);
                if (aS) {
                    for (var bk in g_user.lists) {
                        var ba = g_user.lists[bk];
                        if (!(ba.id in aS)) {
                            continue
                        }
                        var a2 = /^-?\d+(?:\.\d+)?/.exec(F);
                        a2 = (a2 && a2.length) ? a2[0] : F;
                        var bi = (WH.inArray(aS[ba.id], a2) != -1);
                        if (!bi && !a6) {
                            continue
                        }
                        bb += '<br><span class="progress-icon ' + (bi ? "progress-8" : "progress-0") + '"></span> ';
                        bb += ba.character + " - " + ba.realm + " " + ba.region
                    }
                }
                if (bb != "") {
                    a0 += '<br><span class="q">' + window.LANG.completion + ":</span>" + bb
                }
            }
            if (!P && aj == x && WH.isSet("g_completion") && ("bagscans" in g_completion)) {
                var a1 = /^\d+/.exec(F);
                if (a1) {
                    a1 = a1[0]
                } else {
                    a1 = -1
                }
                var aY = [];
                for (var aT in g_completion.bagscans) {
                    aY.push(aT)
                }
                var bl = "";
                while (aT = aY.pop()) {
                    if (g_completion.bagscans[aT].items.hasOwnProperty(a1)) {
                        bl += '<tr><td class="q2" style="text-align: right">' + g_completion.bagscans[aT].items[a1] + '&nbsp;</td><td style="white-space: nowrap">' + g_completion.bagscans[aT].name + "</td></tr>"
                    }
                }
                if (bl != "") {
                    a0 += '<br><span class="q">' + window.LANG.tooltip_bagscanner + "</span><br><table>" + bl + "</table>"
                }
            }
            if (!P && aj == aI && typeof WH.getPreferredTransmogRace !== "undefined") {
                var bg = WH.getPreferredTransmogRace();
                a0 = a0.replace(/\/modelviewer(\/classic)?\/transmog\/\d+\/\d+\//g, "/modelviewer$1/transmog/" + bg.race + "/" + (bg.gender - 1) + "/")
            }
            if (!P && a0 && (p.diff || p.diffnew || p.noimage)) {
                a5 = "";
                aV = ""
            }
            a0 = a0.replace("http://", "https://");
            if (p.map && bn && bn.getMap) {
                aZ = bn.getMap()
            }
            switch (am) {
                case aC.screen:
                    WH.Tooltip.showInScreen(an, a0, null, aZ, a5, aV, bj);
                    break;
                case aC.attachToIcon:
                case aC.attach:
                    WH.Tooltip.setIcon(am == aC.attachToIcon ? null : bj);
                    WH.Tooltip.show(an, a0, null, null, null, aZ, a5, aV);
                    break;
                case aC.attachWithoutScreenshot:
                    WH.Tooltip.setIcon(bj);
                    WH.Tooltip.show(an, a0, null, null, null, aZ);
                    break;
                case aC["float"]:
                default:
                    WH.Tooltip.setIcon(bj);
                    WH.Tooltip.showAtXY(a0, at, ar, f, C, aZ, a5, aV)
            }
            
            WH.Tooltip.logo.style.display = "none"
        
        }

        function V(aU, aW, aV, aS) {
            if (aj == aU && F == aW && T == aV && av == aS) {
                aN(aS, e(aS, "loading"));
                var aT = $WowheadPower.getEntity(aU, aW, aV, aS);
                aT.timer = setTimeout(Q.bind(this, aU, aW, aV, aS), 3850)
            }
        }

        function Q(aU, aW, aV, aS) {
            var aT = $WowheadPower.getEntity(aU, aW, aV, aS);
            aT.status = aB;
            if (aj == aU && F == aW && T == aV && av == aS) {
                aN(aS, e(aS, "noResponse"))
            }
        }

        function ao(aS, aU, aT) {
            return aU + (aT.rand ? "r" + aT.rand : "") + (aT.ench ? "e" + aT.ench : "") + (aT.gems ? "g" + aT.gems.join(",") : "") + (aT.sock ? "s" : "") + (aT.upgd ? "u" + aT.upgd : "") + (aT.twtbc ? "twtbc" : "") + (aT.twwotlk ? "twwotlk" : "") + (aT.twcata ? "twcata" : "") + (aT.twmists ? "twmists" : "") + (aT.ilvl ? "ilvl" + aT.ilvl : "") + (aT.lvl ? "lvl" + aT.lvl : "") + (aT.gem1lvl ? "g1lvl" + aT.gem1lvl : "") + (aT.gem2lvl ? "g2lvl" + aT.gem2lvl : "") + (aT.gem3lvl ? "g3lvl" + aT.gem3lvl : "") + (aT.artk ? "ak" + aT.artk : "") + (aT.nlc ? "nlc" + aT.nlc : "") + (aT.transmog ? "transmog" + aT.transmog : "") + (aT.tink ? "tink" + aT.tink : "") + (aT.pvp ? "pvp" : "") + (aT.bonus ? "b" + aT.bonus.join(",") : "") + (aT.gem1bonus ? "g1b" + aT.gem1bonus.join(",") : "") + (aT.gem2bonus ? "g2b" + aT.gem2bonus.join(",") : "") + (aT.gem3bonus ? "g3b" + aT.gem3bonus.join(",") : "") + (aT.q ? "q" + aT.q : "") + (aT.level ? "level" + aT.level : "") + (aT.abil ? "abil" + aT.abil.join(",") : "") + (aT.dd ? "dd" + aT.dd : "") + (aT.ddsize ? "ddsize" + aT.ddsize : "") + (aS === ag && aT.diff ? "diff" + aT.diff : "") + (aT.rank ? "rank" + aT.rank : "") + (aT.spec ? "spec" + aT.spec : "") + (aT.rewards ? "rewards" + aT.rewards.join(":") : "") + (aT["azerite-powers"] ? "azPowers" + aT["azerite-powers"] : "")
        }
        this.clearTouchTooltip = function(aU) {
            if (ad) {
                if (aU !== true) {
                    ad.removeAttribute("data-showing-touch-tooltip")
                }
                ad.hasWHTouchTooltip = false
            }
            ad = null;
            if (aU !== true && document.querySelectorAll) {
                var aS = document.querySelectorAll("[data-showing-touch-tooltip]");
                if (aS && aS.length) {
                    for (var aV = 0, aT; aT = aS[aV]; aV++) {
                        aT.removeAttribute("data-showing-touch-tooltip")
                    }
                }
            }
            if (WH.Tooltip.screen) {
                WH.Tooltip.screenInnerWrapper.scrollTop = 0;
                WH.Tooltip.screenInnerWrapper.scrollLeft = 0;
                WH.Tooltip.screen.style.display = "none";
                WH.Tooltip.mobileTooltipShown = false
            }
            WH.Tooltip.hide();
            $WowheadPower.setParent()
        };

        function K(aT, aV) {
            if (P) {
                return false
            }
            if (!WH.User.isPremium()) {
                return false
            }
            if (WH.Tooltip.hideScreenshots) {
                return false
            }
            var aU = al(aT);
            var aS = "g_" + aU.replace("-", "") + "s";
            if (!window[aS]) {
                aS = "g_" + aU.replace("-", "_") + "s";
                if (!window[aS]) {
                    return false
                }
            }
            aS = window[aS];
            if (!aS[aV]) {
                return false
            }
            if (aS[aV]["screenshot"]) {
                return [WH.getScreenshotUrl(aS[aV]["screenshot"], "small"), "screenshot"]
            }
            return false
        }
        this.register = function(a1, aT, aU, a2, a0) {
            var aZ = this.getEntity(a1, aT, aU, a2);
            if (a0.hasOwnProperty("additionalIds")) {
                var aV = a0.additionalIds;
                delete a0.additionalIds;
                if (aV.length) {
                    for (var a3 = 0; a3 < aV.length; a3++) {
                        this.register(a1, aV[a3], aU, a2, a0)
                    }
                }
            }
            if (!Z.isLoaded(a1, aU)) {
                aZ.status = y;
                Z.registerCallback(a1, aU, this.register.bind(this, a1, aT, aU, a2, a0));
                return
            }
            if ((typeof aT === "string" && (aT.indexOf("lvl") === 0 || aT.match(/[^i]lvl/))) && !Z.isLoaded(ag, aU)) {
                aZ.status = y;
                Z.registerCallback(ag, aU, this.register.bind(this, a1, aT, aU, a2, a0));
                return
            }
            if (aZ.timer) {
                clearTimeout(aZ.timer);
                delete aZ.timer
            }
            if (!WH.wowheadRemote && a0.map) {
                if (aZ.data.map == null) {
                    aZ.data.map = new Mapper({
                        parent: WH.ce("div"),
                        zoom: 3,
                        zoomable: false,
                        buttons: false
                    })
                }
                aZ.data.map.update(a0.map);
                delete a0.map
            }
            var aW = P;
            for (var aX in a0) {
                if (!a0.hasOwnProperty(aX)) {
                    continue
                }
                if (!aW && /_(enus|frfr|dede|eses|ruru|ptbr|itit|zhcn|kokr|ptr|beta|classic)$/.test(aX)) {
                    aW = true;
                    WH.Track.nonInteractiveEvent("Tooltip", "Remove Locale Suffix", [aU, a2, g_types[a1], aT].join(" "), aX)
                }
                var aY = aX.replace(/_(enus|frfr|dede|eses|ruru|ptbr|itit|zhcn|kokr|ptr|beta|classic)$/, "");
                aZ.data[aY] = a0[aX]
            }
            switch (aZ.status) {
                case ae:
                case y:
                case O:
                    if (aZ.data[w()]) {
                        aZ.status = ak
                    } else {
                        aZ.status = g
                    }
            }
            if (WH.Tooltip.showingTooltip && aj == a1 && F == aT && T == aU && av == a2) {
                var a4 = aZ.data[z(p.image)];
                var a5 = aZ.data["image" + p.image + "_class"];
                var aS = K(a1, aT);
                if (aS) {
                    a4 = aS[0];
                    a5 = aS[1]
                }
                aN(a2, aZ.data[w()], aZ.data.icon, aZ.data.map, aZ.data[aR()], aZ.data[w(2)], a4, a5)
            }
            while (aZ.callbacks.length) {
                aZ.callbacks.shift()()
            }
        };
        this.request = function(aU, aX, aW, aS, aV) {
            if (!aV) {
                aV = {}
            }
            if (aS === undefined) {
                aS = Y.getId()
            }
            if (!aW) {
                aW = WH.getDataEnv()
            }
            var aT = ao(aU, aX, aV);
            this.getEntity(aU, aT, aW, aS);
            ay(aU, aX, aW, aS, true, aV)
        };
        this.triggerTooltip = function(aT, aS) {
            J(aT, aS || {
                target: aT
            })
        };
        this.refreshLinks = function(aS) {
            if (aS === true || j("renameLinks") || j("colorLinks") || j("iconizeLinks")) {
                for (var aT = 0; aT < document.links.length; aT++) {
                    var aV = document.links[aT];
                    var aU = aV.parentNode;
                    var aW = false;
                    while (aU != null) {
                        if ((" " + aU.className + " ").replace(/[\n\t]/g, " ").indexOf(" wowhead-tooltip ") > -1) {
                            aW = true;
                            break
                        }
                        aU = aU.parentNode
                    }
                    if (!aW) {
                        J(aV)
                    }
                }
            }
            this.hideTooltip()
        };
        this.setParent = function(aS) {
            WH.Tooltip.reset();
            WH.Tooltip.prepare(aS)
        };
        this.replaceWithTooltip = function(aW, aV, aZ, aY, aS, aX) {
            if (!aX) {
                aX = {}
            }
            if (aS === undefined) {
                aS = Y.getId()
            }
            if (!aY) {
                aY = WH.getDataEnv()
            }
            if (typeof aW == "string") {
                aW = document.getElementById(aW)
            }
            if (!aW) {
                return false
            }
            var aT = ao(aV, aZ, aX);
            var aU = this.getEntity(aV, aT, aY, aS);
            switch (aU.status) {
                case ak:
                    if (!aW.parentNode) {
                        return true
                    }
                    while (aW.hasChildNodes()) {
                        aW.removeChild(aW.firstChild)
                    }
                    aW.className += " wowhead-tooltip-inline" + (aU.data.icon ? " wowhead-tooltip-inline-icon" : "");
                    WH.Tooltip.append(aW, aU.data[w()], true, aU.data.icon);
                    return true;
                case ae:
                case O:
                    aU.callbacks.push(this.replaceWithTooltip.bind(this, aW, aV, aZ, aY, aS, aX));
                    this.request(aV, aZ, aY, aS, aX);
                    return true
            }
            return false
        };
        if (P) {
            this.set = function(aS) {
                WH.cO(ax, aS)
            };
            this.showTooltip = function(aU, aT, aS) {
                L(aU);
                aN(0, aT, aS)
            };
            this.hideTooltip = function() {
                if (typeof WH === "undefined" || typeof WH.Tooltip === "undefined" || typeof WH.Tooltip.hide !== "function") {
                    return
                }
                WH.Tooltip.hide()
            };
            this.moveTooltip = function(aS) {
                az(aS)
            }
        }
        aq()
    }
};