const { MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db)=>{

    if (err){
        console.log('Enable To Connect Database');
    }
    console.log('Conected Database Successfully');

    // db.collection('Todos').find({
    //     '_id': new ObjectID('5c1c77e20c4c811b04b08fb7')
    //
    // }).toArray().then((docs) => {
    //
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs));
    //
    // },(err) =>{
    //     if (err){
    //         console.log('Enable To Fetch Data');
    //     }
    // });


    /**
     * Mongo Count
     * */

    // db.collection('Todos').find({
    //
    //     '_id': new ObjectID('5c1c77e20c4c811b04b08fb7')
    //
    // }).count().then((count) => {
    //
    //     console.log(count);
    //
    // },(err) =>{
    //     if (err){
    //         console.log('Enable To Fetch Data');
    //     }
    // });
    //
    // db.close();


    /**
     * Find by field value
     *
     */

    db.collection('Todos').find({

        text: 'Ramesh'

    }).toArray().then((result) => {
        console.log(JSON.stringify(result));

    },(err) =>{
        if (err){
            console.log('Enable To Fetch Data');
        }
    });

         db.close();
    });