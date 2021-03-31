// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
let region = require('./region');

const PROV = 7
const CITY = 12
const COUNTY = 14
const TOWN = 17 
const provscode = []
const provsname = []


const PROVDATA = [
    {Pid:0,Name:"北京市",Code:"110000000000",Panme:"北京市",ImportVersion:"2016",},
    {Pid:0,Name:"天津市",Code:"120000000000",Panme:"天津市",ImportVersion:"2016",},
    {Pid:0,Name:"河北省",Code:"130000000000",Panme:"河北省",ImportVersion:"2016",},
    {Pid:0,Name:"山西省",Code:"140000000000",Panme:"山西省",ImportVersion:"2016",},
    {Pid:0,Name:"内蒙古自治区",Code:"150000000000",Panme:"内蒙古自治区",ImportVersion:"2016",},
    {Pid:0,Name:"辽宁省",Code:"210000000000",Panme:"辽宁省",ImportVersion:"2016",},
    {Pid:0,Name:"吉林省",Code:"220000000000",Panme:"吉林省",ImportVersion:"2016",},
    {Pid:0,Name:"黑龙江省",Code:"230000000000",Panme:"黑龙江省",ImportVersion:"2016",},
    {Pid:0,Name:"上海市",Code:"310000000000",Panme:"上海市",ImportVersion:"2016",},
    {Pid:0,Name:"江苏省",Code:"320000000000",Panme:"江苏省",ImportVersion:"2016",},
    {Pid:0,Name:"浙江省",Code:"33000000000",Panme:"浙江省",ImportVersion:"2016",},
    {Pid:0,Name:"安徽省",Code:"340000000000",Panme:"安徽省",ImportVersion:"2016",},
    {Pid:0,Name:"福建省",Code:"350000000000",Panme:"福建省",ImportVersion:"2016",},
    {Pid:0,Name:"江西省",Code:"360000000000",Panme:"江西省",ImportVersion:"2016",},
    {Pid:0,Name:"山东省",Code:"370000000000",Panme:"山东省",ImportVersion:"2016",},
    {Pid:0,Name:"河南省",Code:"410000000000",Panme:"河南省",ImportVersion:"2016",},
    {Pid:0,Name:"湖北省",Code:"420000000000",Panme:"湖北省",ImportVersion:"2016",},
    {Pid:0,Name:"湖南省",Code:"430000000000",Panme:"湖南省",ImportVersion:"2016",},
    {Pid:0,Name:"广东省",Code:"440000000000",Panme:"广东省",ImportVersion:"2016",},
    {Pid:0,Name:"广西壮族自治区",Code:"450000000000",Panme:"广西壮族自治区",ImportVersion:"2016",},
    {Pid:0,Name:"海南省",Code:"460000000000",Panme:"海南省",ImportVersion:"2016",},
    {Pid:0,Name:"重庆市",Code:"500000000000",Panme:"重庆市",ImportVersion:"2016",},
    {Pid:0,Name:"四川省",Code:"510000000000",Panme:"四川省",ImportVersion:"2016",},
    {Pid:0,Name:"贵州省",Code:"520000000000",Panme:"贵州省",ImportVersion:"2016",},
    {Pid:0,Name:"云南省",Code:"530000000000",Panme:"云南省",ImportVersion:"2016",},
    {Pid:0,Name:"西藏自治区",Code:"540000000000",Panme:"西藏自治区",ImportVersion:"2016",},
    {Pid:0,Name:"陕西省",Code:"610000000000",Panme:"陕西省",ImportVersion:"2016",},
    {Pid:0,Name:"甘肃省",Code:"620000000000",Panme:"甘肃省",ImportVersion:"2016",},
    {Pid:0,Name:"青海省",Code:"630000000000",Panme:"青海省",ImportVersion:"2016",},
    {Pid:0,Name:"宁夏回族自治区",Code:"640000000000",Panme:"宁夏回族自治区",ImportVersion:"2016",},
    {Pid:0,Name:"新疆维吾尔自治区",Code:"650000000000",Panme:"新疆维吾尔自治区",ImportVersion:"2016",},
    ];


export default class areacd {

