const { MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db)=>{

    if (err){
        console.log('Enable To Connect Database');
    }
    console.log('Conected Database Successfully');

    db.collection('Todos').find({
        _id: new ObjectID('5c1c77ee5467561e581d7ea0')

    }).toArray().then((docs)=>{

        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{

        console.log("Enable To Feth",err);

    });

    db.close();

});