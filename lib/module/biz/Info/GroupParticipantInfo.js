import * as React from 'react';
import { Pressable, View } from 'react-native';
import { useColors } from '../../hook';
import { usePaletteContext, useThemeContext } from '../../theme';
import { Alert } from '../../ui/Alert';
import { CmnButton } from '../../ui/Button';
import { Icon } from '../../ui/Image';
import { CommonSwitch } from '../../ui/Switch';
import { Text } from '../../ui/Text';
import { SimpleToast } from '../../ui/Toast';
import { Avatar } from '../Avatar';
import { BottomSheetNameMenu } from '../BottomSheetMenu';
import { ListItem } from '../ListItem';
import { TopNavigationBar } from '../TopNavigationBar';
import { BlockButtons } from './BlockButtons';
import { useGroupParticipantInfo } from './GroupParticipantInfo.hooks';
/**
 * Group Participant Info Component.
 *
 * If it is a contact, the send message button is displayed, otherwise the add contact button is displayed.
 */
export function GroupParticipantInfo(props) {
  const {
    onBack,
    onClickedNavigationBarButton: onMore,
    hasAudioCall = false,
    hasSendMessage = true,
    hasVideoCall = false,
    onClearChat,
    containerStyle,
    navigationBarVisible,
    customNavigationBar
  } = props;
  const {
    doNotDisturb,
    onDoNotDisturb,
    userId,
    userName,
    userAvatar,
    onCopyId,
    toastRef,
    tr,
    onSendMessage,
    onAddContact,
    onAudioCall,
    onVideoCall,
    isContact,
    onInitButton,
    isSelf,
    onRequestCloseMenu,
    menuRef,
    alertRef
  } = useGroupParticipantInfo(props);
  const {
    cornerRadius
  } = useThemeContext();
  const {
    input
  } = cornerRadius;
  const {
    colors
  } = usePaletteContext();
  const {
    getColor
  } = useColors({
    bg: {
      light: colors.neutral[98],
      dark: colors.neutral[1]
    },
    bg2: {
      light: colors.neutral[95],
      dark: colors.neutral[2]
    },
    fg: {
      light: colors.neutral[1],
      dark: colors.neutral[98]
    },
    t2: {
      light: colors.neutral[3],
      dark: colors.neutral[95]
    },
    t3: {
      light: colors.neutral[7],
      dark: colors.neutral[6]
    },
    icon: {
      light: colors.neutral[3],
      dark: colors.neutral[95]
    }
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      flexGrow: 1,
      backgroundColor: getColor('bg')
    }, containerStyle]
  }, navigationBarVisible !== false ? customNavigationBar ? /*#__PURE__*/React.createElement(React.Fragment, null, customNavigationBar) : /*#__PURE__*/React.createElement(TopNavigationBar, {
    Left: /*#__PURE__*/React.createElement(Pressable, {
      style: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 40
      },
      onPress: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'chevron_left',
      style: {
        width: 24,
        height: 24,
        tintColor: getColor('icon')
      }
    })),
    Right: /*#__PURE__*/React.createElement(Pressable, {
      style: {
        display: isSelf === true || isContact === false ? 'none' : 'flex',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
      },
      onPress: onMore
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'ellipsis_vertical',
      style: {
        height: 24,
        width: 24
      }
    }))
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: {
      alignItems: 'center',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 100,
    url: userAvatar
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(Text, {
    textType: 'large',
    paletteType: 'headline',
    style: {
      color: getColor('fg')
    }
  }, userName ?? userId), /*#__PURE__*/React.createElement(View, {
    style: {
      height: 4
    }
  }), /*#__PURE__*/React.createElement(Pressable, {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    onPress: onCopyId
  }, /*#__PURE__*/React.createElement(Text, {
    textType: 'small',
    paletteType: 'label',
    style: {
      color: getColor('t3')
    }
  }, userId), /*#__PURE__*/React.createElement(Icon, {
    name: 'doc_on_doc',
    style: {
      width: 16,
      height: 16,
      tintColor: getColor('t3')
    }
  })), /*#__PURE__*/React.createElement(View, {
    style: {
      height: 20
    }
  }), isContact === true ? /*#__PURE__*/React.createElement(BlockButtons, {
    hasAudioCall: hasAudioCall,
    hasSendMessage: hasSendMessage,
    hasVideoCall: hasVideoCall,
    onSendMessage: onSendMessage,
    onAudioCall: onAudioCall,
    onVideoCall: onVideoCall,
    onInitButton: onInitButton
  }) : isSelf === true ? null : /*#__PURE__*/React.createElement(CmnButton, {
    sizesType: 'large',
    radiusType: input,
    contentType: 'only-text',
    text: tr('_uikit_info_button_add_contact'),
    onPress: onAddContact
  })), isContact === true ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    containerStyle: {
      paddingHorizontal: 16
    },
    LeftName: /*#__PURE__*/React.createElement(Text, {
      textType: 'medium',
      paletteType: 'title',
      style: {
        color: getColor('fg')
      }
    }, tr('_uikit_info_not_disturb')),
    RightIcon: /*#__PURE__*/React.createElement(View, null, doNotDisturb !== undefined ? /*#__PURE__*/React.createElement(CommonSwitch, {
      height: 31,
      width: 51,
      value: doNotDisturb,
      onValueChange: onDoNotDisturb
    }) : null)
  }), /*#__PURE__*/React.createElement(ListItem, {
    onClicked: onClearChat,
    containerStyle: {
      paddingHorizontal: 16
    },
    LeftName: /*#__PURE__*/React.createElement(Text, {
      textType: 'medium',
      paletteType: 'title',
      style: {
        color: getColor('fg')
      }
    }, tr('_uikit_info_clear_msg'))
  })) : null, /*#__PURE__*/React.createElement(Alert, {
    ref: alertRef
  }), /*#__PURE__*/React.createElement(BottomSheetNameMenu, {
    onRequestModalClose: onRequestCloseMenu,
    ref: menuRef
  }), /*#__PURE__*/React.createElement(SimpleToast, {
    propsRef: toastRef
  }));
}
//# sourceMappingURL=GroupParticipantInfo.js.map