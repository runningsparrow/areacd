"use strict";
exports.__esModule = true;
var hosmake_1 = require("./hosmake");
var hm = new hosmake_1["default"]();
var hosdata = '../../data/hospitaldata.xlsx';
var cityfile = '../../data/city.json';
hm.readhdata(hosdata, cityfile);
// ac.readjson(inputfile)
// .then(areas => {
//     console.dir(areas)
//     let inputdata = areas;
//     console.dir(inputdata);
//     ac.putdata(inputdata);
// });
// ac.readjson(inputfile);
// console.dir(areas);
// ac.putdata(areas);
// let inputdata = {"area":"","areacode":"","prov":""};
console.log("==========finished===========");
