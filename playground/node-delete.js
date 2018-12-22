const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{


    if (err){
        console.log('Database Cant Connnect');
    }

    console.log("DataBase Connected Successfuly");

    // deleteMany()

    // db.collection('Todos').deleteMany({
    //     text: 'Joshi'
    // }).then((result) =>{
    //     console.log(result);
    // });


    // DeleteOne

    // db.collection('Todos').deleteOne({
    //     text: 'Joshi'
    // }).then((result) =>{
    //     console.log(result);
    // });


    db.collection('Todos').findOneAndDelete({
        text: 'Joshi'
    }).then((result)=>{

        console.log(result);
    });


    db.close();
});