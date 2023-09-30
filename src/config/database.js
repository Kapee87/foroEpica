import { Sequelize } from "sequelize";

//para entorno local
/* export const sequelize = new Sequelize("posts_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
}); */

//para prod
const DB_URI = process.env.CONNECTION_URI
export const sequelize = new Sequelize(DB_URI,{
    dialect: "mysql",
});

export const startDb = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true });
        await sequelize.sync();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
