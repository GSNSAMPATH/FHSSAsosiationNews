import mongoose, { Document, Schema } from "mongoose";

export interface post extends Document {
    title: string;
    content: string;
    imageUrl: string;
    cloudinaryPublicId: string;
    createdAt: Date;
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cloudinaryPublicId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '24h' }, // Expires after 24 hours
});

export default mongoose.model<post>('post', PostSchema);