"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilesNameParser = /** @class */ (function () {
    function FilesNameParser(files) {
        this._files = files;
        this.parse();
    }
    FilesNameParser.prototype.parse = function () {
        for (var _i = 0, _a = this._files; _i < _a.length; _i++) {
            var file = _a[_i];
            var splitedFile = file.split('.');
            var extension = splitedFile[splitedFile.length - 1];
            if (extension == 'txt')
                this._versionFile = file;
            else
                this._appFile = file;
        }
    };
    Object.defineProperty(FilesNameParser.prototype, "versionFile", {
        get: function () {
            return this._versionFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilesNameParser.prototype, "appFile", {
        get: function () {
            return this._appFile;
        },
        enumerable: false,
        configurable: true
    });
    return FilesNameParser;
}());
exports.default = FilesNameParser;
//# sourceMappingURL=index.js.map