
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNChatUikitSpec.h"

@interface ChatUikit : NSObject <NativeChatUikitSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ChatUikit : NSObject <RCTBridgeModule>
#endif

@end
