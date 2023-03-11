const mongoose = require("mongoose");
const { MONG_PROD_URL } = process.env;
exports.connect = async () => {
 try{
    mongoose.set("strictQuery", false);
   const dbConn= await  mongoose
      .connect(MONG_PROD_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    console.log(`Connected to database ${dbConn.connections[0].name}`)
 }catch(err){
    console.log(`Error conecting to db: ${err.message}`)
 }
   
};