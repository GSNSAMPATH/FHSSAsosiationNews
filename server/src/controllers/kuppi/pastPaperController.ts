import e, { Request, Response } from "express";
import { PastPaper } from "../../models/kuppiModel";

export const getPastPapers = async (req: Request, res: Response) => {
    try {
        const pastPapers = await PastPaper.find().sort({ year: -1 });
        res.status(200).json(pastPapers);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
};


export const addPastPaper = async (req: Request, res: Response) => {
    try {
        const { subject, year, fileUrl } = req.body;

        const pastPaper = new PastPaper({
            subject,
            year,
            fileUrl,
        });

        await pastPaper.save();

        res.status(201).json(pastPaper);

    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}


export const deletePastPaper = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await PastPaper.findByIdAndDelete(id);
        res.status(200).json({ message: 'Past Paper deleted successfully' });
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}


export const updatePastPaper = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { subject, year, fileUrl } = req.body;
        const updatedPastPaper = await PastPaper.findByIdAndUpdate(
            id,
            { subject, year, fileUrl },
            { new: true }
        );
        res.status(200).json(updatedPastPaper);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}