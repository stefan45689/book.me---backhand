import {DataSource} from 'typeorm';
import { User } from '../models/User';

const dbConnection = new DataSource ({
    type: 'mysql', 
    host: 'localhost', 
    port: 3306, 
    username: 'root', 
    password: '1456ksla7896.', 
    database: 'book_me',
    entities: [User],
    logging: "all"
});

export default  dbConnection;


  /* const mysql = require('mysql')
     const dbConnection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '1456ksla7896',
        database: 'book_me'
    });
dbConnection.connect(err: any) => ({
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
})

export default dbConnection
*/
