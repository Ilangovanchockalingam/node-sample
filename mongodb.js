const mongo = require('mongodb');
const mongodbclient = mongo.MongoClient;

// const mongo = require ('mongodb').MongoClient;

const dbURL = "mongodb://localhost:27017";

mongodbclient.connect(dbURL, async (err,db) => {
    if(err) throw err;

    let conn = db.db("school");
    console.log("Database Connected!!!");

    // let collections = await conn.listCollections().toArray();
    // // console.log(collections);
    // let collectionnames = collections.map(c => c.name);
    // console.log(collectionnames);

    var myValue = [
        {
        "Name":"Manickam",
        "Age":"25",
        "Subject":"HTML"
    },
    {
        "Name":"Ranjith",
        "Age":"28",
        "Subject":"Tekla"
    },
    {
        "Name":"Melwin",
        "Age":"27",
        "Subject":"Data Analyist"
    },
    {
        "Name":"Gobinath",
        "Age":"27",
        "Subject":"CSS"
    }
]

    // conn.collection("students").insertMany(myValue,(err,res) => {
    //     if(err) throw err;
    //     console.log("Collection Created!!!");
    //     console.log(res);
    // });

    // if(!collectionnames.includes("classleaders")) {
    //     conn.createCollection("classleaders",(err,res) => {
    //             if(err) throw err;
    //             console.log("Collection Created!!!");
    //             console.log(res);
    //         });
    // } else {
    //     console.log("Collection Name already exist!");
    // }

    // conn.createCollection("classleaders",(err,res) => {
    //     if(err) throw err;
    //     console.log("Collection Created!!!");
    //     console.log(res);
    // });

    // var qry = {
    //     Age:"26"
    // }

    // var sort = {
    //     Name:-1
    // }

    // var limit = 4;

    // conn.collection("students").find({}).sort(sort).limit(limit).toArray((err,res) => {
    //     if(err) throw err;
    //     console.log(res);
    // });
    
    // var oldName= {
    //     Name:"Krishnakumar"
    // }

    // var newName = {
    //     $set:{
    //         Name:"Krishnakumar Govindharajan"
    //     }
    // }

    // let idnumber = "637e66e430c002b4aada4fb8";

    // let idfind = {
    //     "_id": new ObjectId(idnumber)
    // };

    // conn.collection("students").updateOne(oldName,newName,(err,res) => {
    //     if(err) throw err;
    //     console.log(res);
    // })

    // conn.collection("students").findOne(idfind,(err,res) =>{
    //     if(err) throw err;
    //     console.log(res);
    // })

    // conn.collection("students").find({}).toArray((err,res) => {
    //     if(err) throw err;
    //     console.log(res)
    // })

    // var qry = {};

    // var newvalue = {
    //     $set : {
    //         Active:"True"
    //     }
    // }

    // conn.collection("students").updateMany(qry,newvalue,(err,res) =>{
    //     if(err) throw err;
    //     console.log(res);
    // })

    // var qry = {
    //     Age : "26"
    // }

    // conn.collection("students").deleteMany(qry,(err,res) => {
    //     if(err) throw err;
    //     console.log(res);
    // })

    // conn.collection("class").drop((err,res) => {
    //     if(err) throw err;
    //     console.log("collection droped!!!");
    // })

    conn.dropCollection("teachers",(err,res) =>{
        if(err) throw err;
        console.log("collection droped!!!")
    })

});