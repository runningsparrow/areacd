import hosmake from './hosmake';

let hm = new hosmake();
let hosdata = '../../data/hospitaldata.xlsx';
let cityfile = '../../data/city.json';
let outputfile = '../../data/outputhospital'

//处理输入
// hm.readhdata(hosdata,cityfile,outputfile)
//写数据库
hm.outputdata(outputfile)

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

console.log("==========finished===========")

