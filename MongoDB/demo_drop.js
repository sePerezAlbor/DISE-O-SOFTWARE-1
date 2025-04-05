const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Eliminar la colección "customers"
const dropCollection = async () => {
    try {
      const exists = await mongoose.connection.db.listCollections({ name: "customers" }).hasNext();
      
      if (exists) {
        await mongoose.connection.db.dropCollection("customers");
        console.log("Colección eliminada");
      } else {
        console.log(" La colección 'customers' no existe");
      }
    } catch (error) {
      console.error(" Error al eliminar la colección:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  dropCollection();