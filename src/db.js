const mongoose = require("mongoose");

const conexionDB = async () => {
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.234xoma.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

  try {
    const DB = await mongoose.connect(url);
    console.log("conexion exitosa", DB.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = conexionDB;
