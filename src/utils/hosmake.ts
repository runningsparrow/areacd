let hospital = require('./hospital');


export default class hosmake {



    //输入
    async readhdata(hosdata,cityfile,outputfile){

        
        const jsonfile = require('jsonfile')
        const fs = require('fs'); 
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
        let outputdata = []

        await sheets.forEach(sheet => {

            console.log(sheet['name']);

            //init
            let hostdt = {}
            let ProvinceCodetemp = 31
            let ProvinceNametemp = ""
            let CityCodetemp = 310
            let CityName = ""
            let obj = jsonfile.readFileSync(cityfile)

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
                
                for(let provindex in obj)
                {
                    // console.dir(obj[provindex])
                    let str = row[2];
                    let reg = obj[provindex]["label"];
                    // console.dir("=============")
                    // console.dir(str)
                    // console.dir(obj[provindex]["label"])
                    // console.dir("============")
                    let res = str.match(reg)
                    if(res)
                    {
                        ProvinceCodetemp = obj[provindex]["value"]
                        ProvinceNametemp = obj[provindex]["label"]

                        for(let cityindex in obj[provindex]["children"])
                        {
                            let str1 = row[3];
                            //直辖市特殊处理 北京市 天津市 上海市 重庆市
                            let reg1 = ""
                            if(obj[provindex]["label"] == "北京市" || obj[provindex]["label"] == "天津市"
                            || obj[provindex]["label"] == "上海市" || obj[provindex]["label"] == "重庆市"
                            )
                            {
                                reg1 = obj[provindex]["label"];
                            }
                            else
                            {
                                reg1 = obj[provindex]["children"][cityindex]["label"];
                            }
                            
                            let res1 = str1.match(reg1)

                            if(res1)
                            {   
                                
                                CityCodetemp = obj[provindex]["children"][cityindex]["value"];
                                CityName = obj[provindex]["children"][cityindex]["label"];
                                break;
                            }
                            

                        }

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
                        outputdata.push(hostdt)
                        //
                        break;
                    }





                }
                



                


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
            
            //output to fileJSON.stringify 
            fs.writeFileSync(outputfile,JSON.stringify(outputdata))
        });




    }

    //输出
    async outputdata(resultfile){

        //read json file
        const jsonfile = require('jsonfile')
        let obj = jsonfile.readFileSync(resultfile)
        
        for(let dataindex in obj)
        {
            console.dir(obj[dataindex])


            //insert database
            // hospital.create({
            //     Pid:obj[dataindex].Pid,
            //     Name:obj[dataindex].Name,
            //     Value:obj[dataindex].Value,
            //     Desc:obj[dataindex].Desc,
            //     ProvinceCode:obj[dataindex].ProvinceCode,
            //     ProvinceName:obj[dataindex].ProvinceName,
            //     CityCode:obj[dataindex].CityCode,
            //     CityName:obj[dataindex].CityName,
            //     ClassifyId:obj[dataindex].ClassifyId,
            //     LevelId:obj[dataindex].LevelId,
            //     Address:obj[dataindex].Address,
            //     Phone:obj[dataindex].Phone,
            //     BedQuantity:obj[dataindex].BedQuantity,
            //     DoctorQuantity:obj[dataindex].DoctorQuantity,
            //     CreateDateTime:obj[dataindex].CreateDateTime,
            //     CreateUserId:obj[dataindex].CreateUserId,
            //     EditDateTime:obj[dataindex].EditDateTime,
            //     EditUserId:obj[dataindex].EditUserId,
            //     StatusId:obj[dataindex].StatusId,
            //     StatusName:obj[dataindex].StatusName,
            //     StatusValue:obj[dataindex].StatusValue,
            //     Key: "",
            //     NationCode: "",
            //     NationName: "",
            //     DivisionCode: "",
            //     DivisionName: "",
            //     ClassifyName: "",
            //     LevelName: "",
            //     IsGeneral: 0,
            //     IsSpecial: 0,
            // }).then(res=> {
            //     console.dir(res)
            // })
        }
        


    }


}