    async readjson(inputfile){
        let areas
        let areajsons = []
        const jsonfile = require('jsonfile')
        // const file = '../../data/region.json'
        const file = inputfile
        jsonfile.readFile(file)
        .then(obj => 
            {
                console.dir(obj.length);
                for(let i =0; i < obj.length; i++)
                {
                    // console.dir(obj[i].length)
                    // console.dir(obj[i])
                    for(let j=0; j < obj[i].length; j++ )
                    {
                        // console.dir(obj[i][j].url)
                        // console.dir(obj[i][j].url.length)
                        if(obj[i][j].url.length == PROV)
                        {
                            // console.dir(obj[i][j].text)
                            provscode.push(obj[i][j].url)
                            provsname.push(obj[i][j].text)
                        }
                        if(obj[i][j].url.length == CITY)
                        {
                            for(let k=0;k<provscode.length;k++)
                            {
                                if (obj[i][j].url.substring(0,2) == provscode[k].substring(0,2))
                                {
                                    // console.log(obj[i][j].url.substring(0,2))
                                    // obj[i][j].text= obj[i][j].text.replace(/\'/g, "");
                                    // console.dir(obj[i][j].text)
                                    // // console.dir(typeof obj[i][j].text === 'number')
                                    // console.dir(isNaN(obj[i][j].text))

                                    if(isNaN(obj[i][j].text) == false)
                                    {
                                        let areajson = {"area":"","areacode":"","prov":""}
                                        areajson.area = obj[i][j+1].text
                                        areajson.areacode = obj[i][j].text
                                        areajson.prov = provsname[k]
                                        areajsons.push(areajson)
                                        //clear
                                        // areajson.area = ""
                                        // areajson.areacode = ""
                                        // areajson.prov = ""
                                    }
                                }
                            }
                        }
                        if(obj[i][j].url.length == COUNTY)
                        {
                            for(let k=0;k<provscode.length;k++)
                            {
                                if (obj[i][j].url.substring(3,5) == provscode[k].substring(0,2))
                                {
                                    
                                    // console.dir(obj[i][j].text)
                                    // console.dir(isNaN(obj[i][j].text))

                                    if(isNaN(obj[i][j].text) == false)
                                    {
                                        let areajson = {"area":"","areacode":"","prov":""}
                                        areajson.area = obj[i][j+1].text
                                        areajson.areacode = obj[i][j].text
                                        areajson.prov = provsname[k]
                                        areajsons.push(areajson)
                                        
                                    }
                                }
                            }
                        }
                        if(obj[i][j].url.length == TOWN)
                        {
                            for(let k=0;k<provscode.length;k++)
                            {
                                if (obj[i][j].url.substring(3,5) == provscode[k].substring(0,2))
                                {
                                    
                                    // console.dir(obj[i][j].text)
                                    // console.dir(isNaN(obj[i][j].text))

                                    if(isNaN(obj[i][j].text) == false)
                                    {
                                        let areajson = {"area":"","areacode":"","prov":""}
                                        areajson.area = obj[i][j+1].text
                                        areajson.areacode = obj[i][j].text
                                        areajson.prov = provsname[k]
                                        areajsons.push(areajson)
                                        
                                    }
                                }
                            }
                        }

                    }
                    // console.log("======")
                }


                


                // console.dir(provscode)
                // console.dir(provsname)
                // console.dir(areajsons)
                // for(let x=0; x<areajsons.length; x++)
                // {
                //     console.dir(areajsons[x])
                // }

                // console.dir(areajsons)
                // return areajsons;
                let dt = new Date();


                //20210329 insert 31 prov data
                for(let x=0;x<PROVDATA.length;x++)
                {
                    region.create({
                        Pid:PROVDATA[x].Pid,
                        Name:PROVDATA[x].Name,
                        Code:PROVDATA[x].Code,
                        Pname:PROVDATA[x].Panme,
                        ImportVersion:"2016",
                        ImportDateTime:dt.toString(),
                    }).then(res=> {
                        console.dir(res)
                    })
                }

                //json data
                for(let i=0; i<areajsons.length; i++)
                {
                    
                    console.log(areajsons[i])
                    //insert data
                    let areadt = {
                            Pid:1,
                            Name:areajsons[i].area,
                            Code:areajsons[i].areacode,
                            Panme:areajsons[i].prov,
                            ImportVersion:"2016",
                            ImportDateTime:dt.toString(),
                        }

                        console.dir("before create")

                        region.create({
                            Pid:areadt.Pid,
                            Name:areadt.Name,
                            Code:areadt.Code,
                            Pname:areadt.Panme,
                            ImportVersion:areadt.ImportVersion,
                            ImportDateTime:areadt.ImportDateTime,
                        }).then(res=> {
                            console.dir(res)
                        })
                }

                // areas = areajsons;
                
            })
        .catch(error => 
            {
                console.error(error);
            })


        // console.dir(areas)
        // return areajsons;
        // return areajsons;
    }

    async putdata(inputdata){

        //get datetime
        // console.dir("=========")
        let dt = new Date();
        // console.dir(dt.toString())
        // console.dir("=========")

        console.dir("start loop ")

        for(let i=0; i<inputdata.length; i++)
        {
            
            console.log(inputdata[i])
            //insert data
           let areadt = {
                Pid:1,
                Name:inputdata[i].area,
                Code:inputdata[i].areacode,
                Panme:inputdata[i].prov,
                ImportVersion:"2016",
                ImportDateTime:dt.toString(),
            }

            console.dir("before create")

            region.create({
                Pid:areadt.Pid,
                Name:areadt.Name,
                Code:areadt.Code,
                Pname:areadt.Panme,
                ImportVersion:areadt.ImportVersion,
                ImportDateTime:areadt.ImportDateTime,
            }).then(res=> {
                console.dir(res)
            })
        }

        // console.dir("after loop ");

        // console.dir(inputdata)

        // let areadt = {
        //     Pid:1,
        //     Name:inputdata[1].area,
        //     Code:inputdata[1].areacode,
        //     Panme:inputdata[1].prov,
        //     ImportVersion:"2016",
        //     ImportDateTime:dt.toString(),
        // }

        // region.create({
        //     Pid:areadt.Pid,
        //     Name:areadt.Name,
        //     Code:areadt.Code,
        //     Pname:areadt.Panme,
        //     ImportVersion:areadt.ImportVersion,
        //     ImportDateTime:areadt.ImportDateTime,
        // }).then(res=> {
        //     console.dir(res)
        // })

        // region.create({
        //     Pid:"1",
        //     Name:"xxx",
        //     Code:"111",
        //     Pname:"bj",
        //     ImportVersion:"2016",
        //     ImportDateTime:dt.toString(),
        // }).then(res=> {
        //     console.dir(res)
        // })

        
        

        

    }

}
    