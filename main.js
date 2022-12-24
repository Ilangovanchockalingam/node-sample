let http = require('http');
// let dt = require("./ownmodules");
let url = require('url');

// http.createServer((req,res)=> {
//     res.writeHead(200,{'Content-Type':'text/html'});
    // res.write(dt.ownModules());
//     let qry = url.parse((req.url),true).query;
//     res.write("FirstName:"+qry.FirstName+" ,"<br>"LastName:"+qry.LastName+" ,"+" "+"Password:"+qry.Password);
//     res.end();
// }).listen(4001);

const mongo = require('mongodb');
const mongodbclient = mongo.MongoClient;

const connURL = "mongodb://localhost:27017";

http.createServer((req,response)=> {
    response.writeHead(200,{'Content-Type':'application/json'});

    mongodbclient.connect(connURL, async (err,db) => {
        if(err) throw err;

        let conn = db.db("school");

        let collections = await conn.listCollections().toArray();
        let collectionnames = collections.map(c => c.name);

        // if(!collectionnames.includes("teachers")) {
        //         conn.createCollection("teachers",(err,res) => {
        //                 if(err) throw err;
        //                 console.log("Collection Created!!!");
        //                 // console.log(res);
        //             });
        //     } else {
        //         console.log("Collection Name already exist!");
        //     }

            // conn.collection("teachers").insertOne({"Name":"Beig Mirza","Age":"26"},(err,res) => {
            // if(err) throw err;
            // response.write(JSON.stringify(res,null,3));
            // response.end();
            // // console.log(res);
        // });

        conn.collection("teachers").find({}).toArray((err,res) => {
            if(err) throw err;
            response.write(JSON.stringify(res,null,3));
            response.end();
        });

    });

    // res.write(dt.ownModules());
    // let qry = url.parse((req.url),true).query;
    // res.write("FirstName:"+qry.FirstName+" ,"<br>"LastName:"+qry.LastName+" ,"+" "+"Password:"+qry.Password);
    // res.end();
}).listen(4001);