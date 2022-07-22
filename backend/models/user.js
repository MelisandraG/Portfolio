const connection = require("../config");
const db = connection.promise();
const bcrypt = require("bcrypt");



const findByEmail = (email) => {
    return db
        .query("SELECT * FROM users WHERE email = ?", email)
        .then(([results]) => results[0]);
};




const findOne = (id) => {
    return db
        .query(
            "SELECT id, email, role FROM users WHERE id = ?",
            [id]
        )
        .then(([results]) => results[0]);
};


const verifyPassword = async (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
};

const changePassword = (newPassword, userId) => {
    return bcrypt.hash(newPassword, 10).then((hash) => {
        return db.query("UPDATE users SET hashedPassword = ? WHERE id = ?", [
            hash,
            userId,
        ]);
    });
};


const findManyProject = () => {
    let sql = "SELECT * FROM project";
    return db.query(sql).then(([results]) => results);
};



const createProject = ({title, subtitle, description,technologies, image, link }) => {
 console.log(title)
        return db
            .query("INSERT INTO project SET ?", {
                title, 
                subtitle, 
                description,
                technologies, 
                image, 
                link
            })
            .then(([result]) => {
                const id = result.insertId;
                return { title, subtitle, description, image, link, id };
            });
    }


module.exports = {
  
    findOne,
    findByEmail,
    verifyPassword,
    changePassword,
    findManyProject,
    createProject
}
