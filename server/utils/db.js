import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ems',
    dateStrings: "date",
});

db.connect(function(err) {
    if(err){
        console.log("connection error")
    }else{
        console.log("connected")
    }

})
    

export default db;

