// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados, para nossa operacoes
db.serialize(() =>{
    // com comandos SQL eu vou:

    // 1. Criar uma tabela

    db.run(`
        create table if not exists places(
            id integer primary key autoincrement,
            name text,
            image text,
            address text,
            address2 text,
            state text,
            city text,
            items text
        );
    `)

    // 2. Inserir dados na tabela
    const query = `
        insert into places(
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) values(?,?,?,?,?,?,?);
    `
    db.run(query, [])




    // 3. Consultar dados na tabela

    // 4. Deletar um dado na tabela
})