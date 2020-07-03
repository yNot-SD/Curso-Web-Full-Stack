const express = require("express");
const router = require("express").Router()
const ibmdb = require("ibm_db")

var connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net;UID=plh95420;PWD=vndbszxg8@p13f5g;PORT=50000;PROTOCOL=TCPIP";

router.get('/postagens', (req, res) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query('select * from PLH95420.POSTAGENS', (err, data) => {
            if (err) {
                console.log({ ERRO: err });
            } else {
                console.log(data);
                res.send(data)
            }

            conn.close(() => {
                console.log('Conexão encerrada');
            });
        });
    });

    router.get('/postagens/nova', (req, res) => {
        ibmdb.open(connStr,(err, conn) => {
            if (err) {
                return console.log({ erro: err, Mensagem: "Conexão falhou" })
            }
            conn.query(`insert into PLH95420.POSTAGENS (TITULO, CONTEUDO, AUTOR) values ('${req.query.conteudo}', '${req.query.conteudo}', '${req.query.autor}')`, (err, data) => {
                if (err) {
                    console.log({ erro: err, Mensagem: "INSERT falhou" })
                } else {
                    console.log(data)
                    res.send(data)
                }

                conn.close(() => {
                    console.log('conexão encerrada')
                })

            })
        })


    })

})

module.exports = router