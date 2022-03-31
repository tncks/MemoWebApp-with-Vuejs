const mysql = require('mysql')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Piloom01!@',
    connectionLimit: 5,
    database: 'memo'
});


module.exports = {
    async run(query) {
        return new Promise((resolve) => {
            pool.getConnection(function (err, conn) {
                if (!err) {
                    try {
                        conn.query(query, (error, rows, fields) => {
                            resolve(rows)
                        })
                    } catch(error) {
                        console.error(error);
                        reject(error)
                    }
                    
                        
                } else {
                    console.error('db error')
                }
            })

        })

    }
}