"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
require("./App.css");
require("@shopify/polaris/build/esm/styles.css");
var Button_1 = require("./smartrr-ui-components/actions/Button");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        "Smartrr UI ",
        react_1["default"].createElement(Button_1.Button, null, "CLICK")));
}
exports["default"] = App;
//# sourceMappingURL=App.js.map