import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false); // opcional para evitar el warning

        await mongoose.connect('mongodb://127.0.0.1:27017/notesApp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('✅ MongoDB conectado localmente');
    } catch (error) {
        console.error('❌ Error conectando a DB', error);
        process.exit(1);
    }
};

export default connectDB;
