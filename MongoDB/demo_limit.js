const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log(" Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Definir el esquema
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
  });
  
  const Customer = mongoose.model("Customer", customerSchema);
  
  // Buscar máximo 5 documentos
  const findLimitedCustomers = async () => {
    try {
      const result = await Customer.find().limit(5);
      console.log(result);
    } catch (error) {
      console.error(" Error al buscar documentos:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  findLimitedCustomers();