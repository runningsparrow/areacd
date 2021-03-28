// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
let region = require('./region');

const PROV = 7
const CITY = 12
const COUNTY = 14
const TOWN = 17 
const provscode = []
const provsname = []
let areajsons = []



export default class areacd {

    async readjson(inputfile){
        const jsonfile = require('jsonfile')
        // const file = '../../data/region.json'
        const file = inputfile
        jsonfile.readFile(file)
        .then(obj => 
            {
                console.dir(obj.length);
                for(let i =0; i < obj.length; i++)
                {
                    console.dir(obj[i].length)
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
                                    console.dir(obj[i][j].text)
                                    // console.dir(typeof obj[i][j].text === 'number')
                                    console.dir(isNaN(obj[i][j].text))

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
                                    
                                    console.dir(obj[i][j].text)
                                    console.dir(isNaN(obj[i][j].text))

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
                                    
                                    console.dir(obj[i][j].text)
                                    console.dir(isNaN(obj[i][j].text))

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
                    console.log("======")
                }

                console.dir(provscode)
                console.dir(provsname)
                // console.dir(areajsons)
                for(let x=0; x<areajsons.length; x++)
                {
                    console.dir(areajsons[x])
                }
                
            })
        .catch(error => 
            {
                console.error(error);
            })

        return areajsons; 
    }

    async putdata(inputdata){

        region.create({
            Pid:"1",
            Name:"xxx",
            Code:"111",
            Pname:"bj",
            ImportVersion:"2016",
            // ImportDateTime:"",
        }).then(res=> {
            console.dir(res)
        })

        return 0;

    }

}
    