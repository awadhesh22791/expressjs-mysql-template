var {sequelize,Sequelize}=require('../util/db.js');
var tbl_country=require('../models/country.js');
module.exports={
    Country:tbl_country(sequelize,Sequelize),
};