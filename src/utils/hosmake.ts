// let hospital = require('./hospital');


export default class hosmake {



    //输入
    async readhdata(hosdata,cityfile){

        
        const jsonfile = require('jsonfile')
        // await jsonfile.readFile(cityfile)
        // .then(obj =>{
            
        //     // console.dir(obj);
        //     // console.dir(obj[0])

        //     for(let provindex in obj)
        //     {
        //         console.dir(obj[provindex])
        //     }
        // })


        //医院数据
        // 解析得到文档中的所有 sheet
        var xlsx = require('node-xlsx');
        var sheets = xlsx.parse(hosdata);

        await sheets.forEach(sheet => {

            console.log(sheet['name']);

            // 读取每行内容
            for(var rowId in sheet['data']){
                console.log(rowId);
                var row=sheet['data'][rowId];
                console.log("==================")
                console.log(row);
                console.log("++++++++++++++++++")
                // for(var colId in row){
                //     console.log(colId)
                //     console.log(row[colId])
                // }

                
                //省份数据
                //init
                let hostdt = {}
                let ProvinceCodetemp = 31
                let ProvinceNametemp = ""
                let CityCodetemp = 310
                let CityName = ""
                jsonfile.readFile(cityfile)
                .then(obj =>{
                    for(let provindex in obj)
                    {
                        // console.dir(obj[provindex])
                        let str = row[2];
                        let reg = obj[provindex]["label"];
                        console.dir("=============")
                        console.dir(str)
                        console.dir(obj[provindex]["label"])
                        console.dir("============")
                        let res = str.match(reg)
                        if(res)
                        {
                            ProvinceCodetemp = obj[provindex]["value"]
                            ProvinceNametemp = obj[provindex]["label"]

                            ///////////
                            let dt = new Date();

                            //赋值数据库表
                            hostdt = {
                                Pid:-1,
                                Name:row[0],
                                Value:row[8],
                                Desc:row[6],
                                ProvinceCode:ProvinceCodetemp,
                                ProvinceName:ProvinceNametemp,
                                CityCode:CityCodetemp,
                                CityName:CityName,
                                ClassifyId:-1,
                                LevelId:-1,
                                Address:row[2],
                                Phone:row[5],
                                BedQuantity:0,
                                DoctorQuantity:0,
                                CreateDateTime:dt.toString(),
                                CreateUserId:1,
                                EditDateTime:dt.toString(),
                                EditUserId:1,
                                StatusId:1,
                                StatusName:"正常",
                                StatusValue:1,
                            }
                            
                            console.dir(hostdt)
                            //
                            break;
                        }





                    }
                })



                


                console.log("==================")

                //test reg
                // let str = "山东省(鲁)";
                // let reg = "山东省";
                // let res = str.match(reg);
                // console.dir(res);
                // if(res)
                // {
                //     console.dir("found")
                // }
                // else{
                //     console.dir("not found")
                // }
                // let str1 = "山东省(鲁)";
                // let reg1 = "江西省";
                // let res1 = str1.match(reg1)
                // console.dir(res1)
                // if(res1)
                // {
                //     console.dir("found")
                // }
                // else{
                //     console.dir("not found")
                // }
                
                
            }
            
            
        });




    }

    //输出
    async outputdata(resultdata){

        console.log(resultdata)

        


    }


}