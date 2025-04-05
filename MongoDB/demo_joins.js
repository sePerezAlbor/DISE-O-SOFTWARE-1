const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log(" Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Ejecutar la agregación con $lookup
const aggregateOrders = async () => {
    try {
      const result = await mongoose.connection.db.collection("orders").aggregate([
        {
          $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "orderdetails"
          }
        }
      ]).toArray();
  
      console.log(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error(" Error en agregación:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  aggregateOrders();