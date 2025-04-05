const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Eliminar la colección "customers"
const dropCustomersCollection = async () => {
  try {
    const result = await mongoose.connection.db.dropCollection("customers");
    console.log("✅ Colección eliminada");
  } catch (error) {
    if (error.codeName === 'NamespaceNotFound') {
      console.log("⚠️ La colección 'customers' no existe");
    } else {
      console.error(" Error al eliminar la colección:", error.message);
    }
  } finally {
    mongoose.connection.close();
  }
};

dropCustomersCollection();