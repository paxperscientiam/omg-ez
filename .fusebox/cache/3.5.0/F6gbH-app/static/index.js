module.exports = { contents: "\"use strict\";\n// tslint:disable:no-console\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jQuery = require(\"jquery\");\njQuery(function () {\n    console.log(\"ready!\");\n    const box = function () {\n        const data = jQuery('[box]').data();\n        const defaultConfig = {\n            \"background\": \"black\",\n            \"min-height\": \"10em\",\n            \"min-width\": \"10em\",\n            \"position\": \"absolute\"\n        };\n        const config = jQuery.extend(true, defaultConfig, data);\n        console.log(data);\n        jQuery('[box]')\n            .css(config);\n    };\n    box();\n});\n//# sourceMappingURL=index.js.map",
dependencies: ["jquery"],
sourceMap: {},
headerContent: undefined,
mtime: 1540011343908,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
