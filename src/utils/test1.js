"use strict";
exports.__esModule = true;
var areacd_1 = require("./areacd");
var ac = new areacd_1["default"]();
var inputfile = '../../data/region.json';
// ac.readjson(inputfile)
// .then(areas => {
//     console.dir(areas)
//     let inputdata = areas;
//     console.dir(inputdata);
//     ac.putdata(inputdata);
// });
ac.readjson(inputfile);
// console.dir(areas);
// ac.putdata(areas);
// let inputdata = {"area":"","areacode":"","prov":""};
console.log("==========finished===========");
