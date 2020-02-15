var models=require('../models/models.js');
var fields=require('../constant/field.js');
var commonRepository=require('./common.js');
var CountryRepository={
    FindAllByDeleted:function(deleted){
        return new Promise(function(resolve,reject){
            models.Country.findAll({where:{deleted:deleted}}).then(existingCountries=>{
                resolve(existingCountries);
            },error=>{
                reject(error);
            }); 
        });
    },
    FindByIdAndDeleted:function(id,deleted){
        return new Promise(function(resolve,reject){
            models.Country.findOne({where:{pk_country_id:id,deleted:deleted}}).then(existingCountries=>{
                resolve(existingCountries);
            },error=>{
                reject(error);
            }); 
        });
    }
};
Object.assign(CountryRepository,commonRepository);
module.exports=CountryRepository;