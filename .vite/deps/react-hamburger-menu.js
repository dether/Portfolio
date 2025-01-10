import {
  require_prop_types
} from "./chunk-YU7MVGIP.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/react-hamburger-menu/dist/HamburgerMenu.js
var require_HamburgerMenu = __commonJS({
  "node_modules/react-hamburger-menu/dist/HamburgerMenu.js"(exports) {
    exports.__esModule = true;
    exports["default"] = HamburgerMenu;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function HamburgerMenu(props) {
      var width = (props.width || 36) + "px", height = (props.height || 30) + "px", halfHeight = parseInt(height.replace("px", "")) / 2 + "px", isOpen = props.isOpen || false, strokeWidth = props.strokeWidth || 2, halfStrokeWidth = "-" + strokeWidth / 2 + "px", animationDuration = props.animationDuration || "0.4";
      var getTransformValue = function getTransformValue2(isOpen2, defaultPos, rotateVal) {
        return "translate3d(0," + (isOpen2 ? halfHeight : defaultPos) + ",0) rotate(" + (isOpen2 ? rotateVal + "deg" : "0") + ")";
      };
      var styles = {
        container: {
          width,
          height,
          position: "relative",
          transform: "rotate(" + (props.rotate || 0) + "deg)"
        },
        lineBase: {
          display: "block",
          height: strokeWidth + "px",
          width: "100%",
          background: props.color || "#000",
          transitionTimingFunction: "ease",
          transitionDuration: animationDuration + "s",
          borderRadius: (props.borderRadius || 0) + "px",
          transformOrigin: "center",
          position: "absolute"
        },
        firstLine: {
          transform: getTransformValue(isOpen, 0, 45),
          marginTop: halfStrokeWidth
        },
        secondLine: {
          transitionTimingFunction: "ease-out",
          transitionDuration: animationDuration / 4 + "s",
          opacity: isOpen ? "0" : "1",
          top: halfHeight,
          marginTop: halfStrokeWidth
        },
        thirdLine: {
          transform: getTransformValue(isOpen, height, -45),
          marginTop: halfStrokeWidth
        }
      };
      return _react["default"].createElement("div", {
        style: styles.container,
        className: props.className,
        onClick: props.menuClicked
      }, _react["default"].createElement("span", {
        style: Object.assign({}, styles.lineBase, styles.firstLine)
      }), _react["default"].createElement("span", {
        style: Object.assign({}, styles.lineBase, styles.secondLine)
      }), _react["default"].createElement("span", {
        style: Object.assign({}, styles.lineBase, styles.thirdLine)
      }));
    }
    HamburgerMenu.propTypes = {
      isOpen: _propTypes["default"].bool.isRequired,
      menuClicked: _propTypes["default"].func.isRequired,
      width: _propTypes["default"].number,
      height: _propTypes["default"].number,
      strokeWidth: _propTypes["default"].number,
      rotate: _propTypes["default"].number,
      color: _propTypes["default"].string,
      borderRadius: _propTypes["default"].number,
      animationDuration: _propTypes["default"].number,
      className: _propTypes["default"].string
    };
  }
});
export default require_HamburgerMenu();
//# sourceMappingURL=react-hamburger-menu.js.map
