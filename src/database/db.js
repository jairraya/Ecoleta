// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados, para nossa operacoes
// db.serialize(() =>{
    // com comandos SQL eu vou:

    // 1. Criar uma tabela

    // db.run(`
    //     create table if not exists places(
    //         id integer primary key autoincrement,
    //         image text,
    //         name text,
    //         address text,
    //         address2 text,
    //         state text,
    //         city text,
    //         items text
    //     );
    // `)

    // 2. Inserir dados na tabela
    // const query = `
    //     insert into places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) values(?,?,?,?,?,?,?);
    // `

    // const values = [
    // "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2901&q=80",
    // "Colectoria",
    // "Rua Guilherme Gemballa, Jardim América",
    // "N°: 260",
    // "Santa Catarina",
    // "Rio do Sul",
    // "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //     "Papersider",
    //     "Rua Guilherme Gemballa, Jardim América",
    //     "N°: 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    //     ]

    // function afterInsertData(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso!")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // 3. Consultar dados na tabela
    // db.all(`select * from places`, function(err, rows) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seu registros: ")
    //     console.log(rows)
    // })

    // 4. Deletar um dado na tabela
    // db.run(`delete from places where id = ?`, [1], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
// })