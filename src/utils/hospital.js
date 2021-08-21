var seq = require('./sequelize_config');
var _a = require('sequelize'), Model = _a.Model, DataTypes = _a.DataTypes;
var hospital = seq.define('hospital', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
    Pid: DataTypes.STRING,
    Name: DataTypes.STRING,
    Key: DataTypes.STRING,
    Value: DataTypes.STRING,
    Desc: DataTypes.STRING,
    NationCode: DataTypes.STRING,
    NationName: DataTypes.STRING,
    ProvinceCode: DataTypes.STRING,
    ProvinceName: DataTypes.STRING,
    CityCode: DataTypes.STRING,
    CityName: DataTypes.STRING,
    DivisionCode: DataTypes.STRING,
    DivisionName: DataTypes.STRING,
    ClassifyId: DataTypes.STRING,
    ClassifyName: DataTypes.STRING,
    LevelId: DataTypes.STRING,
    LevelName: DataTypes.STRING,
    IsGeneral: DataTypes.STRING,
    IsSpecial: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    BedQuantity: DataTypes.INTEGER,
    DoctorQuantity: DataTypes.INTEGER,
    CreateDateTime: DataTypes.DATE,
    CreateUserId: DataTypes.INTEGER,
    EditDateTime: DataTypes.DATE,
    EditUserId: DataTypes.INTEGER,
    StatusId: DataTypes.INTEGER,
    StatusName: DataTypes.STRING,
    StatusValue: DataTypes.INTEGER
}, {
    freezeTableName: true,
    tableName: 'asm_hospital',
    timestamps: false
});
module.exports = hospital;
