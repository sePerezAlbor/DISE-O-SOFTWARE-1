const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Definir el esquema
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
  });
  
  // Crear el modelo
  const Customer = mongoose.model("Customer", customerSchema);
  
  // Eliminar múltiples documentos con expresión regular
  const deleteManyCustomers = async () => {
    try {
      const myquery = { address: /^O/ };
      const result = await Customer.deleteMany(myquery);
  
      console.log(`${result.deletedCount} document(s) deleted`);
    } catch (error) {
      console.error(" Error al eliminar documentos:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  deleteManyCustomers();