import  sequelize  from "./config/db.js";
import { setupAssociations } from "./associations/association.js";
import Bodega from "./models/bodega.model.js";
import Repuesto from "./models/repuestos.model.js";

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    setupAssociations(); // registra las relaciones antes de consultar

    const bodega = await Bodega.findOne({ include: Repuesto });
    console.log(JSON.stringify(bodega, null, 2));
  } catch (error) {
    console.error(" Error:", error);
  } finally {
    await sequelize.close();
  }
};

test();