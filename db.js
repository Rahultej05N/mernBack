const mongoose=require('mongoose')
const mongoURI='mongodb://Rahultej:19682003@ac-mrussnx-shard-00-00.7wikqu4.mongodb.net:27017,ac-mrussnx-shard-00-01.7wikqu4.mongodb.net:27017,ac-mrussnx-shard-00-02.7wikqu4.mongodb.net:27017/gofoodMERN?ssl=true&replicaSet=atlas-xucdqk-shard-0&authSource=admin&retryWrites=true&w=majority'

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//         console.log('Connected to MongoDB');

//         fetchData();
//     } catch (error) {
//         console.error('Error connecting to MongoDB: ', error);
//     }
// };

// async function fetchData() {
//     try {
//         const fetched_data = mongoose.connection.db.collection("food_items");
//         const data = await fetched_data.find({}).toArray();
//         console.log();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// module.exports = mongoDB;



module.exports = async function () {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.collection("foodCategory");
        const Catdata = await categoryCollection.find({}).toArray();

        return { data, Catdata };
        // console.log(data);
        // console.log(Catdata)
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
};
