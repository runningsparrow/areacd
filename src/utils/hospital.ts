const seq = require('./sequelize_config');
const {Model, DataTypes} = require('sequelize');


const hospital = seq.define('hospital', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true},  //Id	
    Pid: DataTypes.STRING,   //父节点Id	
    Name: DataTypes.STRING,   //名称
    Key: DataTypes.STRING,   //键名
    Value: DataTypes.STRING,  //键值
    Desc: DataTypes.STRING,    //描述
    NationCode: DataTypes.STRING,   //国家代码
    NationName: DataTypes.STRING,   //国家名称
    ProvinceCode: DataTypes.STRING,   //省代码
    ProvinceName: DataTypes.STRING,   //省名称
    CityCode: DataTypes.STRING,    //市代码
    CityName: DataTypes.STRING,   //市名称
    DivisionCode: DataTypes.STRING,    //区代码
    DivisionName: DataTypes.STRING,   //区名称
    ClassifyId: DataTypes.STRING,    //分类Id
    ClassifyName: DataTypes.STRING,   //分类
    LevelId: DataTypes.STRING,   //等级Id
    LevelName: DataTypes.STRING,   //等级
    IsGeneral: DataTypes.STRING,   //是否公立
    IsSpecial: DataTypes.STRING,   //是否专科
    Address: DataTypes.STRING,    //地址
    Phone: DataTypes.STRING,    //总机
    BedQuantity: DataTypes.INTEGER,    //床位数量
    DoctorQuantity: DataTypes.INTEGER,   //医生数量
    CreateDateTime: DataTypes.DATE,     //创建时间
    CreateUserId: DataTypes.INTEGER,    //创建用户Id
    EditDateTime: DataTypes.DATE,    //最后修改时间
    EditUserId: DataTypes.INTEGER,   //修改用户Id
    StatusId: DataTypes.INTEGER,   //状态Id
    StatusName: DataTypes.STRING,   //状态名称
    StatusValue: DataTypes.INTEGER,   //状态值
}, {
    freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步
    tableName: 'asm_hospital',
    timestamps: false
});



module.exports = hospital;