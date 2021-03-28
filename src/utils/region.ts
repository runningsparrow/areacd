const seq = require('./sequelize_config');
const {Model, DataTypes} = require('sequelize');

// class region extends Model {
// }

// region.init({
//     //定义表字段，多属性定义用{},只定义类型可省略
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true},
//     Pid: DataTypes.STRING,
//     Name: DataTypes.STRING,
//     Code: DataTypes.STRING,
//     Pname: DataTypes.STRING,
//     ImportVersion: DataTypes.STRING,
//     ImportDateTiem: DataTypes.DATE,
// }, {
//     sequelize: seq,
//     modelName: 'region', //model名
//   	tableName: 'asm_region', //表名
//     timestamps: false,
//     freezeTableName: true
// });


const region = seq.define('region', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true},
    Pid: DataTypes.STRING,
    Name: DataTypes.STRING,
    Code: DataTypes.STRING,
    Pname: DataTypes.STRING,
    ImportVersion: DataTypes.STRING,
    ImportDateTime: DataTypes.DATE,
}, {
    freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步
    tableName: 'asm_region',
    timestamps: false
});



module.exports = region;