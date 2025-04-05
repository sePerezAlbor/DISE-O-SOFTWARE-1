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
  
  // Actualizar múltiples documentos
  const updateManyCustomers = async () => {
    try {
      const myquery = { address: /^S/ };
      const newvalues = { $set: { name: "Minnie" } };
  
      const result = await Customer.updateMany(myquery, newvalues);
  
      console.log(`${result.modifiedCount} document(s) updated`);
    } catch (error) {
      console.error(" Error al actualizar documentos:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  updateManyCustomers();