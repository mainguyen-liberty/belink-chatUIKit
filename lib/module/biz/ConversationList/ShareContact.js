function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { ContactList } from '../ContactList';
export function ShareContact(props) {
  return /*#__PURE__*/React.createElement(ContactList, _extends({
    contactType: 'share-contact'
  }, props));
}
//# sourceMappingURL=ShareContact.js.map