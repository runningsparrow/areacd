"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
var region = require('./region');
var PROV = 7;
var CITY = 12;
var COUNTY = 14;
var TOWN = 17;
var provscode = [];
var provsname = [];
var areajsons = [];
var areacd = /** @class */ (function () {
    function areacd() {
    }
    areacd.prototype.readjson = function (inputfile) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonfile, file;
            return __generator(this, function (_a) {
                jsonfile = require('jsonfile');
                file = inputfile;
                jsonfile.readFile(file)
                    .then(function (obj) {
                    console.dir(obj.length);
                    for (var i = 0; i < obj.length; i++) {
                        console.dir(obj[i].length);
                        // console.dir(obj[i])
                        for (var j = 0; j < obj[i].length; j++) {
                            // console.dir(obj[i][j].url)
                            // console.dir(obj[i][j].url.length)
                            if (obj[i][j].url.length == PROV) {
                                // console.dir(obj[i][j].text)
                                provscode.push(obj[i][j].url);
                                provsname.push(obj[i][j].text);
                            }
                            if (obj[i][j].url.length == CITY) {
                                for (var k = 0; k < provscode.length; k++) {
                                    if (obj[i][j].url.substring(0, 2) == provscode[k].substring(0, 2)) {
                                        // console.log(obj[i][j].url.substring(0,2))
                                        // obj[i][j].text= obj[i][j].text.replace(/\'/g, "");
                                        console.dir(obj[i][j].text);
                                        // console.dir(typeof obj[i][j].text === 'number')
                                        console.dir(isNaN(obj[i][j].text));
                                        if (isNaN(obj[i][j].text) == false) {
                                            var areajson = { "area": "", "areacode": "", "prov": "" };
                                            areajson.area = obj[i][j + 1].text;
                                            areajson.areacode = obj[i][j].text;
                                            areajson.prov = provsname[k];
                                            areajsons.push(areajson);
                                            //clear
                                            // areajson.area = ""
                                            // areajson.areacode = ""
                                            // areajson.prov = ""
                                        }
                                    }
                                }
                            }
                            if (obj[i][j].url.length == COUNTY) {
                                for (var k = 0; k < provscode.length; k++) {
                                    if (obj[i][j].url.substring(3, 5) == provscode[k].substring(0, 2)) {
                                        console.dir(obj[i][j].text);
                                        console.dir(isNaN(obj[i][j].text));
                                        if (isNaN(obj[i][j].text) == false) {
                                            var areajson = { "area": "", "areacode": "", "prov": "" };
                                            areajson.area = obj[i][j + 1].text;
                                            areajson.areacode = obj[i][j].text;
                                            areajson.prov = provsname[k];
                                            areajsons.push(areajson);
                                        }
                                    }
                                }
                            }
                            if (obj[i][j].url.length == TOWN) {
                                for (var k = 0; k < provscode.length; k++) {
                                    if (obj[i][j].url.substring(3, 5) == provscode[k].substring(0, 2)) {
                                        console.dir(obj[i][j].text);
                                        console.dir(isNaN(obj[i][j].text));
                                        if (isNaN(obj[i][j].text) == false) {
                                            var areajson = { "area": "", "areacode": "", "prov": "" };
                                            areajson.area = obj[i][j + 1].text;
                                            areajson.areacode = obj[i][j].text;
                                            areajson.prov = provsname[k];
                                            areajsons.push(areajson);
                                        }
                                    }
                                }
                            }
                        }
                        console.log("======");
                    }
                    console.dir(provscode);
                    console.dir(provsname);
                    // console.dir(areajsons)
                    for (var x = 0; x < areajsons.length; x++) {
                        console.dir(areajsons[x]);
                    }
                })["catch"](function (error) {
                    console.error(error);
                });
                return [2 /*return*/, areajsons];
            });
        });
    };
    areacd.prototype.putdata = function (inputdata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                region.create({
                    Pid: "1",
                    Name: "xxx",
                    Code: "111",
                    Pname: "bj",
                    ImportVersion: "2016"
                }).then(function (res) {
                    console.dir(res);
                });
                return [2 /*return*/, 0];
            });
        });
    };
    return areacd;
}());
exports["default"] = areacd;
