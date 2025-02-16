"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorCode = void 0;
let ErrorCode = /*#__PURE__*/function (ErrorCode) {
  ErrorCode[ErrorCode["none"] = 0] = "none";
  ErrorCode[ErrorCode["common"] = 1] = "common";
  ErrorCode[ErrorCode["enum"] = 10] = "enum";
  ErrorCode[ErrorCode["existed"] = 11] = "existed";
  ErrorCode[ErrorCode["params"] = 12] = "params";
  ErrorCode[ErrorCode["max_count"] = 13] = "max_count";
  ErrorCode[ErrorCode["network"] = 15] = "network";
  ErrorCode[ErrorCode["chat_sdk"] = 900] = "chat_sdk";
  ErrorCode[ErrorCode["chat_uikit"] = 901] = "chat_uikit";
  ErrorCode[ErrorCode["chat_callkit"] = 902] = "chat_callkit";
  ErrorCode[ErrorCode["chatroom_uikit"] = 903] = "chatroom_uikit";
  ErrorCode[ErrorCode["init_error"] = 1000] = "init_error";
  ErrorCode[ErrorCode["login_error"] = 1001] = "login_error";
  ErrorCode[ErrorCode["logout_error"] = 1002] = "logout_error";
  ErrorCode[ErrorCode["refresh_token_error"] = 1003] = "refresh_token_error";
  ErrorCode[ErrorCode["msg_send_error"] = 1100] = "msg_send_error";
  ErrorCode[ErrorCode["msg_recall_error"] = 1101] = "msg_recall_error";
  ErrorCode[ErrorCode["msg_translate_error"] = 1102] = "msg_translate_error";
  ErrorCode[ErrorCode["msg_report_error"] = 1103] = "msg_report_error";
  ErrorCode[ErrorCode["get_all_conversations_error"] = 1104] = "get_all_conversations_error";
  ErrorCode[ErrorCode["room_join_error"] = 1200] = "room_join_error";
  ErrorCode[ErrorCode["room_leave_error"] = 1201] = "room_leave_error";
  ErrorCode[ErrorCode["room_kick_member_error"] = 1202] = "room_kick_member_error";
  ErrorCode[ErrorCode["room_mute_member_error"] = 1203] = "room_mute_member_error";
  ErrorCode[ErrorCode["room_unmute_member_error"] = 1204] = "room_unmute_member_error";
  ErrorCode[ErrorCode["room_fetch_member_list_error"] = 1205] = "room_fetch_member_list_error";
  ErrorCode[ErrorCode["room_fetch_mute_member_list_error"] = 1206] = "room_fetch_mute_member_list_error";
  ErrorCode[ErrorCode["room_fetch_member_info_error"] = 1207] = "room_fetch_member_info_error";
  ErrorCode[ErrorCode["room_fetch_room_list_error"] = 1208] = "room_fetch_room_list_error";
  ErrorCode[ErrorCode["room_upload_user_info_error"] = 1209] = "room_upload_user_info_error";
  ErrorCode[ErrorCode["network_error"] = 2000] = "network_error";
  ErrorCode[ErrorCode["ui_error"] = 3000] = "ui_error";
  ErrorCode[ErrorCode["not_impl"] = 10000] = "not_impl";
  return ErrorCode;
}({});
exports.ErrorCode = ErrorCode;
//# sourceMappingURL=code.js.map