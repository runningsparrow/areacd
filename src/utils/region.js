var seq = require('./sequelize_config');
var _a = require('sequelize'), Model = _a.Model, DataTypes = _a.DataTypes;
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
var region = seq.define('region', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
    Pid: DataTypes.STRING,
    Name: DataTypes.STRING,
    Code: DataTypes.STRING,
    Pname: DataTypes.STRING,
    ImportVersion: DataTypes.STRING,
    ImportDateTime: DataTypes.DATE
}, {
    freezeTableName: true,
    tableName: 'asm_region',
    timestamps: false
});
module.exports = region;
