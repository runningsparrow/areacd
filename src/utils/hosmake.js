"use strict";
// let hospital = require('./hospital');
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
var hosmake = /** @class */ (function () {
    function hosmake() {
    }
    //输入
    hosmake.prototype.readhdata = function (hosdata, cityfile) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonfile, xlsx, sheets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jsonfile = require('jsonfile');
                        xlsx = require('node-xlsx');
                        sheets = xlsx.parse(hosdata);
                        return [4 /*yield*/, sheets.forEach(function (sheet) {
                                console.log(sheet['name']);
                                var _loop_1 = function () {
                                    console.log(rowId);
                                    row = sheet['data'][rowId];
                                    console.log("==================");
                                    console.log(row);
                                    console.log("++++++++++++++++++");
                                    // for(var colId in row){
                                    //     console.log(colId)
                                    //     console.log(row[colId])
                                    // }
                                    //省份数据
                                    //init
                                    var hostdt = {};
                                    var ProvinceCodetemp = 31;
                                    var ProvinceNametemp = "";
                                    var CityCodetemp = 310;
                                    var CityName = "";
                                    jsonfile.readFile(cityfile)
                                        .then(function (obj) {
                                        for (var provindex in obj) {
                                            // console.dir(obj[provindex])
                                            var str = row[2];
                                            var reg = obj[provindex]["label"];
                                            console.dir("=============");
                                            console.dir(str);
                                            console.dir(obj[provindex]["label"]);
                                            console.dir("============");
                                            var res = str.match(reg);
                                            if (res) {
                                                ProvinceCodetemp = obj[provindex]["value"];
                                                ProvinceNametemp = obj[provindex]["label"];
                                                ///////////
                                                var dt = new Date();
                                                //赋值数据库表
                                                hostdt = {
                                                    Pid: -1,
                                                    Name: row[0],
                                                    Value: row[8],
                                                    Desc: row[6],
                                                    ProvinceCode: ProvinceCodetemp,
                                                    ProvinceName: ProvinceNametemp,
                                                    CityCode: CityCodetemp,
                                                    CityName: CityName,
                                                    ClassifyId: -1,
                                                    LevelId: -1,
                                                    Address: row[2],
                                                    Phone: row[5],
                                                    BedQuantity: 0,
                                                    DoctorQuantity: 0,
                                                    CreateDateTime: dt.toString(),
                                                    CreateUserId: 1,
                                                    EditDateTime: dt.toString(),
                                                    EditUserId: 1,
                                                    StatusId: 1,
                                                    StatusName: "正常",
                                                    StatusValue: 1
                                                };
                                                console.dir(hostdt);
                                                //
                                                break;
                                            }
                                        }
                                    });
                                    console.log("==================");
                                };
                                var row;
                                // 读取每行内容
                                for (var rowId in sheet['data']) {
                                    _loop_1();
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //输出
    hosmake.prototype.outputdata = function (resultdata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(resultdata);
                return [2 /*return*/];
            });
        });
    };
    return hosmake;
}());
exports["default"] = hosmake;
