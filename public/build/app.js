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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsVUFBVSxHQUFHdDBCLFFBQVEsQ0FBQ3NDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztNQUVoRSxJQUFJK3hCLFNBQVMsSUFBSUMsVUFBVSxFQUFFO1FBQ3pCRCxTQUFTLENBQUNsdkIsU0FBUyxDQUFDSyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BDOHVCLFVBQVUsQ0FBQ252QixTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDckN4RixRQUFRLENBQUMwSCxJQUFJLENBQUN0SCxLQUFLLENBQUN3MEIsUUFBUSxHQUFHLEVBQUU7TUFDckM7SUFDSjtFQUFDO0FBQUEsS0FHTDtBQUNBNTBCLFFBQVEsQ0FBQzBKLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBSTtJQUNBUCxNQUFNLENBQUMwckIsWUFBWSxHQUFHLElBQUlqQixZQUFZLENBQUMsQ0FBQztJQUN4Q3p5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztFQUM3QyxDQUFDLENBQUMsT0FBTzJNLEtBQUssRUFBRTtJQUNaNU0sT0FBTyxDQUFDMEssSUFBSSxDQUFDLGdEQUFnRCxFQUFFa0MsS0FBSyxDQUFDO0VBQ3pFO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQzVJRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KUy9jb21iYXQtM2Qtc3lzdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KUy9nYW1lLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvZ3VpbGQtZ3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0pTL21hdGNobWFraW5nLXN5c3RlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvdGVhbS1tYW5hZ2VtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KUy90aGVtZS1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgQ09NQkFUIDNEIEFWQU5Dw4kgPT09PT09PT09PT09PT09XHJcblxyXG5jbGFzcyBDb21iYXQzRFN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5hY3Rpb25RdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmF0dGxlU3RhdGUgPSAncHJlcGFyaW5nJzsgLy8gcHJlcGFyaW5nLCBhY3RpdmUsIGZpbmlzaGVkXHJcbiAgICAgICAgdGhpcy5zcGVlZE11bHRpcGxpZXIgPSAxO1xyXG4gICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IENSw4lBVElPTiBERSBQRVJTT05OQUdFUyAzRCA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY3JlYXRlM0RDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YSwgdGVhbVR5cGUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVySWQgPSBgJHt0ZWFtVHlwZX0tJHtjaGFyYWN0ZXJEYXRhLm5hbWV9LSR7RGF0ZS5ub3coKX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnRpciBsYSBjbGFzc2UgZW4gcsO0bGUgVGFuay9EUFMvU3VwcG9ydFxyXG4gICAgICAgIGNvbnN0IGJhdHRsZVJvbGUgPSB0aGlzLmNvbnZlcnRDbGFzc1RvQmF0dGxlUm9sZShjaGFyYWN0ZXJEYXRhLnJvbGUgfHwgY2hhcmFjdGVyRGF0YS5jbGFzcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpZmluaXIgbGUgc3R5bGUgM0Qgc2Vsb24gbGUgcsO0bGUgZGUgY29tYmF0XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyU3R5bGUgPSB0aGlzLmdldDNEQ2hhcmFjdGVyU3R5bGUoYmF0dGxlUm9sZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuY2xhc3NOYW1lID0gYGNvbWJhdC1jaGFyYWN0ZXItM2QgJHt0ZWFtVHlwZX0tY2hhcmFjdGVyLTNkICR7Y2hhcmFjdGVyU3R5bGUuY2xhc3N9ICR7YmF0dGxlUm9sZX0tcm9sZWA7XHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5pZCA9IGNoYXJhY3RlcklkO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci0zZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItYm9keSAke2NoYXJhY3RlclN0eWxlLmJvZHlDbGFzc31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWhlYWQgJHtjaGFyYWN0ZXJTdHlsZS5oZWFkQ2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItZmFjZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2NoYXJhY3RlclN0eWxlLmhlYWRBY2Nlc3Nvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci10b3JzbyAke2NoYXJhY3RlclN0eWxlLnRvcnNvQ2xhc3N9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1hcm1zICR7Y2hhcmFjdGVyU3R5bGUuYXJtc0NsYXNzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1hcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWFwb24tc2xvdCBsZWZ0LXdlYXBvblwiPiR7Y2hhcmFjdGVyU3R5bGUubGVmdFdlYXBvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1hcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWFwb24tc2xvdCByaWdodC13ZWFwb25cIj4ke2NoYXJhY3RlclN0eWxlLnJpZ2h0V2VhcG9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWxlZ3MgJHtjaGFyYWN0ZXJTdHlsZS5sZWdzQ2xhc3N9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1lZmZlY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1cmEgJHt0ZWFtVHlwZX0tYXVyYVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24taW5kaWNhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci11aVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLXBsYXRlXCI+JHtjaGFyYWN0ZXJEYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC1iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC1maWxsXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoLXRleHRcIj4ke2NoYXJhY3RlckRhdGEuaHAgfHwgMTUwfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb2xlLWluZGljYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5nZXRSb2xlSWNvbihjaGFyYWN0ZXJEYXRhLnJvbGUgfHwgY2hhcmFjdGVyRGF0YS5jbGFzcyl9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9zaXRpb25uZXIgbGUgcGVyc29ubmFnZVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25DaGFyYWN0ZXIoY2hhcmFjdGVyRWxlbWVudCwgcG9zaXRpb24sIHRlYW1UeXBlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBam91dGVyIGxhIHBvc2l0aW9uIGRhbnMgbGVzIGRhdGEgYXR0cmlidXRlcyBwb3VyIGxlcyBhbmltYXRpb25zXHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5kYXRhc2V0LnRlYW1UeXBlID0gdGVhbVR5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYPCflKcgREFUQVNFVCBTRVQ6IHBvc2l0aW9uPSR7cG9zaXRpb259LCB0ZWFtVHlwZT0ke3RlYW1UeXBlfSBwb3VyICR7Y2hhcmFjdGVyRGF0YS5uYW1lfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b2NrZXIgbGVzIGRvbm7DqWVzIGR1IHBlcnNvbm5hZ2VcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMuc2V0KGNoYXJhY3RlcklkLCB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGNoYXJhY3RlckVsZW1lbnQsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJhY3RlckRhdGEsXHJcbiAgICAgICAgICAgIHRlYW06IHRlYW1UeXBlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGN1cnJlbnRIcDogY2hhcmFjdGVyRGF0YS5ocCB8fCAxNTAsXHJcbiAgICAgICAgICAgIG1heEhwOiBjaGFyYWN0ZXJEYXRhLmhwIHx8IDE1MCxcclxuICAgICAgICAgICAgaXNBbGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWN0aW9uQ29vbGRvd246IDBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyRWxlbWVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0M0RDaGFyYWN0ZXJTdHlsZShyb2xlKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB0YW5rOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ3RhbmstY2hhcmFjdGVyJyxcclxuICAgICAgICAgICAgICAgIGJvZHlDbGFzczogJ3dhcnJpb3ItYm9keSBtdXNjdWxhcicsXHJcbiAgICAgICAgICAgICAgICBoZWFkQ2xhc3M6ICd3YXJyaW9yLWhlYWQgYmVhcmRlZCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkQWNjZXNzb3J5OiAnPGRpdiBjbGFzcz1cImhlbG1ldCB3YXJyaW9yLWhlbG1ldFwiPjwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICB0b3Jzb0NsYXNzOiAnaGVhdnktYXJtb3IgcGxhdGVkJyxcclxuICAgICAgICAgICAgICAgIGFybXNDbGFzczogJ211c2N1bGFyLWFybXMnLFxyXG4gICAgICAgICAgICAgICAgbGVnc0NsYXNzOiAnYXJtb3JlZC1sZWdzJyxcclxuICAgICAgICAgICAgICAgIGxlZnRXZWFwb246ICc8ZGl2IGNsYXNzPVwic2hpZWxkIGxhcmdlLXNoaWVsZFwiPvCfm6HvuI88L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRXZWFwb246ICc8ZGl2IGNsYXNzPVwic3dvcmQgYnJvYWRzd29yZFwiPuKalO+4jzwvZGl2PidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHBzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2Rwcy1jaGFyYWN0ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9keUNsYXNzOiAnZWxmLWJvZHkgYWdpbGUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZENsYXNzOiAnZWxmLWhlYWQgcG9pbnRlZC1lYXJzJyxcclxuICAgICAgICAgICAgICAgIGhlYWRBY2Nlc3Nvcnk6ICc8ZGl2IGNsYXNzPVwiaG9vZCBlbGYtaG9vZFwiPjwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICB0b3Jzb0NsYXNzOiAnbGVhdGhlci1hcm1vciBmbGV4aWJsZScsXHJcbiAgICAgICAgICAgICAgICBhcm1zQ2xhc3M6ICdhZ2lsZS1hcm1zJyxcclxuICAgICAgICAgICAgICAgIGxlZ3NDbGFzczogJ2xpZ2h0LWJvb3RzJyxcclxuICAgICAgICAgICAgICAgIGxlZnRXZWFwb246ICc8ZGl2IGNsYXNzPVwiYm93IGVsdmVuLWJvd1wiPvCfj7k8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRXZWFwb246ICc8ZGl2IGNsYXNzPVwiZGFnZ2VyIHN3aWZ0LWJsYWRlXCI+8J+Xoe+4jzwvZGl2PidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VwcG9ydDoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzdXBwb3J0LWNoYXJhY3RlcicsXHJcbiAgICAgICAgICAgICAgICBib2R5Q2xhc3M6ICdtYWdlLWJvZHkgc2Nob2xhcmx5JyxcclxuICAgICAgICAgICAgICAgIGhlYWRDbGFzczogJ21hZ2UtaGVhZCB3aXNlJyxcclxuICAgICAgICAgICAgICAgIGhlYWRBY2Nlc3Nvcnk6ICc8ZGl2IGNsYXNzPVwid2l6YXJkLWhhdCBwb2ludHktaGF0XCI+8J+OqTwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICB0b3Jzb0NsYXNzOiAnbWFnZS1yb2JlcyBmbG93aW5nJyxcclxuICAgICAgICAgICAgICAgIGFybXNDbGFzczogJ3NjaG9sYXJseS1hcm1zJyxcclxuICAgICAgICAgICAgICAgIGxlZ3NDbGFzczogJ3JvYmUtYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIGxlZnRXZWFwb246ICc8ZGl2IGNsYXNzPVwidG9tZSBzcGVsbC1ib29rXCI+8J+TmjwvZGl2PicsXHJcbiAgICAgICAgICAgICAgICByaWdodFdlYXBvbjogJzxkaXYgY2xhc3M9XCJzdGFmZiBnYW5kYWxmLXN0YWZmXCI+8J+qhDwvZGl2PidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlc1tyb2xlXSB8fCBzdHlsZXMudGFuaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29udmVydENsYXNzVG9CYXR0bGVSb2xlKGNoYXJhY3RlckNsYXNzKSB7XHJcbiAgICAgICAgLy8gQ29udmVyc2lvbiBkZXMgY2xhc3NlcyBlbiByw7RsZXMgVGFuay9EUFMvU3VwcG9ydFxyXG4gICAgICAgIGNvbnN0IHJvbGVNYXBwaW5nID0ge1xyXG4gICAgICAgICAgICAvLyBUQU5LXHJcbiAgICAgICAgICAgICd0YW5rJzogJ3RhbmsnLFxyXG4gICAgICAgICAgICAnd2Fycmlvcic6ICd0YW5rJywgXHJcbiAgICAgICAgICAgICdwYWxhZGluJzogJ3RhbmsnLFxyXG4gICAgICAgICAgICAnZ3VhcmQnOiAndGFuaycsXHJcbiAgICAgICAgICAgICdrbmlnaHQnOiAndGFuaycsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTVVBQT1JUICBcclxuICAgICAgICAgICAgJ3N1cHBvcnQnOiAnc3VwcG9ydCcsXHJcbiAgICAgICAgICAgICdoZWFsZXInOiAnc3VwcG9ydCcsXHJcbiAgICAgICAgICAgICdtYWdlJzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICAncHJpZXN0JzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICAnY2xlcmljJzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICAnd2l6YXJkJzogJ3N1cHBvcnQnLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRFBTXHJcbiAgICAgICAgICAgICdkcHMnOiAnZHBzJyxcclxuICAgICAgICAgICAgJ2Fzc2Fzc2luJzogJ2RwcycsXHJcbiAgICAgICAgICAgICdhcmNoZXInOiAnZHBzJywgXHJcbiAgICAgICAgICAgICdlbGYnOiAnZHBzJyxcclxuICAgICAgICAgICAgJ2ZpZ2h0ZXInOiAnZHBzJyxcclxuICAgICAgICAgICAgJ3JvZ3VlJzogJ2RwcydcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRDbGFzcyA9IChjaGFyYWN0ZXJDbGFzcyB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gcm9sZU1hcHBpbmdbbm9ybWFsaXplZENsYXNzXSB8fCAnZHBzJzsgLy8gRMOpZmF1dCBEUFNcclxuICAgIH1cclxuICAgIFxyXG4gICAgcG9zaXRpb25DaGFyYWN0ZXIoY2hhcmFjdGVyRWxlbWVudCwgcG9zaXRpb24sIHRlYW1UeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYmF0dGxlZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtYXJlbmEnKTtcclxuICAgICAgICBpZiAoIWJhdHRsZWZpZWxkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYmF0dGxlZmllbGRSZWN0ID0gYmF0dGxlZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9zaXRpb25zIGZpeGVzIGF2ZWMgZXNwYWNlbWVudCBwb3VyIMOpdml0ZXIgbGVzIHN1cGVycG9zaXRpb25zXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXI6IFtcclxuICAgICAgICAgICAgICAgIHsgeDogMTUsIHk6IDc1LCBuYW1lOiAnZnJvbnQtbGVmdCcgfSwgICAvLyBBdmFudC1nYXVjaGUgam91ZXVyXHJcbiAgICAgICAgICAgICAgICB7IHg6IDQ1LCB5OiA4NSwgbmFtZTogJ2JhY2stY2VudGVyJyB9LCAgLy8gQXJyacOocmUtY2VudHJlIGpvdWV1ciAgXHJcbiAgICAgICAgICAgICAgICB7IHg6IDc1LCB5OiA3NSwgbmFtZTogJ2Zyb250LXJpZ2h0JyB9ICAgLy8gQXZhbnQtZHJvaXRlIGpvdWV1clxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBlbmVteTogW1xyXG4gICAgICAgICAgICAgICAgeyB4OiAyNSwgeTogMjUsIG5hbWU6ICdmcm9udC1sZWZ0JyB9LCAgIC8vIEF2YW50LWdhdWNoZSBlbm5lbWlcclxuICAgICAgICAgICAgICAgIHsgeDogNTUsIHk6IDE1LCBuYW1lOiAnYmFjay1jZW50ZXInIH0sICAvLyBBcnJpw6hyZS1jZW50cmUgZW5uZW1pXHJcbiAgICAgICAgICAgICAgICB7IHg6IDg1LCB5OiAyNSwgbmFtZTogJ2Zyb250LXJpZ2h0JyB9ICAgLy8gQXZhbnQtZHJvaXRlIGVubmVtaVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTw6ljdXJpdMOpIHBvdXIgbGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCBtYXhQb3MgPSBwb3NpdGlvbnNbdGVhbVR5cGVdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgY29uc3Qgc2FmZVBvc2l0aW9uID0gTWF0aC5taW4ocG9zaXRpb24sIG1heFBvcyk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb25zW3RlYW1UeXBlXVtzYWZlUG9zaXRpb25dO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5ONIFBvc2l0aW9ubmVtZW50ICR7dGVhbVR5cGV9IHBvc2l0aW9uICR7c2FmZVBvc2l0aW9ufTogeD0ke3Bvcy54fSUsIHk9JHtwb3MueX0lICgke3Bvcy5uYW1lfSlgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQb3NpdGlvbm5lciBsZSBwZXJzb25uYWdlXHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cG9zLnh9JWA7XHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS50b3AgPSBgJHtwb3MueX0lYDtcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkJ2VudHLDqWUgZMOpY2Fsw6llXHJcbiAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoNTBweCkgc2NhbGUoMC44KSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSBzY2FsZSgxKSc7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyBlYXNlJztcclxuICAgICAgICB9LCBwb3NpdGlvbiAqIDQwMCk7IC8vIFBsdXMgZGUgZMOpbGFpIGVudHJlIGxlcyBhcHBhcml0aW9uc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gQU5JTUFUSU9OUyBERSBDT01CQVQgQVZBTkPDiUVTID09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBhc3luYyBhbmltYXRlQ2hhcmFjdGVyQWN0aW9uKGF0dGFja2VyRWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgYWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VyID0gdGhpcy5jaGFyYWN0ZXJzLmdldChhdHRhY2tlckVsZW1lbnQuaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2hhcmFjdGVycy5nZXQodGFyZ2V0RWxlbWVudC5pZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFhdHRhY2tlciB8fCAhdGFyZ2V0KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIHNlbG9uIGxlIHR5cGUgZCdhY3Rpb25cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAncGh5c2ljYWxfYXR0YWNrJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVBoeXNpY2FsQXR0YWNrKGF0dGFja2VyRWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWFnaWNfc3BlbGwnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlTWFnaWNTcGVsbChhdHRhY2tlckVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hlYWwnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlSGVhbChhdHRhY2tlckVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlZmVuZCc6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVEZWZlbnNlKGF0dGFja2VyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdpbnRlcmZhY2UgYXByw6hzIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGFyYWN0ZXJVSSh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBhbmltYXRlUGh5c2ljYWxBdHRhY2soYXR0YWNrZXIsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VyUmVjdCA9IGF0dGFja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGhhc2UgMTogUHLDqXBhcmF0aW9uXHJcbiAgICAgICAgYXR0YWNrZXIuY2xhc3NMaXN0LmFkZCgncHJlcGFyaW5nLWF0dGFjaycpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMud2FpdCg1MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBoYXNlIDI6IENoYXJnZSB2ZXJzIGxhIGNpYmxlXHJcbiAgICAgICAgY29uc3QgZGVsdGFYID0gdGFyZ2V0UmVjdC5sZWZ0IC0gYXR0YWNrZXJSZWN0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgZGVsdGFZID0gdGFyZ2V0UmVjdC50b3AgLSBhdHRhY2tlclJlY3QudG9wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF0dGFja2VyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtkZWx0YVggKiAwLjd9cHgsICR7ZGVsdGFZICogMC43fXB4KSBzY2FsZSgxLjEpYDtcclxuICAgICAgICBhdHRhY2tlci5jbGFzc0xpc3QuYWRkKCdjaGFyZ2luZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMud2FpdCg0MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBoYXNlIDM6IEltcGFjdFxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW1wYWN0RWZmZWN0KHRhcmdldCwgJ+KalO+4jycpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWtpbmctZGFtYWdlJyk7XHJcbiAgICAgICAgdGhpcy5zaGFrZUVsZW1lbnQodGFyZ2V0KTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoMzAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQaGFzZSA0OiBSZXRvdXIgZW4gcG9zaXRpb25cclxuICAgICAgICBhdHRhY2tlci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBhdHRhY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdwcmVwYXJpbmctYXR0YWNrJywgJ2NoYXJnaW5nJyk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Rha2luZy1kYW1hZ2UnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoMzAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgYW5pbWF0ZU1hZ2ljU3BlbGwoYXR0YWNrZXIsIHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBoYXNlIDE6IEluY2FudGF0aW9uXHJcbiAgICAgICAgYXR0YWNrZXIuY2xhc3NMaXN0LmFkZCgnY2FzdGluZy1zcGVsbCcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFnaWNBdXJhKGF0dGFja2VyKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoODAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQaGFzZSAyOiBQcm9qZWN0aWxlIG1hZ2lxdWVcclxuICAgICAgICBjb25zdCBzcGVsbFByb2plY3RpbGUgPSB0aGlzLmNyZWF0ZVNwZWxsUHJvamVjdGlsZShhdHRhY2tlciwgdGFyZ2V0KTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoNjAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBQaGFzZSAzOiBJbXBhY3QgbWFnaXF1ZVxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFnaWNJbXBhY3QodGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWFnaWMtaGl0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BlbGxQcm9qZWN0aWxlLnJlbW92ZSgpO1xyXG4gICAgICAgIGF0dGFja2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhc3Rpbmctc3BlbGwnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoNTAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbWFnaWMtaGl0Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGFuaW1hdGVIZWFsKGNhc3RlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY2FzdGVyLmNsYXNzTGlzdC5hZGQoJ2Nhc3RpbmctaGVhbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVmZmV0IGRlIHNvaW5cclxuICAgICAgICBjb25zdCBoZWFsRWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhbEVmZmVjdC5jbGFzc05hbWUgPSAnaGVhbC1lZmZlY3QnO1xyXG4gICAgICAgIGhlYWxFZmZlY3QuaW5uZXJIVE1MID0gJ/CfkprinKjwn4yxJztcclxuICAgICAgICBoZWFsRWZmZWN0LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBoZWFsRmxvYXQgMnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGhlYWxFZmZlY3QpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdiZWluZy1oZWFsZWQnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoMjAwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhc3RpbmctaGVhbCcpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdiZWluZy1oZWFsZWQnKTtcclxuICAgICAgICBoZWFsRWZmZWN0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBhbmltYXRlRGVmZW5zZShkZWZlbmRlcikge1xyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkZSBkw6lmZW5zZVxyXG4gICAgICAgIGRlZmVuZGVyLmNsYXNzTGlzdC5hZGQoJ2RlZmVuZGluZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVmZmV0IGRlIGJvdWNsaWVyXHJcbiAgICAgICAgY29uc3Qgc2hpZWxkRWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2hpZWxkRWZmZWN0LmNsYXNzTmFtZSA9ICdkZWZlbnNlLWVmZmVjdCc7XHJcbiAgICAgICAgc2hpZWxkRWZmZWN0LmlubmVySFRNTCA9ICfwn5uh77iP4pyoJztcclxuICAgICAgICBzaGllbGRFZmZlY3Quc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNoaWVsZFB1bHNlIDEuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmZW5kZXIuYXBwZW5kQ2hpbGQoc2hpZWxkRWZmZWN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZHUgcGVyc29ubmFnZSBxdWkgc2UgbWV0IGVuIHBvc2l0aW9uIGTDqWZlbnNpdmVcclxuICAgICAgICBkZWZlbmRlci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC45NSkgdHJhbnNsYXRlWSg1cHgpJztcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLndhaXQoMTUwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmZW5kZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGVmZW5kaW5nJyk7XHJcbiAgICAgICAgZGVmZW5kZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpIHRyYW5zbGF0ZVkoMCknO1xyXG4gICAgICAgIHNoaWVsZEVmZmVjdC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEVGRkVUUyBWSVNVRUxTIEFWQU5Dw4lTID09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBjcmVhdGVJbXBhY3RFZmZlY3QodGFyZ2V0LCBpY29uKSB7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWZmZWN0LmNsYXNzTmFtZSA9ICdpbXBhY3QtZWZmZWN0JztcclxuICAgICAgICBlZmZlY3QuaW5uZXJIVE1MID0gaWNvbjtcclxuICAgICAgICBlZmZlY3Quc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGltcGFjdEJ1cnN0IDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVmZmVjdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlZmZlY3QucmVtb3ZlKCksIDgwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZU1hZ2ljQXVyYShjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjb25zdCBhdXJhID0gY2hhcmFjdGVyLnF1ZXJ5U2VsZWN0b3IoJy5hdXJhJyk7XHJcbiAgICAgICAgaWYgKGF1cmEpIHtcclxuICAgICAgICAgICAgYXVyYS5zdHlsZS5hbmltYXRpb24gPSAnbWFnaWNQdWxzZSAwLjhzIGluZmluaXRlJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhdXJhLnN0eWxlLmFuaW1hdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVNwZWxsUHJvamVjdGlsZShhdHRhY2tlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2plY3RpbGUuY2xhc3NOYW1lID0gJ3NwZWxsLXByb2plY3RpbGUnO1xyXG4gICAgICAgIHByb2plY3RpbGUuaW5uZXJIVE1MID0gJ+KaoSc7XHJcbiAgICAgICAgcHJvamVjdGlsZS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNwZWxsVHJhdmVsIDAuNnMgbGluZWFyIGZvcndhcmRzO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGF0dGFja2VyUmVjdCA9IGF0dGFja2VyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdGlsZS5zdHlsZS5sZWZ0ID0gYXR0YWNrZXJSZWN0LmxlZnQgKyBhdHRhY2tlclJlY3Qud2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICBwcm9qZWN0aWxlLnN0eWxlLnRvcCA9IGF0dGFja2VyUmVjdC50b3AgKyBhdHRhY2tlclJlY3QuaGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0aWxlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltZXIgdmVycyBsYSBjaWJsZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0aWxlLnN0eWxlLmxlZnQgPSB0YXJnZXRSZWN0LmxlZnQgKyB0YXJnZXRSZWN0LndpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgICAgIHByb2plY3RpbGUuc3R5bGUudG9wID0gdGFyZ2V0UmVjdC50b3AgKyB0YXJnZXRSZWN0LmhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcHJvamVjdGlsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlTWFnaWNJbXBhY3QodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaW1wYWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW1wYWN0LmNsYXNzTmFtZSA9ICdtYWdpYy1pbXBhY3QnO1xyXG4gICAgICAgIGltcGFjdC5pbm5lckhUTUwgPSAn8J+SpeKaofCflKUnO1xyXG4gICAgICAgIGltcGFjdC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbWFnaWNCdXJzdCAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoaW1wYWN0KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGltcGFjdC5yZW1vdmUoKSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNoYWtlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnZGFtYWdlU2hha2UgMC40cyBlYXNlLWluLW91dCc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJyc7XHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEdFU1RJT04gREUgTCfDiVRBVCA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgdXBkYXRlQ2hhcmFjdGVyVUkoY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRGF0YSA9IHRoaXMuY2hhcmFjdGVycy5nZXQoY2hhcmFjdGVyLmVsZW1lbnQuaWQpO1xyXG4gICAgICAgIGlmICghY2hhcmFjdGVyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWx0aEJhciA9IGNoYXJhY3Rlci5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFsdGgtZmlsbCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWx0aFRleHQgPSBjaGFyYWN0ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhbHRoLXRleHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaGVhbHRoQmFyICYmIGhlYWx0aFRleHQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhbHRoUGVyY2VudCA9IChjaGFyYWN0ZXJEYXRhLmN1cnJlbnRIcCAvIGNoYXJhY3RlckRhdGEubWF4SHApICogMTAwO1xyXG4gICAgICAgICAgICBoZWFsdGhCYXIuc3R5bGUud2lkdGggPSBgJHtoZWFsdGhQZXJjZW50fSVgO1xyXG4gICAgICAgICAgICBoZWFsdGhUZXh0LnRleHRDb250ZW50ID0gY2hhcmFjdGVyRGF0YS5jdXJyZW50SHA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb3VsZXVyIGRlIGxhIGJhcnJlIGRlIHZpZSBzZWxvbiBsZSBwb3VyY2VudGFnZVxyXG4gICAgICAgICAgICBpZiAoaGVhbHRoUGVyY2VudCA+IDYwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFsdGhCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0Q0FGNTAnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlYWx0aFBlcmNlbnQgPiAzMCkge1xyXG4gICAgICAgICAgICAgICAgaGVhbHRoQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkY5ODAwJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhlYWx0aEJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y0NDMzNic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvcygpIHtcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpO1xyXG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcclxuICAgICAgICAgICAgaWYgKCF2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5kYXRhc2V0Lndhc1BsYXlpbmcgPSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzdW1lQmFja2dyb3VuZFZpZGVvcygpIHtcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1tkYXRhLXdhcy1wbGF5aW5nPVwidHJ1ZVwiXScpO1xyXG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcclxuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB2aWRlby5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2FzLXBsYXlpbmcnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFVUSUxJVEFJUkVTID09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICB3YWl0KG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcyAvIHRoaXMuc3BlZWRNdWx0aXBsaWVyKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFJvbGVJY29uKHJvbGUpIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgdGFuazogJ2ZhcyBmYS1zaGllbGQtYWx0JyxcclxuICAgICAgICAgICAgZHBzOiAnZmFzIGZhLXN3b3JkJyxcclxuICAgICAgICAgICAgc3VwcG9ydDogJ2ZhcyBmYS1tYWdpYydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpY29uc1tyb2xlXSB8fCBpY29ucy50YW5rO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGVhbnVwKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiBjbGVhclRpbWVvdXQoYW5pbWF0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5yZXN1bWVCYWNrZ3JvdW5kVmlkZW9zKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBwb3VyIHV0aWxpc2F0aW9uIEVTNiBldCBnbG9iYWxcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IENvbWJhdDNEU3lzdGVtO1xyXG59XHJcblxyXG4vLyBSZW5kcmUgZGlzcG9uaWJsZSBnbG9iYWxlbWVudFxyXG53aW5kb3cuQ29tYmF0M0RTeXN0ZW0gPSBDb21iYXQzRFN5c3RlbTtcclxuIiwiLy8gPT09PT09PT09PT09PT09IElOVEVSRkFDRSBERSBKRVUgLSBTQU5UT05TIFNDUklQVCBUQUNUSUNTID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgR2FtZUludGVyZmFjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSAndGVhbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZGVzIGltYWdlcyBkdSBndWlsZCBndWlkZVxyXG4gICAgICAgIHRoaXMuZ3VpbGRJbWFnZXMgPSBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2d1aWxkMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9ndWlsZDIucG5nJywgXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2d1aWxkMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9ndWlsZDQucG5nJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmd1aWxkR3VpZGVJbml0QXR0ZW1wdHMgPSAwOyAvLyBDb21wdGV1ciBwb3VyIMOpdml0ZXIgbGVzIGJvdWNsZXMgaW5maW5pZXNcclxuICAgICAgICBcclxuICAgICAgICAvLyBTJ2Fzc3VyZXIgcXVlIGxlIERPTSBlc3QgY2hhcmfDqSBhdmFudCBkJ2luaXRpYWxpc2VyXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdGhpcy5pbml0KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBam91dGVyIHVuZSBmb25jdGlvbiBnbG9iYWxlIHBvdXIgdGVzdGVyIGxlIGJhdHRsZWZpZWxkXHJcbiAgICAgICAgd2luZG93LnRlc3RCYXR0bGVmaWVsZCA9ICgpID0+IHRoaXMudGVzdEJhdHRsZWZpZWxkVmlzdWFsaXphdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRhYnMoKTtcclxuICAgICAgICB0aGlzLnNldHVwUmFua2luZ0ZpbHRlcnMoKTtcclxuICAgICAgICB0aGlzLmxvYWRDaGFyYWN0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1VybFRhYigpOyAvLyBWw6lyaWZpZXIgc2kgdW4gb25nbGV0IGVzdCBzcMOpY2lmacOpIGRhbnMgbCdVUkxcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgRCdPTkdMRVRTID09PT09PT09PT09PT09PVxyXG4gICAgY2hlY2tVcmxUYWIoKSB7XHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIHNpIHVuIG9uZ2xldCBlc3Qgc3DDqWNpZmnDqSBkYW5zIGwnVVJMIChmcmFnbWVudCBvdSBwYXJhbcOodHJlKVxyXG4gICAgICAgIGNvbnN0IHVybEZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IHRhYlBhcmFtID0gdXJsUGFyYW1zLmdldCgndGFiJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFiID0gdXJsRnJhZ21lbnQgfHwgdGFiUGFyYW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRhcmdldFRhYiAmJiBbJ3RlYW0nLCAnY2hhcmFjdGVycycsICdiYXR0bGUnLCAncmFua2luZycsICdoaXN0b3J5J10uaW5jbHVkZXModGFyZ2V0VGFiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYih0YXJnZXRUYWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldHVwVGFicygpIHtcclxuICAgICAgICBjb25zdCB0YWJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICB0YWJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IGJ1dHRvbi5kYXRhc2V0LnRhYjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKHRhYk5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUYWIodGFiTmFtZSkge1xyXG4gICAgICAgIC8vIETDqXNhY3RpdmVyIGwnb25nbGV0IGFjdHVlbCBhdmVjIHbDqXJpZmljYXRpb25zIHBsdXMgcm9idXN0ZXNcclxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1idXR0b24uYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmVCdXR0b24pIHtcclxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjdGl2ZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lbC5hY3RpdmUnKTtcclxuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZVBhbmVsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFjdGl2ZXIgbGUgbm91dmVsIG9uZ2xldCBhdmVjIHbDqXJpZmljYXRpb25zXHJcbiAgICAgICAgY29uc3QgbmV3VGFiQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiPVwiJHt0YWJOYW1lfVwiXWApO1xyXG4gICAgICAgIGlmIChuZXdUYWJCdXR0b24pIHtcclxuICAgICAgICAgICAgbmV3VGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdUYWJQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhYk5hbWV9LXBhbmVsYCk7XHJcbiAgICAgICAgaWYgKG5ld1RhYlBhbmVsKSB7XHJcbiAgICAgICAgICAgIG5ld1RhYlBhbmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gdGFiTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRhYk5hbWUgPT09ICdyYW5raW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKCk7IC8vIEFKT1VURVogQ0VUVEUgTElHTkVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWN0aW9ucyBzcMOpY2lmaXF1ZXMgcGFyIG9uZ2xldFxyXG4gICAgICAgIHN3aXRjaCh0YWJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NoYXJhY3RlcnMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2hhcmFjdGVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgICAgICAgICAgLy8gw4lnYWxlbWVudCBhcHBlbGVyIGxhIG3DqXRob2RlIGRlIHRlYW0tbWFuYWdlbWVudCBzaSBlbGxlIGV4aXN0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy50ZWFtTWFuYWdlbWVudCAmJiB0eXBlb2Ygd2luZG93LnRlYW1NYW5hZ2VtZW50LnVwZGF0ZUJhdHRsZVRhYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50ZWFtTWFuYWdlbWVudC51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoaXN0b3J5JzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hdGNoSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBQRVJTT05OQUdFUyA9PT09PT09PT09PT09PT1cclxuICAgIGxvYWRDaGFyYWN0ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFyYWN0ZXJzLWdyaWQnKTtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbnRlbmV1ciBkZSBwZXJzb25uYWdlcyBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaW11bGVyIGxlIGNoYXJnZW1lbnRcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+Q2hhcmdlbWVudCBkZXMgcGVyc29ubmFnZXMuLi48L3A+JztcclxuXHJcbiAgICAgICAgLy8gUGVyc29ubmFnZXMgZCdleGVtcGxlXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlQ2hhcmFjdGVycyA9IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0dhcmRlIFJveWFsJywgcm9sZTogJ1RhbmsnLCBwb3dlcjogMTUwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ0FyY2hlciBNeXN0aXF1ZScsIHJvbGU6ICdEUFMnLCBwb3dlcjogMTgwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogMywgbmFtZTogJ0NsZXJjIERpdmluJywgcm9sZTogJ1N1cHBvcnQnLCBwb3dlcjogMTIwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ01hZ2UgZGUgQmF0YWlsbGUnLCByb2xlOiAnRFBTJywgcG93ZXI6IDIwMCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdQYWxhZGluJywgcm9sZTogJ1RhbmsnLCBwb3dlcjogMTcwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogNiwgbmFtZTogJ0RydWlkZScsIHJvbGU6ICdTdXBwb3J0JywgcG93ZXI6IDE0MCwgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBzYW1wbGVDaGFyYWN0ZXJzLmZvckVhY2goY2hhcmFjdGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNoYXJhY3RlckNhcmQoY2hhcmFjdGVyKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hhcmFjdGVyQ2FyZChjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSAnY2hhcmFjdGVyLWNhcmQnO1xyXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPiR7Y2hhcmFjdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcmFjdGVyLXJvbGUgcm9sZS0ke2NoYXJhY3Rlci5yb2xlLnRvTG93ZXJDYXNlKCl9XCI+JHtjaGFyYWN0ZXIucm9sZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlB1aXNzYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2NoYXJhY3Rlci5wb3dlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZUJhdHRsZVRhYigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGUtc2VhcmNoIC5pbmZvLXRleHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXNlYXJjaEJ0bikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0JvdXRvbiBkZSByZWNoZXJjaGUgZGUgYmF0YWlsbGUgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluZm9UZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGV4dGUgZFxcJ2luZm9ybWF0aW9uIGRlIGJhdGFpbGxlIGludHJvdXZhYmxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIGxlIG5vbWJyZSBkZSBwZXJzb25uYWdlcyBzw6lsZWN0aW9ubsOpc1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hhcmFjdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItY2FyZC5zZWxlY3RlZCcpO1xyXG4gICAgICAgIGNvbnN0IHRlYW1TaXplID0gc2VsZWN0ZWRDaGFyYWN0ZXJzLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGVhbVNpemUgPT09IDMpIHtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gJ1ZvdHJlIMOpcXVpcGUgZXN0IHByw6p0ZSAhIFRyb3V2ZXogdW4gYWR2ZXJzYWlyZS4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gYFPDqWxlY3Rpb25uZXogJHszIC0gdGVhbVNpemV9IHBlcnNvbm5hZ2UocykgZGUgcGx1cyBwb3VyIGNvbW1lbmNlcmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBISVNUT1JJUVVFID09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgbG9hZE1hdGNoSGlzdG9yeSgpIHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdGNoLWhpc3RvcnknKTtcclxuICAgICAgICBpZiAoIWhpc3RvcnlDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb250ZW5ldXIgZFxcJ2hpc3RvcmlxdWUgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciB1biBpbmRpY2F0ZXVyIGRlIGNoYXJnZW1lbnRcclxuICAgICAgICBoaXN0b3J5Q29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImxvYWRpbmctdGV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gQ2hhcmdlbWVudCBkZSBsXFwnaGlzdG9yaXF1ZS4uLjwvcD4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvaGlzdG9yeScpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MgfHwgZGF0YS5tYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJlbXB0eS1oaXN0b3J5XCI+QXVjdW4gY29tYmF0IGpvdcOpIHBvdXIgbGUgbW9tZW50PC9wPic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVpcmUgbCdoaXN0b3JpcXVlXHJcbiAgICAgICAgICAgIGxldCBoaXN0b3J5SFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaXN0b3J5LXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Ub3RhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLnRvdGFsX21hdGNoZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gd2luc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5WaWN0b2lyZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7ZGF0YS53aW5zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtIGxvc3Nlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Ew6lmYWl0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7ZGF0YS5sb3NzZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gd2lucmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5UYXV4IGRlIHZpY3RvaXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEudG90YWxfbWF0Y2hlcyA+IDAgPyBNYXRoLnJvdW5kKChkYXRhLndpbnMgLyBkYXRhLnRvdGFsX21hdGNoZXMpICogMTAwKSA6IDB9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpc3RvcnktbGlzdFwiPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGF0YS5tYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0Q2xhc3MgPSBtYXRjaC5pc193aW5uZXIgPyAndmljdG9yeScgOiAnZGVmZWF0JztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdEljb24gPSBtYXRjaC5pc193aW5uZXIgPyAndHJvcGh5JyA6ICd0aW1lcyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRUZXh0ID0gbWF0Y2guaXNfd2lubmVyID8gJ1ZJQ1RPSVJFJyA6ICdEw4lGQUlURSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtaXRlbSAke3Jlc3VsdENsYXNzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS0ke3Jlc3VsdEljb259XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bHQtdGV4dFwiPiR7cmVzdWx0VGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0gcGxheWVyLXRlYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWFtLW5hbWVcIj4ke21hdGNoLnBsYXllcl90ZWFtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWFtLXBvd2VyXCI+JHtNYXRoLnJvdW5kKG1hdGNoLnBsYXllcl9wb3dlcil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2c1wiPlZTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0gb3Bwb25lbnQtdGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlYW0tbmFtZVwiPiR7bWF0Y2gub3Bwb25lbnRfdGVhbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVhbS1wb3dlclwiPiR7TWF0aC5yb3VuZChtYXRjaC5vcHBvbmVudF9wb3dlcil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Bwb25lbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3Bwb25lbnQtbmFtZVwiPiR7bWF0Y2gub3Bwb25lbnRfcGxheWVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRjaC1kYXRlXCI+JHttYXRjaC5maW5pc2hlZF9hdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRjaC1kdXJhdGlvblwiPiR7bWF0Y2guZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXJlY2FwXCIgb25jbGljaz1cImdhbWVJbnRlcmZhY2Uuc2hvd01hdGNoUmVjYXAoJHttYXRjaC5pZH0pXCIgdGl0bGU9XCJWb2lyIGxlIHJlY2FwIGR1IGNvbWJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlY2FwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaXN0b3J5SFRNTCArPSAnPC9kaXY+JztcclxuICAgICAgICAgICAgaGlzdG9yeUNvbnRhaW5lci5pbm5lckhUTUwgPSBoaXN0b3J5SFRNTDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsXFwnaGlzdG9yaXF1ZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGhpc3RvcnlDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiZXJyb3ItdGV4dFwiPkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGUgbFxcJ2hpc3RvcmlxdWU8L3A+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFVUSUxJVEFJUkVTID09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0ke3R5cGV9YDtcclxuICAgICAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS0ke3RoaXMuZ2V0Tm90aWZpY2F0aW9uSWNvbih0eXBlKX1cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93JyksIDEwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5vdGlmaWNhdGlvbkljb24odHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6ICdjaGVjay1jaXJjbGUnLFxyXG4gICAgICAgICAgICAnd2FybmluZyc6ICdleGNsYW1hdGlvbi10cmlhbmdsZScsXHJcbiAgICAgICAgICAgICdlcnJvcic6ICd0aW1lcy1jaXJjbGUnLFxyXG4gICAgICAgICAgICAnaW5mbyc6ICdpbmZvLWNpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpY29uc1t0eXBlXSB8fCAnaW5mby1jaXJjbGUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBDTEFTU0VNRU5UID09PT09PT09PT09PT09PVxyXG5cclxuICAgIHNldHVwUmFua2luZ0ZpbHRlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5raW5nLWJ0bicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpbHRlckJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBEw6lzYWN0aXZlciB0b3VzIGxlcyBib3V0b25zXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFjdGl2ZXIgbGUgYm91dG9uIGNsaXF1w6lcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ2hhcmdlciBsZSBjbGFzc2VtZW50IGF2ZWMgbGUgZmlsdHJlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBidXR0b24uZGF0YXNldC5maWx0ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKGZpbHRlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRSYW5raW5nKGZpbHRlciA9ICdnbG9iYWwnKSB7XHJcbiAgICAgICAgY29uc3QgcmFua2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5raW5nLWxpc3QnKTtcclxuICAgICAgICBpZiAoIXJhbmtpbmdDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb250ZW5ldXIgZGUgY2xhc3NlbWVudCBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIHVuIGluZGljYXRldXIgZGUgY2hhcmdlbWVudFxyXG4gICAgICAgIHJhbmtpbmdDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBDaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQuLi48L3A+JztcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL3Jhbmtpbmc/ZmlsdGVyPSR7ZmlsdGVyfWApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MgfHwgZGF0YS5yYW5raW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcHR5TWVzc2FnZSA9ICdBdWN1biBqb3VldXIgY2xhc3PDqSBwb3VyIGxlIG1vbWVudCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSAnd2Vla2x5JykgZW1wdHlNZXNzYWdlID0gJ0F1Y3VuIG1hdGNoIGpvdcOpIGNldHRlIHNlbWFpbmUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gJ21vbnRobHknKSBlbXB0eU1lc3NhZ2UgPSAnQXVjdW4gbWF0Y2ggam91w6kgY2UgbW9pcy1jaSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJhbmtpbmdDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZW1wdHktcmFua2luZ1wiPiR7ZW1wdHlNZXNzYWdlfTwvcD5gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBqb3VldXIgYWN0dWVsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlclBvc2l0aW9uKGRhdGEuY3VycmVudF9wbGF5ZXJfcG9zaXRpb24sIGRhdGEuY3VycmVudF9wbGF5ZXJfbW1yKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVpcmUgbGUgY2xhc3NlbWVudFxyXG4gICAgICAgICAgICBsZXQgcmFua2luZ0hUTUwgPSBgPGRpdiBjbGFzcz1cInRvcC1wbGF5ZXJzXCI+YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvcCAzIGF2ZWMgZGVzaWduIHNww6ljaWFsXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oMywgZGF0YS5yYW5raW5nLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZGF0YS5yYW5raW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQ2xhc3MgPSBpID09PSAwID8gJ3RvcC0xJyA6IGkgPT09IDEgPyAndG9wLTInIDogJ3RvcC0zJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtDbGFzcyA9IGkgPT09IDAgPyAnZ29sZCcgOiBpID09PSAxID8gJ3NpbHZlcicgOiAnYnJvbnplJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtJY29uID0gaSA9PT0gMCA/ICdjcm93bicgOiBpID09PSAxID8gJ21lZGFsJyA6ICdhd2FyZCc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDbGFzcyA9IHBsYXllci5tbXJfY2hhbmdlID49IDAgPyAncG9zaXRpdmUnIDogJ25lZ2F0aXZlJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZVNpZ24gPSBwbGF5ZXIubW1yX2NoYW5nZSA+PSAwID8gJysnIDogJyc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFua2luZy1lbnRyeSAke3RvcENsYXNzfSAke3BsYXllci5pc19jdXJyZW50X3BsYXllciA/ICdjdXJyZW50LXBsYXllcicgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5rICR7cmFua0NsYXNzfVwiPjxpIGNsYXNzPVwiZmFzIGZhLSR7cmFua0ljb259XCI+PC9pPiAke3BsYXllci5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGF5ZXItbmFtZVwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLnVzZXJuYW1lID09PSB3aW5kb3cudXNlckluZm8udXNlcm5hbWUgPyB3aW5kb3cudXNlckluZm8udXNlcm5hbWVDb2xvciA6ICdpbmhlcml0J31cIj4ke3BsYXllci51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmdcIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPiAke3BsYXllci5tbXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2luc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRyb3BoeVwiPjwvaT4gJHtwbGF5ZXIud2luc31WPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibG9zc2VzXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+ICR7cGxheWVyLmxvc3Nlc31EPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhdGluZy1jaGFuZ2UgJHtjaGFuZ2VDbGFzc31cIj4ke2NoYW5nZVNpZ259JHtwbGF5ZXIubW1yX2NoYW5nZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByYW5raW5nSFRNTCArPSAnPC9kaXY+PGRpdiBjbGFzcz1cIm90aGVyLXBsYXllcnNcIj4nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXV0cmVzIGpvdWV1cnMgKHBvc2l0aW9uIDQrKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGRhdGEucmFua2luZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZGF0YS5yYW5raW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlQ2xhc3MgPSBwbGF5ZXIubW1yX2NoYW5nZSA+PSAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VTaWduID0gcGxheWVyLm1tcl9jaGFuZ2UgPj0gMCA/ICcrJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByYW5raW5nSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmtpbmctZW50cnkgJHtwbGF5ZXIuaXNfY3VycmVudF9wbGF5ZXIgPyAnY3VycmVudC1wbGF5ZXInIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFua1wiPiMke3BsYXllci5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGF5ZXItbmFtZVwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLmlzX2N1cnJlbnRfcGxheWVyID8gd2luZG93LnVzZXJJbmZvLnVzZXJuYW1lQ29sb3IgOiAnaW5oZXJpdCd9XCI+JHtwbGF5ZXIudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nXCI+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gJHtwbGF5ZXIubW1yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpbnNcIj48aSBjbGFzcz1cImZhcyBmYS10cm9waHlcIj48L2k+ICR7cGxheWVyLndpbnN9Vjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxvc3Nlc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPiAke3BsYXllci5sb3NzZXN9RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctY2hhbmdlICR7Y2hhbmdlQ2xhc3N9XCI+JHtjaGFuZ2VTaWdufSR7cGxheWVyLm1tcl9jaGFuZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgc2V1bGVtZW50IGxlcyAxMCBwcmVtaWVycywgcHVpcyB1biBib3V0b24gXCJWb2lyIHBsdXNcIlxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmtpbmctbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvYWQtbW9yZS1idG5cIiBvbmNsaWNrPVwiZ2FtZUludGVyZmFjZS5sb2FkTW9yZVJhbmtpbmcoJHtpICsgMX0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPiBWb2lyIHBsdXMgZGUgam91ZXVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9IHJhbmtpbmdIVE1MO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImVycm9yLXRleHRcIj5FcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQ8L3A+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlclBvc2l0aW9uKHBvc2l0aW9uLCBtbXIpIHtcclxuICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc2l0aW9uLW51bWJlcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSYXRpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZy10ZXh0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHVzZXJQb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdXNlclBvc2l0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGAjJHtwb3NpdGlvbiB8fCAnPyd9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ8OJbMOpbWVudCBkZSBwb3NpdGlvbiB1dGlsaXNhdGV1ciBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodXNlclJhdGluZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdXNlclJhdGluZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttbXIgfHwgMTIwMH0gcHRzYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ8OJbMOpbWVudCBkZSBzY29yZSB1dGlsaXNhdGV1ciBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTW9yZVJhbmtpbmcoc3RhcnRJbmRleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFyZ2VyIHBsdXMgZGUgam91ZXVycyDDoCBwYXJ0aXIgZGU6Jywgc3RhcnRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdGb25jdGlvbm5hbGl0w6kgYmllbnTDtHQgZGlzcG9uaWJsZSAhJywgJ2luZm8nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgVklTVUFMSVNBVElPTiBERSBDT01CQVQgPT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzaG93Q29tYmF0VmlzdWFsaXphdGlvbihtYXRjaElkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgZGUgc8OpY3VyaXTDqSBwb3VyIGwnSUQgZGUgbWF0Y2hcclxuICAgICAgICAgICAgaWYgKCFtYXRjaElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEIGRlIG1hdGNoIG1hbnF1YW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbWF0Y2htYWtpbmcvbWF0Y2gvJHttYXRjaElkfS9ldmVudHNgKTtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyBhZGRpdGlvbm5lbGxlcyBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgaWYgKCFtYXRjaERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRG9ubsOpZXMgZGUgbWF0Y2ggdmlkZXMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ/Cfk4ogRG9ubsOpZXMgZGUgbWF0Y2ggcmXDp3VlczonLCBtYXRjaERhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlDb21iYXRWaXN1YWxpemF0aW9uTW9kYWwobWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsYSB2aXN1YWxpc2F0aW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNvbWJhdDogJyArIGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRlcm1pbmVQbGF0ZWF1VHlwZShtYXRjaERhdGEpIHtcclxuICAgICAgICAvLyBBbMOpYXRvaXJlbWVudCBjaG9pc2lyIGVudHJlIG1lZGlldmFsIGV0IGR5c3RvcGlhblxyXG4gICAgICAgIGNvbnN0IHBsYXRlYXVUeXBlcyA9IFsnbWVkaWV2YWwnLCAnZHlzdG9waWFuJ107XHJcbiAgICAgICAgcmV0dXJuIHBsYXRlYXVUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF0ZWF1VHlwZXMubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc3BsYXlDb21iYXRWaXN1YWxpemF0aW9uTW9kYWwobWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ/CflI0gREVCVUc6IG1hdGNoRGF0YSBjb21wbGV0ID0nLCBKU09OLnN0cmluZ2lmeShtYXRjaERhdGEsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIHZyYWllcyBkb25uw6llcyBkZXMgw6lxdWlwZXNcclxuICAgICAgICAgICAgY29uc3QgdGVhbUEgPSBtYXRjaERhdGEudGVhbUEgfHwgbWF0Y2hEYXRhLnRlYW1fYSB8fCBtYXRjaERhdGEucGxheWVyVGVhbTtcclxuICAgICAgICAgICAgY29uc3QgdGVhbUIgPSBtYXRjaERhdGEudGVhbUIgfHwgbWF0Y2hEYXRhLnRlYW1fYiB8fCBtYXRjaERhdGEuZW5lbXlUZWFtO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IG1hdGNoRGF0YS5jdXJyZW50VXNlciB8fCB3aW5kb3cudXNlckluZm8/LnVzZXJuYW1lIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlcm5hbWVdJyk/LmRhdGFzZXQudXNlcm5hbWUgfHwgJ2JhbWJhbSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyBkZSBzw6ljdXJpdMOpXHJcbiAgICAgICAgICAgIGlmICghdGVhbUEgfHwgIXRlYW1CKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfDiXF1aXBlcyBtYW5xdWFudGVzOicsIHsgdGVhbUEsIHRlYW1CIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXI6IGRvbm7DqWVzIGRcXCfDqXF1aXBlIG1hbnF1YW50ZXMnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRMOpdGVybWluZXIgcXVlbGxlIMOpcXVpcGUgYXBwYXJ0aWVudCBhdSBqb3VldXIgYWN0dWVsIGRlIG1hbmnDqHJlIHPDqWN1cmlzw6llXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXJUZWFtLCBlbmVteVRlYW07XHJcbiAgICAgICAgICAgIGlmICh0ZWFtQSAmJiB0ZWFtQS5wbGF5ZXIgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUZWFtID0gdGVhbUE7XHJcbiAgICAgICAgICAgICAgICBlbmVteVRlYW0gPSB0ZWFtQjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZWFtQiAmJiB0ZWFtQi5wbGF5ZXIgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgICAgICAgICBlbmVteVRlYW0gPSB0ZWFtQTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFBhciBkw6lmYXV0LCBhc3NpZ25lciB0ZWFtQSBjb21tZSDDqXF1aXBlIGR1IGpvdWV1clxyXG4gICAgICAgICAgICAgICAgcGxheWVyVGVhbSA9IHRlYW1BO1xyXG4gICAgICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfvv70gVGVhbXMgRGVidWc6Jywge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgICAgICAgICAgICB0ZWFtQTogdGVhbUEucGxheWVyLFxyXG4gICAgICAgICAgICAgICAgdGVhbUI6IHRlYW1CLnBsYXllcixcclxuICAgICAgICAgICAgICAgIHBsYXllclRlYW06IHBsYXllclRlYW0ucGxheWVyLFxyXG4gICAgICAgICAgICAgICAgZW5lbXlUZWFtOiBlbmVteVRlYW0ucGxheWVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxlcyDDqWzDqW1lbnRzIG7DqWNlc3NhaXJlcyBleGlzdGVudFxyXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKTtcclxuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgdHlwZSBkZSBwbGF0ZWF1IHNlbG9uIGxlIG1hdGNoXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXRlYXVUeXBlID0gdGhpcy5kZXRlcm1pbmVQbGF0ZWF1VHlwZShtYXRjaERhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ2JhdHRsZWZpZWxkLW1vZGFsIHNob3cnO1xyXG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGxlZmllbGQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBHdWlkZSBkZSBHdWlsZGUgw6AgZ2F1Y2hlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1ndWlsZC1ndWlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ3VpbGQxLnBuZ1wiIGFsdD1cIkd1aWRlIGRlIEd1aWxkZVwiIGNsYXNzPVwiZ3VpZGUtYXZhdGFyXCIgaWQ9XCJndWlsZC1hdmF0YXItY29tYmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlLWFycm93XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImd1aWRlLXRleHQtY29tYmF0XCI+4pqU77iPIFF1ZSBsZSBjb21iYXQgY29tbWVuY2UgISBNb250cmV6LWxldXIgZGUgcXVvaSB2b3VzIMOqdGVzIGNhcGFibGUgITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250ZW51IHByaW5jaXBhbCBkdSBiYXR0bGVmaWVsZCDDoCBkcm9pdGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRsZWZpZWxkLW1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGxlZmllbGQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+4pqU77iPIENvbWJhdCDDiXBpcXVlIGVuIENvdXJzIOKalO+4jzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYmF0dGxlZmllbGRcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gWm9uZSBkZXMgY2FydGVzIGVubmVtaWVzIChFTiBIQVVUIERVIFBMQVRFQVUpIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5lbXktY2FyZHMtem9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPvCflLQgw4lxdWlwZSBBZHZlcnNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1jYXJkcyBlbmVteS1jYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZW5lcmF0ZUJhdHRsZWZpZWxkQ2FyZHMoZW5lbXlUZWFtLCAnZW5lbXknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQXLDqG5lIGRlIGNvbWJhdCBjZW50cmFsZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRsZWZpZWxkLWFyZW5hICR7cGxhdGVhdVR5cGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LXpvbmUtM2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExlcyBwZXJzb25uYWdlcyAzRCBhcHBhcmHDrnRyb250IGljaSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFpvbmUgZCdhbmltYXRpb24gc3BlY3RhY3VsYWlyZSBjZW50cmFsZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tYW5pbWF0aW9uLXpvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWRpc3BsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LWVmZmVjdHNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENvbnRyw7RsZXMgZGUgdml0ZXNzZSByZXBvc2l0aW9ubsOpcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVlZC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzcGVlZC1idG4gYWN0aXZlXCIgZGF0YS1zcGVlZD1cIjFcIj54MTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzcGVlZC1idG5cIiBkYXRhLXNwZWVkPVwiMlwiPngyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwZWVkLWJ0blwiIGRhdGEtc3BlZWQ9XCI1XCI+eDU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuXCIgZGF0YS1zcGVlZD1cIjEwXCI+eDEwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFpvbmUgZGVzIGNhcnRlcyBkdSBqb3VldXIgKEVOIEJBUyBEVSBQTEFURUFVKSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1jYXJkcy16b25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+8J+foiBWb3RyZSDDiXF1aXBlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0bGVmaWVsZC1jYXJkcyBwbGF5ZXItY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2VuZXJhdGVCYXR0bGVmaWVsZENhcmRzKHBsYXllclRlYW0sICdwbGF5ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBsaXF1ZXIgbGUgYmFja2dyb3VuZCBhbMOpYXRvaXJlIMOgIGwnYXLDqG5lXHJcbiAgICAgICAgICAgIGNvbnN0IGFyZW5hID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLWFyZW5hJyk7XHJcbiAgICAgICAgICAgIGlmIChhcmVuYSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQmFja2dyb3VuZCA9IHRoaXMuZ2V0UmFuZG9tQmF0dGxlZmllbGRCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg8J+OqCBCYWNrZ3JvdW5kIGFwcGxpcXXDqTogJHtyYW5kb21CYWNrZ3JvdW5kfWApO1xyXG4gICAgICAgICAgICAgICAgYXJlbmEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2ltYWdlcy8ke3JhbmRvbUJhY2tncm91bmR9JylgO1xyXG4gICAgICAgICAgICAgICAgYXJlbmEuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG4gICAgICAgICAgICAgICAgYXJlbmEuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBhcmVuYS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIHN5c3TDqG1lIDNEXHJcbiAgICAgICAgICAgIHRoaXMuY29tYmF0M0QgPSBuZXcgQ29tYmF0M0RTeXN0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q29tYmF0M0RTeXN0ZW0obWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZlcm1ldHVyZSBkdSBtb2RhbFxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1iYXR0bGVmaWVsZCcpO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQmF0dGxlZmllbGRNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVCYWNrZ3JvdW5kVmlkZW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tYmF0M0Q/LmNsZWFudXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHZXN0aW9ubmFpcmUgZCfDqWNoYXBwZW1lbnRcclxuICAgICAgICAgICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUJhdHRsZWZpZWxkTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZUJhY2tncm91bmRWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmF0M0Q/LmNsZWFudXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycmV1ciBsb3JzIGRlIGxcXCdhZmZpY2hhZ2UgZHUgY29tYmF0OicsIGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RhY2sgdHJhY2U6JywgZXJyb3Iuc3RhY2spO1xyXG4gICAgICAgICAgICAvLyBOZSBwYXMgYmxvcXVlciBsJ2ludGVyZmFjZSwganVzdGUgYWZmaWNoZXIgbCdlcnJldXJcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGR1IGNvbWJhdDogJyArIGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUJhdHRsZWZpZWxkQ2FyZHModGVhbSwgdGVhbVR5cGUpIHtcclxuICAgICAgICAvLyBVdGlsaXNlciBsZXMgdnJhaWVzIGRvbm7DqWVzIGRlcyBwZXJzb25uYWdlcyBkZSBsYSBCRERcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gdGVhbS5jaGFyYWN0ZXJzIHx8IHRlYW0gfHwgW107XHJcbiAgICAgICAgY29uc3QgdGVhbUNvbG9yID0gdGVhbVR5cGUgPT09ICdwbGF5ZXInID8gJyM0Q0FGNTAnIDogJyNGNDQzMzYnO1xyXG4gICAgICAgIGNvbnN0IHRlYW1Cb3JkZXIgPSB0ZWFtVHlwZSA9PT0gJ3BsYXllcicgPyAnIzM4OEUzQycgOiAnI0QzMkYyRic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnMubWFwKChjaGFyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBEZWJ1ZyBwb3VyIGNvbXByZW5kcmUgbGEgc3RydWN0dXJlIGRlcyBkb25uw6llc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn8J+UjSBQZXJzb25uYWdlOicsIGNoYXIubmFtZSwgJ0ltYWdlOicsIGNoYXIuaW1hZ2VQYXRoIHx8IGNoYXIuaW1hZ2UsICdSb2xlOicsIGNoYXIucm9sZSB8fCBjaGFyLmNsYXNzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFByaW9yaXTDqTogY2hhci5pbWFnZVBhdGggPiBjaGFyLmltYWdlID4gcGFyIGTDqWZhdXQgc2Vsb24gbGUgcsO0bGVcclxuICAgICAgICAgICAgbGV0IGltYWdlU3JjID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBmYWxsYmFja0ltYWdlID0gJyc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY2hhci5pbWFnZVBhdGggJiYgY2hhci5pbWFnZVBhdGggIT09ICdwbGFjZWhvbGRlci5wbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZXR0b3llciBsZSBjaGVtaW4gZCdpbWFnZSBzJ2lsIGNvbnRpZW50IGRlcyBjaGVtaW5zIGNvbXBsZXRzXHJcbiAgICAgICAgICAgICAgICBpbWFnZVNyYyA9IGNoYXIuaW1hZ2VQYXRoLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKS5yZXBsYWNlKCcvaW1hZ2VzL2NoYXJhY3RlcnMvJywgJycpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIuaW1hZ2UgJiYgY2hhci5pbWFnZSAhPT0gJ3BsYWNlaG9sZGVyLnBuZycpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5ldHRveWVyIGxlIGNoZW1pbiBkJ2ltYWdlIHMnaWwgY29udGllbnQgZGVzIGNoZW1pbnMgY29tcGxldHNcclxuICAgICAgICAgICAgICAgIGltYWdlU3JjID0gY2hhci5pbWFnZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykucmVwbGFjZSgnL2ltYWdlcy9jaGFyYWN0ZXJzLycsICcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltYWdlU3JjID0gdGhpcy5nZXRDaGFyYWN0ZXJJbWFnZUJ5Um9sZShjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZhbGxiYWNrSW1hZ2UgPSB0aGlzLmdldENoYXJhY3RlckltYWdlQnlSb2xlKGNoYXIucm9sZSB8fCBjaGFyLmNsYXNzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERlYnVnIGFtw6lsaW9yw6lcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCflrzvuI8gWyR7Y2hhci5uYW1lfV0gSW1hZ2UgZmluYWxlOiAke2ltYWdlU3JjfSwgRmFsbGJhY2s6ICR7ZmFsbGJhY2tJbWFnZX0sIE9yaWdpbmFsOiAke2NoYXIuaW1hZ2VQYXRoIHx8IGNoYXIuaW1hZ2V9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTw6ljdXJpc2VyIGxlcyBkb25uw6llcyBKU09OIHBvdXIgw6l2aXRlciBsJ2VycmV1ciBkZSBwYXJzaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHNhZmVDaGFyRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNoYXIubmFtZSB8fCAnSW5jb25udScsXHJcbiAgICAgICAgICAgICAgICByb2xlOiBjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyB8fCAnd2FycmlvcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VTcmMsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogY2hhci5sZXZlbCB8fCAxLFxyXG4gICAgICAgICAgICAgICAgaHA6IGNoYXIuaHAgfHwgMTAwLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrOiBjaGFyLmF0dGFjayB8fCA1MFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRsZWZpZWxkLWNhcmQgJHt0ZWFtVHlwZX0tY2FyZFwiIGRhdGEtY2hhcmFjdGVyLWlkPVwiJHtpbmRleH1cIiBkYXRhLXRlYW09XCIke3RlYW1UeXBlfVwiIGRhdGEtY2hhcmFjdGVyPScke0pTT04uc3RyaW5naWZ5KHNhZmVDaGFyRGF0YSkucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKX0nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jaGFyYWN0ZXJzLyR7aW1hZ2VTcmN9XCIgYWx0PVwiJHtjaGFyLm5hbWV9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lcnJvcj1cInRoaXMuc3JjPScvaW1hZ2VzL2NoYXJhY3RlcnMvJHtmYWxsYmFja0ltYWdlfSc7IGNvbnNvbGUud2Fybign8J+WvO+4jyBJbWFnZSBub24gdHJvdXbDqWU6ICR7aW1hZ2VTcmN9LCB1dGlsaXNhdGlvbiBmYWxsYmFjazogJHtmYWxsYmFja0ltYWdlfScpO1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1uYW1lXCI+JHtjaGFyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1yb2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLmdldFJvbGVJY29uKGNoYXIucm9sZSB8fCBjaGFyLmNsYXNzKX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRSb2xlTmFtZShjaGFyLnJvbGUgfHwgY2hhci5jbGFzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSkuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hhcmFjdGVySW1hZ2VCeVJvbGUocm9sZSkge1xyXG4gICAgICAgIGNvbnN0IHJvbGVJbWFnZXMgPSB7XHJcbiAgICAgICAgICAgICd0YW5rJzogJ3BhbGFkaW4ucG5nJyxcclxuICAgICAgICAgICAgJ21hZ2UnOiAnbWFnZS5wbmcnLCBcclxuICAgICAgICAgICAgJ2FyY2hlcic6ICdhcmNoZXIucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2Fzc2luJzogJ2Fzc2Fzc2luLnBuZycsXHJcbiAgICAgICAgICAgICdwcmllc3QnOiAncHJpZXN0LnBuZycsXHJcbiAgICAgICAgICAgICd3YXJyaW9yJzogJ3dhcnJpb3IucG5nJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJvbGVJbWFnZXNbcm9sZV0gfHwgJ3dhcnJpb3IucG5nJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21CYXR0bGVmaWVsZEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgY29uc3QgbWVkaWV2YWxCZ3MgPSBbXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL2NpbWV0acOocmUucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4TWVkaWV2YWwvY291cnMgZHUgY2hhdGVhdS5wbmcnLCBcclxuICAgICAgICAgICAgJ3BsYXRlYXV4TWVkaWV2YWwvcGxhY2UgZHUgdmlsbGFnZS5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBkeXN0b0JncyA9IFtcclxuICAgICAgICAgICAgJ3BsYXRlYXV4RHlzdG8vY2hhbXAgZGUgYmF0YWlsbGUgZHlzdG8ucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4RHlzdG8vY291cnMgbW9kZXJuZS5wbmcnLFxyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9wbGFjZSB2aWxsYWdlIG1vZGVybmUucG5nJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsQmdzID0gWy4uLm1lZGlldmFsQmdzLCAuLi5keXN0b0Jnc107XHJcbiAgICAgICAgcmV0dXJuIGFsbEJnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxCZ3MubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2FhbWVsb3R0UGhyYXNlKHNpdHVhdGlvbiA9ICdnZW5lcmFsJykge1xyXG4gICAgICAgIGNvbnN0IHBocmFzZXMgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBbXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgVm9pbMOgIHF1aSB2YSDDqnRyZSBpbnTDqXJlc3NhbnQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJCb24sIG9uIHZhIHZvaXIgY2UgcXUnb24gdmEgdm9pciAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IHBhcnRpIG1vbiBraWtpICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxvcnMsIG9uIGNvbW1lbmNlIHF1YW5kIHZvdXMgdm91bGV6ICFcIixcclxuICAgICAgICAgICAgICAgIFwiw4dhIHZhIMOqdHJlIGR1IHNwb3J0ICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgbGUgbW9tZW50IGRlIHbDqXJpdMOpICFcIixcclxuICAgICAgICAgICAgICAgIFwiQWxsZXoteSwgc3VycHJlbmV6LW1vaSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlF1ZSBsZSBtZWlsbGV1ciBnYWduZS4uLiBlbmZpbiBqJ2VzcMOocmUgcXVlIGMnZXN0IHZvdXMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBwYXJ0aSBwb3VyIGxhIGJhc3RvbiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJvbiwgbW9pIGplIGRpcyA6IHF1J2VzdC1jZSBxdSdvbiBhdHRlbmQgP1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGF0dGFjazogW1xyXG4gICAgICAgICAgICAgICAgXCLDh2EgYydlc3QgZHUgcmVudHJlLWRlZGFucyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFoLCBsYSB2YWNoZSAhIElsIHkgdmEgZnJhbmNvICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3Qgw6dhICEgVGFwZXogc3VyIHRvdXQgY2UgcXVpIGJvdWdlICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuIGRpcyBkb25jLCBpbCBzZSBnw6puZSBwYXMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbGxlei15ICEgTWFpcyBhbGxlei15IGRvbmMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyBsw6AsIGNoYXBlYXUgISDDh2EgYydlc3QgZGUgbCdhdHRhcXVlICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgYmVhdSAhIEMnZXN0IGR1IGdyYW5kIGFydCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIsOHYSBjJ2VzdCBlbnZvecOpICEgU2FucyBmYWlyZSBkZSBkw6l0YWlsICFcIixcclxuICAgICAgICAgICAgICAgIFwiT2ggbMOgIGzDoCAhIElsIGwnYSBwYXMgcmF0w6kgY2VsdWktbMOgICFcIixcclxuICAgICAgICAgICAgICAgIFwiVm9pbMOgIGNlIHF1ZSBqJ2FwcGVsbGUgZGUgbCdlZmZpY2FjaXTDqSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IHBhcyBkdSBjaW7DqW1hIMOnYSAhIEMnZXN0IGR1IGNvbmNyZXQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJJbCBhIHBhcyBmYWl0IGRhbnMgbGEgZGVudGVsbGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCLDh2EgYydlc3QgZHUgdHJhdmFpbCBkZSBwcm9mZXNzaW9ubmVsICFcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWZlbnNlOiBbXHJcbiAgICAgICAgICAgICAgICBcIkVoICEgSWwgYSBwYXLDqSAhIENvbW1lIHVuIGNoZWYgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyBsw6AsIGJyYXZvICEgQmVsbGUgcGFyYWRlICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3Qgw6dhICEgUmVzdGV6IHN1ciB2b3MgZ2FyZGVzICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuLCBpbCBsJ2EgdnVlIHZlbmlyIGNlbGxlLWzDoCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGRlIGxhIGTDqWZlbnNlIMOnYSAhIER1IGLDqXRvbiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgSWwgcyd5IGNvbm5hw650IGVuIHByb3RlY3Rpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgdW4gYm91Y2xpZXIgcXVpIHNlcnQgw6AgcXVlbHF1ZSBjaG9zZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGR1IHNvbGlkZSAhIMOHYSB0aWVudCBsYSByb3V0ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJlbGxlIGFudGljaXBhdGlvbiAhIFRyw6hzIGpvbGkgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCDDp2EgbGEgdnJhaWUgZMOpZmVuc2UgISBEdSBjb3N0YXVkICFcIixcclxuICAgICAgICAgICAgICAgIFwiSWwgdGllbnQgbGUgY2hvYyAhIFJlc3BlY3QgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCLDh2EgYydlc3QgZGUgbGEgcsOpc2lzdGFuY2UgISBJbXByZXNzaW9ubmFudCAhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbWFnaWM6IFtcclxuICAgICAgICAgICAgICAgIFwiT2ggISBEZSBsYSBtYWdpZSAhIMOHYSBjJ2VzdCBkdSBzcGVjdGFjbGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyBsw6AgISDDh2EgYydlc3QgZGUgbCdhcnRpc2FuYXQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJFaCBiZW4gISBJbCBzb3J0IGxlIGdyYW5kIGpldSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGRlIGxhIGJlbGxlIG91dnJhZ2Ugw6dhICFcIixcclxuICAgICAgICAgICAgICAgIFwiVm9pbMOgIGNlIHF1ZSBqJ2FwcGVsbGUgdW4gdG91ciBkZSBtYcOudHJlICFcIixcclxuICAgICAgICAgICAgICAgIFwiw4dhIGMnZXN0IGR1IG5pdmVhdSAhIER1IGdyYW5kIGFydCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIk9oIGzDoCBsw6AgISBJbCBjb25uYcOudCBzb24gYWZmYWlyZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGJlYXUgISBDJ2VzdCBsdW1pbmV1eCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFsb3JzIMOnYSAhIEMnZXN0IGRlIGxhIHRlY2huaXF1ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoIGJlbiBkaXMgZG9uYyAhIElsIGEgZGVzIHJlc3NvdXJjZXMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCDDp2EgbGVzIHZyYWlzIHNvcnRpbMOoZ2VzICFcIixcclxuICAgICAgICAgICAgICAgIFwiSWwgbWHDrnRyaXNlIHNvbiBzdWpldCAhIENoYXBlYXUgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgY2UgcXUnb24gYXBwZWxsZSBhdm9pciBkdSBtw6l0aWVyICFcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBoZWFsOiBbXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgVW4gcGV0aXQgY291cCBkZSByw6lwYXJhdGlvbiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSAhIE9uIHNvaWduZSBzZXMgcGV0aXRzIGJvYm9zICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggISBJbCBjb25uYcOudCBsZXMgcHJlbWllcnMgc2Vjb3VycyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZvaWzDoCBxdWkgdmEgZmFpcmUgZHUgYmllbiAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGRlIGxhIGJvbm5lIG3DqWRlY2luZSDDp2EgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCAhIElsIHNhaXQgeSBmYWlyZSBhdmVjIGxlcyBwb3Rpb25zICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgZHUgdHJhdmFpbCBkZSBndcOpcmlzc2V1ciDDp2EgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJFaCBiZW4gISBJbCBhIGRlIGxhIHJlc3NvdXJjZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZvaWzDoCBxdWkgcmVkb25uZSBsYSBmb3JtZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSBsZSB2cmFpIG3DqXRpZXIgZGUgc29pZ25ldXIgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBaCAhIE9uIG4nZXN0IGphbWFpcyBtaWV1eCBzb2lnbsOpIHF1ZSBwYXIgc29pLW3Dqm1lICFcIixcclxuICAgICAgICAgICAgICAgIFwiQmVsbGUgaW50ZXJ2ZW50aW9uICEgQydlc3QgZHUgcHJvZmVzc2lvbm5lbCAhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdmljdG9yeTogW1xyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyBsw6AgISBCcmF2byAhIEMnZXN0IGR1IGJlYXUgYm91bG90ICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuIHZvaWzDoCAhIEMnZXN0IMOnYSBxdSdvbiBhcHBlbGxlIHVuZSB2aWN0b2lyZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgQydlc3QgZmluaSAhIEV0IGJpZW4gam91w6kgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJWb2lsw6AgISBNaXNzaW9uIGFjY29tcGxpZSAhIER1IGdyYW5kIGFydCAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IMOnYSAhIE9uIGEgZ2FnbsOpICEgQ29tbWUgZGVzIGNoZWZzICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggYmVuIGRpcyBkb25jICEgw4dhIGMnZXN0IGRlIGxhIHBlcmZvcm1hbmNlICFcIixcclxuICAgICAgICAgICAgICAgIFwiQnJhdm8gISBDJ2VzdCBkdSB0cmF2YWlsIGRlIHByb2Zlc3Npb25uZWwgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJBbG9ycyBsw6AsIGNoYXBlYXUgISBDJ2VzdCBtw6lyaXTDqSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIlZvaWzDoCBjZSBxdWUgaidhcHBlbGxlIHVuZSBiZWxsZSB2aWN0b2lyZSAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkMnZXN0IGZpbmkgISBFdCBjJ2VzdCBiaWVuIGZpbmkgISBCcmF2byAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkFoICEgQydlc3Qgw6dhIHF1J29uIHZvdWxhaXQgdm9pciAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIk1pc3Npb24gYWNjb21wbGllICEgRHUgYmVhdSB0cmF2YWlsICFcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWZlYXQ6IFtcclxuICAgICAgICAgICAgICAgIFwiQWggISBFaCBiZW4uLi4gYydlc3QgcGFzIHBhc3PDqSBsb2luICFcIixcclxuICAgICAgICAgICAgICAgIFwiQm9uLCBvbiBmZXJhIG1pZXV4IGxhIHByb2NoYWluZSBmb2lzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3QgcGFzIGdyYXZlICEgTCdpbXBvcnRhbnQgYydlc3QgZGUgcGFydGljaXBlciAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVoICEgT24gcGV1dCBwYXMgZ2FnbmVyIMOgIHRvdXMgbGVzIGNvdXBzICFcIixcclxuICAgICAgICAgICAgICAgIFwiQydlc3Qgw6dhICEgT24gYXBwcmVuZCBkZSBzZXMgZXJyZXVycyAhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJvbiwgb24gcmVmZXJhIMOnYSBwbHVzIHRhcmQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBwYXMgZHJhbWF0aXF1ZSAhIE9uIHMnZW4gcmVtZXR0cmEgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJFaCBiZW4gISDDh2EgYXJyaXZlIGF1eCBtZWlsbGV1cnMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBjb21tZSDDp2EgISBPbiBnYWduZSBwYXMgdG91am91cnMgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJCb24sIG9uIGRpcmEgcXVlIGMnw6l0YWl0IHVuIGVudHJhw65uZW1lbnQgIVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDJ2VzdCBwYXMgbGEgZmluIGR1IG1vbmRlICEgT24gcmVjb21tZW5jZXJhICFcIixcclxuICAgICAgICAgICAgICAgIFwiRWggISBMJ2FkdmVyc2FpcmUgw6l0YWl0IGNvcmlhY2UgIVwiXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNpdHVhdGlvblBocmFzZXMgPSBwaHJhc2VzW3NpdHVhdGlvbl0gfHwgcGhyYXNlcy5nZW5lcmFsIHx8IHBocmFzZXMuc3RhcnQ7XHJcbiAgICAgICAgcmV0dXJuIHNpdHVhdGlvblBocmFzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l0dWF0aW9uUGhyYXNlcy5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93S2FhbWVsb3R0Q29tbWVudChzaXR1YXRpb24gPSAnZ2VuZXJhbCcpIHtcclxuICAgICAgICBjb25zdCBwaHJhc2UgPSB0aGlzLmdldEthYW1lbG90dFBocmFzZShzaXR1YXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGd1aWRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlkZS10ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudGFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1ndWlkZS1jb21tZW50YXJ5Jyk7XHJcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWxkLWd1aWRlLWF2YXRhciBpbWcnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZ3VpZGVUZXh0KSB7XHJcbiAgICAgICAgICAgIGd1aWRlVGV4dC50ZXh0Q29udGVudCA9IHBocmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNvbW1lbnRhcnkpIHtcclxuICAgICAgICAgICAgY29tbWVudGFyeS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudGFyeS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXZhdGFyKSB7XHJcbiAgICAgICAgICAgIGF2YXRhci5zcmMgPSB0aGlzLmdldE5leHRHdWlsZEltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5ej77iPIEd1aWxkIEd1aWRlIEthYW1lbG90dDonLCBwaHJhc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRCYXR0bGVmaWVsZENvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgbm91dmVhdSBzeXN0w6htZSBkZSBjb21iYXQgM0RcclxuICAgICAgICB0aGlzLmluaXRDb21iYXQzRFN5c3RlbShtYXRjaERhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldHVwIGRlcyBjb250csO0bGVzIGV4aXN0YW50c1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWNsb3NlLWJ0bicpOyAgXHJcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtY29tYmF0LWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHNwZWVkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVlZC1idG4nKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTcGVlZCA9IDI7IC8vIFZpdGVzc2UgcGFyIGTDqWZhdXQgeDJcclxuICAgICAgICBcclxuICAgICAgICAvLyBGYWlyZSBsZSBtb2RhbCBwbGVpbiDDqWNyYW5cclxuICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUud2lkdGggPSAnMTAwdncnO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JhdHRsZWZpZWxkLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGb25jdGlvbiBkZSBmZXJtZXR1cmVcclxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lQmFja2dyb3VuZFZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JhdHRsZWZpZWxkLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJhdDNEPy5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBhdmVjIEVzY2FwZVxyXG4gICAgICAgIGNvbnN0IGVzY2FwZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb250csO0bGVzIGRlIHZpdGVzc2VcclxuICAgICAgICBzcGVlZEJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcGVlZEJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNwZWVkID0gcGFyc2VGbG9hdChidG4uZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxhIHZpdGVzc2UgZHUgc3lzdMOobWUgM0RcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbWJhdDNEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21iYXQzRC5zcGVlZE11bHRpcGxpZXIgPSBjdXJyZW50U3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn46uIFZpdGVzc2UgY2hhbmfDqWU6JywgY3VycmVudFNwZWVkICsgJ3gnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PSBTWVNUw4hNRSBERSBDT01CQVQgM0QgPT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGluaXRDb21iYXQzRFN5c3RlbShtYXRjaERhdGEpIHtcclxuICAgICAgICAvLyBSw6ljdXDDqXJlciBsZXMgw6lxdWlwZXMgYXZlYyBkaWZmw6lyZW50cyBmb3JtYXRzIHBvc3NpYmxlc1xyXG4gICAgICAgIGNvbnN0IHRlYW1BID0gbWF0Y2hEYXRhLnRlYW1BIHx8IG1hdGNoRGF0YS50ZWFtX2EgfHwgbWF0Y2hEYXRhLnBsYXllclRlYW07XHJcbiAgICAgICAgY29uc3QgdGVhbUIgPSBtYXRjaERhdGEudGVhbUIgfHwgbWF0Y2hEYXRhLnRlYW1fYiB8fCBtYXRjaERhdGEuZW5lbXlUZWFtO1xyXG4gICAgICAgIC8vIFV0aWxpc2VyIGwndXRpbGlzYXRldXIgY29ubmVjdMOpIGRlcHVpcyB3aW5kb3cudXNlckluZm8gb3UgbGVzIGRvbm7DqWVzIGR1IG1hdGNoXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBtYXRjaERhdGEuY3VycmVudFVzZXIgfHwgd2luZG93LnVzZXJJbmZvPy51c2VybmFtZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlcm5hbWVdJyk/LmRhdGFzZXQudXNlcm5hbWUgfHwgJ2JhbWJhbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gREVCVUcgaW5pdENvbWJhdDNEOicsIHtcclxuICAgICAgICAgICAgdGVhbUE6IHRlYW1BLFxyXG4gICAgICAgICAgICB0ZWFtQjogdGVhbUIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlcixcclxuICAgICAgICAgICAgbWF0Y2hEYXRhS2V5czogT2JqZWN0LmtleXMobWF0Y2hEYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb25zIGRlIHPDqWN1cml0w6lcclxuICAgICAgICBpZiAoIXRlYW1BIHx8ICF0ZWFtQikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgw4lxdWlwZXMgbWFucXVhbnRlcyBkYW5zIGluaXRDb21iYXQzRDonLCB7IHRlYW1BLCB0ZWFtQiB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBEw6l0ZXJtaW5lciBxdWVsbGUgw6lxdWlwZSBhcHBhcnRpZW50IGF1IGpvdWV1ciBhY3R1ZWxcclxuICAgICAgICBsZXQgcGxheWVyVGVhbSwgZW5lbXlUZWFtO1xyXG4gICAgICAgIGlmICh0ZWFtQSAmJiB0ZWFtQS5wbGF5ZXIgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHBsYXllclRlYW0gPSB0ZWFtQTtcclxuICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZWFtQiAmJiB0ZWFtQi5wbGF5ZXIgPT09IGN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgICAgIHBsYXllclRlYW0gPSB0ZWFtQjtcclxuICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFyIGTDqWZhdXQsIGFzc2lnbmVyIHRlYW1BIGNvbW1lIMOpcXVpcGUgZHUgam91ZXVyXHJcbiAgICAgICAgICAgIHBsYXllclRlYW0gPSB0ZWFtQTtcclxuICAgICAgICAgICAgZW5lbXlUZWFtID0gdGVhbUI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn46vIMOJcXVpcGVzIGFzc2lnbsOpZXM6JywgeyBcclxuICAgICAgICAgICAgcGxheWVyVGVhbTogcGxheWVyVGVhbT8ubmFtZSwgXHJcbiAgICAgICAgICAgIGVuZW15VGVhbTogZW5lbXlUZWFtPy5uYW1lLFxyXG4gICAgICAgICAgICBwbGF5ZXJDaGFyYWN0ZXJzOiBwbGF5ZXJUZWFtPy5jaGFyYWN0ZXJzPy5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgZW5lbXlDaGFyYWN0ZXJzOiBlbmVteVRlYW0/LmNoYXJhY3RlcnM/Lmxlbmd0aCB8fCAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXR0ZW5kcmUgcXVlIGxlIG1vZGFsIHNvaXQgbW9udMOpIGRhbnMgbGUgRE9NXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUZWFtICYmIGVuZW15VGVhbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cENhcmRUbzNEVHJhbnNpdGlvbihwbGF5ZXJUZWFtLCBlbmVteVRlYW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cEd1aWxkR3VpZGVGb3JDb21iYXQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBJbXBvc3NpYmxlIGRlIGNvbmZpZ3VyZXIgbGUgM0QgLSDDqXF1aXBlcyBpbnZhbGlkZXMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldHVwQ2FyZFRvM0RUcmFuc2l0aW9uKHBsYXllclRlYW0sIGVuZW15VGVhbSkge1xyXG4gICAgICAgIGNvbnN0IGNvbWJhdFpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tYmF0LXpvbmUtM2QnKTtcclxuICAgICAgICBpZiAoIWNvbWJhdFpvbmUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIFpvbmUgZGUgY29tYmF0IDNEIG5vbiB0cm91dsOpZSAhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgZGUgc8OpY3VyaXTDqVxyXG4gICAgICAgIGlmICghcGxheWVyVGVhbSB8fCAhZW5lbXlUZWFtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCDDiXF1aXBlcyBtYW5xdWFudGVzIHBvdXIgbGEgdHJhbnNpdGlvbiAzRDonLCB7IHBsYXllclRlYW0sIGVuZW15VGVhbSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDcsOpZXIgbGVzIHBlcnNvbm5hZ2VzIDNEIHBvdXIgbCfDqXF1aXBlIGR1IGpvdWV1clxyXG4gICAgICAgIGNvbnN0IHBsYXllckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1jYXJkJyk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ2hhcmFjdGVycyA9IHBsYXllclRlYW0uY2hhcmFjdGVycyB8fCBbXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+OriBDcsOpYXRpb24gZGVzIHBlcnNvbm5hZ2VzIGpvdWV1cjonLCBwbGF5ZXJDaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGxheWVyQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllckNoYXJhY3RlcnNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXIzRCA9IHRoaXMuY29tYmF0M0QuY3JlYXRlM0RDaGFyYWN0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2hhcmFjdGVyc1tpbmRleF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGF5ZXInLCBcclxuICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIHNvcnRpZSBkZSBsYSBjYXJ0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlQ2hhcmFjdGVyRnJvbUNhcmQoY2FyZCwgY2hhcmFjdGVyM0QsICdwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbWJhdFpvbmUuYXBwZW5kQ2hpbGQoY2hhcmFjdGVyM0QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxlcyBwZXJzb25uYWdlcyAzRCBwb3VyIGwnw6lxdWlwZSBhZHZlcnNlXHJcbiAgICAgICAgY29uc3QgZW5lbXlDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jYXJkJyk7XHJcbiAgICAgICAgY29uc3QgZW5lbXlDaGFyYWN0ZXJzID0gZW5lbXlUZWFtLmNoYXJhY3RlcnMgfHwgW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KalO+4jyBDcsOpYXRpb24gZGVzIHBlcnNvbm5hZ2VzIGVubmVtaXM6JywgZW5lbXlDaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZW5lbXlDYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlDaGFyYWN0ZXJzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyM0QgPSB0aGlzLmNvbWJhdDNELmNyZWF0ZTNEQ2hhcmFjdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Q2hhcmFjdGVyc1tpbmRleF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICdlbmVteScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgc29ydGllIGRlIGxhIGNhcnRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVDaGFyYWN0ZXJGcm9tQ2FyZChjYXJkLCBjaGFyYWN0ZXIzRCwgJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICBjb21iYXRab25lLmFwcGVuZENoaWxkKGNoYXJhY3RlcjNEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqW1hcnJlciBsZSBjb21iYXQgYXByw6hzIGxlcyBhbmltYXRpb25zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFcGljQ29tYmF0KCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFuaW1hdGVDaGFyYWN0ZXJGcm9tQ2FyZChjYXJkLCBjaGFyYWN0ZXIzRCwgdGVhbVR5cGUpIHtcclxuICAgICAgICBjb25zdCBjYXJkUmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9zaXRpb25uZXIgbGUgcGVyc29ubmFnZSAzRCBzdXIgbGEgY2FydGUgaW5pdGlhbGVtZW50XHJcbiAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLmxlZnQgPSAoY2FyZFJlY3QubGVmdCArIGNhcmRSZWN0LndpZHRoIC8gMiAtIDQwKSArICdweCc7XHJcbiAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUudG9wID0gKGNhcmRSZWN0LnRvcCArIGNhcmRSZWN0LmhlaWdodCAvIDIgLSA2MCkgKyAncHgnO1xyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjMpIHRyYW5zbGF0ZVkoMCknO1xyXG4gICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUuekluZGV4ID0gJzEwMDAnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkJ2FwcGFyaXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuNikgdHJhbnNsYXRlWSgtMzBweCknO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGRlIHNvcnRpZSB2ZXJzIGxlIGJhdHRsZWZpZWxkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFV0aWxpc2VyIGxlIHN5c3TDqG1lIGRlIHBvc2l0aW9ubmVtZW50IDNEXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQoY2hhcmFjdGVyM0QuZGF0YXNldC5wb3NpdGlvbikgfHwgMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCflKcgQU5JTUFUSU9OOiBkYXRhc2V0LnBvc2l0aW9uPSR7Y2hhcmFjdGVyM0QuZGF0YXNldC5wb3NpdGlvbn0sIHBhcnNlZD0ke3Bvc2l0aW9ufSwgdGVhbVR5cGU9JHt0ZWFtVHlwZX1gKTtcclxuICAgICAgICAgICAgdGhpcy5jb21iYXQzRC5wb3NpdGlvbkNoYXJhY3RlcihjaGFyYWN0ZXIzRCwgcG9zaXRpb24sIHRlYW1UeXBlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjNELnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgY2hhcmFjdGVyM0Quc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpIHRyYW5zbGF0ZVkoMCknO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIzRC5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVmZmV0IGQnZW50csOpZSBzcGVjdGFjdWxhaXJlXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcjNELmNsYXNzTGlzdC5hZGQoJ2NoYXJhY3Rlci1lbnRyYW5jZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcjNELmNsYXNzTGlzdC5yZW1vdmUoJ2NoYXJhY3Rlci1lbnRyYW5jZScpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgMTIwMCArIChNYXRoLnJhbmRvbSgpICogNjAwKSk7IC8vIETDqWxhaSBhbMOpYXRvaXJlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXJ0RXBpY0NvbWJhdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+UpSBEw6ltYXJyYWdlIGR1IGNvbWJhdCDDqXBpcXVlICEnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGFuZ2VyIGxlIHRleHRlIGR1IGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy51cGRhdGVHdWlsZEd1aWRlVGV4dChcIkxlIGNvbWJhdCBmYWl0IHJhZ2UgISBSZWdhcmRleiBjZXMgbW91dmVtZW50cyDDqXBpcXVlcyAhXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbmNlciBsZXMgYWN0aW9ucyBkZSBjb21iYXRcclxuICAgICAgICB0aGlzLmV4ZWN1dGVFcGljQ29tYmF0U2VxdWVuY2UoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhlY3V0ZUVwaWNDb21iYXRTZXF1ZW5jZSgpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDaGFyYWN0ZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWNoYXJhY3Rlci0zZCcpKTtcclxuICAgICAgICBjb25zdCBlbmVteUNoYXJhY3RlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jaGFyYWN0ZXItM2QnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBsYXllckNoYXJhY3RlcnMubGVuZ3RoID09PSAwIHx8IGVuZW15Q2hhcmFjdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+KaoO+4jyBQYXMgZGUgcGVyc29ubmFnZXMgdHJvdXbDqXMgcG91ciBsZSBjb21iYXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgYWN0aW9uSW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGVOZXh0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uSW5kZXggPj0gMTIpIHsgLy8gMTIgYWN0aW9ucyBkZSBjb21iYXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoRXBpY0NvbWJhdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaG9pc2lyIHVuIGF0dGFxdWFudCBldCB1bmUgY2libGUgYWzDqWF0b2lyZW1lbnRcclxuICAgICAgICAgICAgY29uc3QgYWxsQ2hhcmFjdGVycyA9IFsuLi5wbGF5ZXJDaGFyYWN0ZXJzLCAuLi5lbmVteUNoYXJhY3RlcnNdO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlciA9IGFsbENoYXJhY3RlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQ2hhcmFjdGVycy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENob2lzaXIgdW5lIGNpYmxlIGRlIGwnw6lxdWlwZSBhZHZlcnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGlzUGxheWVyQXR0YWNrZXIgPSBhdHRhY2tlci5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1jaGFyYWN0ZXItM2QnKTtcclxuICAgICAgICAgICAgY29uc3QgcG90ZW50aWFsVGFyZ2V0cyA9IGlzUGxheWVyQXR0YWNrZXIgPyBlbmVteUNoYXJhY3RlcnMgOiBwbGF5ZXJDaGFyYWN0ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBwb3RlbnRpYWxUYXJnZXRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbFRhcmdldHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYXR0YWNrZXIgJiYgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEw6l0ZXJtaW5lciBsZSB0eXBlIGQnYWN0aW9uIHNlbG9uIGxlIHLDtGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tlclJvbGUgPSBhdHRhY2tlci5kYXRhc2V0LnJvbGUgfHwgJ3RhbmsnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uVHlwZSA9IHRoaXMuZ2V0QWN0aW9uVHlwZUJ5Um9sZShhdHRhY2tlclJvbGUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFeMOpY3V0ZXIgbCdhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIHRoaXMuY29tYmF0M0QuYW5pbWF0ZUNoYXJhY3RlckFjdGlvbihhdHRhY2tlciwgdGFyZ2V0LCBhY3Rpb25UeXBlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdhZmZpY2hhZ2UgZCdhY3Rpb24gY2VudHJhbGVcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudHJhbEFjdGlvbkRpc3BsYXkoYXR0YWNrZXIsIHRhcmdldCwgYWN0aW9uVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFjdGlvbkluZGV4Kys7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBQcm9ncmFtbWVyIGxhIHByb2NoYWluZSBhY3Rpb24gc2Vsb24gbGEgdml0ZXNzZVxyXG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IDI1MDAgLyAodGhpcy5jb21iYXRTcGVlZCB8fCAyKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChleGVjdXRlTmV4dEFjdGlvbiwgZGVsYXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhlY3V0ZU5leHRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0aW9uVHlwZUJ5Um9sZShyb2xlKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGFuazogWydwaHlzaWNhbF9hdHRhY2snLCAnZGVmZW5kJ10sXHJcbiAgICAgICAgICAgIGRwczogWydwaHlzaWNhbF9hdHRhY2snLCAncGh5c2ljYWxfYXR0YWNrJ10sIC8vIFBsdXMgZCdhdHRhcXVlc1xyXG4gICAgICAgICAgICBzdXBwb3J0OiBbJ2hlYWwnLCAnbWFnaWNfc3BlbGwnXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgcm9sZUFjdGlvbnMgPSBhY3Rpb25zW3JvbGVdIHx8IGFjdGlvbnMudGFuaztcclxuICAgICAgICByZXR1cm4gcm9sZUFjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9sZUFjdGlvbnMubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUNlbnRyYWxBY3Rpb25EaXNwbGF5KGF0dGFja2VyLCB0YXJnZXQsIGFjdGlvblR5cGUpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbi1kaXNwbGF5Jyk7XHJcbiAgICAgICAgaWYgKCFhY3Rpb25EaXNwbGF5KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYXR0YWNrZXJOYW1lID0gYXR0YWNrZXIuZGF0YXNldC5uYW1lIHx8ICdDb21iYXR0YW50JztcclxuICAgICAgICBjb25zdCB0YXJnZXROYW1lID0gdGFyZ2V0LmRhdGFzZXQubmFtZSB8fCAnQ2libGUnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjdGlvblRleHQgPSB0aGlzLmdldEFjdGlvblRleHQoYWN0aW9uVHlwZSwgYXR0YWNrZXJOYW1lLCB0YXJnZXROYW1lKTtcclxuICAgICAgICBjb25zdCBhY3Rpb25JY29uID0gdGhpcy5nZXRBY3Rpb25JY29uKGFjdGlvblR5cGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFjdGlvbkRpc3BsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWFubm91bmNlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1pY29uXCI+JHthY3Rpb25JY29ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi10ZXh0XCI+JHthY3Rpb25UZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFjdGlvbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB9LCAxODAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0QWN0aW9uVGV4dChhY3Rpb25UeXBlLCBhdHRhY2tlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdGV4dHMgPSB7XHJcbiAgICAgICAgICAgIHBoeXNpY2FsX2F0dGFjazogYCR7YXR0YWNrZXJ9IGF0dGFxdWUgJHt0YXJnZXR9ICFgLFxyXG4gICAgICAgICAgICBtYWdpY19zcGVsbDogYCR7YXR0YWNrZXJ9IGxhbmNlIHVuIHNvcnQgc3VyICR7dGFyZ2V0fSAhYCxcclxuICAgICAgICAgICAgaGVhbDogYCR7YXR0YWNrZXJ9IHNvaWduZSAke3RhcmdldH0gIWAsXHJcbiAgICAgICAgICAgIGRlZmVuZDogYCR7YXR0YWNrZXJ9IHNlIGTDqWZlbmQgIWBcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0ZXh0c1thY3Rpb25UeXBlXSB8fCBgJHthdHRhY2tlcn0gYWdpdCBzdXIgJHt0YXJnZXR9ICFgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRBY3Rpb25JY29uKGFjdGlvblR5cGUpIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgcGh5c2ljYWxfYXR0YWNrOiAn4pqU77iPJyxcclxuICAgICAgICAgICAgbWFnaWNfc3BlbGw6ICfimqEnLFxyXG4gICAgICAgICAgICBoZWFsOiAn8J+SmicsXHJcbiAgICAgICAgICAgIGRlZmVuZDogJ/Cfm6HvuI8nXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gaWNvbnNbYWN0aW9uVHlwZV0gfHwgJ+KalO+4jyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmlzaEVwaWNDb21iYXQoKSB7XHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgbGUgdmFpbnF1ZXVyIGFsw6lhdG9pcmVtZW50IHBvdXIgbGEgZMOpbW9cclxuICAgICAgICBjb25zdCBpc1BsYXllclZpY3RvcnkgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd0NvbWJhdFJlc3VsdChpc1BsYXllclZpY3RvcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93Q29tYmF0UmVzdWx0KGlzVmljdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWRpc3BsYXknKTtcclxuICAgICAgICBpZiAoIWFjdGlvbkRpc3BsYXkpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXN1bHRIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LXJlc3VsdCAke2lzVmljdG9yeSA/ICd2aWN0b3J5JyA6ICdkZWZlYXQnfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pY29uXCI+JHtpc1ZpY3RvcnkgPyAn8J+PhicgOiAn8J+SgCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXRpdGxlXCI+JHtpc1ZpY3RvcnkgPyAnVklDVE9JUkUhJyA6ICdEw4lGQUlURSd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LXN1YnRpdGxlXCI+JHtpc1ZpY3RvcnkgPyAnVm9zIGNoYW1waW9ucyB0cmlvbXBoZW50ICEnIDogJ1ZvcyBjaGFtcGlvbnMgc29udCB0b21iw6lzLi4uJ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBhY3Rpb25EaXNwbGF5LmlubmVySFRNTCA9IHJlc3VsdEhUTUw7XHJcbiAgICAgICAgYWN0aW9uRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdzaG93JywgJ2ZpbmFsLXJlc3VsdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy51cGRhdGVHdWlsZEd1aWRlVGV4dChpc1ZpY3RvcnkgPyBcclxuICAgICAgICAgICAgXCJNYWduaWZpcXVlIHZpY3RvaXJlICEgVm9zIHN0cmF0w6lnaWVzIHBvcnRlbnQgbGV1cnMgZnJ1aXRzICFcIiA6IFxyXG4gICAgICAgICAgICBcIlVuZSBkw6lmYWl0ZSBob25vcmFibGUuLi4gQW5hbHlzZXogdm9zIGVycmV1cnMgcG91ciB2b3VzIGFtw6lsaW9yZXIgIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsJ292ZXJsYXkgZGUgdmljdG9pcmUgb3UgZMOpZmFpdGUgKFNBTlMgQVVUTy1GRVJNRVRVUkUpXHJcbiAgICAgICAgaWYgKGlzVmljdG9yeSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCYXR0bGVmaWVsZFZpY3RvcnkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCYXR0bGVmaWVsZERlZmVhdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0dXBHdWlsZEd1aWRlRm9yQ29tYmF0KCkge1xyXG4gICAgICAgIGNvbnN0IGd1aWxkR3VpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtZ3VpbGQtZ3VpZGUnKTtcclxuICAgICAgICBjb25zdCBndWlkZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3VpZGUtdGV4dC1jb21iYXQnKTtcclxuICAgICAgICBjb25zdCBndWlsZEJ1YmJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlsZC1ndWlkZS1idWJibGUnKTtcclxuICAgICAgICBjb25zdCBndWlkZUF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNndWlsZC1hdmF0YXItY29tYmF0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFndWlsZEd1aWRlIHx8ICFndWlkZVRleHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfinYwgR3VpZGUgZGUgZ3VpbGRlIGNvbWJhdCBub24gdHJvdXbDqScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEltYWdlcyBhbMOpYXRvaXJlcyBwb3VyIGxlIGd1aWRlXHJcbiAgICAgICAgY29uc3QgZ3VpbGRJbWFnZXMgPSBbJ2d1aWxkMS5wbmcnLCAnZ3VpbGQyLnBuZycsICdndWlsZDMucG5nJywgJ2d1aWxkNC5wbmcnXTtcclxuICAgICAgICBsZXQgY3VycmVudEltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvbmN0aW9uIHBvdXIgY2hhbmdlciBkJ2F2YXRhclxyXG4gICAgICAgIGNvbnN0IHJvdGF0ZUF2YXRhciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGd1aWRlQXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2VJbmRleCA9IChjdXJyZW50SW1hZ2VJbmRleCArIDEpICUgZ3VpbGRJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZ3VpZGVBdmF0YXIuc3JjID0gYC9pbWFnZXMvJHtndWlsZEltYWdlc1tjdXJyZW50SW1hZ2VJbmRleF19YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGhyYXNlcyBLYWFtZWxvdHQgcG91ciBsZSBjb21iYXRcclxuICAgICAgICBjb25zdCBjb21iYXRQaHJhc2VzID0gW1xyXG4gICAgICAgICAgICBcIuKalO+4jyBRdWUgbGUgY29tYmF0IGNvbW1lbmNlICEgTW9udHJlei1sZXVyIGRlIHF1b2kgdm91cyDDqnRlcyBjYXBhYmxlICFcIixcclxuICAgICAgICAgICAgXCLwn5uh77iPIEMnZXN0IHBhcyBzb3JjaWVyICEgSWwgc3VmZml0IGRlIHRhcGVyIHBsdXMgZm9ydCBxdWUgbCdlbm5lbWkgIVwiLFxyXG4gICAgICAgICAgICBcIuKaoSBBdHRlbnRpb24gISBVbiBzb3J0IHB1aXNzYW50IGFycml2ZSAhXCIsXHJcbiAgICAgICAgICAgIFwi8J+puSDDh2EgYydlc3QgZHUgYm9uIHNvaW4gISBDb21tZSBtYSBtw6hyZSBtZSBmYWlzYWl0ICFcIixcclxuICAgICAgICAgICAgXCLwn4+5IFRpciBwcsOpY2lzICEgQydlc3Qgw6dhIGwnZXhww6lyaWVuY2UgIVwiLFxyXG4gICAgICAgICAgICBcIuKalO+4jyBDb21iYXQgw6lwaXF1ZSBlbiBjb3Vycy4uLiBOZSBsw6JjaGV6IHJpZW4gIVwiLFxyXG4gICAgICAgICAgICBcIvCfj4YgVmljdG9pcmUgISBDb21tZSBkJ2hhYml0dWRlLCBvbiBhIMOpdMOpIGJyaWxsYW50cyAhXCIsXHJcbiAgICAgICAgICAgIFwi8J+SgCBEw6lmYWl0ZS4uLiBDJ2VzdCBwYXMgZ3JhdmUsIG9uIGZlcmEgbWlldXggbGEgcHJvY2hhaW5lIGZvaXMgIVwiLFxyXG4gICAgICAgICAgICBcIvCflKUgw4dhIGNoYXVmZmUgISBMZSBjb21iYXQgcydpbnRlbnNpZmllICFcIixcclxuICAgICAgICAgICAgXCLirZAgQ291cCBjcml0aXF1ZSAhIMOHYSBjJ2VzdCBkZSBsYSB0ZWNobmlxdWUgIVwiXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGhyYXNlSW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRlciB0b3V0ZXMgbGVzIDMgc2Vjb25kZXNcclxuICAgICAgICBjb25zdCBjb21tZW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwaHJhc2VJbmRleCA8IGNvbWJhdFBocmFzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBndWlkZVRleHQudGV4dENvbnRlbnQgPSBjb21iYXRQaHJhc2VzW3BocmFzZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIHBocmFzZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZXIgZCdhdmF0YXIgw6AgY2hhcXVlIGNvbW1lbnRhaXJlXHJcbiAgICAgICAgICAgICAgICByb3RhdGVBdmF0YXIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIGxhIGJ1bGxlXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3VpbGRCdWJibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBndWlsZEJ1YmJsZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIGwnYXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGd1aWRlQXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlQXZhdGFyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkZUF2YXRhci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY29tbWVudEludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b2NrZXIgbCdJRCBkZSBsJ2ludGVydmFsbGUgZGFucyBsZSBtb2RhbCBwb3VyIGxlIG5ldHRveWVyIHBsdXMgdGFyZFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkLW1vZGFsJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLmRhdGFzZXQuY29tbWVudEludGVydmFsID0gY29tbWVudEludGVydmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsYSBidWxsZSBkw6hzIGxlIGTDqXBhcnRcclxuICAgICAgICBpZiAoZ3VpbGRCdWJibGUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBndWlsZEJ1YmJsZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVHdWlsZEd1aWRlVGV4dCh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZ3VpZGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1aWRlLXRleHQnKTtcclxuICAgICAgICBpZiAoZ3VpZGVUZXh0KSB7XHJcbiAgICAgICAgICAgIGd1aWRlVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBVVElMSVRBSVJFUyBERSBQTEFURUFVID09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBkZXRlcm1pbmVQbGF0ZWF1VHlwZShtYXRjaERhdGEpIHtcclxuICAgICAgICAvLyBBbMOpYXRvaXJlbWVudCBjaG9pc2lyIGVudHJlIG1lZGlldmFsIGV0IGR5c3RvcGlhblxyXG4gICAgICAgIGNvbnN0IHBsYXRlYXVUeXBlcyA9IFsnbWVkaWV2YWwnLCAnZHlzdG9waWFuJ107XHJcbiAgICAgICAgcmV0dXJuIHBsYXRlYXVUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF0ZWF1VHlwZXMubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc3VtZUJhY2tncm91bmRWaWRlbygpIHtcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1tkYXRhLXdhcy1wbGF5aW5nPVwidHJ1ZVwiXScpO1xyXG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKHZpZGVvID0+IHtcclxuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB2aWRlby5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2FzLXBsYXlpbmcnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGF1c2VCYWNrZ3JvdW5kVmlkZW8oKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uZGF0YXNldC53YXNQbGF5aW5nID0gJ3RydWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEFOQ0lFTk5FIE3DiVRIT0RFIERFIFRFU1QgKMOAIENPTlNFUlZFUikgPT09PT09PT09PT09PT09XHJcbiAgICB0ZXN0QmF0dGxlZmllbGRWaXN1YWxpemF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2hhcmFjdGVyLW5hbWUnKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsZW1lbnQgPyBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA6ICdGaWdodGVyJztcclxuICAgICAgICBjb25zdCB0ZWFtQ29sb3IgPSB0ZWFtVHlwZSA9PT0gJ3BsYXllcicgPyAnIzRDQUY1MCcgOiAnI0Y0NDMzNic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIGRvbm7DqWVzIGR1IHBlcnNvbm5hZ2UgZGVwdWlzIGxhIGNhcnRlIGRlIG1hbmnDqHJlIHPDqWN1cmlzw6llXHJcbiAgICAgICAgbGV0IGNoYXJhY3RlckRhdGEgPSB7fTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhID0gSlNPTi5wYXJzZShjYXJkLmRhdGFzZXQuY2hhcmFjdGVyIHx8IGNhcmQuZGF0YXNldC5jaGFyYWN0ZXJEYXRhIHx8ICd7fScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZHUgcGFyc2luZyBkZXMgZG9ubsOpZXMgZGUgcGVyc29ubmFnZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lRWxlbWVudD8udGV4dENvbnRlbnQgfHwgJ0ZpZ2h0ZXInLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogJ3dhcnJpb3InLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrOiA1MFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByb2xlID0gY2hhcmFjdGVyRGF0YS5yb2xlIHx8ICd3YXJyaW9yJztcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJJbWFnZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNoYXJhY3Rlci1hdmF0YXIgaW1nJyk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBjaGFyYWN0ZXJJbWFnZSA/IGNoYXJhY3RlckltYWdlLnNyYyA6IGAvaW1hZ2VzL2NoYXJhY3RlcnMvJHt0aGlzLmdldENoYXJhY3RlckltYWdlQnlSb2xlKHJvbGUpfWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hhcmFjdGVyLmNsYXNzTmFtZSA9IGBiYXR0bGVmaWVsZC1jaGFyYWN0ZXIgJHt0ZWFtVHlwZX0tY2hhcmFjdGVyICR7cm9sZX0tY2hhcmFjdGVyYDtcclxuICAgICAgICBjaGFyYWN0ZXIuZGF0YXNldC5yb2xlID0gcm9sZTtcclxuICAgICAgICBjaGFyYWN0ZXIuZGF0YXNldC5uYW1lID0gbmFtZTtcclxuICAgICAgICBjaGFyYWN0ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLW1vZGVsXCIgc3R5bGU9XCJib3JkZXItY29sb3I6ICR7dGVhbUNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlU3JjfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNoYXJhY3Rlci1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLW5hbWUtdGFnXCI+JHtuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1oZWFsdGgtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoLWZpbGxcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7dGVhbUNvbG9yfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC10ZXh0XCI+JHtjaGFyYWN0ZXJEYXRhLmhwIHx8IDE1MH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVDYXJkVG9Qb3NpdGlvbihjYXJkLCBwb3NpdGlvbiwgY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgLy8gT2J0ZW5pciBsZXMgcG9zaXRpb25zIHBvdXIgbCdhbmltYXRpb25cclxuICAgICAgICBjb25zdCBjYXJkUmVjdCA9IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25SZWN0ID0gcG9zaXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWVyIHVuIGNsb25lIHBvdXIgbCdhbmltYXRpb25cclxuICAgICAgICBjb25zdCBjbG9uZSA9IGNhcmQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBjbG9uZS5zdHlsZS50b3AgPSBjYXJkUmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgIGNsb25lLnN0eWxlLmxlZnQgPSBjYXJkUmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICBjbG9uZS5zdHlsZS53aWR0aCA9IGNhcmRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICBjbG9uZS5zdHlsZS5oZWlnaHQgPSBjYXJkUmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGNsb25lLnN0eWxlLnpJbmRleCA9ICc5OTk5JztcclxuICAgICAgICBjbG9uZS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAxLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFzcXVlciBsYSBjYXJ0ZSBvcmlnaW5hbGVcclxuICAgICAgICBjYXJkLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltZXIgdmVycyBsYSBwb3NpdGlvblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnRvcCA9IHBvc2l0aW9uUmVjdC50b3AgKyBwb3NpdGlvblJlY3QuaGVpZ2h0IC8gMiAtIGNhcmRSZWN0LmhlaWdodCAvIDIgKyAncHgnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb25SZWN0LmxlZnQgKyBwb3NpdGlvblJlY3Qud2lkdGggLyAyIC0gY2FyZFJlY3Qud2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuNiknO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbXBsYWNlciBwYXIgbGUgcGVyc29ubmFnZSBhcHLDqHMgbCdhbmltYXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2xvbmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgIGNoYXJhY3Rlci5zdHlsZS5hbmltYXRpb24gPSAnY2hhcmFjdGVyLWFwcGVhciAwLjhzIGVhc2Utb3V0JztcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QmF0dGxlZmllbGRDb21iYXQobWF0Y2hEYXRhLCBzcGVlZCkge1xyXG4gICAgICAgIC8vIFNpbXVsYXRpb24gZCfDqXbDqW5lbWVudHMgZGUgY29tYmF0IGF2ZWMgYW5pbWF0aW9ucyDDqXBpcXVlc1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG1hdGNoRGF0YS5ldmVudHMgfHwgdGhpcy5nZW5lcmF0ZUVwaWNDb21iYXRFdmVudHMoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+OriBEw6ltYXJyYWdlIGR1IGNvbWJhdCDDqXBpcXVlIHN1ciBsZSBjaGFtcCBkZSBiYXRhaWxsZSEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn4pqhIFZpdGVzc2U6Jywgc3BlZWQgKyAneCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlIGRlIGTDqWJ1dCBkZSBjb21iYXRcclxuICAgICAgICB0aGlzLnNob3dLYWFtZWxvdHRDb21tZW50KCdzdGFydCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpbXVsZXIgbGUgY29tYmF0IGF2ZWMgZGVzIGVmZmV0cyB2aXN1ZWxzIMOpcGlxdWVzXHJcbiAgICAgICAgdGhpcy5zaW11bGF0ZUVwaWNCYXR0bGVmaWVsZEV2ZW50cyhldmVudHMsIHNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBzaW11bGF0ZUVwaWNCYXR0bGVmaWVsZEV2ZW50cyhldmVudHMsIHNwZWVkKSB7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21iYXQtZWZmZWN0cycpO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWFuaW1hdGlvbnMnKTtcclxuICAgICAgICBsZXQgZXZlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc05leHRFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50SW5kZXggPj0gZXZlbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTGUgY29tYmF0IGVzdCB0ZXJtaW7DqSwgbGEgZmluIHNlcmEgZ8OpcsOpZSBwYXIgZmluaXNoRXBpY0NvbWJhdCgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcGljQmF0dGxlZmllbGRFZmZlY3QoZXZlbnQsIGVmZmVjdHNDb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlFcGljQW5pbWF0aW9uKGV2ZW50LCBhbmltYXRpb25zQ29udGFpbmVyLCBzcGVlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZSBkdSBHdWlsZCBHdWlkZSBzZWxvbiBsJ2FjdGlvblxyXG4gICAgICAgICAgICB0aGlzLnNob3dLYWFtZWxvdHRDb21tZW50KGV2ZW50LnR5cGUgfHwgJ2F0dGFjaycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnRJbmRleCsrO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHByb2Nlc3NOZXh0RXZlbnQsICgyMDAwIC8gc3BlZWQpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Nlc3NOZXh0RXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gRk9OQ1RJT05TIEQnRUZGRVRTIFNQw4lDSUFVWCA9PT09PT09PT09PT09PT1cclxuICAgIFxyXG4gICAgY3JlYXRlU2xhc2hFZmZlY3QodGFyZ2V0LCBjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNsYXNoLmNsYXNzTmFtZSA9ICdzbGFzaC1lZmZlY3QnO1xyXG4gICAgICAgIHNsYXNoLmlubmVySFRNTCA9ICfimqHwn5Kl4pqhJztcclxuICAgICAgICBzbGFzaC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc2xhc2guc3R5bGUuZm9udFNpemUgPSAnM3JlbSc7XHJcbiAgICAgICAgc2xhc2guc3R5bGUuY29sb3IgPSAnI2ZmNmI2Yic7XHJcbiAgICAgICAgc2xhc2guc3R5bGUuYW5pbWF0aW9uID0gJ3NsYXNoQW5pbWF0aW9uIDAuNXMgZWFzZS1vdXQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBzbGFzaC5zdHlsZS5sZWZ0ID0gKHJlY3QubGVmdCAtIGNvbnRhaW5lclJlY3QubGVmdCkgKyAncHgnO1xyXG4gICAgICAgIHNsYXNoLnN0eWxlLnRvcCA9IChyZWN0LnRvcCAtIGNvbnRhaW5lclJlY3QudG9wKSArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsYXNoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNsYXNoLnJlbW92ZSgpLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNoaWVsZEVmZmVjdChkZWZlbmRlciwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2hpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2hpZWxkLmNsYXNzTmFtZSA9ICdzaGllbGQtZWZmZWN0JztcclxuICAgICAgICBzaGllbGQuaW5uZXJIVE1MID0gJ/Cfm6HvuI/inKjwn5uh77iPJztcclxuICAgICAgICBzaGllbGQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHNoaWVsZC5zdHlsZS5mb250U2l6ZSA9ICcyLjVyZW0nO1xyXG4gICAgICAgIHNoaWVsZC5zdHlsZS5jb2xvciA9ICdnb2xkJztcclxuICAgICAgICBzaGllbGQuc3R5bGUuYW5pbWF0aW9uID0gJ3NoaWVsZEFuaW1hdGlvbiAwLjhzIGVhc2Utb3V0JztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZWN0ID0gZGVmZW5kZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBzaGllbGQuc3R5bGUubGVmdCA9IChyZWN0LmxlZnQgLSBjb250YWluZXJSZWN0LmxlZnQpICsgJ3B4JztcclxuICAgICAgICBzaGllbGQuc3R5bGUudG9wID0gKHJlY3QudG9wIC0gY29udGFpbmVyUmVjdC50b3ApICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpZWxkKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNoaWVsZC5yZW1vdmUoKSwgODAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNYWdpY0VmZmVjdChtYWdlLCBjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBtYWdpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1hZ2ljLmNsYXNzTmFtZSA9ICdtYWdpYy1lZmZlY3QnO1xyXG4gICAgICAgIG1hZ2ljLmlubmVySFRNTCA9ICfimqHwn5Su4pyo8J+Mn+KaoSc7XHJcbiAgICAgICAgbWFnaWMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIG1hZ2ljLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xyXG4gICAgICAgIG1hZ2ljLnN0eWxlLmNvbG9yID0gJyM5YjU5YjYnO1xyXG4gICAgICAgIG1hZ2ljLnN0eWxlLmFuaW1hdGlvbiA9ICdtYWdpY0FuaW1hdGlvbiAxcyBlYXNlLW91dCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IG1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBtYWdpYy5zdHlsZS5sZWZ0ID0gKHJlY3QubGVmdCAtIGNvbnRhaW5lclJlY3QubGVmdCkgKyAncHgnO1xyXG4gICAgICAgIG1hZ2ljLnN0eWxlLnRvcCA9IChyZWN0LnRvcCAtIGNvbnRhaW5lclJlY3QudG9wKSArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hZ2ljKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1hZ2ljLnJlbW92ZSgpLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIZWFsRWZmZWN0KGhlYWxlciwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgaGVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWwuY2xhc3NOYW1lID0gJ2hlYWwtZWZmZWN0JztcclxuICAgICAgICBoZWFsLmlubmVySFRNTCA9ICfwn5Ka4pyo8J+Mn+KcqPCfkponO1xyXG4gICAgICAgIGhlYWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGhlYWwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XHJcbiAgICAgICAgaGVhbC5zdHlsZS5jb2xvciA9ICcjMmVjYzcxJztcclxuICAgICAgICBoZWFsLnN0eWxlLmFuaW1hdGlvbiA9ICdoZWFsQW5pbWF0aW9uIDEuMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBoZWFsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBoZWFsLnN0eWxlLmxlZnQgPSAocmVjdC5sZWZ0IC0gY29udGFpbmVyUmVjdC5sZWZ0KSArICdweCc7XHJcbiAgICAgICAgaGVhbC5zdHlsZS50b3AgPSAocmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFsKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGhlYWwucmVtb3ZlKCksIDEyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUNoYXJhY3RlcihjaGFyYWN0ZXJzLCB0ZWFtID0gbnVsbCwgcm9sZSA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IEFycmF5LmZyb20oY2hhcmFjdGVycykuZmlsdGVyKGNoYXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzVGVhbSA9ICF0ZWFtIHx8IGNoYXIuY2xhc3NMaXN0LmNvbnRhaW5zKGAke3RlYW19LWNoYXJhY3RlcmApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzUm9sZSA9ICFyb2xlIHx8IGNoYXIuY2xhc3NMaXN0LmNvbnRhaW5zKGAke3JvbGV9LWNoYXJhY3RlcmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1RlYW0gJiYgbWF0Y2hlc1JvbGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbHRlcmVkLmxlbmd0aCldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVmZmVjdEljb24odHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgICAgICAnYXR0YWNrJzogJ+KalO+4j/CfkqUnLFxyXG4gICAgICAgICAgICAnZGVmZW5zZSc6ICfwn5uh77iP4pyoJyxcclxuICAgICAgICAgICAgJ21hZ2ljJzogJ/CflK7imqEnLFxyXG4gICAgICAgICAgICAnaGVhbCc6ICfwn5Ka4pyoJyxcclxuICAgICAgICAgICAgJ2NyaXRpY2FsJzogJ/CfkqXwn5SlJyxcclxuICAgICAgICAgICAgJ21pc3MnOiAn8J+SqPCfkbsnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaWNvbnNbdHlwZV0gfHwgJ+KalO+4jyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVFcGljQ29tYmF0RXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi4pqU77iPIExlIGNvbWJhdCBjb21tZW5jZSAhXCIsIHR5cGU6ICdzdGFydCcgfSxcclxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn5uh77iPIExlIFBhbGFkaW4gY2hhcmdlIGJyYXZlbWVudCAhXCIsIHR5cGU6ICdhdHRhY2snIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+PuSBMJ0FyY2hlciByaXBvc3RlIGF2ZWMgcHLDqWNpc2lvbiAhXCIsIHR5cGU6ICdhdHRhY2snIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi4pqhIExlIE1hZ2UgbGFuY2UgdW4gc29ydCBkw6l2YXN0YXRldXIgIVwiLCB0eXBlOiAnbWFnaWMnIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+boe+4jyBCZWxsZSBwYXJhZGUgZHUgZMOpZmVuc2V1ciAhXCIsIHR5cGU6ICdkZWZlbnNlJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfqbkgU29pbnMgbWlyYWN1bGV1eCBkdSBHdcOpcmlzc2V1ciAhXCIsIHR5cGU6ICdoZWFsJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCflKUgTGUgQmVyc2Vya2VyIGVudHJlIGVuIHJhZ2UgIVwiLCB0eXBlOiAnYXR0YWNrJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfjJ8gU29ydCBkZSBwcm90ZWN0aW9uIG1hZ2lxdWUgIVwiLCB0eXBlOiAnbWFnaWMnIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi4pqU77iPIENvbWJvIGQnYXR0YXF1ZXMgc3BlY3RhY3VsYWlyZXMgIVwiLCB0eXBlOiAnYXR0YWNrJyB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfj4YgQ29tYmF0IMOpcGlxdWUgdGVybWluw6kgIVwiLCB0eXBlOiAndmljdG9yeScgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0VwaWNCYXR0bGVmaWVsZEVmZmVjdChldmVudCwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlZmZlY3RJY29uID0gdGhpcy5nZXRFZmZlY3RJY29uKGV2ZW50LnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdENsYXNzID0gYGVmZmVjdC0ke2V2ZW50LnR5cGV9YDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlZmZlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlZmZlY3QuY2xhc3NOYW1lID0gYGNvbWJhdC1lZmZlY3QtYW5pbWF0aW9uICR7ZWZmZWN0Q2xhc3N9YDtcclxuICAgICAgICBlZmZlY3QuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWZmZWN0LWljb25cIj4ke2VmZmVjdEljb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZmZlY3QtdGV4dFwiPiR7ZXZlbnQuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZmZlY3QtcGFydGljbGVzXCI+PC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWZmZWN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXRpcmVyIGwnZWZmZXQgYXByw6hzIGFuaW1hdGlvblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWZmZWN0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlFcGljQW5pbWF0aW9uKGV2ZW50LCBjb250YWluZXIsIHNwZWVkKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhdHRsZWZpZWxkLWNoYXJhY3RlcicpO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblR5cGUgPSBldmVudC50eXBlIHx8ICdhdHRhY2snO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoYW5pbWF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdhdHRhY2snOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlQXR0YWNrKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlZmVuc2UnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlRGVmZW5zZShjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYWdpYyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVNYWdpYyhjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUhlYWwoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUdlbmVyaWMoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVBdHRhY2soY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCkge1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VyID0gdGhpcy5nZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycywgJ3BsYXllcicpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ2V0UmFuZG9tQ2hhcmFjdGVyKGNoYXJhY3RlcnMsICdlbmVteScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhdHRhY2tlciAmJiB0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGQnYXR0YXF1ZVxyXG4gICAgICAgICAgICBhdHRhY2tlci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4yKSB0cmFuc2xhdGVYKDIwcHgpJztcclxuICAgICAgICAgICAgYXR0YWNrZXIuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHswLjMgLyBzcGVlZH1zIGVhc2Utb3V0YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjkpIHRyYW5zbGF0ZVgoLTEwcHgpJztcclxuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygwLjcpJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRWZmZXQgZGUgY291cFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTbGFzaEVmZmVjdCh0YXJnZXQsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFja2VyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuZmlsdGVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDAgLyBzcGVlZCk7XHJcbiAgICAgICAgICAgIH0sIDIwMCAvIHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZURlZmVuc2UoY2hhcmFjdGVycywgY29udGFpbmVyLCBzcGVlZCkge1xyXG4gICAgICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5nZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycywgJ3BsYXllcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkZWZlbmRlcikge1xyXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgZMOpZmVuc2UgYXZlYyBib3VjbGllclxyXG4gICAgICAgICAgICBkZWZlbmRlci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICAgICAgICAgIGRlZmVuZGVyLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEuMykgZHJvcC1zaGFkb3coMCAwIDIwcHggZ29sZCknO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGllbGRFZmZlY3QoZGVmZW5kZXIsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZmVuZGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGVmZW5kZXIuc3R5bGUuZmlsdGVyID0gJyc7XHJcbiAgICAgICAgICAgIH0sIDgwMCAvIHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZU1hZ2ljKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpIHtcclxuICAgICAgICBjb25zdCBtYWdlID0gdGhpcy5nZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycywgbnVsbCwgJ21hZ2UnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobWFnZSkge1xyXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgbWFnaWVcclxuICAgICAgICAgICAgbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xNSkgdHJhbnNsYXRlWSgtMTBweCknO1xyXG4gICAgICAgICAgICBtYWdlLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEuNSkgZHJvcC1zaGFkb3coMCAwIDMwcHggcHVycGxlKSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1hZ2ljRWZmZWN0KG1hZ2UsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICAgICAgICBtYWdlLnN0eWxlLmZpbHRlciA9ICcnO1xyXG4gICAgICAgICAgICB9LCAxMDAwIC8gc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlSGVhbChjaGFyYWN0ZXJzLCBjb250YWluZXIsIHNwZWVkKSB7XHJcbiAgICAgICAgY29uc3QgaGVhbGVyID0gdGhpcy5nZXRSYW5kb21DaGFyYWN0ZXIoY2hhcmFjdGVycywgJ3BsYXllcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChoZWFsZXIpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGRlIHNvaW5cclxuICAgICAgICAgICAgaGVhbGVyLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEuOCkgZHJvcC1zaGFkb3coMCAwIDI1cHggbGlnaHRncmVlbiknO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVIZWFsRWZmZWN0KGhlYWxlciwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxhIGJhcnJlIGRlIHZpZVxyXG4gICAgICAgICAgICBjb25zdCBoZWFsdGhCYXIgPSBoZWFsZXIucXVlcnlTZWxlY3RvcignLmhlYWx0aC1maWxsJyk7XHJcbiAgICAgICAgICAgIGlmIChoZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgICAgIGhlYWx0aEJhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoZWFsZXIuc3R5bGUuZmlsdGVyID0gJyc7XHJcbiAgICAgICAgICAgIH0sIDEyMDAgLyBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVHZW5lcmljKGNoYXJhY3RlcnMsIGNvbnRhaW5lciwgc3BlZWQpIHtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSB0aGlzLmdldFJhbmRvbUNoYXJhY3RlcihjaGFyYWN0ZXJzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3Rlci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICB9LCA0MDAgLyBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGVtb0NvbWJhdEV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIkxlIGNvbWJhdCBjb21tZW5jZSFcIiB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIkd1ZXJyaWVyIGF0dGFxdWUgYXZlYyBzb24gw6lww6llIVwiIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwiTWFnZSBsYW5jZSB1biBzb3J0IGRlIGZldSFcIiB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIkwnYXJjaGVyIHZpc2UgYXZlYyBwcsOpY2lzaW9uIVwiIH0sXHJcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwiQ29tYmF0IMOpcGlxdWUgZW4gY291cnMuLi5cIiB9LFxyXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIlZpY3RvaXJlIVwiIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dCYXR0bGVmaWVsZFZpY3RvcnkoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKTtcclxuICAgICAgICBpZiAoIW1vZGFsKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmljdG9yeU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWN0b3J5T3ZlcmxheS5jbGFzc05hbWUgPSAnYmF0dGxlZmllbGQtdmljdG9yeS1vdmVybGF5JztcclxuICAgICAgICB2aWN0b3J5T3ZlcmxheS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj7wn4+GIFZJQ1RPSVJFISDwn4+GPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkNvbWJhdCB0ZXJtaW7DqSBhdmVjIHN1Y2PDqHMhPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpY3RvcnktYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2aWN0b3J5LWJ0biBwcmltYXJ5XCIgb25jbGljaz1cInRoaXMuY2xvc2VzdCgnLmJhdHRsZWZpZWxkLW1vZGFsJykucXVlcnlTZWxlY3RvcignLmNsb3NlLWJhdHRsZWZpZWxkJykuY2xpY2soKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDinIUgRmVybWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpY3RvcnktYnRuIHNlY29uZGFyeVwiIG9uY2xpY2s9XCJydW5Db21wbGV0ZVRlc3QoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDwn5SEIE5vdXZlYXUgdGVzdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQodmljdG9yeU92ZXJsYXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlIGRlIHZpY3RvaXJlXHJcbiAgICAgICAgdGhpcy5zaG93S2FhbWVsb3R0Q29tbWVudCgndmljdG9yeScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dCYXR0bGVmaWVsZERlZmVhdCgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVmaWVsZC1tb2RhbCcpO1xyXG4gICAgICAgIGlmICghbW9kYWwpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkZWZlYXRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGVmZWF0T3ZlcmxheS5jbGFzc05hbWUgPSAnYmF0dGxlZmllbGQtZGVmZWF0LW92ZXJsYXknO1xyXG4gICAgICAgIGRlZmVhdE92ZXJsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmZWF0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj7wn5KAIETDiUZBSVRFIPCfkoA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2Ugbidlc3QgcXVlIHBhcnRpZSByZW1pc2UgITwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZlYXQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWZlYXQtYnRuIHByaW1hcnlcIiBvbmNsaWNrPVwidGhpcy5jbG9zZXN0KCcuYmF0dGxlZmllbGQtbW9kYWwnKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYmF0dGxlZmllbGQnKS5jbGljaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKchSBGZXJtZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVmZWF0LWJ0biBzZWNvbmRhcnlcIiBvbmNsaWNrPVwicnVuQ29tcGxldGVUZXN0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg8J+UhCBOb3V2ZWF1IHRlc3RcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlZmVhdE92ZXJsYXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlIGRlIGTDqWZhaXRlXHJcbiAgICAgICAgdGhpcy5zaG93S2FhbWVsb3R0Q29tbWVudCgnZGVmZWF0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEZPTkNUSU9OIERFIFRFU1QgUE9VUiBMRSBCQVRUTEVGSUVMRCA9PT09PT09PT09PT09PT1cclxuICAgIHRlc3RCYXR0bGVmaWVsZFZpc3VhbGl6YXRpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfjq4gVGVzdCBkZSBsYSB2aXN1YWxpc2F0aW9uIGJhdHRsZWZpZWxkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRG9ubsOpZXMgZGUgdGVzdCBzaW11bMOpZXMgYXZlYyB2cmFpZXMgY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IG1vY2tNYXRjaERhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiAndGVzdC0xMjMnLFxyXG4gICAgICAgICAgICB0ZWFtX2E6IHtcclxuICAgICAgICAgICAgICAgIHBsYXllcjogJ1ZvdXMnLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1BhbGFkaW4gRGl2aW4nLCByb2xlOiAndGFuaycsIGxldmVsOiAyMCwgaHA6IDI1MCwgYXR0YWNrOiA5MCwgaW1hZ2U6ICdwYWxhZGluLnBuZycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdNYWdlIGRlIEZldScsIHJvbGU6ICdtYWdlJywgbGV2ZWw6IDE4LCBocDogMTUwLCBhdHRhY2s6IDE4MCwgaW1hZ2U6ICdtYWdlLnBuZycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdQcsOqdHJlIEd1w6lyaXNzZXVyJywgcm9sZTogJ3ByaWVzdCcsIGxldmVsOiAxNiwgaHA6IDEzMCwgYXR0YWNrOiA3MCwgaW1hZ2U6ICdwcmllc3QucG5nJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlYW1fYjoge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyOiAnQWR2ZXJzYWlyZSBSZWRvdXRhYmxlJyxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdHdWVycmllciBCZXJzZXJrZXInLCByb2xlOiAnd2FycmlvcicsIGxldmVsOiAxOSwgaHA6IDIwMCwgYXR0YWNrOiAxNjAsIGltYWdlOiAnd2Fycmlvci5wbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQXJjaGVyIFByw6ljaXMnLCByb2xlOiAnYXJjaGVyJywgbGV2ZWw6IDE3LCBocDogMTQwLCBhdHRhY2s6IDEzMCwgaW1hZ2U6ICdhcmNoZXIucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0Fzc2Fzc2luIEZ1cnRpZicsIHJvbGU6ICdhc3Nhc3NpbicsIGxldmVsOiAyMSwgaHA6IDE4MCwgYXR0YWNrOiAxMDAsIGltYWdlOiAnYXNzYXNzaW4ucG5nJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV2ZW50czogW1xyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLimpTvuI8gTGUgY29tYmF0IGNvbW1lbmNlICFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn5uh77iPIFBhbGFkaW4gY2hhcmdlIHZlcnMgbCdlbm5lbWkgIVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfj7kgTCdBcmNoZXIgcmlwb3N0ZSBhdmVjIHByw6ljaXNpb24gIVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIuKaoSBTb3JjaWVyIGxhbmNlIHVuIHNvcnQgZMOpdmFzdGF0ZXVyICFcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogXCLwn6m5IEd1w6lyaXNzZXVyIHNvaWduZSBzZXMgYWxsacOpcyAhXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+UpSBCZXJzZXJrZXIgZW50cmUgZW4gcmFnZSAhXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IFwi8J+MvyBEcnVpZGUgaW52b3F1ZSBsYSBuYXR1cmUgIVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIuKalO+4jyBDb21iYXQgw6lwaXF1ZSBlbiBjb3Vycy4uLlwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiBcIvCfj4YgVmljdG9pcmUgaMOpcm/Dr3F1ZSAhXCIgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMYW5jZXIgbGEgdmlzdWFsaXNhdGlvbiBhdmVjIGxlcyBkb25uw6llcyBkZSB0ZXN0XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29tYmF0VmlzdWFsaXphdGlvbk1vZGFsKG1vY2tNYXRjaERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCkge1xyXG4gICAgICAgIC8vIFN0b3BwZXIgdG91dGVzIGxlcyB2aWTDqW9zIGRlIGJhY2tncm91bmRcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1thdXRvcGxheV0nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RvcHBlciBsZXMgYW5pbWF0aW9ucyBDU1Mgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICBjb25zdCBhbmltYXRlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGVkLWJnLCAuZ3JhZGllbnQtYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgYW5pbWF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICdwYXVzZWQnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZUJhY2tncm91bmRWaWRlbygpIHtcclxuICAgICAgICAvLyBSZXByZW5kcmUgdG91dGVzIGxlcyB2aWTDqW9zIGRlIGJhY2tncm91bmRcclxuICAgICAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1thdXRvcGxheV0nKTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXByZW5kcmUgbGVzIGFuaW1hdGlvbnMgQ1NTXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlZC1iZywgLmdyYWRpZW50LWFuaW1hdGlvbicpO1xyXG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQmF0dGxlZmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgYmF0dGxlZmllbGRzID0gW1xyXG4gICAgICAgICAgICAvLyBQbGF0ZWF1eCBEeXN0b3BpcXVlc1xyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9jaGFtcCBkZSBiYXRhaWxsZSBkeXN0by5wbmcnLFxyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9jb3VycyBtb2Rlcm5lLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eER5c3RvL3BsYWNlIHZpbGxhZ2UgbW9kZXJuZS5wbmcnLFxyXG4gICAgICAgICAgICAvLyBQbGF0ZWF1eCBNw6lkacOpdmF1eFxyXG4gICAgICAgICAgICAncGxhdGVhdXhNZWRpZXZhbC9jaW1ldGnDqHJlLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL2NvdXJzIGR1IGNoYXRlYXUucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4TWVkaWV2YWwvcGxhY2UgZHUgdmlsbGFnZS5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYmF0dGxlZmllbGRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJhdHRsZWZpZWxkcy5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRlYW1DaGFyYWN0ZXJzKHRlYW0sIHRlYW1UeXBlKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlcnNIVE1MID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbnMgZGUgc8OpY3VyaXTDqSBwb3VyIGwnb2JqZXQgdGVhbVxyXG4gICAgICAgIGlmICghdGVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYMOJcXVpcGUgJHt0ZWFtVHlwZX0gbWFucXVhbnRlLCB1dGlsaXNhdGlvbiBkZXMgZG9ubsOpZXMgcGFyIGTDqWZhdXRgKTtcclxuICAgICAgICAgICAgdGVhbSA9IHsgY2hhcmFjdGVyczogW10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgb24gYSBsZXMgdnJhaWVzIGRvbm7DqWVzIGRlcyBwZXJzb25uYWdlcywgb24gbGVzIHV0aWxpc2VcclxuICAgICAgICBpZiAodGVhbS5jaGFyYWN0ZXJzICYmIEFycmF5LmlzQXJyYXkodGVhbS5jaGFyYWN0ZXJzKSAmJiB0ZWFtLmNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0ZWFtLmNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcmFjdGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBlcnNvbm5hZ2UgJHtpbmRleH0gbWFucXVhbnQgZGFucyBsJ8OpcXVpcGUgJHt0ZWFtVHlwZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlckltYWdlID0gdGhpcy5nZXRDaGFyYWN0ZXJJbWFnZShjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZUNsYXNzID0gY2hhcmFjdGVyLnJvbGUgPyBjaGFyYWN0ZXIucm9sZS50b0xvd2VyQ2FzZSgpIDogJ2ZpZ2h0ZXInO1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyc0hUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLWNhcmRcIiBpZD1cIiR7dGVhbVR5cGV9LWNoYXItJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZ2h0ZXItaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjaGFyYWN0ZXJJbWFnZX1cIiBhbHQ9XCIke2NoYXJhY3Rlci5uYW1lIHx8ICdQZXJzb25uYWdlJ31cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsYXNzLW92ZXJsYXkgJHtyb2xlQ2xhc3N9XCI+JHt0aGlzLmdldFJvbGVOYW1lKGNoYXJhY3Rlci5yb2xlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSBocFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjaGFyYWN0ZXIuaHAgfHwgMTAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtIGF0dGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjaGFyYWN0ZXIuYXRrIHx8IDUwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZ2h0ZXItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7Y2hhcmFjdGVyLm5hbWUgfHwgJ0jDqXJvcyd9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLWhlYWx0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWx0aC1iYXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgYXZlYyBkZXMgcGVyc29ubmFnZXMgcGFyIGTDqWZhdXRcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENoYXJhY3RlcnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdIw6lyb3MgMScsIHJvbGU6ICd3YXJyaW9yJywgaHA6IDEwMCwgYXRrOiA1MCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSMOpcm9zIDInLCByb2xlOiAnbWFnZScsIGhwOiA4MCwgYXRrOiA3MCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSMOpcm9zIDMnLCByb2xlOiAnYXJjaGVyJywgaHA6IDkwLCBhdGs6IDYwIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHRDaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlckltYWdlID0gdGhpcy5nZXRDaGFyYWN0ZXJJbWFnZShjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZUNsYXNzID0gY2hhcmFjdGVyLnJvbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlnaHRlci1jYXJkXCIgaWQ9XCIke3RlYW1UeXBlfS1jaGFyLSR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWdodGVyLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2hhcmFjdGVySW1hZ2V9XCIgYWx0PVwiJHtjaGFyYWN0ZXIubmFtZX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsYXNzLW92ZXJsYXkgJHtyb2xlQ2xhc3N9XCI+JHt0aGlzLmdldFJvbGVOYW1lKGNoYXJhY3Rlci5yb2xlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSBocFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjaGFyYWN0ZXIuaHB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gYXR0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN3b3JkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2NoYXJhY3Rlci5hdGt9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlnaHRlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JHtjaGFyYWN0ZXIubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZ2h0ZXItaGVhbHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoLWJhclwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJhY3RlckltYWdlKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIC8vIFbDqXJpZmljYXRpb25zIGRlIHPDqWN1cml0w6kgcG91ciBsJ29iamV0IGNoYXJhY3RlclxyXG4gICAgICAgIGlmICghY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGVyc29ubmFnZSBtYW5xdWFudCwgdXRpbGlzYXRpb24gZGUgbFxcJ2ltYWdlIHBhciBkw6lmYXV0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3dhcnJpb3IucG5nJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgbGUgcGVyc29ubmFnZSBhIHVuZSBhcnR3b3JrVXJsLCBsJ3V0aWxpc2VyIGVuIHByaW9yaXTDqVxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIuYXJ0d29ya1VybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmFydHdvcmtVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpbm9uLCB1dGlsaXNlciBsZSBzeXN0w6htZSBkZSBtYXBwaW5nIGV4aXN0YW50XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyTmFtZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyIDogY2hhcmFjdGVyLm5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFwcGVyIGxlcyBub21zIGRlcyBwZXJzb25uYWdlcyB2ZXJzIGxldXJzIGltYWdlc1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckltYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3dhcnJpb3IucG5nJyxcclxuICAgICAgICAgICAgJ3dhcnJpb3InOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3dhcnJpb3IucG5nJyxcclxuICAgICAgICAgICAgJ21hZ2UnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL21hZ2UucG5nJyxcclxuICAgICAgICAgICAgJ2FyY2hlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXJjaGVyLnBuZycsXHJcbiAgICAgICAgICAgICdwcmllc3QnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3ByaWVzdC5wbmcnLFxyXG4gICAgICAgICAgICAnaGVhbGVyJzogJy9pbWFnZXMvY2hhcmFjdGVycy9wcmllc3QucG5nJyxcclxuICAgICAgICAgICAgJ3BhbGFkaW4nOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3BhbGFkaW4ucG5nJyxcclxuICAgICAgICAgICAgJ3RhbmsnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3BhbGFkaW4ucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2Fzc2luJzogJy9pbWFnZXMvY2hhcmFjdGVycy9hc3Nhc3Npbi5wbmcnLFxyXG4gICAgICAgICAgICAnZmlnaHRlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvd2Fycmlvci5wbmcnLFxyXG4gICAgICAgICAgICAvLyBNYXBwaW5nIHBvdXIgbGVzIG5vbXMgc3DDqWNpZmlxdWVzXHJcbiAgICAgICAgICAgICdnYXJkZSBub2lyJzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICdkYXJrIGd1YXJkJzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICdkYXJrLWd1YXJkJzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICdhc3Nhc3NpbiBvbWJyZSc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXNzYXNzaW4ucG5nJyxcclxuICAgICAgICAgICAgJ3NoYWRvdyBhc3Nhc3Npbic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXNzYXNzaW4ucG5nJyxcclxuICAgICAgICAgICAgJ3NoYWRvdy1hc3Nhc3Npbic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXNzYXNzaW4ucG5nJyxcclxuICAgICAgICAgICAgJ27DqWNyb21hbnQnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL21hZ2UucG5nJyxcclxuICAgICAgICAgICAgJ25lY3JvbWFuY2VyJzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICdhcmNoZXIgZWxmZSc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXJjaGVyLnBuZycsXHJcbiAgICAgICAgICAgICdlbGYgYXJjaGVyJzogJy9pbWFnZXMvY2hhcmFjdGVycy9hcmNoZXIucG5nJyxcclxuICAgICAgICAgICAgJ2VsZi1hcmNoZXInOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2FyY2hlci5wbmcnLFxyXG4gICAgICAgICAgICAnbWFnZSBzYWdlJzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICd3aXNlIG1hZ2UnOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL21hZ2UucG5nJyxcclxuICAgICAgICAgICAgJ3dpc2UtbWFnZSc6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvbWFnZS5wbmcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFc3NheWVyIHBsdXNpZXVycyBhcHByb2NoZXMgcG91ciBtYXRjaGVyIGwnaW1hZ2VcclxuICAgICAgICBsZXQgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydkZWZhdWx0J107XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5hbWUgJiYgdHlwZW9mIGNoYXJhY3Rlck5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gY2hhcmFjdGVyTmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXNoTmFtZSA9IGNoYXJhY3Rlck5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBFc3NheWVyIHBhciBub20gZXhhY3RcclxuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckltYWdlc1tjaGFyYWN0ZXJOYW1lLnRvTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbY2hhcmFjdGVyTmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFc3NheWVyIHBhciBub20gYXZlYyB0aXJldHNcclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhcmFjdGVySW1hZ2VzW2Rhc2hOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzW2Rhc2hOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFc3NheWVyIHBhciBub20gc2FucyBlc3BhY2VzXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXJhY3RlckltYWdlc1tub3JtYWxpemVkTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1tub3JtYWxpemVkTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXNzYXllciBkZSBkZXZpbmVyIHBhciBsZSByw7RsZSBkYW5zIGxlIG5vbVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnZ3VlcnJpZXInKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnd2FycmlvcicpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdnYXJkZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbJ3dhcnJpb3InXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnbWFnZScpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCd3aXphcmQnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnbmVjcm8nKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydtYWdlJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2FyY2hlcicpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdib3cnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnZWxmZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbJ2FyY2hlciddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdwcmV0cmUnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygncHJpZXN0JykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2hlYWxlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbJ3ByaWVzdCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdwYWxhZGluJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3RhbmsnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydwYWxhZGluJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2Fzc2Fzc2luJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3JvZ3VlJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ29tYnJlJykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snYXNzYXNzaW4nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+WvO+4jyBJbWFnZSBwb3VyIFwiJHtjaGFyYWN0ZXJOYW1lfVwiOiAke2ltYWdlUGF0aH1gKTtcclxuICAgICAgICByZXR1cm4gaW1hZ2VQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvbGVOYW1lKHJvbGUpIHtcclxuICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyBkZSBzw6ljdXJpdMOpIHBvdXIgbGUgcsO0bGVcclxuICAgICAgICBpZiAoIXJvbGUgfHwgdHlwZW9mIHJvbGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQ29tYmF0dGFudCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJvbGVOYW1lcyA9IHtcclxuICAgICAgICAgICAgJ3RhbmsnOiAnVGFuaycsXHJcbiAgICAgICAgICAgICdoZWFsZXInOiAnU29pZ25ldXInLFxyXG4gICAgICAgICAgICAnbWFnZSc6ICdNYWdlJyxcclxuICAgICAgICAgICAgJ2Fzc2Fzc2luJzogJ0Fzc2Fzc2luJyxcclxuICAgICAgICAgICAgJ2FyY2hlcic6ICdBcmNoZXInLFxyXG4gICAgICAgICAgICAnZmlnaHRlcic6ICdDb21iYXR0YW50JyxcclxuICAgICAgICAgICAgJ3dhcnJpb3InOiAnR3VlcnJpZXInLFxyXG4gICAgICAgICAgICAncHJpZXN0JzogJ1Byw6p0cmUnLFxyXG4gICAgICAgICAgICAncGFsYWRpbic6ICdQYWxhZGluJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJvbGVOYW1lc1tyb2xlLnRvTG93ZXJDYXNlKCldIHx8ICdDb21iYXR0YW50JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb2xlSWNvbihyb2xlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyb2xlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhbmsnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtc2hpZWxkLWFsdCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hlYWxlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1oZWFydCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hZ2UnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtbWFnaWMnO1xyXG4gICAgICAgICAgICBjYXNlICdhc3Nhc3Npbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1kYWdnZXInO1xyXG4gICAgICAgICAgICBjYXNlICdhcmNoZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtYm93LWFycm93JztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLXN3b3JkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKTtcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21iYXQtY2xvc2UtYnRuJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtY29tYmF0LWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHNwZWVkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVlZC1idG4nKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3BlZWRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc3BlZWQnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY3VycmVudFNwZWVkID0gMTtcclxuICAgICAgICBsZXQgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgZ3VpbGQgZ3VpZGVcclxuICAgICAgICB0aGlzLmluaXRHdWlsZEd1aWRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGxlIG1vZGFsXHJcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXByZW5kcmUgbGEgdmlkw6lvIGRlIGJhY2tncm91bmRcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lQmFja2dyb3VuZFZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBjb21iYXQtYWN0aXZlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbWJhdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgYXZlYyBFc2NhcGVcclxuICAgICAgICBjb25zdCBlc2NhcGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGVuIGNsaXF1YW50IHN1ciBsJ292ZXJsYXlcclxuICAgICAgICBtb2RhbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb250csO0bGVzIGRlIHZpdGVzc2UgYW3DqWxpb3LDqXNcclxuICAgICAgICBzcGVlZEJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcGVlZEJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNwZWVkID0gcGFyc2VGbG9hdChidG4uZGF0YXNldC5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNwZWVkU3Bhbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTcGVlZFNwYW4udGV4dENvbnRlbnQgPSBgeCR7Y3VycmVudFNwZWVkfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlIGR1IGd1aWxkIGd1aWRlIHN1ciBsYSB2aXRlc3NlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVlZENvbW1lbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAuNTogXCJUcsOocyBiaWVuICEgUHJlbm9ucyBsZSB0ZW1wcyBkJ2FuYWx5c2VyIGNoYXF1ZSBtb3V2ZW1lbnQuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICAxOiBcIlZpdGVzc2Ugbm9ybWFsZSwgcGFyZmFpdCBwb3VyIGJpZW4gc3VpdnJlIGwnYWN0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICAyOiBcIk9uIGFjY8OpbMOocmUgdW4gcGV1ICEgR2FyZGV6IGxlcyB5ZXV4IG91dmVydHMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICA1OiBcIsOHYSB2YSB2aXRlIG1haW50ZW5hbnQgISBDb25jZW50cmF0aW9uIG1heGltdW0gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwOiBcIk1vZGUgw6ljbGFpciBhY3RpdsOpICEgQmxpbmsgZXQgdm91cyByYXRleiB0b3V0ICFcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoc3BlZWRDb21tZW50c1tjdXJyZW50U3BlZWRdIHx8IFwiVml0ZXNzZSBhanVzdMOpZSAhXCIsICfimqEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn46uIFZpdGVzc2UgY2hhbmfDqWU6JywgY3VycmVudFNwZWVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpbWFycmVyIGxlIGNvbWJhdFxyXG4gICAgICAgIHN0YXJ0QnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoXCJMZSBjb21iYXQgY29tbWVuY2UgISBRdWUgbGUgbWVpbGxldXIgZ2FnbmUgIVwiLCAn4pqU77iPJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21iYXRBbmltYXRpb24obWF0Y2hEYXRhLmV2ZW50cywgY3VycmVudFNwZWVkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcmVkb1wiPjwvaT4gUmVqb3VlciBsZSBjb21iYXQnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gR1VJTEQgR1VJREUgU1lTVEVNIEFNw4lMSU9Sw4kgPT09PT09PT09PT09PT09XHJcbiAgICBpbml0R3VpbGRHdWlkZSgpIHtcclxuICAgICAgICAvLyBMaW1pdGVyIGxlIG5vbWJyZSBkZSB0ZW50YXRpdmVzIHBvdXIgw6l2aXRlciBsZXMgYm91Y2xlcyBpbmZpbmllc1xyXG4gICAgICAgIHRoaXMuZ3VpbGRHdWlkZUluaXRBdHRlbXB0cysrO1xyXG4gICAgICAgIGlmICh0aGlzLmd1aWxkR3VpZGVJbml0QXR0ZW1wdHMgPiA1MCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfj7AgQXJyw6p0IGRlcyB0ZW50YXRpdmVzIGRcXCdpbml0aWFsaXNhdGlvbiBkdSBHdWlsZCBHdWlkZSBhcHLDqHMgNTAgZXNzYWlzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWNhdGlvbiBkZSBsJ2V4aXN0ZW5jZSBkZSBsJ8OpbMOpbWVudCBhdmFudCBpbml0aWFsaXNhdGlvblxyXG4gICAgICAgIGNvbnN0IGd1aWxkR3VpZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWxkLWd1aWRlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmICghZ3VpbGRHdWlkZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCfj7AgR3VpbGQgR3VpZGUgY29udGFpbmVyIG5vbiB0cm91dsOpICh0ZW50YXRpdmUgJHt0aGlzLmd1aWxkR3VpZGVJbml0QXR0ZW1wdHN9LzUwKSwgaW5pdGlhbGlzYXRpb24gZGlmZsOpcsOpZWApO1xyXG4gICAgICAgICAgICAvLyBSw6llc3NheWVyIGFwcsOocyB1biBjb3VydCBkw6lsYWkgc2kgbCfDqWzDqW1lbnQgbidleGlzdGUgcGFzIGVuY29yZVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdEd1aWxkR3VpZGUoKSwgMTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygn8J+PsCBHdWlsZCBHdWlkZSBpbml0aWFsaXPDqSBhdmVjIHN1Y2PDqHMnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXNlciBsZXMgY29tbWVudGFpcmVzIGR1IGd1aWRlIChpbWFnZXMgZMOpasOgIGluaXRpYWxpc8OpZXMgZGFucyBsZSBjb25zdHJ1Y3RldXIpXHJcbiAgICAgICAgdGhpcy5ndWlsZEd1aWRlQ29tbWVudHMgPSBbXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlcyBkZSBkw6lidXRcclxuICAgICAgICAgICAgXCJNZXMgY2hhbXBpb25zLCBsZSBjb21iYXQgdmEgY29tbWVuY2VyICFcIixcclxuICAgICAgICAgICAgXCJBbmFseXNvbnMgbGVzIGZvcmNlcyBlbiBwcsOpc2VuY2UuLi5cIixcclxuICAgICAgICAgICAgXCJRdWUgbGEgc3RyYXTDqWdpZSBsJ2VtcG9ydGUgc3VyIGxhIGZvcmNlIGJydXRlICFcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlcyBkJ2FjdGlvblxyXG4gICAgICAgICAgICBcIkV4Y2VsbGVudGUgYXR0YXF1ZSAhIEwnYWR2ZXJzYWlyZSByZWN1bGUgIVwiLFxyXG4gICAgICAgICAgICBcIlVuZSBkw6lmZW5zZSBleGVtcGxhaXJlICEgQmllbiBqb3XDqSAhXCIsXHJcbiAgICAgICAgICAgIFwiQXR0ZW50aW9uICEgQ2V0dGUgYXR0YXF1ZSBzZW1ibGUgY3JpdGlxdWUgIVwiLFxyXG4gICAgICAgICAgICBcIk1hZ25pZmlxdWUgY29vcmRpbmF0aW9uIGQnw6lxdWlwZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTGEgbWFnaWUgb3DDqHJlICEgTCdhdmFudGFnZSBjaGFuZ2UgZGUgY2FtcCAhXCIsXHJcbiAgICAgICAgICAgIFwiUXVlbCByZXRvdXJuZW1lbnQgZGUgc2l0dWF0aW9uICFcIixcclxuICAgICAgICAgICAgXCJMZXMgc29pbnMgYXJyaXZlbnQgw6AgdGVtcHMgIVwiLFxyXG4gICAgICAgICAgICBcIlVuZSBzdHJhdMOpZ2llIHBheWFudGUgIVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29tbWVudGFpcmVzIGQnYXZhbnRhZ2VcclxuICAgICAgICAgICAgXCJCZWwgYXZhbnRhZ2UgcG91ciBsJ8OpcXVpcGUgYmxldWUgIVwiLFxyXG4gICAgICAgICAgICBcIkwnw6lxdWlwZSByb3VnZSBwcmVuZCBsJ2FzY2VuZGFudCAhXCIsXHJcbiAgICAgICAgICAgIFwiTCfDqXF1aWxpYnJlIGRlcyBmb3JjZXMgYmFzY3VsZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTGEgdmljdG9pcmUgc2UgZGVzc2luZSAhXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgY3JpdGlxdWVzXHJcbiAgICAgICAgICAgIFwiQ291cCBjcml0aXF1ZSAhIFF1ZWwgaW1wYWN0ICFcIixcclxuICAgICAgICAgICAgXCJVbmUgYmxlc3N1cmUgZ3JhdmUgISBMYSBzaXR1YXRpb24gZGV2aWVudCBjcml0aXF1ZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTCdpc3N1ZSBkdSBjb21iYXQgc2Ugam91ZSBtYWludGVuYW50ICFcIixcclxuICAgICAgICAgICAgXCJEZXJuacOocmUgY2hhbmNlIHBvdXIgcmVudmVyc2VyIGxhIHZhcGV1ciAhXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRDb29sZG93biA9IDIwMDA7IC8vIDIgc2Vjb25kZXMgZW50cmUgbGVzIGNvbW1lbnRhaXJlc1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRHdWlsZEltYWdlKCkge1xyXG4gICAgICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIGltYWdlcyBzb250IGluaXRpYWxpc8OpZXNcclxuICAgICAgICBpZiAoIXRoaXMuZ3VpbGRJbWFnZXMgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5ndWlsZEltYWdlcykgfHwgdGhpcy5ndWlsZEltYWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbWFnZXMgZHUgZ3VpbGQgZ3VpZGUgbm9uIGluaXRpYWxpc8OpZXMsIHV0aWxpc2F0aW9uIGRlIGxcXCdpbWFnZSBwYXIgZMOpZmF1dCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gJy9pbWFnZXMvZ3VpbGQxLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBsJ2luZGV4XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRHdWlsZEltYWdlSW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmd1aWxkSW1hZ2VzW3RoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZUluZGV4ID0gKHRoaXMuY3VycmVudEd1aWxkSW1hZ2VJbmRleCArIDEpICUgdGhpcy5ndWlsZEltYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlIHx8ICcvaW1hZ2VzL2d1aWxkMS5wbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHdWlsZEd1aWRlQ29tbWVudCh0ZXh0LCBlbW9qaSA9ICfwn5KsJykge1xyXG4gICAgICAgIGNvbnN0IGd1aWxkR3VpZGVBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3VpbGQtZ3VpZGUtYXZhdGFyIGltZycpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRhcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWxkLWd1aWRlLWNvbW1lbnRhcnknKTtcclxuICAgICAgICBjb25zdCBjb21tZW50YXJ5QnViYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRhcnktYnViYmxlIHAnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpY2F0aW9ucyByb2J1c3RlcyBhdmFudCBtYW5pcHVsYXRpb24gRE9NXHJcbiAgICAgICAgaWYgKCFndWlsZEd1aWRlQXZhdGFyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+PsCBHdWlsZCBndWlkZSBhdmF0YXIgbm9uIHRyb3V2w6knKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWNvbW1lbnRhcnlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+PsCBHdWlsZCBndWlkZSBjb21tZW50YXJ5IGVsZW1lbnQgbm9uIHRyb3V2w6knKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWNvbW1lbnRhcnlCdWJibGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn4+wIEd1aWxkIGd1aWRlIGNvbW1lbnRhcnkgYnViYmxlIG5vbiB0cm91dsOpIC0gdGVudGF0aXZlIGRlIGNyw6lhdGlvbicpO1xyXG4gICAgICAgICAgICAvLyBFc3NheWVyIGRlIGNyw6llciBsJ8OpbMOpbWVudCBtYW5xdWFudFxyXG4gICAgICAgICAgICBjb25zdCBidWJibGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGFyeS1idWJibGUnKTtcclxuICAgICAgICAgICAgaWYgKGJ1YmJsZUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICBidWJibGVDb250YWluZXIuYXBwZW5kQ2hpbGQocEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0cnkgYXZlYyBsZSBub3V2ZWwgw6lsw6ltZW50XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd0d1aWxkR3VpZGVDb21tZW50KHRleHQsIGVtb2ppKSwgNTApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn4+wIENvbnRlbmV1ciBjb21tZW50YXJ5LWJ1YmJsZSBub24gdHJvdXbDqSAtIGFiYW5kb24nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGFuZ2VyIGwnaW1hZ2UgZHUgZ3VpbGQgZ3VpZGUgw6AgY2hhcXVlIG5vdXZlYXUgdGV4dGVcclxuICAgICAgICBjb25zdCBuZXh0SW1hZ2UgPSB0aGlzLmdldE5leHRHdWlsZEltYWdlKCk7XHJcbiAgICAgICAgaWYgKG5leHRJbWFnZSAmJiBndWlsZEd1aWRlQXZhdGFyKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBndWlsZEd1aWRlQXZhdGFyLnNyYyA9IG5leHRJbWFnZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYW5nZW1lbnQgZFxcJ2ltYWdlIGR1IGd1aWRlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSB0ZXh0ZSBhdmVjIHByb3RlY3Rpb24gc3VwcGzDqW1lbnRhaXJlXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnRhcnlCdWJibGUgJiYgdHlwZW9mIGNvbW1lbnRhcnlCdWJibGUudGV4dENvbnRlbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50YXJ5QnViYmxlLnRleHRDb250ZW50ID0gYCR7ZW1vaml9ICR7dGV4dH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIGR1IHRleHRlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsZSBjb21tZW50YWlyZSBhdmVjIGFuaW1hdGlvblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tZW50YXJ5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudGFyeUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDYWNoZXIgYXByw6hzIDQgc2Vjb25kZXNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50YXJ5RWxlbWVudCAmJiBjb21tZW50YXJ5RWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudGFyeUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2FuaW1hdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5ej77iPIEd1aWxkIEd1aWRlOicsIHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUd1aWxkQ29tbWVudCh0eXBlID0gJ2FjdGlvbicpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RDb21tZW50VGltZSA8IHRoaXMuY29tbWVudENvb2xkb3duKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBQYXMgZGUgY29tbWVudGFpcmUgc2kgdHJvcCByw6ljZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb21tZW50cztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWR2YW50YWdlJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsIGF2YW50YWdlIHBvdXIgY2V0dGUgw6lxdWlwZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMJ2FzY2VuZGFudCBzZSBkZXNzaW5lICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlVuZSBzdHJhdMOpZ2llIHBheWFudGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTCfDqXF1aWxpYnJlIGJhc2N1bGUgIVwiXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NyaXRpY2FsJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXR0ZW50aW9uICEgQ2V0dGUgYXR0YXF1ZSBwZXV0IMOqdHJlIGNyaXRpcXVlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNvdXAgcHVpc3NhbnQgZW4gcHLDqXBhcmF0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlVuZSBhdHRhcXVlIGTDqWNpc2l2ZSBhcHByb2NoZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNb21lbnQgY3JpdGlxdWUgZHUgY29tYmF0ICFcIlxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTGVzIHNvaW5zIGFycml2ZW50IMOgIHRlbXBzICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2VsbGVudGUgcsOpY3Vww6lyYXRpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGEgbWFnaWUgY3VyYXRpdmUgb3DDqHJlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlJldG91ciBlbiBmb3JjZSAhXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiRXhjZWxsZW50ZSBtYW7Fk3V2cmUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWFnbmlmaXF1ZSBjb29yZGluYXRpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUXVlbGxlIHRlY2huaXF1ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCaWVuIGpvdcOpICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkwnYWN0aW9uIHMnaW50ZW5zaWZpZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZSBjb21iYXQgYmF0IHNvbiBwbGVpbiAhXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRUaW1lID0gbm93O1xyXG4gICAgICAgIHJldHVybiBjb21tZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21tZW50cy5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5Q29tYmF0QW5pbWF0aW9uKGV2ZW50cywgc3BlZWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCBjZW50ZXJBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWFuaW1hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWluZm8nKTtcclxuICAgICAgICBjb25zdCBlbmVteUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktaW5mby1oZWFkZXInKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBCYXNlIGRlIHRlbXBzIGFkYXB0w6llIMOgIGxhIHZpdGVzc2VcclxuICAgICAgICBjb25zdCBiYXNlRGVsYXkgPSAxMDAwIC8gTWF0aC5tYXgoc3BlZWQsIDAuNSk7IC8vIE1pbmltdW0gMC41IHBvdXIgw6l2aXRlciBsZXMgdml0ZXNzZXMgdHJvcCBsZW50ZXNcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IE1hdGgubWF4KGJhc2VEZWxheSAqIDAuOCwgMjAwKTsgLy8gTWluaW11bSAyMDBtc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn46uIEFuaW1hdGlvbiBhdmVjIHZpdGVzc2UgeCR7c3BlZWR9LCBkw6lsYWk6ICR7YW5pbWF0aW9uRGVsYXl9bXNgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZSBpbml0aWFsIGR1IGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoXCJMZSBjb21iYXQgY29tbWVuY2UgISBPYnNlcnZleiBiaWVuIGNoYXF1ZSBtb3V2ZW1lbnQgIVwiLCAn4pqU77iPJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgZHluYW1pcXVlcyBkdSBndWlsZCBndWlkZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZEd1aWxkR3VpZGVDb21tZW50YXJ5KGV2ZW50LCBpLCBldmVudHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFuaW1lciBzZWxvbiBsZSB0eXBlIGQnw6l2w6luZW1lbnRcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlRXZlbnQoZXZlbnQsIGNlbnRlckFuaW1hdGlvbiwgcGxheWVySW5mbywgZW5lbXlJbmZvKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgZGVzIGFjdGlvbnMgYWzDqWF0b2lyZXMgcG91ciBwbHVzIGRlIGR5bmFtaXNtZVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYWN0aW9uID09PSAnQVRUQUNLJyB8fCBldmVudC5hY3Rpb24gPT09ICdST1VORF9TVEFSVCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIDMwJSBkZSBjaGFuY2UgZCdhdm9pciB1bmUgYWN0aW9uIGTDqWZlbnNpdmUvc29pbiBhbMOpYXRvaXJlXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoYW5pbWF0aW9uRGVsYXkgKiAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUFjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnSEVBTCcgOiAnREVGRU5TRSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uKHJhbmRvbUFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudGFpcmUgc3VyIGwnYWN0aW9uIGFsw6lhdG9pcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db21tZW50ID0gdGhpcy5nZXRSYW5kb21HdWlsZENvbW1lbnQocmFuZG9tQWN0aW9uID09PSAnSEVBTCcgPyAnaGVhbCcgOiAnYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbUNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQocmFuZG9tQ29tbWVudCwgcmFuZG9tQWN0aW9uID09PSAnSEVBTCcgPyAn8J+SmicgOiAn8J+boe+4jycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXR0ZW5kcmUgc2Vsb24gbGEgdml0ZXNzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGFuaW1hdGlvbkRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGZpbmFsZVxyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGV2ZW50cy5maW5kKGUgPT4gZS5hY3Rpb24gPT09ICdWSUNUT1JZJyk7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dHdWlsZEd1aWRlQ29tbWVudChcIkxlIGNvbWJhdCB0b3VjaGUgw6Agc2EgZmluICEgUXVpIGwnZW1wb3J0ZXJhID9cIiwgJ/Cfj4YnKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlVmljdG9yeSh3aW5uZXIsIGNlbnRlckFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRHdWlsZEd1aWRlQ29tbWVudGFyeShldmVudCwgZXZlbnRJbmRleCwgdG90YWxFdmVudHMpIHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVtb2ppID0gJ/CfkqwnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlcyBiYXPDqXMgc3VyIGwnYWN0aW9uXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnQ09NQkFUX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBcIlZvaWNpIG5vcyBjb21iYXR0YW50cyAhIFF1ZSBsZSBzcGVjdGFjbGUgY29tbWVuY2UgIVwiO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+OrSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdST1VORF9TVEFSVCc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gYFJvdW5kICR7ZXZlbnRJbmRleCArIDF9ICEgTCdpbnRlbnNpdMOpIG1vbnRlICFgO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+UpSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjcpIHsgLy8gNzAlIGRlIGNoYW5jZSBkZSBjb21tZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tDb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdHRlbnRpb24gISBDZXR0ZSBhdHRhcXVlIHBldXQgw6p0cmUgY3JpdGlxdWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV4Y2VsbGVudGUgdGVjaG5pcXVlICEgTCdhZHZlcnNhaXJlIHJlY3VsZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5lIGZyYXBwZSBwdWlzc2FudGUgISDDh2EgdmEgZmFpcmUgbWFsICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYWduaWZpcXVlIGNvb3JkaW5hdGlvbiBkJ8OpcXVpcGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkwnYWN0aW9uIHMnaW50ZW5zaWZpZSAhXCJcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBhdHRhY2tDb21tZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdHRhY2tDb21tZW50cy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICBlbW9qaSA9ICfimpTvuI8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVEVBTV9QUkVTRU5UQVRJT04nOlxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfDiXF1aXBlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ID0gYCR7ZXZlbnQudGFyZ2V0X25hbWV9IGVudHJlIGVuIGxpY2UgISBRdWVsbGUgcHVpc3NhbmNlICFgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppID0gJ/CfkaUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVklDVE9SWSc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gXCJFdCB2b2lsw6AgISBMZSBjb21iYXQgZXN0IHRlcm1pbsOpICEgUXVlbGxlIGJhdGFpbGxlIMOpcGlxdWUgIVwiO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+Phic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29tbWVudGFpcmVzIGJhc8OpcyBzdXIgbGEgcHJvZ3Jlc3Npb25cclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50SW5kZXggLyB0b3RhbEV2ZW50cztcclxuICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMC4yKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gdGhpcy5nZXRSYW5kb21HdWlsZENvbW1lbnQoJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+RgCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSB0aGlzLmdldFJhbmRvbUd1aWxkQ29tbWVudCgnYWR2YW50YWdlJyk7XHJcbiAgICAgICAgICAgICAgICBlbW9qaSA9ICfwn5KqJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDAuOCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudCA9IHRoaXMuZ2V0UmFuZG9tR3VpbGRDb21tZW50KCdjcml0aWNhbCcpO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn4pqhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoY29tbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dHdWlsZEd1aWRlQ29tbWVudChjb21tZW50LCBlbW9qaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVSYW5kb21DaGFyYWN0ZXJBY3Rpb24oYWN0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEFjdGlvbiBhbMOpYXRvaXJlIHN1ciB1biBwZXJzb25uYWdlIGFsw6lhdG9pcmVcclxuICAgICAgICBjb25zdCB0ZWFtcyA9IFsncGxheWVyJywgJ2VuZW15J107XHJcbiAgICAgICAgY29uc3QgcmFuZG9tVGVhbSA9IHRlYW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlYW1zLmxlbmd0aCldO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYXJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyYW5kb21UZWFtfS1jaGFyLSR7cmFuZG9tQ2hhckluZGV4fWApO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmFuZG9tVGVhbX0tZWZmZWN0cy0ke3JhbmRvbUNoYXJJbmRleH1gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2hhcmFjdGVyRWxlbWVudCAmJiBlZmZlY3RzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoYXJhY3Rlci1hY3RpbmcnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09ICdIRUFMJykge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0SFRNTCA9ICc8ZGl2IGNsYXNzPVwiaGVhbC1lZmZlY3RcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0Q2xhc3MgPSAnZWZmZWN0LWhlYWwnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdERUZFTlNFJykge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0SFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGVmZW5zZS1lZmZlY3RcIj48aSBjbGFzcz1cImZhcyBmYS1zaGllbGRcIj48L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGVmZmVjdENsYXNzID0gJ2VmZmVjdC1kZWZlbnNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuaW5uZXJIVE1MID0gZWZmZWN0SFRNTDtcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlZmZlY3RDbGFzcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDQwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYXJhY3Rlci1hY3RpbmcnKTtcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlZmZlY3RDbGFzcyk7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlRXZlbnQoZXZlbnQsIGNlbnRlckVsZW1lbnQsIHBsYXllckluZm8sIGVuZW15SW5mbykge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGV2ZW50LmFjdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdDT01CQVRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlQ29tYmF0U3RhcnQoY2VudGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdURUFNX1BSRVNFTlRBVElPTic6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVUZWFtUHJlc2VudGF0aW9uKGV2ZW50LCBwbGF5ZXJJbmZvLCBlbmVteUluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnUk9VTkRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUm91bmRTdGFydChjZW50ZXJFbGVtZW50LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICBjYXNlICdIRUFMJzpcclxuICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVDaGFyYWN0ZXJBY3Rpb24oZXZlbnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdST1VORF9FTkQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUm91bmRFbmQoY2VudGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdWSUNUT1JZJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVZpY3RvcnkoZXZlbnQsIGNlbnRlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVDb21iYXRTdGFydChjZW50ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtc3RhcnQtYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsby1lZmZlY3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtdGV4dFwiPkTDqWJ1dCBkdSBDb21iYXQhPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWdsb3cnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1nbG93Jyk7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlVGVhbVByZXNlbnRhdGlvbihldmVudCwgcGxheWVySW5mbywgZW5lbXlJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgaXNUZWFtQSA9IGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfDiXF1aXBlIEEnKSB8fCBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWluZm8gLnRlYW0tbmFtZScpPy50ZXh0Q29udGVudCB8fCAnJyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGlzVGVhbUEgPyBwbGF5ZXJJbmZvIDogZW5lbXlJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVhbS1oaWdobGlnaHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDgwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0ZWFtLWhpZ2hsaWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVSb3VuZFN0YXJ0KGNlbnRlckVsZW1lbnQsIGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFjZW50ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+OrCDDiWzDqW1lbnQgY2VudHJhbCBub24gdHJvdXbDqSBwb3VyIGxcXCdhbmltYXRpb24gZGUgZMOpYnV0IGRlIHJvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmQtc3RhcnQtbW9kZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kLWdpcmxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvZ3VpbGRHdWlkZS5qcGdcIiBhbHQ9XCJBbm5vbmNldXJcIiBjbGFzcz1cInJvdW5kLWFubm91bmNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlZWNoLWJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kLXRleHRcIj4ke2V2ZW50LnRhcmdldF9uYW1lIHx8ICdOb3V2ZWF1IFJvdW5kICEnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtcm91bmQtc3RhcnQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTIwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtcm91bmQtc3RhcnQnKTtcclxuICAgICAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYW5pbWF0aW9uIGRlIGTDqWJ1dCBkZSByb3VuZDonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVDaGFyYWN0ZXJBY3Rpb24oZXZlbnQsIGFjdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBBbmltYXRpb24gY2VudHJhbGUgZCdhY3Rpb25cclxuICAgICAgICBhd2FpdCB0aGlzLnNob3dDZW50cmFsQW5pbWF0aW9uKGFjdGlvblR5cGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIHF1ZWwgcGVyc29ubmFnZSBhZ2l0IGJhc8OpIHN1ciBsZXMgZG9ubsOpZXMgZGUgbCfDqXbDqW5lbWVudFxyXG4gICAgICAgIGxldCB0ZWFtVHlwZSwgY2hhckluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVzc2F5ZXIgZGUgZMOpdGVybWluZXIgbCfDqXF1aXBlIGV0IGxlIHBlcnNvbm5hZ2UgYmFzw6kgc3VyIGxlcyBkb25uw6llcyBkZSBsJ8OpdsOpbmVtZW50XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldF9uYW1lICYmIGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfwn5S1JykpIHtcclxuICAgICAgICAgICAgdGVhbVR5cGUgPSAncGxheWVyJztcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldF9uYW1lICYmIGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfwn5S0JykpIHtcclxuICAgICAgICAgICAgdGVhbVR5cGUgPSAnZW5lbXknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGFsw6lhdG9pcmVcclxuICAgICAgICAgICAgdGVhbVR5cGUgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ3BsYXllcicgOiAnZW5lbXknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjaGFySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGVhbVR5cGV9LWNoYXItJHtjaGFySW5kZXh9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGR1IHBlcnNvbm5hZ2Ugc2Vsb24gbCdhY3Rpb25cclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXR0YWNraW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFja2luZycpLCA4MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSEVBTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFsaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWxpbmcnKSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdERUZFTlNFJzpcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlZmVuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkZWZlbmRpbmcnKSwgNjAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93Q2VudHJhbEFuaW1hdGlvbihhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21iYXQtYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb25FbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb25IVE1MID0gJyc7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkNsYXNzID0gJyc7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrVHlwZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtc3dvcmRcIj48L2k+JywgY2xhc3M6ICdzd29yZC1hdHRhY2snLCBlbW9qaTogJ+KalO+4jycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1ib3ctYXJyb3dcIj48L2k+JywgY2xhc3M6ICdhcnJvdy1hdHRhY2snLCBlbW9qaTogJ/Cfj7knIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlzdC1yYWlzZWRcIj48L2k+JywgY2xhc3M6ICdwdW5jaC1hdHRhY2snLCBlbW9qaTogJ/CfkYonIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tUeXBlID0gYXR0YWNrVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrVHlwZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25IVE1MID0gYXR0YWNrVHlwZS5odG1sO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MgPSBhdHRhY2tUeXBlLmNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnTUFHSUMnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFnaWNUeXBlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1ib2x0XCI+PC9pPicsIGNsYXNzOiAnbGlnaHRuaW5nLWF0dGFjaycsIGVtb2ppOiAn4pqhJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpcmVcIj48L2k+JywgY2xhc3M6ICdmaXJlLWF0dGFjaycsIGVtb2ppOiAn8J+UpScgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1zbm93Zmxha2VcIj48L2k+JywgY2xhc3M6ICdpY2UtYXR0YWNrJywgZW1vamk6ICfinYTvuI8nIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWdpY1R5cGUgPSBtYWdpY1R5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hZ2ljVHlwZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25IVE1MID0gbWFnaWNUeXBlLmh0bWw7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DbGFzcyA9IG1hZ2ljVHlwZS5jbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ0hFQUwnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhbFR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLWhlYXJ0XCI+PC9pPicsIGNsYXNzOiAnaGVhcnQtaGVhbCcsIGVtb2ppOiAn8J+SmicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1zZWVkbGluZ1wiPjwvaT4nLCBjbGFzczogJ25hdHVyZS1oZWFsJywgZW1vamk6ICfwn4yxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPicsIGNsYXNzOiAncG90aW9uLWhlYWwnLCBlbW9qaTogJ/Cfp6onIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFsVHlwZSA9IGhlYWxUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWFsVHlwZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25IVE1MID0gaGVhbFR5cGUuaHRtbDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzID0gaGVhbFR5cGUuY2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdERUZFTlNFJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmVuc2VUeXBlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8aSBjbGFzcz1cImZhcyBmYS1zaGllbGQtYWx0XCI+PC9pPicsIGNsYXNzOiAnc2hpZWxkLWJsb2NrJywgZW1vamk6ICfwn5uh77iPJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaHRtbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpc3QtcmFpc2VkXCI+PC9pPicsIGNsYXNzOiAnY291bnRlci1hdHRhY2snLCBlbW9qaTogJ/CfpJwnIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZlbnNlVHlwZSA9IGRlZmVuc2VUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWZlbnNlVHlwZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25IVE1MID0gZGVmZW5zZVR5cGUuaHRtbDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzID0gZGVmZW5zZVR5cGUuY2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uSFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DbGFzcyA9ICdkZWZhdWx0LWFjdGlvbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZmZpY2hlciBsJ2FuaW1hdGlvbiBhdmVjIHByb3RlY3Rpb25cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWFuaW1hdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+OrCDDiWzDqW1lbnQgZFxcJ2FuaW1hdGlvbiBub24gdHJvdXbDqScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gYW5pbWF0aW9uSFRNTDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSBgY29tYmF0LWFuaW1hdGlvbiAke2FuaW1hdGlvbkNsYXNzfSBzaG93YDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGRlIGxcXCdhbmltYXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoNjAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYWNoZXIgbCdhbmltYXRpb24gYXZlYyBwcm90ZWN0aW9uXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiBkZXMgY2xhc3NlczonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMjAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnY29tYmF0LWFuaW1hdGlvbic7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25FbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgbmV0dG95YWdlIGRlIGxcXCdhbmltYXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlUm91bmRFbmQoY2VudGVyRWxlbWVudCkge1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmQtZW5kLWFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJnbGFzcy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaG91cmdsYXNzLWVuZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZC10ZXh0XCI+RmluIGR1IHRvdXI8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoODAwKTtcclxuICAgICAgICBcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZmFkZScpO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYW5pbWF0ZVZpY3RvcnkoZXZlbnQsIGNlbnRlckVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBpc1BsYXllclZpY3RvcnkgPSBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbS1pbmZvLWJvdHRvbScpPy50ZXh0Q29udGVudCB8fCAnJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LW1vZGVybiAke2lzUGxheWVyVmljdG9yeSA/ICdwbGF5ZXItdmljdG9yeScgOiAnZW5lbXktdmljdG9yeSd9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtYW5ub3VuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGxhdGVhdXhNZWRpZXZhbC9ndWlsZEd1aWRlLmpwZ1wiIGFsdD1cIkd1aWxkIEd1aWRlXCIgY2xhc3M9XCJndWlsZC1ndWlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LXNwZWVjaC1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpY3RvcnktYW5ub3VuY2VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2lzUGxheWVyVmljdG9yeSA/ICdPecOpIE95w6kgISBWb3VzIGF2ZXogcmVtcG9ydMOpIGNldHRlIHZpY3RvaXJlICEnIDogJ095w6kgT3nDqSAhIFZvdXMgYXZleiBzdWJpIHVuZSBkw6lmYWl0ZS4uLid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1lZmZlY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc1BsYXllclZpY3RvcnkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb25mZXR0aVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJzcGFya2xlc1wiPjwvZGl2PicgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkZWZlYXQtc21va2VcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXZpY3RvcnktbW9kZXJuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgyNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzbGVlcChtcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgUkVDQVAgREUgQ09NQkFUID09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgc2hvd01hdGNoUmVjYXAobWF0Y2hJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbWF0Y2htYWtpbmcvbWF0Y2gvJHttYXRjaElkfS9ldmVudHNgKTtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU1hdGNoUmVjYXBNb2RhbChtYXRjaERhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHJlY2FwOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHJlY2FwIGR1IGNvbWJhdCcsICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5TWF0Y2hSZWNhcE1vZGFsKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIC8vIENyw6llciBsZSBjb250ZW51IGR1IG1vZGFsXHJcbiAgICAgICAgY29uc3QgbW9kYWxIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiIGlkPVwibWF0Y2gtcmVjYXAtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IG1hdGNoLXJlY2FwLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+PGkgY2xhc3M9XCJmYXMgZmEtc2Nyb2xsXCI+PC9pPiBSZWNhcCBkdSBDb21iYXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBpZD1cIm1vZGFsLWNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbXMtb3ZlcnZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1jYXJkICR7bWF0Y2hEYXRhLndpbm5lcl90ZWFtID09PSBtYXRjaERhdGEudGVhbV9hLm5hbWUgPyAnd2lubmVyJyA6ICdsb3Nlcid9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW5hbWVcIj4ke21hdGNoRGF0YS50ZWFtX2EubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9hLnBsYXllcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tbW1yXCI+JHttYXRjaERhdGEudGVhbV9hLm1tcn0gTU1SPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWF0Y2hEYXRhLndpbm5lcl90ZWFtID09PSBtYXRjaERhdGEudGVhbV9hLm5hbWUgPyAnPGRpdiBjbGFzcz1cInZpY3RvcnktYmFkZ2VcIj48aSBjbGFzcz1cImZhcyBmYS1jcm93blwiPjwvaT4gVklDVE9JUkU8L2Rpdj4nIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZzLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1jYXJkICR7bWF0Y2hEYXRhLndpbm5lcl90ZWFtID09PSBtYXRjaERhdGEudGVhbV9iLm5hbWUgPyAnd2lubmVyJyA6ICdsb3Nlcid9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW5hbWVcIj4ke21hdGNoRGF0YS50ZWFtX2IubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9iLnBsYXllcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tbW1yXCI+JHttYXRjaERhdGEudGVhbV9iLm1tcn0gTU1SPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWF0Y2hEYXRhLndpbm5lcl90ZWFtID09PSBtYXRjaERhdGEudGVhbV9iLm5hbWUgPyAnPGRpdiBjbGFzcz1cInZpY3RvcnktYmFkZ2VcIj48aSBjbGFzcz1cImZhcyBmYS1jcm93blwiPjwvaT4gVklDVE9JUkU8L2Rpdj4nIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ew6lidXQ6ICR7bWF0Y2hEYXRhLnN0YXJ0ZWRfYXQgfHwgJ04vQSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmxhZy1jaGVja2VyZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZpbjogJHttYXRjaERhdGEuZmluaXNoZWRfYXQgfHwgJ04vQSd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW5mby1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0YXR1dDogJHttYXRjaERhdGEuc3RhdHVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtZXZlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3M9XCJmYXMgZmEtbGlzdFwiPjwvaT4gRMOpcm91bGVtZW50IGR1IENvbWJhdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLXRpbWVsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdlbmVyYXRlRXZlbnRzSFRNTChtYXRjaERhdGEuZXZlbnRzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwibW9kYWwtZmVybWVyLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+IEZlcm1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwibW9kYWwtcGFydGFnZXItYnRuXCIgZGF0YS1tYXRjaC1pZD1cIiR7bWF0Y2hEYXRhLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hhcmVcIj48L2k+IFBhcnRhZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWpvdXRlciBsZSBtb2RhbCBhdSBET01cclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbW9kYWxIVE1MKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6ljdXDDqXJlciBsZXMgw6lsw6ltZW50cyBkdSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLXJlY2FwLW1vZGFsJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2xvc2UtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgZmVybWVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZlcm1lci1idG4nKTtcclxuICAgICAgICBjb25zdCBwYXJ0YWdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1wYXJ0YWdlci1idG4nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgcG91ciBmZXJtZXIgbGEgbW9kYWxcclxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gdGhpcy5jbG9zZU1hdGNoUmVjYXAoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgZW4gY2xpcXVhbnQgc3VyIGxhIGNyb2l4XHJcbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBlbiBjbGlxdWFudCBzdXIgbGUgYm91dG9uIFwiRmVybWVyXCJcclxuICAgICAgICBpZiAoZmVybWVyQnRuKSB7XHJcbiAgICAgICAgICAgIGZlcm1lckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXJ0YWdlciBsZSBtYXRjaFxyXG4gICAgICAgIGlmIChwYXJ0YWdlckJ0bikge1xyXG4gICAgICAgICAgICBwYXJ0YWdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSWQgPSBwYXJ0YWdlckJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF0Y2gtaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVNYXRjaFJlY2FwKG1hdGNoSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGVuIGNsaXF1YW50IHN1ciBsJ292ZXJsYXkgKGZvbmQgbm9pcilcclxuICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBhdmVjIGxhIHRvdWNoZSBFc2NhcGVcclxuICAgICAgICBjb25zdCBlc2NhcGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVFdmVudHNIVE1MKGV2ZW50cykge1xyXG4gICAgICAgIGxldCBldmVudHNIVE1MID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRDbGFzcyA9ICdldmVudC1pdGVtJztcclxuICAgICAgICAgICAgbGV0IGV2ZW50SWNvbiA9ICdmYXMgZmEtY2lyY2xlJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIETDqWZpbmlyIGwnaWPDtG5lIGV0IGxhIGNsYXNzZSBzZWxvbiBsZSB0eXBlIGQnYWN0aW9uXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDT01CQVRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtcGxheSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LXN0YXJ0JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RFQU1fUFJFU0VOVEFUSU9OJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXVzZXJzJztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtaW5mbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdST1VORF9TVEFSVCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1zd29yZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LXJvdW5kJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0FUVEFDSyc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1maXN0LXJhaXNlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWF0dGFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdERUZFTlNFJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXNoaWVsZC1hbHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1kZWZlbnNlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hFQUxJTkcnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtaGVhcnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1oZWFsJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1ZJQ1RPUlknOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtdHJvcGh5JztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtdmljdG9yeSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdNTVJfVVBEQVRFJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLWNoYXJ0LWxpbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1tbXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ09NQkFUX0VORCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1zdG9wJztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtZW5kJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1pbmZvJztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZvcm1hdGFnZSBzcMOpY2lhbCBwb3VyIGxlcyBjcml0aXF1ZXNcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzX2NyaXQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1jcml0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRm9ybWF0YWdlIGR1IG1vbnRhbnQgcydpbCBleGlzdGVcclxuICAgICAgICAgICAgbGV0IGFtb3VudFRleHQgPSAnJztcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFtb3VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50VGV4dCA9IGAgKCR7ZXZlbnQuYW1vdW50fSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBldmVudHNIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2V2ZW50Q2xhc3N9XCIgZGF0YS1ldmVudC1pbmRleD1cIiR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke2V2ZW50SWNvbn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldmVudC1hY3RvclwiPiR7ZXZlbnQuYWN0b3JfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV2ZW50LXRpbWVcIj4ke2V2ZW50LmNyZWF0ZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2V2ZW50LnRhcmdldF9uYW1lfSR7YW1vdW50VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZXZlbnQuaXNfY3JpdCA/ICcgPHNwYW4gY2xhc3M9XCJjcml0LWluZGljYXRvclwiPkNSSVRJUVVFITwvc3Bhbj4nIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50c0hUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNYXRjaFJlY2FwKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLXJlY2FwLW1vZGFsJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJhdHRsZWZpZWxkTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKTtcclxuICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgLy8gTmV0dG95ZXIgbCdpbnRlcnZhbGxlIGRlIGNvbW1lbnRhaXJlc1xyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50SW50ZXJ2YWwgPSBtb2RhbC5kYXRhc2V0LmNvbW1lbnRJbnRlcnZhbDtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnRJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwYXJzZUludChjb21tZW50SW50ZXJ2YWwpKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtb2RhbC5kYXRhc2V0LmNvbW1lbnRJbnRlcnZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXJyw6p0ZXIgbGVzIHZpZMOpb3MgZGUgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGZXJtZXIgbGUgbW9kYWxcclxuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlTWF0Y2hSZWNhcChtYXRjaElkKSB7XHJcbiAgICAgICAgLy8gQ29waWVyIGxlIGxpZW4gdmVycyBsZSBwcmVzc2UtcGFwaWVyXHJcbiAgICAgICAgY29uc3Qgc2hhcmVVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9tYXRjaC8ke21hdGNoSWR9L3JlY2FwYDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzaGFyZVVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0xpZW4gZGUgcGFydGFnZSBjb3Bpw6kgIScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbGEgY29waWUnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgcG91ciBsZXMgbmF2aWdhdGV1cnMgcGx1cyBhbmNpZW5zXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgdGV4dEFyZWEudmFsdWUgPSBzaGFyZVVybDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignTGllbiBkZSBwYXJ0YWdlIGNvcGnDqSAhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0VycmV1ciBsb3JzIGRlIGxhIGNvcGllJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFeHBvcnQgZ2xvYmFsIHBvdXIgbGVzIHRlc3RzXHJcbndpbmRvdy5HYW1lSW50ZXJmYWNlID0gR2FtZUludGVyZmFjZTtcclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQXR0ZW5kcmUgdW4gcGV1IHF1ZSBsZSBET00gc29pdCBjb21wbMOodGVtZW50IGNoYXJnw6lcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZUludGVyZmFjZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pbnRlcmZhY2UnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ8OJbMOpbWVudCBnYW1lLWludGVyZmFjZSB0cm91dsOpOicsIGdhbWVJbnRlcmZhY2VFbGVtZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChnYW1lSW50ZXJmYWNlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdhbWVJbnRlcmZhY2UgPSBuZXcgR2FtZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyBJbnRlcmZhY2UgZGUgamV1IFNhbnRvbnMgU2NyaXB0IFRhY3RpY3MgaW5pdGlhbGlzw6llJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5zdGFuY2UgY3LDqcOpZTonLCB3aW5kb3cuZ2FtZUludGVyZmFjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyDDiWzDqW1lbnQgLmdhbWUtaW50ZXJmYWNlIG5vbiB0cm91dsOpIGRhbnMgbGUgRE9NJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgbCdpbnN0YW5jZSBxdWFuZCBtw6ptZSBwb3VyIGxlcyBmb25jdGlvbnMgZ2xvYmFsZXNcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lSW50ZXJmYWNlID0gbmV3IEdhbWVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnN0YW5jZSBjcsOpw6llIHNhbnMgdsOpcmlmaWNhdGlvbiBET00nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdpbml0aWFsaXNhdGlvbiBkZSBsXFwnaW50ZXJmYWNlIGRlIGpldTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pOyIsIi8vID09PT09PT09PT09PT09PSBHVUlERSBERSBHVUlMREUgLSBTQU5UT05TIFNDUklQVCBUQUNUSUNTID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgR3VpbGRHdWlkZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHdWlsZEltYWdlID0gMTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ3dlbGNvbWUnO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VzZXJTdGF0dXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVHdWlkZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0SW1hZ2VSb3RhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwQXV0b0RpYWxvZ3VlKCk7IC8vIEZvbmN0aW9ubmFsaXTDqSBham91dMOpZSAtIGRpYWxvZ3VlIGF1dG9tYXRpcXVlXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnaW5pdGlhbGlzYXRpb24gZHUgZ3VpZGU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VzZXJTdGF0dXMoKSB7XHJcbiAgICAgICAgLy8gVXRpbGlzZXIgbGVzIGluZm9ybWF0aW9ucyBwYXNzw6llcyBkZXB1aXMgVHdpZ1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHdpbmRvdy51c2VySW5mby5pc0xvZ2dlZEluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHdpbmRvdy51c2VySW5mby51c2VybmFtZSB8fCAnSm91ZXVyJztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXQgdXRpbGlzYXRldXI6JywgdGhpcy5pc0xvZ2dlZEluID8gYENvbm5lY3TDqSAtICR7dGhpcy51c2VyTmFtZX1gIDogJ05vbiBjb25uZWN0w6knKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93LnVzZXJJbmZvIG5vbiBkaXNwb25pYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxhIHbDqXJpZmljYXRpb24gZHUgc3RhdHV0IHV0aWxpc2F0ZXVyOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR3VpZGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgY29uc3QgZ3VpZGVIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtY29udGFpbmVyXCIgaWQ9XCJndWlsZC1ndWlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWF2YXRhclwiIGlkPVwiZ3VpbGQtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZ3VpbGQxLnBuZ1wiIGFsdD1cIkd1aWRlIGRlIEd1aWxkZVwiIGlkPVwiZ3VpbGQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWRpYWxvZ3VlLWJveFwiIGlkPVwiZ3VpbGQtZGlhbG9ndWVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ3VlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ3VlLXRleHRcIiBpZD1cImRpYWxvZ3VlLXRleHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ3VlLWJ1dHRvbnNcIiBpZD1cImRpYWxvZ3VlLWJ1dHRvbnNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtY2xvc2VcIiBpZD1cImRpYWxvZ3VlLWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBndWlkZUhUTUwpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtYXZhdGFyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWxkLWRpYWxvZ3VlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLWNsb3NlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZSBHdWlsZCBHdWlkZSBlc3QgVE9VSk9VUlMgY2xpcXVhYmxlIC0gRm9yY2UgbGUgY2xpY1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+PsCBDbGljIHN1ciBHdWlsZCBHdWlkZSBkw6l0ZWN0w6khJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9ndWUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRydWUpOyAvLyBNb2RlIGNhcHR1cmUgcG91ciBwcmlvcml0w6lcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU3R5bGUgdmlzdWVsIHBvdXIgaW5kaXF1ZXIgcXVlIGMnZXN0IGNsaXF1YWJsZVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgIGF2YXRhci50aXRsZSA9ICdDbGlxdWV6IHBvdXIgcGFybGVyIGF1IEd1aWRlIGRlIEd1aWxkZSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEVmZmV0IHZpc3VlbCBhdSBzdXJ2b2xcclxuICAgICAgICAgICAgICAgIGF2YXRhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MgZWFzZSc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIEVsZW1lbnQgZ3VpbGQtYXZhdGFyIG5vbiB0cm91dsOpJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbG9zZUJ0bikge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZ3VlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTmUgZmVybWVyIHF1ZSBzaSBsZSBjbGljIGVzdCB2cmFpbWVudCDDoCBsJ2V4dMOpcmlldXIgRVQgcXVlIGNlIG4nZXN0IHBhcyB1biBib3V0b24gZHUgZGlhbG9ndWVcclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2d1ZUJveCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAhZGlhbG9ndWVCb3guY29udGFpbnMoZS50YXJnZXQpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICFhdmF0YXI/LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RpYWxvZ3VlLWJ0bicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZ3VlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2F0dGFjaGVtZW50IGRlcyDDqXbDqW5lbWVudHMgR3VpbGQgR3VpZGU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEltYWdlUm90YXRpb24oKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlhbG9ndWVTdGF0ZSAhPT0gJ3Jlc3BvbnNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEd1aWxkSW1hZ2UgPSAodGhpcy5jdXJyZW50R3VpbGRJbWFnZSAlIDMpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWxkLWltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gYGltYWdlcy9ndWlsZCR7dGhpcy5jdXJyZW50R3VpbGRJbWFnZX0ucG5nYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxhIHJvdGF0aW9uIGRcXCdpbWFnZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBBdXRvRGlhbG9ndWUoKSB7XHJcbiAgICAgICAgLy8gU3lzdMOobWUgZCdhdXRvLWxhbmNlbWVudCBVTklRVUVNRU5UIHBvdXIgbGVzIHV0aWxpc2F0ZXVycyBub24gY29ubmVjdMOpc1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIC8vIFByZW1pw6hyZSBhcHBhcml0aW9uIGF1dG9tYXRpcXVlIGFwcsOocyAyIHNlY29uZGVzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHsgLy8gRG91YmxlIHbDqXJpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2d1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFB1aXMgcsOpYXBwYXJpdGlvbiB0b3V0ZXMgbGVzIDMwIHNlY29uZGVzIHNpIHBhcyBjb25uZWN0w6lcclxuICAgICAgICAgICAgdGhpcy5hdXRvRGlhbG9ndWVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWxkLWRpYWxvZ3VlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbiAmJiAoIWRpYWxvZ3VlQm94IHx8IGRpYWxvZ3VlQm94LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2d1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAzMDAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBhcyBkZSB0aW1lciBwb3VyIGxlcyB1dGlsaXNhdGV1cnMgY29ubmVjdMOpcyAtIGlscyBkb2l2ZW50IGNsaXF1ZXIgbWFudWVsbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRpYWxvZ3VlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn4+wIE91dmVydHVyZSBkdSBkaWFsb2d1ZSBHdWlsZCBHdWlkZScpO1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2d1ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgICBpZiAoZGlhbG9ndWVCb3gpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ndWVCb3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dXZWxjb21lTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gRWxlbWVudCBndWlsZC1kaWFsb2d1ZSBub24gdHJvdXbDqScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnb3V2ZXJ0dXJlIGR1IGRpYWxvZ3VlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEaWFsb2d1ZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2d1ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgICBpZiAoZGlhbG9ndWVCb3gpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ndWVCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ3VlU3RhdGUgPSAnd2VsY29tZSc7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBTaSB1dGlsaXNhdGV1ciBub24gY29ubmVjdMOpLCByZXByZW5kcmUgbGUgdGltZXIgYXByw6hzIGZlcm1ldHVyZVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOZXR0b3llciBsJ2FuY2llbiB0aW1lclxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9EaWFsb2d1ZVRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvRGlhbG9ndWVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZMOpbWFycmVyIHVuIG5vdXZlYXUgdGltZXIgcG91ciAzMCBzZWNvbmRlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0RpYWxvZ3VlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHVpcyByZXZlbmlyIGF1IHRpbWVyIHLDqWd1bGllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwQXV0b0RpYWxvZ3VlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsYSBmZXJtZXR1cmUgZHUgZGlhbG9ndWU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93V2VsY29tZU1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLXRleHQnKTtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLWJ1dHRvbnMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGV4dEVsIHx8ICFidXR0b25zRWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJvbmpvdXIgbm9ibGUgw6l0cmFuZ2VyLCBiaWVudmVudWUgYXUgPHN0cm9uZz5TYW50b25zIFNjcmlwdCBUYWN0aWNzPC9zdHJvbmc+ICE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q3LDqWV6IHZvdHJlIMOpcXVpcGUgZGUgMyBow6lyb3MgZXQgYWZmcm9udGV6IGQnYXV0cmVzIGpvdWV1cnMgZGFucyBkZXMgY29tYmF0cyB0YWN0aXF1ZXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBvdXIgY29tbWVuY2VyIHZvdHJlIGF2ZW50dXJlIDo8L3A+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gcHJpbWFyeVwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0nL3JlZ2lzdGVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLXBsdXNcIj48L2k+IFMnaW5zY3JpcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuIHNlY29uZGFyeVwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0nL2xvZ2luJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT4gU2UgY29ubmVjdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8cD5Cb25qb3VyIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogJHt3aW5kb3cudXNlckluZm8udXNlcm5hbWVDb2xvciB8fCAnIzhiM2EzYSd9XCI+JHt0aGlzLnVzZXJOYW1lfTwvc3Ryb25nPiwgcXVlbGxlIGVzdCB2b3RyZSBkZW1hbmRlID88L3A+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dHYW1lcGxheUhlbHAoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1nYW1lcGFkXCI+PC9pPiBDb21tZW50IEpvdWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd0NoYXJhY3RlclJvbGVzKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlcnNcIj48L2k+IFLDtGxlcyBkZXMgUGVyc29ubmFnZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93VGVhbVN0cmF0ZWd5KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlc3NcIj48L2k+IFN0cmF0w6lnaWVzIGQnw4lxdWlwZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gZGVidWdcIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dEZWJ1Z01lbnUoKVwiIHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmNmI2YjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYnVnXCI+PC9pPiBEZWJ1ZyBPdXRpbHNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkZSBiaWVudmVudWU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93R2FtZXBsYXlIZWxwKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWwuaW5uZXJIVE1MID0gYDxwPkNob2lzaXNzZXogY2UgcXVlIHZvdXMgc291aGFpdGV6IGFwcHJlbmRyZSA6PC9wPmA7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1RlYW1DcmVhdGlvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+IENyw6llciB2b3RyZSDDiXF1aXBlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dGaW5kQmF0dGxlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+IFJlY2hlcmNoZXIgdW4gQ29tYmF0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dBdXRvQmF0dGxlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9pPiBDb21iYXQgQXV0b21hdGlxdWVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93V2VsY29tZU1lc3NhZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGRlIGxcXCdhaWRlIGdhbWVwbGF5OicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NoYXJhY3RlclJvbGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLWJ1dHRvbnMnKTtcclxuXHJcbiAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8cD5Ew6ljb3V2cmV6IGxlcyBkaWZmw6lyZW50cyByw7RsZXMgZGUgdm9zIGjDqXJvcyA6PC9wPmA7XHJcblxyXG4gICAgICAgIGJ1dHRvbnNFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dUYW5rUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaGllbGQtYWx0XCI+PC9pPiBUYW5rXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93RFBTUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT4gRFBTXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93SGVhbGVyUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT4gU29pZ25ldXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1dlbGNvbWVNZXNzYWdlKClcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUZWFtQ3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJDcsOpYXRpb24gZCfDiXF1aXBlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkZvcm1lciB2b3RyZSDDqXF1aXBlIHBhcmZhaXRlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5DaG9pc2lzc2V6IDxzdHJvbmc+MyBwZXJzb25uYWdlczwvc3Ryb25nPiBjb21wbMOpbWVudGFpcmVzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7DiXF1aWxpYnJleiBUYW5rLCBEUFMgZXQgU29pZ25ldXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNvbnN1bHRleiBsZXMgc3RhdGlzdGlxdWVzIHRvdGFsZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlRlc3RleiBkaWZmw6lyZW50ZXMgY29tYmluYWlzb25zPC9saT5cclxuICAgICAgICAgICAgPC91bD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluZEJhdHRsZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlJlY2hlcmNoZSBkZSBDb21iYXRcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+VHJvdXZlciBkZXMgYWR2ZXJzYWlyZXMgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlZvdHJlIMOpcXVpcGUgZG9pdCDDqnRyZSBjb21wbMOodGUgKDMgaMOpcm9zKTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGUgc3lzdMOobWUgdHJvdXZlIHVuIGFkdmVyc2FpcmUgw6lxdWl0YWJsZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+QXR0ZW5kZXogbGEgY29uZmlybWF0aW9uIGRlIG1hdGNoPC9saT5cclxuICAgICAgICAgICAgPC91bD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGV0YWlsZWRSZXNwb25zZSh0aXRsZSwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9ndWVTdGF0ZSA9ICdyZXNwb25zZSc7XHJcbiAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1pbWcnKTtcclxuICAgICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpbWdFbGVtZW50LnNyYyA9ICdpbWFnZXMvZ3VpbGQ0LnBuZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0RWwpIHtcclxuICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8aDM+JHt0aXRsZX08L2gzPiR7Y29udGVudH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvbnNFbCkge1xyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5yZXR1cm5Ub1ByZXZpb3VzTWVudSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvaT4gUmV0b3VyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuVG9QcmV2aW91c01lbnUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ21lbnUnO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlsZEltYWdlID0gMTtcclxuICAgICAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1pbWcnKTtcclxuICAgICAgICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gYGltYWdlcy9ndWlsZCR7dGhpcy5jdXJyZW50R3VpbGRJbWFnZX0ucG5nYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3dXZWxjb21lTWVzc2FnZSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZHUgcmV0b3VyIGF1IG1lbnUgcHLDqWPDqWRlbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93VGVhbVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWwuaW5uZXJIVE1MID0gYDxwPkNob2lzaXNzZXogbGUgdHlwZSBkZSBzdHJhdMOpZ2llIMOgIGFwcHJlbmRyZSA6PC9wPmA7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd0JhbGFuY2VkU3RyYXRlZ3koKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+IMOJcXVpcGUgw4lxdWlsaWJyw6llXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dBZ2dyZXNzaXZlU3RyYXRlZ3koKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpcmVcIj48L2k+IFN0cmF0w6lnaWUgQWdyZXNzaXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dEZWZlbnNpdmVTdHJhdGVneSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hpZWxkXCI+PC9pPiBTdHJhdMOpZ2llIETDqWZlbnNpdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93V2VsY29tZU1lc3NhZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGRlcyBzdHJhdMOpZ2llcyBkXFwnw6lxdWlwZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dCYWxhbmNlZFN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiw4lxdWlwZSDDiXF1aWxpYnLDqWVcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGEgY29tcG9zaXRpb24gY2xhc3NpcXVlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgVGFuazwvc3Ryb25nPiAtIEFic29yYmUgbGVzIGTDqWfDonRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgRFBTPC9zdHJvbmc+IC0gSW5mbGlnZSBsZXMgZMOpZ8OidHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MSBTb2lnbmV1cjwvc3Ryb25nPiAtIE1haW50aWVudCBsJ8OpcXVpcGUgZW4gdmllPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+Q2V0dGUgY29tcG9zaXRpb24gb2ZmcmUgdW5lIGJvbm5lIHBvbHl2YWxlbmNlIHBvdXIgdG91cyB0eXBlcyBkJ2FkdmVyc2FpcmVzLjwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWdncmVzc2l2ZVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiU3RyYXTDqWdpZSBBZ3Jlc3NpdmVcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TWF4aW11bSBkZSBkw6lnw6J0cyA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4yIERQUzwvc3Ryb25nPiAtIERvdWJsZSBwdWlzc2FuY2UgZCdhdHRhcXVlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgVGFuazwvc3Ryb25nPiAtIFByb3RlY3Rpb24gbWluaW1hbGU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5JZMOpYWwgY29udHJlIGRlcyDDqXF1aXBlcyBkw6lmZW5zaXZlcywgbWFpcyByaXNxdcOpIGZhY2Ugw6AgZCdhdXRyZXMgw6lxdWlwZXMgYWdyZXNzaXZlcy48L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlZmVuc2l2ZVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiU3RyYXTDqWdpZSBEw6lmZW5zaXZlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPlN1cnZpZSBtYXhpbWFsZSA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4xIFRhbms8L3N0cm9uZz4gLSBQcm90ZWN0aW9uIHByaW5jaXBhbGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MiBTb2lnbmV1cnM8L3N0cm9uZz4gLSBSw6ljdXDDqXJhdGlvbiBjb25zdGFudGU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5QYXJmYWl0IHBvdXIgc3Vydml2cmUgYXV4IMOpcXVpcGVzIGFncmVzc2l2ZXMgZXQgZ2FnbmVyIHBhciBlbmR1cmFuY2UuPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYW5rUm9sZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlLDtGxlIFRhbmtcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGUgcHJvdGVjdGV1ciBkZSBsJ8OpcXVpcGUgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UG9pbnRzIGRlIFZpZSDDqWxldsOpczwvc3Ryb25nPiAtIEVuY2Fpc3NlIGxlcyBkw6lnw6J0czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Ew6lmZW5zZSDDqWxldsOpZTwvc3Ryb25nPiAtIFLDqWR1aXQgbGVzIGTDqWfDonRzIHJlw6d1czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Db21ww6l0ZW5jZXMgZMOpZmVuc2l2ZXM8L3N0cm9uZz4gLSBQcm90w6hnZSBsZXMgYWxsacOpczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPlBsYWNleiB0b3Vqb3VycyB2b3RyZSBUYW5rIGVuIHByZW1pw6hyZSBsaWduZSAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEUFNSb2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiUsO0bGUgRFBTXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkxlIGRlc3RydWN0ZXVyIGQnZW5uZW1pcyA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5BdHRhcXVlIMOpbGV2w6llPC9zdHJvbmc+IC0gSW5mbGlnZSBkZSBncm9zIGTDqWfDonRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlZpdGVzc2Ugw6lsZXbDqWU8L3N0cm9uZz4gLSBGcmFwcGUgZW4gcHJlbWllcjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Db21ww6l0ZW5jZXMgb2ZmZW5zaXZlczwvc3Ryb25nPiAtIMOJbGltaW5hdGlvbnMgcmFwaWRlczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPkxlIERQUyBkb2l0IGNpYmxlciBsZXMgZW5uZW1pcyBsZXMgcGx1cyBkYW5nZXJldXggZW4gcHJlbWllciAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIZWFsZXJSb2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiUsO0bGUgU29pZ25ldXJcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGUgc291dGllbiBkZSBsJ8OpcXVpcGUgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q29tcMOpdGVuY2VzIGRlIHNvaW48L3N0cm9uZz4gLSBSZXN0YXVyZSBsZXMgUFY8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+QnVmZnMgZCfDqXF1aXBlPC9zdHJvbmc+IC0gQW3DqWxpb3JlIGxlcyBhbGxpw6lzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPk1hZ2llIMOpbGV2w6llPC9zdHJvbmc+IC0gU29pbnMgcGx1cyBwdWlzc2FudHM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5MZSBTb2lnbmV1ciBkb2l0IHJlc3RlciBlbiBzw6ljdXJpdMOpIGRlcnJpw6hyZSBsYSBsaWduZSBkZSBmcm9udCAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBdXRvQmF0dGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiQ29tYmF0IEF1dG9tYXRpcXVlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkNvbW1lbnQgZm9uY3Rpb25uZSBsZSBjb21iYXQgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlcyBjb21iYXRzIHNvbnQgPHN0cm9uZz5hdXRvbWF0aXF1ZXM8L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkJhc8OpcyBzdXIgbGVzIDxzdHJvbmc+c3RhdGlzdGlxdWVzPC9zdHJvbmc+IGRlIHZvcyBow6lyb3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNoYXF1ZSBwZXJzb25uYWdlIHV0aWxpc2Ugc2VzIDxzdHJvbmc+Y29tcMOpdGVuY2VzPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5MYSA8c3Ryb25nPnN0cmF0w6lnaWUgZCfDqXF1aXBlPC9zdHJvbmc+IGVzdCBpbXBvcnRhbnRlPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+Q29uY2VudHJlei12b3VzIHN1ciBsYSBmb3JtYXRpb24gZXQgbCfDqXF1aXBlbWVudCBkZSB2b3RyZSDDqXF1aXBlICE8L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlYnVnTWVudSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25zRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtYnV0dG9ucycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0ZXh0RWwgfHwgIWJ1dHRvbnNFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8cD5PdXRpbHMgZGUgZMOpdmVsb3BwZW1lbnQgZXQgZGVidWcgOjwvcD5gO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnJ1blBvc2l0aW9uaW5nVGVzdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY3Jvc3NoYWlyc1wiPjwvaT4gVGVzdCBQb3NpdGlvbm5lbWVudFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5kZWJ1Z0FjdGl2ZUNvbWJhdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3dvcmRcIj48L2k+IERlYnVnIENvbWJhdCBBY3R1ZWxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1N5c3RlbUluZm8oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlXCI+PC9pPiBJbmZvcm1hdGlvbnMgU3lzdMOobWVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93V2VsY29tZU1lc3NhZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGR1IG1lbnUgZGVidWc6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBydW5Qb3NpdGlvbmluZ1Rlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJUZXN0IGRlIFBvc2l0aW9ubmVtZW50XCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPlRlc3QgZW4gY291cnMuLi48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDxwPlbDqXJpZmlleiBsYSBjb25zb2xlIChGMTIpIHBvdXIgbGVzIGTDqXRhaWxzIGR1IHRlc3QuPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExhbmNlciBsZSB0ZXN0IGRlIHBvc2l0aW9ubmVtZW50XHJcbiAgICAgICAgaWYgKHdpbmRvdy5kZWJ1Z1Bvc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kZWJ1Z1Bvc2l0aW9uaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEZvbmN0aW9uIGRlYnVnUG9zaXRpb25pbmcgbm9uIGRpc3BvbmlibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdBY3RpdmVDb21iYXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJEZWJ1ZyBDb21iYXQgQWN0dWVsXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkFuYWx5c2UgZHUgY29tYmF0IGVuIGNvdXJzLi4uPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8cD5Ww6lyaWZpZXogbGEgY29uc29sZSAoRjEyKSBwb3VyIGxlcyBkw6l0YWlscy48L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRGVidWcgZHUgY29tYmF0IGFjdHVlbFxyXG4gICAgICAgIGlmICh3aW5kb3cuZGVidWdDb21iYXRQb3NpdGlvbmluZykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZGVidWdDb21iYXRQb3NpdGlvbmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBGb25jdGlvbiBkZWJ1Z0NvbWJhdFBvc2l0aW9uaW5nIG5vbiBkaXNwb25pYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTeXN0ZW1JbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbWJhdDNkQXZhaWxhYmxlID0gdHlwZW9mIENvbWJhdDNEU3lzdGVtICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICBjb25zdCBnYW1lSW50ZXJmYWNlQXZhaWxhYmxlID0gdHlwZW9mIGdhbWVJbnRlcmZhY2UgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnQXZhaWxhYmxlID0gdHlwZW9mIHdpbmRvdy5kZWJ1Z1Bvc2l0aW9uaW5nICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIkluZm9ybWF0aW9ucyBTeXN0w6htZVwiLFxyXG4gICAgICAgICAgICBgPHA+PHN0cm9uZz7DiXRhdCBkZXMgY29tcG9zYW50cyA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q29tYmF0M0RTeXN0ZW06ICR7Y29tYmF0M2RBdmFpbGFibGUgPyAn4pyFIERpc3BvbmlibGUnIDogJ+KdjCBOb24gZGlzcG9uaWJsZSd9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5HYW1lIEludGVyZmFjZTogJHtnYW1lSW50ZXJmYWNlQXZhaWxhYmxlID8gJ+KchSBEaXNwb25pYmxlJyA6ICfinYwgTm9uIGRpc3BvbmlibGUnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+RGVidWcgVG9vbHM6ICR7ZGVidWdBdmFpbGFibGUgPyAn4pyFIERpc3BvbmlibGUnIDogJ+KdjCBOb24gZGlzcG9uaWJsZSd9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5VdGlsaXNhdGV1cjogJHt0aGlzLmlzTG9nZ2VkSW4gPyBg4pyFICR7dGhpcy51c2VyTmFtZX1gIDogJ+KdjCBOb24gY29ubmVjdMOpJ308L2xpPlxyXG4gICAgICAgICAgICA8L3VsPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXNhdGlvblxyXG53aW5kb3cuZ3VpbGRHdWlkZSA9IG51bGw7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93Lmd1aWxkR3VpZGUgPSBuZXcgR3VpbGRHdWlkZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn4+wIEd1aWRlIGRlIGd1aWxkZSBpbml0aWFsaXPDqScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdpbml0aWFsaXNhdGlvbiBkdSBndWlkZSBkZSBndWlsZGU6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiLy8gVmFyaWFibGVzIGdsb2JhbGVzIHBvdXIgbGUgbWF0Y2htYWtpbmdcclxubGV0IHN0YXR1c0NoZWNrSW50ZXJ2YWw7XHJcbmxldCBtYXRjaG1ha2luZyA9IHtcclxuICAgIGluUXVldWU6IGZhbHNlLFxyXG4gICAgdGVhbUlkOiBudWxsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXNlciBsZSBzeXN0w6htZSBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgaW5pdGlhbGl6ZU1hdGNobWFraW5nKCk7XHJcbiAgICBjaGVja0N1cnJlbnRTdGF0dXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplTWF0Y2htYWtpbmcoKSB7XHJcbiAgICAvLyBCb3V0b24gZGUgcmVjaGVyY2hlIGRlIG1hdGNoXHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgIGlmIChzZWFyY2hCdG4pIHtcclxuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgam9pbk1hdGNobWFraW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQm91dG9uIGQnYW5udWxhdGlvblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1xdWV1ZScpO1xyXG4gICAgaWYgKGNhbmNlbEJ0bikge1xyXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjYW5jZWxNYXRjaG1ha2luZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJvdXRvbiByZXRvdXIgw6AgbGEgcmVjaGVyY2hlXHJcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stdG8tc2VhcmNoJyk7XHJcbiAgICBpZiAoYmFja0J0bikge1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmVzZXRUb1NlYXJjaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBqb2luTWF0Y2htYWtpbmcoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgIGNvbnN0IHRlYW1JZCA9IHNlYXJjaEJ0bj8uZGF0YXNldC50ZWFtSWQgfHwgJzEnOyAvLyBWYWxldXIgcGFyIGTDqWZhdXRcclxuICAgIFxyXG4gICAgLy8gRMOpc2FjdGl2ZXIgbGUgYm91dG9uIHBlbmRhbnQgbGEgcmVxdcOqdGVcclxuICAgIGlmIChzZWFyY2hCdG4pIHtcclxuICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHNlYXJjaEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBDb25uZXhpb24uLi4nO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKCcvYXBpL21hdGNobWFraW5nL2pvaW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZWFtX2lkOiBwYXJzZUludCh0ZWFtSWQpIH0pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcudGVhbUlkID0gdGVhbUlkO1xyXG4gICAgICAgICAgICBzaG93TWF0Y2htYWtpbmdTdGF0dXMoKTtcclxuICAgICAgICAgICAgc3RhcnRTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IgfHwgJ0VycmV1ciBsb3JzIGRlIGxhIHJlY2hlcmNoZSBkZSBtYXRjaCcpO1xyXG4gICAgICAgICAgICByZXNldFNlYXJjaEJ1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcik7XHJcbiAgICAgICAgYWxlcnQoJ0VycmV1ciBkZSBjb25uZXhpb24nKTtcclxuICAgICAgICByZXNldFNlYXJjaEJ1dHRvbigpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbE1hdGNobWFraW5nKCkge1xyXG4gICAgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvY2FuY2VsJywgeyBtZXRob2Q6ICdQT1NUJyB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGhpZGVNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG4gICAgICAgICAgICBzdG9wU3RhdHVzQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYW5udWxhdGlvbjonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTZWFyY2hCdXR0b24oKSB7XHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgIGlmIChzZWFyY2hCdG4pIHtcclxuICAgICAgICAvLyBOZSBwbHVzIGZvcmNlciBsJ2FjdGl2YXRpb24gLSBsYWlzc2VyIHRlYW0tbWFuYWdlbWVudC5qcyBnw6lyZXIgbCfDqXRhdFxyXG4gICAgICAgIHNlYXJjaEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPiBSZWNoZXJjaGVyIHVuIE1hdGNoJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaSB1bmUgaW5zdGFuY2UgZGUgVGVhbU1hbmFnZW1lbnQgZXhpc3RlLCBsYWlzc2VyIHVwZGF0ZUJhdHRsZVRhYigpIGfDqXJlciBsJ8OpdGF0XHJcbiAgICAgICAgaWYgKHdpbmRvdy50ZWFtTWFuYWdlbWVudCAmJiB0eXBlb2Ygd2luZG93LnRlYW1NYW5hZ2VtZW50LnVwZGF0ZUJhdHRsZVRhYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB3aW5kb3cudGVhbU1hbmFnZW1lbnQudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24gdsOpcmlmaWVyIG1hbnVlbGxlbWVudCBsZSBub21icmUgZGUgcGVyc29ubmFnZXNcclxuICAgICAgICAgICAgY29uc3QgdGVhbVNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLXNsb3Qub2NjdXBpZWQnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmICh0ZWFtU2l6ZSA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01hdGNobWFraW5nU3RhdHVzKCkge1xyXG4gICAgY29uc3QgdGVhbVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLXNlbGVjdGlvbicpO1xyXG4gICAgY29uc3QgbWF0Y2htYWtpbmdTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2htYWtpbmctc3RhdHVzJyk7XHJcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZXN1bHQnKTtcclxuICAgIFxyXG4gICAgaWYgKHRlYW1TZWxlY3Rpb24pIHRlYW1TZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChtYXRjaG1ha2luZ1N0YXR1cykgbWF0Y2htYWtpbmdTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpZiAobWF0Y2hSZXN1bHQpIG1hdGNoUmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVNYXRjaG1ha2luZ1N0YXR1cygpIHtcclxuICAgIGNvbnN0IHRlYW1TZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1zZWxlY3Rpb24nKTtcclxuICAgIGNvbnN0IG1hdGNobWFraW5nU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNobWFraW5nLXN0YXR1cycpO1xyXG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2gtcmVzdWx0Jyk7XHJcbiAgICBcclxuICAgIGlmICh0ZWFtU2VsZWN0aW9uKSB0ZWFtU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgaWYgKG1hdGNobWFraW5nU3RhdHVzKSBtYXRjaG1ha2luZ1N0YXR1cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWYgKG1hdGNoUmVzdWx0KSBtYXRjaFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcmVzZXRTZWFyY2hCdXR0b24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd01hdGNoUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgY29uc3QgdGVhbVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLXNlbGVjdGlvbicpO1xyXG4gICAgY29uc3QgbWF0Y2htYWtpbmdTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2htYWtpbmctc3RhdHVzJyk7XHJcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZXN1bHQnKTtcclxuICAgIFxyXG4gICAgaWYgKHRlYW1TZWxlY3Rpb24pIHRlYW1TZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChtYXRjaG1ha2luZ1N0YXR1cykgbWF0Y2htYWtpbmdTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChtYXRjaFJlc3VsdCkgbWF0Y2hSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IHJlc3VsdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdC10aXRsZScpO1xyXG4gICAgXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdENvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBpc1dpbm5lciA9IHJlc3VsdC53aW5uZXJfdGVhbV9pZCA9PSBtYXRjaG1ha2luZy50ZWFtSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHJlc3VsdFRpdGxlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFRpdGxlLnRleHRDb250ZW50ID0gJ+KalO+4jyBDT01CQVQgVEVSTUlOw4kgISc7XHJcbiAgICAgICAgICAgIHJlc3VsdFRpdGxlLmNsYXNzTmFtZSA9ICd0ZXh0LWluZm8nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXN1bHRDb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jYXJkIGNvbXBsZXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlZvdHJlIMOpcXVpcGU6PC9zdHJvbmc+ICR7cmVzdWx0LnRlYW0xX3Bvd2VyIHx8ICdOL0EnfSBwdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz7DiXF1aXBlIGFkdmVyc2U6PC9zdHJvbmc+ICR7cmVzdWx0LnRlYW0yX3Bvd2VyIHx8ICdOL0EnfSBwdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EdXLDqWU6PC9zdHJvbmc+ICR7cmVzdWx0LmR1cmF0aW9uIHx8ICdOL0EnfSByb3VuZHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXRjaC1jb21wbGV0ZWQtbWVzc2FnZVwiPkxlIGNvbWJhdCBzJ2VzdCBkw6lyb3Vsw6kgISBWb3VsZXotdm91cyB2b2lyIGxlIGTDqXJvdWxlbWVudCA/PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtYWN0aW9ucy1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb21iYXQtdmlld1wiIG9uY2xpY2s9XCJnYW1lSW50ZXJmYWNlLnNob3dDb21iYXRWaXN1YWxpemF0aW9uKCR7cmVzdWx0Lm1hdGNoX2lkfSlcIiB0aXRsZT1cIlZvaXIgbGUgY29tYmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsYXktY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Wb2lyIGxlIENvbWJhdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1uZXctbWF0Y2hcIiBvbmNsaWNrPVwicmVzZXRUb1NlYXJjaCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXJlZG9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdXZlYXUgQ29tYmF0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0VG9TZWFyY2goKSB7XHJcbiAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gZmFsc2U7XHJcbiAgICBoaWRlTWF0Y2htYWtpbmdTdGF0dXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTdGF0dXNDaGVjaygpIHtcclxuICAgIHN0YXR1c0NoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGVja1N0YXR1cywgMjAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BTdGF0dXNDaGVjaygpIHtcclxuICAgIGlmIChzdGF0dXNDaGVja0ludGVydmFsKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzdGF0dXNDaGVja0ludGVydmFsKTtcclxuICAgICAgICBzdGF0dXNDaGVja0ludGVydmFsID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTdGF0dXMoKSB7XHJcbiAgICAvLyBWw6lyaWZpY2F0aW9uIHRlbXBvcmFpcmUgcG91ciDDqXZpdGVyIGxlIHNwYW0gcGVuZGFudCBsZXMgdGVzdHMgM0RcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3Rlc3QnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGQtbW9kYWwnKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn6eqIEFycsOqdCB0ZW1wb3JhaXJlIGR1IHBvbGxpbmcgQVBJIHBlbmRhbnQgbGVzIHRlc3RzIDNEJyk7XHJcbiAgICAgICAgc3RvcFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9zdGF0dXMnKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgdXBkYXRlU3RhdHVzRGlzcGxheShkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdNQVRDSF9SRVNVTFRfUEVORElORycpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdG9wU3RhdHVzQ2hlY2soKTtcclxuICAgICAgICAgICAgc2hvd0NvbWJhdFBlbmRpbmdSZXN1bHQoZGF0YS5tYXRjaCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ01BVENIX0ZPVU5EJykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0b3BTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgICAgICBzaG93TWF0Y2hSZXN1bHQoZGF0YS5tYXRjaCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ05PVF9JTl9RVUVVRScpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBoaWRlTWF0Y2htYWtpbmdTdGF0dXMoKTtcclxuICAgICAgICAgICAgc3RvcFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgdsOpcmlmaWNhdGlvbiBkdSBzdGF0dXQ6JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1c0Rpc3BsYXkoZGF0YSkge1xyXG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMtdGV4dCcpO1xyXG4gICAgY29uc3Qgd2FpdGluZ1RpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdGluZy10aW1lJyk7XHJcbiAgICBjb25zdCBwbGF5ZXJzSW5RdWV1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJzLWluLXF1ZXVlJyk7XHJcbiAgICBcclxuICAgIGlmIChzdGF0dXNUZXh0KSB7XHJcbiAgICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IGRhdGEuc3RhdHVzID09PSAnU0VBUkNISU5HJyA/ICdSZWNoZXJjaGUgZW4gY291cnMuLi4nIDogJ0VuIGF0dGVudGUuLi4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAod2FpdGluZ1RpbWUgJiYgZGF0YS53YWl0aW5nX3RpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdhaXRpbmdUaW1lLnRleHRDb250ZW50ID0gYFRlbXBzIGQnYXR0ZW50ZTogJHtkYXRhLndhaXRpbmdfdGltZX0gc2Vjb25kZXNgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGxheWVyc0luUXVldWUgJiYgZGF0YS5wbGF5ZXJzX2luX3F1ZXVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwbGF5ZXJzSW5RdWV1ZS50ZXh0Q29udGVudCA9IGBKb3VldXJzIGVuIGZpbGU6ICR7ZGF0YS5wbGF5ZXJzX2luX3F1ZXVlfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ3VycmVudFN0YXR1cygpIHtcclxuICAgIGZldGNoKCcvYXBpL21hdGNobWFraW5nL3N0YXR1cycpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdTRUFSQ0hJTkcnKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzaG93TWF0Y2htYWtpbmdTdGF0dXMoKTtcclxuICAgICAgICAgICAgc3RhcnRTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHbDqXJpZmljYXRpb24gZHUgc3RhdHV0IGluaXRpYWw6JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIE5vdXZlbGxlIGZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgdW4gbWF0Y2ggZW4gYXR0ZW50ZSBkZSB2aXN1YWxpc2F0aW9uXHJcbmZ1bmN0aW9uIHNob3dDb21iYXRQZW5kaW5nUmVzdWx0KG1hdGNoRGF0YSkge1xyXG4gICAgaGlkZU1hdGNobWFraW5nU3RhdHVzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9ICdjb21iYXQtcGVuZGluZy1ub3RpZmljYXRpb24nO1xyXG4gICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVuZGluZy1jb21iYXQtY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVuZGluZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz7impTvuI8gQ29tYmF0IFRlcm1pbsOpICE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+Vm90cmUgY29tYmF0IHZpZW50IGRlIHNlIHRlcm1pbmVyLiBWb3VsZXotdm91cyB2b2lyIGNlIHF1aSBzJ2VzdCBwYXNzw6kgPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZW5kaW5nLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdmlldy1jb21iYXRcIiBvbmNsaWNrPVwidmlld0NvbWJhdFZpc3VhbGl6YXRpb24oJHttYXRjaERhdGEuaWR9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4gVm9pciBsZSBDb21iYXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1za2lwLWNvbWJhdFwiIG9uY2xpY2s9XCJza2lwQ29tYmF0VmlzdWFsaXphdGlvbigke21hdGNoRGF0YS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZm9yd2FyZFwiPjwvaT4gUGFzc2VyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn1cclxuXHJcbi8vIEV4cG9zaXRpb24gZGVzIGZvbmN0aW9ucyBnbG9iYWxlc1xyXG53aW5kb3cudmlld0NvbWJhdFZpc3VhbGl6YXRpb24gPSB2aWV3Q29tYmF0VmlzdWFsaXphdGlvbjtcclxud2luZG93LnNraXBDb21iYXRWaXN1YWxpemF0aW9uID0gc2tpcENvbWJhdFZpc3VhbGl6YXRpb247XHJcblxyXG4vLyBGb25jdGlvbiBwb3VyIHZvaXIgbGEgdmlzdWFsaXNhdGlvbiBkdSBjb21iYXRcclxuYXN5bmMgZnVuY3Rpb24gdmlld0NvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNYXJxdWVyIGxlIGNvbWJhdCBjb21tZSB2aXN1YWxpc8OpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvbWF0Y2htYWtpbmcvbWF0Y2gvJHttYXRjaElkfS9tYXJrLXZpZXdlZGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGEgbm90aWZpY2F0aW9uXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWJhdC1wZW5kaW5nLW5vdGlmaWNhdGlvbicpO1xyXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsYSB2aXN1YWxpc2F0aW9uIGR1IGNvbWJhdFxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2FtZUludGVyZmFjZSAmJiB3aW5kb3cuZ2FtZUludGVyZmFjZS5zaG93Q29tYmF0VmlzdWFsaXphdGlvbikge1xyXG4gICAgICAgICAgICBhd2FpdCB3aW5kb3cuZ2FtZUludGVyZmFjZS5zaG93Q29tYmF0VmlzdWFsaXphdGlvbihtYXRjaElkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnRlcmZhY2UgZGUgamV1IG5vbiBkaXNwb25pYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSB2aXN1YWxpc2F0aW9uIGR1IGNvbWJhdDonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIHBvdXIgcGFzc2VyIGxhIHZpc3VhbGlzYXRpb25cclxuYXN5bmMgZnVuY3Rpb24gc2tpcENvbWJhdFZpc3VhbGl6YXRpb24obWF0Y2hJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNYXJxdWVyIGxlIGNvbWJhdCBjb21tZSB2aXN1YWxpc8OpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvbWF0Y2htYWtpbmcvbWF0Y2gvJHttYXRjaElkfS9tYXJrLXZpZXdlZGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGEgbm90aWZpY2F0aW9uXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWJhdC1wZW5kaW5nLW5vdGlmaWNhdGlvbicpO1xyXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPcHRpb25uZWw6IGFmZmljaGVyIHVuIG1lc3NhZ2Ugc2ltcGxlIGF2ZWMgbGUgcsOpc3VsdGF0XHJcbiAgICAgICAgc2hvd1NpbXBsZU1hdGNoUmVzdWx0KG1hdGNoSWQpO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBwYXNzYWdlIGR1IGNvbWJhdDonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgdW4gcsOpc3VsdGF0IHNpbXBsZSBzYW5zIGFuaW1hdGlvblxyXG5hc3luYyBmdW5jdGlvbiBzaG93U2ltcGxlTWF0Y2hSZXN1bHQobWF0Y2hJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH1gKTtcclxuICAgICAgICBjb25zdCBtYXRjaERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgdW4gc2ltcGxlIG1lc3NhZ2UgZGUgcsOpc3VsdGF0XHJcbiAgICAgICAgY29uc3QgcmVzdWx0TWVzc2FnZSA9IG1hdGNoRGF0YS5pc193aW5uZXIgPyBcclxuICAgICAgICAgICAgJ/CfjokgVmljdG9pcmUgISBWb3VzIGF2ZXogcmVtcG9ydMOpIGNlIGNvbWJhdCAhJyA6IFxyXG4gICAgICAgICAgICAn8J+YlCBEw6lmYWl0ZS4uLiBWb3VzIHBvdXJyZXogdm91cyB2ZW5nZXIgbGEgcHJvY2hhaW5lIGZvaXMgISc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIHVuZSBub3RpZmljYXRpb24gc2ltcGxlXHJcbiAgICAgICAgaWYgKHdpbmRvdy5zaG93Tm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zaG93Tm90aWZpY2F0aW9uKHJlc3VsdE1lc3NhZ2UsIG1hdGNoRGF0YS5pc193aW5uZXIgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdhZmZpY2hhZ2UgZHUgcsOpc3VsdGF0IHNpbXBsZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0iLCIvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgR0VTVElPTiBEJ8OJUVVJUEUgLSBTQU5UT05TIFNDUklQVCBUQUNUSUNTID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgVGVhbU1hbmFnZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gJ3RlYW0nO1xyXG4gICAgICAgIHRoaXMucGxheWVyVGVhbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDaGFyYWN0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNsb3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUYWJzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGxheWVyVGVhbSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZENoYXJhY3RlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gR0VTVElPTiBERVMgT05HTEVUUyA9PT09PT09PT09PT09PT1cclxuICAgIHNldHVwVGFicygpIHtcclxuICAgICAgICBjb25zdCB0YWJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICB0YWJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IGJ1dHRvbi5kYXRhc2V0LnRhYjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKHRhYk5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUYWIodGFiTmFtZSkge1xyXG4gICAgICAgIC8vIETDqXNhY3RpdmVyIHRvdXMgbGVzIG9uZ2xldHNcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWJ1dHRvbicpLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1wYW5lbCcpLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFjdGl2ZXIgbCdvbmdsZXQgc8OpbGVjdGlvbm7DqVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYj1cIiR7dGFiTmFtZX1cIl1gKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhYk5hbWV9LXBhbmVsYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFjdGl2ZUJ1dHRvbikgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGlmIChhY3RpdmVQYW5lbCkgYWN0aXZlUGFuZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gdGFiTmFtZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWN0aW9ucyBzcMOpY2lmaXF1ZXMgcGFyIG9uZ2xldFxyXG4gICAgICAgIGlmICh0YWJOYW1lID09PSAnY2hhcmFjdGVycycpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2hhcmFjdGVycygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFiTmFtZSA9PT0gJ2JhdHRsZScpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEdFU1RJT04gREUgTCfDiVFVSVBFID09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgbG9hZFBsYXllclRlYW0oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy90ZWFtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZFBsYXllclRlYW0gcmVzcG9uc2U6JywgZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllclRlYW0gPSBkYXRhLnRlYW07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGVhbURpc3BsYXkoZGF0YS5jaGFyYWN0ZXJzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJUZWFtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gdGVhbSBmb3VuZCwgY3JlYXRpbmcgYXV0b21hdGljYWxseS4uLicpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVUZWFtQXV0b21hdGljYWxseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsXFwnw6lxdWlwZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvdGVhbS9jcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUZWFtID0gZGF0YS50ZWFtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCfDiXF1aXBlIGNyw6nDqWUgYXV0b21hdGlxdWVtZW50ICEnLCAnc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkXFwnw6lxdWlwZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRlYW1EaXNwbGF5KHRlYW1DaGFyYWN0ZXJzID0gW10pIHtcclxuICAgICAgICBjb25zdCBzbG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItc2xvdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNsb3RzLmZvckVhY2goKHNsb3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHRlYW1DaGFyYWN0ZXJzW2luZGV4XSB8fCBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHNsb3QucXVlcnlTZWxlY3RvcignLnNsb3QtcGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7Y2hhcmFjdGVyLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItcm9sZVwiPiR7Y2hhcmFjdGVyLnJvbGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+SFA6ICR7Y2hhcmFjdGVyLmhwfSB8IEFUSzogJHtjaGFyYWN0ZXIuYXRrfSB8IERFRjogJHtjaGFyYWN0ZXIuZGVmfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlLWNoYXJhY3RlclwiIGRhdGEtY2hhcmFjdGVyLWlkPVwiJHtjaGFyYWN0ZXIuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIMOJdsOpbmVtZW50IGRlIHN1cHByZXNzaW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBzbG90LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY2hhcmFjdGVyJyk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGFyYWN0ZXIoY2hhcmFjdGVyLmlkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+SMOpcm9zICR7aW5kZXggKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5yZW1vdmUoJ29jY3VwaWVkJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIMOJdsOpbmVtZW50IGQnYWpvdXRcclxuICAgICAgICAgICAgICAgIHNsb3Qub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2xvdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKCdjaGFyYWN0ZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdTw6lsZWN0aW9ubmV6IHVuIHBlcnNvbm5hZ2Ugw6AgYWpvdXRlcicsICdpbmZvJyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRm9yY2VyIGxhIG1pc2Ugw6Agam91ciBkdSBib3V0b24gYmF0YWlsbGUgYXZlYyB1biBkw6lsYWkgcGx1cyBsb25nXHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEdFU1RJT04gREVTIFBFUlNPTk5BR0VTID09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgbG9hZENoYXJhY3RlcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9jaGFyYWN0ZXJzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2hhcmFjdGVycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgcGVyc29ubmFnZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Q2hhcmFjdGVycygpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcmFjdGVycy1ncmlkJyk7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIXRoaXMuYXZhaWxhYmxlQ2hhcmFjdGVycy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDaGFyYWN0ZXJzLmZvckVhY2goY2hhcmFjdGVyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjaGFyYWN0ZXItY2FyZCc7XHJcbiAgICAgICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+JHtjaGFyYWN0ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcmFjdGVyLXJvbGUgcm9sZS0ke2NoYXJhY3Rlci5yb2xlLnRvTG93ZXJDYXNlKCl9XCI+JHtjaGFyYWN0ZXIucm9sZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4p2k77iPICR7Y2hhcmFjdGVyLmhwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4pqU77iPICR7Y2hhcmFjdGVyLmF0a308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfm6HvuI8gJHtjaGFyYWN0ZXIuZGVmfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+SqCAke2NoYXJhY3Rlci5zcGR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5SlICR7Y2hhcmFjdGVyLmNyaXR9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+SmiAke2NoYXJhY3Rlci5oZWFsIHx8IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWNoYXJhY3Rlci1idG5cIiBkYXRhLWNoYXJhY3Rlci1pZD1cIiR7Y2hhcmFjdGVyLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gw4l2w6luZW1lbnQgZCdham91dFxyXG4gICAgICAgICAgICBjb25zdCBhZGRCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2hhcmFjdGVyLWJ0bicpO1xyXG4gICAgICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoYXJhY3RlcihjaGFyYWN0ZXIuaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRDaGFyYWN0ZXIoY2hhcmFjdGVySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL3RlYW0vYWRkLWNoYXJhY3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNoYXJhY3Rlcl9pZDogY2hhcmFjdGVySWQgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBsYXllclRlYW0oKTsgLy8gUmVjaGFyZ2VyIGwnw6lxdWlwZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoJ3RlYW0nKTsgLy8gUmV0b3VybmVyIMOgIGwnb25nbGV0IMOpcXVpcGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRm9yY2VyIGxhIG1pc2Ugw6Agam91ciBkdSBib3V0b24gYmF0YWlsbGUgYXByw6hzIHVuIGTDqWxhaVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oZGF0YS5lcnJvciwgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgcGVyc29ubmFnZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGRlIGNvbm5leGlvbicsICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmVDaGFyYWN0ZXIoY2hhcmFjdGVySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL3RlYW0vcmVtb3ZlLWNoYXJhY3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNoYXJhY3Rlcl9pZDogY2hhcmFjdGVySWQgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKGRhdGEubWVzc2FnZSwgJ2luZm8nKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBsYXllclRlYW0oKTsgLy8gUmVjaGFyZ2VyIGwnw6lxdWlwZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBGb3JjZXIgbGEgbWlzZSDDoCBqb3VyIGR1IGJvdXRvbiBiYXRhaWxsZSBhcHLDqHMgdW4gZMOpbGFpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihkYXRhLmVycm9yLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIGR1IHBlcnNvbm5hZ2U6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gQ09NQkFUID09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlQmF0dGxlVGFiKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmF0dGxlLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZS1zZWFyY2ggLmluZm8tdGV4dCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghc2VhcmNoQnRuIHx8ICFpbmZvVGV4dCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbXB0ZXIgbGVzIHBlcnNvbm5hZ2VzIGRhbnMgbCfDqXF1aXBlXHJcbiAgICAgICAgY29uc3QgdGVhbVNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLXNsb3Qub2NjdXBpZWQnKS5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRlYW1TaXplID09PSAzICYmIHRoaXMucGxheWVyVGVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRU5BQkxJTkcgQlVUVE9OOiB0ZWFtU2l6ZT0zLCBwbGF5ZXJUZWFtIGV4aXN0cycpO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5kYXRhc2V0LnRlYW1JZCA9IHRoaXMucGxheWVyVGVhbS5pZDtcclxuICAgICAgICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAnVm90cmUgw6lxdWlwZSBlc3QgcHLDqnRlICEgVHJvdXZleiB1biBhZHZlcnNhaXJlLic7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCdXR0b24gc3RhdGUgYWZ0ZXIgZW5hYmxpbmc6Jywge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHNlYXJjaEJ0bi5kaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgIGhhc0Rpc2FibGVkQXR0cjogc2VhcmNoQnRuLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSxcclxuICAgICAgICAgICAgICAgIGhhc0Rpc2FibGVkQ2xhc3M6IHNlYXJjaEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RJU0FCTElORyBCVVRUT046IHRlYW1TaXplPScgKyB0ZWFtU2l6ZSArICcsIGhhc1BsYXllclRlYW09JyArICEhdGhpcy5wbGF5ZXJUZWFtKTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXJUZWFtKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICdDaGFyZ2VtZW50IGRlIHZvdHJlIMOpcXVpcGUuLi4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBgQWpvdXRleiAkezMgLSB0ZWFtU2l6ZX0gcGVyc29ubmFnZShzKSBwb3VyIGNvbW1lbmNlcmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IE5PVElGSUNBVElPTlMgPT09PT09PT09PT09PT09XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYG5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tJHt0eXBlfWA7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtJHt0aGlzLmdldE5vdGlmaWNhdGlvbkljb24odHlwZSl9XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3R5bGVzIGlubGluZSBwb3VyIGFzc3VyZXIgbCdhZmZpY2hhZ2VcclxuICAgICAgICBub3RpZmljYXRpb24uc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOyB0b3A6IDIwcHg7IHJpZ2h0OiAyMHB4OyB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IGJvcmRlci1yYWRpdXM6IDVweDsgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3R5cGUgPT09ICdzdWNjZXNzJyA/ICcjMjhhNzQ1JyA6IHR5cGUgPT09ICdlcnJvcicgPyAnI2RjMzU0NScgOiAnIzE3YTJiOCd9O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGQnZW50csOpZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbm90aWZpY2F0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJywgMTApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN1cHByZXNzaW9uIGF1dG9tYXRpcXVlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5vdGlmaWNhdGlvbkljb24odHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgICAgICAnc3VjY2Vzcyc6ICdjaGVjay1jaXJjbGUnLFxyXG4gICAgICAgICAgICAnZXJyb3InOiAndGltZXMtY2lyY2xlJyxcclxuICAgICAgICAgICAgJ2luZm8nOiAnaW5mby1jaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaWNvbnNbdHlwZV0gfHwgJ2luZm8tY2lyY2xlJztcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGlzYXRpb24gYXV0b21hdGlxdWVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWludGVyZmFjZScpKSB7XHJcbiAgICAgICAgd2luZG93LnRlYW1NYW5hZ2VtZW50ID0gbmV3IFRlYW1NYW5hZ2VtZW50KCk7XHJcblxyXG4gICAgfVxyXG59KTsiLCIvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgREUgVEjDiE1FUyAtIE3DiURJw4lWQUwgLyBEWVNUT1BJUVVFID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgVGhlbWVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGhlbWUgPSAnbWVkaWV2YWwnOyAvLyBQYXIgZMOpZmF1dCBtw6lkacOpdmFsXHJcbiAgICAgICAgdGhpcy50aGVtZXMgPSB7XHJcbiAgICAgICAgICAgIG1lZGlldmFsOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTcOpZGnDqXZhbCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhNZWRpZXZhbC9jaW1ldGnDqHJlLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eE1lZGlldmFsL2NvdXJzIGR1IGNoYXRlYXUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvcGxhY2UgZHUgdmlsbGFnZS5wbmcnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9iYWNrZ3JvdW5kTWVkaWV2YWwvQWRvYmVTdG9ja18yNjUzNDAxNDQubW92JyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL2JhY2tncm91bmRNZWRpZXZhbC9iZ01lZGlldmFsMS5tcDQnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogJyM4YjQ1MTMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogJyNkYWE1MjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VudDogJyMyZDRhMmInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGR5c3RvOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHlzdG9waXF1ZScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhEeXN0by9jaGFtcCBkZSBiYXRhaWxsZSBkeXN0by5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhEeXN0by9jb3VycyBtb2Rlcm5lLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eER5c3RvL3BsYWNlIHZpbGxhZ2UgbW9kZXJuZS5wbmcnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9iYWNrZ3JvdW5kRHlzdG8vYmdEeXN0by5tb3YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvYmFja2dyb3VuZER5c3RvL2JnRHlzdG8xLm1vdidcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiAnIzhlMjZmMGZmJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICcjNzIwOWI3JyxcclxuICAgICAgICAgICAgICAgICAgICBhY2NlbnQ6ICcjYzcxNTg1J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVmlkZW9CYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseVRoZW1lKHRoaXMuY3VycmVudFRoZW1lKTtcclxuICAgICAgICB0aGlzLnNldFJhbmRvbUJhY2tncm91bmQoKTtcclxuICAgICAgICB0aGlzLnNldFJhbmRvbVZpZGVvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGhlbWVTd2l0Y2hlcigpIHtcclxuICAgICAgICBjb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN3aXRjaGVyLmNsYXNzTmFtZSA9ICd0aGVtZS1zd2l0Y2hlcic7XHJcbiAgICAgICAgc3dpdGNoZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhlbWUtc3dpdGNoZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGhlbWUtYnRuXCIgZGF0YS10aGVtZT1cIm1lZGlldmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FzdGxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk3DqWRpw6l2YWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0aGVtZS1idG5cIiBkYXRhLXRoZW1lPVwiZHlzdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaXR5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkR5c3RvcGlxdWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzd2l0Y2hlcik7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVycyBwb3VyIGxlcyBib3V0b25zXHJcbiAgICAgICAgY29uc3QgdGhlbWVCdXR0b25zID0gc3dpdGNoZXIucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1lLWJ0bicpO1xyXG4gICAgICAgIHRoZW1lQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gYnRuLmRhdGFzZXQudGhlbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRoZW1lKHRoZW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVmlkZW9CYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIC8vIENyw6llciBsJ8OpbMOpbWVudCB2aWTDqW8gcG91ciBsZSBiYWNrZ3JvdW5kIGRlIGxhIHBhZ2VcclxuICAgICAgICBsZXQgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXZpZGVvLWJhY2tncm91bmQnKTtcclxuICAgICAgICBpZiAoIXZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuaWQgPSAndGhlbWUtdmlkZW8tYmFja2dyb3VuZCc7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5jbGFzc05hbWUgPSAndGhlbWUtdmlkZW8tYmFja2dyb3VuZCc7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5sb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnBsYXlzSW5saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIExhIHZpZMOpbyB1dGlsaXNlIHVuaXF1ZW1lbnQgbGVzIHN0eWxlcyBDU1MgZMOpZmluaXMgZGFucyBfdGhlbWUtc3lzdGVtLnNjc3NcclxuICAgICAgICAgICAgLy8gUGFzIGRlIHN0eWxlcyBpbmxpbmUgcG91ciBwZXJtZXR0cmUgYXUgQ1NTIGRlIGNvbnRyw7RsZXIgbCdhcHBhcmVuY2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHZpZGVvRWxlbWVudCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWVyIGwnb3ZlcmxheSBzb21icmUgc8OpcGFyw6lcclxuICAgICAgICBsZXQgb3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tb3ZlcmxheScpO1xyXG4gICAgICAgIGlmICghb3ZlcmxheUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQuaWQgPSAndmlkZW8tb3ZlcmxheSc7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50LmNsYXNzTmFtZSA9ICd2aWRlby1vdmVybGF5JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluc8OpcmVyIGwnb3ZlcmxheSBhcHLDqHMgbGEgdmlkw6lvIChkb25jIGF1LWRlc3N1cylcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUob3ZlcmxheUVsZW1lbnQsIGRvY3VtZW50LmJvZHkuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUaGVtZSh0aGVtZU5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy50aGVtZXNbdGhlbWVOYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHRoZW1lTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRoZW1lKHRoZW1lTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJhbmRvbVZpZGVvKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTYXV2ZWdhcmRlciBsZSBjaG9peFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3N0LXRoZW1lJywgdGhlbWVOYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRow6htZSBjaGFuZ8OpIHNpbGVuY2lldXNlbWVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRoZW1lKHRoZW1lTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZXNbdGhlbWVOYW1lXTtcclxuICAgICAgICBpZiAoIXRoZW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsZXMgY291bGV1cnMgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lLXByaW1hcnknLCB0aGVtZS5jb2xvcnMucHJpbWFyeSk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZS1zZWNvbmRhcnknLCB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5KTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lLWFjY2VudCcsIHRoZW1lLmNvbG9ycy5hY2NlbnQpO1xyXG5cclxuICAgICAgICAvLyBBam91dGVyIGNsYXNzZSBkZSB0aMOobWUgYXUgYm9keVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvdGhlbWUtXFx3Ky9nLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGB0aGVtZS0ke3RoZW1lTmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSYW5kb21CYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZXNbdGhpcy5jdXJyZW50VGhlbWVdO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUJnID0gdGhlbWUuYmFja2dyb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhlbWUuYmFja2dyb3VuZHMubGVuZ3RoKV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXBwbGlxdWVyIGxlIGJhY2tncm91bmQgZGlyZWN0ZW1lbnQgc3VyIGxhIGdhbWUtY2FyZFxyXG4gICAgICAgIGNvbnN0IGdhbWVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY2FyZCcpO1xyXG4gICAgICAgIGlmIChnYW1lQ2FyZCkge1xyXG4gICAgICAgICAgICBnYW1lQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3JhbmRvbUJnfScpYDtcclxuICAgICAgICAgICAgZ2FtZUNhcmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG4gICAgICAgICAgICBnYW1lQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgZ2FtZUNhcmQuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgICAgICAgICBnYW1lQ2FyZC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBam91dGVyIHVuIG92ZXJsYXkgcG91ciBsYSBsaXNpYmlsaXTDqVxyXG4gICAgICAgICAgICBpZiAoIWdhbWVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1vdmVybGF5JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gJ3RoZW1lLW92ZXJsYXknO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjQ4LCAyNDcsIDI0NCwgMC44KSAwJSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNDgsIDI0NywgMjQ0LCAwLjcpIDUwJSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNDgsIDI0NywgMjQ0LCAwLjkpIDEwMCVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBnYW1lQ2FyZC5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUydhc3N1cmVyIHF1ZSBsZSBjb250ZW51IHJlc3RlIGF1LWRlc3N1c1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBnYW1lQ2FyZC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZENvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZENvbnRlbnRbaV0gIT09IG92ZXJsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnRbaV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudFtpXS5zdHlsZS56SW5kZXggPSAnMic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmFuZG9tVmlkZW8oKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZV07XHJcbiAgICAgICAgY29uc3QgcmFuZG9tVmlkZW8gPSB0aGVtZS52aWRlb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhlbWUudmlkZW9zLmxlbmd0aCldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBsYSB2aWTDqW8gZGUgYmFja2dyb3VuZCBzdXIgdG91dGUgbGEgcGFnZVxyXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS12aWRlby1iYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuc3JjID0gcmFuZG9tVmlkZW87XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5sb2FkKCk7IC8vIFJlY2hhcmdlciBsYSB2aWTDqW9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFMnYXNzdXJlciBxdWUgbGEgdmlkw6lvIGTDqW1hcnJlXHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbXBvc3NpYmxlIGRlIGxpcmUgbGEgdmlkw6lvIGF1dG9tYXRpcXVlbWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZUJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1lLWJ0bicpO1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgYnRuLmRhdGFzZXQudGhlbWUgPT09IHRoaXMuY3VycmVudFRoZW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFyZ2VyIGxlIHRow6htZSBzYXV2ZWdhcmTDqVxyXG4gICAgbG9hZFNhdmVkVGhlbWUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3N0LXRoZW1lJyk7XHJcbiAgICAgICAgaWYgKHNhdmVkICYmIHRoaXMudGhlbWVzW3NhdmVkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHNhdmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGlzYXRpb25cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cudGhlbWVTeXN0ZW0gPSBuZXcgVGhlbWVTeXN0ZW0oKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2luaXRpYWxpc2F0aW9uIGR1IHN5c3TDqG1lIGRlIHRow6htZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL25hdmJhci5qcyc7XHJcbmltcG9ydCAnLi9KUy9jb21iYXQtM2Qtc3lzdGVtLmpzJzsgLy8gTm91dmVhdSBzeXN0w6htZSBkZSBjb21iYXQgM0RcclxuaW1wb3J0ICcuL0pTL2dhbWUtaW50ZXJmYWNlLmpzJztcclxuaW1wb3J0ICcuL0pTL2d1aWxkLWd1aWRlLmpzJztcclxuaW1wb3J0ICcuL0pTL3RoZW1lLXN5c3RlbS5qcyc7XHJcbi8vIGltcG9ydCAnLi9KUy9yYW5raW5nLXN5c3RlbS5qcyc7IC8vIGRlc2FjdGl2YXRpb24gZHUgY2xhc3NlbWVudCBnw6lyZXIgcGFyIGxlIEpTICggaWwgZXN0IGVuIHBocCBldCBlbiBKUyBkYW5zIGdhbWUtaW50ZXJmYWNlLmpzIGEgbGEgbGlnbmUgMzIwICkgamUgbCdhaSBwYXMgZW5jb3JlIHN1cHByaW3DqSBhdSBjYXMgb3Ugb24gZW4gYSBlbmNvcmUgYmVzb2luIG1haXMgaWwgZmF1ZHJhIGxlIGZhaXJlIGEgbGEgZmluXHJcblxyXG5pbXBvcnQgJy4vSlMvbWF0Y2htYWtpbmctc3lzdGVtLmpzJztcclxuaW1wb3J0ICcuL0pTL3RlYW0tbWFuYWdlbWVudC5qcydcclxuXHJcbmNvbnNvbGUubG9nKCfwn5OmIFtBUFBdIEFwcGxpY2F0aW9uIHByaW5jaXBhbGUgY2hhcmfDqWUgYXZlYyBzeXN0w6htZSBkZSBjbGFzc2VtZW50Jyk7XHJcbiIsIi8vID09PT09PT09PT09PT09PSBOQVZCQVIgTU9ERVJORSBBVkVDIERST1BET1dOID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgTW9kZXJuTmF2YmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cExvZ28oKTtcclxuICAgICAgICB0aGlzLnNldHVwTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBPdXRzaWRlQ2xpY2soKTtcclxuICAgICAgICB0aGlzLnNldHVwRXNjYXBlS2V5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBMb2dvKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ29CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWxvZ28nKTtcclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuICAgICAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1sb2dvLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBpZiAobG9nb0J0biAmJiBkcm9wZG93biAmJiBsb2dvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGxvZ29CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwTW9iaWxlTWVudSgpIHtcclxuICAgICAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJ1cmdlcicpO1xyXG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1vYmlsZS1tZW51Jyk7XHJcblxyXG4gICAgICAgIGlmIChidXJnZXJCdG4gJiYgbW9iaWxlTWVudSkge1xyXG4gICAgICAgICAgICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBPdXRzaWRlQ2xpY2soKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuICAgICAgICAgICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbG9nby1jb250YWluZXInKTtcclxuICAgICAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbW9iaWxlLW1lbnUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZlcm1lciBkcm9wZG93biBzaSBjbGljIGV4dMOpcmlldXJcclxuICAgICAgICAgICAgaWYgKGRyb3Bkb3duICYmIGxvZ29Db250YWluZXIgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5uYXZiYXItbG9nby1jb250YWluZXInKSkge1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGZXJtZXIgbWVudSBtb2JpbGUgc2kgY2xpYyBleHTDqXJpZXVyXHJcbiAgICAgICAgICAgIGlmIChtb2JpbGVNZW51ICYmICFlLnRhcmdldC5jbG9zZXN0KCcubmF2YmFyLWJ1cmdlcicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEVtcMOqY2hlciBmZXJtZXR1cmUgc2kgY2xpYyBkYW5zIGRyb3Bkb3duXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEVzY2FwZUtleSgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbG9nby1jb250YWluZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHJvcGRvd24gJiYgbG9nb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi1hY3RpdmUnLCAhaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duJywgIWlzQWN0aXZlID8gJ291dmVydCcgOiAnZmVybcOpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbG9nby1jb250YWluZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHJvcGRvd24gJiYgbG9nb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJ1cmdlcicpO1xyXG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1vYmlsZS1tZW51Jyk7XHJcblxyXG4gICAgICAgIGlmIChidXJnZXJCdG4gJiYgbW9iaWxlTWVudSkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZW51IG1vYmlsZScsIGlzQWN0aXZlID8gJ2Zlcm3DqScgOiAnb3V2ZXJ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJ1cmdlcicpO1xyXG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1vYmlsZS1tZW51Jyk7XHJcblxyXG4gICAgICAgIGlmIChidXJnZXJCdG4gJiYgbW9iaWxlTWVudSkge1xyXG4gICAgICAgICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93Lm1vZGVybk5hdmJhciA9IG5ldyBNb2Rlcm5OYXZiYXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmF2YmFyIG1vZGVybmUgaW5pdGlhbGlzw6llJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2luaXRpYWxpc2F0aW9uIGRlIGxhIG5hdmJhcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInJlcXVpcmUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiQ29tYmF0M0RTeXN0ZW0iLCJjaGFyYWN0ZXJzIiwiTWFwIiwiYW5pbWF0aW9ucyIsImFjdGlvblF1ZXVlIiwiYmF0dGxlU3RhdGUiLCJzcGVlZE11bHRpcGxpZXIiLCJwYXVzZUJhY2tncm91bmRWaWRlb3MiLCJjcmVhdGUzRENoYXJhY3RlciIsImNoYXJhY3RlckRhdGEiLCJ0ZWFtVHlwZSIsInBvc2l0aW9uIiwiY2hhcmFjdGVySWQiLCJjb25jYXQiLCJuYW1lIiwiRGF0ZSIsIm5vdyIsImJhdHRsZVJvbGUiLCJjb252ZXJ0Q2xhc3NUb0JhdHRsZVJvbGUiLCJyb2xlIiwiY2hhcmFjdGVyU3R5bGUiLCJnZXQzRENoYXJhY3RlclN0eWxlIiwiY2hhcmFjdGVyRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJjc3NUZXh0IiwiaW5uZXJIVE1MIiwiYm9keUNsYXNzIiwiaGVhZENsYXNzIiwiaGVhZEFjY2Vzc29yeSIsInRvcnNvQ2xhc3MiLCJhcm1zQ2xhc3MiLCJsZWZ0V2VhcG9uIiwicmlnaHRXZWFwb24iLCJsZWdzQ2xhc3MiLCJocCIsImdldFJvbGVJY29uIiwicG9zaXRpb25DaGFyYWN0ZXIiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsInNldCIsImVsZW1lbnQiLCJkYXRhIiwidGVhbSIsImN1cnJlbnRIcCIsIm1heEhwIiwiaXNBbGl2ZSIsImFjdGlvbkNvb2xkb3duIiwic3R5bGVzIiwidGFuayIsImRwcyIsInN1cHBvcnQiLCJjaGFyYWN0ZXJDbGFzcyIsInJvbGVNYXBwaW5nIiwibm9ybWFsaXplZENsYXNzIiwidG9Mb3dlckNhc2UiLCJiYXR0bGVmaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJiYXR0bGVmaWVsZFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3NpdGlvbnMiLCJwbGF5ZXIiLCJ4IiwiZW5lbXkiLCJtYXhQb3MiLCJzYWZlUG9zaXRpb24iLCJNYXRoIiwibWluIiwicG9zIiwibGVmdCIsInRvcCIsInpJbmRleCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwidHJhbnNpdGlvbiIsIl9hbmltYXRlQ2hhcmFjdGVyQWN0aW9uIiwiX2NhbGxlZSIsImF0dGFja2VyRWxlbWVudCIsInRhcmdldEVsZW1lbnQiLCJhY3Rpb25UeXBlIiwiYXR0YWNrZXIiLCJ0YXJnZXQiLCJfdCIsIl9jb250ZXh0IiwiZ2V0IiwiYW5pbWF0ZVBoeXNpY2FsQXR0YWNrIiwiYW5pbWF0ZU1hZ2ljU3BlbGwiLCJhbmltYXRlSGVhbCIsImFuaW1hdGVEZWZlbnNlIiwidXBkYXRlQ2hhcmFjdGVyVUkiLCJhbmltYXRlQ2hhcmFjdGVyQWN0aW9uIiwiX3giLCJfeDIiLCJfeDMiLCJfYW5pbWF0ZVBoeXNpY2FsQXR0YWNrIiwiX2NhbGxlZTIiLCJhdHRhY2tlclJlY3QiLCJ0YXJnZXRSZWN0IiwiZGVsdGFYIiwiZGVsdGFZIiwiX2NvbnRleHQyIiwiY2xhc3NMaXN0IiwiYWRkIiwid2FpdCIsImNyZWF0ZUltcGFjdEVmZmVjdCIsInNoYWtlRWxlbWVudCIsInJlbW92ZSIsIl94NCIsIl94NSIsIl9hbmltYXRlTWFnaWNTcGVsbCIsIl9jYWxsZWUzIiwic3BlbGxQcm9qZWN0aWxlIiwiX2NvbnRleHQzIiwiY3JlYXRlTWFnaWNBdXJhIiwiY3JlYXRlU3BlbGxQcm9qZWN0aWxlIiwiY3JlYXRlTWFnaWNJbXBhY3QiLCJfeDYiLCJfeDciLCJfYW5pbWF0ZUhlYWwiLCJfY2FsbGVlNCIsImNhc3RlciIsImhlYWxFZmZlY3QiLCJfY29udGV4dDQiLCJhcHBlbmRDaGlsZCIsIl94OCIsIl94OSIsIl9hbmltYXRlRGVmZW5zZSIsIl9jYWxsZWU1IiwiZGVmZW5kZXIiLCJzaGllbGRFZmZlY3QiLCJfY29udGV4dDUiLCJfeDAiLCJpY29uIiwiZWZmZWN0IiwiY2hhcmFjdGVyIiwiYXVyYSIsImFuaW1hdGlvbiIsInByb2plY3RpbGUiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJpbXBhY3QiLCJoZWFsdGhCYXIiLCJoZWFsdGhUZXh0IiwiaGVhbHRoUGVyY2VudCIsInRleHRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidmlkZW9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ2aWRlbyIsInBhdXNlZCIsInBhdXNlIiwid2FzUGxheWluZyIsInJlc3VtZUJhY2tncm91bmRWaWRlb3MiLCJwbGF5IiwicmVtb3ZlQXR0cmlidXRlIiwibXMiLCJfdGhpcyIsImljb25zIiwiY2xlYW51cCIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsIkdhbWVJbnRlcmZhY2UiLCJjdXJyZW50VGFiIiwiZ3VpbGRJbWFnZXMiLCJjdXJyZW50R3VpbGRJbWFnZUluZGV4IiwiZ3VpbGRHdWlkZUluaXRBdHRlbXB0cyIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsInRlc3RCYXR0bGVmaWVsZCIsInRlc3RCYXR0bGVmaWVsZFZpc3VhbGl6YXRpb24iLCJzZXR1cFRhYnMiLCJzZXR1cFJhbmtpbmdGaWx0ZXJzIiwibG9hZENoYXJhY3RlcnMiLCJjaGVja1VybFRhYiIsInVybEZyYWdtZW50IiwibG9jYXRpb24iLCJoYXNoIiwicmVwbGFjZSIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInRhYlBhcmFtIiwidGFyZ2V0VGFiIiwiaW5jbHVkZXMiLCJzd2l0Y2hUYWIiLCJfdGhpczIiLCJ0YWJCdXR0b25zIiwiYnV0dG9uIiwidGFiTmFtZSIsInRhYiIsImN1cnJlbnRBY3RpdmVCdXR0b24iLCJjdXJyZW50QWN0aXZlUGFuZWwiLCJuZXdUYWJCdXR0b24iLCJuZXdUYWJQYW5lbCIsImdldEVsZW1lbnRCeUlkIiwibG9hZFJhbmtpbmciLCJ1cGRhdGVCYXR0bGVUYWIiLCJ0ZWFtTWFuYWdlbWVudCIsImxvYWRNYXRjaEhpc3RvcnkiLCJfdGhpczMiLCJjb250YWluZXIiLCJ3YXJuIiwic2FtcGxlQ2hhcmFjdGVycyIsInBvd2VyIiwiY3JlYXRlQ2hhcmFjdGVyQ2FyZCIsImNhcmQiLCJzZWFyY2hCdG4iLCJpbmZvVGV4dCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsInRlYW1TaXplIiwiZGlzYWJsZWQiLCJfbG9hZE1hdGNoSGlzdG9yeSIsImhpc3RvcnlDb250YWluZXIiLCJyZXNwb25zZSIsImhpc3RvcnlIVE1MIiwiZmV0Y2giLCJqc29uIiwic3VjY2VzcyIsIm1hdGNoZXMiLCJ0b3RhbF9tYXRjaGVzIiwid2lucyIsImxvc3NlcyIsInJvdW5kIiwibWF0Y2giLCJyZXN1bHRDbGFzcyIsImlzX3dpbm5lciIsInJlc3VsdEljb24iLCJyZXN1bHRUZXh0IiwicGxheWVyX3RlYW0iLCJwbGF5ZXJfcG93ZXIiLCJvcHBvbmVudF90ZWFtIiwib3Bwb25lbnRfcG93ZXIiLCJvcHBvbmVudF9wbGF5ZXIiLCJmaW5pc2hlZF9hdCIsImR1cmF0aW9uIiwiZXJyb3IiLCJzaG93Tm90aWZpY2F0aW9uIiwibWVzc2FnZSIsInR5cGUiLCJ1bmRlZmluZWQiLCJub3RpZmljYXRpb24iLCJnZXROb3RpZmljYXRpb25JY29uIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX3RoaXM0IiwiZmlsdGVyQnV0dG9ucyIsImJ0biIsImZpbHRlciIsIl9sb2FkUmFua2luZyIsInJhbmtpbmdDb250YWluZXIiLCJlbXB0eU1lc3NhZ2UiLCJyYW5raW5nSFRNTCIsInRvcENsYXNzIiwicmFua0NsYXNzIiwicmFua0ljb24iLCJjaGFuZ2VDbGFzcyIsImNoYW5nZVNpZ24iLCJfaSIsIl9wbGF5ZXIiLCJfY2hhbmdlQ2xhc3MiLCJfY2hhbmdlU2lnbiIsIl9hcmdzMiIsIl90MiIsInJhbmtpbmciLCJ1cGRhdGVVc2VyUG9zaXRpb24iLCJjdXJyZW50X3BsYXllcl9wb3NpdGlvbiIsImN1cnJlbnRfcGxheWVyX21tciIsIm1tcl9jaGFuZ2UiLCJpc19jdXJyZW50X3BsYXllciIsInVzZXJuYW1lIiwidXNlckluZm8iLCJ1c2VybmFtZUNvbG9yIiwibW1yIiwidXNlclBvc2l0aW9uRWxlbWVudCIsInVzZXJSYXRpbmdFbGVtZW50IiwibG9hZE1vcmVSYW5raW5nIiwic3RhcnRJbmRleCIsIl9zaG93Q29tYmF0VmlzdWFsaXphdGlvbiIsIm1hdGNoSWQiLCJtYXRjaERhdGEiLCJfdDMiLCJFcnJvciIsIm9rIiwic3RhdHVzIiwiZGlzcGxheUNvbWJhdFZpc3VhbGl6YXRpb25Nb2RhbCIsInNob3dDb21iYXRWaXN1YWxpemF0aW9uIiwiZGV0ZXJtaW5lUGxhdGVhdVR5cGUiLCJwbGF0ZWF1VHlwZXMiLCJmbG9vciIsInJhbmRvbSIsIl90aGlzNSIsIl93aW5kb3ckdXNlckluZm8iLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJKU09OIiwic3RyaW5naWZ5IiwidGVhbUEiLCJ0ZWFtX2EiLCJwbGF5ZXJUZWFtIiwidGVhbUIiLCJ0ZWFtX2IiLCJlbmVteVRlYW0iLCJjdXJyZW50VXNlciIsIm1vZGFsIiwicGxhdGVhdVR5cGUiLCJnZW5lcmF0ZUJhdHRsZWZpZWxkQ2FyZHMiLCJhcmVuYSIsInJhbmRvbUJhY2tncm91bmQiLCJnZXRSYW5kb21CYXR0bGVmaWVsZEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJjb21iYXQzRCIsImluaXRDb21iYXQzRFN5c3RlbSIsImNsb3NlQnRuIiwiX3RoaXM1JGNvbWJhdDNEIiwiY2xvc2VCYXR0bGVmaWVsZE1vZGFsIiwicmVzdW1lQmFja2dyb3VuZFZpZGVvIiwiZXNjYXBlSGFuZGxlciIsIl90aGlzNSRjb21iYXQzRDIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhY2siLCJfdGhpczYiLCJ0ZWFtQ29sb3IiLCJ0ZWFtQm9yZGVyIiwibWFwIiwiY2hhciIsImluZGV4IiwiaW1hZ2VQYXRoIiwiaW1hZ2UiLCJpbWFnZVNyYyIsImZhbGxiYWNrSW1hZ2UiLCJnZXRDaGFyYWN0ZXJJbWFnZUJ5Um9sZSIsInNhZmVDaGFyRGF0YSIsImxldmVsIiwiYXR0YWNrIiwiZ2V0Um9sZU5hbWUiLCJqb2luIiwicm9sZUltYWdlcyIsIm1lZGlldmFsQmdzIiwiZHlzdG9CZ3MiLCJhbGxCZ3MiLCJnZXRLYWFtZWxvdHRQaHJhc2UiLCJzaXR1YXRpb24iLCJwaHJhc2VzIiwic3RhcnQiLCJkZWZlbnNlIiwibWFnaWMiLCJoZWFsIiwidmljdG9yeSIsImRlZmVhdCIsInNpdHVhdGlvblBocmFzZXMiLCJnZW5lcmFsIiwic2hvd0thYW1lbG90dENvbW1lbnQiLCJwaHJhc2UiLCJndWlkZVRleHQiLCJjb21tZW50YXJ5IiwiYXZhdGFyIiwic3JjIiwiZ2V0TmV4dEd1aWxkSW1hZ2UiLCJpbml0QmF0dGxlZmllbGRDb21iYXRWaXN1YWxpemF0aW9uIiwiX3RoaXM3Iiwic3RhcnRCdG4iLCJzcGVlZEJ0bnMiLCJpc1BsYXlpbmciLCJjdXJyZW50U3BlZWQiLCJjbG9zZU1vZGFsIiwiX3RoaXM3JGNvbWJhdDNEIiwiYiIsInBhcnNlRmxvYXQiLCJzcGVlZCIsIl93aW5kb3ckdXNlckluZm8yIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsIl9wbGF5ZXJUZWFtIiwiX2VuZW15VGVhbSIsIl9wbGF5ZXJUZWFtMiIsIl9lbmVteVRlYW0yIiwiX3RoaXM4IiwibWF0Y2hEYXRhS2V5cyIsImtleXMiLCJwbGF5ZXJDaGFyYWN0ZXJzIiwiZW5lbXlDaGFyYWN0ZXJzIiwic2V0dXBDYXJkVG8zRFRyYW5zaXRpb24iLCJzZXR1cEd1aWxkR3VpZGVGb3JDb21iYXQiLCJfdGhpczkiLCJjb21iYXRab25lIiwicGxheWVyQ2FyZHMiLCJjaGFyYWN0ZXIzRCIsImFuaW1hdGVDaGFyYWN0ZXJGcm9tQ2FyZCIsImVuZW15Q2FyZHMiLCJzdGFydEVwaWNDb21iYXQiLCJfdGhpczAiLCJjYXJkUmVjdCIsInBhcnNlSW50IiwidXBkYXRlR3VpbGRHdWlkZVRleHQiLCJleGVjdXRlRXBpY0NvbWJhdFNlcXVlbmNlIiwiX3RoaXMxIiwiQXJyYXkiLCJmcm9tIiwiYWN0aW9uSW5kZXgiLCJleGVjdXRlTmV4dEFjdGlvbiIsImZpbmlzaEVwaWNDb21iYXQiLCJhbGxDaGFyYWN0ZXJzIiwiaXNQbGF5ZXJBdHRhY2tlciIsImNvbnRhaW5zIiwicG90ZW50aWFsVGFyZ2V0cyIsImF0dGFja2VyUm9sZSIsImdldEFjdGlvblR5cGVCeVJvbGUiLCJ1cGRhdGVDZW50cmFsQWN0aW9uRGlzcGxheSIsImRlbGF5IiwiY29tYmF0U3BlZWQiLCJhY3Rpb25zIiwicm9sZUFjdGlvbnMiLCJhY3Rpb25EaXNwbGF5IiwiYXR0YWNrZXJOYW1lIiwidGFyZ2V0TmFtZSIsImFjdGlvblRleHQiLCJnZXRBY3Rpb25UZXh0IiwiYWN0aW9uSWNvbiIsImdldEFjdGlvbkljb24iLCJ0ZXh0cyIsInBoeXNpY2FsX2F0dGFjayIsIm1hZ2ljX3NwZWxsIiwiZGVmZW5kIiwiaXNQbGF5ZXJWaWN0b3J5Iiwic2hvd0NvbWJhdFJlc3VsdCIsImlzVmljdG9yeSIsInJlc3VsdEhUTUwiLCJzaG93QmF0dGxlZmllbGRWaWN0b3J5Iiwic2hvd0JhdHRsZWZpZWxkRGVmZWF0IiwiZ3VpbGRHdWlkZSIsImd1aWxkQnViYmxlIiwiZ3VpZGVBdmF0YXIiLCJjdXJyZW50SW1hZ2VJbmRleCIsInJvdGF0ZUF2YXRhciIsImNvbWJhdFBocmFzZXMiLCJwaHJhc2VJbmRleCIsImNvbW1lbnRJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRleHQiLCJhbmltYXRlZEVsZW1lbnRzIiwiYW5pbWF0aW9uUGxheVN0YXRlIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJtb2NrTWF0Y2hEYXRhIiwiZXZlbnRzIiwiZGVzY3JpcHRpb24iLCJhbmltYXRlQ2FyZFRvUG9zaXRpb24iLCJwb3NpdGlvblJlY3QiLCJjbG9uZSIsImNsb25lTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBsYXlCYXR0bGVmaWVsZENvbWJhdCIsImdlbmVyYXRlRXBpY0NvbWJhdEV2ZW50cyIsInNpbXVsYXRlRXBpY0JhdHRsZWZpZWxkRXZlbnRzIiwiX3RoaXMxMCIsImVmZmVjdHNDb250YWluZXIiLCJhbmltYXRpb25zQ29udGFpbmVyIiwiZXZlbnRJbmRleCIsInByb2Nlc3NOZXh0RXZlbnQiLCJldmVudCIsInNob3dFcGljQmF0dGxlZmllbGRFZmZlY3QiLCJwbGF5RXBpY0FuaW1hdGlvbiIsImNyZWF0ZVNsYXNoRWZmZWN0Iiwic2xhc2giLCJmb250U2l6ZSIsImNvbG9yIiwicmVjdCIsImNvbnRhaW5lclJlY3QiLCJjcmVhdGVTaGllbGRFZmZlY3QiLCJzaGllbGQiLCJjcmVhdGVNYWdpY0VmZmVjdCIsIm1hZ2UiLCJjcmVhdGVIZWFsRWZmZWN0IiwiaGVhbGVyIiwiZ2V0UmFuZG9tQ2hhcmFjdGVyIiwiZmlsdGVyZWQiLCJtYXRjaGVzVGVhbSIsIm1hdGNoZXNSb2xlIiwiZ2V0RWZmZWN0SWNvbiIsImVmZmVjdEljb24iLCJlZmZlY3RDbGFzcyIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRlQXR0YWNrIiwiYW5pbWF0ZU1hZ2ljIiwiYW5pbWF0ZUdlbmVyaWMiLCJfdGhpczExIiwiZ2VuZXJhdGVEZW1vQ29tYmF0RXZlbnRzIiwidmljdG9yeU92ZXJsYXkiLCJkZWZlYXRPdmVybGF5IiwiZ2V0UmFuZG9tQmF0dGxlZmllbGQiLCJiYXR0bGVmaWVsZHMiLCJnZW5lcmF0ZVRlYW1DaGFyYWN0ZXJzIiwiX3RoaXMxMiIsImNoYXJhY3RlcnNIVE1MIiwiaXNBcnJheSIsImNoYXJhY3RlckltYWdlIiwiZ2V0Q2hhcmFjdGVySW1hZ2UiLCJyb2xlQ2xhc3MiLCJhdGsiLCJkZWZhdWx0Q2hhcmFjdGVycyIsImFydHdvcmtVcmwiLCJjaGFyYWN0ZXJOYW1lIiwiY2hhcmFjdGVySW1hZ2VzIiwibm9ybWFsaXplZE5hbWUiLCJkYXNoTmFtZSIsInJvbGVOYW1lcyIsImluaXRDb21iYXRWaXN1YWxpemF0aW9uIiwiX3RoaXMxMyIsImN1cnJlbnRTcGVlZFNwYW4iLCJpbml0R3VpbGRHdWlkZSIsInNwZWVkQ29tbWVudHMiLCJzaG93R3VpbGRHdWlkZUNvbW1lbnQiLCJkaXNwbGF5IiwicGxheUNvbWJhdEFuaW1hdGlvbiIsIl90aGlzMTQiLCJndWlsZEd1aWRlRWxlbWVudCIsImd1aWxkR3VpZGVDb21tZW50cyIsImxhc3RDb21tZW50VGltZSIsImNvbW1lbnRDb29sZG93biIsIl90aGlzMTUiLCJlbW9qaSIsImd1aWxkR3VpZGVBdmF0YXIiLCJjb21tZW50YXJ5RWxlbWVudCIsImNvbW1lbnRhcnlCdWJibGUiLCJidWJibGVDb250YWluZXIiLCJwRWxlbWVudCIsIm5leHRJbWFnZSIsImdldFJhbmRvbUd1aWxkQ29tbWVudCIsImNvbW1lbnRzIiwiX3BsYXlDb21iYXRBbmltYXRpb24iLCJvbkNvbXBsZXRlIiwiY2VudGVyQW5pbWF0aW9uIiwicGxheWVySW5mbyIsImVuZW15SW5mbyIsImJhc2VEZWxheSIsImFuaW1hdGlvbkRlbGF5IiwicmFuZG9tQWN0aW9uIiwicmFuZG9tQ29tbWVudCIsIndpbm5lciIsIm1heCIsImFkZEd1aWxkR3VpZGVDb21tZW50YXJ5IiwiYW5pbWF0ZUV2ZW50IiwiYWN0aW9uIiwic2xlZXAiLCJhbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uIiwiZmluZCIsImFuaW1hdGVWaWN0b3J5IiwiX2FkZEd1aWxkR3VpZGVDb21tZW50YXJ5IiwidG90YWxFdmVudHMiLCJjb21tZW50IiwiYXR0YWNrQ29tbWVudHMiLCJwcm9ncmVzcyIsIl90NCIsInRhcmdldF9uYW1lIiwiX2FuaW1hdGVSYW5kb21DaGFyYWN0ZXJBY3Rpb24iLCJfY2FsbGVlNiIsInRlYW1zIiwicmFuZG9tVGVhbSIsInJhbmRvbUNoYXJJbmRleCIsImVmZmVjdHNFbGVtZW50IiwiZWZmZWN0SFRNTCIsIl9jb250ZXh0NiIsIl9hbmltYXRlRXZlbnQiLCJfY2FsbGVlNyIsImNlbnRlckVsZW1lbnQiLCJfdDUiLCJfY29udGV4dDciLCJhbmltYXRlQ29tYmF0U3RhcnQiLCJhbmltYXRlVGVhbVByZXNlbnRhdGlvbiIsImFuaW1hdGVSb3VuZFN0YXJ0IiwiYW5pbWF0ZVJvdW5kRW5kIiwiX3gxIiwiX3gxMCIsIl9hbmltYXRlQ29tYmF0U3RhcnQiLCJfY2FsbGVlOCIsIl9jb250ZXh0OCIsIl94MTEiLCJfYW5pbWF0ZVRlYW1QcmVzZW50YXRpb24iLCJfY2FsbGVlOSIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCJpc1RlYW1BIiwiX2NvbnRleHQ5IiwiX3gxMiIsIl94MTMiLCJfeDE0IiwiX2FuaW1hdGVSb3VuZFN0YXJ0IiwiX2NhbGxlZTAiLCJfdDYiLCJfY29udGV4dDAiLCJfeDE1IiwiX3gxNiIsIl9jYWxsZWUxIiwiY2hhckluZGV4IiwiX3Q3IiwiX2NvbnRleHQxIiwic2hvd0NlbnRyYWxBbmltYXRpb24iLCJfeDE3IiwiX3gxOCIsIl9zaG93Q2VudHJhbEFuaW1hdGlvbiIsIl9jYWxsZWUxMCIsImFuaW1hdGlvbkVsZW1lbnQiLCJhbmltYXRpb25IVE1MIiwiYW5pbWF0aW9uQ2xhc3MiLCJhdHRhY2tUeXBlcyIsImF0dGFja1R5cGUiLCJtYWdpY1R5cGVzIiwibWFnaWNUeXBlIiwiaGVhbFR5cGVzIiwiaGVhbFR5cGUiLCJkZWZlbnNlVHlwZXMiLCJkZWZlbnNlVHlwZSIsIl90OCIsIl90OSIsIl9jb250ZXh0MTAiLCJodG1sIiwiX3gxOSIsIl9hbmltYXRlUm91bmRFbmQiLCJfY2FsbGVlMTEiLCJfY29udGV4dDExIiwiX3gyMCIsIl9hbmltYXRlVmljdG9yeSIsIl9jYWxsZWUxMiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDQiLCJfY29udGV4dDEyIiwiX3gyMSIsIl94MjIiLCJfc2hvd01hdGNoUmVjYXAiLCJfY2FsbGVlMTMiLCJfdDAiLCJfY29udGV4dDEzIiwiZGlzcGxheU1hdGNoUmVjYXBNb2RhbCIsInNob3dNYXRjaFJlY2FwIiwiX3gyMyIsIl90aGlzMTYiLCJtb2RhbEhUTUwiLCJ3aW5uZXJfdGVhbSIsInN0YXJ0ZWRfYXQiLCJnZW5lcmF0ZUV2ZW50c0hUTUwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJmZXJtZXJCdG4iLCJwYXJ0YWdlckJ0biIsImNsb3NlTWF0Y2hSZWNhcCIsImdldEF0dHJpYnV0ZSIsInNoYXJlTWF0Y2hSZWNhcCIsImV2ZW50c0hUTUwiLCJldmVudENsYXNzIiwiZXZlbnRJY29uIiwiaXNfY3JpdCIsImFtb3VudFRleHQiLCJhbW91bnQiLCJhY3Rvcl9uYW1lIiwiY3JlYXRlZF9hdCIsIl90aGlzMTciLCJzaGFyZVVybCIsIm9yaWdpbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRleHRBcmVhIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJnYW1lSW50ZXJmYWNlRWxlbWVudCIsImdhbWVJbnRlcmZhY2UiLCJHdWlsZEd1aWRlIiwiY3VycmVudEd1aWxkSW1hZ2UiLCJpc0xvZ2dlZEluIiwidXNlck5hbWUiLCJkaWFsb2d1ZVN0YXRlIiwiY2hlY2tVc2VyU3RhdHVzIiwiY3JlYXRlR3VpZGVJbnRlcmZhY2UiLCJzdGFydEltYWdlUm90YXRpb24iLCJzZXR1cEF1dG9EaWFsb2d1ZSIsImd1aWRlSFRNTCIsImF0dGFjaEV2ZW50TGlzdGVuZXJzIiwiZGlhbG9ndWVCb3giLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW5EaWFsb2d1ZSIsImN1cnNvciIsInRpdGxlIiwiY2xvc2VEaWFsb2d1ZSIsImltZ0VsZW1lbnQiLCJhdXRvRGlhbG9ndWVUaW1lciIsInNob3dXZWxjb21lTWVzc2FnZSIsInRleHRFbCIsImJ1dHRvbnNFbCIsInNob3dHYW1lcGxheUhlbHAiLCJzaG93Q2hhcmFjdGVyUm9sZXMiLCJzaG93VGVhbUNyZWF0aW9uIiwic2hvd0RldGFpbGVkUmVzcG9uc2UiLCJzaG93RmluZEJhdHRsZSIsImNvbnRlbnQiLCJyZXR1cm5Ub1ByZXZpb3VzTWVudSIsInNob3dUZWFtU3RyYXRlZ3kiLCJzaG93QmFsYW5jZWRTdHJhdGVneSIsInNob3dBZ2dyZXNzaXZlU3RyYXRlZ3kiLCJzaG93RGVmZW5zaXZlU3RyYXRlZ3kiLCJzaG93VGFua1JvbGUiLCJzaG93RFBTUm9sZSIsInNob3dIZWFsZXJSb2xlIiwic2hvd0F1dG9CYXR0bGUiLCJzaG93RGVidWdNZW51IiwicnVuUG9zaXRpb25pbmdUZXN0IiwiZGVidWdQb3NpdGlvbmluZyIsImRlYnVnQWN0aXZlQ29tYmF0IiwiZGVidWdDb21iYXRQb3NpdGlvbmluZyIsInNob3dTeXN0ZW1JbmZvIiwiY29tYmF0M2RBdmFpbGFibGUiLCJnYW1lSW50ZXJmYWNlQXZhaWxhYmxlIiwiZGVidWdBdmFpbGFibGUiLCJzdGF0dXNDaGVja0ludGVydmFsIiwibWF0Y2htYWtpbmciLCJpblF1ZXVlIiwidGVhbUlkIiwiaW5pdGlhbGl6ZU1hdGNobWFraW5nIiwiY2hlY2tDdXJyZW50U3RhdHVzIiwiam9pbk1hdGNobWFraW5nIiwiY2FuY2VsQnRuIiwiY2FuY2VsTWF0Y2htYWtpbmciLCJiYWNrQnRuIiwicmVzZXRUb1NlYXJjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0ZWFtX2lkIiwic2hvd01hdGNobWFraW5nU3RhdHVzIiwic3RhcnRTdGF0dXNDaGVjayIsImFsZXJ0IiwicmVzZXRTZWFyY2hCdXR0b24iLCJoaWRlTWF0Y2htYWtpbmdTdGF0dXMiLCJzdG9wU3RhdHVzQ2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJ0ZWFtU2VsZWN0aW9uIiwibWF0Y2htYWtpbmdTdGF0dXMiLCJtYXRjaFJlc3VsdCIsInNob3dNYXRjaFJlc3VsdCIsInJlc3VsdCIsInJlc3VsdENvbnRlbnQiLCJyZXN1bHRUaXRsZSIsImlzV2lubmVyIiwid2lubmVyX3RlYW1faWQiLCJ0ZWFtMV9wb3dlciIsInRlYW0yX3Bvd2VyIiwibWF0Y2hfaWQiLCJjaGVja1N0YXR1cyIsInBhdGhuYW1lIiwidXBkYXRlU3RhdHVzRGlzcGxheSIsInNob3dDb21iYXRQZW5kaW5nUmVzdWx0Iiwic3RhdHVzVGV4dCIsIndhaXRpbmdUaW1lIiwicGxheWVyc0luUXVldWUiLCJ3YWl0aW5nX3RpbWUiLCJwbGF5ZXJzX2luX3F1ZXVlIiwidmlld0NvbWJhdFZpc3VhbGl6YXRpb24iLCJza2lwQ29tYmF0VmlzdWFsaXphdGlvbiIsIl92aWV3Q29tYmF0VmlzdWFsaXphdGlvbiIsIl9za2lwQ29tYmF0VmlzdWFsaXphdGlvbiIsInNob3dTaW1wbGVNYXRjaFJlc3VsdCIsIl9zaG93U2ltcGxlTWF0Y2hSZXN1bHQiLCJyZXN1bHRNZXNzYWdlIiwiVGVhbU1hbmFnZW1lbnQiLCJhdmFpbGFibGVDaGFyYWN0ZXJzIiwic2VsZWN0ZWRTbG90IiwiX2luaXQiLCJsb2FkUGxheWVyVGVhbSIsInBhbmVsIiwiYWN0aXZlQnV0dG9uIiwiYWN0aXZlUGFuZWwiLCJkaXNwbGF5Q2hhcmFjdGVycyIsIl9sb2FkUGxheWVyVGVhbSIsInVwZGF0ZVRlYW1EaXNwbGF5IiwiY3JlYXRlVGVhbUF1dG9tYXRpY2FsbHkiLCJfY3JlYXRlVGVhbUF1dG9tYXRpY2FsbHkiLCJ0ZWFtQ2hhcmFjdGVycyIsInNsb3RzIiwic2xvdCIsInBsYWNlaG9sZGVyIiwiZGVmIiwicmVtb3ZlQnRuIiwicmVtb3ZlQ2hhcmFjdGVyIiwib25jbGljayIsIl9sb2FkQ2hhcmFjdGVycyIsInNwZCIsImNyaXQiLCJhZGRCdG4iLCJhZGRDaGFyYWN0ZXIiLCJfYWRkQ2hhcmFjdGVyIiwiY2hhcmFjdGVyX2lkIiwiX3JlbW92ZUNoYXJhY3RlciIsImhhc0Rpc2FibGVkQXR0ciIsImhhc0F0dHJpYnV0ZSIsImhhc0Rpc2FibGVkQ2xhc3MiLCJUaGVtZVN5c3RlbSIsImN1cnJlbnRUaGVtZSIsInRoZW1lcyIsIm1lZGlldmFsIiwiYmFja2dyb3VuZHMiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiYWNjZW50IiwiZHlzdG8iLCJjcmVhdGVUaGVtZVN3aXRjaGVyIiwiY3JlYXRlVmlkZW9CYWNrZ3JvdW5kIiwiYXBwbHlUaGVtZSIsInNldFJhbmRvbUJhY2tncm91bmQiLCJzZXRSYW5kb21WaWRlbyIsInN3aXRjaGVyIiwidGhlbWVCdXR0b25zIiwidGhlbWUiLCJzd2l0Y2hUaGVtZSIsInVwZGF0ZUFjdGl2ZUJ1dHRvbiIsInZpZGVvRWxlbWVudCIsImF1dG9wbGF5IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwib3ZlcmxheUVsZW1lbnQiLCJjaGlsZHJlbiIsInRoZW1lTmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyb290IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJyYW5kb21CZyIsImdhbWVDYXJkIiwib3ZlcmxheSIsImNhcmRDb250ZW50IiwicmFuZG9tVmlkZW8iLCJsb2FkIiwiYnV0dG9ucyIsInRvZ2dsZSIsImxvYWRTYXZlZFRoZW1lIiwic2F2ZWQiLCJnZXRJdGVtIiwidGhlbWVTeXN0ZW0iLCJNb2Rlcm5OYXZiYXIiLCJzZXR1cExvZ28iLCJzZXR1cE1vYmlsZU1lbnUiLCJzZXR1cE91dHNpZGVDbGljayIsInNldHVwRXNjYXBlS2V5IiwibG9nb0J0biIsImRyb3Bkb3duIiwibG9nb0NvbnRhaW5lciIsInRvZ2dsZURyb3Bkb3duIiwiYnVyZ2VyQnRuIiwibW9iaWxlTWVudSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZXN0IiwiY2xvc2VNb2JpbGVNZW51IiwiY2xvc2VEcm9wZG93biIsImlzQWN0aXZlIiwib3ZlcmZsb3ciLCJtb2Rlcm5OYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9