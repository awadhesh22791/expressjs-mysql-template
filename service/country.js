var countryRepository=require('../repository/country.js');
var fields=require('../constant/field.js');
var models=require('../models/models.js');
module.exports={
    GetAllCountry:function(){
        return new Promise(function(resolve,reject){
            countryRepository.FindAllByDeleted(false).then(existingCountries=>{
                var countries=[];
                existingCountries.forEach(existingCountry => {
                    var country={};
                    country[fields.ID]=existingCountry.pk_country_id;
                    country[fields.NAME]=existingCountry.name;
                    country[fields.SHORT_NAME]=existingCountry.short_name;
                    country[fields.MOBILE_CODE]=existingCountry.mobile_code;
                    countries.push(country);
                });
                resolve(countries);
            },error=>{
                reject(error);
            }); 
        });
    },
    GetCountry:function(id){
        return new Promise(function(resolve,reject){
            countryRepository.FindByIdAndDeleted(id,false).then(existingCountry=>{
                var country;
                if(existingCountry){
                    country={};
                    country[fields.ID]=existingCountry.pk_country_id;
                    country[fields.NAME]=existingCountry.name;
                    country[fields.SHORT_NAME]=existingCountry.short_name;
                    country[fields.MOBILE_CODE]=existingCountry.mobile_code;
                }
                resolve(country);
            },error=>{
                reject(error);
            }); 
        });
    },
    Create:function(newCountryData){
        return new Promise(function(resolve,reject){
            var newCountryModel={};
            newCountryModel[fields.NAME]=newCountryData.name;
            newCountryModel[fields.SHORT_NAME]=newCountryData.short_name;
            newCountryModel[fields.MOBILE_CODE]=newCountryData.mobile_code;
            newCountryModel[fields.DELETED]=false;
            var newCountry=models.Country.build(newCountryModel);
            countryRepository.Save(newCountry).then(function(result){
                resolve(result);
            },function(error){
                reject(error);
            }); 
        });
    },
    Update:function(id,countryData){
        return new Promise(function(resolve,reject){
            countryRepository.FindByIdAndDeleted(id,false).then(existingCountry=>{
                var country;
                if(existingCountry){
                    existingCountry[fields.NAME]=countryData[fields.NAME];
                    existingCountry[fields.SHORT_NAME]=countryData[fields.SHORT_NAME];
                    existingCountry[fields.MOBILE_CODE]=countryData[fields.MOBILE_CODE];
                    countryRepository.Save(existingCountry).then(function(result){
                        resolve(result);
                    },function(error){
                        reject(error);
                    });
                }
            },error=>{
                reject(error);
            }); 
        });
    }
};