// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  .skin {\n    position: relative;\n    border: 1px solid #edc21e;\n    background: #edc21e;\n    height: 100vh;\n  }\n  .san {\n    position: relative;\n    position: absolute;\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    width: 0px;\n    height: 0px;\n    top: 100px;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 10;\n  }\n  .yuan {\n    border: 1px solid black;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: -16px;\n    margin-left: -10px;\n    border-top-left-radius: 24px 14px;\n    border-top-right-radius: 24px 14px;\n    background: black;\n  }\n\n  .eyes {\n    border: 2px solid #000000;\n    height: 64px;\n    width: 64px;\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    margin-left: -32px;\n    border-radius: 50%;\n    background: #2e2e2e;\n  }\n  .eyes::after {\n    /*\u6CE8\u610F\u4F2A\u5143\u7D20\u8981content\u4E3A\u7A7A\uFF0C\u4E14\u9ED8\u8BA4\u662Fspan\u5C5E\u6027\u5143\u7D208*/\n    content: \"\";\n    display: block;\n    border: 2px solid #000000;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    position: absolute;\n    top: 3px;\n    left: 6px;\n    background: #ffffff;\n    animation: wave1 2s infinite linear;\n  }\n  .eyes.left {\n    /*\u6CE8\u610F\u76F8\u540Cdiv\u5F97id\u4E2D\u95F4\u4E0D\u53EF\u6709\u7A7A\u683C*/\n    transform: translateX(120px);\n    position: relative;\n  }\n  .eyes.right {\n    /*\u6CE8\u610F\u76F8\u540Cdiv\u5F97id\u4E2D\u95F4\u4E0D\u53EF\u6709\u7A7A\u683C*/\n    transform: translateX(-120px);\n  }\n\n  .mouth {\n    width: 180px;\n    height: 180px;\n    position: absolute;\n    left: 50%;\n    top: 130px;\n    margin-left: -90px;\n    overflow: hidden;\n  }\n  .mouth .up .lip {\n    border: 3px solid red;\n    width: 80px;\n    height: 30px;\n    z-index: 1;\n    position: relative;\n    background: #edc21e;\n  }\n  .mouth .up .lip.left {\n    border-color: transparent transparent #000000 #000000;\n    border-bottom-left-radius: 40px 24px;\n    transform: rotate(-20deg) translate(14px, -10px);\n  }\n  .mouth .up .lip.right {\n    border-color: transparent #000000 #000000 transparent;\n    border-bottom-right-radius: 40px 24px;\n    transform: rotate(20deg) translate(68px, -72px);\n  }\n  .mouth .down .yuan1 {\n    border: 3px solid #000000;\n    width: 130px;\n    height: 1000px;\n    position: absolute;\n    left: 50%;\n    margin-left: -65px;\n    bottom: 0;\n    border-bottom-left-radius: 70px 260px;\n    border-bottom-right-radius: 70px 260px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    height: 148px;\n    width: 140px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -70px;\n    border-radius: 80%;\n    background: #ff485f;\n  }\n\n  .face {\n    border: 3px solid black;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    margin-left: -45px;\n    background: #ff0000;\n    top: 180px;\n  }\n  .face.left {\n    transform: translateX(-220px);\n  }\n  .face.right {\n    transform: translateX(220px);\n  }\n\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(10deg);\n    }\n    66% {\n      transform: rotate(-10deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .san:hover {\n    animation: wave 300ms infinite linear;\n  }\n  \n  @keyframes wave1 {\n    0% {\n      transform: translate(0, 0);\n    }\n    25% {\n      transform: translate(20px, 0px);\n    }\n    50% {\n      transform: translate(0px, 20px);\n    }\n    75% {\n      transform: translate(20px, 0);\n    }\n    100% {\n      transform: translate(0, 0);\n    }\n  }";
var _default = string;
exports.default = _default;
},{}],"text.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var demo = document.querySelector("#demo");
var text1 = document.querySelector("#text1");
html.scrollTop = html.scrollHeight; //id可以直接引用，如果为class则不能直接引用。

var id;
var time = 100;
var player = {
  init: function init() {
    demo.innerHTML = _css.default.substring(0, n);
    text1.innerText = _css.default.substring(0, n);
    player.paly();
    player.bindsEvents();
  },
  bindsEvents: function bindsEvents() {
    document.querySelector("#btnPause").onclick = player.pause;
    document.querySelector("#btnStart").onclick = player.paly;
    document.querySelector("#btnSlow").onclick = player.slow;
    document.querySelector("#btnFast").onclick = player.fast;
  },
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      //终止setInterval，使用clearInterval，需要接受setInterval的返回值。
      window.clearInterval(id);
      return;
    }

    demo.innerHTML = _css.default.substring(0, n);
    text1.innerText = _css.default.substring(0, n);
    text.scrollTop = text.scrollHeight; //让滚动条随着可滚动高度得变化不断向下，形成自动发滚动。
  },
  paly: function paly() {
    id = setInterval(player.run, time); //建立循环函数，返回id值，以方便后续终止循环。
    //直接将id提前绑定，因为后续逻辑每一步都需要用到id值
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause(); //先把之前的状态打断，在执行此次操作

    time = 500;
    player.paly();
  },
  fast: function fast() {
    player.pause();
    time = 20;
    player.paly(); //一定要注意在终止再次开始在以后要获得id值方便下次操作。
  }
};
player.init(); //初始化操作。
},{"./css.js":"css.js"}],"../../../Users/apple/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58710" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/apple/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","text.js"], null)
//# sourceMappingURL=/text.89361752.js.map