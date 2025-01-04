import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const dbConnecton = () => {
    // Get the MongoDB URI from the environment variables
    const uri: string | undefined = process.env.MONGO_URI;

    if (!uri) {
        throw new Error('MONGO_URI is not defined in .env file');
    }

    // Connect to MongoDB
    mongoose
        .connect(uri)
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
        .catch((err: Error) => {
            console.error('Error connecting to MongoDB:', err.message);
        });

}
// // Define the schema and model
// interface IUser {
//     name: string;
//     email: string;
//     age: number;
// }

// const userSchema = new mongoose.Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     age: { type: Number, required: true },
// });

// const User = mongoose.model<IUser>('User', userSchema);

// // Example of adding a document
// const addUser = async () => {
//     try {
//         const newUser = new User({
//             name: 'John Doe',
//             email: 'john.doe@example.com',
//             age: 30,
//         });
//         await newUser.save();
//         console.log('User added:', newUser);
//     } catch (err: any) {
//         console.error('Error adding user:', err.message);
//     }
// };

// // Call the function
// addUser();
