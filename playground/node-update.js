const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{


    if (err){
        console.log('Database Cant Connnect');
    }

    console.log("DataBase Connected Successfuly");

    db.collection('Todos').findOneAndUpdate({

        _id: new ObjectID('5c1c77d6e39fe31fb037d6d1'),

    },{

            complated: false,
            text: "Joshi"

    }, {
        returnOriginal: false
    }).then((result)=>{

        console.log(result);
    });

    db.close();
});