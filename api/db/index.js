require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Online");
  } catch (error) {
    throw new Error("Error a la hora de inicializar DB");
  }
};

module.exports = dbConnection;


//W75BJ6PnNxDI9Ugv   passDB


// mongodb+srv://german:W75BJ6PnNxDI9Ugv@german.z4ycsf6.mongodb.net/?retryWrites=true&w=majority