import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    // Additional fields can be added here
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    registationNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    }
    // Additional fields can be added here
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
