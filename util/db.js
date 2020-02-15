var Sequelize=require('sequelize');
var config= require('../constant/config.js');
var sequelize=new Sequelize(config.db.DATABASE,config.db.USERNAME,config.db.PASSWORD,{
    host:config.db.HOST,
    dialect:config.db.DIALECT,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});
module.exports={sequelize:sequelize,Sequelize:Sequelize};
