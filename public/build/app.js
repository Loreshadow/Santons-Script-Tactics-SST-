(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/JS/combat-3d-system.js":
/*!***************************************!*\
  !*** ./assets/JS/combat-3d-system.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== SYSTÈME DE COMBAT 3D AVANCÉ ===============
var Combat3DSystem = /*#__PURE__*/function () {
  "use strict";

  function Combat3DSystem() {
    _classCallCheck(this, Combat3DSystem);
    this.characters = new Map();
    this.animations = [];
    this.actionQueue = [];
    this.battleState = 'preparing'; // preparing, active, finished
    this.speedMultiplier = 1;
    this.pauseBackgroundVideos();
  }

  // =============== CRÉATION DE PERSONNAGES 3D ===============
  return _createClass(Combat3DSystem, [{
    key: "create3DCharacter",
    value: function create3DCharacter(characterData, teamType, position) {
      var characterId = "".concat(teamType, "-").concat(characterData.name, "-").concat(Date.now());

      // Convertir la classe en rôle Tank/DPS/Support
      var battleRole = this.convertClassToBattleRole(characterData.role || characterData["class"]);

      // Définir le style 3D selon le rôle de combat
      var characterStyle = this.get3DCharacterStyle(battleRole);
      var characterElement = document.createElement('div');
      characterElement.className = "combat-character-3d ".concat(teamType, "-character-3d ").concat(characterStyle["class"], " ").concat(battleRole, "-role");
      characterElement.id = characterId;
      characterElement.style.cssText = "\n            position: absolute;\n            width: 80px;\n            height: 120px;\n            transform-style: preserve-3d;\n            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n            cursor: pointer;\n            z-index: 100;\n        ";
      characterElement.innerHTML = "\n            <div class=\"character-3d-container\">\n                <div class=\"character-body ".concat(characterStyle.bodyClass, "\">\n                    <div class=\"character-head ").concat(characterStyle.headClass, "\">\n                        <div class=\"character-face\"></div>\n                        ").concat(characterStyle.headAccessory, "\n                    </div>\n                    <div class=\"character-torso ").concat(characterStyle.torsoClass, "\"></div>\n                    <div class=\"character-arms ").concat(characterStyle.armsClass, "\">\n                        <div class=\"left-arm\">\n                            <div class=\"weapon-slot left-weapon\">").concat(characterStyle.leftWeapon, "</div>\n                        </div>\n                        <div class=\"right-arm\">\n                            <div class=\"weapon-slot right-weapon\">").concat(characterStyle.rightWeapon, "</div>\n                        </div>\n                    </div>\n                    <div class=\"character-legs ").concat(characterStyle.legsClass, "\"></div>\n                </div>\n                \n                <div class=\"character-effects\">\n                    <div class=\"aura ").concat(teamType, "-aura\"></div>\n                    <div class=\"action-indicator\"></div>\n                </div>\n                \n                <div class=\"character-ui\">\n                    <div class=\"name-plate\">").concat(characterData.name, "</div>\n                    <div class=\"health-bar\">\n                        <div class=\"health-fill\" style=\"width: 100%\"></div>\n                        <div class=\"health-text\">").concat(characterData.hp || 150, "</div>\n                    </div>\n                    <div class=\"role-indicator\">\n                        <i class=\"").concat(this.getRoleIcon(characterData.role || characterData["class"]), "\"></i>\n                    </div>\n                </div>\n            </div>\n        ");

      // Positionner le personnage
      this.positionCharacter(characterElement, position, teamType);

      // Ajouter la position dans les data attributes pour les animations
      characterElement.dataset.position = position;
      characterElement.dataset.teamType = teamType;
      console.log("\uD83D\uDD27 DATASET SET: position=".concat(position, ", teamType=").concat(teamType, " pour ").concat(characterData.name));

      // Stocker les données du personnage
      this.characters.set(characterId, {
        element: characterElement,
        data: characterData,
        team: teamType,
        position: position,
        currentHp: characterData.hp || 150,
        maxHp: characterData.hp || 150,
        isAlive: true,
        actionCooldown: 0
      });
      return characterElement;
    }
  }, {
    key: "get3DCharacterStyle",
    value: function get3DCharacterStyle(role) {
      var styles = {
        tank: {
          "class": 'tank-character',
          bodyClass: 'warrior-body muscular',
          headClass: 'warrior-head bearded',
          headAccessory: '<div class="helmet warrior-helmet"></div>',
          torsoClass: 'heavy-armor plated',
          armsClass: 'muscular-arms',
          legsClass: 'armored-legs',
          leftWeapon: '<div class="shield large-shield">🛡️</div>',
          rightWeapon: '<div class="sword broadsword">⚔️</div>'
        },
        dps: {
          "class": 'dps-character',
          bodyClass: 'elf-body agile',
          headClass: 'elf-head pointed-ears',
          headAccessory: '<div class="hood elf-hood"></div>',
          torsoClass: 'leather-armor flexible',
          armsClass: 'agile-arms',
          legsClass: 'light-boots',
          leftWeapon: '<div class="bow elven-bow">🏹</div>',
          rightWeapon: '<div class="dagger swift-blade">🗡️</div>'
        },
        support: {
          "class": 'support-character',
          bodyClass: 'mage-body scholarly',
          headClass: 'mage-head wise',
          headAccessory: '<div class="wizard-hat pointy-hat">🎩</div>',
          torsoClass: 'mage-robes flowing',
          armsClass: 'scholarly-arms',
          legsClass: 'robe-bottom',
          leftWeapon: '<div class="tome spell-book">📚</div>',
          rightWeapon: '<div class="staff gandalf-staff">🪄</div>'
        }
      };
      return styles[role] || styles.tank;
    }
  }, {
    key: "convertClassToBattleRole",
    value: function convertClassToBattleRole(characterClass) {
      // Conversion des classes en rôles Tank/DPS/Support
      var roleMapping = {
        // TANK
        'tank': 'tank',
        'warrior': 'tank',
        'paladin': 'tank',
        'guard': 'tank',
        'knight': 'tank',
        // SUPPORT  
        'support': 'support',
        'healer': 'support',
        'mage': 'support',
        'priest': 'support',
        'cleric': 'support',
        'wizard': 'support',
        // DPS
        'dps': 'dps',
        'assassin': 'dps',
        'archer': 'dps',
        'elf': 'dps',
        'fighter': 'dps',
        'rogue': 'dps'
      };
      var normalizedClass = (characterClass || '').toLowerCase();
      return roleMapping[normalizedClass] || 'dps'; // Défaut DPS
    }
  }, {
    key: "positionCharacter",
    value: function positionCharacter(characterElement, position, teamType) {
      var battlefield = document.querySelector('.battlefield-arena');
      if (!battlefield) return;
      var battlefieldRect = battlefield.getBoundingClientRect();

      // Positions fixes avec espacement pour éviter les superpositions
      var positions = {
        player: [{
          x: 15,
          y: 75,
          name: 'front-left'
        },
        // Avant-gauche joueur
        {
          x: 45,
          y: 85,
          name: 'back-center'
        },
        // Arrière-centre joueur  
        {
          x: 75,
          y: 75,
          name: 'front-right'
        } // Avant-droite joueur
        ],
        enemy: [{
          x: 25,
          y: 25,
          name: 'front-left'
        },
        // Avant-gauche ennemi
        {
          x: 55,
          y: 15,
          name: 'back-center'
        },
        // Arrière-centre ennemi
        {
          x: 85,
          y: 25,
          name: 'front-right'
        } // Avant-droite ennemi
        ]
      };

      // Sécurité pour la position
      var maxPos = positions[teamType].length - 1;
      var safePosition = Math.min(position, maxPos);
      var pos = positions[teamType][safePosition];
      console.log("\uD83D\uDCCD Positionnement ".concat(teamType, " position ").concat(safePosition, ": x=").concat(pos.x, "%, y=").concat(pos.y, "% (").concat(pos.name, ")"));

      // Positionner le personnage
      characterElement.style.left = "".concat(pos.x, "%");
      characterElement.style.top = "".concat(pos.y, "%");
      characterElement.style.position = 'absolute';
      characterElement.style.zIndex = '100';

      // Animation d'entrée décalée
      characterElement.style.opacity = '0';
      characterElement.style.transform = 'translateY(50px) scale(0.8)';
      setTimeout(function () {
        characterElement.style.opacity = '1';
        characterElement.style.transform = 'translateY(0) scale(1)';
        characterElement.style.transition = 'all 0.5s ease';
      }, position * 400); // Plus de délai entre les apparitions
    }

    // =============== ANIMATIONS DE COMBAT AVANCÉES ===============
  }, {
    key: "animateCharacterAction",
    value: function () {
      var _animateCharacterAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(attackerElement, targetElement, actionType) {
        var attacker, target, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              attacker = this.characters.get(attackerElement.id);
              target = this.characters.get(targetElement.id);
              if (!(!attacker || !target)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _t = actionType;
              _context.n = _t === 'physical_attack' ? 2 : _t === 'magic_spell' ? 4 : _t === 'heal' ? 6 : _t === 'defend' ? 8 : 10;
              break;
            case 2:
              _context.n = 3;
              return this.animatePhysicalAttack(attackerElement, targetElement);
            case 3:
              return _context.a(3, 10);
            case 4:
              _context.n = 5;
              return this.animateMagicSpell(attackerElement, targetElement);
            case 5:
              return _context.a(3, 10);
            case 6:
              _context.n = 7;
              return this.animateHeal(attackerElement, targetElement);
            case 7:
              return _context.a(3, 10);
            case 8:
              _context.n = 9;
              return this.animateDefense(attackerElement);
            case 9:
              return _context.a(3, 10);
            case 10:
              // Mettre à jour l'interface après l'animation
              this.updateCharacterUI(target);
            case 11:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function animateCharacterAction(_x, _x2, _x3) {
        return _animateCharacterAction.apply(this, arguments);
      }
      return animateCharacterAction;
    }()
  }, {
    key: "animatePhysicalAttack",
    value: function () {
      var _animatePhysicalAttack = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(attacker, target) {
        var attackerRect, targetRect, deltaX, deltaY;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              attackerRect = attacker.getBoundingClientRect();
              targetRect = target.getBoundingClientRect(); // Phase 1: Préparation
              attacker.classList.add('preparing-attack');
              _context2.n = 1;
              return this.wait(500);
            case 1:
              // Phase 2: Charge vers la cible
              deltaX = targetRect.left - attackerRect.left;
              deltaY = targetRect.top - attackerRect.top;
              attacker.style.transform = "translate(".concat(deltaX * 0.7, "px, ").concat(deltaY * 0.7, "px) scale(1.1)");
              attacker.classList.add('charging');
              _context2.n = 2;
              return this.wait(400);
            case 2:
              // Phase 3: Impact
              this.createImpactEffect(target, '⚔️');
              target.classList.add('taking-damage');
              this.shakeElement(target);
              _context2.n = 3;
              return this.wait(300);
            case 3:
              // Phase 4: Retour en position
              attacker.style.transform = '';
              attacker.classList.remove('preparing-attack', 'charging');
              target.classList.remove('taking-damage');
              _context2.n = 4;
              return this.wait(300);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function animatePhysicalAttack(_x4, _x5) {
        return _animatePhysicalAttack.apply(this, arguments);
      }
      return animatePhysicalAttack;
    }()
  }, {
    key: "animateMagicSpell",
    value: function () {
      var _animateMagicSpell = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(attacker, target) {
        var spellProjectile;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              // Phase 1: Incantation
              attacker.classList.add('casting-spell');
              this.createMagicAura(attacker);
              _context3.n = 1;
              return this.wait(800);
            case 1:
              // Phase 2: Projectile magique
              spellProjectile = this.createSpellProjectile(attacker, target);
              _context3.n = 2;
              return this.wait(600);
            case 2:
              // Phase 3: Impact magique
              this.createMagicImpact(target);
              target.classList.add('magic-hit');
              spellProjectile.remove();
              attacker.classList.remove('casting-spell');
              _context3.n = 3;
              return this.wait(500);
            case 3:
              target.classList.remove('magic-hit');
            case 4:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function animateMagicSpell(_x6, _x7) {
        return _animateMagicSpell.apply(this, arguments);
      }
      return animateMagicSpell;
    }()
  }, {
    key: "animateHeal",
    value: function () {
      var _animateHeal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(caster, target) {
        var healEffect;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              caster.classList.add('casting-heal');

              // Effet de soin
              healEffect = document.createElement('div');
              healEffect.className = 'heal-effect';
              healEffect.innerHTML = '💚✨🌱';
              healEffect.style.cssText = "\n            position: absolute;\n            top: -20px;\n            left: 50%;\n            transform: translateX(-50%);\n            font-size: 24px;\n            animation: healFloat 2s ease-out forwards;\n            pointer-events: none;\n            z-index: 1000;\n        ";
              target.appendChild(healEffect);
              target.classList.add('being-healed');
              _context4.n = 1;
              return this.wait(2000);
            case 1:
              caster.classList.remove('casting-heal');
              target.classList.remove('being-healed');
              healEffect.remove();
            case 2:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function animateHeal(_x8, _x9) {
        return _animateHeal.apply(this, arguments);
      }
      return animateHeal;
    }()
  }, {
    key: "animateDefense",
    value: function () {
      var _animateDefense = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(defender) {
        var shieldEffect;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              // Animation de défense
              defender.classList.add('defending');

              // Effet de bouclier
              shieldEffect = document.createElement('div');
              shieldEffect.className = 'defense-effect';
              shieldEffect.innerHTML = '🛡️✨';
              shieldEffect.style.cssText = "\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font-size: 32px;\n            animation: shieldPulse 1.5s ease-out forwards;\n            pointer-events: none;\n            z-index: 1000;\n        ";
              defender.appendChild(shieldEffect);

              // Animation du personnage qui se met en position défensive
              defender.style.transform = 'scale(0.95) translateY(5px)';
              _context5.n = 1;
              return this.wait(1500);
            case 1:
              defender.classList.remove('defending');
              defender.style.transform = 'scale(1) translateY(0)';
              shieldEffect.remove();
            case 2:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function animateDefense(_x0) {
        return _animateDefense.apply(this, arguments);
      }
      return animateDefense;
    }() // =============== EFFETS VISUELS AVANCÉS ===============
  }, {
    key: "createImpactEffect",
    value: function createImpactEffect(target, icon) {
      var effect = document.createElement('div');
      effect.className = 'impact-effect';
      effect.innerHTML = icon;
      effect.style.cssText = "\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font-size: 36px;\n            animation: impactBurst 0.8s ease-out forwards;\n            pointer-events: none;\n            z-index: 1000;\n        ";
      target.appendChild(effect);
      setTimeout(function () {
        return effect.remove();
      }, 800);
    }
  }, {
    key: "createMagicAura",
    value: function createMagicAura(character) {
      var aura = character.querySelector('.aura');
      if (aura) {
        aura.style.animation = 'magicPulse 0.8s infinite';
        setTimeout(function () {
          aura.style.animation = '';
        }, 2000);
      }
    }
  }, {
    key: "createSpellProjectile",
    value: function createSpellProjectile(attacker, target) {
      var projectile = document.createElement('div');
      projectile.className = 'spell-projectile';
      projectile.innerHTML = '⚡';
      projectile.style.cssText = "\n            position: fixed;\n            font-size: 24px;\n            z-index: 999;\n            animation: spellTravel 0.6s linear forwards;\n            pointer-events: none;\n        ";
      var attackerRect = attacker.getBoundingClientRect();
      var targetRect = target.getBoundingClientRect();
      projectile.style.left = attackerRect.left + attackerRect.width / 2 + 'px';
      projectile.style.top = attackerRect.top + attackerRect.height / 2 + 'px';
      document.body.appendChild(projectile);

      // Animer vers la cible
      setTimeout(function () {
        projectile.style.left = targetRect.left + targetRect.width / 2 + 'px';
        projectile.style.top = targetRect.top + targetRect.height / 2 + 'px';
      }, 50);
      return projectile;
    }
  }, {
    key: "createMagicImpact",
    value: function createMagicImpact(target) {
      var impact = document.createElement('div');
      impact.className = 'magic-impact';
      impact.innerHTML = '💥⚡🔥';
      impact.style.cssText = "\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font-size: 28px;\n            animation: magicBurst 1s ease-out forwards;\n            pointer-events: none;\n            z-index: 1000;\n        ";
      target.appendChild(impact);
      setTimeout(function () {
        return impact.remove();
      }, 1000);
    }
  }, {
    key: "shakeElement",
    value: function shakeElement(element) {
      element.style.animation = 'damageShake 0.4s ease-in-out';
      setTimeout(function () {
        element.style.animation = '';
      }, 400);
    }

    // =============== GESTION DE L'ÉTAT ===============
  }, {
    key: "updateCharacterUI",
    value: function updateCharacterUI(character) {
      var characterData = this.characters.get(character.element.id);
      if (!characterData) return;
      var healthBar = character.element.querySelector('.health-fill');
      var healthText = character.element.querySelector('.health-text');
      if (healthBar && healthText) {
        var healthPercent = characterData.currentHp / characterData.maxHp * 100;
        healthBar.style.width = "".concat(healthPercent, "%");
        healthText.textContent = characterData.currentHp;

        // Couleur de la barre de vie selon le pourcentage
        if (healthPercent > 60) {
          healthBar.style.backgroundColor = '#4CAF50';
        } else if (healthPercent > 30) {
          healthBar.style.backgroundColor = '#FF9800';
        } else {
          healthBar.style.backgroundColor = '#F44336';
        }
      }
    }
  }, {
    key: "pauseBackgroundVideos",
    value: function pauseBackgroundVideos() {
      var videos = document.querySelectorAll('video');
      videos.forEach(function (video) {
        if (!video.paused) {
          video.pause();
          video.dataset.wasPlaying = 'true';
        }
      });
    }
  }, {
    key: "resumeBackgroundVideos",
    value: function resumeBackgroundVideos() {
      var videos = document.querySelectorAll('video[data-was-playing="true"]');
      videos.forEach(function (video) {
        video.play();
        video.removeAttribute('data-was-playing');
      });
    }

    // =============== UTILITAIRES ===============
  }, {
    key: "wait",
    value: function wait(ms) {
      var _this = this;
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms / _this.speedMultiplier);
      });
    }
  }, {
    key: "getRoleIcon",
    value: function getRoleIcon(role) {
      var icons = {
        tank: 'fas fa-shield-alt',
        dps: 'fas fa-sword',
        support: 'fas fa-magic'
      };
      return icons[role] || icons.tank;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.characters.clear();
      this.animations.forEach(function (animation) {
        return clearTimeout(animation);
      });
      this.animations = [];
      this.resumeBackgroundVideos();
    }
  }]);
}(); // Export pour utilisation ES6 et global
if ( true && module.exports) {
  module.exports = Combat3DSystem;
}

// Rendre disponible globalement
window.Combat3DSystem = Combat3DSystem;

/***/ }),

/***/ "./assets/JS/game-interface.js":
/*!*************************************!*\
  !*** ./assets/JS/game-interface.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== INTERFACE DE JEU - SANTONS SCRIPT TACTICS ===============
var GameInterface = /*#__PURE__*/function () {
  "use strict";

  function GameInterface() {
    var _this = this;
    _classCallCheck(this, GameInterface);
    this.currentTab = 'team';

    // Initialisation des images du guild guide
    this.guildImages = ['/images/guild1.png', '/images/guild2.png', '/images/guild3.png', '/images/guild4.png'];
    this.currentGuildImageIndex = 0;
    this.guildGuideInitAttempts = 0; // Compteur pour éviter les boucles infinies

    // S'assurer que le DOM est chargé avant d'initialiser
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        return _this.init();
      });
    } else {
      this.init();
    }

    // Ajouter une fonction globale pour tester le battlefield
    window.testBattlefield = function () {
      return _this.testBattlefieldVisualization();
    };
  }
  return _createClass(GameInterface, [{
    key: "init",
    value: function init() {
      this.setupTabs();
      this.setupRankingFilters();
      this.loadCharacters();
      this.checkUrlTab(); // Vérifier si un onglet est spécifié dans l'URL
    }

    // =============== SYSTÈME D'ONGLETS ===============
  }, {
    key: "checkUrlTab",
    value: function checkUrlTab() {
      // Vérifier si un onglet est spécifié dans l'URL (fragment ou paramètre)
      var urlFragment = window.location.hash.replace('#', '');
      var urlParams = new URLSearchParams(window.location.search);
      var tabParam = urlParams.get('tab');
      var targetTab = urlFragment || tabParam;
      if (targetTab && ['team', 'characters', 'battle', 'ranking', 'history'].includes(targetTab)) {
        this.switchTab(targetTab);
      }
    }
  }, {
    key: "setupTabs",
    value: function setupTabs() {
      var _this2 = this;
      var tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var tabName = button.dataset.tab;
          _this2.switchTab(tabName);
        });
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(tabName) {
      // Désactiver l'onglet actuel avec vérifications plus robustes
      var currentActiveButton = document.querySelector('.tab-button.active');
      if (currentActiveButton) {
        currentActiveButton.classList.remove('active');
      }
      var currentActivePanel = document.querySelector('.tab-panel.active');
      if (currentActivePanel) {
        currentActivePanel.classList.remove('active');
      }

      // Activer le nouvel onglet avec vérifications
      var newTabButton = document.querySelector("[data-tab=\"".concat(tabName, "\"]"));
      if (newTabButton) {
        newTabButton.classList.add('active');
      }
      var newTabPanel = document.getElementById("".concat(tabName, "-panel"));
      if (newTabPanel) {
        newTabPanel.classList.add('active');
      }
      this.currentTab = tabName;
      if (tabName === 'ranking') {
        this.loadRanking(); // AJOUTEZ CETTE LIGNE
      }
      // Actions spécifiques par onglet
      switch (tabName) {
        case 'characters':
          this.loadCharacters();
          break;
        case 'battle':
          this.updateBattleTab();
          // Également appeler la méthode de team-management si elle existe
          if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
            window.teamManagement.updateBattleTab();
          }
          break;
        case 'history':
          this.loadMatchHistory();
          break;
      }
    }

    // =============== PERSONNAGES ===============
  }, {
    key: "loadCharacters",
    value: function loadCharacters() {
      var _this3 = this;
      var container = document.querySelector('.characters-grid');
      if (!container) {
        console.warn('Conteneur de personnages introuvable');
        return;
      }

      // Simuler le chargement
      container.innerHTML = '<p class="loading-text">Chargement des personnages...</p>';

      // Personnages d'exemple
      var sampleCharacters = [{
        id: 1,
        name: 'Garde Royal',
        role: 'Tank',
        power: 150
      }, {
        id: 2,
        name: 'Archer Mystique',
        role: 'DPS',
        power: 180
      }, {
        id: 3,
        name: 'Clerc Divin',
        role: 'Support',
        power: 120
      }, {
        id: 4,
        name: 'Mage de Bataille',
        role: 'DPS',
        power: 200
      }, {
        id: 5,
        name: 'Paladin',
        role: 'Tank',
        power: 170
      }, {
        id: 6,
        name: 'Druide',
        role: 'Support',
        power: 140
      }];
      setTimeout(function () {
        container.innerHTML = '';
        sampleCharacters.forEach(function (character) {
          container.appendChild(_this3.createCharacterCard(character));
        });
      }, 500);
    }
  }, {
    key: "createCharacterCard",
    value: function createCharacterCard(character) {
      var card = document.createElement('div');
      card.className = 'character-card';
      card.innerHTML = "\n            <div class=\"character-header\">\n                <h3>".concat(character.name, "</h3>\n                <span class=\"character-role role-").concat(character.role.toLowerCase(), "\">").concat(character.role, "</span>\n            </div>\n            <div class=\"character-stats\">\n                <div class=\"stat\">\n                    <span class=\"stat-label\">Puissance</span>\n                    <span class=\"stat-value\">").concat(character.power, "</span>\n                </div>\n            </div>\n        ");
      return card;
    }

    // =============== COMBAT ===============
  }, {
    key: "updateBattleTab",
    value: function updateBattleTab() {
      var searchBtn = document.querySelector('.search-battle-btn');
      var infoText = document.querySelector('.battle-search .info-text');
      if (!searchBtn) {
        console.warn('Bouton de recherche de bataille introuvable');
        return;
      }
      if (!infoText) {
        console.warn('Texte d\'information de bataille introuvable');
        return;
      }

      // Vérifier le nombre de personnages sélectionnés
      var selectedCharacters = document.querySelectorAll('.character-card.selected');
      var teamSize = selectedCharacters.length;
      if (teamSize === 3) {
        searchBtn.disabled = false;
        infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
      } else {
        searchBtn.disabled = true;
        infoText.textContent = "S\xE9lectionnez ".concat(3 - teamSize, " personnage(s) de plus pour commencer");
      }
    }

    // =============== HISTORIQUE ===============
  }, {
    key: "loadMatchHistory",
    value: function () {
      var _loadMatchHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var historyContainer, response, data, historyHTML, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              historyContainer = document.querySelector('.match-history');
              if (historyContainer) {
                _context.n = 1;
                break;
              }
              console.warn('Conteneur d\'historique introuvable');
              return _context.a(2);
            case 1:
              // Afficher un indicateur de chargement
              historyContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement de l\'historique...</p>';
              _context.p = 2;
              _context.n = 3;
              return fetch('/api/matchmaking/history');
            case 3:
              response = _context.v;
              _context.n = 4;
              return response.json();
            case 4:
              data = _context.v;
              if (!(!data.success || data.matches.length === 0)) {
                _context.n = 5;
                break;
              }
              historyContainer.innerHTML = '<p class="empty-history">Aucun combat joué pour le moment</p>';
              return _context.a(2);
            case 5:
              // Construire l'historique
              historyHTML = "\n                <div class=\"history-stats\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-label\">Total</span>\n                        <span class=\"stat-value\">".concat(data.total_matches, "</span>\n                    </div>\n                    <div class=\"stat-item wins\">\n                        <span class=\"stat-label\">Victoires</span>\n                        <span class=\"stat-value\">").concat(data.wins, "</span>\n                    </div>\n                    <div class=\"stat-item losses\">\n                        <span class=\"stat-label\">D\xE9faites</span>\n                        <span class=\"stat-value\">").concat(data.losses, "</span>\n                    </div>\n                    <div class=\"stat-item winrate\">\n                        <span class=\"stat-label\">Taux de victoire</span>\n                        <span class=\"stat-value\">").concat(data.total_matches > 0 ? Math.round(data.wins / data.total_matches * 100) : 0, "%</span>\n                    </div>\n                </div>\n                <div class=\"history-list\">\n            ");
              data.matches.forEach(function (match) {
                var resultClass = match.is_winner ? 'victory' : 'defeat';
                var resultIcon = match.is_winner ? 'trophy' : 'times';
                var resultText = match.is_winner ? 'VICTOIRE' : 'DÉFAITE';
                historyHTML += "\n                    <div class=\"match-item ".concat(resultClass, "\">\n                        <div class=\"match-result\">\n                            <i class=\"fas fa-").concat(resultIcon, "\"></i>\n                            <span class=\"result-text\">").concat(resultText, "</span>\n                        </div>\n                        <div class=\"match-details\">\n                            <div class=\"teams\">\n                                <div class=\"team player-team\">\n                                    <span class=\"team-name\">").concat(match.player_team, "</span>\n                                    <span class=\"team-power\">").concat(Math.round(match.player_power), "</span>\n                                </div>\n                                <div class=\"vs\">VS</div>\n                                <div class=\"team opponent-team\">\n                                    <span class=\"team-name\">").concat(match.opponent_team, "</span>\n                                    <span class=\"team-power\">").concat(Math.round(match.opponent_power), "</span>\n                                </div>\n                            </div>\n                            <div class=\"opponent-info\">\n                                <span class=\"opponent-name\">").concat(match.opponent_player, "</span>\n                            </div>\n                        </div>\n                        <div class=\"match-meta\">\n                            <div class=\"match-info\">\n                                <span class=\"match-date\">").concat(match.finished_at, "</span>\n                                <span class=\"match-duration\">").concat(match.duration, "</span>\n                            </div>\n                            <div class=\"match-actions\">\n                                <button class=\"btn btn-recap\" onclick=\"gameInterface.showMatchRecap(").concat(match.id, ")\" title=\"Voir le recap du combat\">\n                                    <i class=\"fas fa-eye\"></i>\n                                    <span>Recap</span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                ");
              });
              historyHTML += '</div>';
              historyContainer.innerHTML = historyHTML;
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Erreur lors du chargement de l\'historique:', _t);
              historyContainer.innerHTML = '<p class="error-text">Erreur lors du chargement de l\'historique</p>';
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[2, 6]]);
      }));
      function loadMatchHistory() {
        return _loadMatchHistory.apply(this, arguments);
      }
      return loadMatchHistory;
    }() // =============== UTILITAIRES ===============
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var notification = document.createElement('div');
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n            <i class=\"fas fa-".concat(this.getNotificationIcon(type), "\"></i>\n            <span>").concat(message, "</span>\n        ");
      document.body.appendChild(notification);
      setTimeout(function () {
        return notification.classList.add('show');
      }, 10);
      setTimeout(function () {
        notification.classList.remove('show');
        setTimeout(function () {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  }, {
    key: "getNotificationIcon",
    value: function getNotificationIcon(type) {
      var icons = {
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle',
        'info': 'info-circle'
      };
      return icons[type] || 'info-circle';
    }

    // =============== CLASSEMENT ===============
  }, {
    key: "setupRankingFilters",
    value: function setupRankingFilters() {
      var _this4 = this;
      var filterButtons = document.querySelectorAll('.ranking-btn');
      filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          // Désactiver tous les boutons
          filterButtons.forEach(function (btn) {
            return btn.classList.remove('active');
          });

          // Activer le bouton cliqué
          button.classList.add('active');

          // Charger le classement avec le filtre
          var filter = button.dataset.filter;
          _this4.loadRanking(filter);
        });
      });
    }
  }, {
    key: "loadRanking",
    value: function () {
      var _loadRanking = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var filter,
          rankingContainer,
          response,
          data,
          emptyMessage,
          rankingHTML,
          i,
          player,
          topClass,
          rankClass,
          rankIcon,
          changeClass,
          changeSign,
          _i,
          _player,
          _changeClass,
          _changeSign,
          _args2 = arguments,
          _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'global';
              rankingContainer = document.querySelector('#ranking-list');
              if (rankingContainer) {
                _context2.n = 1;
                break;
              }
              console.warn('Conteneur de classement introuvable');
              return _context2.a(2);
            case 1:
              // Afficher un indicateur de chargement
              rankingContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement du classement...</p>';
              _context2.p = 2;
              _context2.n = 3;
              return fetch("/api/matchmaking/ranking?filter=".concat(filter));
            case 3:
              response = _context2.v;
              _context2.n = 4;
              return response.json();
            case 4:
              data = _context2.v;
              if (!(!data.success || data.ranking.length === 0)) {
                _context2.n = 5;
                break;
              }
              emptyMessage = 'Aucun joueur classé pour le moment';
              if (filter === 'weekly') emptyMessage = 'Aucun match joué cette semaine';
              if (filter === 'monthly') emptyMessage = 'Aucun match joué ce mois-ci';
              rankingContainer.innerHTML = "<p class=\"empty-ranking\">".concat(emptyMessage, "</p>");
              return _context2.a(2);
            case 5:
              // Mettre à jour la position du joueur actuel
              this.updateUserPosition(data.current_player_position, data.current_player_mmr);

              // Construire le classement
              rankingHTML = "<div class=\"top-players\">"; // Top 3 avec design spécial
              for (i = 0; i < Math.min(3, data.ranking.length); i++) {
                player = data.ranking[i];
                topClass = i === 0 ? 'top-1' : i === 1 ? 'top-2' : 'top-3';
                rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze';
                rankIcon = i === 0 ? 'crown' : i === 1 ? 'medal' : 'award';
                changeClass = player.mmr_change >= 0 ? 'positive' : 'negative';
                changeSign = player.mmr_change >= 0 ? '+' : '';
                rankingHTML += "\n                    <div class=\"ranking-entry ".concat(topClass, " ").concat(player.is_current_player ? 'current-player' : '', "\">\n                        <span class=\"rank ").concat(rankClass, "\"><i class=\"fas fa-").concat(rankIcon, "\"></i> ").concat(player.position, "</span>\n                        <div class=\"player-info\">\n                            <span class=\"player-name\" style=\"color: ").concat(player.username === window.userInfo.username ? window.userInfo.usernameColor : 'inherit', "\">").concat(player.username, "</span>\n                            <div class=\"player-stats\">\n                                <span class=\"rating\"><i class=\"fas fa-star\"></i> ").concat(player.mmr, "</span>\n                                <span class=\"wins\"><i class=\"fas fa-trophy\"></i> ").concat(player.wins, "V</span>\n                                <span class=\"losses\"><i class=\"fas fa-times\"></i> ").concat(player.losses, "D</span>\n                            </div>\n                        </div>\n                        <span class=\"rating-change ").concat(changeClass, "\">").concat(changeSign).concat(player.mmr_change, "</span>\n                    </div>\n                ");
              }
              rankingHTML += '</div><div class="other-players">';

              // Autres joueurs (position 4+)
              _i = 3;
            case 6:
              if (!(_i < data.ranking.length)) {
                _context2.n = 8;
                break;
              }
              _player = data.ranking[_i];
              _changeClass = _player.mmr_change >= 0 ? 'positive' : 'negative';
              _changeSign = _player.mmr_change >= 0 ? '+' : '';
              rankingHTML += "\n                    <div class=\"ranking-entry ".concat(_player.is_current_player ? 'current-player' : '', "\">\n                        <span class=\"rank\">#").concat(_player.position, "</span>\n                        <div class=\"player-info\">\n                            <span class=\"player-name\" style=\"color: ").concat(_player.is_current_player ? window.userInfo.usernameColor : 'inherit', "\">").concat(_player.username, "</span>\n                            <div class=\"player-stats\">\n                                <span class=\"rating\"><i class=\"fas fa-star\"></i> ").concat(_player.mmr, "</span>\n                                <span class=\"wins\"><i class=\"fas fa-trophy\"></i> ").concat(_player.wins, "V</span>\n                                <span class=\"losses\"><i class=\"fas fa-times\"></i> ").concat(_player.losses, "D</span>\n                            </div>\n                        </div>\n                        <span class=\"rating-change ").concat(_changeClass, "\">").concat(_changeSign).concat(_player.mmr_change, "</span>\n                    </div>\n                ");

              // Afficher seulement les 10 premiers, puis un bouton "Voir plus"
              if (!(_i >= 9)) {
                _context2.n = 7;
                break;
              }
              rankingHTML += "\n                        <div class=\"ranking-more\">\n                            <button class=\"load-more-btn\" onclick=\"gameInterface.loadMoreRanking(".concat(_i + 1, ")\">\n                                <i class=\"fas fa-chevron-down\"></i> Voir plus de joueurs\n                            </button>\n                        </div>\n                    ");
              return _context2.a(3, 8);
            case 7:
              _i++;
              _context2.n = 6;
              break;
            case 8:
              rankingHTML += '</div>';
              rankingContainer.innerHTML = rankingHTML;
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              console.error('Erreur lors du chargement du classement:', _t2);
              rankingContainer.innerHTML = '<p class="error-text">Erreur lors du chargement du classement</p>';
            case 10:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 9]]);
      }));
      function loadRanking() {
        return _loadRanking.apply(this, arguments);
      }
      return loadRanking;
    }()
  }, {
    key: "updateUserPosition",
    value: function updateUserPosition(position, mmr) {
      var userPositionElement = document.querySelector('.position-number');
      var userRatingElement = document.querySelector('.rating-text');
      if (userPositionElement) {
        userPositionElement.textContent = "#".concat(position || '?');
      } else {
        console.warn('Élément de position utilisateur introuvable');
      }
      if (userRatingElement) {
        userRatingElement.textContent = "".concat(mmr || 1200, " pts");
      } else {
        console.warn('Élément de score utilisateur introuvable');
      }
    }
  }, {
    key: "loadMoreRanking",
    value: function loadMoreRanking(startIndex) {
      console.log('Charger plus de joueurs à partir de:', startIndex);
      this.showNotification('Fonctionnalité bientôt disponible !', 'info');
    }

    // =============== SYSTÈME DE VISUALISATION DE COMBAT ===============
  }, {
    key: "showCombatVisualization",
    value: function () {
      var _showCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(matchId) {
        var response, matchData, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              if (matchId) {
                _context3.n = 1;
                break;
              }
              throw new Error('ID de match manquant');
            case 1:
              _context3.n = 2;
              return fetch("/api/matchmaking/match/".concat(matchId, "/events"));
            case 2:
              response = _context3.v;
              if (response.ok) {
                _context3.n = 3;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 3:
              _context3.n = 4;
              return response.json();
            case 4:
              matchData = _context3.v;
              if (matchData) {
                _context3.n = 5;
                break;
              }
              throw new Error('Données de match vides');
            case 5:
              console.log('📊 Données de match reçues:', matchData);
              this.displayCombatVisualizationModal(matchData);
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              console.error('Erreur lors du chargement de la visualisation:', _t3);
              this.showNotification('Erreur lors du chargement du combat: ' + _t3.message, 'error');
            case 7:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 6]]);
      }));
      function showCombatVisualization(_x) {
        return _showCombatVisualization.apply(this, arguments);
      }
      return showCombatVisualization;
    }()
  }, {
    key: "determinePlateauType",
    value:
    // =============== UTILITAIRES DE PLATEAU ===============

    function determinePlateauType(matchData) {
      // Aléatoirement choisir entre medieval et dystopian
      var plateauTypes = ['medieval', 'dystopian'];
      return plateauTypes[Math.floor(Math.random() * plateauTypes.length)];
    }
  }, {
    key: "displayCombatVisualizationModal",
    value: function displayCombatVisualizationModal(matchData) {
      var _this5 = this;
      try {
        var _window$userInfo, _document$querySelect;
        console.log('🔍 DEBUG: matchData complet =', JSON.stringify(matchData, null, 2));
        // Récupérer les vraies données des équipes
        var teamA = matchData.teamA || matchData.team_a || matchData.playerTeam;
        var teamB = matchData.teamB || matchData.team_b || matchData.enemyTeam;
        var currentUser = matchData.currentUser || ((_window$userInfo = window.userInfo) === null || _window$userInfo === void 0 ? void 0 : _window$userInfo.username) || ((_document$querySelect = document.querySelector('[data-username]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.dataset.username) || 'bambam';

        // Vérifications de sécurité
        if (!teamA || !teamB) {
          console.error('Équipes manquantes:', {
            teamA: teamA,
            teamB: teamB
          });
          this.showNotification('Erreur: données d\'équipe manquantes', 'error');
          return;
        }

        // Déterminer quelle équipe appartient au joueur actuel de manière sécurisée
        var playerTeam, enemyTeam;
        if (teamA && teamA.player === currentUser) {
          playerTeam = teamA;
          enemyTeam = teamB;
        } else if (teamB && teamB.player === currentUser) {
          playerTeam = teamB;
          enemyTeam = teamA;
        } else {
          // Par défaut, assigner teamA comme équipe du joueur
          playerTeam = teamA;
          enemyTeam = teamB;
        }
        console.log('� Teams Debug:', {
          currentUser: currentUser,
          teamA: teamA.player,
          teamB: teamB.player,
          playerTeam: playerTeam.player,
          enemyTeam: enemyTeam.player
        });

        // Vérifier si les éléments nécessaires existent
        var modal = document.querySelector('.battlefield-modal');
        if (modal) {
          modal.remove();
        }

        // Déterminer le type de plateau selon le match
        var plateauType = this.determinePlateauType(matchData);
        modal = document.createElement('div');
        modal.className = 'battlefield-modal show';
        modal.innerHTML = "\n                <div class=\"battlefield-container\">\n                    <!-- Guide de Guilde \xE0 gauche -->\n                    <div class=\"battlefield-guild-guide\">\n                        <div class=\"guild-guide-avatar\">\n                            <img src=\"/images/guild1.png\" alt=\"Guide de Guilde\" class=\"guide-avatar\" id=\"guild-avatar-combat\">\n                        </div>\n                        <div class=\"guild-guide-bubble\">\n                            <div class=\"bubble-arrow\"></div>\n                            <p id=\"guide-text-combat\">\u2694\uFE0F Que le combat commence ! Montrez-leur de quoi vous \xEAtes capable !</p>\n                        </div>\n                    </div>\n                    \n                    <!-- Contenu principal du battlefield \xE0 droite -->\n                    <div class=\"battlefield-main-content\">\n                        <div class=\"battlefield-header\">\n                            <h2>\u2694\uFE0F Combat \xC9pique en Cours \u2694\uFE0F</h2>\n                            <button class=\"close-battlefield\">\xD7</button>\n                        </div>\n                        \n                        <!-- Zone des cartes ennemies (EN HAUT DU PLATEAU) -->\n                        <div class=\"enemy-cards-zone\">\n                            <h3>\uD83D\uDD34 \xC9quipe Adverse</h3>\n                            <div class=\"battlefield-cards enemy-cards\">\n                                ".concat(this.generateBattlefieldCards(enemyTeam, 'enemy'), "\n                            </div>\n                        </div>\n                        \n                        <!-- Ar\xE8ne de combat centrale -->\n                        <div class=\"battlefield-arena ").concat(plateauType, "\">\n                            <div class=\"combat-zone-3d\">\n                                <!-- Les personnages 3D appara\xEEtront ici -->\n                            </div>\n                            \n                            <!-- Zone d'animation spectaculaire centrale -->\n                            <div class=\"action-animation-zone\">\n                                <div class=\"action-display\"></div>\n                                <div class=\"combat-effects\"></div>\n                            </div>\n                            \n                            <!-- Contr\xF4les de vitesse repositionn\xE9s -->\n                            <div class=\"speed-controls\">\n                                <button class=\"speed-btn active\" data-speed=\"1\">x1</button>\n                                <button class=\"speed-btn\" data-speed=\"2\">x2</button>\n                                <button class=\"speed-btn\" data-speed=\"5\">x5</button>\n                                <button class=\"speed-btn\" data-speed=\"10\">x10</button>\n                            </div>\n                        </div>\n                        \n                        <!-- Zone des cartes du joueur (EN BAS DU PLATEAU) -->\n                        <div class=\"player-cards-zone\">\n                            <h3>\uD83D\uDFE2 Votre \xC9quipe</h3>\n                            <div class=\"battlefield-cards player-cards\">\n                                ").concat(this.generateBattlefieldCards(playerTeam, 'player'), "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");
        document.body.appendChild(modal);

        // Appliquer le background aléatoire à l'arène
        var arena = modal.querySelector('.battlefield-arena');
        if (arena) {
          var randomBackground = this.getRandomBattlefieldBackground();
          console.log("\uD83C\uDFA8 Background appliqu\xE9: ".concat(randomBackground));
          arena.style.backgroundImage = "url('/images/".concat(randomBackground, "')");
          arena.style.backgroundSize = 'cover';
          arena.style.backgroundPosition = 'center';
          arena.style.backgroundRepeat = 'no-repeat';
        }

        // Initialiser le système 3D
        this.combat3D = new Combat3DSystem();
        this.initCombat3DSystem(matchData);

        // Fermeture du modal
        var closeBtn = modal.querySelector('.close-battlefield');
        closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', function () {
          var _this5$combat3D;
          _this5.closeBattlefieldModal();
          _this5.resumeBackgroundVideo();
          (_this5$combat3D = _this5.combat3D) === null || _this5$combat3D === void 0 || _this5$combat3D.cleanup();
        });

        // Gestionnaire d'échappement
        var _escapeHandler = function escapeHandler(e) {
          if (e.key === 'Escape') {
            var _this5$combat3D2;
            _this5.closeBattlefieldModal();
            _this5.resumeBackgroundVideo();
            (_this5$combat3D2 = _this5.combat3D) === null || _this5$combat3D2 === void 0 || _this5$combat3D2.cleanup();
            document.removeEventListener('keydown', _escapeHandler);
          }
        };
        document.addEventListener('keydown', _escapeHandler);
      } catch (error) {
        console.error('❌ Erreur lors de l\'affichage du combat:', error);
        console.error('Stack trace:', error.stack);
        // Ne pas bloquer l'interface, juste afficher l'erreur
        this.showNotification('Erreur lors de l\'affichage du combat: ' + error.message, 'error');
      }
    }
  }, {
    key: "generateBattlefieldCards",
    value: function generateBattlefieldCards(team, teamType) {
      var _this6 = this;
      // Utiliser les vraies données des personnages de la BDD
      var characters = team.characters || team || [];
      var teamColor = teamType === 'player' ? '#4CAF50' : '#F44336';
      var teamBorder = teamType === 'player' ? '#388E3C' : '#D32F2F';
      return characters.map(function (_char, index) {
        // Debug pour comprendre la structure des données
        console.log('🔍 Personnage:', _char.name, 'Image:', _char.imagePath || _char.image, 'Role:', _char.role || _char["class"]);

        // Priorité: char.imagePath > char.image > par défaut selon le rôle
        var imageSrc = '';
        var fallbackImage = '';
        if (_char.imagePath && _char.imagePath !== 'placeholder.png') {
          // Nettoyer le chemin d'image s'il contient des chemins complets
          imageSrc = _char.imagePath.replace(/^.*[\\\/]/, '').replace('/images/characters/', '');
        } else if (_char.image && _char.image !== 'placeholder.png') {
          // Nettoyer le chemin d'image s'il contient des chemins complets
          imageSrc = _char.image.replace(/^.*[\\\/]/, '').replace('/images/characters/', '');
        } else {
          imageSrc = _this6.getCharacterImageByRole(_char.role || _char["class"]);
        }
        fallbackImage = _this6.getCharacterImageByRole(_char.role || _char["class"]);

        // Debug amélioré
        console.log("\uD83D\uDDBC\uFE0F [".concat(_char.name, "] Image finale: ").concat(imageSrc, ", Fallback: ").concat(fallbackImage, ", Original: ").concat(_char.imagePath || _char.image));

        // Sécuriser les données JSON pour éviter l'erreur de parsing
        var safeCharData = {
          name: _char.name || 'Inconnu',
          role: _char.role || _char["class"] || 'warrior',
          image: imageSrc,
          level: _char.level || 1,
          hp: _char.hp || 100,
          attack: _char.attack || 50
        };
        return "\n            <div class=\"battlefield-card ".concat(teamType, "-card\" data-character-id=\"").concat(index, "\" data-team=\"").concat(teamType, "\" data-character='").concat(JSON.stringify(safeCharData).replace(/'/g, "&apos;"), "'>\n                <div class=\"card-body\">\n                    <div class=\"character-avatar\">\n                        <img src=\"/images/characters/").concat(imageSrc, "\" alt=\"").concat(_char.name, "\" \n                             onerror=\"this.src='/images/characters/").concat(fallbackImage, "'; console.warn('\uD83D\uDDBC\uFE0F Image non trouv\xE9e: ").concat(imageSrc, ", utilisation fallback: ").concat(fallbackImage, "');\" />\n                    </div>\n                    <div class=\"character-name\">").concat(_char.name, "</div>\n                    <div class=\"character-role\">\n                        <i class=\"").concat(_this6.getRoleIcon(_char.role || _char["class"]), "\"></i>\n                        ").concat(_this6.getRoleName(_char.role || _char["class"]), "\n                    </div>\n                </div>\n            </div>\n            ");
      }).join('');
    }
  }, {
    key: "getCharacterImageByRole",
    value: function getCharacterImageByRole(role) {
      var roleImages = {
        'tank': 'paladin.png',
        'mage': 'mage.png',
        'archer': 'archer.png',
        'assassin': 'assassin.png',
        'priest': 'priest.png',
        'warrior': 'warrior.png'
      };
      return roleImages[role] || 'warrior.png';
    }
  }, {
    key: "getRandomBattlefieldBackground",
    value: function getRandomBattlefieldBackground() {
      var medievalBgs = ['plateauxMedieval/cimetière.png', 'plateauxMedieval/cours du chateau.png', 'plateauxMedieval/place du village.png'];
      var dystoBgs = ['plateauxDysto/champ de bataille dysto.png', 'plateauxDysto/cours moderne.png', 'plateauxDysto/place village moderne.png'];
      var allBgs = [].concat(medievalBgs, dystoBgs);
      return allBgs[Math.floor(Math.random() * allBgs.length)];
    }
  }, {
    key: "getKaamelottPhrase",
    value: function getKaamelottPhrase() {
      var situation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'general';
      var phrases = {
        start: ["Ah ! Voilà qui va être intéressant !", "Bon, on va voir ce qu'on va voir !", "C'est parti mon kiki !", "Alors, on commence quand vous voulez !", "Ça va être du sport !", "C'est le moment de vérité !", "Allez-y, surprenez-moi !", "Que le meilleur gagne... enfin j'espère que c'est vous !", "C'est parti pour la baston !", "Bon, moi je dis : qu'est-ce qu'on attend ?"],
        attack: ["Ça c'est du rentre-dedans !", "Ah, la vache ! Il y va franco !", "C'est ça ! Tapez sur tout ce qui bouge !", "Eh ben dis donc, il se gêne pas !", "Allez-y ! Mais allez-y donc !", "Alors là, chapeau ! Ça c'est de l'attaque !", "C'est beau ! C'est du grand art !", "Ça c'est envoyé ! Sans faire de détail !", "Oh là là ! Il l'a pas raté celui-là !", "Voilà ce que j'appelle de l'efficacité !", "C'est pas du cinéma ça ! C'est du concret !", "Il a pas fait dans la dentelle !", "Ça c'est du travail de professionnel !"],
        defense: ["Eh ! Il a paré ! Comme un chef !", "Alors là, bravo ! Belle parade !", "C'est ça ! Restez sur vos gardes !", "Eh ben, il l'a vue venir celle-là !", "C'est de la défense ça ! Du béton !", "Ah ! Il s'y connaît en protection !", "Voilà un bouclier qui sert à quelque chose !", "C'est du solide ! Ça tient la route !", "Belle anticipation ! Très joli !", "C'est ça la vraie défense ! Du costaud !", "Il tient le choc ! Respect !", "Ça c'est de la résistance ! Impressionnant !"],
        magic: ["Oh ! De la magie ! Ça c'est du spectacle !", "Alors là ! Ça c'est de l'artisanat !", "Eh ben ! Il sort le grand jeu !", "C'est de la belle ouvrage ça !", "Voilà ce que j'appelle un tour de maître !", "Ça c'est du niveau ! Du grand art !", "Oh là là ! Il connaît son affaire !", "C'est beau ! C'est lumineux !", "Alors ça ! C'est de la technique !", "Eh ben dis donc ! Il a des ressources !", "C'est ça les vrais sortilèges !", "Il maîtrise son sujet ! Chapeau !", "Voilà ce qu'on appelle avoir du métier !"],
        heal: ["Ah ! Un petit coup de réparation !", "C'est ça ! On soigne ses petits bobos !", "Eh ! Il connaît les premiers secours !", "Voilà qui va faire du bien !", "C'est de la bonne médecine ça !", "Ah ! Il sait y faire avec les potions !", "C'est du travail de guérisseur ça !", "Eh ben ! Il a de la ressource !", "Voilà qui redonne la forme !", "C'est ça le vrai métier de soigneur !", "Ah ! On n'est jamais mieux soigné que par soi-même !", "Belle intervention ! C'est du professionnel !"],
        victory: ["Alors là ! Bravo ! C'est du beau boulot !", "Eh ben voilà ! C'est ça qu'on appelle une victoire !", "Ah ! C'est fini ! Et bien joué !", "Voilà ! Mission accomplie ! Du grand art !", "C'est ça ! On a gagné ! Comme des chefs !", "Eh ben dis donc ! Ça c'est de la performance !", "Bravo ! C'est du travail de professionnel !", "Alors là, chapeau ! C'est mérité !", "Voilà ce que j'appelle une belle victoire !", "C'est fini ! Et c'est bien fini ! Bravo !", "Ah ! C'est ça qu'on voulait voir !", "Mission accomplie ! Du beau travail !"],
        defeat: ["Ah ! Eh ben... c'est pas passé loin !", "Bon, on fera mieux la prochaine fois !", "C'est pas grave ! L'important c'est de participer !", "Eh ! On peut pas gagner à tous les coups !", "C'est ça ! On apprend de ses erreurs !", "Bon, on refera ça plus tard !", "C'est pas dramatique ! On s'en remettra !", "Eh ben ! Ça arrive aux meilleurs !", "C'est comme ça ! On gagne pas toujours !", "Bon, on dira que c'était un entraînement !", "C'est pas la fin du monde ! On recommencera !", "Eh ! L'adversaire était coriace !"]
      };
      var situationPhrases = phrases[situation] || phrases.general || phrases.start;
      return situationPhrases[Math.floor(Math.random() * situationPhrases.length)];
    }
  }, {
    key: "showKaamelottComment",
    value: function showKaamelottComment() {
      var situation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'general';
      var phrase = this.getKaamelottPhrase(situation);
      var guideText = document.getElementById('guide-text');
      var commentary = document.getElementById('guild-guide-commentary');
      var avatar = document.querySelector('.guild-guide-avatar img');
      if (guideText) {
        guideText.textContent = phrase;
      }
      if (commentary) {
        commentary.classList.add('show');
        setTimeout(function () {
          commentary.classList.remove('show');
        }, 4000);
      }
      if (avatar) {
        avatar.src = this.getNextGuildImage();
      }
      console.log('🗣️ Guild Guide Kaamelott:', phrase);
    }
  }, {
    key: "initBattlefieldCombatVisualization",
    value: function initBattlefieldCombatVisualization(matchData) {
      var _this7 = this;
      // Initialiser le nouveau système de combat 3D
      this.initCombat3DSystem(matchData);

      // Setup des contrôles existants
      var modal = document.querySelector('.battlefield-modal');
      var closeBtn = document.getElementById('combat-close-btn');
      var startBtn = document.getElementById('start-combat-btn');
      var speedBtns = document.querySelectorAll('.speed-btn');
      var isPlaying = false;
      var currentSpeed = 2; // Vitesse par défaut x2

      // Faire le modal plein écran
      if (modal) {
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        document.body.classList.add('battlefield-active');
      }

      // Fonction de fermeture
      var closeModal = function closeModal() {
        if (modal) {
          var _this7$combat3D;
          _this7.resumeBackgroundVideo();
          document.body.classList.remove('battlefield-active');
          modal.remove();
          (_this7$combat3D = _this7.combat3D) === null || _this7$combat3D === void 0 || _this7$combat3D.cleanup();
        }
      };
      closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', closeModal);

      // Fermer avec Escape
      var _escapeHandler2 = function escapeHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', _escapeHandler2);
        }
      };
      document.addEventListener('keydown', _escapeHandler2);

      // Contrôles de vitesse
      speedBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          speedBtns.forEach(function (b) {
            return b.classList.remove('active');
          });
          btn.classList.add('active');
          currentSpeed = parseFloat(btn.dataset.speed);

          // Mettre à jour la vitesse du système 3D
          if (_this7.combat3D) {
            _this7.combat3D.speedMultiplier = currentSpeed;
          }
          console.log('🎮 Vitesse changée:', currentSpeed + 'x');
        });
      });
    }

    // =============== SYSTÈME DE COMBAT 3D ===============
  }, {
    key: "initCombat3DSystem",
    value: function initCombat3DSystem(matchData) {
      var _window$userInfo2,
        _document$querySelect2,
        _playerTeam,
        _enemyTeam,
        _playerTeam2,
        _enemyTeam2,
        _this8 = this;
      // Récupérer les équipes avec différents formats possibles
      var teamA = matchData.teamA || matchData.team_a || matchData.playerTeam;
      var teamB = matchData.teamB || matchData.team_b || matchData.enemyTeam;
      // Utiliser l'utilisateur connecté depuis window.userInfo ou les données du match
      var currentUser = matchData.currentUser || ((_window$userInfo2 = window.userInfo) === null || _window$userInfo2 === void 0 ? void 0 : _window$userInfo2.username) || ((_document$querySelect2 = document.querySelector('[data-username]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.dataset.username) || 'bambam';
      console.log('🔍 DEBUG initCombat3D:', {
        teamA: teamA,
        teamB: teamB,
        currentUser: currentUser,
        matchDataKeys: Object.keys(matchData)
      });

      // Vérifications de sécurité
      if (!teamA || !teamB) {
        console.error('❌ Équipes manquantes dans initCombat3D:', {
          teamA: teamA,
          teamB: teamB
        });
        return;
      }

      // Déterminer quelle équipe appartient au joueur actuel
      var playerTeam, enemyTeam;
      if (teamA && teamA.player === currentUser) {
        playerTeam = teamA;
        enemyTeam = teamB;
      } else if (teamB && teamB.player === currentUser) {
        playerTeam = teamB;
        enemyTeam = teamA;
      } else {
        // Par défaut, assigner teamA comme équipe du joueur
        playerTeam = teamA;
        enemyTeam = teamB;
      }
      console.log('🎯 Équipes assignées:', {
        playerTeam: (_playerTeam = playerTeam) === null || _playerTeam === void 0 ? void 0 : _playerTeam.name,
        enemyTeam: (_enemyTeam = enemyTeam) === null || _enemyTeam === void 0 ? void 0 : _enemyTeam.name,
        playerCharacters: ((_playerTeam2 = playerTeam) === null || _playerTeam2 === void 0 || (_playerTeam2 = _playerTeam2.characters) === null || _playerTeam2 === void 0 ? void 0 : _playerTeam2.length) || 0,
        enemyCharacters: ((_enemyTeam2 = enemyTeam) === null || _enemyTeam2 === void 0 || (_enemyTeam2 = _enemyTeam2.characters) === null || _enemyTeam2 === void 0 ? void 0 : _enemyTeam2.length) || 0
      });

      // Attendre que le modal soit monté dans le DOM
      setTimeout(function () {
        if (playerTeam && enemyTeam) {
          _this8.setupCardTo3DTransition(playerTeam, enemyTeam);
          _this8.setupGuildGuideForCombat();
        } else {
          console.error('❌ Impossible de configurer le 3D - équipes invalides');
        }
      }, 500);
    }
  }, {
    key: "setupCardTo3DTransition",
    value: function setupCardTo3DTransition(playerTeam, enemyTeam) {
      var _this9 = this;
      var combatZone = document.querySelector('.combat-zone-3d');
      if (!combatZone) {
        console.error('❌ Zone de combat 3D non trouvée !');
        return;
      }

      // Vérifications de sécurité
      if (!playerTeam || !enemyTeam) {
        console.error('❌ Équipes manquantes pour la transition 3D:', {
          playerTeam: playerTeam,
          enemyTeam: enemyTeam
        });
        return;
      }

      // Créer les personnages 3D pour l'équipe du joueur
      var playerCards = document.querySelectorAll('.player-card');
      var playerCharacters = playerTeam.characters || [];
      console.log('🎮 Création des personnages joueur:', playerCharacters.length);
      playerCards.forEach(function (card, index) {
        if (playerCharacters[index]) {
          var character3D = _this9.combat3D.create3DCharacter(playerCharacters[index], 'player', index);

          // Animation de sortie de la carte
          _this9.animateCharacterFromCard(card, character3D, 'player');
          combatZone.appendChild(character3D);
        }
      });

      // Créer les personnages 3D pour l'équipe adverse
      var enemyCards = document.querySelectorAll('.enemy-card');
      var enemyCharacters = enemyTeam.characters || [];
      console.log('⚔️ Création des personnages ennemis:', enemyCharacters.length);
      enemyCards.forEach(function (card, index) {
        if (enemyCharacters[index]) {
          var character3D = _this9.combat3D.create3DCharacter(enemyCharacters[index], 'enemy', index);

          // Animation de sortie de la carte
          _this9.animateCharacterFromCard(card, character3D, 'enemy');
          combatZone.appendChild(character3D);
        }
      });

      // Démarrer le combat après les animations
      setTimeout(function () {
        _this9.startEpicCombat();
      }, 3000);
    }
  }, {
    key: "animateCharacterFromCard",
    value: function animateCharacterFromCard(card, character3D, teamType) {
      var _this0 = this;
      var cardRect = card.getBoundingClientRect();

      // Positionner le personnage 3D sur la carte initialement
      character3D.style.position = 'fixed';
      character3D.style.left = cardRect.left + cardRect.width / 2 - 40 + 'px';
      character3D.style.top = cardRect.top + cardRect.height / 2 - 60 + 'px';
      character3D.style.transform = 'scale(0.3) translateY(0)';
      character3D.style.opacity = '0';
      character3D.style.zIndex = '1000';

      // Animation d'apparition
      setTimeout(function () {
        character3D.style.opacity = '1';
        character3D.style.transform = 'scale(0.6) translateY(-30px)';
      }, 200);

      // Animation de sortie vers le battlefield
      setTimeout(function () {
        // Utiliser le système de positionnement 3D
        var position = parseInt(character3D.dataset.position) || 0;
        console.log("\uD83D\uDD27 ANIMATION: dataset.position=".concat(character3D.dataset.position, ", parsed=").concat(position, ", teamType=").concat(teamType));
        _this0.combat3D.positionCharacter(character3D, position, teamType);
        character3D.style.position = 'absolute';
        character3D.style.transform = 'scale(1) translateY(0)';
        character3D.style.zIndex = '100';

        // Effet d'entrée spectaculaire
        character3D.classList.add('character-entrance');
        setTimeout(function () {
          character3D.classList.remove('character-entrance');
        }, 1000);
      }, 1200 + Math.random() * 600); // Délai aléatoire
    }
  }, {
    key: "startEpicCombat",
    value: function startEpicCombat() {
      console.log('🔥 Démarrage du combat épique !');

      // Changer le texte du guild guide
      this.updateGuildGuideText("Le combat fait rage ! Regardez ces mouvements épiques !");

      // Commencer les actions de combat
      this.executeEpicCombatSequence();
    }
  }, {
    key: "executeEpicCombatSequence",
    value: function executeEpicCombatSequence() {
      var _this1 = this;
      var playerCharacters = Array.from(document.querySelectorAll('.player-character-3d'));
      var enemyCharacters = Array.from(document.querySelectorAll('.enemy-character-3d'));
      if (playerCharacters.length === 0 || enemyCharacters.length === 0) {
        console.log('⚠️ Pas de personnages trouvés pour le combat');
        return;
      }
      var actionIndex = 0;
      var _executeNextAction = function executeNextAction() {
        if (actionIndex >= 12) {
          // 12 actions de combat
          _this1.finishEpicCombat();
          return;
        }

        // Choisir un attaquant et une cible aléatoirement
        var allCharacters = [].concat(playerCharacters, enemyCharacters);
        var attacker = allCharacters[Math.floor(Math.random() * allCharacters.length)];

        // Choisir une cible de l'équipe adverse
        var isPlayerAttacker = attacker.classList.contains('player-character-3d');
        var potentialTargets = isPlayerAttacker ? enemyCharacters : playerCharacters;
        var target = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
        if (attacker && target) {
          // Déterminer le type d'action selon le rôle
          var attackerRole = attacker.dataset.role || 'tank';
          var actionType = _this1.getActionTypeByRole(attackerRole);

          // Exécuter l'animation
          _this1.combat3D.animateCharacterAction(attacker, target, actionType);

          // Mettre à jour l'affichage d'action centrale
          _this1.updateCentralActionDisplay(attacker, target, actionType);
        }
        actionIndex++;

        // Programmer la prochaine action selon la vitesse
        var delay = 2500 / (_this1.combatSpeed || 2);
        setTimeout(_executeNextAction, delay);
      };
      _executeNextAction();
    }
  }, {
    key: "getActionTypeByRole",
    value: function getActionTypeByRole(role) {
      var actions = {
        tank: ['physical_attack', 'defend'],
        dps: ['physical_attack', 'physical_attack'],
        // Plus d'attaques
        support: ['heal', 'magic_spell']
      };
      var roleActions = actions[role] || actions.tank;
      return roleActions[Math.floor(Math.random() * roleActions.length)];
    }
  }, {
    key: "updateCentralActionDisplay",
    value: function updateCentralActionDisplay(attacker, target, actionType) {
      var actionDisplay = document.querySelector('.action-display');
      if (!actionDisplay) return;
      var attackerName = attacker.dataset.name || 'Combattant';
      var targetName = target.dataset.name || 'Cible';
      var actionText = this.getActionText(actionType, attackerName, targetName);
      var actionIcon = this.getActionIcon(actionType);
      actionDisplay.innerHTML = "\n            <div class=\"action-announcement\">\n                <div class=\"action-icon\">".concat(actionIcon, "</div>\n                <div class=\"action-text\">").concat(actionText, "</div>\n            </div>\n        ");
      actionDisplay.classList.add('show');
      setTimeout(function () {
        actionDisplay.classList.remove('show');
      }, 1800);
    }
  }, {
    key: "getActionText",
    value: function getActionText(actionType, attacker, target) {
      var texts = {
        physical_attack: "".concat(attacker, " attaque ").concat(target, " !"),
        magic_spell: "".concat(attacker, " lance un sort sur ").concat(target, " !"),
        heal: "".concat(attacker, " soigne ").concat(target, " !"),
        defend: "".concat(attacker, " se d\xE9fend !")
      };
      return texts[actionType] || "".concat(attacker, " agit sur ").concat(target, " !");
    }
  }, {
    key: "getActionIcon",
    value: function getActionIcon(actionType) {
      var icons = {
        physical_attack: '⚔️',
        magic_spell: '⚡',
        heal: '💚',
        defend: '🛡️'
      };
      return icons[actionType] || '⚔️';
    }
  }, {
    key: "finishEpicCombat",
    value: function finishEpicCombat() {
      // Déterminer le vainqueur aléatoirement pour la démo
      var isPlayerVictory = Math.random() > 0.5;
      this.showCombatResult(isPlayerVictory);
    }
  }, {
    key: "showCombatResult",
    value: function showCombatResult(isVictory) {
      var actionDisplay = document.querySelector('.action-display');
      if (!actionDisplay) return;
      var resultHTML = "\n            <div class=\"combat-result ".concat(isVictory ? 'victory' : 'defeat', "\">\n                <div class=\"result-icon\">").concat(isVictory ? '🏆' : '💀', "</div>\n                <div class=\"result-title\">").concat(isVictory ? 'VICTOIRE!' : 'DÉFAITE', "</div>\n                <div class=\"result-subtitle\">").concat(isVictory ? 'Vos champions triomphent !' : 'Vos champions sont tombés...', "</div>\n            </div>\n        ");
      actionDisplay.innerHTML = resultHTML;
      actionDisplay.classList.add('show', 'final-result');

      // Mettre à jour le guild guide
      this.updateGuildGuideText(isVictory ? "Magnifique victoire ! Vos stratégies portent leurs fruits !" : "Une défaite honorable... Analysez vos erreurs pour vous améliorer !");

      // Afficher l'overlay de victoire ou défaite (SANS AUTO-FERMETURE)
      if (isVictory) {
        this.showBattlefieldVictory();
      } else {
        this.showBattlefieldDefeat();
      }
    }
  }, {
    key: "setupGuildGuideForCombat",
    value: function setupGuildGuideForCombat() {
      var guildGuide = document.querySelector('.battlefield-guild-guide');
      var guideText = document.querySelector('#guide-text-combat');
      var guildBubble = document.querySelector('.guild-guide-bubble');
      var guideAvatar = document.querySelector('#guild-avatar-combat');
      if (!guildGuide || !guideText) {
        console.warn('❌ Guide de guilde combat non trouvé');
        return;
      }

      // Images aléatoires pour le guide
      var guildImages = ['guild1.png', 'guild2.png', 'guild3.png', 'guild4.png'];
      var currentImageIndex = 0;

      // Fonction pour changer d'avatar
      var rotateAvatar = function rotateAvatar() {
        if (guideAvatar) {
          currentImageIndex = (currentImageIndex + 1) % guildImages.length;
          guideAvatar.src = "/images/".concat(guildImages[currentImageIndex]);
        }
      };

      // Phrases Kaamelott pour le combat
      var combatPhrases = ["⚔️ Que le combat commence ! Montrez-leur de quoi vous êtes capable !", "🛡️ C'est pas sorcier ! Il suffit de taper plus fort que l'ennemi !", "⚡ Attention ! Un sort puissant arrive !", "🩹 Ça c'est du bon soin ! Comme ma mère me faisait !", "🏹 Tir précis ! C'est ça l'expérience !", "⚔️ Combat épique en cours... Ne lâchez rien !", "🏆 Victoire ! Comme d'habitude, on a été brillants !", "💀 Défaite... C'est pas grave, on fera mieux la prochaine fois !", "🔥 Ça chauffe ! Le combat s'intensifie !", "⭐ Coup critique ! Ça c'est de la technique !"];
      var phraseIndex = 0;

      // Commenter toutes les 3 secondes
      var commentInterval = setInterval(function () {
        if (phraseIndex < combatPhrases.length) {
          guideText.textContent = combatPhrases[phraseIndex];
          phraseIndex++;

          // Changer d'avatar à chaque commentaire
          rotateAvatar();

          // Animation de la bulle
          if (guildBubble) {
            guildBubble.classList.add('show');

            // Animation de l'avatar
            if (guideAvatar) {
              guideAvatar.style.transform = 'scale(1.1)';
              setTimeout(function () {
                guideAvatar.style.transform = 'scale(1)';
              }, 200);
            }
          }
        } else {
          clearInterval(commentInterval);
        }
      }, 3000);

      // Stocker l'ID de l'intervalle dans le modal pour le nettoyer plus tard
      var modal = document.querySelector('.battlefield-modal');
      if (modal) {
        modal.dataset.commentInterval = commentInterval;
      }

      // Afficher la bulle dès le départ
      if (guildBubble) {
        setTimeout(function () {
          guildBubble.classList.add('show');
        }, 500);
      }
    }
  }, {
    key: "updateGuildGuideText",
    value: function updateGuildGuideText(text) {
      var guideText = document.querySelector('#guide-text');
      if (guideText) {
        guideText.textContent = text;
      }
    }
  }, {
    key: "resumeBackgroundVideo",
    value: function resumeBackgroundVideo() {
      // Reprendre toutes les vidéos de background
      var videos = document.querySelectorAll('video[autoplay]');
      videos.forEach(function (video) {
        video.play();
      });

      // Reprendre les animations CSS
      var animatedElements = document.querySelectorAll('.animated-bg, .gradient-animation');
      animatedElements.forEach(function (element) {
        element.style.animationPlayState = 'running';
      });
    }
  }, {
    key: "pauseBackgroundVideo",
    value: function pauseBackgroundVideo() {
      // Stopper toutes les vidéos de background
      var videos = document.querySelectorAll('video[autoplay]');
      videos.forEach(function (video) {
        video.pause();
      });

      // Stopper les animations CSS si nécessaire
      var animatedElements = document.querySelectorAll('.animated-bg, .gradient-animation');
      animatedElements.forEach(function (element) {
        element.style.animationPlayState = 'paused';
      });
    }
  }, {
    key: "testBattlefieldVisualization",
    value:
    // =============== FONCTION DE TEST POUR LE BATTLEFIELD ===============
    function testBattlefieldVisualization() {
      console.log('🎮 Test de la visualisation battlefield');

      // Données de test simulées avec vraies classes
      var mockMatchData = {
        id: 'test-123',
        team_a: {
          player: 'Vous',
          characters: [{
            name: 'Paladin Divin',
            role: 'tank',
            level: 20,
            hp: 250,
            attack: 90,
            image: 'paladin.png'
          }, {
            name: 'Mage de Feu',
            role: 'mage',
            level: 18,
            hp: 150,
            attack: 180,
            image: 'mage.png'
          }, {
            name: 'Prêtre Guérisseur',
            role: 'priest',
            level: 16,
            hp: 130,
            attack: 70,
            image: 'priest.png'
          }]
        },
        team_b: {
          player: 'Adversaire Redoutable',
          characters: [{
            name: 'Guerrier Berserker',
            role: 'warrior',
            level: 19,
            hp: 200,
            attack: 160,
            image: 'warrior.png'
          }, {
            name: 'Archer Précis',
            role: 'archer',
            level: 17,
            hp: 140,
            attack: 130,
            image: 'archer.png'
          }, {
            name: 'Assassin Furtif',
            role: 'assassin',
            level: 21,
            hp: 180,
            attack: 100,
            image: 'assassin.png'
          }]
        },
        events: [{
          description: "⚔️ Le combat commence !"
        }, {
          description: "🛡️ Paladin charge vers l'ennemi !"
        }, {
          description: "🏹 L'Archer riposte avec précision !"
        }, {
          description: "⚡ Sorcier lance un sort dévastateur !"
        }, {
          description: "🩹 Guérisseur soigne ses alliés !"
        }, {
          description: "🔥 Berserker entre en rage !"
        }, {
          description: "🌿 Druide invoque la nature !"
        }, {
          description: "⚔️ Combat épique en cours..."
        }, {
          description: "🏆 Victoire héroïque !"
        }]
      };

      // Lancer la visualisation avec les données de test
      this.displayCombatVisualizationModal(mockMatchData);
    }
  }, {
    key: "animateCardToPosition",
    value: function animateCardToPosition(card, position, character) {
      // Obtenir les positions pour l'animation
      var cardRect = card.getBoundingClientRect();
      var positionRect = position.getBoundingClientRect();

      // Créer un clone pour l'animation
      var clone = card.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.top = cardRect.top + 'px';
      clone.style.left = cardRect.left + 'px';
      clone.style.width = cardRect.width + 'px';
      clone.style.height = cardRect.height + 'px';
      clone.style.zIndex = '9999';
      clone.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      document.body.appendChild(clone);

      // Masquer la carte originale
      card.style.opacity = '0.3';

      // Animer vers la position
      requestAnimationFrame(function () {
        clone.style.top = positionRect.top + positionRect.height / 2 - cardRect.height / 2 + 'px';
        clone.style.left = positionRect.left + positionRect.width / 2 - cardRect.width / 2 + 'px';
        clone.style.transform = 'scale(0.6)';
      });

      // Remplacer par le personnage après l'animation
      setTimeout(function () {
        clone.remove();
        position.appendChild(character);
        character.style.animation = 'character-appear 0.8s ease-out';
      }, 1500);
    }
  }, {
    key: "playBattlefieldCombat",
    value: function playBattlefieldCombat(matchData, speed) {
      // Simulation d'événements de combat avec animations épiques
      var events = matchData.events || this.generateEpicCombatEvents();
      console.log('🎮 Démarrage du combat épique sur le champ de bataille!');
      console.log('⚡ Vitesse:', speed + 'x');

      // Commentaire de début de combat
      this.showKaamelottComment('start');

      // Simuler le combat avec des effets visuels épiques
      this.simulateEpicBattlefieldEvents(events, speed);
    }
  }, {
    key: "simulateEpicBattlefieldEvents",
    value: function simulateEpicBattlefieldEvents(events, speed) {
      var _this10 = this;
      var effectsContainer = document.getElementById('combat-effects');
      var animationsContainer = document.getElementById('combat-animations');
      var eventIndex = 0;
      var _processNextEvent = function processNextEvent() {
        if (eventIndex >= events.length) {
          // Le combat est terminé, la fin sera gérée par finishEpicCombat()
          return;
        }
        var event = events[eventIndex];
        _this10.showEpicBattlefieldEffect(event, effectsContainer);
        _this10.playEpicAnimation(event, animationsContainer, speed);

        // Commentaire du Guild Guide selon l'action
        _this10.showKaamelottComment(event.type || 'attack');
        eventIndex++;
        setTimeout(_processNextEvent, 2000 / speed);
      };
      _processNextEvent();
    }

    // =============== FONCTIONS D'EFFETS SPÉCIAUX ===============
  }, {
    key: "createSlashEffect",
    value: function createSlashEffect(target, container) {
      var slash = document.createElement('div');
      slash.className = 'slash-effect';
      slash.innerHTML = '⚡💥⚡';
      slash.style.position = 'absolute';
      slash.style.fontSize = '3rem';
      slash.style.color = '#ff6b6b';
      slash.style.animation = 'slashAnimation 0.5s ease-out';
      var rect = target.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      slash.style.left = rect.left - containerRect.left + 'px';
      slash.style.top = rect.top - containerRect.top + 'px';
      container.appendChild(slash);
      setTimeout(function () {
        return slash.remove();
      }, 500);
    }
  }, {
    key: "createShieldEffect",
    value: function createShieldEffect(defender, container) {
      var shield = document.createElement('div');
      shield.className = 'shield-effect';
      shield.innerHTML = '🛡️✨🛡️';
      shield.style.position = 'absolute';
      shield.style.fontSize = '2.5rem';
      shield.style.color = 'gold';
      shield.style.animation = 'shieldAnimation 0.8s ease-out';
      var rect = defender.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      shield.style.left = rect.left - containerRect.left + 'px';
      shield.style.top = rect.top - containerRect.top + 'px';
      container.appendChild(shield);
      setTimeout(function () {
        return shield.remove();
      }, 800);
    }
  }, {
    key: "createMagicEffect",
    value: function createMagicEffect(mage, container) {
      var magic = document.createElement('div');
      magic.className = 'magic-effect';
      magic.innerHTML = '⚡🔮✨🌟⚡';
      magic.style.position = 'absolute';
      magic.style.fontSize = '2rem';
      magic.style.color = '#9b59b6';
      magic.style.animation = 'magicAnimation 1s ease-out';
      var rect = mage.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      magic.style.left = rect.left - containerRect.left + 'px';
      magic.style.top = rect.top - containerRect.top + 'px';
      container.appendChild(magic);
      setTimeout(function () {
        return magic.remove();
      }, 1000);
    }
  }, {
    key: "createHealEffect",
    value: function createHealEffect(healer, container) {
      var heal = document.createElement('div');
      heal.className = 'heal-effect';
      heal.innerHTML = '💚✨🌟✨💚';
      heal.style.position = 'absolute';
      heal.style.fontSize = '2rem';
      heal.style.color = '#2ecc71';
      heal.style.animation = 'healAnimation 1.2s ease-out';
      var rect = healer.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      heal.style.left = rect.left - containerRect.left + 'px';
      heal.style.top = rect.top - containerRect.top + 'px';
      container.appendChild(heal);
      setTimeout(function () {
        return heal.remove();
      }, 1200);
    }
  }, {
    key: "getRandomCharacter",
    value: function getRandomCharacter(characters) {
      var team = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var role = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var filtered = Array.from(characters).filter(function (_char2) {
        var matchesTeam = !team || _char2.classList.contains("".concat(team, "-character"));
        var matchesRole = !role || _char2.classList.contains("".concat(role, "-character"));
        return matchesTeam && matchesRole;
      });
      return filtered[Math.floor(Math.random() * filtered.length)];
    }
  }, {
    key: "getEffectIcon",
    value: function getEffectIcon(type) {
      var icons = {
        'attack': '⚔️💥',
        'defense': '🛡️✨',
        'magic': '🔮⚡',
        'heal': '💚✨',
        'critical': '💥🔥',
        'miss': '💨👻'
      };
      return icons[type] || '⚔️';
    }
  }, {
    key: "generateEpicCombatEvents",
    value: function generateEpicCombatEvents() {
      return [{
        description: "⚔️ Le combat commence !",
        type: 'start'
      }, {
        description: "🛡️ Le Paladin charge bravement !",
        type: 'attack'
      }, {
        description: "🏹 L'Archer riposte avec précision !",
        type: 'attack'
      }, {
        description: "⚡ Le Mage lance un sort dévastateur !",
        type: 'magic'
      }, {
        description: "🛡️ Belle parade du défenseur !",
        type: 'defense'
      }, {
        description: "🩹 Soins miraculeux du Guérisseur !",
        type: 'heal'
      }, {
        description: "🔥 Le Berserker entre en rage !",
        type: 'attack'
      }, {
        description: "🌟 Sort de protection magique !",
        type: 'magic'
      }, {
        description: "⚔️ Combo d'attaques spectaculaires !",
        type: 'attack'
      }, {
        description: "🏆 Combat épique terminé !",
        type: 'victory'
      }];
    }
  }, {
    key: "showEpicBattlefieldEffect",
    value: function showEpicBattlefieldEffect(event, container) {
      if (!container) return;
      var effectIcon = this.getEffectIcon(event.type);
      var effectClass = "effect-".concat(event.type);
      var effect = document.createElement('div');
      effect.className = "combat-effect-animation ".concat(effectClass);
      effect.innerHTML = "\n            <div class=\"effect-icon\">".concat(effectIcon, "</div>\n            <div class=\"effect-text\">").concat(event.description, "</div>\n            <div class=\"effect-particles\"></div>\n        ");
      container.appendChild(effect);

      // Retirer l'effet après animation
      setTimeout(function () {
        if (effect.parentNode) {
          effect.remove();
        }
      }, 2500);
    }
  }, {
    key: "playEpicAnimation",
    value: function playEpicAnimation(event, container, speed) {
      if (!container) return;
      var characters = document.querySelectorAll('.battlefield-character');
      var animationType = event.type || 'attack';
      switch (animationType) {
        case 'attack':
          this.animateAttack(characters, container, speed);
          break;
        case 'defense':
          this.animateDefense(characters, container, speed);
          break;
        case 'magic':
          this.animateMagic(characters, container, speed);
          break;
        case 'heal':
          this.animateHeal(characters, container, speed);
          break;
        default:
          this.animateGeneric(characters, container, speed);
      }
    }
  }, {
    key: "animateAttack",
    value: function animateAttack(characters, container, speed) {
      var _this11 = this;
      var attacker = this.getRandomCharacter(characters, 'player');
      var target = this.getRandomCharacter(characters, 'enemy');
      if (attacker && target) {
        // Animation d'attaque
        attacker.style.transform = 'scale(1.2) translateX(20px)';
        attacker.style.transition = "all ".concat(0.3 / speed, "s ease-out");
        setTimeout(function () {
          target.style.transform = 'scale(0.9) translateX(-10px)';
          target.style.filter = 'brightness(0.7)';

          // Effet de coup
          _this11.createSlashEffect(target, container);
          setTimeout(function () {
            attacker.style.transform = '';
            target.style.transform = '';
            target.style.filter = '';
          }, 500 / speed);
        }, 200 / speed);
      }
    }
  }, {
    key: "animateDefense",
    value: function animateDefense(characters, container, speed) {
      var defender = this.getRandomCharacter(characters, 'player');
      if (defender) {
        // Animation de défense avec bouclier
        defender.style.transform = 'scale(1.1)';
        defender.style.filter = 'brightness(1.3) drop-shadow(0 0 20px gold)';
        this.createShieldEffect(defender, container);
        setTimeout(function () {
          defender.style.transform = '';
          defender.style.filter = '';
        }, 800 / speed);
      }
    }
  }, {
    key: "animateMagic",
    value: function animateMagic(characters, container, speed) {
      var mage = this.getRandomCharacter(characters, null, 'mage');
      if (mage) {
        // Animation de magie
        mage.style.transform = 'scale(1.15) translateY(-10px)';
        mage.style.filter = 'brightness(1.5) drop-shadow(0 0 30px purple)';
        this.createMagicEffect(mage, container);
        setTimeout(function () {
          mage.style.transform = '';
          mage.style.filter = '';
        }, 1000 / speed);
      }
    }
  }, {
    key: "animateHeal",
    value: function animateHeal(characters, container, speed) {
      var healer = this.getRandomCharacter(characters, 'player');
      if (healer) {
        // Animation de soin
        healer.style.filter = 'brightness(1.8) drop-shadow(0 0 25px lightgreen)';
        this.createHealEffect(healer, container);

        // Mettre à jour la barre de vie
        var healthBar = healer.querySelector('.health-fill');
        if (healthBar) {
          healthBar.style.width = '100%';
        }
        setTimeout(function () {
          healer.style.filter = '';
        }, 1200 / speed);
      }
    }
  }, {
    key: "animateGeneric",
    value: function animateGeneric(characters, container, speed) {
      var character = this.getRandomCharacter(characters);
      if (character) {
        character.style.transform = 'scale(1.1)';
        setTimeout(function () {
          character.style.transform = '';
        }, 400 / speed);
      }
    }
  }, {
    key: "generateDemoCombatEvents",
    value: function generateDemoCombatEvents() {
      return [{
        description: "Le combat commence!"
      }, {
        description: "Guerrier attaque avec son épée!"
      }, {
        description: "Mage lance un sort de feu!"
      }, {
        description: "L'archer vise avec précision!"
      }, {
        description: "Combat épique en cours..."
      }, {
        description: "Victoire!"
      }];
    }
  }, {
    key: "showBattlefieldVictory",
    value: function showBattlefieldVictory() {
      var modal = document.querySelector('.battlefield-modal');
      if (!modal) return;
      var victoryOverlay = document.createElement('div');
      victoryOverlay.className = 'battlefield-victory-overlay';
      victoryOverlay.innerHTML = "\n            <div class=\"victory-content\">\n                <h2>\uD83C\uDFC6 VICTOIRE! \uD83C\uDFC6</h2>\n                <p>Combat termin\xE9 avec succ\xE8s!</p>\n                <div class=\"victory-actions\">\n                    <button class=\"victory-btn primary\" onclick=\"this.closest('.battlefield-modal').querySelector('.close-battlefield').click()\">\n                        \u2705 Fermer\n                    </button>\n                    <button class=\"victory-btn secondary\" onclick=\"runCompleteTest()\">\n                        \uD83D\uDD04 Nouveau test\n                    </button>\n                </div>\n            </div>\n        ";
      modal.appendChild(victoryOverlay);

      // Commentaire de victoire
      this.showKaamelottComment('victory');
    }
  }, {
    key: "showBattlefieldDefeat",
    value: function showBattlefieldDefeat() {
      var modal = document.querySelector('.battlefield-modal');
      if (!modal) return;
      var defeatOverlay = document.createElement('div');
      defeatOverlay.className = 'battlefield-defeat-overlay';
      defeatOverlay.innerHTML = "\n            <div class=\"defeat-content\">\n                <h2>\uD83D\uDC80 D\xC9FAITE \uD83D\uDC80</h2>\n                <p>Ce n'est que partie remise !</p>\n                <div class=\"defeat-actions\">\n                    <button class=\"defeat-btn primary\" onclick=\"this.closest('.battlefield-modal').querySelector('.close-battlefield').click()\">\n                        \u2705 Fermer\n                    </button>\n                    <button class=\"defeat-btn secondary\" onclick=\"runCompleteTest()\">\n                        \uD83D\uDD04 Nouveau test\n                    </button>\n                </div>\n            </div>\n        ";
      modal.appendChild(defeatOverlay);

      // Commentaire de défaite
      this.showKaamelottComment('defeat');
    }
  }, {
    key: "getRandomBattlefield",
    value: function getRandomBattlefield() {
      var battlefields = [
      // Plateaux Dystopiques
      'plateauxDysto/champ de bataille dysto.png', 'plateauxDysto/cours moderne.png', 'plateauxDysto/place village moderne.png',
      // Plateaux Médiévaux
      'plateauxMedieval/cimetière.png', 'plateauxMedieval/cours du chateau.png', 'plateauxMedieval/place du village.png'];
      return battlefields[Math.floor(Math.random() * battlefields.length)];
    }
  }, {
    key: "generateTeamCharacters",
    value: function generateTeamCharacters(team, teamType) {
      var _this12 = this;
      var charactersHTML = '';

      // Vérifications de sécurité pour l'objet team
      if (!team) {
        console.warn("\xC9quipe ".concat(teamType, " manquante, utilisation des donn\xE9es par d\xE9faut"));
        team = {
          characters: []
        };
      }

      // Si on a les vraies données des personnages, on les utilise
      if (team.characters && Array.isArray(team.characters) && team.characters.length > 0) {
        team.characters.forEach(function (character, index) {
          if (!character) {
            console.warn("Personnage ".concat(index, " manquant dans l'\xE9quipe ").concat(teamType));
            return;
          }
          var characterImage = _this12.getCharacterImage(character);
          var roleClass = character.role ? character.role.toLowerCase() : 'fighter';
          charactersHTML += "\n                    <div class=\"fighter-card\" id=\"".concat(teamType, "-char-").concat(index, "\">\n                        <div class=\"fighter-image\">\n                            <img src=\"").concat(characterImage, "\" alt=\"").concat(character.name || 'Personnage', "\" />\n                            <div class=\"class-overlay ").concat(roleClass, "\">").concat(_this12.getRoleName(character.role), "</div>\n                            <div class=\"stats-overlay\">\n                                <div class=\"stat-item hp\">\n                                    <i class=\"fas fa-heart\"></i>\n                                    <span>").concat(character.hp || 100, "</span>\n                                </div>\n                                <div class=\"stat-item attack\">\n                                    <i class=\"fas fa-sword\"></i>\n                                    <span>").concat(character.atk || 50, "</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fighter-name\">\n                            <h4>").concat(character.name || 'Héros', "</h4>\n                        </div>\n                        <div class=\"fighter-health\">\n                            <div class=\"health-bar\" style=\"width: 100%\"></div>\n                        </div>\n                    </div>\n                ");
        });
      } else {
        // Fallback avec des personnages par défaut
        var defaultCharacters = [{
          name: 'Héros 1',
          role: 'warrior',
          hp: 100,
          atk: 50
        }, {
          name: 'Héros 2',
          role: 'mage',
          hp: 80,
          atk: 70
        }, {
          name: 'Héros 3',
          role: 'archer',
          hp: 90,
          atk: 60
        }];
        defaultCharacters.forEach(function (character, index) {
          var characterImage = _this12.getCharacterImage(character);
          var roleClass = character.role.toLowerCase();
          charactersHTML += "\n                    <div class=\"fighter-card\" id=\"".concat(teamType, "-char-").concat(index, "\">\n                        <div class=\"fighter-image\">\n                            <img src=\"").concat(characterImage, "\" alt=\"").concat(character.name, "\" />\n                            <div class=\"class-overlay ").concat(roleClass, "\">").concat(_this12.getRoleName(character.role), "</div>\n                            <div class=\"stats-overlay\">\n                                <div class=\"stat-item hp\">\n                                    <i class=\"fas fa-heart\"></i>\n                                    <span>").concat(character.hp, "</span>\n                                </div>\n                                <div class=\"stat-item attack\">\n                                    <i class=\"fas fa-sword\"></i>\n                                    <span>").concat(character.atk, "</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fighter-name\">\n                            <h4>").concat(character.name, "</h4>\n                        </div>\n                        <div class=\"fighter-health\">\n                            <div class=\"health-bar\" style=\"width: 100%\"></div>\n                        </div>\n                    </div>\n                ");
        });
      }
      return charactersHTML;
    }
  }, {
    key: "getCharacterImage",
    value: function getCharacterImage(character) {
      // Vérifications de sécurité pour l'objet character
      if (!character) {
        console.warn('Personnage manquant, utilisation de l\'image par défaut');
        return '/images/characters/warrior.png';
      }

      // Si le personnage a une artworkUrl, l'utiliser en priorité
      if (character.artworkUrl) {
        return character.artworkUrl;
      }

      // Sinon, utiliser le système de mapping existant
      var characterName = typeof character === 'string' ? character : character.name;

      // Mapper les noms des personnages vers leurs images
      var characterImages = {
        'default': '/images/characters/warrior.png',
        'warrior': '/images/characters/warrior.png',
        'mage': '/images/characters/mage.png',
        'archer': '/images/characters/archer.png',
        'priest': '/images/characters/priest.png',
        'healer': '/images/characters/priest.png',
        'paladin': '/images/characters/paladin.png',
        'tank': '/images/characters/paladin.png',
        'assassin': '/images/characters/assassin.png',
        'fighter': '/images/characters/warrior.png',
        // Mapping pour les noms spécifiques
        'garde noir': '/images/characters/warrior.png',
        'dark guard': '/images/characters/warrior.png',
        'dark-guard': '/images/characters/warrior.png',
        'assassin ombre': '/images/characters/assassin.png',
        'shadow assassin': '/images/characters/assassin.png',
        'shadow-assassin': '/images/characters/assassin.png',
        'nécromant': '/images/characters/mage.png',
        'necromancer': '/images/characters/mage.png',
        'archer elfe': '/images/characters/archer.png',
        'elf archer': '/images/characters/archer.png',
        'elf-archer': '/images/characters/archer.png',
        'mage sage': '/images/characters/mage.png',
        'wise mage': '/images/characters/mage.png',
        'wise-mage': '/images/characters/mage.png'
      };

      // Essayer plusieurs approches pour matcher l'image
      var imagePath = characterImages['default'];
      if (characterName && typeof characterName === 'string') {
        var normalizedName = characterName.toLowerCase().replace(/\s+/g, '');
        var dashName = characterName.toLowerCase().replace(/\s+/g, '-');

        // Essayer par nom exact
        if (characterImages[characterName.toLowerCase()]) {
          imagePath = characterImages[characterName.toLowerCase()];
        }
        // Essayer par nom avec tirets
        else if (characterImages[dashName]) {
          imagePath = characterImages[dashName];
        }
        // Essayer par nom sans espaces
        else if (characterImages[normalizedName]) {
          imagePath = characterImages[normalizedName];
        }
        // Essayer de deviner par le rôle dans le nom
        else if (normalizedName.includes('guerrier') || normalizedName.includes('warrior') || normalizedName.includes('garde')) {
          imagePath = characterImages['warrior'];
        } else if (normalizedName.includes('mage') || normalizedName.includes('wizard') || normalizedName.includes('necro')) {
          imagePath = characterImages['mage'];
        } else if (normalizedName.includes('archer') || normalizedName.includes('bow') || normalizedName.includes('elfe')) {
          imagePath = characterImages['archer'];
        } else if (normalizedName.includes('pretre') || normalizedName.includes('priest') || normalizedName.includes('healer')) {
          imagePath = characterImages['priest'];
        } else if (normalizedName.includes('paladin') || normalizedName.includes('tank')) {
          imagePath = characterImages['paladin'];
        } else if (normalizedName.includes('assassin') || normalizedName.includes('rogue') || normalizedName.includes('ombre')) {
          imagePath = characterImages['assassin'];
        }
      }
      console.log("\uD83D\uDDBC\uFE0F Image pour \"".concat(characterName, "\": ").concat(imagePath));
      return imagePath;
    }
  }, {
    key: "getRoleName",
    value: function getRoleName(role) {
      // Vérifications de sécurité pour le rôle
      if (!role || typeof role !== 'string') {
        return 'Combattant';
      }
      var roleNames = {
        'tank': 'Tank',
        'healer': 'Soigneur',
        'mage': 'Mage',
        'assassin': 'Assassin',
        'archer': 'Archer',
        'fighter': 'Combattant',
        'warrior': 'Guerrier',
        'priest': 'Prêtre',
        'paladin': 'Paladin'
      };
      return roleNames[role.toLowerCase()] || 'Combattant';
    }
  }, {
    key: "getRoleIcon",
    value: function getRoleIcon(role) {
      switch (role) {
        case 'tank':
          return 'fas fa-shield-alt';
        case 'healer':
          return 'fas fa-heart';
        case 'mage':
          return 'fas fa-magic';
        case 'assassin':
          return 'fas fa-dagger';
        case 'archer':
          return 'fas fa-bow-arrow';
        default:
          return 'fas fa-sword';
      }
    }
  }, {
    key: "initCombatVisualization",
    value: function initCombatVisualization(matchData) {
      var _this13 = this;
      var modal = document.querySelector('.battlefield-modal');
      var closeBtn = document.getElementById('combat-close-btn');
      var startBtn = document.getElementById('start-combat-btn');
      var speedBtns = document.querySelectorAll('.speed-btn');
      var currentSpeedSpan = document.querySelector('.current-speed');
      var currentSpeed = 1;
      var isPlaying = false;

      // Initialiser le guild guide
      this.initGuildGuide();

      // Fermer le modal
      var closeModal = function closeModal() {
        if (modal) {
          // Reprendre la vidéo de background
          _this13.resumeBackgroundVideo();
          // Retirer la classe combat-active
          document.body.classList.remove('combat-active');
          modal.remove();
        }
      };
      closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', closeModal);

      // Fermer avec Escape
      var _escapeHandler3 = function escapeHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', _escapeHandler3);
        }
      };
      document.addEventListener('keydown', _escapeHandler3);

      // Fermer en cliquant sur l'overlay
      modal === null || modal === void 0 || modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Contrôles de vitesse améliorés
      speedBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          speedBtns.forEach(function (b) {
            return b.classList.remove('active');
          });
          btn.classList.add('active');
          currentSpeed = parseFloat(btn.dataset.speed);
          if (currentSpeedSpan) {
            currentSpeedSpan.textContent = "x".concat(currentSpeed);
          }

          // Commentaire du guild guide sur la vitesse
          var speedComments = {
            0.5: "Très bien ! Prenons le temps d'analyser chaque mouvement...",
            1: "Vitesse normale, parfait pour bien suivre l'action !",
            2: "On accélère un peu ! Gardez les yeux ouverts...",
            5: "Ça va vite maintenant ! Concentration maximum !",
            10: "Mode éclair activé ! Blink et vous ratez tout !"
          };
          _this13.showGuildGuideComment(speedComments[currentSpeed] || "Vitesse ajustée !", '⚡');
          console.log('🎮 Vitesse changée:', currentSpeed);
        });
      });

      // Démarrer le combat
      startBtn === null || startBtn === void 0 || startBtn.addEventListener('click', function () {
        if (!isPlaying) {
          isPlaying = true;
          startBtn.style.display = 'none';
          _this13.showGuildGuideComment("Le combat commence ! Que le meilleur gagne !", '⚔️');
          _this13.playCombatAnimation(matchData.events, currentSpeed, function () {
            isPlaying = false;
            startBtn.style.display = 'flex';
            startBtn.innerHTML = '<i class="fas fa-redo"></i> Rejouer le combat';
          });
        }
      });
    }

    // =============== GUILD GUIDE SYSTEM AMÉLIORÉ ===============
  }, {
    key: "initGuildGuide",
    value: function initGuildGuide() {
      var _this14 = this;
      // Limiter le nombre de tentatives pour éviter les boucles infinies
      this.guildGuideInitAttempts++;
      if (this.guildGuideInitAttempts > 50) {
        console.warn('🏰 Arrêt des tentatives d\'initialisation du Guild Guide après 50 essais');
        return;
      }

      // Vérification de l'existence de l'élément avant initialisation
      var guildGuideElement = document.querySelector('.guild-guide-container');
      if (!guildGuideElement) {
        console.log("\uD83C\uDFF0 Guild Guide container non trouv\xE9 (tentative ".concat(this.guildGuideInitAttempts, "/50), initialisation diff\xE9r\xE9e"));
        // Réessayer après un court délai si l'élément n'existe pas encore
        setTimeout(function () {
          return _this14.initGuildGuide();
        }, 100);
        return;
      }
      console.log('🏰 Guild Guide initialisé avec succès');

      // Initialiser les commentaires du guide (images déjà initialisées dans le constructeur)
      this.guildGuideComments = [
      // Commentaires de début
      "Mes champions, le combat va commencer !", "Analysons les forces en présence...", "Que la stratégie l'emporte sur la force brute !",
      // Commentaires d'action
      "Excellente attaque ! L'adversaire recule !", "Une défense exemplaire ! Bien joué !", "Attention ! Cette attaque semble critique !", "Magnifique coordination d'équipe !", "La magie opère ! L'avantage change de camp !", "Quel retournement de situation !", "Les soins arrivent à temps !", "Une stratégie payante !",
      // Commentaires d'avantage
      "Bel avantage pour l'équipe bleue !", "L'équipe rouge prend l'ascendant !", "L'équilibre des forces bascule !", "La victoire se dessine !",
      // Commentaires critiques
      "Coup critique ! Quel impact !", "Une blessure grave ! La situation devient critique !", "L'issue du combat se joue maintenant !", "Dernière chance pour renverser la vapeur !"];
      this.lastCommentTime = 0;
      this.commentCooldown = 2000; // 2 secondes entre les commentaires
    }
  }, {
    key: "getNextGuildImage",
    value: function getNextGuildImage() {
      // Vérifier que les images sont initialisées
      if (!this.guildImages || !Array.isArray(this.guildImages) || this.guildImages.length === 0) {
        console.warn('Images du guild guide non initialisées, utilisation de l\'image par défaut');
        return '/images/guild1.png';
      }

      // Vérifier l'index
      if (typeof this.currentGuildImageIndex !== 'number' || this.currentGuildImageIndex < 0) {
        this.currentGuildImageIndex = 0;
      }
      var image = this.guildImages[this.currentGuildImageIndex];
      this.currentGuildImageIndex = (this.currentGuildImageIndex + 1) % this.guildImages.length;
      return image || '/images/guild1.png';
    }
  }, {
    key: "showGuildGuideComment",
    value: function showGuildGuideComment(text) {
      var _this15 = this;
      var emoji = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '💬';
      var guildGuideAvatar = document.querySelector('.guild-guide-avatar img');
      var commentaryElement = document.querySelector('.guild-guide-commentary');
      var commentaryBubble = document.querySelector('.commentary-bubble p');

      // Vérifications robustes avant manipulation DOM
      if (!guildGuideAvatar) {
        console.warn('🏰 Guild guide avatar non trouvé');
        return;
      }
      if (!commentaryElement) {
        console.warn('🏰 Guild guide commentary element non trouvé');
        return;
      }
      if (!commentaryBubble) {
        console.warn('🏰 Guild guide commentary bubble non trouvé - tentative de création');
        // Essayer de créer l'élément manquant
        var bubbleContainer = document.querySelector('.commentary-bubble');
        if (bubbleContainer) {
          var pElement = document.createElement('p');
          bubbleContainer.appendChild(pElement);
          // Retry avec le nouvel élément
          setTimeout(function () {
            return _this15.showGuildGuideComment(text, emoji);
          }, 50);
          return;
        } else {
          console.warn('🏰 Conteneur commentary-bubble non trouvé - abandon');
          return;
        }
      }

      // Changer l'image du guild guide à chaque nouveau texte
      var nextImage = this.getNextGuildImage();
      if (nextImage && guildGuideAvatar) {
        try {
          guildGuideAvatar.src = nextImage;
        } catch (error) {
          console.error('Erreur lors du changement d\'image du guide:', error);
        }
      }

      // Mettre à jour le texte avec protection supplémentaire
      try {
        if (commentaryBubble && typeof commentaryBubble.textContent !== 'undefined') {
          commentaryBubble.textContent = "".concat(emoji, " ").concat(text);
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du texte:', error);
        return;
      }

      // Afficher le commentaire avec animation
      try {
        if (commentaryElement) {
          commentaryElement.classList.add('show');

          // Cacher après 4 secondes
          setTimeout(function () {
            if (commentaryElement && commentaryElement.classList) {
              commentaryElement.classList.remove('show');
            }
          }, 4000);
        }
      } catch (error) {
        console.error('Erreur lors de l\'animation:', error);
      }
      console.log('🗣️ Guild Guide:', text);
    }
  }, {
    key: "getRandomGuildComment",
    value: function getRandomGuildComment() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'action';
      var now = Date.now();
      if (now - this.lastCommentTime < this.commentCooldown) {
        return null; // Pas de commentaire si trop récent
      }
      var comments;
      switch (type) {
        case 'advantage':
          comments = ["Bel avantage pour cette équipe !", "L'ascendant se dessine !", "Une stratégie payante !", "L'équilibre bascule !"];
          break;
        case 'critical':
          comments = ["Attention ! Cette attaque peut être critique !", "Coup puissant en préparation !", "Une attaque décisive approche !", "Moment critique du combat !"];
          break;
        case 'heal':
          comments = ["Les soins arrivent à temps !", "Excellente récupération !", "La magie curative opère !", "Retour en force !"];
          break;
        default:
          comments = ["Excellente manœuvre !", "Magnifique coordination !", "Quelle technique !", "Bien joué !", "L'action s'intensifie !", "Le combat bat son plein !"];
      }
      this.lastCommentTime = now;
      return comments[Math.floor(Math.random() * comments.length)];
    }
  }, {
    key: "playCombatAnimation",
    value: function () {
      var _playCombatAnimation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(events, speed, onComplete) {
        var centerAnimation, playerInfo, enemyInfo, baseDelay, animationDelay, i, event, randomAction, randomComment, winner;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              centerAnimation = document.getElementById('center-animation');
              playerInfo = document.getElementById('player-info');
              enemyInfo = document.querySelector('.enemy-info-header'); // Base de temps adaptée à la vitesse
              baseDelay = 1000 / Math.max(speed, 0.5); // Minimum 0.5 pour éviter les vitesses trop lentes
              animationDelay = Math.max(baseDelay * 0.8, 200); // Minimum 200ms
              console.log("\uD83C\uDFAE Animation avec vitesse x".concat(speed, ", d\xE9lai: ").concat(animationDelay, "ms"));

              // Commentaire initial du guild guide
              this.showGuildGuideComment("Le combat commence ! Observez bien chaque mouvement !", '⚔️');
              i = 0;
            case 1:
              if (!(i < events.length)) {
                _context4.n = 8;
                break;
              }
              event = events[i]; // Commentaires dynamiques du guild guide
              _context4.n = 2;
              return this.addGuildGuideCommentary(event, i, events.length);
            case 2:
              _context4.n = 3;
              return this.animateEvent(event, centerAnimation, playerInfo, enemyInfo);
            case 3:
              if (!(event.action === 'ATTACK' || event.action === 'ROUND_START')) {
                _context4.n = 6;
                break;
              }
              if (!(Math.random() < 0.3)) {
                _context4.n = 6;
                break;
              }
              _context4.n = 4;
              return this.sleep(animationDelay * 0.3);
            case 4:
              randomAction = Math.random() < 0.5 ? 'HEAL' : 'DEFENSE';
              _context4.n = 5;
              return this.animateRandomCharacterAction(randomAction);
            case 5:
              // Commentaire sur l'action aléatoire
              randomComment = this.getRandomGuildComment(randomAction === 'HEAL' ? 'heal' : 'action');
              if (randomComment) {
                this.showGuildGuideComment(randomComment, randomAction === 'HEAL' ? '💚' : '🛡️');
              }
            case 6:
              _context4.n = 7;
              return this.sleep(animationDelay);
            case 7:
              i++;
              _context4.n = 1;
              break;
            case 8:
              // Animation finale
              winner = events.find(function (e) {
                return e.action === 'VICTORY';
              });
              if (!winner) {
                _context4.n = 9;
                break;
              }
              this.showGuildGuideComment("Le combat touche à sa fin ! Qui l'emportera ?", '🏆');
              _context4.n = 9;
              return this.animateVictory(winner, centerAnimation);
            case 9:
              onComplete();
            case 10:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function playCombatAnimation(_x2, _x3, _x4) {
        return _playCombatAnimation.apply(this, arguments);
      }
      return playCombatAnimation;
    }()
  }, {
    key: "addGuildGuideCommentary",
    value: function () {
      var _addGuildGuideCommentary = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(event, eventIndex, totalEvents) {
        var comment, emoji, attackComments, progress, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              comment = null;
              emoji = '💬'; // Commentaires basés sur l'action
              _t4 = event.action;
              _context5.n = _t4 === 'COMBAT_START' ? 1 : _t4 === 'ROUND_START' ? 2 : _t4 === 'ATTACK' ? 3 : _t4 === 'TEAM_PRESENTATION' ? 4 : _t4 === 'VICTORY' ? 5 : 6;
              break;
            case 1:
              comment = "Voici nos combattants ! Que le spectacle commence !";
              emoji = '🎭';
              return _context5.a(3, 6);
            case 2:
              comment = "Round ".concat(eventIndex + 1, " ! L'intensit\xE9 monte !");
              emoji = '🔥';
              return _context5.a(3, 6);
            case 3:
              if (Math.random() < 0.7) {
                // 70% de chance de commenter
                attackComments = ["Attention ! Cette attaque peut être critique !", "Excellente technique ! L'adversaire recule !", "Une frappe puissante ! Ça va faire mal !", "Magnifique coordination d'équipe !", "L'action s'intensifie !"];
                comment = attackComments[Math.floor(Math.random() * attackComments.length)];
                emoji = '⚔️';
              }
              return _context5.a(3, 6);
            case 4:
              if (event.target_name.includes('Équipe')) {
                comment = "".concat(event.target_name, " entre en lice ! Quelle puissance !");
                emoji = '👥';
              }
              return _context5.a(3, 6);
            case 5:
              comment = "Et voilà ! Le combat est terminé ! Quelle bataille épique !";
              emoji = '🏆';
              return _context5.a(3, 6);
            case 6:
              // Commentaires basés sur la progression
              progress = eventIndex / totalEvents;
              if (!comment) {
                if (progress < 0.2) {
                  comment = this.getRandomGuildComment('action');
                  emoji = '👀';
                } else if (progress < 0.5) {
                  comment = this.getRandomGuildComment('advantage');
                  emoji = '💪';
                } else if (progress < 0.8) {
                  comment = this.getRandomGuildComment('critical');
                  emoji = '⚡';
                }
              }
              if (comment) {
                this.showGuildGuideComment(comment, emoji);
              }
            case 7:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function addGuildGuideCommentary(_x5, _x6, _x7) {
        return _addGuildGuideCommentary.apply(this, arguments);
      }
      return addGuildGuideCommentary;
    }()
  }, {
    key: "animateRandomCharacterAction",
    value: function () {
      var _animateRandomCharacterAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(actionType) {
        var teams, randomTeam, randomCharIndex, characterElement, effectsElement, effectHTML, effectClass;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              // Action aléatoire sur un personnage aléatoire
              teams = ['player', 'enemy'];
              randomTeam = teams[Math.floor(Math.random() * teams.length)];
              randomCharIndex = Math.floor(Math.random() * 3);
              characterElement = document.getElementById("".concat(randomTeam, "-char-").concat(randomCharIndex));
              effectsElement = document.getElementById("".concat(randomTeam, "-effects-").concat(randomCharIndex));
              if (!(characterElement && effectsElement)) {
                _context6.n = 2;
                break;
              }
              characterElement.classList.add('character-acting');
              effectHTML = '';
              effectClass = '';
              if (actionType === 'HEAL') {
                effectHTML = '<div class="heal-effect"><i class="fas fa-heart"></i></div>';
                effectClass = 'effect-heal';
              } else if (actionType === 'DEFENSE') {
                effectHTML = '<div class="defense-effect"><i class="fas fa-shield"></i></div>';
                effectClass = 'effect-defense';
              }
              effectsElement.innerHTML = effectHTML;
              effectsElement.classList.add(effectClass);
              _context6.n = 1;
              return this.sleep(400);
            case 1:
              characterElement.classList.remove('character-acting');
              effectsElement.classList.remove(effectClass);
              effectsElement.innerHTML = '';
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function animateRandomCharacterAction(_x8) {
        return _animateRandomCharacterAction.apply(this, arguments);
      }
      return animateRandomCharacterAction;
    }()
  }, {
    key: "animateEvent",
    value: function () {
      var _animateEvent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(event, centerElement, playerInfo, enemyInfo) {
        var action, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              action = event.action;
              _t5 = action;
              _context7.n = _t5 === 'COMBAT_START' ? 1 : _t5 === 'TEAM_PRESENTATION' ? 3 : _t5 === 'ROUND_START' ? 5 : _t5 === 'ATTACK' ? 7 : _t5 === 'HEAL' ? 7 : _t5 === 'DEFENSE' ? 7 : _t5 === 'ROUND_END' ? 9 : _t5 === 'VICTORY' ? 11 : 13;
              break;
            case 1:
              _context7.n = 2;
              return this.animateCombatStart(centerElement);
            case 2:
              return _context7.a(3, 13);
            case 3:
              _context7.n = 4;
              return this.animateTeamPresentation(event, playerInfo, enemyInfo);
            case 4:
              return _context7.a(3, 13);
            case 5:
              _context7.n = 6;
              return this.animateRoundStart(centerElement, event);
            case 6:
              return _context7.a(3, 13);
            case 7:
              _context7.n = 8;
              return this.animateCharacterAction(event, action);
            case 8:
              return _context7.a(3, 13);
            case 9:
              _context7.n = 10;
              return this.animateRoundEnd(centerElement);
            case 10:
              return _context7.a(3, 13);
            case 11:
              _context7.n = 12;
              return this.animateVictory(event, centerElement);
            case 12:
              return _context7.a(3, 13);
            case 13:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function animateEvent(_x9, _x0, _x1, _x10) {
        return _animateEvent.apply(this, arguments);
      }
      return animateEvent;
    }()
  }, {
    key: "animateCombatStart",
    value: function () {
      var _animateCombatStart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(centerElement) {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              centerElement.innerHTML = "\n            <div class=\"combat-start-animation\">\n                <div class=\"halo-effect\"></div>\n                <div class=\"combat-text\">D\xE9but du Combat!</div>\n            </div>\n        ";
              centerElement.classList.add('animate-glow');
              _context8.n = 1;
              return this.sleep(1000);
            case 1:
              centerElement.classList.remove('animate-glow');
              centerElement.innerHTML = '';
            case 2:
              return _context8.a(2);
          }
        }, _callee8, this);
      }));
      function animateCombatStart(_x11) {
        return _animateCombatStart.apply(this, arguments);
      }
      return animateCombatStart;
    }()
  }, {
    key: "animateTeamPresentation",
    value: function () {
      var _animateTeamPresentation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(event, playerInfo, enemyInfo) {
        var _document$querySelect3;
        var isTeamA, targetElement;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              isTeamA = event.target_name.includes('Équipe A') || event.target_name.includes(((_document$querySelect3 = document.querySelector('.player-info .team-name')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.textContent) || '');
              targetElement = isTeamA ? playerInfo : enemyInfo;
              targetElement.classList.add('team-highlight');
              _context9.n = 1;
              return this.sleep(800);
            case 1:
              targetElement.classList.remove('team-highlight');
            case 2:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function animateTeamPresentation(_x12, _x13, _x14) {
        return _animateTeamPresentation.apply(this, arguments);
      }
      return animateTeamPresentation;
    }()
  }, {
    key: "animateRoundStart",
    value: function () {
      var _animateRoundStart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(centerElement, event) {
        var _t6;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (centerElement) {
                _context0.n = 1;
                break;
              }
              console.warn('🎬 Élément central non trouvé pour l\'animation de début de round');
              return _context0.a(2);
            case 1:
              _context0.p = 1;
              centerElement.innerHTML = "\n                <div class=\"round-start-modern\">\n                    <div class=\"round-girl\">\n                        <img src=\"/images/plateauxMedieval/guildGuide.jpg\" alt=\"Annonceur\" class=\"round-announcer\">\n                        <div class=\"speech-bubble\">\n                            <div class=\"round-text\">".concat(event.target_name || 'Nouveau Round !', "</div>\n                        </div>\n                    </div>\n                </div>\n            ");
              centerElement.classList.add('animate-round-start');
              _context0.n = 2;
              return this.sleep(1200);
            case 2:
              centerElement.classList.remove('animate-round-start');
              centerElement.innerHTML = '';
              _context0.n = 4;
              break;
            case 3:
              _context0.p = 3;
              _t6 = _context0.v;
              console.error('Erreur lors de l\'animation de début de round:', _t6);
            case 4:
              return _context0.a(2);
          }
        }, _callee0, this, [[1, 3]]);
      }));
      function animateRoundStart(_x15, _x16) {
        return _animateRoundStart.apply(this, arguments);
      }
      return animateRoundStart;
    }()
  }, {
    key: "animateCharacterAction",
    value: function () {
      var _animateCharacterAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(event, actionType) {
        var teamType, charIndex, characterElement, _t7;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return this.showCentralAnimation(actionType);
            case 1:
              // Essayer de déterminer l'équipe et le personnage basé sur les données de l'événement
              if (event.target_name && event.target_name.includes('🔵')) {
                teamType = 'player';
              } else if (event.target_name && event.target_name.includes('🔴')) {
                teamType = 'enemy';
              } else {
                // Fallback aléatoire
                teamType = Math.random() > 0.5 ? 'player' : 'enemy';
              }
              charIndex = Math.floor(Math.random() * 3);
              characterElement = document.getElementById("".concat(teamType, "-char-").concat(charIndex));
              if (!characterElement) {
                _context1.n = 5;
                break;
              }
              _t7 = actionType;
              _context1.n = _t7 === 'ATTACK' ? 2 : _t7 === 'HEAL' ? 3 : _t7 === 'DEFENSE' ? 4 : 5;
              break;
            case 2:
              characterElement.classList.add('attacking');
              setTimeout(function () {
                return characterElement.classList.remove('attacking');
              }, 800);
              return _context1.a(3, 5);
            case 3:
              characterElement.classList.add('healing');
              setTimeout(function () {
                return characterElement.classList.remove('healing');
              }, 1000);
              return _context1.a(3, 5);
            case 4:
              characterElement.classList.add('defending');
              setTimeout(function () {
                return characterElement.classList.remove('defending');
              }, 600);
              return _context1.a(3, 5);
            case 5:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function animateCharacterAction(_x17, _x18) {
        return _animateCharacterAction.apply(this, arguments);
      }
      return animateCharacterAction;
    }()
  }, {
    key: "showCentralAnimation",
    value: function () {
      var _showCentralAnimation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(actionType) {
        var animationElement, animationHTML, animationClass, attackTypes, attackType, magicTypes, magicType, healTypes, healType, defenseTypes, defenseType, _t8, _t9;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              animationElement = document.getElementById('combat-animation');
              if (animationElement) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              animationHTML = '';
              animationClass = '';
              _t8 = actionType;
              _context10.n = _t8 === 'ATTACK' ? 2 : _t8 === 'MAGIC' ? 3 : _t8 === 'HEAL' ? 4 : _t8 === 'DEFENSE' ? 5 : 6;
              break;
            case 2:
              attackTypes = [{
                html: '<i class="fas fa-sword"></i>',
                "class": 'sword-attack',
                emoji: '⚔️'
              }, {
                html: '<i class="fas fa-bow-arrow"></i>',
                "class": 'arrow-attack',
                emoji: '🏹'
              }, {
                html: '<i class="fas fa-fist-raised"></i>',
                "class": 'punch-attack',
                emoji: '👊'
              }];
              attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
              animationHTML = attackType.html;
              animationClass = attackType["class"];
              return _context10.a(3, 7);
            case 3:
              magicTypes = [{
                html: '<i class="fas fa-bolt"></i>',
                "class": 'lightning-attack',
                emoji: '⚡'
              }, {
                html: '<i class="fas fa-fire"></i>',
                "class": 'fire-attack',
                emoji: '🔥'
              }, {
                html: '<i class="fas fa-snowflake"></i>',
                "class": 'ice-attack',
                emoji: '❄️'
              }];
              magicType = magicTypes[Math.floor(Math.random() * magicTypes.length)];
              animationHTML = magicType.html;
              animationClass = magicType["class"];
              return _context10.a(3, 7);
            case 4:
              healTypes = [{
                html: '<i class="fas fa-heart"></i>',
                "class": 'heart-heal',
                emoji: '💚'
              }, {
                html: '<i class="fas fa-seedling"></i>',
                "class": 'nature-heal',
                emoji: '🌱'
              }, {
                html: '<i class="fas fa-plus-circle"></i>',
                "class": 'potion-heal',
                emoji: '🧪'
              }];
              healType = healTypes[Math.floor(Math.random() * healTypes.length)];
              animationHTML = healType.html;
              animationClass = healType["class"];
              return _context10.a(3, 7);
            case 5:
              defenseTypes = [{
                html: '<i class="fas fa-shield-alt"></i>',
                "class": 'shield-block',
                emoji: '🛡️'
              }, {
                html: '<i class="fas fa-fist-raised"></i>',
                "class": 'counter-attack',
                emoji: '🤜'
              }];
              defenseType = defenseTypes[Math.floor(Math.random() * defenseTypes.length)];
              animationHTML = defenseType.html;
              animationClass = defenseType["class"];
              return _context10.a(3, 7);
            case 6:
              animationHTML = '<i class="fas fa-star"></i>';
              animationClass = 'default-action';
            case 7:
              _context10.p = 7;
              if (animationElement) {
                _context10.n = 8;
                break;
              }
              console.warn('🎬 Élément d\'animation non trouvé');
              return _context10.a(2);
            case 8:
              animationElement.innerHTML = animationHTML;
              animationElement.className = "combat-animation ".concat(animationClass, " show");
              _context10.n = 10;
              break;
            case 9:
              _context10.p = 9;
              _t9 = _context10.v;
              console.error('Erreur lors de l\'affichage de l\'animation:', _t9);
              return _context10.a(2);
            case 10:
              _context10.n = 11;
              return this.sleep(600);
            case 11:
              // Cacher l'animation avec protection
              try {
                if (animationElement) {
                  animationElement.classList.remove('show');
                  animationElement.classList.add('hide');
                }
              } catch (error) {
                console.error('Erreur lors de la suppression des classes:', error);
              }
              _context10.n = 12;
              return this.sleep(200);
            case 12:
              try {
                if (animationElement) {
                  animationElement.className = 'combat-animation';
                  animationElement.innerHTML = '';
                }
              } catch (error) {
                console.error('Erreur lors du nettoyage de l\'animation:', error);
              }
            case 13:
              return _context10.a(2);
          }
        }, _callee10, this, [[7, 9]]);
      }));
      function showCentralAnimation(_x19) {
        return _showCentralAnimation.apply(this, arguments);
      }
      return showCentralAnimation;
    }()
  }, {
    key: "animateRoundEnd",
    value: function () {
      var _animateRoundEnd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(centerElement) {
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              centerElement.innerHTML = "\n            <div class=\"round-end-animation\">\n                <div class=\"hourglass-icon\">\n                    <i class=\"fas fa-hourglass-end\"></i>\n                </div>\n                <div class=\"end-text\">Fin du tour</div>\n            </div>\n        ";
              centerElement.classList.add('animate-fade');
              _context11.n = 1;
              return this.sleep(800);
            case 1:
              centerElement.classList.remove('animate-fade');
              centerElement.innerHTML = '';
            case 2:
              return _context11.a(2);
          }
        }, _callee11, this);
      }));
      function animateRoundEnd(_x20) {
        return _animateRoundEnd.apply(this, arguments);
      }
      return animateRoundEnd;
    }()
  }, {
    key: "animateVictory",
    value: function () {
      var _animateVictory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(event, centerElement) {
        var _document$querySelect4;
        var isPlayerVictory;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              isPlayerVictory = event.target_name.includes(((_document$querySelect4 = document.querySelector('.team-info-bottom')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.textContent) || '');
              centerElement.innerHTML = "\n            <div class=\"victory-modern ".concat(isPlayerVictory ? 'player-victory' : 'enemy-victory', "\">\n                <div class=\"guild-guide-announce\">\n                    <img src=\"/images/plateauxMedieval/guildGuide.jpg\" alt=\"Guild Guide\" class=\"guild-guide\">\n                    <div class=\"victory-speech-bubble\">\n                        <div class=\"victory-announcement\">\n                            ").concat(isPlayerVictory ? 'Oyé Oyé ! Vous avez remporté cette victoire !' : 'Oyé Oyé ! Vous avez subi une défaite...', "\n                        </div>\n                    </div>\n                </div>\n                <div class=\"victory-effects\">\n                    ").concat(isPlayerVictory ? '<div class="confetti"></div><div class="sparkles"></div>' : '<div class="defeat-smoke"></div>', "\n                </div>\n            </div>\n        ");
              centerElement.classList.add('animate-victory-modern');
              _context12.n = 1;
              return this.sleep(2500);
            case 1:
              return _context12.a(2);
          }
        }, _callee12, this);
      }));
      function animateVictory(_x21, _x22) {
        return _animateVictory.apply(this, arguments);
      }
      return animateVictory;
    }()
  }, {
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }

    // =============== SYSTÈME DE RECAP DE COMBAT ===============
  }, {
    key: "showMatchRecap",
    value: function () {
      var _showMatchRecap = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(matchId) {
        var response, matchData, _t0;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              _context13.p = 0;
              _context13.n = 1;
              return fetch("/api/matchmaking/match/".concat(matchId, "/events"));
            case 1:
              response = _context13.v;
              if (response.ok) {
                _context13.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context13.n = 3;
              return response.json();
            case 3:
              matchData = _context13.v;
              this.displayMatchRecapModal(matchData);
              _context13.n = 5;
              break;
            case 4:
              _context13.p = 4;
              _t0 = _context13.v;
              console.error('Erreur lors du chargement du recap:', _t0);
              this.showNotification('Erreur lors du chargement du recap du combat', 'error');
            case 5:
              return _context13.a(2);
          }
        }, _callee13, this, [[0, 4]]);
      }));
      function showMatchRecap(_x23) {
        return _showMatchRecap.apply(this, arguments);
      }
      return showMatchRecap;
    }()
  }, {
    key: "displayMatchRecapModal",
    value: function displayMatchRecapModal(matchData) {
      var _this16 = this;
      // Créer le contenu du modal
      var modalHTML = "\n            <div class=\"modal-overlay\" id=\"match-recap-modal\">\n                <div class=\"modal-content match-recap-modal\">\n                    <div class=\"modal-header\">\n                        <h2><i class=\"fas fa-scroll\"></i> Recap du Combat</h2>\n                        <button class=\"modal-close\" id=\"modal-close-btn\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                    \n                    <div class=\"modal-body\">\n                        <div class=\"match-summary\">\n                            <div class=\"teams-overview\">\n                                <div class=\"team-card ".concat(matchData.winner_team === matchData.team_a.name ? 'winner' : 'loser', "\">\n                                    <div class=\"team-name\">").concat(matchData.team_a.name, "</div>\n                                    <div class=\"player-name\">").concat(matchData.team_a.player, "</div>\n                                    <div class=\"team-mmr\">").concat(matchData.team_a.mmr, " MMR</div>\n                                    ").concat(matchData.winner_team === matchData.team_a.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : '', "\n                                </div>\n                                \n                                <div class=\"vs-separator\">\n                                    <span>VS</span>\n                                </div>\n                                \n                                <div class=\"team-card ").concat(matchData.winner_team === matchData.team_b.name ? 'winner' : 'loser', "\">\n                                    <div class=\"team-name\">").concat(matchData.team_b.name, "</div>\n                                    <div class=\"player-name\">").concat(matchData.team_b.player, "</div>\n                                    <div class=\"team-mmr\">").concat(matchData.team_b.mmr, " MMR</div>\n                                    ").concat(matchData.winner_team === matchData.team_b.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : '', "\n                                </div>\n                            </div>\n                            \n                            <div class=\"match-info\">\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-calendar\"></i>\n                                    <span>D\xE9but: ").concat(matchData.started_at || 'N/A', "</span>\n                                </div>\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-flag-checkered\"></i>\n                                    <span>Fin: ").concat(matchData.finished_at || 'N/A', "</span>\n                                </div>\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-info-circle\"></i>\n                                    <span>Statut: ").concat(matchData.status, "</span>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"combat-events\">\n                            <h3><i class=\"fas fa-list\"></i> D\xE9roulement du Combat</h3>\n                            <div class=\"events-timeline\">\n                                ").concat(this.generateEventsHTML(matchData.events), "\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"modal-footer\">\n                        <button class=\"btn btn-secondary\" id=\"modal-fermer-btn\">\n                            <i class=\"fas fa-times\"></i> Fermer\n                        </button>\n                        <button class=\"btn btn-primary\" id=\"modal-partager-btn\" data-match-id=\"").concat(matchData.id, "\">\n                            <i class=\"fas fa-share\"></i> Partager\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ");

      // Ajouter le modal au DOM
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // Récupérer les éléments du modal
      var modal = document.getElementById('match-recap-modal');
      var closeBtn = document.getElementById('modal-close-btn');
      var fermerBtn = document.getElementById('modal-fermer-btn');
      var partagerBtn = document.getElementById('modal-partager-btn');

      // Event listeners pour fermer la modal
      var closeModal = function closeModal() {
        return _this16.closeMatchRecap();
      };

      // Fermer en cliquant sur la croix
      if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
      }

      // Fermer en cliquant sur le bouton "Fermer"
      if (fermerBtn) {
        fermerBtn.addEventListener('click', closeModal);
      }

      // Partager le match
      if (partagerBtn) {
        partagerBtn.addEventListener('click', function () {
          var matchId = partagerBtn.getAttribute('data-match-id');
          _this16.shareMatchRecap(matchId);
        });
      }

      // Fermer en cliquant sur l'overlay (fond noir)
      if (modal) {
        modal.addEventListener('click', function (e) {
          if (e.target === modal) {
            closeModal();
          }
        });
      }

      // Fermer avec la touche Escape
      var _escapeHandler4 = function escapeHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', _escapeHandler4);
        }
      };
      document.addEventListener('keydown', _escapeHandler4);
    }
  }, {
    key: "generateEventsHTML",
    value: function generateEventsHTML(events) {
      var eventsHTML = '';
      events.forEach(function (event, index) {
        var eventClass = 'event-item';
        var eventIcon = 'fas fa-circle';

        // Définir l'icône et la classe selon le type d'action
        switch (event.action) {
          case 'COMBAT_START':
            eventIcon = 'fas fa-play';
            eventClass += ' event-start';
            break;
          case 'TEAM_PRESENTATION':
            eventIcon = 'fas fa-users';
            eventClass += ' event-info';
            break;
          case 'ROUND_START':
            eventIcon = 'fas fa-sword';
            eventClass += ' event-round';
            break;
          case 'ATTACK':
            eventIcon = 'fas fa-fist-raised';
            eventClass += ' event-attack';
            break;
          case 'DEFENSE':
            eventIcon = 'fas fa-shield-alt';
            eventClass += ' event-defense';
            break;
          case 'HEALING':
            eventIcon = 'fas fa-heart';
            eventClass += ' event-heal';
            break;
          case 'VICTORY':
            eventIcon = 'fas fa-trophy';
            eventClass += ' event-victory';
            break;
          case 'MMR_UPDATE':
            eventIcon = 'fas fa-chart-line';
            eventClass += ' event-mmr';
            break;
          case 'COMBAT_END':
            eventIcon = 'fas fa-stop';
            eventClass += ' event-end';
            break;
          default:
            eventIcon = 'fas fa-info';
            eventClass += ' event-default';
        }

        // Formatage spécial pour les critiques
        if (event.is_crit) {
          eventClass += ' event-crit';
        }

        // Formatage du montant s'il existe
        var amountText = '';
        if (event.amount !== null) {
          amountText = " (".concat(event.amount, ")");
        }
        eventsHTML += "\n                <div class=\"".concat(eventClass, "\" data-event-index=\"").concat(index, "\">\n                    <div class=\"event-icon\">\n                        <i class=\"").concat(eventIcon, "\"></i>\n                    </div>\n                    <div class=\"event-content\">\n                        <div class=\"event-header\">\n                            <span class=\"event-actor\">").concat(event.actor_name, "</span>\n                            <span class=\"event-time\">").concat(event.created_at, "</span>\n                        </div>\n                        <div class=\"event-description\">\n                            ").concat(event.target_name).concat(amountText, "\n                            ").concat(event.is_crit ? ' <span class="crit-indicator">CRITIQUE!</span>' : '', "\n                        </div>\n                    </div>\n                </div>\n            ");
      });
      return eventsHTML;
    }
  }, {
    key: "closeMatchRecap",
    value: function closeMatchRecap() {
      var modal = document.getElementById('match-recap-modal');
      if (modal) {
        modal.remove();
      }
    }
  }, {
    key: "closeBattlefieldModal",
    value: function closeBattlefieldModal() {
      var modal = document.querySelector('.battlefield-modal');
      if (modal) {
        // Nettoyer l'intervalle de commentaires
        var commentInterval = modal.dataset.commentInterval;
        if (commentInterval) {
          clearInterval(parseInt(commentInterval));
          delete modal.dataset.commentInterval;
        }

        // Arrêter les vidéos de background
        if (this.pauseBackgroundVideo) {
          this.pauseBackgroundVideo();
        }

        // Fermer le modal
        modal.remove();
      }
    }
  }, {
    key: "shareMatchRecap",
    value: function shareMatchRecap(matchId) {
      var _this17 = this;
      // Copier le lien vers le presse-papier
      var shareUrl = "".concat(window.location.origin, "/match/").concat(matchId, "/recap");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(function () {
          _this17.showNotification('Lien de partage copié !', 'success');
        })["catch"](function () {
          _this17.showNotification('Erreur lors de la copie', 'error');
        });
      } else {
        // Fallback pour les navigateurs plus anciens
        var textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.showNotification('Lien de partage copié !', 'success');
        } catch (err) {
          this.showNotification('Erreur lors de la copie', 'error');
        }
        document.body.removeChild(textArea);
      }
    }
  }]);
}(); // Export global pour les tests
window.GameInterface = GameInterface;

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Attendre un peu que le DOM soit complètement chargé
    setTimeout(function () {
      var gameInterfaceElement = document.querySelector('.game-interface');
      console.log('Élément game-interface trouvé:', gameInterfaceElement);
      if (gameInterfaceElement) {
        window.gameInterface = new GameInterface();
        console.log(' Interface de jeu Santons Script Tactics initialisée');
        console.log('Instance créée:', window.gameInterface);
      } else {
        console.warn(' Élément .game-interface non trouvé dans le DOM');
        // Créer l'instance quand même pour les fonctions globales
        window.gameInterface = new GameInterface();
        console.log('Instance créée sans vérification DOM');
      }
    }, 100);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de l\'interface de jeu:', error);
  }
});

/***/ }),

/***/ "./assets/JS/guild-guide.js":
/*!**********************************!*\
  !*** ./assets/JS/guild-guide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== GUIDE DE GUILDE - SANTONS SCRIPT TACTICS ===============
var GuildGuide = /*#__PURE__*/function () {
  "use strict";

  function GuildGuide() {
    _classCallCheck(this, GuildGuide);
    this.currentGuildImage = 1;
    this.isLoggedIn = false;
    this.userName = '';
    this.dialogueState = 'welcome';
    this.init();
  }
  return _createClass(GuildGuide, [{
    key: "init",
    value: function init() {
      try {
        this.checkUserStatus();
        this.createGuideInterface();
        this.startImageRotation();
        this.setupAutoDialogue(); // Fonctionnalité ajoutée - dialogue automatique
      } catch (error) {
        console.warn('Erreur lors de l\'initialisation du guide:', error);
      }
    }
  }, {
    key: "checkUserStatus",
    value: function checkUserStatus() {
      // Utiliser les informations passées depuis Twig
      try {
        if (window.userInfo) {
          this.isLoggedIn = window.userInfo.isLoggedIn;
          this.userName = window.userInfo.username || 'Joueur';
          console.log('Statut utilisateur:', this.isLoggedIn ? "Connect\xE9 - ".concat(this.userName) : 'Non connecté');
        } else {
          console.warn('window.userInfo non disponible');
        }
      } catch (error) {
        console.warn('Erreur lors de la vérification du statut utilisateur:', error);
      }
    }
  }, {
    key: "createGuideInterface",
    value: function createGuideInterface() {
      var guideHTML = "\n            <div class=\"guild-guide-container\" id=\"guild-guide\">\n                <div class=\"guild-avatar\" id=\"guild-avatar\">\n                    <img src=\"images/guild1.png\" alt=\"Guide de Guilde\" id=\"guild-img\">\n                </div>\n                \n                <div class=\"guild-dialogue-box\" id=\"guild-dialogue\" style=\"display: none;\">\n                    <div class=\"dialogue-content\">\n                        <div class=\"dialogue-text\" id=\"dialogue-text\"></div>\n                        <div class=\"dialogue-buttons\" id=\"dialogue-buttons\"></div>\n                    </div>\n                    <button class=\"dialogue-close\" id=\"dialogue-close\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n                </div>\n            </div>\n        ";
      document.body.insertAdjacentHTML('beforeend', guideHTML);
      this.attachEventListeners();
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;
      try {
        var avatar = document.getElementById('guild-avatar');
        var dialogueBox = document.getElementById('guild-dialogue');
        var closeBtn = document.getElementById('dialogue-close');
        if (avatar) {
          // Le Guild Guide est TOUJOURS cliquable - Force le clic
          avatar.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🏰 Clic sur Guild Guide détecté!');
            _this.openDialogue();
          }, true); // Mode capture pour priorité

          // Style visuel pour indiquer que c'est cliquable
          avatar.style.cursor = 'pointer';
          avatar.title = 'Cliquez pour parler au Guide de Guilde';

          // Effet visuel au survol
          avatar.addEventListener('mouseenter', function () {
            avatar.style.transform = 'scale(1.1)';
            avatar.style.transition = 'transform 0.3s ease';
          });
          avatar.addEventListener('mouseleave', function () {
            avatar.style.transform = 'scale(1)';
          });
        } else {
          console.warn('⚠️ Element guild-avatar non trouvé');
        }
        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            _this.closeDialogue();
          });
        }
        document.addEventListener('click', function (e) {
          // Ne fermer que si le clic est vraiment à l'extérieur ET que ce n'est pas un bouton du dialogue
          if (dialogueBox && !dialogueBox.contains(e.target) && !(avatar !== null && avatar !== void 0 && avatar.contains(e.target)) && !e.target.classList.contains('dialogue-btn')) {
            _this.closeDialogue();
          }
        });
      } catch (error) {
        console.warn('Erreur lors de l\'attachement des événements Guild Guide:', error);
      }
    }
  }, {
    key: "startImageRotation",
    value: function startImageRotation() {
      var _this2 = this;
      setInterval(function () {
        try {
          if (_this2.dialogueState !== 'response') {
            _this2.currentGuildImage = _this2.currentGuildImage % 3 + 1;
            var imgElement = document.getElementById('guild-img');
            if (imgElement) {
              imgElement.src = "images/guild".concat(_this2.currentGuildImage, ".png");
            }
          }
        } catch (error) {
          console.warn('Erreur lors de la rotation d\'images:', error);
        }
      }, 3000);
    }
  }, {
    key: "setupAutoDialogue",
    value: function setupAutoDialogue() {
      var _this3 = this;
      // Système d'auto-lancement UNIQUEMENT pour les utilisateurs non connectés
      if (!this.isLoggedIn) {
        // Première apparition automatique après 2 secondes
        setTimeout(function () {
          if (!_this3.isLoggedIn) {
            // Double vérification
            _this3.openDialogue();
          }
        }, 2000);

        // Puis réapparition toutes les 30 secondes si pas connecté
        this.autoDialogueTimer = setInterval(function () {
          var dialogueBox = document.getElementById('guild-dialogue');
          if (!_this3.isLoggedIn && (!dialogueBox || dialogueBox.style.display === 'none')) {
            _this3.openDialogue();
          }
        }, 30000);
      }
      // Pas de timer pour les utilisateurs connectés - ils doivent cliquer manuellement
    }
  }, {
    key: "openDialogue",
    value: function openDialogue() {
      try {
        console.log('🏰 Ouverture du dialogue Guild Guide');
        var dialogueBox = document.getElementById('guild-dialogue');
        if (dialogueBox) {
          dialogueBox.style.display = 'block';
          setTimeout(function () {
            dialogueBox.classList.add('active');
          }, 10);
          this.showWelcomeMessage();
        } else {
          console.warn('⚠️ Element guild-dialogue non trouvé');
        }
      } catch (error) {
        console.warn('Erreur lors de l\'ouverture du dialogue:', error);
      }
    }
  }, {
    key: "closeDialogue",
    value: function closeDialogue() {
      var _this4 = this;
      try {
        var dialogueBox = document.getElementById('guild-dialogue');
        if (dialogueBox) {
          dialogueBox.classList.remove('active');
          setTimeout(function () {
            dialogueBox.style.display = 'none';
            _this4.dialogueState = 'welcome';
          }, 300);

          // Si utilisateur non connecté, reprendre le timer après fermeture
          if (!this.isLoggedIn) {
            // Nettoyer l'ancien timer
            if (this.autoDialogueTimer) {
              clearInterval(this.autoDialogueTimer);
            }
            // Redémarrer un nouveau timer pour 30 secondes
            this.autoDialogueTimer = setTimeout(function () {
              // Puis revenir au timer régulier
              _this4.setupAutoDialogue();
            }, 30000);
          }
        }
      } catch (error) {
        console.warn('Erreur lors de la fermeture du dialogue:', error);
      }
    }
  }, {
    key: "showWelcomeMessage",
    value: function showWelcomeMessage() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        if (!this.isLoggedIn) {
          textEl.innerHTML = "\n                    <p>Bonjour noble \xE9tranger, bienvenue au <strong>Santons Script Tactics</strong> !</p>\n                    <p>Cr\xE9ez votre \xE9quipe de 3 h\xE9ros et affrontez d'autres joueurs dans des combats tactiques.</p>\n                    <p>Pour commencer votre aventure :</p>\n                ";
          buttonsEl.innerHTML = "\n                    <button class=\"dialogue-btn primary\" onclick=\"window.location.href='/register'\">\n                        <i class=\"fas fa-user-plus\"></i> S'inscrire\n                    </button>\n                    <button class=\"dialogue-btn secondary\" onclick=\"window.location.href='/login'\">\n                        <i class=\"fas fa-sign-in-alt\"></i> Se connecter\n                    </button>\n                ";
        } else {
          textEl.innerHTML = "\n                    <p>Bonjour <strong style=\"color: ".concat(window.userInfo.usernameColor || '#8b3a3a', "\">").concat(this.userName, "</strong>, quelle est votre demande ?</p>\n                ");
          buttonsEl.innerHTML = "\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showGameplayHelp()\">\n                        <i class=\"fas fa-gamepad\"></i> Comment Jouer\n                    </button>\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showCharacterRoles()\">\n                        <i class=\"fas fa-users\"></i> R\xF4les des Personnages\n                    </button>\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTeamStrategy()\">\n                        <i class=\"fas fa-chess\"></i> Strat\xE9gies d'\xC9quipe\n                    </button>\n                    <button class=\"dialogue-btn debug\" onclick=\"event.stopPropagation(); window.guildGuide.showDebugMenu()\" style=\"background: #ff6b6b;\">\n                        <i class=\"fas fa-bug\"></i> Debug Outils\n                    </button>\n                ";
        }
      } catch (error) {
        console.warn('Erreur lors de l\'affichage du message de bienvenue:', error);
      }
    }
  }, {
    key: "showGameplayHelp",
    value: function showGameplayHelp() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        textEl.innerHTML = "<p>Choisissez ce que vous souhaitez apprendre :</p>";
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTeamCreation()\">\n                    <i class=\"fas fa-plus-circle\"></i> Cr\xE9er votre \xC9quipe\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showFindBattle()\">\n                    <i class=\"fas fa-search\"></i> Rechercher un Combat\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showAutoBattle()\">\n                    <i class=\"fas fa-play\"></i> Combat Automatique\n                </button>\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      } catch (error) {
        console.warn('Erreur lors de l\'affichage de l\'aide gameplay:', error);
      }
    }
  }, {
    key: "showCharacterRoles",
    value: function showCharacterRoles() {
      var textEl = document.getElementById('dialogue-text');
      var buttonsEl = document.getElementById('dialogue-buttons');
      textEl.innerHTML = "<p>D\xE9couvrez les diff\xE9rents r\xF4les de vos h\xE9ros :</p>";
      buttonsEl.innerHTML = "\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTankRole()\">\n                <i class=\"fas fa-shield-alt\"></i> Tank\n            </button>\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showDPSRole()\">\n                <i class=\"fas fa-sword\"></i> DPS\n            </button>\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showHealerRole()\">\n                <i class=\"fas fa-heart\"></i> Soigneur\n            </button>\n            <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                <i class=\"fas fa-arrow-left\"></i> Retour\n            </button>\n        ";
    }
  }, {
    key: "showTeamCreation",
    value: function showTeamCreation() {
      this.showDetailedResponse("Création d'Équipe", "<p><strong>Former votre \xE9quipe parfaite :</strong></p>\n            <ul>\n                <li>Choisissez <strong>3 personnages</strong> compl\xE9mentaires</li>\n                <li>\xC9quilibrez Tank, DPS et Soigneur</li>\n                <li>Consultez les statistiques totales</li>\n                <li>Testez diff\xE9rentes combinaisons</li>\n            </ul>");
    }
  }, {
    key: "showFindBattle",
    value: function showFindBattle() {
      this.showDetailedResponse("Recherche de Combat", "<p><strong>Trouver des adversaires :</strong></p>\n            <ul>\n                <li>Votre \xE9quipe doit \xEAtre compl\xE8te (3 h\xE9ros)</li>\n                <li>Le syst\xE8me trouve un adversaire \xE9quitable</li>\n                <li>Attendez la confirmation de match</li>\n            </ul>");
    }
  }, {
    key: "showDetailedResponse",
    value: function showDetailedResponse(title, content) {
      this.dialogueState = 'response';
      var imgElement = document.getElementById('guild-img');
      if (imgElement) {
        imgElement.src = 'images/guild4.png';
      }
      var textEl = document.getElementById('dialogue-text');
      var buttonsEl = document.getElementById('dialogue-buttons');
      if (textEl) {
        textEl.innerHTML = "<h3>".concat(title, "</h3>").concat(content);
      }
      if (buttonsEl) {
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.returnToPreviousMenu()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      }
    }
  }, {
    key: "returnToPreviousMenu",
    value: function returnToPreviousMenu() {
      try {
        this.dialogueState = 'menu';
        this.currentGuildImage = 1;
        var imgElement = document.getElementById('guild-img');
        if (imgElement) {
          imgElement.src = "images/guild".concat(this.currentGuildImage, ".png");
        }
        this.showWelcomeMessage();
      } catch (error) {
        console.warn('Erreur lors du retour au menu précédent:', error);
      }
    }
  }, {
    key: "showTeamStrategy",
    value: function showTeamStrategy() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        textEl.innerHTML = "<p>Choisissez le type de strat\xE9gie \xE0 apprendre :</p>";
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showBalancedStrategy()\">\n                    <i class=\"fas fa-balance-scale\"></i> \xC9quipe \xC9quilibr\xE9e\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showAggressiveStrategy()\">\n                    <i class=\"fas fa-fire\"></i> Strat\xE9gie Agressive\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showDefensiveStrategy()\">\n                    <i class=\"fas fa-shield\"></i> Strat\xE9gie D\xE9fensive\n                </button>\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      } catch (error) {
        console.warn('Erreur lors de l\'affichage des stratégies d\'équipe:', error);
      }
    }
  }, {
    key: "showBalancedStrategy",
    value: function showBalancedStrategy() {
      this.showDetailedResponse("Équipe Équilibrée", "<p><strong>La composition classique :</strong></p>\n            <ul>\n                <li><strong>1 Tank</strong> - Absorbe les d\xE9g\xE2ts</li>\n                <li><strong>1 DPS</strong> - Inflige les d\xE9g\xE2ts</li>\n                <li><strong>1 Soigneur</strong> - Maintient l'\xE9quipe en vie</li>\n            </ul>\n            <p>Cette composition offre une bonne polyvalence pour tous types d'adversaires.</p>");
    }
  }, {
    key: "showAggressiveStrategy",
    value: function showAggressiveStrategy() {
      this.showDetailedResponse("Stratégie Agressive", "<p><strong>Maximum de d\xE9g\xE2ts :</strong></p>\n            <ul>\n                <li><strong>2 DPS</strong> - Double puissance d'attaque</li>\n                <li><strong>1 Tank</strong> - Protection minimale</li>\n            </ul>\n            <p>Id\xE9al contre des \xE9quipes d\xE9fensives, mais risqu\xE9 face \xE0 d'autres \xE9quipes agressives.</p>");
    }
  }, {
    key: "showDefensiveStrategy",
    value: function showDefensiveStrategy() {
      this.showDetailedResponse("Stratégie Défensive", "<p><strong>Survie maximale :</strong></p>\n            <ul>\n                <li><strong>1 Tank</strong> - Protection principale</li>\n                <li><strong>2 Soigneurs</strong> - R\xE9cup\xE9ration constante</li>\n            </ul>\n            <p>Parfait pour survivre aux \xE9quipes agressives et gagner par endurance.</p>");
    }
  }, {
    key: "showTankRole",
    value: function showTankRole() {
      this.showDetailedResponse("Rôle Tank", "<p><strong>Le protecteur de l'\xE9quipe :</strong></p>\n            <ul>\n                <li><strong>Points de Vie \xE9lev\xE9s</strong> - Encaisse les d\xE9g\xE2ts</li>\n                <li><strong>D\xE9fense \xE9lev\xE9e</strong> - R\xE9duit les d\xE9g\xE2ts re\xE7us</li>\n                <li><strong>Comp\xE9tences d\xE9fensives</strong> - Prot\xE8ge les alli\xE9s</li>\n            </ul>\n            <p>Placez toujours votre Tank en premi\xE8re ligne !</p>");
    }
  }, {
    key: "showDPSRole",
    value: function showDPSRole() {
      this.showDetailedResponse("Rôle DPS", "<p><strong>Le destructeur d'ennemis :</strong></p>\n            <ul>\n                <li><strong>Attaque \xE9lev\xE9e</strong> - Inflige de gros d\xE9g\xE2ts</li>\n                <li><strong>Vitesse \xE9lev\xE9e</strong> - Frappe en premier</li>\n                <li><strong>Comp\xE9tences offensives</strong> - \xC9liminations rapides</li>\n            </ul>\n            <p>Le DPS doit cibler les ennemis les plus dangereux en premier !</p>");
    }
  }, {
    key: "showHealerRole",
    value: function showHealerRole() {
      this.showDetailedResponse("Rôle Soigneur", "<p><strong>Le soutien de l'\xE9quipe :</strong></p>\n            <ul>\n                <li><strong>Comp\xE9tences de soin</strong> - Restaure les PV</li>\n                <li><strong>Buffs d'\xE9quipe</strong> - Am\xE9liore les alli\xE9s</li>\n                <li><strong>Magie \xE9lev\xE9e</strong> - Soins plus puissants</li>\n            </ul>\n            <p>Le Soigneur doit rester en s\xE9curit\xE9 derri\xE8re la ligne de front !</p>");
    }
  }, {
    key: "showAutoBattle",
    value: function showAutoBattle() {
      this.showDetailedResponse("Combat Automatique", "<p><strong>Comment fonctionne le combat :</strong></p>\n            <ul>\n                <li>Les combats sont <strong>automatiques</strong></li>\n                <li>Bas\xE9s sur les <strong>statistiques</strong> de vos h\xE9ros</li>\n                <li>Chaque personnage utilise ses <strong>comp\xE9tences</strong></li>\n                <li>La <strong>strat\xE9gie d'\xE9quipe</strong> est importante</li>\n            </ul>\n            <p>Concentrez-vous sur la formation et l'\xE9quipement de votre \xE9quipe !</p>");
    }
  }, {
    key: "showDebugMenu",
    value: function showDebugMenu() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        textEl.innerHTML = "<p>Outils de d\xE9veloppement et debug :</p>";
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.runPositioningTest()\">\n                    <i class=\"fas fa-crosshairs\"></i> Test Positionnement\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.debugActiveCombat()\">\n                    <i class=\"fas fa-sword\"></i> Debug Combat Actuel\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showSystemInfo()\">\n                    <i class=\"fas fa-info-circle\"></i> Informations Syst\xE8me\n                </button>\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      } catch (error) {
        console.warn('Erreur lors de l\'affichage du menu debug:', error);
      }
    }
  }, {
    key: "runPositioningTest",
    value: function runPositioningTest() {
      this.showDetailedResponse("Test de Positionnement", "<p><strong>Test en cours...</strong></p>\n            <p>V\xE9rifiez la console (F12) pour les d\xE9tails du test.</p>");

      // Lancer le test de positionnement
      if (window.debugPositioning) {
        window.debugPositioning();
      } else {
        console.error('❌ Fonction debugPositioning non disponible');
      }
    }
  }, {
    key: "debugActiveCombat",
    value: function debugActiveCombat() {
      this.showDetailedResponse("Debug Combat Actuel", "<p><strong>Analyse du combat en cours...</strong></p>\n            <p>V\xE9rifiez la console (F12) pour les d\xE9tails.</p>");

      // Debug du combat actuel
      if (window.debugCombatPositioning) {
        window.debugCombatPositioning();
      } else {
        console.error('❌ Fonction debugCombatPositioning non disponible');
      }
    }
  }, {
    key: "showSystemInfo",
    value: function showSystemInfo() {
      var combat3dAvailable = typeof Combat3DSystem !== 'undefined';
      var gameInterfaceAvailable = typeof gameInterface !== 'undefined';
      var debugAvailable = typeof window.debugPositioning !== 'undefined';
      this.showDetailedResponse("Informations Système", "<p><strong>\xC9tat des composants :</strong></p>\n            <ul>\n                <li>Combat3DSystem: ".concat(combat3dAvailable ? '✅ Disponible' : '❌ Non disponible', "</li>\n                <li>Game Interface: ").concat(gameInterfaceAvailable ? '✅ Disponible' : '❌ Non disponible', "</li>\n                <li>Debug Tools: ").concat(debugAvailable ? '✅ Disponible' : '❌ Non disponible', "</li>\n                <li>Utilisateur: ").concat(this.isLoggedIn ? "\u2705 ".concat(this.userName) : '❌ Non connecté', "</li>\n            </ul>"));
    }
  }]);
}(); // Initialisation
window.guildGuide = null;
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.guildGuide = new GuildGuide();
    console.log('🏰 Guide de guilde initialisé');
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation du guide de guilde:', error);
  }
});

/***/ }),

/***/ "./assets/JS/matchmaking-system.js":
/*!*****************************************!*\
  !*** ./assets/JS/matchmaking-system.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// Variables globales pour le matchmaking
var statusCheckInterval;
var matchmaking = {
  inQueue: false,
  teamId: null
};

// Initialiser le système au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  initializeMatchmaking();
  checkCurrentStatus();
});
function initializeMatchmaking() {
  // Bouton de recherche de match
  var searchBtn = document.getElementById('search-battle-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      joinMatchmaking();
    });
  }

  // Bouton d'annulation
  var cancelBtn = document.getElementById('cancel-queue');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function (e) {
      e.preventDefault();
      cancelMatchmaking();
    });
  }

  // Bouton retour à la recherche
  var backBtn = document.getElementById('back-to-search');
  if (backBtn) {
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      resetToSearch();
    });
  }
}
function joinMatchmaking() {
  var searchBtn = document.getElementById('search-battle-btn');
  var teamId = (searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.dataset.teamId) || '1'; // Valeur par défaut

  // Désactiver le bouton pendant la requête
  if (searchBtn) {
    searchBtn.disabled = true;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
  }
  fetch('/api/matchmaking/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      team_id: parseInt(teamId)
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      matchmaking.inQueue = true;
      matchmaking.teamId = teamId;
      showMatchmakingStatus();
      startStatusCheck();
    } else {
      alert(data.error || 'Erreur lors de la recherche de match');
      resetSearchButton();
    }
  })["catch"](function (error) {
    console.error('Erreur:', error);
    alert('Erreur de connexion');
    resetSearchButton();
  });
}
function cancelMatchmaking() {
  fetch('/api/matchmaking/cancel', {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      matchmaking.inQueue = false;
      hideMatchmakingStatus();
      stopStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de l\'annulation:', error);
  });
}
function resetSearchButton() {
  var searchBtn = document.getElementById('search-battle-btn');
  if (searchBtn) {
    // Ne plus forcer l'activation - laisser team-management.js gérer l'état
    searchBtn.innerHTML = '<i class="fas fa-search"></i> Rechercher un Match';

    // Si une instance de TeamManagement existe, laisser updateBattleTab() gérer l'état
    if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
      window.teamManagement.updateBattleTab();
    } else {
      // Sinon vérifier manuellement le nombre de personnages
      var teamSize = document.querySelectorAll('.character-slot.occupied').length;
      if (teamSize < 3) {
        searchBtn.disabled = true;
        searchBtn.classList.add('disabled');
        searchBtn.setAttribute('disabled', 'disabled');
      } else {
        searchBtn.disabled = false;
        searchBtn.classList.remove('disabled');
        searchBtn.removeAttribute('disabled');
      }
    }
  }
}
function showMatchmakingStatus() {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'none';
  if (matchmakingStatus) matchmakingStatus.style.display = 'block';
  if (matchResult) matchResult.style.display = 'none';
}
function hideMatchmakingStatus() {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'block';
  if (matchmakingStatus) matchmakingStatus.style.display = 'none';
  if (matchResult) matchResult.style.display = 'none';
  resetSearchButton();
}
function showMatchResult(result) {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'none';
  if (matchmakingStatus) matchmakingStatus.style.display = 'none';
  if (matchResult) matchResult.style.display = 'block';
  var resultContent = document.getElementById('result-content');
  var resultTitle = document.getElementById('result-title');
  if (result && resultContent) {
    var isWinner = result.winner_team_id == matchmaking.teamId;
    if (resultTitle) {
      resultTitle.textContent = '⚔️ COMBAT TERMINÉ !';
      resultTitle.className = 'text-info';
    }
    resultContent.innerHTML = "\n            <div class=\"result-card completed\">\n                <div class=\"match-details\">\n                    <p><strong>Votre \xE9quipe:</strong> ".concat(result.team1_power || 'N/A', " pts</p>\n                    <p><strong>\xC9quipe adverse:</strong> ").concat(result.team2_power || 'N/A', " pts</p>\n                    <p><strong>Dur\xE9e:</strong> ").concat(result.duration || 'N/A', " rounds</p>\n                    <p class=\"match-completed-message\">Le combat s'est d\xE9roul\xE9 ! Voulez-vous voir le d\xE9roulement ?</p>\n                </div>\n                <div class=\"match-actions-result\">\n                    <button class=\"btn btn-combat-view\" onclick=\"gameInterface.showCombatVisualization(").concat(result.match_id, ")\" title=\"Voir le combat\">\n                        <i class=\"fas fa-play-circle\"></i>\n                        <span>Voir le Combat</span>\n                    </button>\n                    <button class=\"btn btn-new-match\" onclick=\"resetToSearch()\">\n                        <i class=\"fas fa-redo\"></i>\n                        <span>Nouveau Combat</span>\n                    </button>\n                </div>\n            </div>\n        ");
  }
}
function resetToSearch() {
  matchmaking.inQueue = false;
  hideMatchmakingStatus();
}
function startStatusCheck() {
  statusCheckInterval = setInterval(checkStatus, 2000);
}
function stopStatusCheck() {
  if (statusCheckInterval) {
    clearInterval(statusCheckInterval);
    statusCheckInterval = null;
  }
}
function checkStatus() {
  // Vérification temporaire pour éviter le spam pendant les tests 3D
  if (window.location.pathname.includes('test') || document.querySelector('.battlefield-modal')) {
    console.log('🧪 Arrêt temporaire du polling API pendant les tests 3D');
    stopStatusCheck();
    return;
  }
  fetch('/api/matchmaking/status').then(function (response) {
    return response.json();
  }).then(function (data) {
    updateStatusDisplay(data);
    if (data.status === 'MATCH_RESULT_PENDING') {
      matchmaking.inQueue = false;
      stopStatusCheck();
      showCombatPendingResult(data.match);
    } else if (data.status === 'MATCH_FOUND') {
      matchmaking.inQueue = false;
      stopStatusCheck();
      showMatchResult(data.match);
    } else if (data.status === 'NOT_IN_QUEUE') {
      matchmaking.inQueue = false;
      hideMatchmakingStatus();
      stopStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de la vérification du statut:', error);
  });
}
function updateStatusDisplay(data) {
  var statusText = document.getElementById('status-text');
  var waitingTime = document.getElementById('waiting-time');
  var playersInQueue = document.getElementById('players-in-queue');
  if (statusText) {
    statusText.textContent = data.status === 'SEARCHING' ? 'Recherche en cours...' : 'En attente...';
  }
  if (waitingTime && data.waiting_time !== undefined) {
    waitingTime.textContent = "Temps d'attente: ".concat(data.waiting_time, " secondes");
  }
  if (playersInQueue && data.players_in_queue !== undefined) {
    playersInQueue.textContent = "Joueurs en file: ".concat(data.players_in_queue);
  }
}
function checkCurrentStatus() {
  fetch('/api/matchmaking/status').then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === 'SEARCHING') {
      matchmaking.inQueue = true;
      showMatchmakingStatus();
      startStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de la vérification du statut initial:', error);
  });
}

// Nouvelle fonction pour afficher un match en attente de visualisation
function showCombatPendingResult(matchData) {
  hideMatchmakingStatus();
  var notification = document.createElement('div');
  notification.className = 'combat-pending-notification';
  notification.innerHTML = "\n        <div class=\"pending-combat-card\">\n            <div class=\"pending-header\">\n                <h3>\u2694\uFE0F Combat Termin\xE9 !</h3>\n                <p>Votre combat vient de se terminer. Voulez-vous voir ce qui s'est pass\xE9 ?</p>\n            </div>\n            <div class=\"pending-actions\">\n                <button class=\"btn-view-combat\" onclick=\"viewCombatVisualization(".concat(matchData.id, ")\">\n                    <i class=\"fas fa-eye\"></i> Voir le Combat\n                </button>\n                <button class=\"btn-skip-combat\" onclick=\"skipCombatVisualization(").concat(matchData.id, ")\">\n                    <i class=\"fas fa-forward\"></i> Passer\n                </button>\n            </div>\n        </div>\n    ");
  document.body.appendChild(notification);
}

// Exposition des fonctions globales
window.viewCombatVisualization = viewCombatVisualization;
window.skipCombatVisualization = skipCombatVisualization;

// Fonction pour voir la visualisation du combat
function viewCombatVisualization(_x) {
  return _viewCombatVisualization.apply(this, arguments);
} // Fonction pour passer la visualisation
function _viewCombatVisualization() {
  _viewCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(matchId) {
    var notification, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId, "/mark-viewed"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 1:
          // Fermer la notification
          notification = document.querySelector('.combat-pending-notification');
          if (notification) {
            notification.remove();
          }

          // Afficher la visualisation du combat
          if (!(window.gameInterface && window.gameInterface.showCombatVisualization)) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return window.gameInterface.showCombatVisualization(matchId);
        case 2:
          _context.n = 4;
          break;
        case 3:
          console.error('Interface de jeu non disponible');
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error('Erreur lors de la visualisation du combat:', _t);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _viewCombatVisualization.apply(this, arguments);
}
function skipCombatVisualization(_x2) {
  return _skipCombatVisualization.apply(this, arguments);
} // Fonction pour afficher un résultat simple sans animation
function _skipCombatVisualization() {
  _skipCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(matchId) {
    var notification, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId, "/mark-viewed"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 1:
          // Fermer la notification
          notification = document.querySelector('.combat-pending-notification');
          if (notification) {
            notification.remove();
          }

          // Optionnel: afficher un message simple avec le résultat
          showSimpleMatchResult(matchId);
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error('Erreur lors du passage du combat:', _t2);
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _skipCombatVisualization.apply(this, arguments);
}
function showSimpleMatchResult(_x3) {
  return _showSimpleMatchResult.apply(this, arguments);
}
function _showSimpleMatchResult() {
  _showSimpleMatchResult = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(matchId) {
    var response, matchData, resultMessage, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId));
        case 1:
          response = _context3.v;
          _context3.n = 2;
          return response.json();
        case 2:
          matchData = _context3.v;
          // Afficher un simple message de résultat
          resultMessage = matchData.is_winner ? '🎉 Victoire ! Vous avez remporté ce combat !' : '😔 Défaite... Vous pourrez vous venger la prochaine fois !'; // Afficher une notification simple
          if (window.showNotification) {
            window.showNotification(resultMessage, matchData.is_winner ? 'success' : 'error');
          }
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error('Erreur lors de l\'affichage du résultat simple:', _t3);
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _showSimpleMatchResult.apply(this, arguments);
}

/***/ }),

/***/ "./assets/JS/team-management.js":
/*!**************************************!*\
  !*** ./assets/JS/team-management.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== SYSTÈME DE GESTION D'ÉQUIPE - SANTONS SCRIPT TACTICS ===============
var TeamManagement = /*#__PURE__*/function () {
  "use strict";

  function TeamManagement() {
    _classCallCheck(this, TeamManagement);
    this.currentTab = 'team';
    this.playerTeam = null;
    this.availableCharacters = [];
    this.selectedSlot = null;
    this.init();
  }
  return _createClass(TeamManagement, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.setupTabs();
              _context.n = 1;
              return this.loadPlayerTeam();
            case 1:
              _context.n = 2;
              return this.loadCharacters();
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }() // =============== GESTION DES ONGLETS ===============
  }, {
    key: "setupTabs",
    value: function setupTabs() {
      var _this = this;
      var tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var tabName = button.dataset.tab;
          _this.switchTab(tabName);
        });
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(tabName) {
      // Désactiver tous les onglets
      document.querySelectorAll('.tab-button').forEach(function (btn) {
        return btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-panel').forEach(function (panel) {
        return panel.classList.remove('active');
      });

      // Activer l'onglet sélectionné
      var activeButton = document.querySelector("[data-tab=\"".concat(tabName, "\"]"));
      var activePanel = document.getElementById("".concat(tabName, "-panel"));
      if (activeButton) activeButton.classList.add('active');
      if (activePanel) activePanel.classList.add('active');
      this.currentTab = tabName;

      // Actions spécifiques par onglet
      if (tabName === 'characters') {
        this.displayCharacters();
      } else if (tabName === 'battle') {
        this.updateBattleTab();
      }
    }

    // =============== GESTION DE L'ÉQUIPE ===============
  }, {
    key: "loadPlayerTeam",
    value: function () {
      var _loadPlayerTeam = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return fetch('/api/matchmaking/team');
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              data = _context2.v;
              console.log('loadPlayerTeam response:', data);
              this.playerTeam = data.team;
              this.updateTeamDisplay(data.characters);
              if (this.playerTeam) {
                _context2.n = 3;
                break;
              }
              console.log('No team found, creating automatically...');
              _context2.n = 3;
              return this.createTeamAutomatically();
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.error('Erreur lors du chargement de l\'équipe:', _t);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 4]]);
      }));
      function loadPlayerTeam() {
        return _loadPlayerTeam.apply(this, arguments);
      }
      return loadPlayerTeam;
    }()
  }, {
    key: "createTeamAutomatically",
    value: function () {
      var _createTeamAutomatically = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, data, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch('/api/matchmaking/team/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
              });
            case 1:
              response = _context3.v;
              _context3.n = 2;
              return response.json();
            case 2:
              data = _context3.v;
              if (data.success) {
                this.playerTeam = data.team;
                this.showNotification('Équipe créée automatiquement !', 'success');
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Erreur lors de la création d\'équipe:', _t2);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 3]]);
      }));
      function createTeamAutomatically() {
        return _createTeamAutomatically.apply(this, arguments);
      }
      return createTeamAutomatically;
    }()
  }, {
    key: "updateTeamDisplay",
    value: function updateTeamDisplay() {
      var _this2 = this;
      var teamCharacters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slots = document.querySelectorAll('.character-slot');
      slots.forEach(function (slot, index) {
        var character = teamCharacters[index] || null;
        var placeholder = slot.querySelector('.slot-placeholder');
        if (character) {
          placeholder.innerHTML = "\n                    <div class=\"character-info\">\n                        <h4>".concat(character.name, "</h4>\n                        <span class=\"character-role\">").concat(character.role, "</span>\n                        <div class=\"character-stats\">\n                            <small>HP: ").concat(character.hp, " | ATK: ").concat(character.atk, " | DEF: ").concat(character.def, "</small>\n                        </div>\n                        <button class=\"remove-character\" data-character-id=\"").concat(character.id, "\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                ");
          slot.classList.add('occupied');

          // Événement de suppression
          var removeBtn = slot.querySelector('.remove-character');
          removeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            _this2.removeCharacter(character.id);
          });
        } else {
          placeholder.innerHTML = "\n                    <i class=\"fas fa-plus\"></i>\n                    <span>H\xE9ros ".concat(index + 1, "</span>\n                ");
          slot.classList.remove('occupied');

          // Événement d'ajout
          slot.onclick = function () {
            _this2.selectedSlot = index;
            _this2.switchTab('characters');
            _this2.showNotification('Sélectionnez un personnage à ajouter', 'info');
          };
        }
      });

      // Forcer la mise à jour du bouton bataille avec un délai plus long
      this.updateBattleTab();
      setTimeout(function () {
        _this2.updateBattleTab();
      }, 200);
      setTimeout(function () {
        _this2.updateBattleTab();
      }, 500);
    }

    // =============== GESTION DES PERSONNAGES ===============
  }, {
    key: "loadCharacters",
    value: function () {
      var _loadCharacters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return fetch('/api/matchmaking/characters');
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return response.json();
            case 2:
              this.availableCharacters = _context4.v;
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('Erreur lors du chargement des personnages:', _t3);
            case 4:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 3]]);
      }));
      function loadCharacters() {
        return _loadCharacters.apply(this, arguments);
      }
      return loadCharacters;
    }()
  }, {
    key: "displayCharacters",
    value: function displayCharacters() {
      var _this3 = this;
      var container = document.querySelector('.characters-grid');
      if (!container || !this.availableCharacters.length) return;
      container.innerHTML = '';
      this.availableCharacters.forEach(function (character) {
        var card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = "\n                <div class=\"character-header\">\n                    <h3>".concat(character.name, "</h3>\n                    <span class=\"character-role role-").concat(character.role.toLowerCase(), "\">").concat(character.role, "</span>\n                </div>\n                <div class=\"character-stats\">\n                    <div class=\"stat-row\">\n                        <span>\u2764\uFE0F ").concat(character.hp, "</span>\n                        <span>\u2694\uFE0F ").concat(character.atk, "</span>\n                        <span>\uD83D\uDEE1\uFE0F ").concat(character.def, "</span>\n                    </div>\n                    <div class=\"stat-row\">\n                        <span>\uD83D\uDCA8 ").concat(character.spd, "</span>\n                        <span>\uD83D\uDD25 ").concat(character.crit, "%</span>\n                        <span>\uD83D\uDC9A ").concat(character.heal || 0, "</span>\n                    </div>\n                </div>\n                <button class=\"add-character-btn\" data-character-id=\"").concat(character.id, "\">\n                    <i class=\"fas fa-plus\"></i> Ajouter\n                </button>\n            ");

        // Événement d'ajout
        var addBtn = card.querySelector('.add-character-btn');
        addBtn.addEventListener('click', function () {
          _this3.addCharacter(character.id);
        });
        container.appendChild(card);
      });
    }
  }, {
    key: "addCharacter",
    value: function () {
      var _addCharacter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(characterId) {
        var _this4 = this;
        var response, data, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return fetch('/api/matchmaking/team/add-character', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  character_id: characterId
                })
              });
            case 1:
              response = _context5.v;
              _context5.n = 2;
              return response.json();
            case 2:
              data = _context5.v;
              if (!data.success) {
                _context5.n = 4;
                break;
              }
              this.showNotification(data.message, 'success');
              _context5.n = 3;
              return this.loadPlayerTeam();
            case 3:
              // Recharger l'équipe
              this.switchTab('team'); // Retourner à l'onglet équipe

              // Forcer la mise à jour du bouton bataille après un délai
              setTimeout(function () {
                _this4.updateBattleTab();
              }, 100);
              _context5.n = 5;
              break;
            case 4:
              this.showNotification(data.error, 'error');
            case 5:
              _context5.n = 7;
              break;
            case 6:
              _context5.p = 6;
              _t4 = _context5.v;
              console.error('Erreur lors de l\'ajout du personnage:', _t4);
              this.showNotification('Erreur de connexion', 'error');
            case 7:
              return _context5.a(2);
          }
        }, _callee5, this, [[0, 6]]);
      }));
      function addCharacter(_x) {
        return _addCharacter.apply(this, arguments);
      }
      return addCharacter;
    }()
  }, {
    key: "removeCharacter",
    value: function () {
      var _removeCharacter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(characterId) {
        var _this5 = this;
        var response, data, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return fetch('/api/matchmaking/team/remove-character', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  character_id: characterId
                })
              });
            case 1:
              response = _context6.v;
              _context6.n = 2;
              return response.json();
            case 2:
              data = _context6.v;
              if (!data.success) {
                _context6.n = 4;
                break;
              }
              this.showNotification(data.message, 'info');
              _context6.n = 3;
              return this.loadPlayerTeam();
            case 3:
              // Recharger l'équipe

              // Forcer la mise à jour du bouton bataille après un délai
              setTimeout(function () {
                _this5.updateBattleTab();
              }, 100);
              _context6.n = 5;
              break;
            case 4:
              this.showNotification(data.error, 'error');
            case 5:
              _context6.n = 7;
              break;
            case 6:
              _context6.p = 6;
              _t5 = _context6.v;
              console.error('Erreur lors de la suppression du personnage:', _t5);
            case 7:
              return _context6.a(2);
          }
        }, _callee6, this, [[0, 6]]);
      }));
      function removeCharacter(_x2) {
        return _removeCharacter.apply(this, arguments);
      }
      return removeCharacter;
    }() // =============== COMBAT ===============
  }, {
    key: "updateBattleTab",
    value: function updateBattleTab() {
      var searchBtn = document.getElementById('search-battle-btn');
      var infoText = document.querySelector('.battle-search .info-text');
      if (!searchBtn || !infoText) return;

      // Compter les personnages dans l'équipe
      var teamSize = document.querySelectorAll('.character-slot.occupied').length;
      if (teamSize === 3 && this.playerTeam) {
        console.log('ENABLING BUTTON: teamSize=3, playerTeam exists');
        searchBtn.disabled = false;
        searchBtn.classList.remove('disabled');
        searchBtn.removeAttribute('disabled');
        searchBtn.dataset.teamId = this.playerTeam.id;
        infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
        console.log('Button state after enabling:', {
          disabled: searchBtn.disabled,
          hasDisabledAttr: searchBtn.hasAttribute('disabled'),
          hasDisabledClass: searchBtn.classList.contains('disabled')
        });
      } else {
        console.log('DISABLING BUTTON: teamSize=' + teamSize + ', hasPlayerTeam=' + !!this.playerTeam);
        searchBtn.disabled = true;
        searchBtn.classList.add('disabled');
        searchBtn.setAttribute('disabled', 'disabled');
        if (!this.playerTeam) {
          infoText.textContent = 'Chargement de votre équipe...';
        } else {
          infoText.textContent = "Ajoutez ".concat(3 - teamSize, " personnage(s) pour commencer");
        }
      }
    }

    // =============== NOTIFICATIONS ===============
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var notification = document.createElement('div');
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n            <i class=\"fas fa-".concat(this.getNotificationIcon(type), "\"></i>\n            <span>").concat(message, "</span>\n        ");

      // Styles inline pour assurer l'affichage
      notification.style.cssText = "\n            position: fixed; top: 20px; right: 20px; z-index: 1000;\n            padding: 12px 20px; border-radius: 5px; color: white;\n            background: ".concat(type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8', ";\n            box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n            transform: translateX(100%); transition: transform 0.3s ease;\n        ");
      document.body.appendChild(notification);

      // Animation d'entrée
      setTimeout(function () {
        return notification.style.transform = 'translateX(0)';
      }, 10);

      // Suppression automatique
      setTimeout(function () {
        notification.style.transform = 'translateX(100%)';
        setTimeout(function () {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  }, {
    key: "getNotificationIcon",
    value: function getNotificationIcon(type) {
      var icons = {
        'success': 'check-circle',
        'error': 'times-circle',
        'info': 'info-circle'
      };
      return icons[type] || 'info-circle';
    }
  }]);
}(); // Initialisation automatique
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.game-interface')) {
    window.teamManagement = new TeamManagement();
  }
});

/***/ }),

/***/ "./assets/JS/theme-system.js":
/*!***********************************!*\
  !*** ./assets/JS/theme-system.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== SYSTÈME DE THÈMES - MÉDIÉVAL / DYSTOPIQUE ===============
var ThemeSystem = /*#__PURE__*/function () {
  "use strict";

  function ThemeSystem() {
    _classCallCheck(this, ThemeSystem);
    this.currentTheme = 'medieval'; // Par défaut médiéval
    this.themes = {
      medieval: {
        name: 'Médiéval',
        backgrounds: ['images/plateauxMedieval/cimetière.png', 'images/plateauxMedieval/cours du chateau.png', 'images/plateauxMedieval/place du village.png'],
        videos: ['images/backgroundMedieval/AdobeStock_265340144.mov', 'images/backgroundMedieval/bgMedieval1.mp4'],
        colors: {
          primary: '#8b4513',
          secondary: '#daa520',
          accent: '#2d4a2b'
        }
      },
      dysto: {
        name: 'Dystopique',
        backgrounds: ['images/plateauxDysto/champ de bataille dysto.png', 'images/plateauxDysto/cours moderne.png', 'images/plateauxDysto/place village moderne.png'],
        videos: ['images/backgroundDysto/bgDysto.mov', 'images/backgroundDysto/bgDysto1.mov'],
        colors: {
          primary: '#8e26f0ff',
          secondary: '#7209b7',
          accent: '#c71585'
        }
      }
    };
    this.init();
  }
  return _createClass(ThemeSystem, [{
    key: "init",
    value: function init() {
      this.createThemeSwitcher();
      this.createVideoBackground();
      this.applyTheme(this.currentTheme);
      this.setRandomBackground();
      this.setRandomVideo();
    }
  }, {
    key: "createThemeSwitcher",
    value: function createThemeSwitcher() {
      var _this = this;
      var switcher = document.createElement('div');
      switcher.className = 'theme-switcher';
      switcher.innerHTML = "\n            <div class=\"theme-switcher-container\">\n                <button class=\"theme-btn\" data-theme=\"medieval\">\n                    <i class=\"fas fa-castle\"></i>\n                    <span>M\xE9di\xE9val</span>\n                </button>\n                <button class=\"theme-btn\" data-theme=\"dysto\">\n                    <i class=\"fas fa-city\"></i>\n                    <span>Dystopique</span>\n                </button>\n            </div>\n        ";
      document.body.appendChild(switcher);

      // Event listeners pour les boutons
      var themeButtons = switcher.querySelectorAll('.theme-btn');
      themeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var theme = btn.dataset.theme;
          _this.switchTheme(theme);
        });
      });
      this.updateActiveButton();
    }
  }, {
    key: "createVideoBackground",
    value: function createVideoBackground() {
      // Créer l'élément vidéo pour le background de la page
      var videoElement = document.getElementById('theme-video-background');
      if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.id = 'theme-video-background';
        videoElement.className = 'theme-video-background';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;

        // La vidéo utilise uniquement les styles CSS définis dans _theme-system.scss
        // Pas de styles inline pour permettre au CSS de contrôler l'apparence

        document.body.insertBefore(videoElement, document.body.firstChild);
      }

      // Créer l'overlay sombre séparé
      var overlayElement = document.getElementById('video-overlay');
      if (!overlayElement) {
        overlayElement = document.createElement('div');
        overlayElement.id = 'video-overlay';
        overlayElement.className = 'video-overlay';

        // Insérer l'overlay après la vidéo (donc au-dessus)
        document.body.insertBefore(overlayElement, document.body.children[1]);
      }
    }
  }, {
    key: "switchTheme",
    value: function switchTheme(themeName) {
      if (this.themes[themeName]) {
        this.currentTheme = themeName;
        this.applyTheme(themeName);
        this.setRandomBackground();
        this.setRandomVideo();
        this.updateActiveButton();

        // Sauvegarder le choix
        localStorage.setItem('sst-theme', themeName);

        // Thème changé silencieusement
      }
    }
  }, {
    key: "applyTheme",
    value: function applyTheme(themeName) {
      var theme = this.themes[themeName];
      if (!theme) return;

      // Appliquer les couleurs CSS custom properties
      var root = document.documentElement;
      root.style.setProperty('--theme-primary', theme.colors.primary);
      root.style.setProperty('--theme-secondary', theme.colors.secondary);
      root.style.setProperty('--theme-accent', theme.colors.accent);

      // Ajouter classe de thème au body
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add("theme-".concat(themeName));
    }
  }, {
    key: "setRandomBackground",
    value: function setRandomBackground() {
      var theme = this.themes[this.currentTheme];
      var randomBg = theme.backgrounds[Math.floor(Math.random() * theme.backgrounds.length)];

      // Appliquer le background directement sur la game-card
      var gameCard = document.querySelector('.game-card');
      if (gameCard) {
        gameCard.style.backgroundImage = "url('".concat(randomBg, "')");
        gameCard.style.backgroundSize = 'cover';
        gameCard.style.backgroundPosition = 'center';
        gameCard.style.backgroundRepeat = 'no-repeat';
        gameCard.style.position = 'relative';

        // Ajouter un overlay pour la lisibilité
        if (!gameCard.querySelector('.theme-overlay')) {
          var overlay = document.createElement('div');
          overlay.className = 'theme-overlay';
          overlay.style.cssText = "\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: linear-gradient(135deg, \n                        rgba(248, 247, 244, 0.8) 0%,\n                        rgba(248, 247, 244, 0.7) 50%,\n                        rgba(248, 247, 244, 0.9) 100%\n                    );\n                    border-radius: inherit;\n                    pointer-events: none;\n                    z-index: 1;\n                ";
          gameCard.appendChild(overlay);

          // S'assurer que le contenu reste au-dessus
          var cardContent = gameCard.children;
          for (var i = 0; i < cardContent.length; i++) {
            if (cardContent[i] !== overlay) {
              cardContent[i].style.position = 'relative';
              cardContent[i].style.zIndex = '2';
            }
          }
        }
      }
    }
  }, {
    key: "setRandomVideo",
    value: function setRandomVideo() {
      var theme = this.themes[this.currentTheme];
      var randomVideo = theme.videos[Math.floor(Math.random() * theme.videos.length)];

      // Appliquer la vidéo de background sur toute la page
      var videoElement = document.getElementById('theme-video-background');
      if (videoElement) {
        videoElement.src = randomVideo;
        videoElement.load(); // Recharger la vidéo

        // S'assurer que la vidéo démarre
        videoElement.play()["catch"](function (error) {
          console.warn('Impossible de lire la vidéo automatiquement:', error);
        });
      }
    }
  }, {
    key: "updateActiveButton",
    value: function updateActiveButton() {
      var _this2 = this;
      var buttons = document.querySelectorAll('.theme-btn');
      buttons.forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.theme === _this2.currentTheme);
      });
    }

    // Charger le thème sauvegardé
  }, {
    key: "loadSavedTheme",
    value: function loadSavedTheme() {
      var saved = localStorage.getItem('sst-theme');
      if (saved && this.themes[saved]) {
        this.currentTheme = saved;
      }
    }
  }]);
}(); // Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.themeSystem = new ThemeSystem();
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation du système de thèmes:', error);
  }
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./assets/navbar.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JS_combat_3d_system_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/combat-3d-system.js */ "./assets/JS/combat-3d-system.js");
/* harmony import */ var _JS_combat_3d_system_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_JS_combat_3d_system_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JS_game_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS/game-interface.js */ "./assets/JS/game-interface.js");
/* harmony import */ var _JS_game_interface_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_JS_game_interface_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/guild-guide.js */ "./assets/JS/guild-guide.js");
/* harmony import */ var _JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _JS_theme_system_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JS/theme-system.js */ "./assets/JS/theme-system.js");
/* harmony import */ var _JS_theme_system_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_JS_theme_system_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JS/matchmaking-system.js */ "./assets/JS/matchmaking-system.js");
/* harmony import */ var _JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _JS_team_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JS/team-management.js */ "./assets/JS/team-management.js");
/* harmony import */ var _JS_team_management_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_JS_team_management_js__WEBPACK_IMPORTED_MODULE_7__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */


 // Nouveau système de combat 3D



// import './JS/ranking-system.js'; // desactivation du classement gérer par le JS ( il est en php et en JS dans game-interface.js a la ligne 320 ) je l'ai pas encore supprimé au cas ou on en a encore besoin mais il faudra le faire a la fin



console.log('📦 [APP] Application principale chargée avec système de classement');

/***/ }),

/***/ "./assets/navbar.js":
/*!**************************!*\
  !*** ./assets/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== NAVBAR MODERNE AVEC DROPDOWN ===============
var ModernNavbar = /*#__PURE__*/function () {
  "use strict";

  function ModernNavbar() {
    _classCallCheck(this, ModernNavbar);
    this.init();
  }
  return _createClass(ModernNavbar, [{
    key: "init",
    value: function init() {
      this.setupLogo();
      this.setupMobileMenu();
      this.setupOutsideClick();
      this.setupEscapeKey();
    }
  }, {
    key: "setupLogo",
    value: function setupLogo() {
      var _this = this;
      var logoBtn = document.querySelector('.navbar-logo');
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (logoBtn && dropdown && logoContainer) {
        logoBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this.toggleDropdown();
        });
      }
    }
  }, {
    key: "setupMobileMenu",
    value: function setupMobileMenu() {
      var _this2 = this;
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this2.toggleMobileMenu();
        });
      }
    }
  }, {
    key: "setupOutsideClick",
    value: function setupOutsideClick() {
      var _this3 = this;
      document.addEventListener('click', function (e) {
        var dropdown = document.querySelector('.navbar-dropdown');
        var logoContainer = document.querySelector('.navbar-logo-container');
        var mobileMenu = document.querySelector('.navbar-mobile-menu');

        // Fermer dropdown si clic extérieur
        if (dropdown && logoContainer && !e.target.closest('.navbar-logo-container')) {
          dropdown.classList.remove('active');
          logoContainer.classList.remove('dropdown-active');
        }

        // Fermer menu mobile si clic extérieur
        if (mobileMenu && !e.target.closest('.navbar-burger')) {
          _this3.closeMobileMenu();
        }
      });

      // Empêcher fermeture si clic dans dropdown
      var dropdown = document.querySelector('.navbar-dropdown');
      if (dropdown) {
        dropdown.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    }
  }, {
    key: "setupEscapeKey",
    value: function setupEscapeKey() {
      var _this4 = this;
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          _this4.closeDropdown();
          _this4.closeMobileMenu();
        }
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (dropdown && logoContainer) {
        var isActive = dropdown.classList.contains('active');
        dropdown.classList.toggle('active');
        logoContainer.classList.toggle('dropdown-active', !isActive);
        console.log('Dropdown', !isActive ? 'ouvert' : 'fermé');
      }
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (dropdown && logoContainer) {
        dropdown.classList.remove('active');
        logoContainer.classList.remove('dropdown-active');
      }
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        var isActive = mobileMenu.classList.contains('active');
        if (isActive) {
          this.closeMobileMenu();
        } else {
          burgerBtn.classList.add('active');
          mobileMenu.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
        console.log('Menu mobile', isActive ? 'fermé' : 'ouvert');
      }
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }]);
}(); // Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.modernNavbar = new ModernNavbar();
    console.log('Navbar moderne initialisée');
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation de la navbar:', error);
  }
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b81dd1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsVUFBVSxHQUFHdDBCLFFBQVEsQ0FBQ3NDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztNQUVoRSxJQUFJK3hCLFNBQVMsSUFBSUMsVUFBVSxFQUFFO1FBQ3pCRCxTQUFTLENBQUNsdkIsU0FBUyxDQUFDSyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BDOHVCLFVBQVUsQ0FBQ252QixTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDckN4RixRQUFRLENBQUMwSCxJQUFJLENBQUN0SCxLQUFLLENBQUN3MEIsUUFBUSxHQUFHLEVBQUU7TUFDckM7SUFDSjtFQUFDO0FBQUEsS0FHTDtBQUNBNTBCLFFBQVEsQ0FBQzBKLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBSTtJQUNBUCxNQUFNLENBQUMwckIsWUFBWSxHQUFHLElBQUlqQixZQUFZLENBQUMsQ0FBQztJQUN4Q3p5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztFQUM3QyxDQUFDLENBQUMsT0FBTzJNLEtBQUssRUFBRTtJQUNaNU0sT0FBTyxDQUFDMEssSUFBSSxDQUFDLGdEQUFnRCxFQUFFa0MsS0FBSyxDQUFDO0VBQ3pFO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQzVJRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KUy9jb21iYXQtM2Qtc3lzdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KUy9nYW1lLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvZ3VpbGQtZ3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0pTL21hdGNobWFraW5nLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvdGVhbS1tYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KUy90aGVtZS1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIENPTUJBVCAzRCBBVkFOQ8OJID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgQ29tYmF0M0RTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLmJhdHRsZVN0YXRlID0gJ3ByZXBhcmluZyc7IC8vIHByZXBhcmluZywgYWN0aXZlLCBmaW5pc2hlZFxyXG4gICAgICAgIHRoaXMuc3BlZWRNdWx0aXBsaWVyID0gMTtcclxuICAgICAgICB0aGlzLnBhdXNlQmFja2dyb3VuZFZpZGVvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBDUsOJQVRJT04gREUgUEVSU09OTkFHRVMgM0QgPT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGNyZWF0ZTNEQ2hhcmFjdGVyKGNoYXJhY3RlckRhdGEsIHRlYW1UeXBlLCBwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcklkID0gYCR7dGVhbVR5cGV9LSR7Y2hhcmFjdGVyRGF0YS5uYW1lfS0ke0RhdGUubm93KCl9YDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb252ZXJ0aXIgbGEgY2xhc3NlIGVuIHLDtGxlIFRhbmsvRFBTL1N1cHBvcnRcclxuICAgICAgICBjb25zdCBiYXR0bGVSb2xlID0gdGhpcy5jb252ZXJ0Q2xhc3NUb0JhdHRsZVJvbGUoY2hhcmFjdGVyRGF0YS5yb2xlIHx8IGNoYXJhY3RlckRhdGEuY2xhc3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqWZpbmlyIGxlIHN0eWxlIDNEIHNlbG9uIGxlIHLDtGxlIGRlIGNvbWJhdFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclN0eWxlID0gdGhpcy5nZXQzRENoYXJhY3RlclN0eWxlKGJhdHRsZVJvbGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTmFtZSA9IGBjb21iYXQtY2hhcmFjdGVyLTNkICR7dGVhbVR5cGV9LWNoYXJhY3Rlci0zZCAke2NoYXJhY3RlclN0eWxlLmNsYXNzfSAke2JhdHRsZVJvbGV9LXJvbGVgO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuaWQgPSBjaGFyYWN0ZXJJZDtcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItM2QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWJvZHkgJHtjaGFyYWN0ZXJTdHlsZS5ib2R5Q2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1oZWFkICR7Y2hhcmFjdGVyU3R5bGUuaGVhZENsYXNzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWZhY2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtjaGFyYWN0ZXJTdHlsZS5oZWFkQWNjZXNzb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItdG9yc28gJHtjaGFyYWN0ZXJTdHlsZS50b3Jzb0NsYXNzfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItYXJtcyAke2NoYXJhY3RlclN0eWxlLmFybXNDbGFzc31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYXJtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhcG9uLXNsb3QgbGVmdC13ZWFwb25cIj4ke2NoYXJhY3RlclN0eWxlLmxlZnRXZWFwb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYXJtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhcG9uLXNsb3QgcmlnaHQtd2VhcG9uXCI+JHtjaGFyYWN0ZXJTdHlsZS5yaWdodFdlYXBvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1sZWdzICR7Y2hhcmFjdGVyU3R5bGUubGVnc0NsYXNzfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItZWZmZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXJhICR7dGVhbVR5cGV9LWF1cmFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWluZGljYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItdWlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1wbGF0ZVwiPiR7Y2hhcmFjdGVyRGF0YS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGgtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGgtZmlsbFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC10ZXh0XCI+JHtjaGFyYWN0ZXJEYXRhLmhwIHx8IDE1MH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9sZS1pbmRpY2F0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMuZ2V0Um9sZUljb24oY2hhcmFjdGVyRGF0YS5yb2xlIHx8IGNoYXJhY3RlckRhdGEuY2xhc3MpfVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvc2l0aW9ubmVyIGxlIHBlcnNvbm5hZ2VcclxuICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhcmFjdGVyKGNoYXJhY3RlckVsZW1lbnQsIHBvc2l0aW9uLCB0ZWFtVHlwZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWpvdXRlciBsYSBwb3NpdGlvbiBkYW5zIGxlcyBkYXRhIGF0dHJpYnV0ZXMgcG91ciBsZXMgYW5pbWF0aW9uc1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuZGF0YXNldC50ZWFtVHlwZSA9IHRlYW1UeXBlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5SnIERBVEFTRVQgU0VUOiBwb3NpdGlvbj0ke3Bvc2l0aW9ufSwgdGVhbVR5cGU9JHt0ZWFtVHlwZX0gcG91ciAke2NoYXJhY3RlckRhdGEubmFtZX1gKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdG9ja2VyIGxlcyBkb25uw6llcyBkdSBwZXJzb25uYWdlXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnNldChjaGFyYWN0ZXJJZCwge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBjaGFyYWN0ZXJFbGVtZW50LFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFyYWN0ZXJEYXRhLFxyXG4gICAgICAgICAgICB0ZWFtOiB0ZWFtVHlwZSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50SHA6IGNoYXJhY3RlckRhdGEuaHAgfHwgMTUwLFxyXG4gICAgICAgICAgICBtYXhIcDogY2hhcmFjdGVyRGF0YS5ocCB8fCAxNTAsXHJcbiAgICAgICAgICAgIGlzQWxpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGFjdGlvbkNvb2xkb3duOiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlckVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldDNEQ2hhcmFjdGVyU3R5bGUocm9sZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgdGFuazoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICd0YW5rLWNoYXJhY3RlcicsXHJcbiAgICAgICAgICAgICAgICBib2R5Q2xhc3M6ICd3YXJyaW9yLWJvZHkgbXVzY3VsYXInLFxyXG4gICAgICAgICAgICAgICAgaGVhZENsYXNzOiAnd2Fycmlvci1oZWFkIGJlYXJkZWQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZEFjY2Vzc29yeTogJzxkaXYgY2xhc3M9XCJoZWxtZXQgd2Fycmlvci1oZWxtZXRcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgdG9yc29DbGFzczogJ2hlYXZ5LWFybW9yIHBsYXRlZCcsXHJcbiAgICAgICAgICAgICAgICBhcm1zQ2xhc3M6ICdtdXNjdWxhci1hcm1zJyxcclxuICAgICAgICAgICAgICAgIGxlZ3NDbGFzczogJ2FybW9yZWQtbGVncycsXHJcbiAgICAgICAgICAgICAgICBsZWZ0V2VhcG9uOiAnPGRpdiBjbGFzcz1cInNoaWVsZCBsYXJnZS1zaGllbGRcIj7wn5uh77iPPC9kaXY+JyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0V2VhcG9uOiAnPGRpdiBjbGFzcz1cInN3b3JkIGJyb2Fkc3dvcmRcIj7impTvuI88L2Rpdj4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRwczoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdkcHMtY2hhcmFjdGVyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlDbGFzczogJ2VsZi1ib2R5IGFnaWxlJyxcclxuICAgICAgICAgICAgICAgIGhlYWRDbGFzczogJ2VsZi1oZWFkIHBvaW50ZWQtZWFycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkQWNjZXNzb3J5OiAnPGRpdiBjbGFzcz1cImhvb2QgZWxmLWhvb2RcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgdG9yc29DbGFzczogJ2xlYXRoZXItYXJtb3IgZmxleGlibGUnLFxyXG4gICAgICAgICAgICAgICAgYXJtc0NsYXNzOiAnYWdpbGUtYXJtcycsXHJcbiAgICAgICAgICAgICAgICBsZWdzQ2xhc3M6ICdsaWdodC1ib290cycsXHJcbiAgICAgICAgICAgICAgICBsZWZ0V2VhcG9uOiAnPGRpdiBjbGFzcz1cImJvdyBlbHZlbi1ib3dcIj7wn4+5PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0V2VhcG9uOiAnPGRpdiBjbGFzcz1cImRhZ2dlciBzd2lmdC1ibGFkZVwiPvCfl6HvuI88L2Rpdj4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc3VwcG9ydC1jaGFyYWN0ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9keUNsYXNzOiAnbWFnZS1ib2R5IHNjaG9sYXJseScsXHJcbiAgICAgICAgICAgICAgICBoZWFkQ2xhc3M6ICdtYWdlLWhlYWQgd2lzZScsXHJcbiAgICAgICAgICAgICAgICBoZWFkQWNjZXNzb3J5OiAnPGRpdiBjbGFzcz1cIndpemFyZC1oYXQgcG9pbnR5LWhhdFwiPvCfjqk8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgdG9yc29DbGFzczogJ21hZ2Utcm9iZXMgZmxvd2luZycsXHJcbiAgICAgICAgICAgICAgICBhcm1zQ2xhc3M6ICdzY2hvbGFybHktYXJtcycsXHJcbiAgICAgICAgICAgICAgICBsZWdzQ2xhc3M6ICdyb2JlLWJvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0V2VhcG9uOiAnPGRpdiBjbGFzcz1cInRvbWUgc3BlbGwtYm9va1wiPvCfk5o8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRXZWFwb246ICc8ZGl2IGNsYXNzPVwic3RhZmYgZ2FuZGFsZi1zdGFmZlwiPvCfqoQ8L2Rpdj4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzdHlsZXNbcm9sZV0gfHwgc3R5bGVzLnRhbms7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnZlcnRDbGFzc1RvQmF0dGxlUm9sZShjaGFyYWN0ZXJDbGFzcykge1xyXG4gICAgICAgIC8vIENvbnZlcnNpb24gZGVzIGNsYXNzZXMgZW4gcsO0bGVzIFRhbmsvRFBTL1N1cHBvcnRcclxuICAgICAgICBjb25zdCByb2xlTWFwcGluZyA9IHtcclxuICAgICAgICAgICAgLy8gVEFOS1xyXG4gICAgICAgICAgICAndGFuayc6ICd0YW5rJyxcclxuICAgICAgICAgICAgJ3dhcnJpb3InOiAndGFuaycsIFxyXG4gICAgICAgICAgICAncGFsYWRpbic6ICd0YW5rJyxcclxuICAgICAgICAgICAgJ2d1YXJkJzogJ3RhbmsnLFxyXG4gICAgICAgICAgICAna25pZ2h0JzogJ3RhbmsnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU1VQUE9SVCAgXHJcbiAgICAgICAgICAgICdzdXBwb3J0JzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICAnaGVhbGVyJzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICAnbWFnZSc6ICdzdXBwb3J0JyxcclxuICAgICAgICAgICAgJ3ByaWVzdCc6ICdzdXBwb3J0JyxcclxuICAgICAgICAgICAgJ2NsZXJpYyc6ICdzdXBwb3J0JyxcclxuICAgICAgICAgICAgJ3dpemFyZCc6ICdzdXBwb3J0JyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERQU1xyXG4gICAgICAgICAgICAnZHBzJzogJ2RwcycsXHJcbiAgICAgICAgICAgICdhc3Nhc3Npbic6ICdkcHMnLFxyXG4gICAgICAgICAgICAnYXJjaGVyJzogJ2RwcycsIFxyXG4gICAgICAgICAgICAnZWxmJzogJ2RwcycsXHJcbiAgICAgICAgICAgICdmaWdodGVyJzogJ2RwcycsXHJcbiAgICAgICAgICAgICdyb2d1ZSc6ICdkcHMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkQ2xhc3MgPSAoY2hhcmFjdGVyQ2xhc3MgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJvbGVNYXBwaW5nW25vcm1hbGl6ZWRDbGFzc10gfHwgJ2Rwcyc7IC8vIETDqWZhdXQgRFBTXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBvc2l0aW9uQ2hhcmFjdGVyKGNoYXJhY3RlckVsZW1lbnQsIHBvc2l0aW9uLCB0ZWFtVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGJhdHRsZWZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLWFyZW5hJyk7XHJcbiAgICAgICAgaWYgKCFiYXR0bGVmaWVsZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhdHRsZWZpZWxkUmVjdCA9IGJhdHRsZWZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvc2l0aW9ucyBmaXhlcyBhdmVjIGVzcGFjZW1lbnQgcG91ciDDqXZpdGVyIGxlcyBzdXBlcnBvc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHtcclxuICAgICAgICAgICAgcGxheWVyOiBbXHJcbiAgICAgICAgICAgICAgICB7IHg6IDE1LCB5OiA3NSwgbmFtZTogJ2Zyb250LWxlZnQnIH0sICAgLy8gQXZhbnQtZ2F1Y2hlIGpvdWV1clxyXG4gICAgICAgICAgICAgICAgeyB4OiA0NSwgeTogODUsIG5hbWU6ICdiYWNrLWNlbnRlcicgfSwgIC8vIEFycmnDqHJlLWNlbnRyZSBqb3VldXIgIFxyXG4gICAgICAgICAgICAgICAgeyB4OiA3NSwgeTogNzUsIG5hbWU6ICdmcm9udC1yaWdodCcgfSAgIC8vIEF2YW50LWRyb2l0ZSBqb3VldXJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZW5lbXk6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMjUsIHk6IDI1LCBuYW1lOiAnZnJvbnQtbGVmdCcgfSwgICAvLyBBdmFudC1nYXVjaGUgZW5uZW1pXHJcbiAgICAgICAgICAgICAgICB7IHg6IDU1LCB5OiAxNSwgbmFtZTogJ2JhY2stY2VudGVyJyB9LCAgLy8gQXJyacOocmUtY2VudHJlIGVubmVtaVxyXG4gICAgICAgICAgICAgICAgeyB4OiA4NSwgeTogMjUsIG5hbWU6ICdmcm9udC1yaWdodCcgfSAgIC8vIEF2YW50LWRyb2l0ZSBlbm5lbWlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU8OpY3VyaXTDqSBwb3VyIGxhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgbWF4UG9zID0gcG9zaXRpb25zW3RlYW1UeXBlXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGNvbnN0IHNhZmVQb3NpdGlvbiA9IE1hdGgubWluKHBvc2l0aW9uLCBtYXhQb3MpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uc1t0ZWFtVHlwZV1bc2FmZVBvc2l0aW9uXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+TjSBQb3NpdGlvbm5lbWVudCAke3RlYW1UeXBlfSBwb3NpdGlvbiAke3NhZmVQb3NpdGlvbn06IHg9JHtwb3MueH0lLCB5PSR7cG9zLnl9JSAoJHtwb3MubmFtZX0pYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9zaXRpb25uZXIgbGUgcGVyc29ubmFnZVxyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3Bvcy54fSVgO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUudG9wID0gYCR7cG9zLnl9JWA7XHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZCdlbnRyw6llIGTDqWNhbMOpZVxyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpIHNjYWxlKDAuOCknO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCkgc2NhbGUoMSknO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNXMgZWFzZSc7XHJcbiAgICAgICAgfSwgcG9zaXRpb24gKiA0MDApOyAvLyBQbHVzIGRlIGTDqWxhaSBlbnRyZSBsZXMgYXBwYXJpdGlvbnNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEFOSU1BVElPTlMgREUgQ09NQkFUIEFWQU5Dw4lFUyA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgYXN5bmMgYW5pbWF0ZUNoYXJhY3RlckFjdGlvbihhdHRhY2tlckVsZW1lbnQsIHRhcmdldEVsZW1lbnQsIGFjdGlvblR5cGUpIHtcclxuICAgICAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuY2hhcmFjdGVycy5nZXQoYXR0YWNrZXJFbGVtZW50LmlkKTtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNoYXJhY3RlcnMuZ2V0KHRhcmdldEVsZW1lbnQuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghYXR0YWNrZXIgfHwgIXRhcmdldCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBzZWxvbiBsZSB0eXBlIGQnYWN0aW9uXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3BoeXNpY2FsX2F0dGFjayc6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVQaHlzaWNhbEF0dGFjayhhdHRhY2tlckVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hZ2ljX3NwZWxsJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZU1hZ2ljU3BlbGwoYXR0YWNrZXJFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZUhlYWwoYXR0YWNrZXJFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWZlbmQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlRGVmZW5zZShhdHRhY2tlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnaW50ZXJmYWNlIGFwcsOocyBsJ2FuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhcmFjdGVyVUkodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgYW5pbWF0ZVBoeXNpY2FsQXR0YWNrKGF0dGFja2VyLCB0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCBhdHRhY2tlclJlY3QgPSBhdHRhY2tlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBoYXNlIDE6IFByw6lwYXJhdGlvblxyXG4gICAgICAgIGF0dGFja2VyLmNsYXNzTGlzdC5hZGQoJ3ByZXBhcmluZy1hdHRhY2snKTtcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoNTAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQaGFzZSAyOiBDaGFyZ2UgdmVycyBsYSBjaWJsZVxyXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IHRhcmdldFJlY3QubGVmdCAtIGF0dGFja2VyUmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IHRhcmdldFJlY3QudG9wIC0gYXR0YWNrZXJSZWN0LnRvcDtcclxuICAgICAgICBcclxuICAgICAgICBhdHRhY2tlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7ZGVsdGFYICogMC43fXB4LCAke2RlbHRhWSAqIDAuN31weCkgc2NhbGUoMS4xKWA7XHJcbiAgICAgICAgYXR0YWNrZXIuY2xhc3NMaXN0LmFkZCgnY2hhcmdpbmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoNDAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQaGFzZSAzOiBJbXBhY3RcclxuICAgICAgICB0aGlzLmNyZWF0ZUltcGFjdEVmZmVjdCh0YXJnZXQsICfimpTvuI8nKTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndGFraW5nLWRhbWFnZScpO1xyXG4gICAgICAgIHRoaXMuc2hha2VFbGVtZW50KHRhcmdldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDMwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGhhc2UgNDogUmV0b3VyIGVuIHBvc2l0aW9uXHJcbiAgICAgICAgYXR0YWNrZXIuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgYXR0YWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgncHJlcGFyaW5nLWF0dGFjaycsICdjaGFyZ2luZycpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0YWtpbmctZGFtYWdlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDMwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGFuaW1hdGVNYWdpY1NwZWxsKGF0dGFja2VyLCB0YXJnZXQpIHtcclxuICAgICAgICAvLyBQaGFzZSAxOiBJbmNhbnRhdGlvblxyXG4gICAgICAgIGF0dGFja2VyLmNsYXNzTGlzdC5hZGQoJ2Nhc3Rpbmctc3BlbGwnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1hZ2ljQXVyYShhdHRhY2tlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDgwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGhhc2UgMjogUHJvamVjdGlsZSBtYWdpcXVlXHJcbiAgICAgICAgY29uc3Qgc3BlbGxQcm9qZWN0aWxlID0gdGhpcy5jcmVhdGVTcGVsbFByb2plY3RpbGUoYXR0YWNrZXIsIHRhcmdldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDYwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGhhc2UgMzogSW1wYWN0IG1hZ2lxdWVcclxuICAgICAgICB0aGlzLmNyZWF0ZU1hZ2ljSW1wYWN0KHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21hZ2ljLWhpdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNwZWxsUHJvamVjdGlsZS5yZW1vdmUoKTtcclxuICAgICAgICBhdHRhY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjYXN0aW5nLXNwZWxsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDUwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21hZ2ljLWhpdCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBhbmltYXRlSGVhbChjYXN0ZXIsIHRhcmdldCkge1xyXG4gICAgICAgIGNhc3Rlci5jbGFzc0xpc3QuYWRkKCdjYXN0aW5nLWhlYWwnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFZmZldCBkZSBzb2luXHJcbiAgICAgICAgY29uc3QgaGVhbEVmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWxFZmZlY3QuY2xhc3NOYW1lID0gJ2hlYWwtZWZmZWN0JztcclxuICAgICAgICBoZWFsRWZmZWN0LmlubmVySFRNTCA9ICfwn5Ka4pyo8J+MsSc7XHJcbiAgICAgICAgaGVhbEVmZmVjdC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaGVhbEZsb2F0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChoZWFsRWZmZWN0KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYmVpbmctaGVhbGVkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDIwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdjYXN0aW5nLWhlYWwnKTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVpbmctaGVhbGVkJyk7XHJcbiAgICAgICAgaGVhbEVmZmVjdC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgYW5pbWF0ZURlZmVuc2UoZGVmZW5kZXIpIHtcclxuICAgICAgICAvLyBBbmltYXRpb24gZGUgZMOpZmVuc2VcclxuICAgICAgICBkZWZlbmRlci5jbGFzc0xpc3QuYWRkKCdkZWZlbmRpbmcnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFZmZldCBkZSBib3VjbGllclxyXG4gICAgICAgIGNvbnN0IHNoaWVsZEVmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNoaWVsZEVmZmVjdC5jbGFzc05hbWUgPSAnZGVmZW5zZS1lZmZlY3QnO1xyXG4gICAgICAgIHNoaWVsZEVmZmVjdC5pbm5lckhUTUwgPSAn8J+boe+4j+KcqCc7XHJcbiAgICAgICAgc2hpZWxkRWZmZWN0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzaGllbGRQdWxzZSAxLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmVuZGVyLmFwcGVuZENoaWxkKHNoaWVsZEVmZmVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGR1IHBlcnNvbm5hZ2UgcXVpIHNlIG1ldCBlbiBwb3NpdGlvbiBkw6lmZW5zaXZlXHJcbiAgICAgICAgZGVmZW5kZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuOTUpIHRyYW5zbGF0ZVkoNXB4KSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0KDE1MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmVuZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RlZmVuZGluZycpO1xyXG4gICAgICAgIGRlZmVuZGVyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSB0cmFuc2xhdGVZKDApJztcclxuICAgICAgICBzaGllbGRFZmZlY3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PSBFRkZFVFMgVklTVUVMUyBBVkFOQ8OJUyA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY3JlYXRlSW1wYWN0RWZmZWN0KHRhcmdldCwgaWNvbikge1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVmZmVjdC5jbGFzc05hbWUgPSAnaW1wYWN0LWVmZmVjdCc7XHJcbiAgICAgICAgZWZmZWN0LmlubmVySFRNTCA9IGljb247XHJcbiAgICAgICAgZWZmZWN0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbXBhY3RCdXJzdCAwLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlZmZlY3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZWZmZWN0LnJlbW92ZSgpLCA4MDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVNYWdpY0F1cmEoY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgY29uc3QgYXVyYSA9IGNoYXJhY3Rlci5xdWVyeVNlbGVjdG9yKCcuYXVyYScpO1xyXG4gICAgICAgIGlmIChhdXJhKSB7XHJcbiAgICAgICAgICAgIGF1cmEuc3R5bGUuYW5pbWF0aW9uID0gJ21hZ2ljUHVsc2UgMC44cyBpbmZpbml0ZSc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXVyYS5zdHlsZS5hbmltYXRpb24gPSAnJztcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVTcGVsbFByb2plY3RpbGUoYXR0YWNrZXIsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0aWxlLmNsYXNzTmFtZSA9ICdzcGVsbC1wcm9qZWN0aWxlJztcclxuICAgICAgICBwcm9qZWN0aWxlLmlubmVySFRNTCA9ICfimqEnO1xyXG4gICAgICAgIHByb2plY3RpbGUuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGVsbFRyYXZlbCAwLjZzIGxpbmVhciBmb3J3YXJkcztcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tlclJlY3QgPSBhdHRhY2tlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RpbGUuc3R5bGUubGVmdCA9IGF0dGFja2VyUmVjdC5sZWZ0ICsgYXR0YWNrZXJSZWN0LndpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgcHJvamVjdGlsZS5zdHlsZS50b3AgPSBhdHRhY2tlclJlY3QudG9wICsgYXR0YWNrZXJSZWN0LmhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdGlsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWVyIHZlcnMgbGEgY2libGVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdGlsZS5zdHlsZS5sZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLnN0eWxlLnRvcCA9IHRhcmdldFJlY3QudG9wICsgdGFyZ2V0UmVjdC5oZWlnaHQgLyAyICsgJ3B4JztcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RpbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZU1hZ2ljSW1wYWN0KHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGltcGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGltcGFjdC5jbGFzc05hbWUgPSAnbWFnaWMtaW1wYWN0JztcclxuICAgICAgICBpbXBhY3QuaW5uZXJIVE1MID0gJ/CfkqXimqHwn5SlJztcclxuICAgICAgICBpbXBhY3Quc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IG1hZ2ljQnVyc3QgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGltcGFjdCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbXBhY3QucmVtb3ZlKCksIDEwMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaGFrZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJ2RhbWFnZVNoYWtlIDAuNHMgZWFzZS1pbi1vdXQnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PSBHRVNUSU9OIERFIEwnw4lUQVQgPT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIHVwZGF0ZUNoYXJhY3RlclVJKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckRhdGEgPSB0aGlzLmNoYXJhY3RlcnMuZ2V0KGNoYXJhY3Rlci5lbGVtZW50LmlkKTtcclxuICAgICAgICBpZiAoIWNoYXJhY3RlckRhdGEpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFsdGhCYXIgPSBjaGFyYWN0ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhbHRoLWZpbGwnKTtcclxuICAgICAgICBjb25zdCBoZWFsdGhUZXh0ID0gY2hhcmFjdGVyLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aC10ZXh0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGhlYWx0aEJhciAmJiBoZWFsdGhUZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWx0aFBlcmNlbnQgPSAoY2hhcmFjdGVyRGF0YS5jdXJyZW50SHAgLyBjaGFyYWN0ZXJEYXRhLm1heEhwKSAqIDEwMDtcclxuICAgICAgICAgICAgaGVhbHRoQmFyLnN0eWxlLndpZHRoID0gYCR7aGVhbHRoUGVyY2VudH0lYDtcclxuICAgICAgICAgICAgaGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGNoYXJhY3RlckRhdGEuY3VycmVudEhwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ291bGV1ciBkZSBsYSBiYXJyZSBkZSB2aWUgc2Vsb24gbGUgcG91cmNlbnRhZ2VcclxuICAgICAgICAgICAgaWYgKGhlYWx0aFBlcmNlbnQgPiA2MCkge1xyXG4gICAgICAgICAgICAgICAgaGVhbHRoQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNENBRjUwJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoZWFsdGhQZXJjZW50ID4gMzApIHtcclxuICAgICAgICAgICAgICAgIGhlYWx0aEJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGOTgwMCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFsdGhCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGNDQzMzYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwYXVzZUJhY2tncm91bmRWaWRlb3MoKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uZGF0YXNldC53YXNQbGF5aW5nID0gJ3RydWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc3VtZUJhY2tncm91bmRWaWRlb3MoKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bZGF0YS13YXMtcGxheWluZz1cInRydWVcIl0nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgdmlkZW8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXdhcy1wbGF5aW5nJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PSBVVElMSVRBSVJFUyA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgd2FpdChtcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMgLyB0aGlzLnNwZWVkTXVsdGlwbGllcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSb2xlSWNvbihyb2xlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgICAgIHRhbms6ICdmYXMgZmEtc2hpZWxkLWFsdCcsXHJcbiAgICAgICAgICAgIGRwczogJ2ZhcyBmYS1zd29yZCcsXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6ICdmYXMgZmEtbWFnaWMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaWNvbnNbcm9sZV0gfHwgaWNvbnMudGFuaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYW51cCgpIHtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4gY2xlYXJUaW1lb3V0KGFuaW1hdGlvbikpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzdW1lQmFja2dyb3VuZFZpZGVvcygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFeHBvcnQgcG91ciB1dGlsaXNhdGlvbiBFUzYgZXQgZ2xvYmFsXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDb21iYXQzRFN5c3RlbTtcclxufVxyXG5cclxuLy8gUmVuZHJlIGRpc3BvbmlibGUgZ2xvYmFsZW1lbnRcclxud2luZG93LkNvbWJhdDNEU3lzdGVtID0gQ29tYmF0M0RTeXN0ZW07XHJcbiIsIi8vID09PT09PT09PT09PT09PSBJTlRFUkZBQ0UgREUgSkVVIC0gU0FOVE9OUyBTQ1JJUFQgVEFDVElDUyA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIEdhbWVJbnRlcmZhY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gJ3RlYW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGRlcyBpbWFnZXMgZHUgZ3VpbGQgZ3VpZGVcclxuICAgICAgICB0aGlzLmd1aWxkSW1hZ2VzID0gW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9ndWlsZDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvZ3VpbGQyLnBuZycsIFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9ndWlsZDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvZ3VpbGQ0LnBuZydcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5ndWlsZEd1aWRlSW5pdEF0dGVtcHRzID0gMDsgLy8gQ29tcHRldXIgcG91ciDDqXZpdGVyIGxlcyBib3VjbGVzIGluZmluaWVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydhc3N1cmVyIHF1ZSBsZSBET00gZXN0IGNoYXJnw6kgYXZhbnQgZCdpbml0aWFsaXNlclxyXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRoaXMuaW5pdCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWpvdXRlciB1bmUgZm9uY3Rpb24gZ2xvYmFsZSBwb3VyIHRlc3RlciBsZSBiYXR0bGVmaWVsZFxyXG4gICAgICAgIHdpbmRvdy50ZXN0QmF0dGxlZmllbGQgPSAoKSA9PiB0aGlzLnRlc3RCYXR0bGVmaWVsZFZpc3VhbGl6YXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFJhbmtpbmdGaWx0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hhcmFjdGVycygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tVcmxUYWIoKTsgLy8gVsOpcmlmaWVyIHNpIHVuIG9uZ2xldCBlc3Qgc3DDqWNpZmnDqSBkYW5zIGwnVVJMXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIEQnT05HTEVUUyA9PT09PT09PT09PT09PT1cclxuICAgIGNoZWNrVXJsVGFiKCkge1xyXG4gICAgICAgIC8vIFbDqXJpZmllciBzaSB1biBvbmdsZXQgZXN0IHNww6ljaWZpw6kgZGFucyBsJ1VSTCAoZnJhZ21lbnQgb3UgcGFyYW3DqHRyZSlcclxuICAgICAgICBjb25zdCB1cmxGcmFnbWVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCB0YWJQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ3RhYicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhcmdldFRhYiA9IHVybEZyYWdtZW50IHx8IHRhYlBhcmFtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0YXJnZXRUYWIgJiYgWyd0ZWFtJywgJ2NoYXJhY3RlcnMnLCAnYmF0dGxlJywgJ3JhbmtpbmcnLCAnaGlzdG9yeSddLmluY2x1ZGVzKHRhcmdldFRhYikpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIodGFyZ2V0VGFiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cFRhYnMoKSB7XHJcbiAgICAgICAgY29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItYnV0dG9uJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYk5hbWUgPSBidXR0b24uZGF0YXNldC50YWI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYih0YWJOYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoVGFiKHRhYk5hbWUpIHtcclxuICAgICAgICAvLyBEw6lzYWN0aXZlciBsJ29uZ2xldCBhY3R1ZWwgYXZlYyB2w6lyaWZpY2F0aW9ucyBwbHVzIHJvYnVzdGVzXHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYnV0dG9uLmFjdGl2ZScpO1xyXG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItcGFuZWwuYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVQYW5lbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBY3RpdmVyIGxlIG5vdXZlbCBvbmdsZXQgYXZlYyB2w6lyaWZpY2F0aW9uc1xyXG4gICAgICAgIGNvbnN0IG5ld1RhYkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYj1cIiR7dGFiTmFtZX1cIl1gKTtcclxuICAgICAgICBpZiAobmV3VGFiQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG5ld1RhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3VGFiUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YWJOYW1lfS1wYW5lbGApO1xyXG4gICAgICAgIGlmIChuZXdUYWJQYW5lbCkge1xyXG4gICAgICAgICAgICBuZXdUYWJQYW5lbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYk5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0YWJOYW1lID09PSAncmFua2luZycpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmFua2luZygpOyAvLyBBSk9VVEVaIENFVFRFIExJR05FXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFjdGlvbnMgc3DDqWNpZmlxdWVzIHBhciBvbmdsZXRcclxuICAgICAgICBzd2l0Y2godGFiTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjaGFyYWN0ZXJzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENoYXJhY3RlcnMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICAgICAgICAgIC8vIMOJZ2FsZW1lbnQgYXBwZWxlciBsYSBtw6l0aG9kZSBkZSB0ZWFtLW1hbmFnZW1lbnQgc2kgZWxsZSBleGlzdGVcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cudGVhbU1hbmFnZW1lbnQgJiYgdHlwZW9mIHdpbmRvdy50ZWFtTWFuYWdlbWVudC51cGRhdGVCYXR0bGVUYWIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGVhbU1hbmFnZW1lbnQudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaGlzdG9yeSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXRjaEhpc3RvcnkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gUEVSU09OTkFHRVMgPT09PT09PT09PT09PT09XHJcbiAgICBsb2FkQ2hhcmFjdGVycygpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcmFjdGVycy1ncmlkJyk7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb250ZW5ldXIgZGUgcGVyc29ubmFnZXMgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2ltdWxlciBsZSBjaGFyZ2VtZW50XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImxvYWRpbmctdGV4dFwiPkNoYXJnZW1lbnQgZGVzIHBlcnNvbm5hZ2VzLi4uPC9wPic7XHJcblxyXG4gICAgICAgIC8vIFBlcnNvbm5hZ2VzIGQnZXhlbXBsZVxyXG4gICAgICAgIGNvbnN0IHNhbXBsZUNoYXJhY3RlcnMgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdHYXJkZSBSb3lhbCcsIHJvbGU6ICdUYW5rJywgcG93ZXI6IDE1MCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdBcmNoZXIgTXlzdGlxdWUnLCByb2xlOiAnRFBTJywgcG93ZXI6IDE4MCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdDbGVyYyBEaXZpbicsIHJvbGU6ICdTdXBwb3J0JywgcG93ZXI6IDEyMCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdNYWdlIGRlIEJhdGFpbGxlJywgcm9sZTogJ0RQUycsIHBvd2VyOiAyMDAsICB9LFxyXG4gICAgICAgICAgICB7IGlkOiA1LCBuYW1lOiAnUGFsYWRpbicsIHJvbGU6ICdUYW5rJywgcG93ZXI6IDE3MCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDYsIG5hbWU6ICdEcnVpZGUnLCByb2xlOiAnU3VwcG9ydCcsIHBvd2VyOiAxNDAsICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgc2FtcGxlQ2hhcmFjdGVycy5mb3JFYWNoKGNoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDaGFyYWN0ZXJDYXJkKGNoYXJhY3RlcikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoYXJhY3RlckNhcmQoY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NoYXJhY3Rlci1jYXJkJztcclxuICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz4ke2NoYXJhY3Rlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYXJhY3Rlci1yb2xlIHJvbGUtJHtjaGFyYWN0ZXIucm9sZS50b0xvd2VyQ2FzZSgpfVwiPiR7Y2hhcmFjdGVyLnJvbGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5QdWlzc2FuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtjaGFyYWN0ZXIucG93ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBDT01CQVQgPT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGVCYXR0bGVUYWIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXR0bGUtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlLXNlYXJjaCAuaW5mby10ZXh0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFzZWFyY2hCdG4pIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdCb3V0b24gZGUgcmVjaGVyY2hlIGRlIGJhdGFpbGxlIGludHJvdXZhYmxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbmZvVGV4dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RleHRlIGRcXCdpbmZvcm1hdGlvbiBkZSBiYXRhaWxsZSBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBsZSBub21icmUgZGUgcGVyc29ubmFnZXMgc8OpbGVjdGlvbm7DqXNcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENoYXJhY3RlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWNhcmQuc2VsZWN0ZWQnKTtcclxuICAgICAgICBjb25zdCB0ZWFtU2l6ZSA9IHNlbGVjdGVkQ2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRlYW1TaXplID09PSAzKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICdWb3RyZSDDqXF1aXBlIGVzdCBwcsOqdGUgISBUcm91dmV6IHVuIGFkdmVyc2FpcmUuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IGBTw6lsZWN0aW9ubmV6ICR7MyAtIHRlYW1TaXplfSBwZXJzb25uYWdlKHMpIGRlIHBsdXMgcG91ciBjb21tZW5jZXJgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gSElTVE9SSVFVRSA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGxvYWRNYXRjaEhpc3RvcnkoKSB7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRjaC1oaXN0b3J5Jyk7XHJcbiAgICAgICAgaWYgKCFoaXN0b3J5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29udGVuZXVyIGRcXCdoaXN0b3JpcXVlIGludHJvdXZhYmxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgdW4gaW5kaWNhdGV1ciBkZSBjaGFyZ2VtZW50XHJcbiAgICAgICAgaGlzdG9yeUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJsb2FkaW5nLXRleHRcIj48aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IENoYXJnZW1lbnQgZGUgbFxcJ2hpc3RvcmlxdWUuLi48L3A+JztcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL2hpc3RvcnknKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzIHx8IGRhdGEubWF0Y2hlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiZW1wdHktaGlzdG9yeVwiPkF1Y3VuIGNvbWJhdCBqb3XDqSBwb3VyIGxlIG1vbWVudDwvcD4nO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb25zdHJ1aXJlIGwnaGlzdG9yaXF1ZVxyXG4gICAgICAgICAgICBsZXQgaGlzdG9yeUhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlzdG9yeS1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+VG90YWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7ZGF0YS50b3RhbF9tYXRjaGVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtIHdpbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+VmljdG9pcmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEud2luc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSBsb3NzZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+RMOpZmFpdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEubG9zc2VzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtIHdpbnJhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+VGF1eCBkZSB2aWN0b2lyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLnRvdGFsX21hdGNoZXMgPiAwID8gTWF0aC5yb3VuZCgoZGF0YS53aW5zIC8gZGF0YS50b3RhbF9tYXRjaGVzKSAqIDEwMCkgOiAwfSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaXN0b3J5LWxpc3RcIj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGEubWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdENsYXNzID0gbWF0Y2guaXNfd2lubmVyID8gJ3ZpY3RvcnknIDogJ2RlZmVhdCc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRJY29uID0gbWF0Y2guaXNfd2lubmVyID8gJ3Ryb3BoeScgOiAndGltZXMnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0VGV4dCA9IG1hdGNoLmlzX3dpbm5lciA/ICdWSUNUT0lSRScgOiAnRMOJRkFJVEUnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5SFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWl0ZW0gJHtyZXN1bHRDbGFzc31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtJHtyZXN1bHRJY29ufVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzdWx0LXRleHRcIj4ke3Jlc3VsdFRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtIHBsYXllci10ZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaC5wbGF5ZXJfdGVhbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVhbS1wb3dlclwiPiR7TWF0aC5yb3VuZChtYXRjaC5wbGF5ZXJfcG93ZXIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnNcIj5WUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtIG9wcG9uZW50LXRlYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWFtLW5hbWVcIj4ke21hdGNoLm9wcG9uZW50X3RlYW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlYW0tcG93ZXJcIj4ke01hdGgucm91bmQobWF0Y2gub3Bwb25lbnRfcG93ZXIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wcG9uZW50LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wcG9uZW50LW5hbWVcIj4ke21hdGNoLm9wcG9uZW50X3BsYXllcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0Y2gtZGF0ZVwiPiR7bWF0Y2guZmluaXNoZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0Y2gtZHVyYXRpb25cIj4ke21hdGNoLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1yZWNhcFwiIG9uY2xpY2s9XCJnYW1lSW50ZXJmYWNlLnNob3dNYXRjaFJlY2FwKCR7bWF0Y2guaWR9KVwiIHRpdGxlPVwiVm9pciBsZSByZWNhcCBkdSBjb21iYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWNhcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGlzdG9yeUhUTUwgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGhpc3RvcnlDb250YWluZXIuaW5uZXJIVE1MID0gaGlzdG9yeUhUTUw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGUgbFxcJ2hpc3RvcmlxdWU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBoaXN0b3J5Q29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImVycm9yLXRleHRcIj5FcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxcXCdoaXN0b3JpcXVlPC9wPic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBVVElMSVRBSVJFUyA9PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYG5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tJHt0eXBlfWA7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtJHt0aGlzLmdldE5vdGlmaWNhdGlvbkljb24odHlwZSl9XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnc2hvdycpLCAxMCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RpZmljYXRpb25JY29uKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiAnY2hlY2stY2lyY2xlJyxcclxuICAgICAgICAgICAgJ3dhcm5pbmcnOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxyXG4gICAgICAgICAgICAnZXJyb3InOiAndGltZXMtY2lyY2xlJyxcclxuICAgICAgICAgICAgJ2luZm8nOiAnaW5mby1jaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaWNvbnNbdHlwZV0gfHwgJ2luZm8tY2lyY2xlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gQ0xBU1NFTUVOVCA9PT09PT09PT09PT09PT1cclxuXHJcbiAgICBzZXR1cFJhbmtpbmdGaWx0ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFua2luZy1idG4nKTtcclxuICAgICAgICBcclxuICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRMOpc2FjdGl2ZXIgdG91cyBsZXMgYm91dG9uc1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBY3RpdmVyIGxlIGJvdXRvbiBjbGlxdcOpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoYXJnZXIgbGUgY2xhc3NlbWVudCBhdmVjIGxlIGZpbHRyZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYnV0dG9uLmRhdGFzZXQuZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUmFua2luZyhmaWx0ZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkUmFua2luZyhmaWx0ZXIgPSAnZ2xvYmFsJykge1xyXG4gICAgICAgIGNvbnN0IHJhbmtpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFua2luZy1saXN0Jyk7XHJcbiAgICAgICAgaWYgKCFyYW5raW5nQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29udGVuZXVyIGRlIGNsYXNzZW1lbnQgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciB1biBpbmRpY2F0ZXVyIGRlIGNoYXJnZW1lbnRcclxuICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImxvYWRpbmctdGV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gQ2hhcmdlbWVudCBkdSBjbGFzc2VtZW50Li4uPC9wPic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9tYXRjaG1ha2luZy9yYW5raW5nP2ZpbHRlcj0ke2ZpbHRlcn1gKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzIHx8IGRhdGEucmFua2luZy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbXB0eU1lc3NhZ2UgPSAnQXVjdW4gam91ZXVyIGNsYXNzw6kgcG91ciBsZSBtb21lbnQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gJ3dlZWtseScpIGVtcHR5TWVzc2FnZSA9ICdBdWN1biBtYXRjaCBqb3XDqSBjZXR0ZSBzZW1haW5lJztcclxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09ICdtb250aGx5JykgZW1wdHlNZXNzYWdlID0gJ0F1Y3VuIG1hdGNoIGpvdcOpIGNlIG1vaXMtY2knO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImVtcHR5LXJhbmtpbmdcIj4ke2VtcHR5TWVzc2FnZX08L3A+YDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGEgcG9zaXRpb24gZHUgam91ZXVyIGFjdHVlbFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJQb3NpdGlvbihkYXRhLmN1cnJlbnRfcGxheWVyX3Bvc2l0aW9uLCBkYXRhLmN1cnJlbnRfcGxheWVyX21tcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb25zdHJ1aXJlIGxlIGNsYXNzZW1lbnRcclxuICAgICAgICAgICAgbGV0IHJhbmtpbmdIVE1MID0gYDxkaXYgY2xhc3M9XCJ0b3AtcGxheWVyc1wiPmA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb3AgMyBhdmVjIGRlc2lnbiBzcMOpY2lhbFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKDMsIGRhdGEucmFua2luZy5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGRhdGEucmFua2luZ1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcENsYXNzID0gaSA9PT0gMCA/ICd0b3AtMScgOiBpID09PSAxID8gJ3RvcC0yJyA6ICd0b3AtMyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5rQ2xhc3MgPSBpID09PSAwID8gJ2dvbGQnIDogaSA9PT0gMSA/ICdzaWx2ZXInIDogJ2Jyb256ZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5rSWNvbiA9IGkgPT09IDAgPyAnY3Jvd24nIDogaSA9PT0gMSA/ICdtZWRhbCcgOiAnYXdhcmQnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlQ2xhc3MgPSBwbGF5ZXIubW1yX2NoYW5nZSA+PSAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VTaWduID0gcGxheWVyLm1tcl9jaGFuZ2UgPj0gMCA/ICcrJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByYW5raW5nSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmtpbmctZW50cnkgJHt0b3BDbGFzc30gJHtwbGF5ZXIuaXNfY3VycmVudF9wbGF5ZXIgPyAnY3VycmVudC1wbGF5ZXInIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuayAke3JhbmtDbGFzc31cIj48aSBjbGFzcz1cImZhcyBmYS0ke3JhbmtJY29ufVwiPjwvaT4gJHtwbGF5ZXIucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGxheWVyLW5hbWVcIiBzdHlsZT1cImNvbG9yOiAke3BsYXllci51c2VybmFtZSA9PT0gd2luZG93LnVzZXJJbmZvLnVzZXJuYW1lID8gd2luZG93LnVzZXJJbmZvLnVzZXJuYW1lQ29sb3IgOiAnaW5oZXJpdCd9XCI+JHtwbGF5ZXIudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nXCI+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gJHtwbGF5ZXIubW1yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpbnNcIj48aSBjbGFzcz1cImZhcyBmYS10cm9waHlcIj48L2k+ICR7cGxheWVyLndpbnN9Vjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxvc3Nlc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPiAke3BsYXllci5sb3NzZXN9RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctY2hhbmdlICR7Y2hhbmdlQ2xhc3N9XCI+JHtjaGFuZ2VTaWdufSR7cGxheWVyLm1tcl9jaGFuZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmFua2luZ0hUTUwgKz0gJzwvZGl2PjxkaXYgY2xhc3M9XCJvdGhlci1wbGF5ZXJzXCI+JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEF1dHJlcyBqb3VldXJzIChwb3NpdGlvbiA0KylcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPCBkYXRhLnJhbmtpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGRhdGEucmFua2luZ1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZUNsYXNzID0gcGxheWVyLm1tcl9jaGFuZ2UgPj0gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlU2lnbiA9IHBsYXllci5tbXJfY2hhbmdlID49IDAgPyAnKycgOiAnJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmFua2luZ0hUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYW5raW5nLWVudHJ5ICR7cGxheWVyLmlzX2N1cnJlbnRfcGxheWVyID8gJ2N1cnJlbnQtcGxheWVyJyA6ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmtcIj4jJHtwbGF5ZXIucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGxheWVyLW5hbWVcIiBzdHlsZT1cImNvbG9yOiAke3BsYXllci5pc19jdXJyZW50X3BsYXllciA/IHdpbmRvdy51c2VySW5mby51c2VybmFtZUNvbG9yIDogJ2luaGVyaXQnfVwiPiR7cGxheWVyLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhdGluZ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+ICR7cGxheWVyLm1tcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5zXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJvcGh5XCI+PC9pPiAke3BsYXllci53aW5zfVY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsb3NzZXNcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4gJHtwbGF5ZXIubG9zc2VzfUQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nLWNoYW5nZSAke2NoYW5nZUNsYXNzfVwiPiR7Y2hhbmdlU2lnbn0ke3BsYXllci5tbXJfY2hhbmdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHNldWxlbWVudCBsZXMgMTAgcHJlbWllcnMsIHB1aXMgdW4gYm91dG9uIFwiVm9pciBwbHVzXCJcclxuICAgICAgICAgICAgICAgIGlmIChpID49IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5raW5nSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYW5raW5nLW1vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsb2FkLW1vcmUtYnRuXCIgb25jbGljaz1cImdhbWVJbnRlcmZhY2UubG9hZE1vcmVSYW5raW5nKCR7aSArIDF9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT4gVm9pciBwbHVzIGRlIGpvdWV1cnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByYW5raW5nSFRNTCArPSAnPC9kaXY+JztcclxuICAgICAgICAgICAgcmFua2luZ0NvbnRhaW5lci5pbm5lckhUTUwgPSByYW5raW5nSFRNTDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBjbGFzc2VtZW50OicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmFua2luZ0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+RXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBjbGFzc2VtZW50PC9wPic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXJQb3NpdGlvbihwb3NpdGlvbiwgbW1yKSB7XHJcbiAgICAgICAgY29uc3QgdXNlclBvc2l0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3NpdGlvbi1udW1iZXInKTtcclxuICAgICAgICBjb25zdCB1c2VyUmF0aW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmctdGV4dCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh1c2VyUG9zaXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHVzZXJQb3NpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgIyR7cG9zaXRpb24gfHwgJz8nfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfDiWzDqW1lbnQgZGUgcG9zaXRpb24gdXRpbGlzYXRldXIgaW50cm91dmFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHVzZXJSYXRpbmdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHVzZXJSYXRpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7bW1yIHx8IDEyMDB9IHB0c2A7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfDiWzDqW1lbnQgZGUgc2NvcmUgdXRpbGlzYXRldXIgaW50cm91dmFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1vcmVSYW5raW5nKHN0YXJ0SW5kZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhcmdlciBwbHVzIGRlIGpvdWV1cnMgw6AgcGFydGlyIGRlOicsIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRm9uY3Rpb25uYWxpdMOpIGJpZW50w7R0IGRpc3BvbmlibGUgIScsICdpbmZvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIFZJU1VBTElTQVRJT04gREUgQ09NQkFUID09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb25zIGRlIHPDqWN1cml0w6kgcG91ciBsJ0lEIGRlIG1hdGNoXHJcbiAgICAgICAgICAgIGlmICghbWF0Y2hJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJRCBkZSBtYXRjaCBtYW5xdWFudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vZXZlbnRzYCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgYWRkaXRpb25uZWxsZXMgZGVzIGRvbm7DqWVzXHJcbiAgICAgICAgICAgIGlmICghbWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rvbm7DqWVzIGRlIG1hdGNoIHZpZGVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5OKIERvbm7DqWVzIGRlIG1hdGNoIHJlw6d1ZXM6JywgbWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29tYmF0VmlzdWFsaXphdGlvbk1vZGFsKG1hdGNoRGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGUgbGEgdmlzdWFsaXNhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBjb21iYXQ6ICcgKyBlcnJvci5tZXNzYWdlLCAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0ZXJtaW5lUGxhdGVhdVR5cGUobWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgLy8gQWzDqWF0b2lyZW1lbnQgY2hvaXNpciBlbnRyZSBtZWRpZXZhbCBldCBkeXN0b3BpYW5cclxuICAgICAgICBjb25zdCBwbGF0ZWF1VHlwZXMgPSBbJ21lZGlldmFsJywgJ2R5c3RvcGlhbiddO1xyXG4gICAgICAgIHJldHVybiBwbGF0ZWF1VHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhdGVhdVR5cGVzLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXNwbGF5Q29tYmF0VmlzdWFsaXphdGlvbk1vZGFsKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5SNIERFQlVHOiBtYXRjaERhdGEgY29tcGxldCA9JywgSlNPTi5zdHJpbmdpZnkobWF0Y2hEYXRhLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyB2cmFpZXMgZG9ubsOpZXMgZGVzIMOpcXVpcGVzXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1BID0gbWF0Y2hEYXRhLnRlYW1BIHx8IG1hdGNoRGF0YS50ZWFtX2EgfHwgbWF0Y2hEYXRhLnBsYXllclRlYW07XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1CID0gbWF0Y2hEYXRhLnRlYW1CIHx8IG1hdGNoRGF0YS50ZWFtX2IgfHwgbWF0Y2hEYXRhLmVuZW15VGVhbTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBtYXRjaERhdGEuY3VycmVudFVzZXIgfHwgd2luZG93LnVzZXJJbmZvPy51c2VybmFtZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVzZXJuYW1lXScpPy5kYXRhc2V0LnVzZXJuYW1lIHx8ICdiYW1iYW0nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgZGUgc8OpY3VyaXTDqVxyXG4gICAgICAgICAgICBpZiAoIXRlYW1BIHx8ICF0ZWFtQikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignw4lxdWlwZXMgbWFucXVhbnRlczonLCB7IHRlYW1BLCB0ZWFtQiB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyOiBkb25uw6llcyBkXFwnw6lxdWlwZSBtYW5xdWFudGVzJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIETDqXRlcm1pbmVyIHF1ZWxsZSDDqXF1aXBlIGFwcGFydGllbnQgYXUgam91ZXVyIGFjdHVlbCBkZSBtYW5pw6hyZSBzw6ljdXJpc8OpZVxyXG4gICAgICAgICAgICBsZXQgcGxheWVyVGVhbSwgZW5lbXlUZWFtO1xyXG4gICAgICAgICAgICBpZiAodGVhbUEgJiYgdGVhbUEucGxheWVyID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyVGVhbSA9IHRlYW1BO1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVhbUIgJiYgdGVhbUIucGxheWVyID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyVGVhbSA9IHRlYW1CO1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQYXIgZMOpZmF1dCwgYXNzaWduZXIgdGVhbUEgY29tbWUgw6lxdWlwZSBkdSBqb3VldXJcclxuICAgICAgICAgICAgICAgIHBsYXllclRlYW0gPSB0ZWFtQTtcclxuICAgICAgICAgICAgICAgIGVuZW15VGVhbSA9IHRlYW1CO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn77+9IFRlYW1zIERlYnVnOicsIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgICAgICAgdGVhbUE6IHRlYW1BLnBsYXllcixcclxuICAgICAgICAgICAgICAgIHRlYW1COiB0ZWFtQi5wbGF5ZXIsXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUZWFtOiBwbGF5ZXJUZWFtLnBsYXllcixcclxuICAgICAgICAgICAgICAgIGVuZW15VGVhbTogZW5lbXlUZWFtLnBsYXllclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZXMgw6lsw6ltZW50cyBuw6ljZXNzYWlyZXMgZXhpc3RlbnRcclxuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIETDqXRlcm1pbmVyIGxlIHR5cGUgZGUgcGxhdGVhdSBzZWxvbiBsZSBtYXRjaFxyXG4gICAgICAgICAgICBjb25zdCBwbGF0ZWF1VHlwZSA9IHRoaXMuZGV0ZXJtaW5lUGxhdGVhdVR5cGUobWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdiYXR0bGVmaWVsZC1tb2RhbCBzaG93JztcclxuICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRsZWZpZWxkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gR3VpZGUgZGUgR3VpbGRlIMOgIGdhdWNoZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGxlZmllbGQtZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2d1aWxkMS5wbmdcIiBhbHQ9XCJHdWlkZSBkZSBHdWlsZGVcIiBjbGFzcz1cImd1aWRlLWF2YXRhclwiIGlkPVwiZ3VpbGQtYXZhdGFyLWNvbWJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1YmJsZS1hcnJvd1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJndWlkZS10ZXh0LWNvbWJhdFwiPuKalO+4jyBRdWUgbGUgY29tYmF0IGNvbW1lbmNlICEgTW9udHJlei1sZXVyIGRlIHF1b2kgdm91cyDDqnRlcyBjYXBhYmxlICE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudSBwcmluY2lwYWwgZHUgYmF0dGxlZmllbGQgw6AgZHJvaXRlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRsZWZpZWxkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPuKalO+4jyBDb21iYXQgw4lwaXF1ZSBlbiBDb3VycyDimpTvuI88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJhdHRsZWZpZWxkXCI+w5c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFpvbmUgZGVzIGNhcnRlcyBlbm5lbWllcyAoRU4gSEFVVCBEVSBQTEFURUFVKSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZW15LWNhcmRzLXpvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7wn5S0IMOJcXVpcGUgQWR2ZXJzZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGxlZmllbGQtY2FyZHMgZW5lbXktY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2VuZXJhdGVCYXR0bGVmaWVsZENhcmRzKGVuZW15VGVhbSwgJ2VuZW15Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFyw6huZSBkZSBjb21iYXQgY2VudHJhbGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1hcmVuYSAke3BsYXRlYXVUeXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJhdC16b25lLTNkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMZXMgcGVyc29ubmFnZXMgM0QgYXBwYXJhw650cm9udCBpY2kgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBab25lIGQnYW5pbWF0aW9uIHNwZWN0YWN1bGFpcmUgY2VudHJhbGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWFuaW1hdGlvbi16b25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1kaXNwbGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJhdC1lZmZlY3RzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250csO0bGVzIGRlIHZpdGVzc2UgcmVwb3NpdGlvbm7DqXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlZWQtY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuIGFjdGl2ZVwiIGRhdGEtc3BlZWQ9XCIxXCI+eDE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuXCIgZGF0YS1zcGVlZD1cIjJcIj54MjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzcGVlZC1idG5cIiBkYXRhLXNwZWVkPVwiNVwiPng1PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwZWVkLWJ0blwiIGRhdGEtc3BlZWQ9XCIxMFwiPngxMDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBab25lIGRlcyBjYXJ0ZXMgZHUgam91ZXVyIChFTiBCQVMgRFUgUExBVEVBVSkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItY2FyZHMtem9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPvCfn6IgVm90cmUgw4lxdWlwZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGxlZmllbGQtY2FyZHMgcGxheWVyLWNhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdlbmVyYXRlQmF0dGxlZmllbGRDYXJkcyhwbGF5ZXJUZWFtLCAncGxheWVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXBwbGlxdWVyIGxlIGJhY2tncm91bmQgYWzDqWF0b2lyZSDDoCBsJ2Fyw6huZVxyXG4gICAgICAgICAgICBjb25zdCBhcmVuYSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVmaWVsZC1hcmVuYScpO1xyXG4gICAgICAgICAgICBpZiAoYXJlbmEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUJhY2tncm91bmQgPSB0aGlzLmdldFJhbmRvbUJhdHRsZWZpZWxkQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYPCfjqggQmFja2dyb3VuZCBhcHBsaXF1w6k6ICR7cmFuZG9tQmFja2dyb3VuZH1gKTtcclxuICAgICAgICAgICAgICAgIGFyZW5hLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy9pbWFnZXMvJHtyYW5kb21CYWNrZ3JvdW5kfScpYDtcclxuICAgICAgICAgICAgICAgIGFyZW5hLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuICAgICAgICAgICAgICAgIGFyZW5hLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgYXJlbmEuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBzeXN0w6htZSAzRFxyXG4gICAgICAgICAgICB0aGlzLmNvbWJhdDNEID0gbmV3IENvbWJhdDNEU3lzdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENvbWJhdDNEU3lzdGVtKG1hdGNoRGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGZXJtZXR1cmUgZHUgbW9kYWxcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYmF0dGxlZmllbGQnKTtcclxuICAgICAgICAgICAgY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJhdHRsZWZpZWxkTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lQmFja2dyb3VuZFZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJhdDNEPy5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2VzdGlvbm5haXJlIGQnw6ljaGFwcGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGVzY2FwZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCYXR0bGVmaWVsZE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVCYWNrZ3JvdW5kVmlkZW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbWJhdDNEPy5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGR1IGNvbWJhdDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YWNrIHRyYWNlOicsIGVycm9yLnN0YWNrKTtcclxuICAgICAgICAgICAgLy8gTmUgcGFzIGJsb3F1ZXIgbCdpbnRlcmZhY2UsIGp1c3RlIGFmZmljaGVyIGwnZXJyZXVyXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkdSBjb21iYXQ6ICcgKyBlcnJvci5tZXNzYWdlLCAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVCYXR0bGVmaWVsZENhcmRzKHRlYW0sIHRlYW1UeXBlKSB7XHJcbiAgICAgICAgLy8gVXRpbGlzZXIgbGVzIHZyYWllcyBkb25uw6llcyBkZXMgcGVyc29ubmFnZXMgZGUgbGEgQkREXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IHRlYW0uY2hhcmFjdGVycyB8fCB0ZWFtIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IHRlYW1Db2xvciA9IHRlYW1UeXBlID09PSAncGxheWVyJyA/ICcjNENBRjUwJyA6ICcjRjQ0MzM2JztcclxuICAgICAgICBjb25zdCB0ZWFtQm9yZGVyID0gdGVhbVR5cGUgPT09ICdwbGF5ZXInID8gJyMzODhFM0MnIDogJyNEMzJGMkYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzLm1hcCgoY2hhciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gRGVidWcgcG91ciBjb21wcmVuZHJlIGxhIHN0cnVjdHVyZSBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ/CflI0gUGVyc29ubmFnZTonLCBjaGFyLm5hbWUsICdJbWFnZTonLCBjaGFyLmltYWdlUGF0aCB8fCBjaGFyLmltYWdlLCAnUm9sZTonLCBjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBQcmlvcml0w6k6IGNoYXIuaW1hZ2VQYXRoID4gY2hhci5pbWFnZSA+IHBhciBkw6lmYXV0IHNlbG9uIGxlIHLDtGxlXHJcbiAgICAgICAgICAgIGxldCBpbWFnZVNyYyA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgZmFsbGJhY2tJbWFnZSA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNoYXIuaW1hZ2VQYXRoICYmIGNoYXIuaW1hZ2VQYXRoICE9PSAncGxhY2Vob2xkZXIucG5nJykge1xyXG4gICAgICAgICAgICAgICAgLy8gTmV0dG95ZXIgbGUgY2hlbWluIGQnaW1hZ2UgcydpbCBjb250aWVudCBkZXMgY2hlbWlucyBjb21wbGV0c1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmMgPSBjaGFyLmltYWdlUGF0aC5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykucmVwbGFjZSgnL2ltYWdlcy9jaGFyYWN0ZXJzLycsICcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyLmltYWdlICYmIGNoYXIuaW1hZ2UgIT09ICdwbGFjZWhvbGRlci5wbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZXR0b3llciBsZSBjaGVtaW4gZCdpbWFnZSBzJ2lsIGNvbnRpZW50IGRlcyBjaGVtaW5zIGNvbXBsZXRzXHJcbiAgICAgICAgICAgICAgICBpbWFnZVNyYyA9IGNoYXIuaW1hZ2UucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpLnJlcGxhY2UoJy9pbWFnZXMvY2hhcmFjdGVycy8nLCAnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVNyYyA9IHRoaXMuZ2V0Q2hhcmFjdGVySW1hZ2VCeVJvbGUoY2hhci5yb2xlIHx8IGNoYXIuY2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmYWxsYmFja0ltYWdlID0gdGhpcy5nZXRDaGFyYWN0ZXJJbWFnZUJ5Um9sZShjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEZWJ1ZyBhbcOpbGlvcsOpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5a877iPIFske2NoYXIubmFtZX1dIEltYWdlIGZpbmFsZTogJHtpbWFnZVNyY30sIEZhbGxiYWNrOiAke2ZhbGxiYWNrSW1hZ2V9LCBPcmlnaW5hbDogJHtjaGFyLmltYWdlUGF0aCB8fCBjaGFyLmltYWdlfWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU8OpY3VyaXNlciBsZXMgZG9ubsOpZXMgSlNPTiBwb3VyIMOpdml0ZXIgbCdlcnJldXIgZGUgcGFyc2luZ1xyXG4gICAgICAgICAgICBjb25zdCBzYWZlQ2hhckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBjaGFyLm5hbWUgfHwgJ0luY29ubnUnLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogY2hhci5yb2xlIHx8IGNoYXIuY2xhc3MgfHwgJ3dhcnJpb3InLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlU3JjLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGNoYXIubGV2ZWwgfHwgMSxcclxuICAgICAgICAgICAgICAgIGhwOiBjaGFyLmhwIHx8IDEwMCxcclxuICAgICAgICAgICAgICAgIGF0dGFjazogY2hhci5hdHRhY2sgfHwgNTBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1jYXJkICR7dGVhbVR5cGV9LWNhcmRcIiBkYXRhLWNoYXJhY3Rlci1pZD1cIiR7aW5kZXh9XCIgZGF0YS10ZWFtPVwiJHt0ZWFtVHlwZX1cIiBkYXRhLWNoYXJhY3Rlcj0nJHtKU09OLnN0cmluZ2lmeShzYWZlQ2hhckRhdGEpLnJlcGxhY2UoLycvZywgXCImYXBvcztcIil9Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2hhcmFjdGVycy8ke2ltYWdlU3JjfVwiIGFsdD1cIiR7Y2hhci5uYW1lfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZXJyb3I9XCJ0aGlzLnNyYz0nL2ltYWdlcy9jaGFyYWN0ZXJzLyR7ZmFsbGJhY2tJbWFnZX0nOyBjb25zb2xlLndhcm4oJ/CflrzvuI8gSW1hZ2Ugbm9uIHRyb3V2w6llOiAke2ltYWdlU3JjfSwgdXRpbGlzYXRpb24gZmFsbGJhY2s6ICR7ZmFsbGJhY2tJbWFnZX0nKTtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItbmFtZVwiPiR7Y2hhci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItcm9sZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5nZXRSb2xlSWNvbihjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyl9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2V0Um9sZU5hbWUoY2hhci5yb2xlIHx8IGNoYXIuY2xhc3MpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJhY3RlckltYWdlQnlSb2xlKHJvbGUpIHtcclxuICAgICAgICBjb25zdCByb2xlSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICAndGFuayc6ICdwYWxhZGluLnBuZycsXHJcbiAgICAgICAgICAgICdtYWdlJzogJ21hZ2UucG5nJywgXHJcbiAgICAgICAgICAgICdhcmNoZXInOiAnYXJjaGVyLnBuZycsXHJcbiAgICAgICAgICAgICdhc3Nhc3Npbic6ICdhc3Nhc3Npbi5wbmcnLFxyXG4gICAgICAgICAgICAncHJpZXN0JzogJ3ByaWVzdC5wbmcnLFxyXG4gICAgICAgICAgICAnd2Fycmlvcic6ICd3YXJyaW9yLnBuZydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByb2xlSW1hZ2VzW3JvbGVdIHx8ICd3YXJyaW9yLnBuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQmF0dGxlZmllbGRCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIGNvbnN0IG1lZGlldmFsQmdzID0gW1xyXG4gICAgICAgICAgICAncGxhdGVhdXhNZWRpZXZhbC9jaW1ldGnDqHJlLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL2NvdXJzIGR1IGNoYXRlYXUucG5nJywgXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL3BsYWNlIGR1IHZpbGxhZ2UucG5nJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZHlzdG9CZ3MgPSBbXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eER5c3RvL2NoYW1wIGRlIGJhdGFpbGxlIGR5c3RvLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eER5c3RvL2NvdXJzIG1vZGVybmUucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4RHlzdG8vcGxhY2UgdmlsbGFnZSBtb2Rlcm5lLnBuZydcclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbEJncyA9IFsuLi5tZWRpZXZhbEJncywgLi4uZHlzdG9CZ3NdO1xyXG4gICAgICAgIHJldHVybiBhbGxCZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQmdzLmxlbmd0aCldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEthYW1lbG90dFBocmFzZShzaXR1YXRpb24gPSAnZ2VuZXJhbCcpIHtcclxuICAgICAgICBjb25zdCBwaHJhc2VzID0ge1xyXG4gICAgICAgICAgICBzdGFydDogW1xyXG4gICAgICAgICAgICAgICAgXCJBaCAhIFZvaWzDoCBxdWkgdmEgw6p0cmUgaW50w6lyZXNzYW50ICFcIixcclxuICAgICAgICAgICAgICAgIFwiQm9uLCBvbiB2YSB2b2lyIGNlIHF1J29uIHZhIHZvaXIgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBwYXJ0aSBtb24ga2lraSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFsb3JzLCBvbiBjb21tZW5jZSBxdWFuZCB2b3VzIHZvdWxleiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIsOHYSB2YSDDqnRyZSBkdSBzcG9ydCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGxlIG1vbWVudCBkZSB2w6lyaXTDqSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFsbGV6LXksIHN1cnByZW5lei1tb2kgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJRdWUgbGUgbWVpbGxldXIgZ2FnbmUuLi4gZW5maW4gaidlc3DDqHJlIHF1ZSBjJ2VzdCB2b3VzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgcGFydGkgcG91ciBsYSBiYXN0b24gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJCb24sIG1vaSBqZSBkaXMgOiBxdSdlc3QtY2UgcXUnb24gYXR0ZW5kID9cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBhdHRhY2s6IFtcclxuICAgICAgICAgICAgICAgIFwiw4dhIGMnZXN0IGR1IHJlbnRyZS1kZWRhbnMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCwgbGEgdmFjaGUgISBJbCB5IHZhIGZyYW5jbyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSAhIFRhcGV6IHN1ciB0b3V0IGNlIHF1aSBib3VnZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoIGJlbiBkaXMgZG9uYywgaWwgc2UgZ8OqbmUgcGFzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxsZXoteSAhIE1haXMgYWxsZXoteSBkb25jICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMgbMOgLCBjaGFwZWF1ICEgw4dhIGMnZXN0IGRlIGwnYXR0YXF1ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGJlYXUgISBDJ2VzdCBkdSBncmFuZCBhcnQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCLDh2EgYydlc3QgZW52b3nDqSAhIFNhbnMgZmFpcmUgZGUgZMOpdGFpbCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIk9oIGzDoCBsw6AgISBJbCBsJ2EgcGFzIHJhdMOpIGNlbHVpLWzDoCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZvaWzDoCBjZSBxdWUgaidhcHBlbGxlIGRlIGwnZWZmaWNhY2l0w6kgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBwYXMgZHUgY2luw6ltYSDDp2EgISBDJ2VzdCBkdSBjb25jcmV0ICFcIixcclxuICAgICAgICAgICAgICAgIFwiSWwgYSBwYXMgZmFpdCBkYW5zIGxhIGRlbnRlbGxlICFcIixcclxuICAgICAgICAgICAgICAgIFwiw4dhIGMnZXN0IGR1IHRyYXZhaWwgZGUgcHJvZmVzc2lvbm5lbCAhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVmZW5zZTogW1xyXG4gICAgICAgICAgICAgICAgXCJFaCAhIElsIGEgcGFyw6kgISBDb21tZSB1biBjaGVmICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMgbMOgLCBicmF2byAhIEJlbGxlIHBhcmFkZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSAhIFJlc3RleiBzdXIgdm9zIGdhcmRlcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoIGJlbiwgaWwgbCdhIHZ1ZSB2ZW5pciBjZWxsZS1sw6AgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBkZSBsYSBkw6lmZW5zZSDDp2EgISBEdSBiw6l0b24gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCAhIElsIHMneSBjb25uYcOudCBlbiBwcm90ZWN0aW9uICFcIixcclxuICAgICAgICAgICAgICAgIFwiVm9pbMOgIHVuIGJvdWNsaWVyIHF1aSBzZXJ0IMOgIHF1ZWxxdWUgY2hvc2UgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBkdSBzb2xpZGUgISDDh2EgdGllbnQgbGEgcm91dGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJCZWxsZSBhbnRpY2lwYXRpb24gISBUcsOocyBqb2xpICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3Qgw6dhIGxhIHZyYWllIGTDqWZlbnNlICEgRHUgY29zdGF1ZCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIklsIHRpZW50IGxlIGNob2MgISBSZXNwZWN0ICFcIixcclxuICAgICAgICAgICAgICAgIFwiw4dhIGMnZXN0IGRlIGxhIHLDqXNpc3RhbmNlICEgSW1wcmVzc2lvbm5hbnQgIVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1hZ2ljOiBbXHJcbiAgICAgICAgICAgICAgICBcIk9oICEgRGUgbGEgbWFnaWUgISDDh2EgYydlc3QgZHUgc3BlY3RhY2xlICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMgbMOgICEgw4dhIGMnZXN0IGRlIGwnYXJ0aXNhbmF0ICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuICEgSWwgc29ydCBsZSBncmFuZCBqZXUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBkZSBsYSBiZWxsZSBvdXZyYWdlIMOnYSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZvaWzDoCBjZSBxdWUgaidhcHBlbGxlIHVuIHRvdXIgZGUgbWHDrnRyZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIsOHYSBjJ2VzdCBkdSBuaXZlYXUgISBEdSBncmFuZCBhcnQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJPaCBsw6AgbMOgICEgSWwgY29ubmHDrnQgc29uIGFmZmFpcmUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBiZWF1ICEgQydlc3QgbHVtaW5ldXggIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyDDp2EgISBDJ2VzdCBkZSBsYSB0ZWNobmlxdWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJFaCBiZW4gZGlzIGRvbmMgISBJbCBhIGRlcyByZXNzb3VyY2VzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3Qgw6dhIGxlcyB2cmFpcyBzb3J0aWzDqGdlcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIklsIG1hw650cmlzZSBzb24gc3VqZXQgISBDaGFwZWF1ICFcIixcclxuICAgICAgICAgICAgICAgIFwiVm9pbMOgIGNlIHF1J29uIGFwcGVsbGUgYXZvaXIgZHUgbcOpdGllciAhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaGVhbDogW1xyXG4gICAgICAgICAgICAgICAgXCJBaCAhIFVuIHBldGl0IGNvdXAgZGUgcsOpcGFyYXRpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCDDp2EgISBPbiBzb2lnbmUgc2VzIHBldGl0cyBib2JvcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoICEgSWwgY29ubmHDrnQgbGVzIHByZW1pZXJzIHNlY291cnMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgcXVpIHZhIGZhaXJlIGR1IGJpZW4gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBkZSBsYSBib25uZSBtw6lkZWNpbmUgw6dhICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWggISBJbCBzYWl0IHkgZmFpcmUgYXZlYyBsZXMgcG90aW9ucyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGR1IHRyYXZhaWwgZGUgZ3XDqXJpc3NldXIgw6dhICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuICEgSWwgYSBkZSBsYSByZXNzb3VyY2UgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgcXVpIHJlZG9ubmUgbGEgZm9ybWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCDDp2EgbGUgdnJhaSBtw6l0aWVyIGRlIHNvaWduZXVyICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWggISBPbiBuJ2VzdCBqYW1haXMgbWlldXggc29pZ27DqSBxdWUgcGFyIHNvaS1tw6ptZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJlbGxlIGludGVydmVudGlvbiAhIEMnZXN0IGR1IHByb2Zlc3Npb25uZWwgIVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZpY3Rvcnk6IFtcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMgbMOgICEgQnJhdm8gISBDJ2VzdCBkdSBiZWF1IGJvdWxvdCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoIGJlbiB2b2lsw6AgISBDJ2VzdCDDp2EgcXUnb24gYXBwZWxsZSB1bmUgdmljdG9pcmUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCAhIEMnZXN0IGZpbmkgISBFdCBiaWVuIGpvdcOpICFcIixcclxuICAgICAgICAgICAgICAgIFwiVm9pbMOgICEgTWlzc2lvbiBhY2NvbXBsaWUgISBEdSBncmFuZCBhcnQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCDDp2EgISBPbiBhIGdhZ27DqSAhIENvbW1lIGRlcyBjaGVmcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoIGJlbiBkaXMgZG9uYyAhIMOHYSBjJ2VzdCBkZSBsYSBwZXJmb3JtYW5jZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJyYXZvICEgQydlc3QgZHUgdHJhdmFpbCBkZSBwcm9mZXNzaW9ubmVsICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMgbMOgLCBjaGFwZWF1ICEgQydlc3QgbcOpcml0w6kgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgY2UgcXVlIGonYXBwZWxsZSB1bmUgYmVsbGUgdmljdG9pcmUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBmaW5pICEgRXQgYydlc3QgYmllbiBmaW5pICEgQnJhdm8gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCAhIEMnZXN0IMOnYSBxdSdvbiB2b3VsYWl0IHZvaXIgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJNaXNzaW9uIGFjY29tcGxpZSAhIER1IGJlYXUgdHJhdmFpbCAhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVmZWF0OiBbXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgRWggYmVuLi4uIGMnZXN0IHBhcyBwYXNzw6kgbG9pbiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJvbiwgb24gZmVyYSBtaWV1eCBsYSBwcm9jaGFpbmUgZm9pcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IHBhcyBncmF2ZSAhIEwnaW1wb3J0YW50IGMnZXN0IGRlIHBhcnRpY2lwZXIgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJFaCAhIE9uIHBldXQgcGFzIGdhZ25lciDDoCB0b3VzIGxlcyBjb3VwcyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSAhIE9uIGFwcHJlbmQgZGUgc2VzIGVycmV1cnMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJCb24sIG9uIHJlZmVyYSDDp2EgcGx1cyB0YXJkICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgcGFzIGRyYW1hdGlxdWUgISBPbiBzJ2VuIHJlbWV0dHJhICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuICEgw4dhIGFycml2ZSBhdXggbWVpbGxldXJzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgY29tbWUgw6dhICEgT24gZ2FnbmUgcGFzIHRvdWpvdXJzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQm9uLCBvbiBkaXJhIHF1ZSBjJ8OpdGFpdCB1biBlbnRyYcOubmVtZW50ICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgcGFzIGxhIGZpbiBkdSBtb25kZSAhIE9uIHJlY29tbWVuY2VyYSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoICEgTCdhZHZlcnNhaXJlIMOpdGFpdCBjb3JpYWNlICFcIlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaXR1YXRpb25QaHJhc2VzID0gcGhyYXNlc1tzaXR1YXRpb25dIHx8IHBocmFzZXMuZ2VuZXJhbCB8fCBwaHJhc2VzLnN0YXJ0O1xyXG4gICAgICAgIHJldHVybiBzaXR1YXRpb25QaHJhc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpdHVhdGlvblBocmFzZXMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0thYW1lbG90dENvbW1lbnQoc2l0dWF0aW9uID0gJ2dlbmVyYWwnKSB7XHJcbiAgICAgICAgY29uc3QgcGhyYXNlID0gdGhpcy5nZXRLYWFtZWxvdHRQaHJhc2Uoc2l0dWF0aW9uKTtcclxuICAgICAgICBjb25zdCBndWlkZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpZGUtdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRhcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtZ3VpZGUtY29tbWVudGFyeScpO1xyXG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlsZC1ndWlkZS1hdmF0YXIgaW1nJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGd1aWRlVGV4dCkge1xyXG4gICAgICAgICAgICBndWlkZVRleHQudGV4dENvbnRlbnQgPSBwaHJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb21tZW50YXJ5KSB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRhcnkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRhcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF2YXRhcikge1xyXG4gICAgICAgICAgICBhdmF0YXIuc3JjID0gdGhpcy5nZXROZXh0R3VpbGRJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+Xo++4jyBHdWlsZCBHdWlkZSBLYWFtZWxvdHQ6JywgcGhyYXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QmF0dGxlZmllbGRDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIG5vdXZlYXUgc3lzdMOobWUgZGUgY29tYmF0IDNEXHJcbiAgICAgICAgdGhpcy5pbml0Q29tYmF0M0RTeXN0ZW0obWF0Y2hEYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZXR1cCBkZXMgY29udHLDtGxlcyBleGlzdGFudHNcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVmaWVsZC1tb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWJhdC1jbG9zZS1idG4nKTsgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWNvbWJhdC1idG4nKTtcclxuICAgICAgICBjb25zdCBzcGVlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWQtYnRuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXJyZW50U3BlZWQgPSAyOyAvLyBWaXRlc3NlIHBhciBkw6lmYXV0IHgyXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmFpcmUgbGUgbW9kYWwgcGxlaW4gw6ljcmFuXHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLndpZHRoID0gJzEwMHZ3JztcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdiYXR0bGVmaWVsZC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRm9uY3Rpb24gZGUgZmVybWV0dXJlXHJcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZUJhY2tncm91bmRWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVmaWVsZC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21iYXQzRD8uY2xlYW51cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgYXZlYyBFc2NhcGVcclxuICAgICAgICBjb25zdCBlc2NhcGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udHLDtGxlcyBkZSB2aXRlc3NlXHJcbiAgICAgICAgc3BlZWRCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BlZWRCdG5zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcGVlZCA9IHBhcnNlRmxvYXQoYnRuLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSB2aXRlc3NlIGR1IHN5c3TDqG1lIDNEXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21iYXQzRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmF0M0Quc3BlZWRNdWx0aXBsaWVyID0gY3VycmVudFNwZWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+OriBWaXRlc3NlIGNoYW5nw6llOicsIGN1cnJlbnRTcGVlZCArICd4Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgQ09NQkFUIDNEID09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBpbml0Q29tYmF0M0RTeXN0ZW0obWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIMOpcXVpcGVzIGF2ZWMgZGlmZsOpcmVudHMgZm9ybWF0cyBwb3NzaWJsZXNcclxuICAgICAgICBjb25zdCB0ZWFtQSA9IG1hdGNoRGF0YS50ZWFtQSB8fCBtYXRjaERhdGEudGVhbV9hIHx8IG1hdGNoRGF0YS5wbGF5ZXJUZWFtO1xyXG4gICAgICAgIGNvbnN0IHRlYW1CID0gbWF0Y2hEYXRhLnRlYW1CIHx8IG1hdGNoRGF0YS50ZWFtX2IgfHwgbWF0Y2hEYXRhLmVuZW15VGVhbTtcclxuICAgICAgICAvLyBVdGlsaXNlciBsJ3V0aWxpc2F0ZXVyIGNvbm5lY3TDqSBkZXB1aXMgd2luZG93LnVzZXJJbmZvIG91IGxlcyBkb25uw6llcyBkdSBtYXRjaFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gbWF0Y2hEYXRhLmN1cnJlbnRVc2VyIHx8IHdpbmRvdy51c2VySW5mbz8udXNlcm5hbWUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVzZXJuYW1lXScpPy5kYXRhc2V0LnVzZXJuYW1lIHx8ICdiYW1iYW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5SNIERFQlVHIGluaXRDb21iYXQzRDonLCB7XHJcbiAgICAgICAgICAgIHRlYW1BOiB0ZWFtQSxcclxuICAgICAgICAgICAgdGVhbUI6IHRlYW1CLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogY3VycmVudFVzZXIsXHJcbiAgICAgICAgICAgIG1hdGNoRGF0YUtleXM6IE9iamVjdC5rZXlzKG1hdGNoRGF0YSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyBkZSBzw6ljdXJpdMOpXHJcbiAgICAgICAgaWYgKCF0ZWFtQSB8fCAhdGVhbUIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIMOJcXVpcGVzIG1hbnF1YW50ZXMgZGFucyBpbml0Q29tYmF0M0Q6JywgeyB0ZWFtQSwgdGVhbUIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgcXVlbGxlIMOpcXVpcGUgYXBwYXJ0aWVudCBhdSBqb3VldXIgYWN0dWVsXHJcbiAgICAgICAgbGV0IHBsYXllclRlYW0sIGVuZW15VGVhbTtcclxuICAgICAgICBpZiAodGVhbUEgJiYgdGVhbUEucGxheWVyID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBwbGF5ZXJUZWFtID0gdGVhbUE7XHJcbiAgICAgICAgICAgIGVuZW15VGVhbSA9IHRlYW1CO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGVhbUIgJiYgdGVhbUIucGxheWVyID09PSBjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBwbGF5ZXJUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgICAgIGVuZW15VGVhbSA9IHRlYW1BO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFBhciBkw6lmYXV0LCBhc3NpZ25lciB0ZWFtQSBjb21tZSDDqXF1aXBlIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBwbGF5ZXJUZWFtID0gdGVhbUE7XHJcbiAgICAgICAgICAgIGVuZW15VGVhbSA9IHRlYW1CO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+OryDDiXF1aXBlcyBhc3NpZ27DqWVzOicsIHsgXHJcbiAgICAgICAgICAgIHBsYXllclRlYW06IHBsYXllclRlYW0/Lm5hbWUsIFxyXG4gICAgICAgICAgICBlbmVteVRlYW06IGVuZW15VGVhbT8ubmFtZSxcclxuICAgICAgICAgICAgcGxheWVyQ2hhcmFjdGVyczogcGxheWVyVGVhbT8uY2hhcmFjdGVycz8ubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGVuZW15Q2hhcmFjdGVyczogZW5lbXlUZWFtPy5jaGFyYWN0ZXJzPy5sZW5ndGggfHwgMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEF0dGVuZHJlIHF1ZSBsZSBtb2RhbCBzb2l0IG1vbnTDqSBkYW5zIGxlIERPTVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyVGVhbSAmJiBlbmVteVRlYW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBDYXJkVG8zRFRyYW5zaXRpb24ocGxheWVyVGVhbSwgZW5lbXlUZWFtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBHdWlsZEd1aWRlRm9yQ29tYmF0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgSW1wb3NzaWJsZSBkZSBjb25maWd1cmVyIGxlIDNEIC0gw6lxdWlwZXMgaW52YWxpZGVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXR1cENhcmRUbzNEVHJhbnNpdGlvbihwbGF5ZXJUZWFtLCBlbmVteVRlYW0pIHtcclxuICAgICAgICBjb25zdCBjb21iYXRab25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWJhdC16b25lLTNkJyk7XHJcbiAgICAgICAgaWYgKCFjb21iYXRab25lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBab25lIGRlIGNvbWJhdCAzRCBub24gdHJvdXbDqWUgIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb25zIGRlIHPDqWN1cml0w6lcclxuICAgICAgICBpZiAoIXBsYXllclRlYW0gfHwgIWVuZW15VGVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgw4lxdWlwZXMgbWFucXVhbnRlcyBwb3VyIGxhIHRyYW5zaXRpb24gM0Q6JywgeyBwbGF5ZXJUZWFtLCBlbmVteVRlYW0gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxlcyBwZXJzb25uYWdlcyAzRCBwb3VyIGwnw6lxdWlwZSBkdSBqb3VldXJcclxuICAgICAgICBjb25zdCBwbGF5ZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItY2FyZCcpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNoYXJhY3RlcnMgPSBwbGF5ZXJUZWFtLmNoYXJhY3RlcnMgfHwgW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfjq4gQ3LDqWF0aW9uIGRlcyBwZXJzb25uYWdlcyBqb3VldXI6JywgcGxheWVyQ2hhcmFjdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBsYXllckNhcmRzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDaGFyYWN0ZXJzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyM0QgPSB0aGlzLmNvbWJhdDNELmNyZWF0ZTNEQ2hhcmFjdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNoYXJhY3RlcnNbaW5kZXhdLCBcclxuICAgICAgICAgICAgICAgICAgICAncGxheWVyJywgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkZSBzb3J0aWUgZGUgbGEgY2FydGVcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUNoYXJhY3RlckZyb21DYXJkKGNhcmQsIGNoYXJhY3RlcjNELCAncGxheWVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb21iYXRab25lLmFwcGVuZENoaWxkKGNoYXJhY3RlcjNEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyw6llciBsZXMgcGVyc29ubmFnZXMgM0QgcG91ciBsJ8OpcXVpcGUgYWR2ZXJzZVxyXG4gICAgICAgIGNvbnN0IGVuZW15Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2FyZCcpO1xyXG4gICAgICAgIGNvbnN0IGVuZW15Q2hhcmFjdGVycyA9IGVuZW15VGVhbS5jaGFyYWN0ZXJzIHx8IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfimpTvuI8gQ3LDqWF0aW9uIGRlcyBwZXJzb25uYWdlcyBlbm5lbWlzOicsIGVuZW15Q2hhcmFjdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVuZW15Q2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuZW15Q2hhcmFjdGVyc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcjNEID0gdGhpcy5jb21iYXQzRC5jcmVhdGUzRENoYXJhY3RlcihcclxuICAgICAgICAgICAgICAgICAgICBlbmVteUNoYXJhY3RlcnNbaW5kZXhdLCBcclxuICAgICAgICAgICAgICAgICAgICAnZW5lbXknLCBcclxuICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIHNvcnRpZSBkZSBsYSBjYXJ0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlQ2hhcmFjdGVyRnJvbUNhcmQoY2FyZCwgY2hhcmFjdGVyM0QsICdlbmVteScpO1xyXG4gICAgICAgICAgICAgICAgY29tYmF0Wm9uZS5hcHBlbmRDaGlsZChjaGFyYWN0ZXIzRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEw6ltYXJyZXIgbGUgY29tYmF0IGFwcsOocyBsZXMgYW5pbWF0aW9uc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RXBpY0NvbWJhdCgpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhbmltYXRlQ2hhcmFjdGVyRnJvbUNhcmQoY2FyZCwgY2hhcmFjdGVyM0QsIHRlYW1UeXBlKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZFJlY3QgPSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvc2l0aW9ubmVyIGxlIHBlcnNvbm5hZ2UgM0Qgc3VyIGxhIGNhcnRlIGluaXRpYWxlbWVudFxyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBjaGFyYWN0ZXIzRC5zdHlsZS5sZWZ0ID0gKGNhcmRSZWN0LmxlZnQgKyBjYXJkUmVjdC53aWR0aCAvIDIgLSA0MCkgKyAncHgnO1xyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnRvcCA9IChjYXJkUmVjdC50b3AgKyBjYXJkUmVjdC5oZWlnaHQgLyAyIC0gNjApICsgJ3B4JztcclxuICAgICAgICBjaGFyYWN0ZXIzRC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC4zKSB0cmFuc2xhdGVZKDApJztcclxuICAgICAgICBjaGFyYWN0ZXIzRC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZCdhcHBhcml0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTMwcHgpJztcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkZSBzb3J0aWUgdmVycyBsZSBiYXR0bGVmaWVsZFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVdGlsaXNlciBsZSBzeXN0w6htZSBkZSBwb3NpdGlvbm5lbWVudCAzRFxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KGNoYXJhY3RlcjNELmRhdGFzZXQucG9zaXRpb24pIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SnIEFOSU1BVElPTjogZGF0YXNldC5wb3NpdGlvbj0ke2NoYXJhY3RlcjNELmRhdGFzZXQucG9zaXRpb259LCBwYXJzZWQ9JHtwb3NpdGlvbn0sIHRlYW1UeXBlPSR7dGVhbVR5cGV9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmF0M0QucG9zaXRpb25DaGFyYWN0ZXIoY2hhcmFjdGVyM0QsIHBvc2l0aW9uLCB0ZWFtVHlwZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIzRC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSB0cmFuc2xhdGVZKDApJztcclxuICAgICAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBFZmZldCBkJ2VudHLDqWUgc3BlY3RhY3VsYWlyZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIzRC5jbGFzc0xpc3QuYWRkKCdjaGFyYWN0ZXItZW50cmFuY2UnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIzRC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFyYWN0ZXItZW50cmFuY2UnKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIDEyMDAgKyAoTWF0aC5yYW5kb20oKSAqIDYwMCkpOyAvLyBEw6lsYWkgYWzDqWF0b2lyZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGFydEVwaWNDb21iYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflKUgRMOpbWFycmFnZSBkdSBjb21iYXQgw6lwaXF1ZSAhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hhbmdlciBsZSB0ZXh0ZSBkdSBndWlsZCBndWlkZVxyXG4gICAgICAgIHRoaXMudXBkYXRlR3VpbGRHdWlkZVRleHQoXCJMZSBjb21iYXQgZmFpdCByYWdlICEgUmVnYXJkZXogY2VzIG1vdXZlbWVudHMgw6lwaXF1ZXMgIVwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW5jZXIgbGVzIGFjdGlvbnMgZGUgY29tYmF0XHJcbiAgICAgICAgdGhpcy5leGVjdXRlRXBpY0NvbWJhdFNlcXVlbmNlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4ZWN1dGVFcGljQ29tYmF0U2VxdWVuY2UoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ2hhcmFjdGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1jaGFyYWN0ZXItM2QnKSk7XHJcbiAgICAgICAgY29uc3QgZW5lbXlDaGFyYWN0ZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2hhcmFjdGVyLTNkJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwbGF5ZXJDaGFyYWN0ZXJzLmxlbmd0aCA9PT0gMCB8fCBlbmVteUNoYXJhY3RlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfimqDvuI8gUGFzIGRlIHBlcnNvbm5hZ2VzIHRyb3V2w6lzIHBvdXIgbGUgY29tYmF0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGFjdGlvbkluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBleGVjdXRlTmV4dEFjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbkluZGV4ID49IDEyKSB7IC8vIDEyIGFjdGlvbnMgZGUgY29tYmF0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEVwaWNDb21iYXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hvaXNpciB1biBhdHRhcXVhbnQgZXQgdW5lIGNpYmxlIGFsw6lhdG9pcmVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENoYXJhY3RlcnMgPSBbLi4ucGxheWVyQ2hhcmFjdGVycywgLi4uZW5lbXlDaGFyYWN0ZXJzXTtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrZXIgPSBhbGxDaGFyYWN0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbENoYXJhY3RlcnMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaG9pc2lyIHVuZSBjaWJsZSBkZSBsJ8OpcXVpcGUgYWR2ZXJzZVxyXG4gICAgICAgICAgICBjb25zdCBpc1BsYXllckF0dGFja2VyID0gYXR0YWNrZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItY2hhcmFjdGVyLTNkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbFRhcmdldHMgPSBpc1BsYXllckF0dGFja2VyID8gZW5lbXlDaGFyYWN0ZXJzIDogcGxheWVyQ2hhcmFjdGVycztcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcG90ZW50aWFsVGFyZ2V0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGF0dGFja2VyICYmIHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgdHlwZSBkJ2FjdGlvbiBzZWxvbiBsZSByw7RsZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrZXJSb2xlID0gYXR0YWNrZXIuZGF0YXNldC5yb2xlIHx8ICd0YW5rJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSB0aGlzLmdldEFjdGlvblR5cGVCeVJvbGUoYXR0YWNrZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRXjDqWN1dGVyIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJhdDNELmFuaW1hdGVDaGFyYWN0ZXJBY3Rpb24oYXR0YWNrZXIsIHRhcmdldCwgYWN0aW9uVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnYWZmaWNoYWdlIGQnYWN0aW9uIGNlbnRyYWxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRyYWxBY3Rpb25EaXNwbGF5KGF0dGFja2VyLCB0YXJnZXQsIGFjdGlvblR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhY3Rpb25JbmRleCsrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUHJvZ3JhbW1lciBsYSBwcm9jaGFpbmUgYWN0aW9uIHNlbG9uIGxhIHZpdGVzc2VcclxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSAyNTAwIC8gKHRoaXMuY29tYmF0U3BlZWQgfHwgMik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZXhlY3V0ZU5leHRBY3Rpb24sIGRlbGF5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV4ZWN1dGVOZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFjdGlvblR5cGVCeVJvbGUocm9sZSkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRhbms6IFsncGh5c2ljYWxfYXR0YWNrJywgJ2RlZmVuZCddLFxyXG4gICAgICAgICAgICBkcHM6IFsncGh5c2ljYWxfYXR0YWNrJywgJ3BoeXNpY2FsX2F0dGFjayddLCAvLyBQbHVzIGQnYXR0YXF1ZXNcclxuICAgICAgICAgICAgc3VwcG9ydDogWydoZWFsJywgJ21hZ2ljX3NwZWxsJ11cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJvbGVBY3Rpb25zID0gYWN0aW9uc1tyb2xlXSB8fCBhY3Rpb25zLnRhbms7XHJcbiAgICAgICAgcmV0dXJuIHJvbGVBY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvbGVBY3Rpb25zLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVDZW50cmFsQWN0aW9uRGlzcGxheShhdHRhY2tlciwgdGFyZ2V0LCBhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tZGlzcGxheScpO1xyXG4gICAgICAgIGlmICghYWN0aW9uRGlzcGxheSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGF0dGFja2VyTmFtZSA9IGF0dGFja2VyLmRhdGFzZXQubmFtZSB8fCAnQ29tYmF0dGFudCc7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TmFtZSA9IHRhcmdldC5kYXRhc2V0Lm5hbWUgfHwgJ0NpYmxlJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhY3Rpb25UZXh0ID0gdGhpcy5nZXRBY3Rpb25UZXh0KGFjdGlvblR5cGUsIGF0dGFja2VyTmFtZSwgdGFyZ2V0TmFtZSk7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uSWNvbiA9IHRoaXMuZ2V0QWN0aW9uSWNvbihhY3Rpb25UeXBlKTtcclxuICAgICAgICBcclxuICAgICAgICBhY3Rpb25EaXNwbGF5LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1hbm5vdW5jZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24taWNvblwiPiR7YWN0aW9uSWNvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tdGV4dFwiPiR7YWN0aW9uVGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBhY3Rpb25EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfSwgMTgwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFjdGlvblRleHQoYWN0aW9uVHlwZSwgYXR0YWNrZXIsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRzID0ge1xyXG4gICAgICAgICAgICBwaHlzaWNhbF9hdHRhY2s6IGAke2F0dGFja2VyfSBhdHRhcXVlICR7dGFyZ2V0fSAhYCxcclxuICAgICAgICAgICAgbWFnaWNfc3BlbGw6IGAke2F0dGFja2VyfSBsYW5jZSB1biBzb3J0IHN1ciAke3RhcmdldH0gIWAsXHJcbiAgICAgICAgICAgIGhlYWw6IGAke2F0dGFja2VyfSBzb2lnbmUgJHt0YXJnZXR9ICFgLFxyXG4gICAgICAgICAgICBkZWZlbmQ6IGAke2F0dGFja2VyfSBzZSBkw6lmZW5kICFgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGV4dHNbYWN0aW9uVHlwZV0gfHwgYCR7YXR0YWNrZXJ9IGFnaXQgc3VyICR7dGFyZ2V0fSAhYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0aW9uSWNvbihhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgICAgIHBoeXNpY2FsX2F0dGFjazogJ+KalO+4jycsXHJcbiAgICAgICAgICAgIG1hZ2ljX3NwZWxsOiAn4pqhJyxcclxuICAgICAgICAgICAgaGVhbDogJ/CfkponLFxyXG4gICAgICAgICAgICBkZWZlbmQ6ICfwn5uh77iPJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGljb25zW2FjdGlvblR5cGVdIHx8ICfimpTvuI8nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaW5pc2hFcGljQ29tYmF0KCkge1xyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIGxlIHZhaW5xdWV1ciBhbMOpYXRvaXJlbWVudCBwb3VyIGxhIGTDqW1vXHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJWaWN0b3J5ID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3dDb21iYXRSZXN1bHQoaXNQbGF5ZXJWaWN0b3J5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd0NvbWJhdFJlc3VsdChpc1ZpY3RvcnkpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbi1kaXNwbGF5Jyk7XHJcbiAgICAgICAgaWYgKCFhY3Rpb25EaXNwbGF5KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0SFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJhdC1yZXN1bHQgJHtpc1ZpY3RvcnkgPyAndmljdG9yeScgOiAnZGVmZWF0J31cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaWNvblwiPiR7aXNWaWN0b3J5ID8gJ/Cfj4YnIDogJ/CfkoAnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC10aXRsZVwiPiR7aXNWaWN0b3J5ID8gJ1ZJQ1RPSVJFIScgOiAnRMOJRkFJVEUnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1zdWJ0aXRsZVwiPiR7aXNWaWN0b3J5ID8gJ1ZvcyBjaGFtcGlvbnMgdHJpb21waGVudCAhJyA6ICdWb3MgY2hhbXBpb25zIHNvbnQgdG9tYsOpcy4uLid9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWN0aW9uRGlzcGxheS5pbm5lckhUTUwgPSByZXN1bHRIVE1MO1xyXG4gICAgICAgIGFjdGlvbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycsICdmaW5hbC1yZXN1bHQnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSBndWlsZCBndWlkZVxyXG4gICAgICAgIHRoaXMudXBkYXRlR3VpbGRHdWlkZVRleHQoaXNWaWN0b3J5ID8gXHJcbiAgICAgICAgICAgIFwiTWFnbmlmaXF1ZSB2aWN0b2lyZSAhIFZvcyBzdHJhdMOpZ2llcyBwb3J0ZW50IGxldXJzIGZydWl0cyAhXCIgOiBcclxuICAgICAgICAgICAgXCJVbmUgZMOpZmFpdGUgaG9ub3JhYmxlLi4uIEFuYWx5c2V6IHZvcyBlcnJldXJzIHBvdXIgdm91cyBhbcOpbGlvcmVyICFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbCdvdmVybGF5IGRlIHZpY3RvaXJlIG91IGTDqWZhaXRlIChTQU5TIEFVVE8tRkVSTUVUVVJFKVxyXG4gICAgICAgIGlmIChpc1ZpY3RvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QmF0dGxlZmllbGRWaWN0b3J5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QmF0dGxlZmllbGREZWZlYXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldHVwR3VpbGRHdWlkZUZvckNvbWJhdCgpIHtcclxuICAgICAgICBjb25zdCBndWlsZEd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLWd1aWxkLWd1aWRlJyk7XHJcbiAgICAgICAgY29uc3QgZ3VpZGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1aWRlLXRleHQtY29tYmF0Jyk7XHJcbiAgICAgICAgY29uc3QgZ3VpbGRCdWJibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpbGQtZ3VpZGUtYnViYmxlJyk7XHJcbiAgICAgICAgY29uc3QgZ3VpZGVBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3VpbGQtYXZhdGFyLWNvbWJhdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZ3VpbGRHdWlkZSB8fCAhZ3VpZGVUZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign4p2MIEd1aWRlIGRlIGd1aWxkZSBjb21iYXQgbm9uIHRyb3V2w6knKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJbWFnZXMgYWzDqWF0b2lyZXMgcG91ciBsZSBndWlkZVxyXG4gICAgICAgIGNvbnN0IGd1aWxkSW1hZ2VzID0gWydndWlsZDEucG5nJywgJ2d1aWxkMi5wbmcnLCAnZ3VpbGQzLnBuZycsICdndWlsZDQucG5nJ107XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGb25jdGlvbiBwb3VyIGNoYW5nZXIgZCdhdmF0YXJcclxuICAgICAgICBjb25zdCByb3RhdGVBdmF0YXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChndWlkZUF2YXRhcikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEltYWdlSW5kZXggPSAoY3VycmVudEltYWdlSW5kZXggKyAxKSAlIGd1aWxkSW1hZ2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGd1aWRlQXZhdGFyLnNyYyA9IGAvaW1hZ2VzLyR7Z3VpbGRJbWFnZXNbY3VycmVudEltYWdlSW5kZXhdfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBocmFzZXMgS2FhbWVsb3R0IHBvdXIgbGUgY29tYmF0XHJcbiAgICAgICAgY29uc3QgY29tYmF0UGhyYXNlcyA9IFtcclxuICAgICAgICAgICAgXCLimpTvuI8gUXVlIGxlIGNvbWJhdCBjb21tZW5jZSAhIE1vbnRyZXotbGV1ciBkZSBxdW9pIHZvdXMgw6p0ZXMgY2FwYWJsZSAhXCIsXHJcbiAgICAgICAgICAgIFwi8J+boe+4jyBDJ2VzdCBwYXMgc29yY2llciAhIElsIHN1ZmZpdCBkZSB0YXBlciBwbHVzIGZvcnQgcXVlIGwnZW5uZW1pICFcIixcclxuICAgICAgICAgICAgXCLimqEgQXR0ZW50aW9uICEgVW4gc29ydCBwdWlzc2FudCBhcnJpdmUgIVwiLFxyXG4gICAgICAgICAgICBcIvCfqbkgw4dhIGMnZXN0IGR1IGJvbiBzb2luICEgQ29tbWUgbWEgbcOocmUgbWUgZmFpc2FpdCAhXCIsXHJcbiAgICAgICAgICAgIFwi8J+PuSBUaXIgcHLDqWNpcyAhIEMnZXN0IMOnYSBsJ2V4cMOpcmllbmNlICFcIixcclxuICAgICAgICAgICAgXCLimpTvuI8gQ29tYmF0IMOpcGlxdWUgZW4gY291cnMuLi4gTmUgbMOiY2hleiByaWVuICFcIixcclxuICAgICAgICAgICAgXCLwn4+GIFZpY3RvaXJlICEgQ29tbWUgZCdoYWJpdHVkZSwgb24gYSDDqXTDqSBicmlsbGFudHMgIVwiLFxyXG4gICAgICAgICAgICBcIvCfkoAgRMOpZmFpdGUuLi4gQydlc3QgcGFzIGdyYXZlLCBvbiBmZXJhIG1pZXV4IGxhIHByb2NoYWluZSBmb2lzICFcIixcclxuICAgICAgICAgICAgXCLwn5SlIMOHYSBjaGF1ZmZlICEgTGUgY29tYmF0IHMnaW50ZW5zaWZpZSAhXCIsXHJcbiAgICAgICAgICAgIFwi4q2QIENvdXAgY3JpdGlxdWUgISDDh2EgYydlc3QgZGUgbGEgdGVjaG5pcXVlICFcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBocmFzZUluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50ZXIgdG91dGVzIGxlcyAzIHNlY29uZGVzXHJcbiAgICAgICAgY29uc3QgY29tbWVudEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGhyYXNlSW5kZXggPCBjb21iYXRQaHJhc2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZ3VpZGVUZXh0LnRleHRDb250ZW50ID0gY29tYmF0UGhyYXNlc1twaHJhc2VJbmRleF07XHJcbiAgICAgICAgICAgICAgICBwaHJhc2VJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2VyIGQnYXZhdGFyIMOgIGNoYXF1ZSBjb21tZW50YWlyZVxyXG4gICAgICAgICAgICAgICAgcm90YXRlQXZhdGFyKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkZSBsYSBidWxsZVxyXG4gICAgICAgICAgICAgICAgaWYgKGd1aWxkQnViYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpbGRCdWJibGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkZSBsJ2F2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChndWlkZUF2YXRhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWlkZUF2YXRhci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVBdmF0YXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvbW1lbnRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdG9ja2VyIGwnSUQgZGUgbCdpbnRlcnZhbGxlIGRhbnMgbGUgbW9kYWwgcG91ciBsZSBuZXR0b3llciBwbHVzIHRhcmRcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVmaWVsZC1tb2RhbCcpO1xyXG4gICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICBtb2RhbC5kYXRhc2V0LmNvbW1lbnRJbnRlcnZhbCA9IGNvbW1lbnRJbnRlcnZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGEgYnVsbGUgZMOocyBsZSBkw6lwYXJ0XHJcbiAgICAgICAgaWYgKGd1aWxkQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3VpbGRCdWJibGUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlR3VpbGRHdWlkZVRleHQodGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGd1aWRlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNndWlkZS10ZXh0Jyk7XHJcbiAgICAgICAgaWYgKGd1aWRlVGV4dCkge1xyXG4gICAgICAgICAgICBndWlkZVRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gVVRJTElUQUlSRVMgREUgUExBVEVBVSA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgZGV0ZXJtaW5lUGxhdGVhdVR5cGUobWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgLy8gQWzDqWF0b2lyZW1lbnQgY2hvaXNpciBlbnRyZSBtZWRpZXZhbCBldCBkeXN0b3BpYW5cclxuICAgICAgICBjb25zdCBwbGF0ZWF1VHlwZXMgPSBbJ21lZGlldmFsJywgJ2R5c3RvcGlhbiddO1xyXG4gICAgICAgIHJldHVybiBwbGF0ZWF1VHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhdGVhdVR5cGVzLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXN1bWVCYWNrZ3JvdW5kVmlkZW8oKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bZGF0YS13YXMtcGxheWluZz1cInRydWVcIl0nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgdmlkZW8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXdhcy1wbGF5aW5nJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyk7XHJcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmRhdGFzZXQud2FzUGxheWluZyA9ICd0cnVlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBBTkNJRU5ORSBNw4lUSE9ERSBERSBURVNUICjDgCBDT05TRVJWRVIpID09PT09PT09PT09PT09PVxyXG4gICAgdGVzdEJhdHRsZWZpZWxkVmlzdWFsaXphdGlvbigpIHtcclxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNoYXJhY3Rlci1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbGVtZW50ID8gbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgOiAnRmlnaHRlcic7XHJcbiAgICAgICAgY29uc3QgdGVhbUNvbG9yID0gdGVhbVR5cGUgPT09ICdwbGF5ZXInID8gJyM0Q0FGNTAnIDogJyNGNDQzMzYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBkdSBwZXJzb25uYWdlIGRlcHVpcyBsYSBjYXJ0ZSBkZSBtYW5pw6hyZSBzw6ljdXJpc8OpZVxyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJEYXRhID0ge307XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YSA9IEpTT04ucGFyc2UoY2FyZC5kYXRhc2V0LmNoYXJhY3RlciB8fCBjYXJkLmRhdGFzZXQuY2hhcmFjdGVyRGF0YSB8fCAne30nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGR1IHBhcnNpbmcgZGVzIGRvbm7DqWVzIGRlIHBlcnNvbm5hZ2U6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZUVsZW1lbnQ/LnRleHRDb250ZW50IHx8ICdGaWdodGVyJyxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICd3YXJyaW9yJyxcclxuICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgICAgIGF0dGFjazogNTBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgcm9sZSA9IGNoYXJhY3RlckRhdGEucm9sZSB8fCAnd2Fycmlvcic7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVySW1hZ2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jaGFyYWN0ZXItYXZhdGFyIGltZycpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gY2hhcmFjdGVySW1hZ2UgPyBjaGFyYWN0ZXJJbWFnZS5zcmMgOiBgL2ltYWdlcy9jaGFyYWN0ZXJzLyR7dGhpcy5nZXRDaGFyYWN0ZXJJbWFnZUJ5Um9sZShyb2xlKX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNoYXJhY3Rlci5jbGFzc05hbWUgPSBgYmF0dGxlZmllbGQtY2hhcmFjdGVyICR7dGVhbVR5cGV9LWNoYXJhY3RlciAke3JvbGV9LWNoYXJhY3RlcmA7XHJcbiAgICAgICAgY2hhcmFjdGVyLmRhdGFzZXQucm9sZSA9IHJvbGU7XHJcbiAgICAgICAgY2hhcmFjdGVyLmRhdGFzZXQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgY2hhcmFjdGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1tb2RlbFwiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOiAke3RlYW1Db2xvcn1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVNyY31cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjaGFyYWN0ZXItaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1uYW1lLXRhZ1wiPiR7bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItaGVhbHRoLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC1maWxsXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3RlYW1Db2xvcn1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGgtdGV4dFwiPiR7Y2hhcmFjdGVyRGF0YS5ocCB8fCAxNTB9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlQ2FyZFRvUG9zaXRpb24oY2FyZCwgcG9zaXRpb24sIGNoYXJhY3Rlcikge1xyXG4gICAgICAgIC8vIE9idGVuaXIgbGVzIHBvc2l0aW9ucyBwb3VyIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgY29uc3QgY2FyZFJlY3QgPSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uUmVjdCA9IHBvc2l0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyw6llciB1biBjbG9uZSBwb3VyIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBjYXJkLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBjbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgY2xvbmUuc3R5bGUudG9wID0gY2FyZFJlY3QudG9wICsgJ3B4JztcclxuICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gY2FyZFJlY3QubGVmdCArICdweCc7XHJcbiAgICAgICAgY2xvbmUuc3R5bGUud2lkdGggPSBjYXJkUmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gY2FyZFJlY3QuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBjbG9uZS5zdHlsZS56SW5kZXggPSAnOTk5OSc7XHJcbiAgICAgICAgY2xvbmUuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMS41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1hc3F1ZXIgbGEgY2FydGUgb3JpZ2luYWxlXHJcbiAgICAgICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWVyIHZlcnMgbGEgcG9zaXRpb25cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS50b3AgPSBwb3NpdGlvblJlY3QudG9wICsgcG9zaXRpb25SZWN0LmhlaWdodCAvIDIgLSBjYXJkUmVjdC5oZWlnaHQgLyAyICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUubGVmdCA9IHBvc2l0aW9uUmVjdC5sZWZ0ICsgcG9zaXRpb25SZWN0LndpZHRoIC8gMiAtIGNhcmRSZWN0LndpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjYpJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZW1wbGFjZXIgcGFyIGxlIHBlcnNvbm5hZ2UgYXByw6hzIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb25lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbi5hcHBlbmRDaGlsZChjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2NoYXJhY3Rlci1hcHBlYXIgMC44cyBlYXNlLW91dCc7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJhdHRsZWZpZWxkQ29tYmF0KG1hdGNoRGF0YSwgc3BlZWQpIHtcclxuICAgICAgICAvLyBTaW11bGF0aW9uIGQnw6l2w6luZW1lbnRzIGRlIGNvbWJhdCBhdmVjIGFuaW1hdGlvbnMgw6lwaXF1ZXNcclxuICAgICAgICBjb25zdCBldmVudHMgPSBtYXRjaERhdGEuZXZlbnRzIHx8IHRoaXMuZ2VuZXJhdGVFcGljQ29tYmF0RXZlbnRzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfjq4gRMOpbWFycmFnZSBkdSBjb21iYXQgw6lwaXF1ZSBzdXIgbGUgY2hhbXAgZGUgYmF0YWlsbGUhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KaoSBWaXRlc3NlOicsIHNwZWVkICsgJ3gnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZSBkZSBkw6lidXQgZGUgY29tYmF0XHJcbiAgICAgICAgdGhpcy5zaG93S2FhbWVsb3R0Q29tbWVudCgnc3RhcnQnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaW11bGVyIGxlIGNvbWJhdCBhdmVjIGRlcyBlZmZldHMgdmlzdWVscyDDqXBpcXVlc1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdGVFcGljQmF0dGxlZmllbGRFdmVudHMoZXZlbnRzLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2ltdWxhdGVFcGljQmF0dGxlZmllbGRFdmVudHMoZXZlbnRzLCBzcGVlZCkge1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWVmZmVjdHMnKTtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWJhdC1hbmltYXRpb25zJyk7XHJcbiAgICAgICAgbGV0IGV2ZW50SW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NOZXh0RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudEluZGV4ID49IGV2ZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIExlIGNvbWJhdCBlc3QgdGVybWluw6ksIGxhIGZpbiBzZXJhIGfDqXLDqWUgcGFyIGZpbmlzaEVwaWNDb21iYXQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tldmVudEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXBpY0JhdHRsZWZpZWxkRWZmZWN0KGV2ZW50LCBlZmZlY3RzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5RXBpY0FuaW1hdGlvbihldmVudCwgYW5pbWF0aW9uc0NvbnRhaW5lciwgc3BlZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29tbWVudGFpcmUgZHUgR3VpbGQgR3VpZGUgc2Vsb24gbCdhY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5zaG93S2FhbWVsb3R0Q29tbWVudChldmVudC50eXBlIHx8ICdhdHRhY2snKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGV2ZW50SW5kZXgrKztcclxuICAgICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzTmV4dEV2ZW50LCAoMjAwMCAvIHNwZWVkKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBwcm9jZXNzTmV4dEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEZPTkNUSU9OUyBEJ0VGRkVUUyBTUMOJQ0lBVVggPT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGNyZWF0ZVNsYXNoRWZmZWN0KHRhcmdldCwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGFzaC5jbGFzc05hbWUgPSAnc2xhc2gtZWZmZWN0JztcclxuICAgICAgICBzbGFzaC5pbm5lckhUTUwgPSAn4pqh8J+SpeKaoSc7XHJcbiAgICAgICAgc2xhc2guc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHNsYXNoLnN0eWxlLmZvbnRTaXplID0gJzNyZW0nO1xyXG4gICAgICAgIHNsYXNoLnN0eWxlLmNvbG9yID0gJyNmZjZiNmInO1xyXG4gICAgICAgIHNsYXNoLnN0eWxlLmFuaW1hdGlvbiA9ICdzbGFzaEFuaW1hdGlvbiAwLjVzIGVhc2Utb3V0JztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgc2xhc2guc3R5bGUubGVmdCA9IChyZWN0LmxlZnQgLSBjb250YWluZXJSZWN0LmxlZnQpICsgJ3B4JztcclxuICAgICAgICBzbGFzaC5zdHlsZS50b3AgPSAocmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGFzaCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzbGFzaC5yZW1vdmUoKSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaGllbGRFZmZlY3QoZGVmZW5kZXIsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHNoaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNoaWVsZC5jbGFzc05hbWUgPSAnc2hpZWxkLWVmZmVjdCc7XHJcbiAgICAgICAgc2hpZWxkLmlubmVySFRNTCA9ICfwn5uh77iP4pyo8J+boe+4jyc7XHJcbiAgICAgICAgc2hpZWxkLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBzaGllbGQuc3R5bGUuZm9udFNpemUgPSAnMi41cmVtJztcclxuICAgICAgICBzaGllbGQuc3R5bGUuY29sb3IgPSAnZ29sZCc7XHJcbiAgICAgICAgc2hpZWxkLnN0eWxlLmFuaW1hdGlvbiA9ICdzaGllbGRBbmltYXRpb24gMC44cyBlYXNlLW91dCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGRlZmVuZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgc2hpZWxkLnN0eWxlLmxlZnQgPSAocmVjdC5sZWZ0IC0gY29udGFpbmVyUmVjdC5sZWZ0KSArICdweCc7XHJcbiAgICAgICAgc2hpZWxkLnN0eWxlLnRvcCA9IChyZWN0LnRvcCAtIGNvbnRhaW5lclJlY3QudG9wKSArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaWVsZCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaGllbGQucmVtb3ZlKCksIDgwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWFnaWNFZmZlY3QobWFnZSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWFnaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYWdpYy5jbGFzc05hbWUgPSAnbWFnaWMtZWZmZWN0JztcclxuICAgICAgICBtYWdpYy5pbm5lckhUTUwgPSAn4pqh8J+UruKcqPCfjJ/imqEnO1xyXG4gICAgICAgIG1hZ2ljLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBtYWdpYy5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcclxuICAgICAgICBtYWdpYy5zdHlsZS5jb2xvciA9ICcjOWI1OWI2JztcclxuICAgICAgICBtYWdpYy5zdHlsZS5hbmltYXRpb24gPSAnbWFnaWNBbmltYXRpb24gMXMgZWFzZS1vdXQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBtYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbWFnaWMuc3R5bGUubGVmdCA9IChyZWN0LmxlZnQgLSBjb250YWluZXJSZWN0LmxlZnQpICsgJ3B4JztcclxuICAgICAgICBtYWdpYy5zdHlsZS50b3AgPSAocmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWdpYyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtYWdpYy5yZW1vdmUoKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSGVhbEVmZmVjdChoZWFsZXIsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGhlYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFsLmNsYXNzTmFtZSA9ICdoZWFsLWVmZmVjdCc7XHJcbiAgICAgICAgaGVhbC5pbm5lckhUTUwgPSAn8J+SmuKcqPCfjJ/inKjwn5KaJztcclxuICAgICAgICBoZWFsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBoZWFsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xyXG4gICAgICAgIGhlYWwuc3R5bGUuY29sb3IgPSAnIzJlY2M3MSc7XHJcbiAgICAgICAgaGVhbC5zdHlsZS5hbmltYXRpb24gPSAnaGVhbEFuaW1hdGlvbiAxLjJzIGVhc2Utb3V0JztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZWN0ID0gaGVhbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaGVhbC5zdHlsZS5sZWZ0ID0gKHJlY3QubGVmdCAtIGNvbnRhaW5lclJlY3QubGVmdCkgKyAncHgnO1xyXG4gICAgICAgIGhlYWwuc3R5bGUudG9wID0gKHJlY3QudG9wIC0gY29udGFpbmVyUmVjdC50b3ApICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhbCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBoZWFsLnJlbW92ZSgpLCAxMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycywgdGVhbSA9IG51bGwsIHJvbGUgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBBcnJheS5mcm9tKGNoYXJhY3RlcnMpLmZpbHRlcihjaGFyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlc1RlYW0gPSAhdGVhbSB8fCBjaGFyLmNsYXNzTGlzdC5jb250YWlucyhgJHt0ZWFtfS1jaGFyYWN0ZXJgKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlc1JvbGUgPSAhcm9sZSB8fCBjaGFyLmNsYXNzTGlzdC5jb250YWlucyhgJHtyb2xlfS1jaGFyYWN0ZXJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNUZWFtICYmIG1hdGNoZXNSb2xlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZC5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZmZlY3RJY29uKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgJ2F0dGFjayc6ICfimpTvuI/wn5KlJyxcclxuICAgICAgICAgICAgJ2RlZmVuc2UnOiAn8J+boe+4j+KcqCcsXHJcbiAgICAgICAgICAgICdtYWdpYyc6ICfwn5Su4pqhJyxcclxuICAgICAgICAgICAgJ2hlYWwnOiAn8J+SmuKcqCcsXHJcbiAgICAgICAgICAgICdjcml0aWNhbCc6ICfwn5Kl8J+UpScsXHJcbiAgICAgICAgICAgICdtaXNzJzogJ/Cfkqjwn5G7J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGljb25zW3R5cGVdIHx8ICfimpTvuI8nO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRXBpY0NvbWJhdEV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIuKalO+4jyBMZSBjb21iYXQgY29tbWVuY2UgIVwiLCB0eXBlOiAnc3RhcnQnIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+boe+4jyBMZSBQYWxhZGluIGNoYXJnZSBicmF2ZW1lbnQgIVwiLCB0eXBlOiAnYXR0YWNrJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfj7kgTCdBcmNoZXIgcmlwb3N0ZSBhdmVjIHByw6ljaXNpb24gIVwiLCB0eXBlOiAnYXR0YWNrJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIuKaoSBMZSBNYWdlIGxhbmNlIHVuIHNvcnQgZMOpdmFzdGF0ZXVyICFcIiwgdHlwZTogJ21hZ2ljJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfm6HvuI8gQmVsbGUgcGFyYWRlIGR1IGTDqWZlbnNldXIgIVwiLCB0eXBlOiAnZGVmZW5zZScgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn6m5IFNvaW5zIG1pcmFjdWxldXggZHUgR3XDqXJpc3NldXIgIVwiLCB0eXBlOiAnaGVhbCcgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn5SlIExlIEJlcnNlcmtlciBlbnRyZSBlbiByYWdlICFcIiwgdHlwZTogJ2F0dGFjaycgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn4yfIFNvcnQgZGUgcHJvdGVjdGlvbiBtYWdpcXVlICFcIiwgdHlwZTogJ21hZ2ljJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIuKalO+4jyBDb21ibyBkJ2F0dGFxdWVzIHNwZWN0YWN1bGFpcmVzICFcIiwgdHlwZTogJ2F0dGFjaycgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn4+GIENvbWJhdCDDqXBpcXVlIHRlcm1pbsOpICFcIiwgdHlwZTogJ3ZpY3RvcnknIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcGljQmF0dGxlZmllbGRFZmZlY3QoZXZlbnQsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWZmZWN0SWNvbiA9IHRoaXMuZ2V0RWZmZWN0SWNvbihldmVudC50eXBlKTtcclxuICAgICAgICBjb25zdCBlZmZlY3RDbGFzcyA9IGBlZmZlY3QtJHtldmVudC50eXBlfWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWZmZWN0LmNsYXNzTmFtZSA9IGBjb21iYXQtZWZmZWN0LWFuaW1hdGlvbiAke2VmZmVjdENsYXNzfWA7XHJcbiAgICAgICAgZWZmZWN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVmZmVjdC1pY29uXCI+JHtlZmZlY3RJY29ufTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWZmZWN0LXRleHRcIj4ke2V2ZW50LmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWZmZWN0LXBhcnRpY2xlc1wiPjwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVmZmVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmV0aXJlciBsJ2VmZmV0IGFwcsOocyBhbmltYXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVmZmVjdC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5RXBpY0FuaW1hdGlvbihldmVudCwgY29udGFpbmVyLCBzcGVlZCkge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXR0bGVmaWVsZC1jaGFyYWN0ZXInKTtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25UeXBlID0gZXZlbnQudHlwZSB8fCAnYXR0YWNrJztcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYXR0YWNrJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUF0dGFjayhjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWZlbnNlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZURlZmVuc2UoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFnaWMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlTWFnaWMoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaGVhbCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVIZWFsKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVHZW5lcmljKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlQXR0YWNrKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpIHtcclxuICAgICAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuZ2V0UmFuZG9tQ2hhcmFjdGVyKGNoYXJhY3RlcnMsICdwbGF5ZXInKTtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmdldFJhbmRvbUNoYXJhY3RlcihjaGFyYWN0ZXJzLCAnZW5lbXknKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXR0YWNrZXIgJiYgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkJ2F0dGFxdWVcclxuICAgICAgICAgICAgYXR0YWNrZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMikgdHJhbnNsYXRlWCgyMHB4KSc7XHJcbiAgICAgICAgICAgIGF0dGFja2VyLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7MC4zIC8gc3BlZWR9cyBlYXNlLW91dGA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC45KSB0cmFuc2xhdGVYKC0xMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMC43KSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEVmZmV0IGRlIGNvdXBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2xhc2hFZmZlY3QodGFyZ2V0LCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tlci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmZpbHRlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwIC8gc3BlZWQpO1xyXG4gICAgICAgICAgICB9LCAyMDAgLyBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVEZWZlbnNlKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpIHtcclxuICAgICAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMuZ2V0UmFuZG9tQ2hhcmFjdGVyKGNoYXJhY3RlcnMsICdwbGF5ZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGVmZW5kZXIpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIGTDqWZlbnNlIGF2ZWMgYm91Y2xpZXJcclxuICAgICAgICAgICAgZGVmZW5kZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xyXG4gICAgICAgICAgICBkZWZlbmRlci5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxLjMpIGRyb3Atc2hhZG93KDAgMCAyMHB4IGdvbGQpJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpZWxkRWZmZWN0KGRlZmVuZGVyLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWZlbmRlci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgIGRlZmVuZGVyLnN0eWxlLmZpbHRlciA9ICcnO1xyXG4gICAgICAgICAgICB9LCA4MDAgLyBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVNYWdpYyhjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKSB7XHJcbiAgICAgICAgY29uc3QgbWFnZSA9IHRoaXMuZ2V0UmFuZG9tQ2hhcmFjdGVyKGNoYXJhY3RlcnMsIG51bGwsICdtYWdlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1hZ2UpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIG1hZ2llXHJcbiAgICAgICAgICAgIG1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMTUpIHRyYW5zbGF0ZVkoLTEwcHgpJztcclxuICAgICAgICAgICAgbWFnZS5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxLjUpIGRyb3Atc2hhZG93KDAgMCAzMHB4IHB1cnBsZSknO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNYWdpY0VmZmVjdChtYWdlLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbWFnZS5zdHlsZS5maWx0ZXIgPSAnJztcclxuICAgICAgICAgICAgfSwgMTAwMCAvIHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZUhlYWwoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWxlciA9IHRoaXMuZ2V0UmFuZG9tQ2hhcmFjdGVyKGNoYXJhY3RlcnMsICdwbGF5ZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaGVhbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkZSBzb2luXHJcbiAgICAgICAgICAgIGhlYWxlci5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxLjgpIGRyb3Atc2hhZG93KDAgMCAyNXB4IGxpZ2h0Z3JlZW4pJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSGVhbEVmZmVjdChoZWFsZXIsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBiYXJyZSBkZSB2aWVcclxuICAgICAgICAgICAgY29uc3QgaGVhbHRoQmFyID0gaGVhbGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFsdGgtZmlsbCcpO1xyXG4gICAgICAgICAgICBpZiAoaGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFsdGhCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGVhbGVyLnN0eWxlLmZpbHRlciA9ICcnO1xyXG4gICAgICAgICAgICB9LCAxMjAwIC8gc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlR2VuZXJpYyhjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gdGhpcy5nZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgfSwgNDAwIC8gc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURlbW9Db21iYXRFdmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCJMZSBjb21iYXQgY29tbWVuY2UhXCIgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCJHdWVycmllciBhdHRhcXVlIGF2ZWMgc29uIMOpcMOpZSFcIiB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIk1hZ2UgbGFuY2UgdW4gc29ydCBkZSBmZXUhXCIgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCJMJ2FyY2hlciB2aXNlIGF2ZWMgcHLDqWNpc2lvbiFcIiB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIkNvbWJhdCDDqXBpcXVlIGVuIGNvdXJzLi4uXCIgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCJWaWN0b2lyZSFcIiB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QmF0dGxlZmllbGRWaWN0b3J5KCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgaWYgKCFtb2RhbCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHZpY3RvcnlPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmljdG9yeU92ZXJsYXkuY2xhc3NOYW1lID0gJ2JhdHRsZWZpZWxkLXZpY3Rvcnktb3ZlcmxheSc7XHJcbiAgICAgICAgdmljdG9yeU92ZXJsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+8J+PhiBWSUNUT0lSRSEg8J+PhjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db21iYXQgdGVybWluw6kgYXZlYyBzdWNjw6hzITwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmljdG9yeS1idG4gcHJpbWFyeVwiIG9uY2xpY2s9XCJ0aGlzLmNsb3Nlc3QoJy5iYXR0bGVmaWVsZC1tb2RhbCcpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1iYXR0bGVmaWVsZCcpLmNsaWNrKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pyFIEZlcm1lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2aWN0b3J5LWJ0biBzZWNvbmRhcnlcIiBvbmNsaWNrPVwicnVuQ29tcGxldGVUZXN0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UhCBOb3V2ZWF1IHRlc3RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHZpY3RvcnlPdmVybGF5KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZSBkZSB2aWN0b2lyZVxyXG4gICAgICAgIHRoaXMuc2hvd0thYW1lbG90dENvbW1lbnQoJ3ZpY3RvcnknKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QmF0dGxlZmllbGREZWZlYXQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKTtcclxuICAgICAgICBpZiAoIW1vZGFsKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGVmZWF0T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRlZmVhdE92ZXJsYXkuY2xhc3NOYW1lID0gJ2JhdHRsZWZpZWxkLWRlZmVhdC1vdmVybGF5JztcclxuICAgICAgICBkZWZlYXRPdmVybGF5LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmVhdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+8J+SgCBEw4lGQUlURSDwn5KAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkNlIG4nZXN0IHF1ZSBwYXJ0aWUgcmVtaXNlICE8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmZWF0LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVmZWF0LWJ0biBwcmltYXJ5XCIgb25jbGljaz1cInRoaXMuY2xvc2VzdCgnLmJhdHRsZWZpZWxkLW1vZGFsJykucXVlcnlTZWxlY3RvcignLmNsb3NlLWJhdHRsZWZpZWxkJykuY2xpY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDinIUgRmVybWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlZmVhdC1idG4gc2Vjb25kYXJ5XCIgb25jbGljaz1cInJ1bkNvbXBsZXRlVGVzdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIPCflIQgTm91dmVhdSB0ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkZWZlYXRPdmVybGF5KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZSBkZSBkw6lmYWl0ZVxyXG4gICAgICAgIHRoaXMuc2hvd0thYW1lbG90dENvbW1lbnQoJ2RlZmVhdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBGT05DVElPTiBERSBURVNUIFBPVVIgTEUgQkFUVExFRklFTEQgPT09PT09PT09PT09PT09XHJcbiAgICB0ZXN0QmF0dGxlZmllbGRWaXN1YWxpemF0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn46uIFRlc3QgZGUgbGEgdmlzdWFsaXNhdGlvbiBiYXR0bGVmaWVsZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERvbm7DqWVzIGRlIHRlc3Qgc2ltdWzDqWVzIGF2ZWMgdnJhaWVzIGNsYXNzZXNcclxuICAgICAgICBjb25zdCBtb2NrTWF0Y2hEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogJ3Rlc3QtMTIzJyxcclxuICAgICAgICAgICAgdGVhbV9hOiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXI6ICdWb3VzJyxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdQYWxhZGluIERpdmluJywgcm9sZTogJ3RhbmsnLCBsZXZlbDogMjAsIGhwOiAyNTAsIGF0dGFjazogOTAsIGltYWdlOiAncGFsYWRpbi5wbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTWFnZSBkZSBGZXUnLCByb2xlOiAnbWFnZScsIGxldmVsOiAxOCwgaHA6IDE1MCwgYXR0YWNrOiAxODAsIGltYWdlOiAnbWFnZS5wbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnUHLDqnRyZSBHdcOpcmlzc2V1cicsIHJvbGU6ICdwcmllc3QnLCBsZXZlbDogMTYsIGhwOiAxMzAsIGF0dGFjazogNzAsIGltYWdlOiAncHJpZXN0LnBuZycgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZWFtX2I6IHtcclxuICAgICAgICAgICAgICAgIHBsYXllcjogJ0FkdmVyc2FpcmUgUmVkb3V0YWJsZScsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnR3VlcnJpZXIgQmVyc2Vya2VyJywgcm9sZTogJ3dhcnJpb3InLCBsZXZlbDogMTksIGhwOiAyMDAsIGF0dGFjazogMTYwLCBpbWFnZTogJ3dhcnJpb3IucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FyY2hlciBQcsOpY2lzJywgcm9sZTogJ2FyY2hlcicsIGxldmVsOiAxNywgaHA6IDE0MCwgYXR0YWNrOiAxMzAsIGltYWdlOiAnYXJjaGVyLnBuZycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdBc3Nhc3NpbiBGdXJ0aWYnLCByb2xlOiAnYXNzYXNzaW4nLCBsZXZlbDogMjEsIGhwOiAxODAsIGF0dGFjazogMTAwLCBpbWFnZTogJ2Fzc2Fzc2luLnBuZycgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi4pqU77iPIExlIGNvbWJhdCBjb21tZW5jZSAhXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+boe+4jyBQYWxhZGluIGNoYXJnZSB2ZXJzIGwnZW5uZW1pICFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn4+5IEwnQXJjaGVyIHJpcG9zdGUgYXZlYyBwcsOpY2lzaW9uICFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLimqEgU29yY2llciBsYW5jZSB1biBzb3J0IGTDqXZhc3RhdGV1ciAhXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+puSBHdcOpcmlzc2V1ciBzb2lnbmUgc2VzIGFsbGnDqXMgIVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCflKUgQmVyc2Vya2VyIGVudHJlIGVuIHJhZ2UgIVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfjL8gRHJ1aWRlIGludm9xdWUgbGEgbmF0dXJlICFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLimpTvuI8gQ29tYmF0IMOpcGlxdWUgZW4gY291cnMuLi5cIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn4+GIFZpY3RvaXJlIGjDqXJvw69xdWUgIVwiIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTGFuY2VyIGxhIHZpc3VhbGlzYXRpb24gYXZlYyBsZXMgZG9ubsOpZXMgZGUgdGVzdFxyXG4gICAgICAgIHRoaXMuZGlzcGxheUNvbWJhdFZpc3VhbGl6YXRpb25Nb2RhbChtb2NrTWF0Y2hEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUJhY2tncm91bmRWaWRlbygpIHtcclxuICAgICAgICAvLyBTdG9wcGVyIHRvdXRlcyBsZXMgdmlkw6lvcyBkZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bYXV0b3BsYXldJyk7XHJcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xyXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3BwZXIgbGVzIGFuaW1hdGlvbnMgQ1NTIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC1iZywgLmdyYWRpZW50LWFuaW1hdGlvbicpO1xyXG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncGF1c2VkJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bWVCYWNrZ3JvdW5kVmlkZW8oKSB7XHJcbiAgICAgICAgLy8gUmVwcmVuZHJlIHRvdXRlcyBsZXMgdmlkw6lvcyBkZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bYXV0b3BsYXldJyk7XHJcbiAgICAgICAgdmlkZW9zLmZvckVhY2godmlkZW8gPT4ge1xyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVwcmVuZHJlIGxlcyBhbmltYXRpb25zIENTU1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQtYmcsIC5ncmFkaWVudC1hbmltYXRpb24nKTtcclxuICAgICAgICBhbmltYXRlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gJ3J1bm5pbmcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUJhdHRsZWZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IGJhdHRsZWZpZWxkcyA9IFtcclxuICAgICAgICAgICAgLy8gUGxhdGVhdXggRHlzdG9waXF1ZXNcclxuICAgICAgICAgICAgJ3BsYXRlYXV4RHlzdG8vY2hhbXAgZGUgYmF0YWlsbGUgZHlzdG8ucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4RHlzdG8vY291cnMgbW9kZXJuZS5wbmcnLFxyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9wbGFjZSB2aWxsYWdlIG1vZGVybmUucG5nJyxcclxuICAgICAgICAgICAgLy8gUGxhdGVhdXggTcOpZGnDqXZhdXhcclxuICAgICAgICAgICAgJ3BsYXRlYXV4TWVkaWV2YWwvY2ltZXRpw6hyZS5wbmcnLFxyXG4gICAgICAgICAgICAncGxhdGVhdXhNZWRpZXZhbC9jb3VycyBkdSBjaGF0ZWF1LnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL3BsYWNlIGR1IHZpbGxhZ2UucG5nJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGJhdHRsZWZpZWxkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiYXR0bGVmaWVsZHMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVUZWFtQ2hhcmFjdGVycyh0ZWFtLCB0ZWFtVHlwZSkge1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJzSFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb25zIGRlIHPDqWN1cml0w6kgcG91ciBsJ29iamV0IHRlYW1cclxuICAgICAgICBpZiAoIXRlYW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGDDiXF1aXBlICR7dGVhbVR5cGV9IG1hbnF1YW50ZSwgdXRpbGlzYXRpb24gZGVzIGRvbm7DqWVzIHBhciBkw6lmYXV0YCk7XHJcbiAgICAgICAgICAgIHRlYW0gPSB7IGNoYXJhY3RlcnM6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIG9uIGEgbGVzIHZyYWllcyBkb25uw6llcyBkZXMgcGVyc29ubmFnZXMsIG9uIGxlcyB1dGlsaXNlXHJcbiAgICAgICAgaWYgKHRlYW0uY2hhcmFjdGVycyAmJiBBcnJheS5pc0FycmF5KHRlYW0uY2hhcmFjdGVycykgJiYgdGVhbS5jaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGVhbS5jaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBQZXJzb25uYWdlICR7aW5kZXh9IG1hbnF1YW50IGRhbnMgbCfDqXF1aXBlICR7dGVhbVR5cGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJJbWFnZSA9IHRoaXMuZ2V0Q2hhcmFjdGVySW1hZ2UoY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVDbGFzcyA9IGNoYXJhY3Rlci5yb2xlID8gY2hhcmFjdGVyLnJvbGUudG9Mb3dlckNhc2UoKSA6ICdmaWdodGVyJztcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlnaHRlci1jYXJkXCIgaWQ9XCIke3RlYW1UeXBlfS1jaGFyLSR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2hhcmFjdGVySW1hZ2V9XCIgYWx0PVwiJHtjaGFyYWN0ZXIubmFtZSB8fCAnUGVyc29ubmFnZSd9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzcy1vdmVybGF5ICR7cm9sZUNsYXNzfVwiPiR7dGhpcy5nZXRSb2xlTmFtZShjaGFyYWN0ZXIucm9sZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gaHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2hhcmFjdGVyLmhwIHx8IDEwMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSBhdHRhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3dvcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2hhcmFjdGVyLmF0ayB8fCA1MH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ke2NoYXJhY3Rlci5uYW1lIHx8ICdIw6lyb3MnfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlnaHRlci1oZWFsdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGgtYmFyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGF2ZWMgZGVzIHBlcnNvbm5hZ2VzIHBhciBkw6lmYXV0XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDaGFyYWN0ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSMOpcm9zIDEnLCByb2xlOiAnd2FycmlvcicsIGhwOiAxMDAsIGF0azogNTAgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0jDqXJvcyAyJywgcm9sZTogJ21hZ2UnLCBocDogODAsIGF0azogNzAgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0jDqXJvcyAzJywgcm9sZTogJ2FyY2hlcicsIGhwOiA5MCwgYXRrOiA2MCB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0Q2hhcmFjdGVycy5mb3JFYWNoKChjaGFyYWN0ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJJbWFnZSA9IHRoaXMuZ2V0Q2hhcmFjdGVySW1hZ2UoY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVDbGFzcyA9IGNoYXJhY3Rlci5yb2xlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZ2h0ZXItY2FyZFwiIGlkPVwiJHt0ZWFtVHlwZX0tY2hhci0ke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlnaHRlci1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NoYXJhY3RlckltYWdlfVwiIGFsdD1cIiR7Y2hhcmFjdGVyLm5hbWV9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzcy1vdmVybGF5ICR7cm9sZUNsYXNzfVwiPiR7dGhpcy5nZXRSb2xlTmFtZShjaGFyYWN0ZXIucm9sZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gaHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2hhcmFjdGVyLmhwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtIGF0dGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjaGFyYWN0ZXIuYXRrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZ2h0ZXItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7Y2hhcmFjdGVyLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLWhlYWx0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC1iYXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzSFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFyYWN0ZXJJbWFnZShjaGFyYWN0ZXIpIHtcclxuICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyBkZSBzw6ljdXJpdMOpIHBvdXIgbCdvYmpldCBjaGFyYWN0ZXJcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BlcnNvbm5hZ2UgbWFucXVhbnQsIHV0aWxpc2F0aW9uIGRlIGxcXCdpbWFnZSBwYXIgZMOpZmF1dCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGxlIHBlcnNvbm5hZ2UgYSB1bmUgYXJ0d29ya1VybCwgbCd1dGlsaXNlciBlbiBwcmlvcml0w6lcclxuICAgICAgICBpZiAoY2hhcmFjdGVyLmFydHdvcmtVcmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3Rlci5hcnR3b3JrVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTaW5vbiwgdXRpbGlzZXIgbGUgc3lzdMOobWUgZGUgbWFwcGluZyBleGlzdGFudFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3RlciA6IGNoYXJhY3Rlci5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1hcHBlciBsZXMgbm9tcyBkZXMgcGVyc29ubmFnZXMgdmVycyBsZXVycyBpbWFnZXNcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJJbWFnZXMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICd3YXJyaW9yJzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICdtYWdlJzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICdhcmNoZXInOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2FyY2hlci5wbmcnLFxyXG4gICAgICAgICAgICAncHJpZXN0JzogJy9pbWFnZXMvY2hhcmFjdGVycy9wcmllc3QucG5nJyxcclxuICAgICAgICAgICAgJ2hlYWxlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvcHJpZXN0LnBuZycsXHJcbiAgICAgICAgICAgICdwYWxhZGluJzogJy9pbWFnZXMvY2hhcmFjdGVycy9wYWxhZGluLnBuZycsXHJcbiAgICAgICAgICAgICd0YW5rJzogJy9pbWFnZXMvY2hhcmFjdGVycy9wYWxhZGluLnBuZycsXHJcbiAgICAgICAgICAgICdhc3Nhc3Npbic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXNzYXNzaW4ucG5nJyxcclxuICAgICAgICAgICAgJ2ZpZ2h0ZXInOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3dhcnJpb3IucG5nJyxcclxuICAgICAgICAgICAgLy8gTWFwcGluZyBwb3VyIGxlcyBub21zIHNww6ljaWZpcXVlc1xyXG4gICAgICAgICAgICAnZ2FyZGUgbm9pcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvd2Fycmlvci5wbmcnLFxyXG4gICAgICAgICAgICAnZGFyayBndWFyZCc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvd2Fycmlvci5wbmcnLFxyXG4gICAgICAgICAgICAnZGFyay1ndWFyZCc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvd2Fycmlvci5wbmcnLFxyXG4gICAgICAgICAgICAnYXNzYXNzaW4gb21icmUnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2Fzc2Fzc2luLnBuZycsXHJcbiAgICAgICAgICAgICdzaGFkb3cgYXNzYXNzaW4nOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2Fzc2Fzc2luLnBuZycsXHJcbiAgICAgICAgICAgICdzaGFkb3ctYXNzYXNzaW4nOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2Fzc2Fzc2luLnBuZycsXHJcbiAgICAgICAgICAgICduw6ljcm9tYW50JzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICduZWNyb21hbmNlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvbWFnZS5wbmcnLFxyXG4gICAgICAgICAgICAnYXJjaGVyIGVsZmUnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2FyY2hlci5wbmcnLFxyXG4gICAgICAgICAgICAnZWxmIGFyY2hlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXJjaGVyLnBuZycsXHJcbiAgICAgICAgICAgICdlbGYtYXJjaGVyJzogJy9pbWFnZXMvY2hhcmFjdGVycy9hcmNoZXIucG5nJyxcclxuICAgICAgICAgICAgJ21hZ2Ugc2FnZSc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvbWFnZS5wbmcnLFxyXG4gICAgICAgICAgICAnd2lzZSBtYWdlJzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICd3aXNlLW1hZ2UnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL21hZ2UucG5nJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXNzYXllciBwbHVzaWV1cnMgYXBwcm9jaGVzIHBvdXIgbWF0Y2hlciBsJ2ltYWdlXHJcbiAgICAgICAgbGV0IGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snZGVmYXVsdCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJOYW1lICYmIHR5cGVvZiBjaGFyYWN0ZXJOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IGNoYXJhY3Rlck5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKTtcclxuICAgICAgICAgICAgY29uc3QgZGFzaE5hbWUgPSBjaGFyYWN0ZXJOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRXNzYXllciBwYXIgbm9tIGV4YWN0XHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJJbWFnZXNbY2hhcmFjdGVyTmFtZS50b0xvd2VyQ2FzZSgpXSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzW2NoYXJhY3Rlck5hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXNzYXllciBwYXIgbm9tIGF2ZWMgdGlyZXRzXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXJhY3RlckltYWdlc1tkYXNoTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1tkYXNoTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXNzYXllciBwYXIgbm9tIHNhbnMgZXNwYWNlc1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyYWN0ZXJJbWFnZXNbbm9ybWFsaXplZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbbm9ybWFsaXplZE5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEVzc2F5ZXIgZGUgZGV2aW5lciBwYXIgbGUgcsO0bGUgZGFucyBsZSBub21cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2d1ZXJyaWVyJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3dhcnJpb3InKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnZ2FyZGUnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWyd3YXJyaW9yJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ21hZ2UnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnd2l6YXJkJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ25lY3JvJykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snbWFnZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdhcmNoZXInKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnYm93JykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2VsZmUnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydhcmNoZXInXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygncHJldHJlJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3ByaWVzdCcpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdoZWFsZXInKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydwcmllc3QnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygncGFsYWRpbicpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCd0YW5rJykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1sncGFsYWRpbiddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdhc3Nhc3NpbicpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdyb2d1ZScpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdvbWJyZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbJ2Fzc2Fzc2luJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYPCflrzvuI8gSW1hZ2UgcG91ciBcIiR7Y2hhcmFjdGVyTmFtZX1cIjogJHtpbWFnZVBhdGh9YCk7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb2xlTmFtZShyb2xlKSB7XHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgZGUgc8OpY3VyaXTDqSBwb3VyIGxlIHLDtGxlXHJcbiAgICAgICAgaWYgKCFyb2xlIHx8IHR5cGVvZiByb2xlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0NvbWJhdHRhbnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByb2xlTmFtZXMgPSB7XHJcbiAgICAgICAgICAgICd0YW5rJzogJ1RhbmsnLFxyXG4gICAgICAgICAgICAnaGVhbGVyJzogJ1NvaWduZXVyJyxcclxuICAgICAgICAgICAgJ21hZ2UnOiAnTWFnZScsXHJcbiAgICAgICAgICAgICdhc3Nhc3Npbic6ICdBc3Nhc3NpbicsXHJcbiAgICAgICAgICAgICdhcmNoZXInOiAnQXJjaGVyJyxcclxuICAgICAgICAgICAgJ2ZpZ2h0ZXInOiAnQ29tYmF0dGFudCcsXHJcbiAgICAgICAgICAgICd3YXJyaW9yJzogJ0d1ZXJyaWVyJyxcclxuICAgICAgICAgICAgJ3ByaWVzdCc6ICdQcsOqdHJlJyxcclxuICAgICAgICAgICAgJ3BhbGFkaW4nOiAnUGFsYWRpbidcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByb2xlTmFtZXNbcm9sZS50b0xvd2VyQ2FzZSgpXSB8fCAnQ29tYmF0dGFudCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9sZUljb24ocm9sZSkge1xyXG4gICAgICAgIHN3aXRjaCAocm9sZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0YW5rJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLXNoaWVsZC1hbHQnO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtaGVhcnQnO1xyXG4gICAgICAgICAgICBjYXNlICdtYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLW1hZ2ljJztcclxuICAgICAgICAgICAgY2FzZSAnYXNzYXNzaW4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtZGFnZ2VyJztcclxuICAgICAgICAgICAgY2FzZSAnYXJjaGVyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLWJvdy1hcnJvdyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1zd29yZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWNsb3NlLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWNvbWJhdC1idG4nKTtcclxuICAgICAgICBjb25zdCBzcGVlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWQtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNwZWVkU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNwZWVkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTcGVlZCA9IDE7XHJcbiAgICAgICAgbGV0IGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy5pbml0R3VpbGRHdWlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsZSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVwcmVuZHJlIGxhIHZpZMOpbyBkZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZUJhY2tncm91bmRWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0aXJlciBsYSBjbGFzc2UgY29tYmF0LWFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjb21iYXQtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGF2ZWMgRXNjYXBlXHJcbiAgICAgICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBlbiBjbGlxdWFudCBzdXIgbCdvdmVybGF5XHJcbiAgICAgICAgbW9kYWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udHLDtGxlcyBkZSB2aXRlc3NlIGFtw6lsaW9yw6lzXHJcbiAgICAgICAgc3BlZWRCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BlZWRCdG5zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcGVlZCA9IHBhcnNlRmxvYXQoYnRuLmRhdGFzZXQuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTcGVlZFNwYW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3BlZWRTcGFuLnRleHRDb250ZW50ID0gYHgke2N1cnJlbnRTcGVlZH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50YWlyZSBkdSBndWlsZCBndWlkZSBzdXIgbGEgdml0ZXNzZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlZWRDb21tZW50cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAwLjU6IFwiVHLDqHMgYmllbiAhIFByZW5vbnMgbGUgdGVtcHMgZCdhbmFseXNlciBjaGFxdWUgbW91dmVtZW50Li4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgMTogXCJWaXRlc3NlIG5vcm1hbGUsIHBhcmZhaXQgcG91ciBiaWVuIHN1aXZyZSBsJ2FjdGlvbiAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgMjogXCJPbiBhY2PDqWzDqHJlIHVuIHBldSAhIEdhcmRleiBsZXMgeWV1eCBvdXZlcnRzLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgNTogXCLDh2EgdmEgdml0ZSBtYWludGVuYW50ICEgQ29uY2VudHJhdGlvbiBtYXhpbXVtICFcIixcclxuICAgICAgICAgICAgICAgICAgICAxMDogXCJNb2RlIMOpY2xhaXIgYWN0aXbDqSAhIEJsaW5rIGV0IHZvdXMgcmF0ZXogdG91dCAhXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0d1aWxkR3VpZGVDb21tZW50KHNwZWVkQ29tbWVudHNbY3VycmVudFNwZWVkXSB8fCBcIlZpdGVzc2UgYWp1c3TDqWUgIVwiLCAn4pqhJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+OriBWaXRlc3NlIGNoYW5nw6llOicsIGN1cnJlbnRTcGVlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqW1hcnJlciBsZSBjb21iYXRcclxuICAgICAgICBzdGFydEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0d1aWxkR3VpZGVDb21tZW50KFwiTGUgY29tYmF0IGNvbW1lbmNlICEgUXVlIGxlIG1laWxsZXVyIGdhZ25lICFcIiwgJ+KalO+4jycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q29tYmF0QW5pbWF0aW9uKG1hdGNoRGF0YS5ldmVudHMsIGN1cnJlbnRTcGVlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXJlZG9cIj48L2k+IFJlam91ZXIgbGUgY29tYmF0JztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEdVSUxEIEdVSURFIFNZU1RFTSBBTcOJTElPUsOJID09PT09PT09PT09PT09PVxyXG4gICAgaW5pdEd1aWxkR3VpZGUoKSB7XHJcbiAgICAgICAgLy8gTGltaXRlciBsZSBub21icmUgZGUgdGVudGF0aXZlcyBwb3VyIMOpdml0ZXIgbGVzIGJvdWNsZXMgaW5maW5pZXNcclxuICAgICAgICB0aGlzLmd1aWxkR3VpZGVJbml0QXR0ZW1wdHMrKztcclxuICAgICAgICBpZiAodGhpcy5ndWlsZEd1aWRlSW5pdEF0dGVtcHRzID4gNTApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn4+wIEFycsOqdCBkZXMgdGVudGF0aXZlcyBkXFwnaW5pdGlhbGlzYXRpb24gZHUgR3VpbGQgR3VpZGUgYXByw6hzIDUwIGVzc2FpcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb24gZGUgbCdleGlzdGVuY2UgZGUgbCfDqWzDqW1lbnQgYXZhbnQgaW5pdGlhbGlzYXRpb25cclxuICAgICAgICBjb25zdCBndWlsZEd1aWRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlsZC1ndWlkZS1jb250YWluZXInKTtcclxuICAgICAgICBpZiAoIWd1aWxkR3VpZGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn4+wIEd1aWxkIEd1aWRlIGNvbnRhaW5lciBub24gdHJvdXbDqSAodGVudGF0aXZlICR7dGhpcy5ndWlsZEd1aWRlSW5pdEF0dGVtcHRzfS81MCksIGluaXRpYWxpc2F0aW9uIGRpZmbDqXLDqWVgKTtcclxuICAgICAgICAgICAgLy8gUsOpZXNzYXllciBhcHLDqHMgdW4gY291cnQgZMOpbGFpIHNpIGwnw6lsw6ltZW50IG4nZXhpc3RlIHBhcyBlbmNvcmVcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRHdWlsZEd1aWRlKCksIDEwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfj7AgR3VpbGQgR3VpZGUgaW5pdGlhbGlzw6kgYXZlYyBzdWNjw6hzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGVzIGNvbW1lbnRhaXJlcyBkdSBndWlkZSAoaW1hZ2VzIGTDqWrDoCBpbml0aWFsaXPDqWVzIGRhbnMgbGUgY29uc3RydWN0ZXVyKVxyXG4gICAgICAgIHRoaXMuZ3VpbGRHdWlkZUNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgZGUgZMOpYnV0XHJcbiAgICAgICAgICAgIFwiTWVzIGNoYW1waW9ucywgbGUgY29tYmF0IHZhIGNvbW1lbmNlciAhXCIsXHJcbiAgICAgICAgICAgIFwiQW5hbHlzb25zIGxlcyBmb3JjZXMgZW4gcHLDqXNlbmNlLi4uXCIsXHJcbiAgICAgICAgICAgIFwiUXVlIGxhIHN0cmF0w6lnaWUgbCdlbXBvcnRlIHN1ciBsYSBmb3JjZSBicnV0ZSAhXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgZCdhY3Rpb25cclxuICAgICAgICAgICAgXCJFeGNlbGxlbnRlIGF0dGFxdWUgISBMJ2FkdmVyc2FpcmUgcmVjdWxlICFcIixcclxuICAgICAgICAgICAgXCJVbmUgZMOpZmVuc2UgZXhlbXBsYWlyZSAhIEJpZW4gam91w6kgIVwiLFxyXG4gICAgICAgICAgICBcIkF0dGVudGlvbiAhIENldHRlIGF0dGFxdWUgc2VtYmxlIGNyaXRpcXVlICFcIixcclxuICAgICAgICAgICAgXCJNYWduaWZpcXVlIGNvb3JkaW5hdGlvbiBkJ8OpcXVpcGUgIVwiLFxyXG4gICAgICAgICAgICBcIkxhIG1hZ2llIG9ww6hyZSAhIEwnYXZhbnRhZ2UgY2hhbmdlIGRlIGNhbXAgIVwiLFxyXG4gICAgICAgICAgICBcIlF1ZWwgcmV0b3VybmVtZW50IGRlIHNpdHVhdGlvbiAhXCIsXHJcbiAgICAgICAgICAgIFwiTGVzIHNvaW5zIGFycml2ZW50IMOgIHRlbXBzICFcIixcclxuICAgICAgICAgICAgXCJVbmUgc3RyYXTDqWdpZSBwYXlhbnRlICFcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlcyBkJ2F2YW50YWdlXHJcbiAgICAgICAgICAgIFwiQmVsIGF2YW50YWdlIHBvdXIgbCfDqXF1aXBlIGJsZXVlICFcIixcclxuICAgICAgICAgICAgXCJMJ8OpcXVpcGUgcm91Z2UgcHJlbmQgbCdhc2NlbmRhbnQgIVwiLFxyXG4gICAgICAgICAgICBcIkwnw6lxdWlsaWJyZSBkZXMgZm9yY2VzIGJhc2N1bGUgIVwiLFxyXG4gICAgICAgICAgICBcIkxhIHZpY3RvaXJlIHNlIGRlc3NpbmUgIVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29tbWVudGFpcmVzIGNyaXRpcXVlc1xyXG4gICAgICAgICAgICBcIkNvdXAgY3JpdGlxdWUgISBRdWVsIGltcGFjdCAhXCIsXHJcbiAgICAgICAgICAgIFwiVW5lIGJsZXNzdXJlIGdyYXZlICEgTGEgc2l0dWF0aW9uIGRldmllbnQgY3JpdGlxdWUgIVwiLFxyXG4gICAgICAgICAgICBcIkwnaXNzdWUgZHUgY29tYmF0IHNlIGpvdWUgbWFpbnRlbmFudCAhXCIsXHJcbiAgICAgICAgICAgIFwiRGVybmnDqHJlIGNoYW5jZSBwb3VyIHJlbnZlcnNlciBsYSB2YXBldXIgIVwiXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Q29vbGRvd24gPSAyMDAwOyAvLyAyIHNlY29uZGVzIGVudHJlIGxlcyBjb21tZW50YWlyZXNcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0R3VpbGRJbWFnZSgpIHtcclxuICAgICAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyBpbWFnZXMgc29udCBpbml0aWFsaXPDqWVzXHJcbiAgICAgICAgaWYgKCF0aGlzLmd1aWxkSW1hZ2VzIHx8ICFBcnJheS5pc0FycmF5KHRoaXMuZ3VpbGRJbWFnZXMpIHx8IHRoaXMuZ3VpbGRJbWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSW1hZ2VzIGR1IGd1aWxkIGd1aWRlIG5vbiBpbml0aWFsaXPDqWVzLCB1dGlsaXNhdGlvbiBkZSBsXFwnaW1hZ2UgcGFyIGTDqWZhdXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuICcvaW1hZ2VzL2d1aWxkMS5wbmcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpZXIgbCdpbmRleFxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXJyZW50R3VpbGRJbWFnZUluZGV4ICE9PSAnbnVtYmVyJyB8fCB0aGlzLmN1cnJlbnRHdWlsZEltYWdlSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5ndWlsZEltYWdlc1t0aGlzLmN1cnJlbnRHdWlsZEltYWdlSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleCA9ICh0aGlzLmN1cnJlbnRHdWlsZEltYWdlSW5kZXggKyAxKSAlIHRoaXMuZ3VpbGRJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBpbWFnZSB8fCAnL2ltYWdlcy9ndWlsZDEucG5nJztcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3VpbGRHdWlkZUNvbW1lbnQodGV4dCwgZW1vamkgPSAn8J+SrCcpIHtcclxuICAgICAgICBjb25zdCBndWlsZEd1aWRlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWxkLWd1aWRlLWF2YXRhciBpbWcnKTtcclxuICAgICAgICBjb25zdCBjb21tZW50YXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlsZC1ndWlkZS1jb21tZW50YXJ5Jyk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudGFyeUJ1YmJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LWJ1YmJsZSBwJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgcm9idXN0ZXMgYXZhbnQgbWFuaXB1bGF0aW9uIERPTVxyXG4gICAgICAgIGlmICghZ3VpbGRHdWlkZUF2YXRhcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfj7AgR3VpbGQgZ3VpZGUgYXZhdGFyIG5vbiB0cm91dsOpJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFjb21tZW50YXJ5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfj7AgR3VpbGQgZ3VpZGUgY29tbWVudGFyeSBlbGVtZW50IG5vbiB0cm91dsOpJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFjb21tZW50YXJ5QnViYmxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+PsCBHdWlsZCBndWlkZSBjb21tZW50YXJ5IGJ1YmJsZSBub24gdHJvdXbDqSAtIHRlbnRhdGl2ZSBkZSBjcsOpYXRpb24nKTtcclxuICAgICAgICAgICAgLy8gRXNzYXllciBkZSBjcsOpZXIgbCfDqWzDqW1lbnQgbWFucXVhbnRcclxuICAgICAgICAgICAgY29uc3QgYnViYmxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRhcnktYnViYmxlJyk7XHJcbiAgICAgICAgICAgIGlmIChidWJibGVDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgYnViYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIFJldHJ5IGF2ZWMgbGUgbm91dmVsIMOpbMOpbWVudFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3dHdWlsZEd1aWRlQ29tbWVudCh0ZXh0LCBlbW9qaSksIDUwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+PsCBDb250ZW5ldXIgY29tbWVudGFyeS1idWJibGUgbm9uIHRyb3V2w6kgLSBhYmFuZG9uJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hhbmdlciBsJ2ltYWdlIGR1IGd1aWxkIGd1aWRlIMOgIGNoYXF1ZSBub3V2ZWF1IHRleHRlXHJcbiAgICAgICAgY29uc3QgbmV4dEltYWdlID0gdGhpcy5nZXROZXh0R3VpbGRJbWFnZSgpO1xyXG4gICAgICAgIGlmIChuZXh0SW1hZ2UgJiYgZ3VpbGRHdWlkZUF2YXRhcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZ3VpbGRHdWlkZUF2YXRhci5zcmMgPSBuZXh0SW1hZ2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRcXCdpbWFnZSBkdSBndWlkZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgdGV4dGUgYXZlYyBwcm90ZWN0aW9uIHN1cHBsw6ltZW50YWlyZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50YXJ5QnViYmxlICYmIHR5cGVvZiBjb21tZW50YXJ5QnViYmxlLnRleHRDb250ZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudGFyeUJ1YmJsZS50ZXh0Q29udGVudCA9IGAke2Vtb2ppfSAke3RleHR9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ciBkdSB0ZXh0ZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGUgY29tbWVudGFpcmUgYXZlYyBhbmltYXRpb25cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tbWVudGFyeUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRhcnlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGVyIGFwcsOocyA0IHNlY29uZGVzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudGFyeUVsZW1lbnQgJiYgY29tbWVudGFyeUVsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRhcnlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdhbmltYXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+Xo++4jyBHdWlsZCBHdWlkZTonLCB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21HdWlsZENvbW1lbnQodHlwZSA9ICdhY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0Q29tbWVudFRpbWUgPCB0aGlzLmNvbW1lbnRDb29sZG93bikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gUGFzIGRlIGNvbW1lbnRhaXJlIHNpIHRyb3AgcsOpY2VudFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29tbWVudHM7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkdmFudGFnZSc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkJlbCBhdmFudGFnZSBwb3VyIGNldHRlIMOpcXVpcGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTCdhc2NlbmRhbnQgc2UgZGVzc2luZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVbmUgc3RyYXTDqWdpZSBwYXlhbnRlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkwnw6lxdWlsaWJyZSBiYXNjdWxlICFcIlxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjcml0aWNhbCc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkF0dGVudGlvbiAhIENldHRlIGF0dGFxdWUgcGV1dCDDqnRyZSBjcml0aXF1ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb3VwIHB1aXNzYW50IGVuIHByw6lwYXJhdGlvbiAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVbmUgYXR0YXF1ZSBkw6ljaXNpdmUgYXBwcm9jaGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTW9tZW50IGNyaXRpcXVlIGR1IGNvbWJhdCAhXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaGVhbCc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkxlcyBzb2lucyBhcnJpdmVudCDDoCB0ZW1wcyAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFeGNlbGxlbnRlIHLDqWN1cMOpcmF0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkxhIG1hZ2llIGN1cmF0aXZlIG9ww6hyZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZXRvdXIgZW4gZm9yY2UgIVwiXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2VsbGVudGUgbWFuxZN1dnJlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk1hZ25pZmlxdWUgY29vcmRpbmF0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlF1ZWxsZSB0ZWNobmlxdWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmllbiBqb3XDqSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMJ2FjdGlvbiBzJ2ludGVuc2lmaWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGUgY29tYmF0IGJhdCBzb24gcGxlaW4gIVwiXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhc3RDb21tZW50VGltZSA9IG5vdztcclxuICAgICAgICByZXR1cm4gY29tbWVudHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tbWVudHMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheUNvbWJhdEFuaW1hdGlvbihldmVudHMsIHNwZWVkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyQW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbnRlci1hbmltYXRpb24nKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1pbmZvJyk7XHJcbiAgICAgICAgY29uc3QgZW5lbXlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWluZm8taGVhZGVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQmFzZSBkZSB0ZW1wcyBhZGFwdMOpZSDDoCBsYSB2aXRlc3NlXHJcbiAgICAgICAgY29uc3QgYmFzZURlbGF5ID0gMTAwMCAvIE1hdGgubWF4KHNwZWVkLCAwLjUpOyAvLyBNaW5pbXVtIDAuNSBwb3VyIMOpdml0ZXIgbGVzIHZpdGVzc2VzIHRyb3AgbGVudGVzXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBNYXRoLm1heChiYXNlRGVsYXkgKiAwLjgsIDIwMCk7IC8vIE1pbmltdW0gMjAwbXNcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+OriBBbmltYXRpb24gYXZlYyB2aXRlc3NlIHgke3NwZWVkfSwgZMOpbGFpOiAke2FuaW1hdGlvbkRlbGF5fW1zYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29tbWVudGFpcmUgaW5pdGlhbCBkdSBndWlsZCBndWlkZVxyXG4gICAgICAgIHRoaXMuc2hvd0d1aWxkR3VpZGVDb21tZW50KFwiTGUgY29tYmF0IGNvbW1lbmNlICEgT2JzZXJ2ZXogYmllbiBjaGFxdWUgbW91dmVtZW50ICFcIiwgJ+KalO+4jycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29tbWVudGFpcmVzIGR5bmFtaXF1ZXMgZHUgZ3VpbGQgZ3VpZGVcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRHdWlsZEd1aWRlQ29tbWVudGFyeShldmVudCwgaSwgZXZlbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltZXIgc2Vsb24gbGUgdHlwZSBkJ8OpdsOpbmVtZW50XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZUV2ZW50KGV2ZW50LCBjZW50ZXJBbmltYXRpb24sIHBsYXllckluZm8sIGVuZW15SW5mbyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBam91dGVyIGRlcyBhY3Rpb25zIGFsw6lhdG9pcmVzIHBvdXIgcGx1cyBkZSBkeW5hbWlzbWVcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFjdGlvbiA9PT0gJ0FUVEFDSycgfHwgZXZlbnQuYWN0aW9uID09PSAnUk9VTkRfU1RBUlQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAzMCUgZGUgY2hhbmNlIGQnYXZvaXIgdW5lIGFjdGlvbiBkw6lmZW5zaXZlL3NvaW4gYWzDqWF0b2lyZVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjMpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGFuaW1hdGlvbkRlbGF5ICogMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21BY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ0hFQUwnIDogJ0RFRkVOU0UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVJhbmRvbUNoYXJhY3RlckFjdGlvbihyYW5kb21BY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlIHN1ciBsJ2FjdGlvbiBhbMOpYXRvaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29tbWVudCA9IHRoaXMuZ2V0UmFuZG9tR3VpbGRDb21tZW50KHJhbmRvbUFjdGlvbiA9PT0gJ0hFQUwnID8gJ2hlYWwnIDogJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kb21Db21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0d1aWxkR3VpZGVDb21tZW50KHJhbmRvbUNvbW1lbnQsIHJhbmRvbUFjdGlvbiA9PT0gJ0hFQUwnID8gJ/CfkponIDogJ/Cfm6HvuI8nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEF0dGVuZHJlIHNlbG9uIGxhIHZpdGVzc2VcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcChhbmltYXRpb25EZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBmaW5hbGVcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBldmVudHMuZmluZChlID0+IGUuYWN0aW9uID09PSAnVklDVE9SWScpO1xyXG4gICAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoXCJMZSBjb21iYXQgdG91Y2hlIMOgIHNhIGZpbiAhIFF1aSBsJ2VtcG9ydGVyYSA/XCIsICfwn4+GJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVZpY3Rvcnkod2lubmVyLCBjZW50ZXJBbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkR3VpbGRHdWlkZUNvbW1lbnRhcnkoZXZlbnQsIGV2ZW50SW5kZXgsIHRvdGFsRXZlbnRzKSB7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBlbW9qaSA9ICfwn5KsJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZXMgYmFzw6lzIHN1ciBsJ2FjdGlvblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NPTUJBVF9TVEFSVCc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gXCJWb2ljaSBub3MgY29tYmF0dGFudHMgISBRdWUgbGUgc3BlY3RhY2xlIGNvbW1lbmNlICFcIjtcclxuICAgICAgICAgICAgICAgIGVtb2ppID0gJ/Cfjq0nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnUk9VTkRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgY29tbWVudCA9IGBSb3VuZCAke2V2ZW50SW5kZXggKyAxfSAhIEwnaW50ZW5zaXTDqSBtb250ZSAhYDtcclxuICAgICAgICAgICAgICAgIGVtb2ppID0gJ/CflKUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnQVRUQUNLJzpcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC43KSB7IC8vIDcwJSBkZSBjaGFuY2UgZGUgY29tbWVudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrQ29tbWVudHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXR0ZW50aW9uICEgQ2V0dGUgYXR0YXF1ZSBwZXV0IMOqdHJlIGNyaXRpcXVlICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFeGNlbGxlbnRlIHRlY2huaXF1ZSAhIEwnYWR2ZXJzYWlyZSByZWN1bGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVuZSBmcmFwcGUgcHVpc3NhbnRlICEgw4dhIHZhIGZhaXJlIG1hbCAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWFnbmlmaXF1ZSBjb29yZGluYXRpb24gZCfDqXF1aXBlICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJMJ2FjdGlvbiBzJ2ludGVuc2lmaWUgIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ID0gYXR0YWNrQ29tbWVudHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrQ29tbWVudHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgZW1vamkgPSAn4pqU77iPJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ1RFQU1fUFJFU0VOVEFUSU9OJzpcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcygnw4lxdWlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudCA9IGAke2V2ZW50LnRhcmdldF9uYW1lfSBlbnRyZSBlbiBsaWNlICEgUXVlbGxlIHB1aXNzYW5jZSAhYDtcclxuICAgICAgICAgICAgICAgICAgICBlbW9qaSA9ICfwn5GlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ1ZJQ1RPUlknOlxyXG4gICAgICAgICAgICAgICAgY29tbWVudCA9IFwiRXQgdm9pbMOgICEgTGUgY29tYmF0IGVzdCB0ZXJtaW7DqSAhIFF1ZWxsZSBiYXRhaWxsZSDDqXBpcXVlICFcIjtcclxuICAgICAgICAgICAgICAgIGVtb2ppID0gJ/Cfj4YnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlcyBiYXPDqXMgc3VyIGxhIHByb2dyZXNzaW9uXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBldmVudEluZGV4IC8gdG90YWxFdmVudHM7XHJcbiAgICAgICAgaWYgKCFjb21tZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDAuMikge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudCA9IHRoaXMuZ2V0UmFuZG9tR3VpbGRDb21tZW50KCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIGVtb2ppID0gJ/CfkYAnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gdGhpcy5nZXRSYW5kb21HdWlsZENvbW1lbnQoJ2FkdmFudGFnZScpO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+Sqic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjgpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSB0aGlzLmdldFJhbmRvbUd1aWxkQ29tbWVudCgnY3JpdGljYWwnKTtcclxuICAgICAgICAgICAgICAgIGVtb2ppID0gJ+KaoSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoY29tbWVudCwgZW1vamkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uKGFjdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBBY3Rpb24gYWzDqWF0b2lyZSBzdXIgdW4gcGVyc29ubmFnZSBhbMOpYXRvaXJlXHJcbiAgICAgICAgY29uc3QgdGVhbXMgPSBbJ3BsYXllcicsICdlbmVteSddO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbVRlYW0gPSB0ZWFtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0ZWFtcy5sZW5ndGgpXTtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmFuZG9tVGVhbX0tY2hhci0ke3JhbmRvbUNoYXJJbmRleH1gKTtcclxuICAgICAgICBjb25zdCBlZmZlY3RzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JhbmRvbVRlYW19LWVmZmVjdHMtJHtyYW5kb21DaGFySW5kZXh9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckVsZW1lbnQgJiYgZWZmZWN0c0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGFyYWN0ZXItYWN0aW5nJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZWZmZWN0SFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0Q2xhc3MgPSAnJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25UeXBlID09PSAnSEVBTCcpIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdEhUTUwgPSAnPGRpdiBjbGFzcz1cImhlYWwtZWZmZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGVmZmVjdENsYXNzID0gJ2VmZmVjdC1oZWFsJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnREVGRU5TRScpIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdEhUTUwgPSAnPGRpdiBjbGFzcz1cImRlZmVuc2UtZWZmZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtc2hpZWxkXCI+PC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3RDbGFzcyA9ICdlZmZlY3QtZGVmZW5zZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmlubmVySFRNTCA9IGVmZmVjdEhUTUw7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWZmZWN0Q2xhc3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg0MDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFyYWN0ZXItYWN0aW5nJyk7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZWZmZWN0Q2xhc3MpO1xyXG4gICAgICAgICAgICBlZmZlY3RzRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYW5pbWF0ZUV2ZW50KGV2ZW50LCBjZW50ZXJFbGVtZW50LCBwbGF5ZXJJbmZvLCBlbmVteUluZm8pIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBldmVudC5hY3Rpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnQ09NQkFUX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZUNvbWJhdFN0YXJ0KGNlbnRlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVEVBTV9QUkVTRU5UQVRJT04nOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlVGVhbVByZXNlbnRhdGlvbihldmVudCwgcGxheWVySW5mbywgZW5lbXlJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ1JPVU5EX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVJvdW5kU3RhcnQoY2VudGVyRWxlbWVudCwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnQVRUQUNLJzpcclxuICAgICAgICAgICAgY2FzZSAnSEVBTCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0RFRkVOU0UnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlQ2hhcmFjdGVyQWN0aW9uKGV2ZW50LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnUk9VTkRfRU5EJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVJvdW5kRW5kKGNlbnRlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVklDVE9SWSc6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVWaWN0b3J5KGV2ZW50LCBjZW50ZXJFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlQ29tYmF0U3RhcnQoY2VudGVyRWxlbWVudCkge1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LXN0YXJ0LWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbG8tZWZmZWN0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LXRleHRcIj5Ew6lidXQgZHUgQ29tYmF0ITwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1nbG93Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZ2xvdycpO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYW5pbWF0ZVRlYW1QcmVzZW50YXRpb24oZXZlbnQsIHBsYXllckluZm8sIGVuZW15SW5mbykge1xyXG4gICAgICAgIGNvbnN0IGlzVGVhbUEgPSBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcygnw4lxdWlwZSBBJykgfHwgZXZlbnQudGFyZ2V0X25hbWUuaW5jbHVkZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1pbmZvIC50ZWFtLW5hbWUnKT8udGV4dENvbnRlbnQgfHwgJycpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBpc1RlYW1BID8gcGxheWVySW5mbyA6IGVuZW15SW5mbztcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RlYW0taGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg4MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGVhbS1oaWdobGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlUm91bmRTdGFydChjZW50ZXJFbGVtZW50LCBldmVudCkge1xyXG4gICAgICAgIGlmICghY2VudGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfjqwgw4lsw6ltZW50IGNlbnRyYWwgbm9uIHRyb3V2w6kgcG91ciBsXFwnYW5pbWF0aW9uIGRlIGTDqWJ1dCBkZSByb3VuZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kLXN0YXJ0LW1vZGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZC1naXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wbGF0ZWF1eE1lZGlldmFsL2d1aWxkR3VpZGUuanBnXCIgYWx0PVwiQW5ub25jZXVyXCIgY2xhc3M9XCJyb3VuZC1hbm5vdW5jZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWVjaC1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZC10ZXh0XCI+JHtldmVudC50YXJnZXRfbmFtZSB8fCAnTm91dmVhdSBSb3VuZCAhJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXJvdW5kLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEyMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXJvdW5kLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2FuaW1hdGlvbiBkZSBkw6lidXQgZGUgcm91bmQ6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlQ2hhcmFjdGVyQWN0aW9uKGV2ZW50LCBhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGNlbnRyYWxlIGQnYWN0aW9uXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93Q2VudHJhbEFuaW1hdGlvbihhY3Rpb25UeXBlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEw6l0ZXJtaW5lciBxdWVsIHBlcnNvbm5hZ2UgYWdpdCBiYXPDqSBzdXIgbGVzIGRvbm7DqWVzIGRlIGwnw6l2w6luZW1lbnRcclxuICAgICAgICBsZXQgdGVhbVR5cGUsIGNoYXJJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFc3NheWVyIGRlIGTDqXRlcm1pbmVyIGwnw6lxdWlwZSBldCBsZSBwZXJzb25uYWdlIGJhc8OpIHN1ciBsZXMgZG9ubsOpZXMgZGUgbCfDqXbDqW5lbWVudFxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXRfbmFtZSAmJiBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcygn8J+UtScpKSB7XHJcbiAgICAgICAgICAgIHRlYW1UeXBlID0gJ3BsYXllcic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXRfbmFtZSAmJiBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcygn8J+UtCcpKSB7XHJcbiAgICAgICAgICAgIHRlYW1UeXBlID0gJ2VuZW15JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBhbMOpYXRvaXJlXHJcbiAgICAgICAgICAgIHRlYW1UeXBlID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdwbGF5ZXInIDogJ2VuZW15JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RlYW1UeXBlfS1jaGFyLSR7Y2hhckluZGV4fWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBkdSBwZXJzb25uYWdlIHNlbG9uIGwnYWN0aW9uXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQVRUQUNLJzpcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2luZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2tpbmcnKSwgODAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hFQUwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhbGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFsaW5nJyksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWZlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoYXJhY3RlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGVmZW5kaW5nJyksIDYwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hvd0NlbnRyYWxBbmltYXRpb24oYWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWFuaW1hdGlvbicpO1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9uRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uSFRNTCA9ICcnO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DbGFzcyA9ICcnO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnQVRUQUNLJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFja1R5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLXN3b3JkXCI+PC9pPicsIGNsYXNzOiAnc3dvcmQtYXR0YWNrJywgZW1vamk6ICfimpTvuI8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm93LWFycm93XCI+PC9pPicsIGNsYXNzOiAnYXJyb3ctYXR0YWNrJywgZW1vamk6ICfwn4+5JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpc3QtcmFpc2VkXCI+PC9pPicsIGNsYXNzOiAncHVuY2gtYXR0YWNrJywgZW1vamk6ICfwn5GKJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrVHlwZSA9IGF0dGFja1R5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF0dGFja1R5cGVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSFRNTCA9IGF0dGFja1R5cGUuaHRtbDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzID0gYXR0YWNrVHlwZS5jbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ01BR0lDJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hZ2ljVHlwZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9sdFwiPjwvaT4nLCBjbGFzczogJ2xpZ2h0bmluZy1hdHRhY2snLCBlbW9qaTogJ+KaoScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1maXJlXCI+PC9pPicsIGNsYXNzOiAnZmlyZS1hdHRhY2snLCBlbW9qaTogJ/CflKUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtc25vd2ZsYWtlXCI+PC9pPicsIGNsYXNzOiAnaWNlLWF0dGFjaycsIGVtb2ppOiAn4p2E77iPJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFnaWNUeXBlID0gbWFnaWNUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYWdpY1R5cGVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSFRNTCA9IG1hZ2ljVHlwZS5odG1sO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MgPSBtYWdpY1R5cGUuY2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdIRUFMJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWxUeXBlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT4nLCBjbGFzczogJ2hlYXJ0LWhlYWwnLCBlbW9qaTogJ/CfkponIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtc2VlZGxpbmdcIj48L2k+JywgY2xhc3M6ICduYXR1cmUtaGVhbCcsIGVtb2ppOiAn8J+MsScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzLWNpcmNsZVwiPjwvaT4nLCBjbGFzczogJ3BvdGlvbi1oZWFsJywgZW1vamk6ICfwn6eqJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhbFR5cGUgPSBoZWFsVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVhbFR5cGVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSFRNTCA9IGhlYWxUeXBlLmh0bWw7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DbGFzcyA9IGhlYWxUeXBlLmNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZlbnNlVHlwZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtc2hpZWxkLWFsdFwiPjwvaT4nLCBjbGFzczogJ3NoaWVsZC1ibG9jaycsIGVtb2ppOiAn8J+boe+4jycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1maXN0LXJhaXNlZFwiPjwvaT4nLCBjbGFzczogJ2NvdW50ZXItYXR0YWNrJywgZW1vamk6ICfwn6ScJyB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmZW5zZVR5cGUgPSBkZWZlbnNlVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVmZW5zZVR5cGVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSFRNTCA9IGRlZmVuc2VUeXBlLmh0bWw7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DbGFzcyA9IGRlZmVuc2VUeXBlLmNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4nO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MgPSAnZGVmYXVsdC1hY3Rpb24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbCdhbmltYXRpb24gYXZlYyBwcm90ZWN0aW9uXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFhbmltYXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfjqwgw4lsw6ltZW50IGRcXCdhbmltYXRpb24gbm9uIHRyb3V2w6knKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb25FbGVtZW50LmlubmVySFRNTCA9IGFuaW1hdGlvbkhUTUw7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gYGNvbWJhdC1hbmltYXRpb24gJHthbmltYXRpb25DbGFzc30gc2hvd2A7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkZSBsXFwnYW5pbWF0aW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDYwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2FjaGVyIGwnYW5pbWF0aW9uIGF2ZWMgcHJvdGVjdGlvblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24gZGVzIGNsYXNzZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDIwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbWJhdC1hbmltYXRpb24nO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IG5ldHRveWFnZSBkZSBsXFwnYW5pbWF0aW9uOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYW5pbWF0ZVJvdW5kRW5kKGNlbnRlckVsZW1lbnQpIHtcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kLWVuZC1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyZ2xhc3MtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWhvdXJnbGFzcy1lbmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmQtdGV4dFwiPkZpbiBkdSB0b3VyPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDgwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWZhZGUnKTtcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVWaWN0b3J5KGV2ZW50LCBjZW50ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJWaWN0b3J5ID0gZXZlbnQudGFyZ2V0X25hbWUuaW5jbHVkZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW0taW5mby1ib3R0b20nKT8udGV4dENvbnRlbnQgfHwgJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1tb2Rlcm4gJHtpc1BsYXllclZpY3RvcnkgPyAncGxheWVyLXZpY3RvcnknIDogJ2VuZW15LXZpY3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWFubm91bmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvZ3VpbGRHdWlkZS5qcGdcIiBhbHQ9XCJHdWlsZCBHdWlkZVwiIGNsYXNzPVwiZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1zcGVlY2gtYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LWFubm91bmNlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpc1BsYXllclZpY3RvcnkgPyAnT3nDqSBPecOpICEgVm91cyBhdmV6IHJlbXBvcnTDqSBjZXR0ZSB2aWN0b2lyZSAhJyA6ICdPecOpIE95w6kgISBWb3VzIGF2ZXogc3ViaSB1bmUgZMOpZmFpdGUuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpY3RvcnktZWZmZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNQbGF5ZXJWaWN0b3J5ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29uZmV0dGlcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3BhcmtsZXNcIj48L2Rpdj4nIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGVmZWF0LXNtb2tlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS12aWN0b3J5LW1vZGVybicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMjUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAobXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIFJFQ0FQIERFIENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHNob3dNYXRjaFJlY2FwKG1hdGNoSWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vZXZlbnRzYCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNYXRjaFJlY2FwTW9kYWwobWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSByZWNhcDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSByZWNhcCBkdSBjb21iYXQnLCAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheU1hdGNoUmVjYXBNb2RhbChtYXRjaERhdGEpIHtcclxuICAgICAgICAvLyBDcsOpZXIgbGUgY29udGVudSBkdSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsSFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIiBpZD1cIm1hdGNoLXJlY2FwLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBtYXRjaC1yZWNhcC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxpIGNsYXNzPVwiZmFzIGZhLXNjcm9sbFwiPjwvaT4gUmVjYXAgZHUgQ29tYmF0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgaWQ9XCJtb2RhbC1jbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtc3VtbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1zLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2FyZCAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYS5uYW1lID8gJ3dpbm5lcicgOiAnbG9zZXInfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9hLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPiR7bWF0Y2hEYXRhLnRlYW1fYS5wbGF5ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1tclwiPiR7bWF0Y2hEYXRhLnRlYW1fYS5tbXJ9IE1NUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYS5uYW1lID8gJzxkaXYgY2xhc3M9XCJ2aWN0b3J5LWJhZGdlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY3Jvd25cIj48L2k+IFZJQ1RPSVJFPC9kaXY+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2cy1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2FyZCAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYi5uYW1lID8gJ3dpbm5lcicgOiAnbG9zZXInfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9iLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPiR7bWF0Y2hEYXRhLnRlYW1fYi5wbGF5ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1tclwiPiR7bWF0Y2hEYXRhLnRlYW1fYi5tbXJ9IE1NUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYi5uYW1lID8gJzxkaXYgY2xhc3M9XCJ2aWN0b3J5LWJhZGdlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY3Jvd25cIj48L2k+IFZJQ1RPSVJFPC9kaXY+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RMOpYnV0OiAke21hdGNoRGF0YS5zdGFydGVkX2F0IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZsYWctY2hlY2tlcmVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GaW46ICR7bWF0Y2hEYXRhLmZpbmlzaGVkX2F0IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdGF0dXQ6ICR7bWF0Y2hEYXRhLnN0YXR1c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LWV2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmFzIGZhLWxpc3RcIj48L2k+IETDqXJvdWxlbWVudCBkdSBDb21iYXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy10aW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZW5lcmF0ZUV2ZW50c0hUTUwobWF0Y2hEYXRhLmV2ZW50cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBpZD1cIm1vZGFsLWZlcm1lci1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPiBGZXJtZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cIm1vZGFsLXBhcnRhZ2VyLWJ0blwiIGRhdGEtbWF0Y2gtaWQ9XCIke21hdGNoRGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNoYXJlXCI+PC9pPiBQYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFqb3V0ZXIgbGUgbW9kYWwgYXUgRE9NXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vZGFsSFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIMOpbMOpbWVudHMgZHUgbW9kYWxcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZWNhcC1tb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNsb3NlLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGZlcm1lckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mZXJtZXItYnRuJyk7XHJcbiAgICAgICAgY29uc3QgcGFydGFnZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcGFydGFnZXItYnRuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIHBvdXIgZmVybWVyIGxhIG1vZGFsXHJcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHRoaXMuY2xvc2VNYXRjaFJlY2FwKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGVuIGNsaXF1YW50IHN1ciBsYSBjcm9peFxyXG4gICAgICAgIGlmIChjbG9zZUJ0bikge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgZW4gY2xpcXVhbnQgc3VyIGxlIGJvdXRvbiBcIkZlcm1lclwiXHJcbiAgICAgICAgaWYgKGZlcm1lckJ0bikge1xyXG4gICAgICAgICAgICBmZXJtZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFydGFnZXIgbGUgbWF0Y2hcclxuICAgICAgICBpZiAocGFydGFnZXJCdG4pIHtcclxuICAgICAgICAgICAgcGFydGFnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaElkID0gcGFydGFnZXJCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNoLWlkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTWF0Y2hSZWNhcChtYXRjaElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBlbiBjbGlxdWFudCBzdXIgbCdvdmVybGF5IChmb25kIG5vaXIpXHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgYXZlYyBsYSB0b3VjaGUgRXNjYXBlXHJcbiAgICAgICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRXZlbnRzSFRNTChldmVudHMpIHtcclxuICAgICAgICBsZXQgZXZlbnRzSFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50Q2xhc3MgPSAnZXZlbnQtaXRlbSc7XHJcbiAgICAgICAgICAgIGxldCBldmVudEljb24gPSAnZmFzIGZhLWNpcmNsZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEw6lmaW5pciBsJ2ljw7RuZSBldCBsYSBjbGFzc2Ugc2Vsb24gbGUgdHlwZSBkJ2FjdGlvblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ09NQkFUX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXBsYXknO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1zdGFydCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdURUFNX1BSRVNFTlRBVElPTic6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS11c2Vycyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWluZm8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUk9VTkRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtc3dvcmQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1yb3VuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtZmlzdC1yYWlzZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1hdHRhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1zaGllbGQtYWx0JztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtZGVmZW5zZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIRUFMSU5HJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLWhlYXJ0JztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtaGVhbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdWSUNUT1JZJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXRyb3BoeSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LXZpY3RvcnknO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTU1SX1VQREFURSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1jaGFydC1saW5lJztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtbW1yJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NPTUJBVF9FTkQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtc3RvcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWVuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtaW5mbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWRlZmF1bHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGb3JtYXRhZ2Ugc3DDqWNpYWwgcG91ciBsZXMgY3JpdGlxdWVzXHJcbiAgICAgICAgICAgIGlmIChldmVudC5pc19jcml0KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtY3JpdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZvcm1hdGFnZSBkdSBtb250YW50IHMnaWwgZXhpc3RlXHJcbiAgICAgICAgICAgIGxldCBhbW91bnRUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbW91bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudFRleHQgPSBgICgke2V2ZW50LmFtb3VudH0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnRzSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtldmVudENsYXNzfVwiIGRhdGEtZXZlbnQtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHtldmVudEljb259XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXZlbnQtYWN0b3JcIj4ke2V2ZW50LmFjdG9yX25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldmVudC10aW1lXCI+JHtldmVudC5jcmVhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtldmVudC50YXJnZXRfbmFtZX0ke2Ftb3VudFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2V2ZW50LmlzX2NyaXQgPyAnIDxzcGFuIGNsYXNzPVwiY3JpdC1pbmRpY2F0b3JcIj5DUklUSVFVRSE8L3NwYW4+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBldmVudHNIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWF0Y2hSZWNhcCgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZWNhcC1tb2RhbCcpO1xyXG4gICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VCYXR0bGVmaWVsZE1vZGFsKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyIGwnaW50ZXJ2YWxsZSBkZSBjb21tZW50YWlyZXNcclxuICAgICAgICAgICAgY29uc3QgY29tbWVudEludGVydmFsID0gbW9kYWwuZGF0YXNldC5jb21tZW50SW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocGFyc2VJbnQoY29tbWVudEludGVydmFsKSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbW9kYWwuZGF0YXNldC5jb21tZW50SW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFycsOqdGVyIGxlcyB2aWTDqW9zIGRlIGJhY2tncm91bmRcclxuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRmVybWVyIGxlIG1vZGFsXHJcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaGFyZU1hdGNoUmVjYXAobWF0Y2hJZCkge1xyXG4gICAgICAgIC8vIENvcGllciBsZSBsaWVuIHZlcnMgbGUgcHJlc3NlLXBhcGllclxyXG4gICAgICAgIGNvbnN0IHNoYXJlVXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vbWF0Y2gvJHttYXRjaElkfS9yZWNhcGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2hhcmVVcmwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdMaWVuIGRlIHBhcnRhZ2UgY29wacOpICEnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0VycmV1ciBsb3JzIGRlIGxhIGNvcGllJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIHBvdXIgbGVzIG5hdmlnYXRldXJzIHBsdXMgYW5jaWVuc1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIHRleHRBcmVhLnZhbHVlID0gc2hhcmVVcmw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0xpZW4gZGUgcGFydGFnZSBjb3Bpw6kgIScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkZSBsYSBjb3BpZScsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gRXhwb3J0IGdsb2JhbCBwb3VyIGxlcyB0ZXN0c1xyXG53aW5kb3cuR2FtZUludGVyZmFjZSA9IEdhbWVJbnRlcmZhY2U7XHJcblxyXG4vLyBJbml0aWFsaXNhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEF0dGVuZHJlIHVuIHBldSBxdWUgbGUgRE9NIHNvaXQgY29tcGzDqHRlbWVudCBjaGFyZ8OpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVJbnRlcmZhY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW50ZXJmYWNlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfDiWzDqW1lbnQgZ2FtZS1pbnRlcmZhY2UgdHJvdXbDqTonLCBnYW1lSW50ZXJmYWNlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZ2FtZUludGVyZmFjZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lSW50ZXJmYWNlID0gbmV3IEdhbWVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgSW50ZXJmYWNlIGRlIGpldSBTYW50b25zIFNjcmlwdCBUYWN0aWNzIGluaXRpYWxpc8OpZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luc3RhbmNlIGNyw6nDqWU6Jywgd2luZG93LmdhbWVJbnRlcmZhY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCcgw4lsw6ltZW50IC5nYW1lLWludGVyZmFjZSBub24gdHJvdXbDqSBkYW5zIGxlIERPTScpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWVyIGwnaW5zdGFuY2UgcXVhbmQgbcOqbWUgcG91ciBsZXMgZm9uY3Rpb25zIGdsb2JhbGVzXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2FtZUludGVyZmFjZSA9IG5ldyBHYW1lSW50ZXJmYWNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5zdGFuY2UgY3LDqcOpZSBzYW5zIHbDqXJpZmljYXRpb24gRE9NJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnaW5pdGlhbGlzYXRpb24gZGUgbFxcJ2ludGVyZmFjZSBkZSBqZXU6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59KTsiLCIvLyA9PT09PT09PT09PT09PT0gR1VJREUgREUgR1VJTERFIC0gU0FOVE9OUyBTQ1JJUFQgVEFDVElDUyA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIEd1aWxkR3VpZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGlhbG9ndWVTdGF0ZSA9ICd3ZWxjb21lJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVc2VyU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3VpZGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEltYWdlUm90YXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cEF1dG9EaWFsb2d1ZSgpOyAvLyBGb25jdGlvbm5hbGl0w6kgYWpvdXTDqWUgLSBkaWFsb2d1ZSBhdXRvbWF0aXF1ZVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2luaXRpYWxpc2F0aW9uIGR1IGd1aWRlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVc2VyU3RhdHVzKCkge1xyXG4gICAgICAgIC8vIFV0aWxpc2VyIGxlcyBpbmZvcm1hdGlvbnMgcGFzc8OpZXMgZGVwdWlzIFR3aWdcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB3aW5kb3cudXNlckluZm8uaXNMb2dnZWRJbjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB3aW5kb3cudXNlckluZm8udXNlcm5hbWUgfHwgJ0pvdWV1cic7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdHV0IHV0aWxpc2F0ZXVyOicsIHRoaXMuaXNMb2dnZWRJbiA/IGBDb25uZWN0w6kgLSAke3RoaXMudXNlck5hbWV9YCA6ICdOb24gY29ubmVjdMOpJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdy51c2VySW5mbyBub24gZGlzcG9uaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsYSB2w6lyaWZpY2F0aW9uIGR1IHN0YXR1dCB1dGlsaXNhdGV1cjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUd1aWRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGNvbnN0IGd1aWRlSFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWNvbnRhaW5lclwiIGlkPVwiZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1hdmF0YXJcIiBpZD1cImd1aWxkLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2d1aWxkMS5wbmdcIiBhbHQ9XCJHdWlkZSBkZSBHdWlsZGVcIiBpZD1cImd1aWxkLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1kaWFsb2d1ZS1ib3hcIiBpZD1cImd1aWxkLWRpYWxvZ3VlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS10ZXh0XCIgaWQ9XCJkaWFsb2d1ZS10ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS1idXR0b25zXCIgaWQ9XCJkaWFsb2d1ZS1idXR0b25zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWNsb3NlXCIgaWQ9XCJkaWFsb2d1ZS1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZ3VpZGVIVE1MKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWxkLWF2YXRhcicpO1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2d1ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1jbG9zZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF2YXRhcikge1xyXG4gICAgICAgICAgICAgICAgLy8gTGUgR3VpbGQgR3VpZGUgZXN0IFRPVUpPVVJTIGNsaXF1YWJsZSAtIEZvcmNlIGxlIGNsaWNcclxuICAgICAgICAgICAgICAgIGF2YXRhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ/Cfj7AgQ2xpYyBzdXIgR3VpbGQgR3VpZGUgZMOpdGVjdMOpIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZ3VlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTsgLy8gTW9kZSBjYXB0dXJlIHBvdXIgcHJpb3JpdMOpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFN0eWxlIHZpc3VlbCBwb3VyIGluZGlxdWVyIHF1ZSBjJ2VzdCBjbGlxdWFibGVcclxuICAgICAgICAgICAgICAgIGF2YXRhci5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXIudGl0bGUgPSAnQ2xpcXVleiBwb3VyIHBhcmxlciBhdSBHdWlkZSBkZSBHdWlsZGUnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFZmZldCB2aXN1ZWwgYXUgc3Vydm9sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhci5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjNzIGVhc2UnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGF2YXRhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBFbGVtZW50IGd1aWxkLWF2YXRhciBub24gdHJvdXbDqScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xvc2VCdG4pIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2d1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE5lIGZlcm1lciBxdWUgc2kgbGUgY2xpYyBlc3QgdnJhaW1lbnQgw6AgbCdleHTDqXJpZXVyIEVUIHF1ZSBjZSBuJ2VzdCBwYXMgdW4gYm91dG9uIGR1IGRpYWxvZ3VlXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9ndWVCb3ggJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgIWRpYWxvZ3VlQm94LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAhYXZhdGFyPy5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaWFsb2d1ZS1idG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEaWFsb2d1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdhdHRhY2hlbWVudCBkZXMgw6l2w6luZW1lbnRzIEd1aWxkIEd1aWRlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRJbWFnZVJvdGF0aW9uKCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpYWxvZ3VlU3RhdGUgIT09ICdyZXNwb25zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlsZEltYWdlID0gKHRoaXMuY3VycmVudEd1aWxkSW1hZ2UgJSAzKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdFbGVtZW50LnNyYyA9IGBpbWFnZXMvZ3VpbGQke3RoaXMuY3VycmVudEd1aWxkSW1hZ2V9LnBuZ2A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsYSByb3RhdGlvbiBkXFwnaW1hZ2VzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQXV0b0RpYWxvZ3VlKCkge1xyXG4gICAgICAgIC8vIFN5c3TDqG1lIGQnYXV0by1sYW5jZW1lbnQgVU5JUVVFTUVOVCBwb3VyIGxlcyB1dGlsaXNhdGV1cnMgbm9uIGNvbm5lY3TDqXNcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAvLyBQcmVtacOocmUgYXBwYXJpdGlvbiBhdXRvbWF0aXF1ZSBhcHLDqHMgMiBzZWNvbmRlc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7IC8vIERvdWJsZSB2w6lyaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9ndWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBQdWlzIHLDqWFwcGFyaXRpb24gdG91dGVzIGxlcyAzMCBzZWNvbmRlcyBzaSBwYXMgY29ubmVjdMOpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0RpYWxvZ3VlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2d1ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4gJiYgKCFkaWFsb2d1ZUJveCB8fCBkaWFsb2d1ZUJveC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9ndWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMzAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQYXMgZGUgdGltZXIgcG91ciBsZXMgdXRpbGlzYXRldXJzIGNvbm5lY3TDqXMgLSBpbHMgZG9pdmVudCBjbGlxdWVyIG1hbnVlbGxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EaWFsb2d1ZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn8J+PsCBPdXZlcnR1cmUgZHUgZGlhbG9ndWUgR3VpbGQgR3VpZGUnKTtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtZGlhbG9ndWUnKTtcclxuICAgICAgICAgICAgaWYgKGRpYWxvZ3VlQm94KSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93V2VsY29tZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIEVsZW1lbnQgZ3VpbGQtZGlhbG9ndWUgbm9uIHRyb3V2w6knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ291dmVydHVyZSBkdSBkaWFsb2d1ZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGlhbG9ndWUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtZGlhbG9ndWUnKTtcclxuICAgICAgICAgICAgaWYgKGRpYWxvZ3VlQm94KSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ3dlbGNvbWUnO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU2kgdXRpbGlzYXRldXIgbm9uIGNvbm5lY3TDqSwgcmVwcmVuZHJlIGxlIHRpbWVyIGFwcsOocyBmZXJtZXR1cmVcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTmV0dG95ZXIgbCdhbmNpZW4gdGltZXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvRGlhbG9ndWVUaW1lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b0RpYWxvZ3VlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWTDqW1hcnJlciB1biBub3V2ZWF1IHRpbWVyIHBvdXIgMzAgc2Vjb25kZXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9EaWFsb2d1ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1aXMgcmV2ZW5pciBhdSB0aW1lciByw6lndWxpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cEF1dG9EaWFsb2d1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbGEgZmVybWV0dXJlIGR1IGRpYWxvZ3VlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dlbGNvbWVNZXNzYWdlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8cD5Cb25qb3VyIG5vYmxlIMOpdHJhbmdlciwgYmllbnZlbnVlIGF1IDxzdHJvbmc+U2FudG9ucyBTY3JpcHQgVGFjdGljczwvc3Ryb25nPiAhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyw6lleiB2b3RyZSDDqXF1aXBlIGRlIDMgaMOpcm9zIGV0IGFmZnJvbnRleiBkJ2F1dHJlcyBqb3VldXJzIGRhbnMgZGVzIGNvbWJhdHMgdGFjdGlxdWVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Qb3VyIGNvbW1lbmNlciB2b3RyZSBhdmVudHVyZSA6PC9wPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuIHByaW1hcnlcIiBvbmNsaWNrPVwid2luZG93LmxvY2F0aW9uLmhyZWY9Jy9yZWdpc3RlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1wbHVzXCI+PC9pPiBTJ2luc2NyaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBzZWNvbmRhcnlcIiBvbmNsaWNrPVwid2luZG93LmxvY2F0aW9uLmhyZWY9Jy9sb2dpbidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+IFNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRleHRFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Qm9uam91ciA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICR7d2luZG93LnVzZXJJbmZvLnVzZXJuYW1lQ29sb3IgfHwgJyM4YjNhM2EnfVwiPiR7dGhpcy51c2VyTmFtZX08L3N0cm9uZz4sIHF1ZWxsZSBlc3Qgdm90cmUgZGVtYW5kZSA/PC9wPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93R2FtZXBsYXlIZWxwKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZ2FtZXBhZFwiPjwvaT4gQ29tbWVudCBKb3VlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dDaGFyYWN0ZXJSb2xlcygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJzXCI+PC9pPiBSw7RsZXMgZGVzIFBlcnNvbm5hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1RlYW1TdHJhdGVneSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXNzXCI+PC9pPiBTdHJhdMOpZ2llcyBkJ8OJcXVpcGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuIGRlYnVnXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93RGVidWdNZW51KClcIiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZjZiNmI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJ1Z1wiPjwvaT4gRGVidWcgT3V0aWxzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGR1IG1lc3NhZ2UgZGUgYmllbnZlbnVlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dhbWVwbGF5SGVscCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25zRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtYnV0dG9ucycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0ZXh0RWwgfHwgIWJ1dHRvbnNFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8cD5DaG9pc2lzc2V6IGNlIHF1ZSB2b3VzIHNvdWhhaXRleiBhcHByZW5kcmUgOjwvcD5gO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dUZWFtQ3JlYXRpb24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPiBDcsOpZXIgdm90cmUgw4lxdWlwZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93RmluZEJhdHRsZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPiBSZWNoZXJjaGVyIHVuIENvbWJhdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93QXV0b0JhdHRsZSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvaT4gQ29tYmF0IEF1dG9tYXRpcXVlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1dlbGNvbWVNZXNzYWdlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvdXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkZSBsXFwnYWlkZSBnYW1lcGxheTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dDaGFyYWN0ZXJSb2xlcygpIHtcclxuICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgIHRleHRFbC5pbm5lckhUTUwgPSBgPHA+RMOpY291dnJleiBsZXMgZGlmZsOpcmVudHMgcsO0bGVzIGRlIHZvcyBow6lyb3MgOjwvcD5gO1xyXG5cclxuICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93VGFua1JvbGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hpZWxkLWFsdFwiPjwvaT4gVGFua1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd0RQU1JvbGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3dvcmRcIj48L2k+IERQU1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd0hlYWxlclJvbGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+IFNvaWduZXVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuIGJhY2tcIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dXZWxjb21lTWVzc2FnZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvdXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGVhbUNyZWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiQ3LDqWF0aW9uIGQnw4lxdWlwZVwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5Gb3JtZXIgdm90cmUgw6lxdWlwZSBwYXJmYWl0ZSA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2hvaXNpc3NleiA8c3Ryb25nPjMgcGVyc29ubmFnZXM8L3N0cm9uZz4gY29tcGzDqW1lbnRhaXJlczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+w4lxdWlsaWJyZXogVGFuaywgRFBTIGV0IFNvaWduZXVyPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5Db25zdWx0ZXogbGVzIHN0YXRpc3RpcXVlcyB0b3RhbGVzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5UZXN0ZXogZGlmZsOpcmVudGVzIGNvbWJpbmFpc29uczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ZpbmRCYXR0bGUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJSZWNoZXJjaGUgZGUgQ29tYmF0XCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPlRyb3V2ZXIgZGVzIGFkdmVyc2FpcmVzIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5Wb3RyZSDDqXF1aXBlIGRvaXQgw6p0cmUgY29tcGzDqHRlICgzIGjDqXJvcyk8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlIHN5c3TDqG1lIHRyb3V2ZSB1biBhZHZlcnNhaXJlIMOpcXVpdGFibGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkF0dGVuZGV6IGxhIGNvbmZpcm1hdGlvbiBkZSBtYXRjaDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RldGFpbGVkUmVzcG9uc2UodGl0bGUsIGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ3VlU3RhdGUgPSAncmVzcG9uc2UnO1xyXG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtaW1nJyk7XHJcbiAgICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgaW1nRWxlbWVudC5zcmMgPSAnaW1hZ2VzL2d1aWxkNC5wbmcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLXRleHQnKTtcclxuICAgICAgICBjb25zdCBidXR0b25zRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtYnV0dG9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGV4dEVsKSB7XHJcbiAgICAgICAgICAgIHRleHRFbC5pbm5lckhUTUwgPSBgPGgzPiR7dGl0bGV9PC9oMz4ke2NvbnRlbnR9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChidXR0b25zRWwpIHtcclxuICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUucmV0dXJuVG9QcmV2aW91c01lbnUoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVyblRvUHJldmlvdXNNZW51KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9ndWVTdGF0ZSA9ICdtZW51JztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZSA9IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtaW1nJyk7XHJcbiAgICAgICAgICAgIGlmIChpbWdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWdFbGVtZW50LnNyYyA9IGBpbWFnZXMvZ3VpbGQke3RoaXMuY3VycmVudEd1aWxkSW1hZ2V9LnBuZ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93V2VsY29tZU1lc3NhZ2UoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGR1IHJldG91ciBhdSBtZW51IHByw6ljw6lkZW50OicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RlYW1TdHJhdGVneSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25zRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtYnV0dG9ucycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0ZXh0RWwgfHwgIWJ1dHRvbnNFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8cD5DaG9pc2lzc2V6IGxlIHR5cGUgZGUgc3RyYXTDqWdpZSDDoCBhcHByZW5kcmUgOjwvcD5gO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dCYWxhbmNlZFN0cmF0ZWd5KClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYWxhbmNlLXNjYWxlXCI+PC9pPiDDiXF1aXBlIMOJcXVpbGlicsOpZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93QWdncmVzc2l2ZVN0cmF0ZWd5KClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maXJlXCI+PC9pPiBTdHJhdMOpZ2llIEFncmVzc2l2ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93RGVmZW5zaXZlU3RyYXRlZ3koKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNoaWVsZFwiPjwvaT4gU3RyYXTDqWdpZSBEw6lmZW5zaXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1dlbGNvbWVNZXNzYWdlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvdXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkZXMgc3RyYXTDqWdpZXMgZFxcJ8OpcXVpcGU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QmFsYW5jZWRTdHJhdGVneSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIsOJcXVpcGUgw4lxdWlsaWJyw6llXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkxhIGNvbXBvc2l0aW9uIGNsYXNzaXF1ZSA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4xIFRhbms8L3N0cm9uZz4gLSBBYnNvcmJlIGxlcyBkw6lnw6J0czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4xIERQUzwvc3Ryb25nPiAtIEluZmxpZ2UgbGVzIGTDqWfDonRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgU29pZ25ldXI8L3N0cm9uZz4gLSBNYWludGllbnQgbCfDqXF1aXBlIGVuIHZpZTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPkNldHRlIGNvbXBvc2l0aW9uIG9mZnJlIHVuZSBib25uZSBwb2x5dmFsZW5jZSBwb3VyIHRvdXMgdHlwZXMgZCdhZHZlcnNhaXJlcy48L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FnZ3Jlc3NpdmVTdHJhdGVneSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlN0cmF0w6lnaWUgQWdyZXNzaXZlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPk1heGltdW0gZGUgZMOpZ8OidHMgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MiBEUFM8L3N0cm9uZz4gLSBEb3VibGUgcHVpc3NhbmNlIGQnYXR0YXF1ZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4xIFRhbms8L3N0cm9uZz4gLSBQcm90ZWN0aW9uIG1pbmltYWxlPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+SWTDqWFsIGNvbnRyZSBkZXMgw6lxdWlwZXMgZMOpZmVuc2l2ZXMsIG1haXMgcmlzcXXDqSBmYWNlIMOgIGQnYXV0cmVzIMOpcXVpcGVzIGFncmVzc2l2ZXMuPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWZlbnNpdmVTdHJhdGVneSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlN0cmF0w6lnaWUgRMOpZmVuc2l2ZVwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5TdXJ2aWUgbWF4aW1hbGUgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MSBUYW5rPC9zdHJvbmc+IC0gUHJvdGVjdGlvbiBwcmluY2lwYWxlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjIgU29pZ25ldXJzPC9zdHJvbmc+IC0gUsOpY3Vww6lyYXRpb24gY29uc3RhbnRlPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+UGFyZmFpdCBwb3VyIHN1cnZpdnJlIGF1eCDDqXF1aXBlcyBhZ3Jlc3NpdmVzIGV0IGdhZ25lciBwYXIgZW5kdXJhbmNlLjwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGFua1JvbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJSw7RsZSBUYW5rXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkxlIHByb3RlY3RldXIgZGUgbCfDqXF1aXBlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlBvaW50cyBkZSBWaWUgw6lsZXbDqXM8L3N0cm9uZz4gLSBFbmNhaXNzZSBsZXMgZMOpZ8OidHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RMOpZmVuc2Ugw6lsZXbDqWU8L3N0cm9uZz4gLSBSw6lkdWl0IGxlcyBkw6lnw6J0cyByZcOndXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q29tcMOpdGVuY2VzIGTDqWZlbnNpdmVzPC9zdHJvbmc+IC0gUHJvdMOoZ2UgbGVzIGFsbGnDqXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5QbGFjZXogdG91am91cnMgdm90cmUgVGFuayBlbiBwcmVtacOocmUgbGlnbmUgITwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RFBTUm9sZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlLDtGxlIERQU1wiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5MZSBkZXN0cnVjdGV1ciBkJ2VubmVtaXMgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+QXR0YXF1ZSDDqWxldsOpZTwvc3Ryb25nPiAtIEluZmxpZ2UgZGUgZ3JvcyBkw6lnw6J0czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5WaXRlc3NlIMOpbGV2w6llPC9zdHJvbmc+IC0gRnJhcHBlIGVuIHByZW1pZXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q29tcMOpdGVuY2VzIG9mZmVuc2l2ZXM8L3N0cm9uZz4gLSDDiWxpbWluYXRpb25zIHJhcGlkZXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5MZSBEUFMgZG9pdCBjaWJsZXIgbGVzIGVubmVtaXMgbGVzIHBsdXMgZGFuZ2VyZXV4IGVuIHByZW1pZXIgITwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SGVhbGVyUm9sZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlLDtGxlIFNvaWduZXVyXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkxlIHNvdXRpZW4gZGUgbCfDqXF1aXBlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNvbXDDqXRlbmNlcyBkZSBzb2luPC9zdHJvbmc+IC0gUmVzdGF1cmUgbGVzIFBWPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkJ1ZmZzIGQnw6lxdWlwZTwvc3Ryb25nPiAtIEFtw6lsaW9yZSBsZXMgYWxsacOpczwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5NYWdpZSDDqWxldsOpZTwvc3Ryb25nPiAtIFNvaW5zIHBsdXMgcHVpc3NhbnRzPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+TGUgU29pZ25ldXIgZG9pdCByZXN0ZXIgZW4gc8OpY3VyaXTDqSBkZXJyacOocmUgbGEgbGlnbmUgZGUgZnJvbnQgITwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QXV0b0JhdHRsZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIkNvbWJhdCBBdXRvbWF0aXF1ZVwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5Db21tZW50IGZvbmN0aW9ubmUgbGUgY29tYmF0IDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5MZXMgY29tYmF0cyBzb250IDxzdHJvbmc+YXV0b21hdGlxdWVzPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5CYXPDqXMgc3VyIGxlcyA8c3Ryb25nPnN0YXRpc3RpcXVlczwvc3Ryb25nPiBkZSB2b3MgaMOpcm9zPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5DaGFxdWUgcGVyc29ubmFnZSB1dGlsaXNlIHNlcyA8c3Ryb25nPmNvbXDDqXRlbmNlczwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGEgPHN0cm9uZz5zdHJhdMOpZ2llIGQnw6lxdWlwZTwvc3Ryb25nPiBlc3QgaW1wb3J0YW50ZTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPkNvbmNlbnRyZXotdm91cyBzdXIgbGEgZm9ybWF0aW9uIGV0IGwnw6lxdWlwZW1lbnQgZGUgdm90cmUgw6lxdWlwZSAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZWJ1Z01lbnUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLXRleHQnKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLWJ1dHRvbnMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGV4dEVsIHx8ICFidXR0b25zRWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRleHRFbC5pbm5lckhUTUwgPSBgPHA+T3V0aWxzIGRlIGTDqXZlbG9wcGVtZW50IGV0IGRlYnVnIDo8L3A+YDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnNFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5ydW5Qb3NpdGlvbmluZ1Rlc3QoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNyb3NzaGFpcnNcIj48L2k+IFRlc3QgUG9zaXRpb25uZW1lbnRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuZGVidWdBY3RpdmVDb21iYXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN3b3JkXCI+PC9pPiBEZWJ1ZyBDb21iYXQgQWN0dWVsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dTeXN0ZW1JbmZvKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT4gSW5mb3JtYXRpb25zIFN5c3TDqG1lXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1dlbGNvbWVNZXNzYWdlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvdXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkdSBtZW51IGRlYnVnOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcnVuUG9zaXRpb25pbmdUZXN0KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiVGVzdCBkZSBQb3NpdGlvbm5lbWVudFwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5UZXN0IGVuIGNvdXJzLi4uPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8cD5Ww6lyaWZpZXogbGEgY29uc29sZSAoRjEyKSBwb3VyIGxlcyBkw6l0YWlscyBkdSB0ZXN0LjwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMYW5jZXIgbGUgdGVzdCBkZSBwb3NpdGlvbm5lbWVudFxyXG4gICAgICAgIGlmICh3aW5kb3cuZGVidWdQb3NpdGlvbmluZykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZGVidWdQb3NpdGlvbmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBGb25jdGlvbiBkZWJ1Z1Bvc2l0aW9uaW5nIG5vbiBkaXNwb25pYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnQWN0aXZlQ29tYmF0KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiRGVidWcgQ29tYmF0IEFjdHVlbFwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz5BbmFseXNlIGR1IGNvbWJhdCBlbiBjb3Vycy4uLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHA+VsOpcmlmaWV6IGxhIGNvbnNvbGUgKEYxMikgcG91ciBsZXMgZMOpdGFpbHMuPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERlYnVnIGR1IGNvbWJhdCBhY3R1ZWxcclxuICAgICAgICBpZiAod2luZG93LmRlYnVnQ29tYmF0UG9zaXRpb25pbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LmRlYnVnQ29tYmF0UG9zaXRpb25pbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgRm9uY3Rpb24gZGVidWdDb21iYXRQb3NpdGlvbmluZyBub24gZGlzcG9uaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93U3lzdGVtSW5mbygpIHtcclxuICAgICAgICBjb25zdCBjb21iYXQzZEF2YWlsYWJsZSA9IHR5cGVvZiBDb21iYXQzRFN5c3RlbSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgY29uc3QgZ2FtZUludGVyZmFjZUF2YWlsYWJsZSA9IHR5cGVvZiBnYW1lSW50ZXJmYWNlICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0F2YWlsYWJsZSA9IHR5cGVvZiB3aW5kb3cuZGVidWdQb3NpdGlvbmluZyAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJJbmZvcm1hdGlvbnMgU3lzdMOobWVcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+w4l0YXQgZGVzIGNvbXBvc2FudHMgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNvbWJhdDNEU3lzdGVtOiAke2NvbWJhdDNkQXZhaWxhYmxlID8gJ+KchSBEaXNwb25pYmxlJyA6ICfinYwgTm9uIGRpc3BvbmlibGUnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+R2FtZSBJbnRlcmZhY2U6ICR7Z2FtZUludGVyZmFjZUF2YWlsYWJsZSA/ICfinIUgRGlzcG9uaWJsZScgOiAn4p2MIE5vbiBkaXNwb25pYmxlJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkRlYnVnIFRvb2xzOiAke2RlYnVnQXZhaWxhYmxlID8gJ+KchSBEaXNwb25pYmxlJyA6ICfinYwgTm9uIGRpc3BvbmlibGUnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VXRpbGlzYXRldXI6ICR7dGhpcy5pc0xvZ2dlZEluID8gYOKchSAke3RoaXMudXNlck5hbWV9YCA6ICfinYwgTm9uIGNvbm5lY3TDqSd9PC9saT5cclxuICAgICAgICAgICAgPC91bD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGlzYXRpb25cclxud2luZG93Lmd1aWxkR3VpZGUgPSBudWxsO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5ndWlsZEd1aWRlID0gbmV3IEd1aWxkR3VpZGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+PsCBHdWlkZSBkZSBndWlsZGUgaW5pdGlhbGlzw6knKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnaW5pdGlhbGlzYXRpb24gZHUgZ3VpZGUgZGUgZ3VpbGRlOicsIGVycm9yKTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8vIFZhcmlhYmxlcyBnbG9iYWxlcyBwb3VyIGxlIG1hdGNobWFraW5nXHJcbmxldCBzdGF0dXNDaGVja0ludGVydmFsO1xyXG5sZXQgbWF0Y2htYWtpbmcgPSB7XHJcbiAgICBpblF1ZXVlOiBmYWxzZSxcclxuICAgIHRlYW1JZDogbnVsbFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGlzZXIgbGUgc3lzdMOobWUgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGluaXRpYWxpemVNYXRjaG1ha2luZygpO1xyXG4gICAgY2hlY2tDdXJyZW50U3RhdHVzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1hdGNobWFraW5nKCkge1xyXG4gICAgLy8gQm91dG9uIGRlIHJlY2hlcmNoZSBkZSBtYXRjaFxyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXR0bGUtYnRuJyk7XHJcbiAgICBpZiAoc2VhcmNoQnRuKSB7XHJcbiAgICAgICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGpvaW5NYXRjaG1ha2luZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJvdXRvbiBkJ2FubnVsYXRpb25cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtcXVldWUnKTtcclxuICAgIGlmIChjYW5jZWxCdG4pIHtcclxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2FuY2VsTWF0Y2htYWtpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb3V0b24gcmV0b3VyIMOgIGxhIHJlY2hlcmNoZVxyXG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLXRvLXNlYXJjaCcpO1xyXG4gICAgaWYgKGJhY2tCdG4pIHtcclxuICAgICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJlc2V0VG9TZWFyY2goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gam9pbk1hdGNobWFraW5nKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXR0bGUtYnRuJyk7XHJcbiAgICBjb25zdCB0ZWFtSWQgPSBzZWFyY2hCdG4/LmRhdGFzZXQudGVhbUlkIHx8ICcxJzsgLy8gVmFsZXVyIHBhciBkw6lmYXV0XHJcbiAgICBcclxuICAgIC8vIETDqXNhY3RpdmVyIGxlIGJvdXRvbiBwZW5kYW50IGxhIHJlcXXDqnRlXHJcbiAgICBpZiAoc2VhcmNoQnRuKSB7XHJcbiAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gQ29ubmV4aW9uLi4uJztcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9qb2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGVhbV9pZDogcGFyc2VJbnQodGVhbUlkKSB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLnRlYW1JZCA9IHRlYW1JZDtcclxuICAgICAgICAgICAgc2hvd01hdGNobWFraW5nU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0U3RhdHVzQ2hlY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChkYXRhLmVycm9yIHx8ICdFcnJldXIgbG9ycyBkZSBsYSByZWNoZXJjaGUgZGUgbWF0Y2gnKTtcclxuICAgICAgICAgICAgcmVzZXRTZWFyY2hCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpO1xyXG4gICAgICAgIGFsZXJ0KCdFcnJldXIgZGUgY29ubmV4aW9uJyk7XHJcbiAgICAgICAgcmVzZXRTZWFyY2hCdXR0b24oKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxNYXRjaG1ha2luZygpIHtcclxuICAgIGZldGNoKCcvYXBpL21hdGNobWFraW5nL2NhbmNlbCcsIHsgbWV0aG9kOiAnUE9TVCcgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBoaWRlTWF0Y2htYWtpbmdTdGF0dXMoKTtcclxuICAgICAgICAgICAgc3RvcFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2FubnVsYXRpb246JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0U2VhcmNoQnV0dG9uKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXR0bGUtYnRuJyk7XHJcbiAgICBpZiAoc2VhcmNoQnRuKSB7XHJcbiAgICAgICAgLy8gTmUgcGx1cyBmb3JjZXIgbCdhY3RpdmF0aW9uIC0gbGFpc3NlciB0ZWFtLW1hbmFnZW1lbnQuanMgZ8OpcmVyIGwnw6l0YXRcclxuICAgICAgICBzZWFyY2hCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT4gUmVjaGVyY2hlciB1biBNYXRjaCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgdW5lIGluc3RhbmNlIGRlIFRlYW1NYW5hZ2VtZW50IGV4aXN0ZSwgbGFpc3NlciB1cGRhdGVCYXR0bGVUYWIoKSBnw6lyZXIgbCfDqXRhdFxyXG4gICAgICAgIGlmICh3aW5kb3cudGVhbU1hbmFnZW1lbnQgJiYgdHlwZW9mIHdpbmRvdy50ZWFtTWFuYWdlbWVudC51cGRhdGVCYXR0bGVUYWIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgd2luZG93LnRlYW1NYW5hZ2VtZW50LnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIHbDqXJpZmllciBtYW51ZWxsZW1lbnQgbGUgbm9tYnJlIGRlIHBlcnNvbm5hZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1TaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1zbG90Lm9jY3VwaWVkJykubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAodGVhbVNpemUgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNYXRjaG1ha2luZ1N0YXR1cygpIHtcclxuICAgIGNvbnN0IHRlYW1TZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1zZWxlY3Rpb24nKTtcclxuICAgIGNvbnN0IG1hdGNobWFraW5nU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNobWFraW5nLXN0YXR1cycpO1xyXG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2gtcmVzdWx0Jyk7XHJcbiAgICBcclxuICAgIGlmICh0ZWFtU2VsZWN0aW9uKSB0ZWFtU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpZiAobWF0Y2htYWtpbmdTdGF0dXMpIG1hdGNobWFraW5nU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgaWYgKG1hdGNoUmVzdWx0KSBtYXRjaFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTWF0Y2htYWtpbmdTdGF0dXMoKSB7XHJcbiAgICBjb25zdCB0ZWFtU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0tc2VsZWN0aW9uJyk7XHJcbiAgICBjb25zdCBtYXRjaG1ha2luZ1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaG1ha2luZy1zdGF0dXMnKTtcclxuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLXJlc3VsdCcpO1xyXG4gICAgXHJcbiAgICBpZiAodGVhbVNlbGVjdGlvbikgdGVhbVNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGlmIChtYXRjaG1ha2luZ1N0YXR1cykgbWF0Y2htYWtpbmdTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChtYXRjaFJlc3VsdCkgbWF0Y2hSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJlc2V0U2VhcmNoQnV0dG9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNYXRjaFJlc3VsdChyZXN1bHQpIHtcclxuICAgIGNvbnN0IHRlYW1TZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1zZWxlY3Rpb24nKTtcclxuICAgIGNvbnN0IG1hdGNobWFraW5nU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNobWFraW5nLXN0YXR1cycpO1xyXG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2gtcmVzdWx0Jyk7XHJcbiAgICBcclxuICAgIGlmICh0ZWFtU2VsZWN0aW9uKSB0ZWFtU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpZiAobWF0Y2htYWtpbmdTdGF0dXMpIG1hdGNobWFraW5nU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpZiAobWF0Y2hSZXN1bHQpIG1hdGNoUmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCByZXN1bHRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtdGl0bGUnKTtcclxuICAgIFxyXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaXNXaW5uZXIgPSByZXN1bHQud2lubmVyX3RlYW1faWQgPT0gbWF0Y2htYWtpbmcudGVhbUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXN1bHRUaXRsZSkge1xyXG4gICAgICAgICAgICByZXN1bHRUaXRsZS50ZXh0Q29udGVudCA9ICfimpTvuI8gQ09NQkFUIFRFUk1JTsOJICEnO1xyXG4gICAgICAgICAgICByZXN1bHRUaXRsZS5jbGFzc05hbWUgPSAndGV4dC1pbmZvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY2FyZCBjb21wbGV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Wb3RyZSDDqXF1aXBlOjwvc3Ryb25nPiAke3Jlc3VsdC50ZWFtMV9wb3dlciB8fCAnTi9BJ30gcHRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+w4lxdWlwZSBhZHZlcnNlOjwvc3Ryb25nPiAke3Jlc3VsdC50ZWFtMl9wb3dlciB8fCAnTi9BJ30gcHRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RHVyw6llOjwvc3Ryb25nPiAke3Jlc3VsdC5kdXJhdGlvbiB8fCAnTi9BJ30gcm91bmRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWF0Y2gtY29tcGxldGVkLW1lc3NhZ2VcIj5MZSBjb21iYXQgcydlc3QgZMOpcm91bMOpICEgVm91bGV6LXZvdXMgdm9pciBsZSBkw6lyb3VsZW1lbnQgPzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWFjdGlvbnMtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29tYmF0LXZpZXdcIiBvbmNsaWNrPVwiZ2FtZUludGVyZmFjZS5zaG93Q29tYmF0VmlzdWFsaXphdGlvbigke3Jlc3VsdC5tYXRjaF9pZH0pXCIgdGl0bGU9XCJWb2lyIGxlIGNvbWJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbGF5LWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vm9pciBsZSBDb21iYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbmV3LW1hdGNoXCIgb25jbGljaz1cInJlc2V0VG9TZWFyY2goKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1yZWRvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3V2ZWF1IENvbWJhdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFRvU2VhcmNoKCkge1xyXG4gICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgaGlkZU1hdGNobWFraW5nU3RhdHVzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U3RhdHVzQ2hlY2soKSB7XHJcbiAgICBzdGF0dXNDaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hlY2tTdGF0dXMsIDIwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wU3RhdHVzQ2hlY2soKSB7XHJcbiAgICBpZiAoc3RhdHVzQ2hlY2tJbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhdHVzQ2hlY2tJbnRlcnZhbCk7XHJcbiAgICAgICAgc3RhdHVzQ2hlY2tJbnRlcnZhbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xyXG4gICAgLy8gVsOpcmlmaWNhdGlvbiB0ZW1wb3JhaXJlIHBvdXIgw6l2aXRlciBsZSBzcGFtIHBlbmRhbnQgbGVzIHRlc3RzIDNEXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCd0ZXN0JykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+nqiBBcnLDqnQgdGVtcG9yYWlyZSBkdSBwb2xsaW5nIEFQSSBwZW5kYW50IGxlcyB0ZXN0cyAzRCcpO1xyXG4gICAgICAgIHN0b3BTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvc3RhdHVzJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVN0YXR1c0Rpc3BsYXkoZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnTUFUQ0hfUkVTVUxUX1BFTkRJTkcnKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RvcFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgICAgIHNob3dDb21iYXRQZW5kaW5nUmVzdWx0KGRhdGEubWF0Y2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICdNQVRDSF9GT1VORCcpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdG9wU3RhdHVzQ2hlY2soKTtcclxuICAgICAgICAgICAgc2hvd01hdGNoUmVzdWx0KGRhdGEubWF0Y2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICdOT1RfSU5fUVVFVUUnKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaGlkZU1hdGNobWFraW5nU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHN0b3BTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHbDqXJpZmljYXRpb24gZHUgc3RhdHV0OicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdGF0dXNEaXNwbGF5KGRhdGEpIHtcclxuICAgIGNvbnN0IHN0YXR1c1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLXRleHQnKTtcclxuICAgIGNvbnN0IHdhaXRpbmdUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXRpbmctdGltZScpO1xyXG4gICAgY29uc3QgcGxheWVyc0luUXVldWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVycy1pbi1xdWV1ZScpO1xyXG4gICAgXHJcbiAgICBpZiAoc3RhdHVzVGV4dCkge1xyXG4gICAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSBkYXRhLnN0YXR1cyA9PT0gJ1NFQVJDSElORycgPyAnUmVjaGVyY2hlIGVuIGNvdXJzLi4uJyA6ICdFbiBhdHRlbnRlLi4uJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHdhaXRpbmdUaW1lICYmIGRhdGEud2FpdGluZ190aW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YWl0aW5nVGltZS50ZXh0Q29udGVudCA9IGBUZW1wcyBkJ2F0dGVudGU6ICR7ZGF0YS53YWl0aW5nX3RpbWV9IHNlY29uZGVzYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBsYXllcnNJblF1ZXVlICYmIGRhdGEucGxheWVyc19pbl9xdWV1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGxheWVyc0luUXVldWUudGV4dENvbnRlbnQgPSBgSm91ZXVycyBlbiBmaWxlOiAke2RhdGEucGxheWVyc19pbl9xdWV1ZX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0N1cnJlbnRTdGF0dXMoKSB7XHJcbiAgICBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9zdGF0dXMnKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnU0VBUkNISU5HJykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2hvd01hdGNobWFraW5nU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0U3RhdHVzQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSB2w6lyaWZpY2F0aW9uIGR1IHN0YXR1dCBpbml0aWFsOicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBOb3V2ZWxsZSBmb25jdGlvbiBwb3VyIGFmZmljaGVyIHVuIG1hdGNoIGVuIGF0dGVudGUgZGUgdmlzdWFsaXNhdGlvblxyXG5mdW5jdGlvbiBzaG93Q29tYmF0UGVuZGluZ1Jlc3VsdChtYXRjaERhdGEpIHtcclxuICAgIGhpZGVNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSAnY29tYmF0LXBlbmRpbmctbm90aWZpY2F0aW9uJztcclxuICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlbmRpbmctY29tYmF0LWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlbmRpbmctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+4pqU77iPIENvbWJhdCBUZXJtaW7DqSAhPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlZvdHJlIGNvbWJhdCB2aWVudCBkZSBzZSB0ZXJtaW5lci4gVm91bGV6LXZvdXMgdm9pciBjZSBxdWkgcydlc3QgcGFzc8OpID88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVuZGluZy1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXZpZXctY29tYmF0XCIgb25jbGljaz1cInZpZXdDb21iYXRWaXN1YWxpemF0aW9uKCR7bWF0Y2hEYXRhLmlkfSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+IFZvaXIgbGUgQ29tYmF0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc2tpcC1jb21iYXRcIiBvbmNsaWNrPVwic2tpcENvbWJhdFZpc3VhbGl6YXRpb24oJHttYXRjaERhdGEuaWR9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZvcndhcmRcIj48L2k+IFBhc3NlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59XHJcblxyXG4vLyBFeHBvc2l0aW9uIGRlcyBmb25jdGlvbnMgZ2xvYmFsZXNcclxud2luZG93LnZpZXdDb21iYXRWaXN1YWxpemF0aW9uID0gdmlld0NvbWJhdFZpc3VhbGl6YXRpb247XHJcbndpbmRvdy5za2lwQ29tYmF0VmlzdWFsaXphdGlvbiA9IHNraXBDb21iYXRWaXN1YWxpemF0aW9uO1xyXG5cclxuLy8gRm9uY3Rpb24gcG91ciB2b2lyIGxhIHZpc3VhbGlzYXRpb24gZHUgY29tYmF0XHJcbmFzeW5jIGZ1bmN0aW9uIHZpZXdDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTWFycXVlciBsZSBjb21iYXQgY29tbWUgdmlzdWFsaXPDqVxyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vbWFyay12aWV3ZWRgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGxhIG5vdGlmaWNhdGlvblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21iYXQtcGVuZGluZy1ub3RpZmljYXRpb24nKTtcclxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGEgdmlzdWFsaXNhdGlvbiBkdSBjb21iYXRcclxuICAgICAgICBpZiAod2luZG93LmdhbWVJbnRlcmZhY2UgJiYgd2luZG93LmdhbWVJbnRlcmZhY2Uuc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24pIHtcclxuICAgICAgICAgICAgYXdhaXQgd2luZG93LmdhbWVJbnRlcmZhY2Uuc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW50ZXJmYWNlIGRlIGpldSBub24gZGlzcG9uaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgdmlzdWFsaXNhdGlvbiBkdSBjb21iYXQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBGb25jdGlvbiBwb3VyIHBhc3NlciBsYSB2aXN1YWxpc2F0aW9uXHJcbmFzeW5jIGZ1bmN0aW9uIHNraXBDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTWFycXVlciBsZSBjb21iYXQgY29tbWUgdmlzdWFsaXPDqVxyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vbWFyay12aWV3ZWRgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGxhIG5vdGlmaWNhdGlvblxyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21iYXQtcGVuZGluZy1ub3RpZmljYXRpb24nKTtcclxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT3B0aW9ubmVsOiBhZmZpY2hlciB1biBtZXNzYWdlIHNpbXBsZSBhdmVjIGxlIHLDqXN1bHRhdFxyXG4gICAgICAgIHNob3dTaW1wbGVNYXRjaFJlc3VsdChtYXRjaElkKTtcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgcGFzc2FnZSBkdSBjb21iYXQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBGb25jdGlvbiBwb3VyIGFmZmljaGVyIHVuIHLDqXN1bHRhdCBzaW1wbGUgc2FucyBhbmltYXRpb25cclxuYXN5bmMgZnVuY3Rpb24gc2hvd1NpbXBsZU1hdGNoUmVzdWx0KG1hdGNoSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9tYXRjaG1ha2luZy9tYXRjaC8ke21hdGNoSWR9YCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIHVuIHNpbXBsZSBtZXNzYWdlIGRlIHLDqXN1bHRhdFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2UgPSBtYXRjaERhdGEuaXNfd2lubmVyID8gXHJcbiAgICAgICAgICAgICfwn46JIFZpY3RvaXJlICEgVm91cyBhdmV6IHJlbXBvcnTDqSBjZSBjb21iYXQgIScgOiBcclxuICAgICAgICAgICAgJ/CfmJQgRMOpZmFpdGUuLi4gVm91cyBwb3VycmV6IHZvdXMgdmVuZ2VyIGxhIHByb2NoYWluZSBmb2lzICEnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciB1bmUgbm90aWZpY2F0aW9uIHNpbXBsZVxyXG4gICAgICAgIGlmICh3aW5kb3cuc2hvd05vdGlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2hvd05vdGlmaWNhdGlvbihyZXN1bHRNZXNzYWdlLCBtYXRjaERhdGEuaXNfd2lubmVyID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGR1IHLDqXN1bHRhdCBzaW1wbGU6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIEdFU1RJT04gRCfDiVFVSVBFIC0gU0FOVE9OUyBTQ1JJUFQgVEFDVElDUyA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIFRlYW1NYW5hZ2VtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9ICd0ZWFtJztcclxuICAgICAgICB0aGlzLnBsYXllclRlYW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2hhcmFjdGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTbG90ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwVGFicygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFBsYXllclRlYW0oKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEdFU1RJT04gREVTIE9OR0xFVFMgPT09PT09PT09PT09PT09XHJcbiAgICBzZXR1cFRhYnMoKSB7XHJcbiAgICAgICAgY29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItYnV0dG9uJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYk5hbWUgPSBidXR0b24uZGF0YXNldC50YWI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYih0YWJOYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoVGFiKHRhYk5hbWUpIHtcclxuICAgICAgICAvLyBEw6lzYWN0aXZlciB0b3VzIGxlcyBvbmdsZXRzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b24nKS5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItcGFuZWwnKS5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBY3RpdmVyIGwnb25nbGV0IHPDqWxlY3Rpb25uw6lcclxuICAgICAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YWI9XCIke3RhYk5hbWV9XCJdYCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YWJOYW1lfS1wYW5lbGApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhY3RpdmVCdXR0b24pIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoYWN0aXZlUGFuZWwpIGFjdGl2ZVBhbmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYk5hbWU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFjdGlvbnMgc3DDqWNpZmlxdWVzIHBhciBvbmdsZXRcclxuICAgICAgICBpZiAodGFiTmFtZSA9PT0gJ2NoYXJhY3RlcnMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUNoYXJhY3RlcnMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhYk5hbWUgPT09ICdiYXR0bGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBHRVNUSU9OIERFIEwnw4lRVUlQRSA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGxvYWRQbGF5ZXJUZWFtKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvdGVhbScpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWRQbGF5ZXJUZWFtIHJlc3BvbnNlOicsIGRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUZWFtID0gZGF0YS50ZWFtO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRlYW1EaXNwbGF5KGRhdGEuY2hhcmFjdGVycyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyVGVhbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHRlYW0gZm91bmQsIGNyZWF0aW5nIGF1dG9tYXRpY2FsbHkuLi4nKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlVGVhbUF1dG9tYXRpY2FsbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGUgbFxcJ8OpcXVpcGU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGVUZWFtQXV0b21hdGljYWxseSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL3RlYW0vY3JlYXRlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyVGVhbSA9IGRhdGEudGVhbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignw4lxdWlwZSBjcsOpw6llIGF1dG9tYXRpcXVlbWVudCAhJywgJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjcsOpYXRpb24gZFxcJ8OpcXVpcGU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUZWFtRGlzcGxheSh0ZWFtQ2hhcmFjdGVycyA9IFtdKSB7XHJcbiAgICAgICAgY29uc3Qgc2xvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLXNsb3QnKTtcclxuICAgICAgICBcclxuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSB0ZWFtQ2hhcmFjdGVyc1tpbmRleF0gfHwgbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBzbG90LnF1ZXJ5U2VsZWN0b3IoJy5zbG90LXBsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ke2NoYXJhY3Rlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcmFjdGVyLXJvbGVcIj4ke2NoYXJhY3Rlci5yb2xlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkhQOiAke2NoYXJhY3Rlci5ocH0gfCBBVEs6ICR7Y2hhcmFjdGVyLmF0a30gfCBERUY6ICR7Y2hhcmFjdGVyLmRlZn08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS1jaGFyYWN0ZXJcIiBkYXRhLWNoYXJhY3Rlci1pZD1cIiR7Y2hhcmFjdGVyLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDDiXbDqW5lbWVudCBkZSBzdXBwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gc2xvdC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNoYXJhY3RlcicpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hhcmFjdGVyKGNoYXJhY3Rlci5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkjDqXJvcyAke2luZGV4ICsgMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QucmVtb3ZlKCdvY2N1cGllZCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDDiXbDqW5lbWVudCBkJ2Fqb3V0XHJcbiAgICAgICAgICAgICAgICBzbG90Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNsb3QgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYignY2hhcmFjdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignU8OpbGVjdGlvbm5leiB1biBwZXJzb25uYWdlIMOgIGFqb3V0ZXInLCAnaW5mbycpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvcmNlciBsYSBtaXNlIMOgIGpvdXIgZHUgYm91dG9uIGJhdGFpbGxlIGF2ZWMgdW4gZMOpbGFpIHBsdXMgbG9uZ1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBHRVNUSU9OIERFUyBQRVJTT05OQUdFUyA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGxvYWRDaGFyYWN0ZXJzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvY2hhcmFjdGVycycpO1xyXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUNoYXJhY3RlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHBlcnNvbm5hZ2VzOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNoYXJhY3RlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXJhY3RlcnMtZ3JpZCcpO1xyXG4gICAgICAgIGlmICghY29udGFpbmVyIHx8ICF0aGlzLmF2YWlsYWJsZUNoYXJhY3RlcnMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2hhcmFjdGVycy5mb3JFYWNoKGNoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2FyZC5jbGFzc05hbWUgPSAnY2hhcmFjdGVyLWNhcmQnO1xyXG4gICAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiR7Y2hhcmFjdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYXJhY3Rlci1yb2xlIHJvbGUtJHtjaGFyYWN0ZXIucm9sZS50b0xvd2VyQ2FzZSgpfVwiPiR7Y2hhcmFjdGVyLnJvbGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuKdpO+4jyAke2NoYXJhY3Rlci5ocH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuKalO+4jyAke2NoYXJhY3Rlci5hdGt9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5uh77iPICR7Y2hhcmFjdGVyLmRlZn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkqggJHtjaGFyYWN0ZXIuc3BkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+UpSAke2NoYXJhY3Rlci5jcml0fSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkpogJHtjaGFyYWN0ZXIuaGVhbCB8fCAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1jaGFyYWN0ZXItYnRuXCIgZGF0YS1jaGFyYWN0ZXItaWQ9XCIke2NoYXJhY3Rlci5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiBBam91dGVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIMOJdsOpbmVtZW50IGQnYWpvdXRcclxuICAgICAgICAgICAgY29uc3QgYWRkQnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNoYXJhY3Rlci1idG4nKTtcclxuICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGFyYWN0ZXIoY2hhcmFjdGVyLmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkQ2hhcmFjdGVyKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy90ZWFtL2FkZC1jaGFyYWN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFyYWN0ZXJfaWQ6IGNoYXJhY3RlcklkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihkYXRhLm1lc3NhZ2UsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQbGF5ZXJUZWFtKCk7IC8vIFJlY2hhcmdlciBsJ8OpcXVpcGVcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKCd0ZWFtJyk7IC8vIFJldG91cm5lciDDoCBsJ29uZ2xldCDDqXF1aXBlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZvcmNlciBsYSBtaXNlIMOgIGpvdXIgZHUgYm91dG9uIGJhdGFpbGxlIGFwcsOocyB1biBkw6lsYWlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2Fqb3V0IGR1IHBlcnNvbm5hZ2U6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0VycmV1ciBkZSBjb25uZXhpb24nLCAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlQ2hhcmFjdGVyKGNoYXJhY3RlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy90ZWFtL3JlbW92ZS1jaGFyYWN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFyYWN0ZXJfaWQ6IGNoYXJhY3RlcklkIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihkYXRhLm1lc3NhZ2UsICdpbmZvJyk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQbGF5ZXJUZWFtKCk7IC8vIFJlY2hhcmdlciBsJ8OpcXVpcGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRm9yY2VyIGxhIG1pc2Ugw6Agam91ciBkdSBib3V0b24gYmF0YWlsbGUgYXByw6hzIHVuIGTDqWxhaVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oZGF0YS5lcnJvciwgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiBkdSBwZXJzb25uYWdlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZUJhdHRsZVRhYigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGUtc2VhcmNoIC5pbmZvLXRleHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXNlYXJjaEJ0biB8fCAhaW5mb1RleHQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21wdGVyIGxlcyBwZXJzb25uYWdlcyBkYW5zIGwnw6lxdWlwZVxyXG4gICAgICAgIGNvbnN0IHRlYW1TaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1zbG90Lm9jY3VwaWVkJykubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0ZWFtU2l6ZSA9PT0gMyAmJiB0aGlzLnBsYXllclRlYW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VOQUJMSU5HIEJVVFRPTjogdGVhbVNpemU9MywgcGxheWVyVGVhbSBleGlzdHMnKTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uZGF0YXNldC50ZWFtSWQgPSB0aGlzLnBsYXllclRlYW0uaWQ7XHJcbiAgICAgICAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gJ1ZvdHJlIMOpcXVpcGUgZXN0IHByw6p0ZSAhIFRyb3V2ZXogdW4gYWR2ZXJzYWlyZS4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQnV0dG9uIHN0YXRlIGFmdGVyIGVuYWJsaW5nOicsIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBzZWFyY2hCdG4uZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICBoYXNEaXNhYmxlZEF0dHI6IHNlYXJjaEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyksXHJcbiAgICAgICAgICAgICAgICBoYXNEaXNhYmxlZENsYXNzOiBzZWFyY2hCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdESVNBQkxJTkcgQlVUVE9OOiB0ZWFtU2l6ZT0nICsgdGVhbVNpemUgKyAnLCBoYXNQbGF5ZXJUZWFtPScgKyAhIXRoaXMucGxheWVyVGVhbSk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGxheWVyVGVhbSkge1xyXG4gICAgICAgICAgICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAnQ2hhcmdlbWVudCBkZSB2b3RyZSDDqXF1aXBlLi4uJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYEFqb3V0ZXogJHszIC0gdGVhbVNpemV9IHBlcnNvbm5hZ2UocykgcG91ciBjb21tZW5jZXJgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBOT1RJRklDQVRJT05TID09PT09PT09PT09PT09PVxyXG4gICAgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLSR7dHlwZX1gO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLSR7dGhpcy5nZXROb3RpZmljYXRpb25JY29uKHR5cGUpfVwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0eWxlcyBpbmxpbmUgcG91ciBhc3N1cmVyIGwnYWZmaWNoYWdlXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAyMHB4OyByaWdodDogMjBweDsgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0eXBlID09PSAnc3VjY2VzcycgPyAnIzI4YTc0NScgOiB0eXBlID09PSAnZXJyb3InID8gJyNkYzM1NDUnIDogJyMxN2EyYjgnfTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkJ2VudHLDqWVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5vdGlmaWNhdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKScsIDEwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdXBwcmVzc2lvbiBhdXRvbWF0aXF1ZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RpZmljYXRpb25JY29uKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiAnY2hlY2stY2lyY2xlJyxcclxuICAgICAgICAgICAgJ2Vycm9yJzogJ3RpbWVzLWNpcmNsZScsXHJcbiAgICAgICAgICAgICdpbmZvJzogJ2luZm8tY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGljb25zW3R5cGVdIHx8ICdpbmZvLWNpcmNsZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uIGF1dG9tYXRpcXVlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pbnRlcmZhY2UnKSkge1xyXG4gICAgICAgIHdpbmRvdy50ZWFtTWFuYWdlbWVudCA9IG5ldyBUZWFtTWFuYWdlbWVudCgpO1xyXG5cclxuICAgIH1cclxufSk7IiwiLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIFRIw4hNRVMgLSBNw4lEScOJVkFMIC8gRFlTVE9QSVFVRSA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIFRoZW1lU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gJ21lZGlldmFsJzsgLy8gUGFyIGTDqWZhdXQgbcOpZGnDqXZhbFxyXG4gICAgICAgIHRoaXMudGhlbWVzID0ge1xyXG4gICAgICAgICAgICBtZWRpZXZhbDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ03DqWRpw6l2YWwnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvY2ltZXRpw6hyZS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhNZWRpZXZhbC9jb3VycyBkdSBjaGF0ZWF1LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eE1lZGlldmFsL3BsYWNlIGR1IHZpbGxhZ2UucG5nJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvYmFja2dyb3VuZE1lZGlldmFsL0Fkb2JlU3RvY2tfMjY1MzQwMTQ0Lm1vdicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9iYWNrZ3JvdW5kTWVkaWV2YWwvYmdNZWRpZXZhbDEubXA0J1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk6ICcjOGI0NTEzJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICcjZGFhNTIwJyxcclxuICAgICAgICAgICAgICAgICAgICBhY2NlbnQ6ICcjMmQ0YTJiJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkeXN0bzoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0R5c3RvcGlxdWUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4RHlzdG8vY2hhbXAgZGUgYmF0YWlsbGUgZHlzdG8ucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4RHlzdG8vY291cnMgbW9kZXJuZS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhEeXN0by9wbGFjZSB2aWxsYWdlIG1vZGVybmUucG5nJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvYmFja2dyb3VuZER5c3RvL2JnRHlzdG8ubW92JyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL2JhY2tncm91bmREeXN0by9iZ0R5c3RvMS5tb3YnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogJyM4ZTI2ZjBmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiAnIzcyMDliNycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZW50OiAnI2M3MTU4NSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRoZW1lU3dpdGNoZXIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVZpZGVvQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUaGVtZSh0aGlzLmN1cnJlbnRUaGVtZSk7XHJcbiAgICAgICAgdGhpcy5zZXRSYW5kb21CYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5zZXRSYW5kb21WaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRoZW1lU3dpdGNoZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzd2l0Y2hlci5jbGFzc05hbWUgPSAndGhlbWUtc3dpdGNoZXInO1xyXG4gICAgICAgIHN3aXRjaGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoZW1lLXN3aXRjaGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRoZW1lLWJ0blwiIGRhdGEtdGhlbWU9XCJtZWRpZXZhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhc3RsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nw6lkacOpdmFsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGhlbWUtYnRuXCIgZGF0YS10aGVtZT1cImR5c3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2l0eVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EeXN0b3BpcXVlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3dpdGNoZXIpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgcG91ciBsZXMgYm91dG9uc1xyXG4gICAgICAgIGNvbnN0IHRoZW1lQnV0dG9ucyA9IHN3aXRjaGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGVtZS1idG4nKTtcclxuICAgICAgICB0aGVtZUJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVtZSA9IGJ0bi5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUaGVtZSh0aGVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUJ1dHRvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVZpZGVvQmFja2dyb3VuZCgpIHtcclxuICAgICAgICAvLyBDcsOpZXIgbCfDqWzDqW1lbnQgdmlkw6lvIHBvdXIgbGUgYmFja2dyb3VuZCBkZSBsYSBwYWdlXHJcbiAgICAgICAgbGV0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS12aWRlby1iYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgaWYgKCF2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmlkID0gJ3RoZW1lLXZpZGVvLWJhY2tncm91bmQnO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuY2xhc3NOYW1lID0gJ3RoZW1lLXZpZGVvLWJhY2tncm91bmQnO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXV0b3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQubG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5wbGF5c0lubGluZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBMYSB2aWTDqW8gdXRpbGlzZSB1bmlxdWVtZW50IGxlcyBzdHlsZXMgQ1NTIGTDqWZpbmlzIGRhbnMgX3RoZW1lLXN5c3RlbS5zY3NzXHJcbiAgICAgICAgICAgIC8vIFBhcyBkZSBzdHlsZXMgaW5saW5lIHBvdXIgcGVybWV0dHJlIGF1IENTUyBkZSBjb250csO0bGVyIGwnYXBwYXJlbmNlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh2aWRlb0VsZW1lbnQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyw6llciBsJ292ZXJsYXkgc29tYnJlIHPDqXBhcsOpXHJcbiAgICAgICAgbGV0IG92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLW92ZXJsYXknKTtcclxuICAgICAgICBpZiAoIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50LmlkID0gJ3ZpZGVvLW92ZXJsYXknO1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudC5jbGFzc05hbWUgPSAndmlkZW8tb3ZlcmxheSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbnPDqXJlciBsJ292ZXJsYXkgYXByw6hzIGxhIHZpZMOpbyAoZG9uYyBhdS1kZXNzdXMpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG92ZXJsYXlFbGVtZW50LCBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoVGhlbWUodGhlbWVOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGhlbWVzW3RoZW1lTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGhlbWUgPSB0aGVtZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUaGVtZSh0aGVtZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJhbmRvbUJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRSYW5kb21WaWRlbygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2F1dmVnYXJkZXIgbGUgY2hvaXhcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NzdC10aGVtZScsIHRoZW1lTmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUaMOobWUgY2hhbmfDqSBzaWxlbmNpZXVzZW1lbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUaGVtZSh0aGVtZU5hbWUpIHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHRoaXMudGhlbWVzW3RoZW1lTmFtZV07XHJcbiAgICAgICAgaWYgKCF0aGVtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBBcHBsaXF1ZXIgbGVzIGNvdWxldXJzIENTUyBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZS1wcmltYXJ5JywgdGhlbWUuY29sb3JzLnByaW1hcnkpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtc2Vjb25kYXJ5JywgdGhlbWUuY29sb3JzLnNlY29uZGFyeSk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZS1hY2NlbnQnLCB0aGVtZS5jb2xvcnMuYWNjZW50KTtcclxuXHJcbiAgICAgICAgLy8gQWpvdXRlciBjbGFzc2UgZGUgdGjDqG1lIGF1IGJvZHlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3RoZW1lLVxcdysvZywgJycpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgdGhlbWUtJHt0aGVtZU5hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmFuZG9tQmFja2dyb3VuZCgpIHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHRoaXMudGhlbWVzW3RoaXMuY3VycmVudFRoZW1lXTtcclxuICAgICAgICBjb25zdCByYW5kb21CZyA9IHRoZW1lLmJhY2tncm91bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoZW1lLmJhY2tncm91bmRzLmxlbmd0aCldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsZSBiYWNrZ3JvdW5kIGRpcmVjdGVtZW50IHN1ciBsYSBnYW1lLWNhcmRcclxuICAgICAgICBjb25zdCBnYW1lQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNhcmQnKTtcclxuICAgICAgICBpZiAoZ2FtZUNhcmQpIHtcclxuICAgICAgICAgICAgZ2FtZUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyYW5kb21CZ30nKWA7XHJcbiAgICAgICAgICAgIGdhbWVDYXJkLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuICAgICAgICAgICAgZ2FtZUNhcmQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgIGdhbWVDYXJkLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgICAgICAgICAgZ2FtZUNhcmQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWpvdXRlciB1biBvdmVybGF5IHBvdXIgbGEgbGlzaWJpbGl0w6lcclxuICAgICAgICAgICAgaWYgKCFnYW1lQ2FyZC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtb3ZlcmxheScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTmFtZSA9ICd0aGVtZS1vdmVybGF5JztcclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI0OCwgMjQ3LCAyNDQsIDAuOCkgMCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjQ4LCAyNDcsIDI0NCwgMC43KSA1MCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjQ4LCAyNDcsIDI0NCwgMC45KSAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgZ2FtZUNhcmQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFMnYXNzdXJlciBxdWUgbGUgY29udGVudSByZXN0ZSBhdS1kZXNzdXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZ2FtZUNhcmQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRDb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRDb250ZW50W2ldICE9PSBvdmVybGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50W2ldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRbaV0uc3R5bGUuekluZGV4ID0gJzInO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbVZpZGVvKCkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZXNbdGhpcy5jdXJyZW50VGhlbWVdO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbVZpZGVvID0gdGhlbWUudmlkZW9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoZW1lLnZpZGVvcy5sZW5ndGgpXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBcHBsaXF1ZXIgbGEgdmlkw6lvIGRlIGJhY2tncm91bmQgc3VyIHRvdXRlIGxhIHBhZ2VcclxuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtdmlkZW8tYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnNyYyA9IHJhbmRvbVZpZGVvO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQubG9hZCgpOyAvLyBSZWNoYXJnZXIgbGEgdmlkw6lvXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTJ2Fzc3VyZXIgcXVlIGxhIHZpZMOpbyBkw6ltYXJyZVxyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW1wb3NzaWJsZSBkZSBsaXJlIGxhIHZpZMOpbyBhdXRvbWF0aXF1ZW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY3RpdmVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGVtZS1idG4nKTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGJ0bi5kYXRhc2V0LnRoZW1lID09PSB0aGlzLmN1cnJlbnRUaGVtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhcmdlciBsZSB0aMOobWUgc2F1dmVnYXJkw6lcclxuICAgIGxvYWRTYXZlZFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NzdC10aGVtZScpO1xyXG4gICAgICAgIGlmIChzYXZlZCAmJiB0aGlzLnRoZW1lc1tzYXZlZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGhlbWUgPSBzYXZlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnRoZW1lU3lzdGVtID0gbmV3IFRoZW1lU3lzdGVtKCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdpbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSB0aMOobWVzOicsIGVycm9yKTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vSlMvY29tYmF0LTNkLXN5c3RlbS5qcyc7IC8vIE5vdXZlYXUgc3lzdMOobWUgZGUgY29tYmF0IDNEXHJcbmltcG9ydCAnLi9KUy9nYW1lLWludGVyZmFjZS5qcyc7XHJcbmltcG9ydCAnLi9KUy9ndWlsZC1ndWlkZS5qcyc7XHJcbmltcG9ydCAnLi9KUy90aGVtZS1zeXN0ZW0uanMnO1xyXG4vLyBpbXBvcnQgJy4vSlMvcmFua2luZy1zeXN0ZW0uanMnOyAvLyBkZXNhY3RpdmF0aW9uIGR1IGNsYXNzZW1lbnQgZ8OpcmVyIHBhciBsZSBKUyAoIGlsIGVzdCBlbiBwaHAgZXQgZW4gSlMgZGFucyBnYW1lLWludGVyZmFjZS5qcyBhIGxhIGxpZ25lIDMyMCApIGplIGwnYWkgcGFzIGVuY29yZSBzdXBwcmltw6kgYXUgY2FzIG91IG9uIGVuIGEgZW5jb3JlIGJlc29pbiBtYWlzIGlsIGZhdWRyYSBsZSBmYWlyZSBhIGxhIGZpblxyXG5cclxuaW1wb3J0ICcuL0pTL21hdGNobWFraW5nLXN5c3RlbS5qcyc7XHJcbmltcG9ydCAnLi9KUy90ZWFtLW1hbmFnZW1lbnQuanMnXHJcblxyXG5jb25zb2xlLmxvZygn8J+TpiBbQVBQXSBBcHBsaWNhdGlvbiBwcmluY2lwYWxlIGNoYXJnw6llIGF2ZWMgc3lzdMOobWUgZGUgY2xhc3NlbWVudCcpO1xyXG4iLCIvLyA9PT09PT09PT09PT09PT0gTkFWQkFSIE1PREVSTkUgQVZFQyBEUk9QRE9XTiA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIE1vZGVybk5hdmJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBMb2dvKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cE1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNldHVwT3V0c2lkZUNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cEVzY2FwZUtleSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwTG9nbygpIHtcclxuICAgICAgICBjb25zdCBsb2dvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1sb2dvJyk7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbG9nby1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgaWYgKGxvZ29CdG4gJiYgZHJvcGRvd24gJiYgbG9nb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBsb2dvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTtcclxuICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tb2JpbGUtbWVudScpO1xyXG5cclxuICAgICAgICBpZiAoYnVyZ2VyQnRuICYmIG1vYmlsZU1lbnUpIHtcclxuICAgICAgICAgICAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwT3V0c2lkZUNsaWNrKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWxvZ28tY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1vYmlsZS1tZW51Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBGZXJtZXIgZHJvcGRvd24gc2kgY2xpYyBleHTDqXJpZXVyXHJcbiAgICAgICAgICAgIGlmIChkcm9wZG93biAmJiBsb2dvQ29udGFpbmVyICYmICFlLnRhcmdldC5jbG9zZXN0KCcubmF2YmFyLWxvZ28tY29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRmVybWVyIG1lbnUgbW9iaWxlIHNpIGNsaWMgZXh0w6lyaWV1clxyXG4gICAgICAgICAgICBpZiAobW9iaWxlTWVudSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLm5hdmJhci1idXJnZXInKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBFbXDDqmNoZXIgZmVybWV0dXJlIHNpIGNsaWMgZGFucyBkcm9wZG93blxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kcm9wZG93bicpO1xyXG4gICAgICAgIGlmIChkcm9wZG93bikge1xyXG4gICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBFc2NhcGVLZXkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kcm9wZG93bicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWxvZ28tY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRyb3Bkb3duICYmIGxvZ29Db250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tYWN0aXZlJywgIWlzQWN0aXZlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bicsICFpc0FjdGl2ZSA/ICdvdXZlcnQnIDogJ2Zlcm3DqScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kcm9wZG93bicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWxvZ28tY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRyb3Bkb3duICYmIGxvZ29Db250YWluZXIpIHtcclxuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTtcclxuICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tb2JpbGUtbWVudScpO1xyXG5cclxuICAgICAgICBpZiAoYnVyZ2VyQnRuICYmIG1vYmlsZU1lbnUpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWVudSBtb2JpbGUnLCBpc0FjdGl2ZSA/ICdmZXJtw6knIDogJ291dmVydCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTtcclxuICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tb2JpbGUtbWVudScpO1xyXG5cclxuICAgICAgICBpZiAoYnVyZ2VyQnRuICYmIG1vYmlsZU1lbnUpIHtcclxuICAgICAgICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXNhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5tb2Rlcm5OYXZiYXIgPSBuZXcgTW9kZXJuTmF2YmFyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05hdmJhciBtb2Rlcm5lIGluaXRpYWxpc8OpZScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdpbml0aWFsaXNhdGlvbiBkZSBsYSBuYXZiYXI6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJyZXF1aXJlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkNvbWJhdDNEU3lzdGVtIiwiY2hhcmFjdGVycyIsIk1hcCIsImFuaW1hdGlvbnMiLCJhY3Rpb25RdWV1ZSIsImJhdHRsZVN0YXRlIiwic3BlZWRNdWx0aXBsaWVyIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW9zIiwiY3JlYXRlM0RDaGFyYWN0ZXIiLCJjaGFyYWN0ZXJEYXRhIiwidGVhbVR5cGUiLCJwb3NpdGlvbiIsImNoYXJhY3RlcklkIiwiY29uY2F0IiwibmFtZSIsIkRhdGUiLCJub3ciLCJiYXR0bGVSb2xlIiwiY29udmVydENsYXNzVG9CYXR0bGVSb2xlIiwicm9sZSIsImNoYXJhY3RlclN0eWxlIiwiZ2V0M0RDaGFyYWN0ZXJTdHlsZSIsImNoYXJhY3RlckVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwiY3NzVGV4dCIsImlubmVySFRNTCIsImJvZHlDbGFzcyIsImhlYWRDbGFzcyIsImhlYWRBY2Nlc3NvcnkiLCJ0b3Jzb0NsYXNzIiwiYXJtc0NsYXNzIiwibGVmdFdlYXBvbiIsInJpZ2h0V2VhcG9uIiwibGVnc0NsYXNzIiwiaHAiLCJnZXRSb2xlSWNvbiIsInBvc2l0aW9uQ2hhcmFjdGVyIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJlbGVtZW50IiwiZGF0YSIsInRlYW0iLCJjdXJyZW50SHAiLCJtYXhIcCIsImlzQWxpdmUiLCJhY3Rpb25Db29sZG93biIsInN0eWxlcyIsInRhbmsiLCJkcHMiLCJzdXBwb3J0IiwiY2hhcmFjdGVyQ2xhc3MiLCJyb2xlTWFwcGluZyIsIm5vcm1hbGl6ZWRDbGFzcyIsInRvTG93ZXJDYXNlIiwiYmF0dGxlZmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiYmF0dGxlZmllbGRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb25zIiwicGxheWVyIiwieCIsImVuZW15IiwibWF4UG9zIiwic2FmZVBvc2l0aW9uIiwiTWF0aCIsIm1pbiIsInBvcyIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsInRyYW5zaXRpb24iLCJfYW5pbWF0ZUNoYXJhY3RlckFjdGlvbiIsIl9jYWxsZWUiLCJhdHRhY2tlckVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwiYWN0aW9uVHlwZSIsImF0dGFja2VyIiwidGFyZ2V0IiwiX3QiLCJfY29udGV4dCIsImdldCIsImFuaW1hdGVQaHlzaWNhbEF0dGFjayIsImFuaW1hdGVNYWdpY1NwZWxsIiwiYW5pbWF0ZUhlYWwiLCJhbmltYXRlRGVmZW5zZSIsInVwZGF0ZUNoYXJhY3RlclVJIiwiYW5pbWF0ZUNoYXJhY3RlckFjdGlvbiIsIl94IiwiX3gyIiwiX3gzIiwiX2FuaW1hdGVQaHlzaWNhbEF0dGFjayIsIl9jYWxsZWUyIiwiYXR0YWNrZXJSZWN0IiwidGFyZ2V0UmVjdCIsImRlbHRhWCIsImRlbHRhWSIsIl9jb250ZXh0MiIsImNsYXNzTGlzdCIsImFkZCIsIndhaXQiLCJjcmVhdGVJbXBhY3RFZmZlY3QiLCJzaGFrZUVsZW1lbnQiLCJyZW1vdmUiLCJfeDQiLCJfeDUiLCJfYW5pbWF0ZU1hZ2ljU3BlbGwiLCJfY2FsbGVlMyIsInNwZWxsUHJvamVjdGlsZSIsIl9jb250ZXh0MyIsImNyZWF0ZU1hZ2ljQXVyYSIsImNyZWF0ZVNwZWxsUHJvamVjdGlsZSIsImNyZWF0ZU1hZ2ljSW1wYWN0IiwiX3g2IiwiX3g3IiwiX2FuaW1hdGVIZWFsIiwiX2NhbGxlZTQiLCJjYXN0ZXIiLCJoZWFsRWZmZWN0IiwiX2NvbnRleHQ0IiwiYXBwZW5kQ2hpbGQiLCJfeDgiLCJfeDkiLCJfYW5pbWF0ZURlZmVuc2UiLCJfY2FsbGVlNSIsImRlZmVuZGVyIiwic2hpZWxkRWZmZWN0IiwiX2NvbnRleHQ1IiwiX3gwIiwiaWNvbiIsImVmZmVjdCIsImNoYXJhY3RlciIsImF1cmEiLCJhbmltYXRpb24iLCJwcm9qZWN0aWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib2R5IiwiaW1wYWN0IiwiaGVhbHRoQmFyIiwiaGVhbHRoVGV4dCIsImhlYWx0aFBlcmNlbnQiLCJ0ZXh0Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInZpZGVvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmlkZW8iLCJwYXVzZWQiLCJwYXVzZSIsIndhc1BsYXlpbmciLCJyZXN1bWVCYWNrZ3JvdW5kVmlkZW9zIiwicGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsIm1zIiwiX3RoaXMiLCJpY29ucyIsImNsZWFudXAiLCJjbGVhciIsImNsZWFyVGltZW91dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aW5kb3ciLCJHYW1lSW50ZXJmYWNlIiwiY3VycmVudFRhYiIsImd1aWxkSW1hZ2VzIiwiY3VycmVudEd1aWxkSW1hZ2VJbmRleCIsImd1aWxkR3VpZGVJbml0QXR0ZW1wdHMiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJ0ZXN0QmF0dGxlZmllbGQiLCJ0ZXN0QmF0dGxlZmllbGRWaXN1YWxpemF0aW9uIiwic2V0dXBUYWJzIiwic2V0dXBSYW5raW5nRmlsdGVycyIsImxvYWRDaGFyYWN0ZXJzIiwiY2hlY2tVcmxUYWIiLCJ1cmxGcmFnbWVudCIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJ0YWJQYXJhbSIsInRhcmdldFRhYiIsImluY2x1ZGVzIiwic3dpdGNoVGFiIiwiX3RoaXMyIiwidGFiQnV0dG9ucyIsImJ1dHRvbiIsInRhYk5hbWUiLCJ0YWIiLCJjdXJyZW50QWN0aXZlQnV0dG9uIiwiY3VycmVudEFjdGl2ZVBhbmVsIiwibmV3VGFiQnV0dG9uIiwibmV3VGFiUGFuZWwiLCJnZXRFbGVtZW50QnlJZCIsImxvYWRSYW5raW5nIiwidXBkYXRlQmF0dGxlVGFiIiwidGVhbU1hbmFnZW1lbnQiLCJsb2FkTWF0Y2hIaXN0b3J5IiwiX3RoaXMzIiwiY29udGFpbmVyIiwid2FybiIsInNhbXBsZUNoYXJhY3RlcnMiLCJwb3dlciIsImNyZWF0ZUNoYXJhY3RlckNhcmQiLCJjYXJkIiwic2VhcmNoQnRuIiwiaW5mb1RleHQiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJ0ZWFtU2l6ZSIsImRpc2FibGVkIiwiX2xvYWRNYXRjaEhpc3RvcnkiLCJoaXN0b3J5Q29udGFpbmVyIiwicmVzcG9uc2UiLCJoaXN0b3J5SFRNTCIsImZldGNoIiwianNvbiIsInN1Y2Nlc3MiLCJtYXRjaGVzIiwidG90YWxfbWF0Y2hlcyIsIndpbnMiLCJsb3NzZXMiLCJyb3VuZCIsIm1hdGNoIiwicmVzdWx0Q2xhc3MiLCJpc193aW5uZXIiLCJyZXN1bHRJY29uIiwicmVzdWx0VGV4dCIsInBsYXllcl90ZWFtIiwicGxheWVyX3Bvd2VyIiwib3Bwb25lbnRfdGVhbSIsIm9wcG9uZW50X3Bvd2VyIiwib3Bwb25lbnRfcGxheWVyIiwiZmluaXNoZWRfYXQiLCJkdXJhdGlvbiIsImVycm9yIiwic2hvd05vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJ0eXBlIiwidW5kZWZpbmVkIiwibm90aWZpY2F0aW9uIiwiZ2V0Tm90aWZpY2F0aW9uSWNvbiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl90aGlzNCIsImZpbHRlckJ1dHRvbnMiLCJidG4iLCJmaWx0ZXIiLCJfbG9hZFJhbmtpbmciLCJyYW5raW5nQ29udGFpbmVyIiwiZW1wdHlNZXNzYWdlIiwicmFua2luZ0hUTUwiLCJ0b3BDbGFzcyIsInJhbmtDbGFzcyIsInJhbmtJY29uIiwiY2hhbmdlQ2xhc3MiLCJjaGFuZ2VTaWduIiwiX2kiLCJfcGxheWVyIiwiX2NoYW5nZUNsYXNzIiwiX2NoYW5nZVNpZ24iLCJfYXJnczIiLCJfdDIiLCJyYW5raW5nIiwidXBkYXRlVXNlclBvc2l0aW9uIiwiY3VycmVudF9wbGF5ZXJfcG9zaXRpb24iLCJjdXJyZW50X3BsYXllcl9tbXIiLCJtbXJfY2hhbmdlIiwiaXNfY3VycmVudF9wbGF5ZXIiLCJ1c2VybmFtZSIsInVzZXJJbmZvIiwidXNlcm5hbWVDb2xvciIsIm1tciIsInVzZXJQb3NpdGlvbkVsZW1lbnQiLCJ1c2VyUmF0aW5nRWxlbWVudCIsImxvYWRNb3JlUmFua2luZyIsInN0YXJ0SW5kZXgiLCJfc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24iLCJtYXRjaElkIiwibWF0Y2hEYXRhIiwiX3QzIiwiRXJyb3IiLCJvayIsInN0YXR1cyIsImRpc3BsYXlDb21iYXRWaXN1YWxpemF0aW9uTW9kYWwiLCJzaG93Q29tYmF0VmlzdWFsaXphdGlvbiIsImRldGVybWluZVBsYXRlYXVUeXBlIiwicGxhdGVhdVR5cGVzIiwiZmxvb3IiLCJyYW5kb20iLCJfdGhpczUiLCJfd2luZG93JHVzZXJJbmZvIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRlYW1BIiwidGVhbV9hIiwicGxheWVyVGVhbSIsInRlYW1CIiwidGVhbV9iIiwiZW5lbXlUZWFtIiwiY3VycmVudFVzZXIiLCJtb2RhbCIsInBsYXRlYXVUeXBlIiwiZ2VuZXJhdGVCYXR0bGVmaWVsZENhcmRzIiwiYXJlbmEiLCJyYW5kb21CYWNrZ3JvdW5kIiwiZ2V0UmFuZG9tQmF0dGxlZmllbGRCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiY29tYmF0M0QiLCJpbml0Q29tYmF0M0RTeXN0ZW0iLCJjbG9zZUJ0biIsIl90aGlzNSRjb21iYXQzRCIsImNsb3NlQmF0dGxlZmllbGRNb2RhbCIsInJlc3VtZUJhY2tncm91bmRWaWRlbyIsImVzY2FwZUhhbmRsZXIiLCJfdGhpczUkY29tYmF0M0QyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YWNrIiwiX3RoaXM2IiwidGVhbUNvbG9yIiwidGVhbUJvcmRlciIsIm1hcCIsImNoYXIiLCJpbmRleCIsImltYWdlUGF0aCIsImltYWdlIiwiaW1hZ2VTcmMiLCJmYWxsYmFja0ltYWdlIiwiZ2V0Q2hhcmFjdGVySW1hZ2VCeVJvbGUiLCJzYWZlQ2hhckRhdGEiLCJsZXZlbCIsImF0dGFjayIsImdldFJvbGVOYW1lIiwiam9pbiIsInJvbGVJbWFnZXMiLCJtZWRpZXZhbEJncyIsImR5c3RvQmdzIiwiYWxsQmdzIiwiZ2V0S2FhbWVsb3R0UGhyYXNlIiwic2l0dWF0aW9uIiwicGhyYXNlcyIsInN0YXJ0IiwiZGVmZW5zZSIsIm1hZ2ljIiwiaGVhbCIsInZpY3RvcnkiLCJkZWZlYXQiLCJzaXR1YXRpb25QaHJhc2VzIiwiZ2VuZXJhbCIsInNob3dLYWFtZWxvdHRDb21tZW50IiwicGhyYXNlIiwiZ3VpZGVUZXh0IiwiY29tbWVudGFyeSIsImF2YXRhciIsInNyYyIsImdldE5leHRHdWlsZEltYWdlIiwiaW5pdEJhdHRsZWZpZWxkQ29tYmF0VmlzdWFsaXphdGlvbiIsIl90aGlzNyIsInN0YXJ0QnRuIiwic3BlZWRCdG5zIiwiaXNQbGF5aW5nIiwiY3VycmVudFNwZWVkIiwiY2xvc2VNb2RhbCIsIl90aGlzNyRjb21iYXQzRCIsImIiLCJwYXJzZUZsb2F0Iiwic3BlZWQiLCJfd2luZG93JHVzZXJJbmZvMiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJfcGxheWVyVGVhbSIsIl9lbmVteVRlYW0iLCJfcGxheWVyVGVhbTIiLCJfZW5lbXlUZWFtMiIsIl90aGlzOCIsIm1hdGNoRGF0YUtleXMiLCJrZXlzIiwicGxheWVyQ2hhcmFjdGVycyIsImVuZW15Q2hhcmFjdGVycyIsInNldHVwQ2FyZFRvM0RUcmFuc2l0aW9uIiwic2V0dXBHdWlsZEd1aWRlRm9yQ29tYmF0IiwiX3RoaXM5IiwiY29tYmF0Wm9uZSIsInBsYXllckNhcmRzIiwiY2hhcmFjdGVyM0QiLCJhbmltYXRlQ2hhcmFjdGVyRnJvbUNhcmQiLCJlbmVteUNhcmRzIiwic3RhcnRFcGljQ29tYmF0IiwiX3RoaXMwIiwiY2FyZFJlY3QiLCJwYXJzZUludCIsInVwZGF0ZUd1aWxkR3VpZGVUZXh0IiwiZXhlY3V0ZUVwaWNDb21iYXRTZXF1ZW5jZSIsIl90aGlzMSIsIkFycmF5IiwiZnJvbSIsImFjdGlvbkluZGV4IiwiZXhlY3V0ZU5leHRBY3Rpb24iLCJmaW5pc2hFcGljQ29tYmF0IiwiYWxsQ2hhcmFjdGVycyIsImlzUGxheWVyQXR0YWNrZXIiLCJjb250YWlucyIsInBvdGVudGlhbFRhcmdldHMiLCJhdHRhY2tlclJvbGUiLCJnZXRBY3Rpb25UeXBlQnlSb2xlIiwidXBkYXRlQ2VudHJhbEFjdGlvbkRpc3BsYXkiLCJkZWxheSIsImNvbWJhdFNwZWVkIiwiYWN0aW9ucyIsInJvbGVBY3Rpb25zIiwiYWN0aW9uRGlzcGxheSIsImF0dGFja2VyTmFtZSIsInRhcmdldE5hbWUiLCJhY3Rpb25UZXh0IiwiZ2V0QWN0aW9uVGV4dCIsImFjdGlvbkljb24iLCJnZXRBY3Rpb25JY29uIiwidGV4dHMiLCJwaHlzaWNhbF9hdHRhY2siLCJtYWdpY19zcGVsbCIsImRlZmVuZCIsImlzUGxheWVyVmljdG9yeSIsInNob3dDb21iYXRSZXN1bHQiLCJpc1ZpY3RvcnkiLCJyZXN1bHRIVE1MIiwic2hvd0JhdHRsZWZpZWxkVmljdG9yeSIsInNob3dCYXR0bGVmaWVsZERlZmVhdCIsImd1aWxkR3VpZGUiLCJndWlsZEJ1YmJsZSIsImd1aWRlQXZhdGFyIiwiY3VycmVudEltYWdlSW5kZXgiLCJyb3RhdGVBdmF0YXIiLCJjb21iYXRQaHJhc2VzIiwicGhyYXNlSW5kZXgiLCJjb21tZW50SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0ZXh0IiwiYW5pbWF0ZWRFbGVtZW50cyIsImFuaW1hdGlvblBsYXlTdGF0ZSIsInBhdXNlQmFja2dyb3VuZFZpZGVvIiwibW9ja01hdGNoRGF0YSIsImV2ZW50cyIsImRlc2NyaXB0aW9uIiwiYW5pbWF0ZUNhcmRUb1Bvc2l0aW9uIiwicG9zaXRpb25SZWN0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwbGF5QmF0dGxlZmllbGRDb21iYXQiLCJnZW5lcmF0ZUVwaWNDb21iYXRFdmVudHMiLCJzaW11bGF0ZUVwaWNCYXR0bGVmaWVsZEV2ZW50cyIsIl90aGlzMTAiLCJlZmZlY3RzQ29udGFpbmVyIiwiYW5pbWF0aW9uc0NvbnRhaW5lciIsImV2ZW50SW5kZXgiLCJwcm9jZXNzTmV4dEV2ZW50IiwiZXZlbnQiLCJzaG93RXBpY0JhdHRsZWZpZWxkRWZmZWN0IiwicGxheUVwaWNBbmltYXRpb24iLCJjcmVhdGVTbGFzaEVmZmVjdCIsInNsYXNoIiwiZm9udFNpemUiLCJjb2xvciIsInJlY3QiLCJjb250YWluZXJSZWN0IiwiY3JlYXRlU2hpZWxkRWZmZWN0Iiwic2hpZWxkIiwiY3JlYXRlTWFnaWNFZmZlY3QiLCJtYWdlIiwiY3JlYXRlSGVhbEVmZmVjdCIsImhlYWxlciIsImdldFJhbmRvbUNoYXJhY3RlciIsImZpbHRlcmVkIiwibWF0Y2hlc1RlYW0iLCJtYXRjaGVzUm9sZSIsImdldEVmZmVjdEljb24iLCJlZmZlY3RJY29uIiwiZWZmZWN0Q2xhc3MiLCJhbmltYXRpb25UeXBlIiwiYW5pbWF0ZUF0dGFjayIsImFuaW1hdGVNYWdpYyIsImFuaW1hdGVHZW5lcmljIiwiX3RoaXMxMSIsImdlbmVyYXRlRGVtb0NvbWJhdEV2ZW50cyIsInZpY3RvcnlPdmVybGF5IiwiZGVmZWF0T3ZlcmxheSIsImdldFJhbmRvbUJhdHRsZWZpZWxkIiwiYmF0dGxlZmllbGRzIiwiZ2VuZXJhdGVUZWFtQ2hhcmFjdGVycyIsIl90aGlzMTIiLCJjaGFyYWN0ZXJzSFRNTCIsImlzQXJyYXkiLCJjaGFyYWN0ZXJJbWFnZSIsImdldENoYXJhY3RlckltYWdlIiwicm9sZUNsYXNzIiwiYXRrIiwiZGVmYXVsdENoYXJhY3RlcnMiLCJhcnR3b3JrVXJsIiwiY2hhcmFjdGVyTmFtZSIsImNoYXJhY3RlckltYWdlcyIsIm5vcm1hbGl6ZWROYW1lIiwiZGFzaE5hbWUiLCJyb2xlTmFtZXMiLCJpbml0Q29tYmF0VmlzdWFsaXphdGlvbiIsIl90aGlzMTMiLCJjdXJyZW50U3BlZWRTcGFuIiwiaW5pdEd1aWxkR3VpZGUiLCJzcGVlZENvbW1lbnRzIiwic2hvd0d1aWxkR3VpZGVDb21tZW50IiwiZGlzcGxheSIsInBsYXlDb21iYXRBbmltYXRpb24iLCJfdGhpczE0IiwiZ3VpbGRHdWlkZUVsZW1lbnQiLCJndWlsZEd1aWRlQ29tbWVudHMiLCJsYXN0Q29tbWVudFRpbWUiLCJjb21tZW50Q29vbGRvd24iLCJfdGhpczE1IiwiZW1vamkiLCJndWlsZEd1aWRlQXZhdGFyIiwiY29tbWVudGFyeUVsZW1lbnQiLCJjb21tZW50YXJ5QnViYmxlIiwiYnViYmxlQ29udGFpbmVyIiwicEVsZW1lbnQiLCJuZXh0SW1hZ2UiLCJnZXRSYW5kb21HdWlsZENvbW1lbnQiLCJjb21tZW50cyIsIl9wbGF5Q29tYmF0QW5pbWF0aW9uIiwib25Db21wbGV0ZSIsImNlbnRlckFuaW1hdGlvbiIsInBsYXllckluZm8iLCJlbmVteUluZm8iLCJiYXNlRGVsYXkiLCJhbmltYXRpb25EZWxheSIsInJhbmRvbUFjdGlvbiIsInJhbmRvbUNvbW1lbnQiLCJ3aW5uZXIiLCJtYXgiLCJhZGRHdWlsZEd1aWRlQ29tbWVudGFyeSIsImFuaW1hdGVFdmVudCIsImFjdGlvbiIsInNsZWVwIiwiYW5pbWF0ZVJhbmRvbUNoYXJhY3RlckFjdGlvbiIsImZpbmQiLCJhbmltYXRlVmljdG9yeSIsIl9hZGRHdWlsZEd1aWRlQ29tbWVudGFyeSIsInRvdGFsRXZlbnRzIiwiY29tbWVudCIsImF0dGFja0NvbW1lbnRzIiwicHJvZ3Jlc3MiLCJfdDQiLCJ0YXJnZXRfbmFtZSIsIl9hbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uIiwiX2NhbGxlZTYiLCJ0ZWFtcyIsInJhbmRvbVRlYW0iLCJyYW5kb21DaGFySW5kZXgiLCJlZmZlY3RzRWxlbWVudCIsImVmZmVjdEhUTUwiLCJfY29udGV4dDYiLCJfYW5pbWF0ZUV2ZW50IiwiX2NhbGxlZTciLCJjZW50ZXJFbGVtZW50IiwiX3Q1IiwiX2NvbnRleHQ3IiwiYW5pbWF0ZUNvbWJhdFN0YXJ0IiwiYW5pbWF0ZVRlYW1QcmVzZW50YXRpb24iLCJhbmltYXRlUm91bmRTdGFydCIsImFuaW1hdGVSb3VuZEVuZCIsIl94MSIsIl94MTAiLCJfYW5pbWF0ZUNvbWJhdFN0YXJ0IiwiX2NhbGxlZTgiLCJfY29udGV4dDgiLCJfeDExIiwiX2FuaW1hdGVUZWFtUHJlc2VudGF0aW9uIiwiX2NhbGxlZTkiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwiaXNUZWFtQSIsIl9jb250ZXh0OSIsIl94MTIiLCJfeDEzIiwiX3gxNCIsIl9hbmltYXRlUm91bmRTdGFydCIsIl9jYWxsZWUwIiwiX3Q2IiwiX2NvbnRleHQwIiwiX3gxNSIsIl94MTYiLCJfY2FsbGVlMSIsImNoYXJJbmRleCIsIl90NyIsIl9jb250ZXh0MSIsInNob3dDZW50cmFsQW5pbWF0aW9uIiwiX3gxNyIsIl94MTgiLCJfc2hvd0NlbnRyYWxBbmltYXRpb24iLCJfY2FsbGVlMTAiLCJhbmltYXRpb25FbGVtZW50IiwiYW5pbWF0aW9uSFRNTCIsImFuaW1hdGlvbkNsYXNzIiwiYXR0YWNrVHlwZXMiLCJhdHRhY2tUeXBlIiwibWFnaWNUeXBlcyIsIm1hZ2ljVHlwZSIsImhlYWxUeXBlcyIsImhlYWxUeXBlIiwiZGVmZW5zZVR5cGVzIiwiZGVmZW5zZVR5cGUiLCJfdDgiLCJfdDkiLCJfY29udGV4dDEwIiwiaHRtbCIsIl94MTkiLCJfYW5pbWF0ZVJvdW5kRW5kIiwiX2NhbGxlZTExIiwiX2NvbnRleHQxMSIsIl94MjAiLCJfYW5pbWF0ZVZpY3RvcnkiLCJfY2FsbGVlMTIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3Q0IiwiX2NvbnRleHQxMiIsIl94MjEiLCJfeDIyIiwiX3Nob3dNYXRjaFJlY2FwIiwiX2NhbGxlZTEzIiwiX3QwIiwiX2NvbnRleHQxMyIsImRpc3BsYXlNYXRjaFJlY2FwTW9kYWwiLCJzaG93TWF0Y2hSZWNhcCIsIl94MjMiLCJfdGhpczE2IiwibW9kYWxIVE1MIiwid2lubmVyX3RlYW0iLCJzdGFydGVkX2F0IiwiZ2VuZXJhdGVFdmVudHNIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZmVybWVyQnRuIiwicGFydGFnZXJCdG4iLCJjbG9zZU1hdGNoUmVjYXAiLCJnZXRBdHRyaWJ1dGUiLCJzaGFyZU1hdGNoUmVjYXAiLCJldmVudHNIVE1MIiwiZXZlbnRDbGFzcyIsImV2ZW50SWNvbiIsImlzX2NyaXQiLCJhbW91bnRUZXh0IiwiYW1vdW50IiwiYWN0b3JfbmFtZSIsImNyZWF0ZWRfYXQiLCJfdGhpczE3Iiwic2hhcmVVcmwiLCJvcmlnaW4iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0ZXh0QXJlYSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiZ2FtZUludGVyZmFjZUVsZW1lbnQiLCJnYW1lSW50ZXJmYWNlIiwiR3VpbGRHdWlkZSIsImN1cnJlbnRHdWlsZEltYWdlIiwiaXNMb2dnZWRJbiIsInVzZXJOYW1lIiwiZGlhbG9ndWVTdGF0ZSIsImNoZWNrVXNlclN0YXR1cyIsImNyZWF0ZUd1aWRlSW50ZXJmYWNlIiwic3RhcnRJbWFnZVJvdGF0aW9uIiwic2V0dXBBdXRvRGlhbG9ndWUiLCJndWlkZUhUTUwiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsImRpYWxvZ3VlQm94IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuRGlhbG9ndWUiLCJjdXJzb3IiLCJ0aXRsZSIsImNsb3NlRGlhbG9ndWUiLCJpbWdFbGVtZW50IiwiYXV0b0RpYWxvZ3VlVGltZXIiLCJzaG93V2VsY29tZU1lc3NhZ2UiLCJ0ZXh0RWwiLCJidXR0b25zRWwiLCJzaG93R2FtZXBsYXlIZWxwIiwic2hvd0NoYXJhY3RlclJvbGVzIiwic2hvd1RlYW1DcmVhdGlvbiIsInNob3dEZXRhaWxlZFJlc3BvbnNlIiwic2hvd0ZpbmRCYXR0bGUiLCJjb250ZW50IiwicmV0dXJuVG9QcmV2aW91c01lbnUiLCJzaG93VGVhbVN0cmF0ZWd5Iiwic2hvd0JhbGFuY2VkU3RyYXRlZ3kiLCJzaG93QWdncmVzc2l2ZVN0cmF0ZWd5Iiwic2hvd0RlZmVuc2l2ZVN0cmF0ZWd5Iiwic2hvd1RhbmtSb2xlIiwic2hvd0RQU1JvbGUiLCJzaG93SGVhbGVyUm9sZSIsInNob3dBdXRvQmF0dGxlIiwic2hvd0RlYnVnTWVudSIsInJ1blBvc2l0aW9uaW5nVGVzdCIsImRlYnVnUG9zaXRpb25pbmciLCJkZWJ1Z0FjdGl2ZUNvbWJhdCIsImRlYnVnQ29tYmF0UG9zaXRpb25pbmciLCJzaG93U3lzdGVtSW5mbyIsImNvbWJhdDNkQXZhaWxhYmxlIiwiZ2FtZUludGVyZmFjZUF2YWlsYWJsZSIsImRlYnVnQXZhaWxhYmxlIiwic3RhdHVzQ2hlY2tJbnRlcnZhbCIsIm1hdGNobWFraW5nIiwiaW5RdWV1ZSIsInRlYW1JZCIsImluaXRpYWxpemVNYXRjaG1ha2luZyIsImNoZWNrQ3VycmVudFN0YXR1cyIsImpvaW5NYXRjaG1ha2luZyIsImNhbmNlbEJ0biIsImNhbmNlbE1hdGNobWFraW5nIiwiYmFja0J0biIsInJlc2V0VG9TZWFyY2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGVhbV9pZCIsInNob3dNYXRjaG1ha2luZ1N0YXR1cyIsInN0YXJ0U3RhdHVzQ2hlY2siLCJhbGVydCIsInJlc2V0U2VhcmNoQnV0dG9uIiwiaGlkZU1hdGNobWFraW5nU3RhdHVzIiwic3RvcFN0YXR1c0NoZWNrIiwic2V0QXR0cmlidXRlIiwidGVhbVNlbGVjdGlvbiIsIm1hdGNobWFraW5nU3RhdHVzIiwibWF0Y2hSZXN1bHQiLCJzaG93TWF0Y2hSZXN1bHQiLCJyZXN1bHQiLCJyZXN1bHRDb250ZW50IiwicmVzdWx0VGl0bGUiLCJpc1dpbm5lciIsIndpbm5lcl90ZWFtX2lkIiwidGVhbTFfcG93ZXIiLCJ0ZWFtMl9wb3dlciIsIm1hdGNoX2lkIiwiY2hlY2tTdGF0dXMiLCJwYXRobmFtZSIsInVwZGF0ZVN0YXR1c0Rpc3BsYXkiLCJzaG93Q29tYmF0UGVuZGluZ1Jlc3VsdCIsInN0YXR1c1RleHQiLCJ3YWl0aW5nVGltZSIsInBsYXllcnNJblF1ZXVlIiwid2FpdGluZ190aW1lIiwicGxheWVyc19pbl9xdWV1ZSIsInZpZXdDb21iYXRWaXN1YWxpemF0aW9uIiwic2tpcENvbWJhdFZpc3VhbGl6YXRpb24iLCJfdmlld0NvbWJhdFZpc3VhbGl6YXRpb24iLCJfc2tpcENvbWJhdFZpc3VhbGl6YXRpb24iLCJzaG93U2ltcGxlTWF0Y2hSZXN1bHQiLCJfc2hvd1NpbXBsZU1hdGNoUmVzdWx0IiwicmVzdWx0TWVzc2FnZSIsIlRlYW1NYW5hZ2VtZW50IiwiYXZhaWxhYmxlQ2hhcmFjdGVycyIsInNlbGVjdGVkU2xvdCIsIl9pbml0IiwibG9hZFBsYXllclRlYW0iLCJwYW5lbCIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZVBhbmVsIiwiZGlzcGxheUNoYXJhY3RlcnMiLCJfbG9hZFBsYXllclRlYW0iLCJ1cGRhdGVUZWFtRGlzcGxheSIsImNyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5IiwiX2NyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5IiwidGVhbUNoYXJhY3RlcnMiLCJzbG90cyIsInNsb3QiLCJwbGFjZWhvbGRlciIsImRlZiIsInJlbW92ZUJ0biIsInJlbW92ZUNoYXJhY3RlciIsIm9uY2xpY2siLCJfbG9hZENoYXJhY3RlcnMiLCJzcGQiLCJjcml0IiwiYWRkQnRuIiwiYWRkQ2hhcmFjdGVyIiwiX2FkZENoYXJhY3RlciIsImNoYXJhY3Rlcl9pZCIsIl9yZW1vdmVDaGFyYWN0ZXIiLCJoYXNEaXNhYmxlZEF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJoYXNEaXNhYmxlZENsYXNzIiwiVGhlbWVTeXN0ZW0iLCJjdXJyZW50VGhlbWUiLCJ0aGVtZXMiLCJtZWRpZXZhbCIsImJhY2tncm91bmRzIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImFjY2VudCIsImR5c3RvIiwiY3JlYXRlVGhlbWVTd2l0Y2hlciIsImNyZWF0ZVZpZGVvQmFja2dyb3VuZCIsImFwcGx5VGhlbWUiLCJzZXRSYW5kb21CYWNrZ3JvdW5kIiwic2V0UmFuZG9tVmlkZW8iLCJzd2l0Y2hlciIsInRoZW1lQnV0dG9ucyIsInRoZW1lIiwic3dpdGNoVGhlbWUiLCJ1cGRhdGVBY3RpdmVCdXR0b24iLCJ2aWRlb0VsZW1lbnQiLCJhdXRvcGxheSIsIm11dGVkIiwibG9vcCIsInBsYXlzSW5saW5lIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm92ZXJsYXlFbGVtZW50IiwiY2hpbGRyZW4iLCJ0aGVtZU5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicm9vdCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwicmFuZG9tQmciLCJnYW1lQ2FyZCIsIm92ZXJsYXkiLCJjYXJkQ29udGVudCIsInJhbmRvbVZpZGVvIiwibG9hZCIsImJ1dHRvbnMiLCJ0b2dnbGUiLCJsb2FkU2F2ZWRUaGVtZSIsInNhdmVkIiwiZ2V0SXRlbSIsInRoZW1lU3lzdGVtIiwiTW9kZXJuTmF2YmFyIiwic2V0dXBMb2dvIiwic2V0dXBNb2JpbGVNZW51Iiwic2V0dXBPdXRzaWRlQ2xpY2siLCJzZXR1cEVzY2FwZUtleSIsImxvZ29CdG4iLCJkcm9wZG93biIsImxvZ29Db250YWluZXIiLCJ0b2dnbGVEcm9wZG93biIsImJ1cmdlckJ0biIsIm1vYmlsZU1lbnUiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VzdCIsImNsb3NlTW9iaWxlTWVudSIsImNsb3NlRHJvcGRvd24iLCJpc0FjdGl2ZSIsIm92ZXJmbG93IiwibW9kZXJuTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==