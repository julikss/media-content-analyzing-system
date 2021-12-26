const express = require('express');
const mysql = require('mysql2');
const app = express();
const jsonParser = express.json();

const localDb = {
    host: "localhost",
    user: "root",
    password: "Passwd777!",
    database: "mcas"
};

const dataBase = mysql.createConnection(localDb);

//add source to table
app.post('/api/source/post/add', jsonParser, (request, response) => {
    const source = [request.body.id, request.body.uri, request.body.api_key];
    const sql = 'insert into source (id, uri, api_key) values (?, ?, ?)';

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, source, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//get source by id
app.get('/api/source/:id', (request, response) => {
    const sql = 'SELECT * ' + 'FROM source ' + `WHERE id = ${request.params.id}`;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//get all sources
app.get('/api/source/get/all', (request, response) => {
    const sql = `SELECT * FROM source `;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            response.send(result);
        });
    });
})

//update source
app.put('/api/source/put/update', jsonParser, (request, response) => {
    const sql = 'UPDATE source ' +
        'SET id = ?, uri = ?, api_key = ?' +
        `WHERE id = ${request.body.id}`;

    const source = [request.body.id, request.body.uri, request.body.api_key];

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, source, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//delete source
app.delete('/api/source/delete/:id', (request, response) => {
    const sql = 'DELETE ' + 'FROM source ' + `WHERE id = ${request.params.id}`;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });

});

const PORT = 3000 || process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
    console.log(error);
}