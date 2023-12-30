import { Student } from "../models/index.js"

const getList = async () => {
    const listStudent = await Student.findAll();
    if (listStudent) {
        return listStudent;
    } else {
        return false;
    }
}

const getDetail = async (id) => {
    const studentDetail = await Student.findOne({
        where: {
            id
        }
    });
    if (studentDetail) {
        return studentDetail;
    } else {
        return false;
    }
}

const create = async (student) => {
    const newStudent = await Student.create(student);
    return newStudent;
}

const update = async (id, student) => {
    const studentUpdate = await getDetail(id);
    if (studentUpdate) {
        studentUpdate.fullName = student.fullName;
        studentUpdate.age = student.age;
        studentUpdate.numberClass = student.numberClass;
        studentUpdate.save();
        return studentUpdate;
    } else {
        return false;
    }
}

const deleteById = async (id) => {
    const studentDelete = await getDetail(id);
    if (studentDelete) {
        await Student.destroy({
            where: {
                id
            }
        });
        return studentDelete;
    } else {
        return false;
    }
}

export {
    getList,
    getDetail,
    create,
    update,
    deleteById,
}