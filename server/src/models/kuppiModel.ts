import mongoose, { Schema } from "mongoose";

export interface TimetableEntry {
    subject: string;
    startTime: string;
    endTime: string;
    date: string;
}

export interface PastPaperEntry {
    subject: string;
    year: number;
    fileUrl: string;
}

export interface NotesEntry {
    Subject: string;
    Unit: string;
    fileUrl: string;
}

const TimetableSchema: Schema = new Schema({
    subject: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    date: { type: String, required: true },
});

const PastPaperSchema: Schema = new Schema({
    subject: { type: String, required: true },
    year: { type: Number, required: true },
    fileUrl: { type: String, required: true },
});

const NotesSchema: Schema = new Schema({
    Subject: { type: String, required: true },
    Unit: { type: String, required: true },
    fileUrl: { type: String, required: true },
});

export const Timetable = mongoose.model<TimetableEntry>('Timetable', TimetableSchema);
export const PastPaper = mongoose.model<PastPaperEntry>('PastPaper', PastPaperSchema);
export const Notes = mongoose.model<NotesEntry>('Notes', NotesSchema);
