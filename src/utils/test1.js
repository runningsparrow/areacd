"use strict";
exports.__esModule = true;
var areacd_1 = require("./areacd");
var ac = new areacd_1["default"]();
var inputfile = '../../data/region.json';
// ac.readjson(inputfile);
var inputdata = { "area": "", "areacode": "", "prov": "" };
ac.putdata(inputdata);
