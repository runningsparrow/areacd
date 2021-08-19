// let hospital = require('./hospital');


export default class hosmake {



    //输入
    async readhdata(hosdata,cityfile){

        //省份数据
        


        //医院数据
        // 解析得到文档中的所有 sheet
        var xlsx = require('node-xlsx');
        var sheets = xlsx.parse(hosdata);

        sheets.forEach(sheet => {

            console.log(sheet['name']);

            // 读取每行内容
            for(var rowId in sheet['data']){
                console.log(rowId);
                var row=sheet['data'][rowId];
                console.log(row);
            }
            
        });

        
        
        

        



    }

    //输出
    async outputdata(resultdata){

        console.log(resultdata)

        


    }


}