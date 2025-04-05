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
  
  // Actualizar un documento
  const updateCustomer = async () => {
    try {
      const myquery = { address: "Valley 345" };
      const newvalues = { name: "Mickey", address: "Canyon 123" };
  
      const result = await Customer.updateOne(myquery, { $set: newvalues });
  
      if (result.modifiedCount > 0) {
        console.log(" 1 documento actualizado");
      } else {
        console.log(" No se actualizó ningún documento");
      }
    } catch (error) {
      console.error(" Error al actualizar documento:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  updateCustomer();