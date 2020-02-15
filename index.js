var app=require('./app.js');
var config=require('./constant/config.js');
var db=require('./util/db.js');
var logger=require('./util/logger.js');

app.listen(config.PORT,function(){
    db.sequelize.authenticate()
    .then(()=>{
        logger.info('Database connection has been established.');
    }).catch(err=>{
        logger.error('Unable to connect to database.',err);
    })
    logger.info('Server running on port '+config.PORT+'.');
});