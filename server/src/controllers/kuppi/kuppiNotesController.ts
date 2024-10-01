import { Request, Response } from "express";
import { Notes } from "../../models/kuppiModel";

export const getKuppiNotes = async (req: Request, res: Response): Promise<void> => {
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const addKuppiNotes = async (req: Request, res: Response) => {
    try {
        const { Subject, Unit, fileUrl } = req.body;
        const newNotes = new Notes({
            Subject,
            Unit,
            fileUrl
        });

        const savedNotes = await newNotes.save();
        res.status(201).json(savedNotes);

    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteKuppiNotes = async (req: Request, res: Response) => {    
    try {
        const { id } = req.params;
        await Notes.findByIdAndDelete(id);
        res.status(200).json({ message: 'Notes deleted successfully' });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};


export const updateKuppiNotes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { Subject, Unit, fileUrl } = req.body;
        const updatedNotes = await Notes.findByIdAndUpdate(
            id,
            { Subject, Unit, fileUrl },
            { new: true }
        );
        res.status(200).json(updatedNotes);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};
