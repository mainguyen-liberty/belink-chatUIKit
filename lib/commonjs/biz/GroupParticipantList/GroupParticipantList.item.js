"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupParticipantListItem = GroupParticipantListItem;
exports.GroupParticipantListItemMemo = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hook = require("../../hook");
var _theme = require("../../theme");
var _Button = require("../../ui/Button");
var _Text = require("../../ui/Text");
var _Avatar = require("../Avatar");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Group Participant List Item Component.
 */
function GroupParticipantListItem(props) {
  const {
    data,
    onClicked,
    onLongPressed,
    onCheckClicked
  } = props;
  const {
    colors
  } = (0, _theme.usePaletteContext)();
  const {
    getColor
  } = (0, _hook.useColors)({
    bg: {
      light: colors.neutral[98],
      dark: colors.neutral[1]
    },
    t1: {
      light: colors.neutral[1],
      dark: colors.neutral[98]
    },
    t2: {
      light: colors.neutral[5],
      dark: colors.neutral[6]
    },
    divider: {
      light: colors.neutral[9],
      dark: colors.neutral[2]
    },
    no_checked: {
      light: colors.neutral[7],
      dark: colors.neutral[4]
    },
    checked: {
      light: colors.primary[5],
      dark: colors.primary[6]
    },
    disable: {
      light: colors.neutral[7],
      dark: colors.neutral[4]
    },
    enable: {
      light: colors.primary[5],
      dark: colors.primary[6]
    }
  });
  const getCheckedButton = (disable, checked) => {
    const name = checked => {
      return checked !== false ? 'checked_rectangle' : 'unchecked_rectangle';
    };
    const color = disable => {
      return disable !== true ? getColor('enable') : getColor('disable');
    };
    if (checked === undefined) {
      return null;
    }
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: {
        marginRight: 12
      }
    }, /*#__PURE__*/React.createElement(_Button.IconButton, {
      iconName: name(checked),
      style: {
        height: 28,
        width: 28,
        tintColor: color(disable)
      },
      onPress: () => {
        if (disable !== true) {
          onCheckClicked === null || onCheckClicked === void 0 ? void 0 : onCheckClicked(data);
        }
      }
    }));
  };
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      backgroundColor: getColor('bg')
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: {
      width: '100%',
      height: 59.5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16
    },
    onPress: () => {
      if (data.checked !== undefined) {
        if (data.disable !== true) {
          onCheckClicked === null || onCheckClicked === void 0 ? void 0 : onCheckClicked(data);
        }
      } else {
        onClicked === null || onClicked === void 0 ? void 0 : onClicked(data);
      }
    },
    onLongPress: () => {
      onLongPressed === null || onLongPressed === void 0 ? void 0 : onLongPressed(data);
    }
  }, getCheckedButton(data.disable, data.checked), /*#__PURE__*/React.createElement(_Avatar.Avatar, {
    url: data.memberAvatar,
    size: 40
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      flexGrow: 1,
      paddingLeft: 12,
      maxWidth: '80%'
    }
  }, /*#__PURE__*/React.createElement(_Text.SingleLineText, {
    paletteType: 'title',
    textType: 'medium',
    style: {
      color: getColor('t1')
    }
  }, data.memberName ?? data.memberId))), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      width: '100%',
      borderBottomWidth: 0.5,
      borderBottomColor: getColor('divider'),
      marginLeft: 68
    }
  }));
}
const GroupParticipantListItemMemo = /*#__PURE__*/React.memo(GroupParticipantListItem);
exports.GroupParticipantListItemMemo = GroupParticipantListItemMemo;
//# sourceMappingURL=GroupParticipantList.item.js.map