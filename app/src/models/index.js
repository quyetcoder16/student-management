import { Sequelize } from "sequelize"; import { DB_MY_SQL } from "../configs/db.configs.js";
import { createStudentModel } from "./student.model.js";
;

const sequelize = new Sequelize(DB_MY_SQL.DATABASE, DB_MY_SQL.USER_NAME, DB_MY_SQL.PASSWORD, {
    host: DB_MY_SQL.HOST,
    port: DB_MY_SQL.PORT,
    dialect: DB_MY_SQL.DIALECT
});

const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("connect database success!");
    } catch (error) {
        console.log("DB error : ", error);
    }
}

checkConnect();

const Student = createStudentModel(sequelize);

export {
    sequelize,
    Student,
}