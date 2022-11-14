import Sequelize from "sequelize";
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(
  "PizzeriaRembolo", 
  "postgres",
   process.env.PASSWORD_PG,
  {
    host: "localhost",
    dialect: "postgres",
    port:process.env.DB_PORT || 5432,
  }
);

export default sequelize;