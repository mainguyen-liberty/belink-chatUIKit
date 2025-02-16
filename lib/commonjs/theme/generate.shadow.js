"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateShadow = generateShadow;
var _error = require("../error");
function generateShadow(params) {
  const {
    themeType
  } = params;
  switch (themeType) {
    case 'light':
      return generateLightShadow(params);
    case 'dark':
      return generateDarkShadow(params);
    default:
      throw new _error.UIKitError({
        code: _error.ErrorCode.enum,
        extra: `ThemeType: ${themeType}`
      });
  }
}
function generateLightShadow(params) {
  const {} = params;
  const ret = {};
  const s = generateShadowSize();
  ret.style = {
    small: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.15,
      ...s.style.small1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.1,
      ...s.style.small2
    }],
    middle: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.15,
      ...s.style.middle1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.1,
      ...s.style.middle2
    }],
    large: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.15,
      ...s.style.large1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.08,
      ...s.style.large2
    }]
  };
  return ret;
}
function generateDarkShadow(params) {
  const {} = params;
  const ret = {};
  const s = generateShadowSize();
  ret.style = {
    small: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.3,
      ...s.style.small1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.2,
      ...s.style.small2
    }],
    middle: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.3,
      ...s.style.middle1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.2,
      ...s.style.middle2
    }],
    large: [{
      shadowColor: 'hsla(203, 8%, 30%, 1)',
      shadowOpacity: 0.3,
      ...s.style.large1
    }, {
      shadowColor: 'hsla(204, 10%, 10%, 1)',
      shadowOpacity: 0.16,
      ...s.style.large2
    }]
  };
  return ret;
}
function generateShadowSize() {
  const ret = {};
  ret.style = {
    small1: {
      elevation: 6,
      shadowRadius: 3,
      shadowOffset: {
        width: 0,
        height: 1
      }
    },
    small2: {
      elevation: 4,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 1
      }
    },
    middle1: {
      elevation: 6,
      shadowRadius: 3,
      shadowOffset: {
        width: 0,
        height: 1
      }
    },
    middle2: {
      elevation: 16,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4
      }
    },
    large1: {
      elevation: 72,
      shadowRadius: 36,
      shadowOffset: {
        width: 0,
        height: 24
      }
    },
    large2: {
      elevation: 48,
      shadowRadius: 24,
      shadowOffset: {
        width: 8,
        height: 0
      }
    }
  };
  return ret;
}
//# sourceMappingURL=generate.shadow.js.map