import mongoose from "mongoose"


const Connection = async ( URL = `mongodb+srv://user:12345@database.5m2nx.mongodb.net/?retryWrites=true&w=majority&appName=Database`) => {
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) { 
        console.log('Error while connecting with the database', error);

    }
}

export default Connection;
