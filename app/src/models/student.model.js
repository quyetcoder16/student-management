import { DataTypes } from "sequelize";

const createStudentModel = (sequelize) => {
    return sequelize.define(
        "student",
        {
            fullName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            numberClass: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: "students",
            timeStamps: true,
        }
    )
}

export {
    createStudentModel,
}