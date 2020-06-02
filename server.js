//importing express
const exp=require ("express");
const app=exp();
const path = require('path');

app.use(exp.static(__dirname+"/dist/app"));


app.listen(process.env.PORT || 8080);
app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/app/index.html'));
});