const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db)=>{

    if (err){
        console.log('Enable To Connect Database');
    }
    console.log('Conected Database Successfully');

    //
    // db.collection('Todos').insertOne({
    //
    //     text:'Name',
    //     complated:false
    //
    // },(err,result)=>{
    //
    //     if (err){
    //         console.log('Enable To Insert',err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops,undefined,2))
    //
    // });


    db.collection('Users').insertOne({

        name:'Ramesh',
        age:25,
        location:'Rajkot'

    },(err,result)=>{

        if (err){
            console.log('Enable To Insert Collection', err);
        }
        console.log(JSON.stringify(result.ops));
    });


    db.close();

});