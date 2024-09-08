import { Request, Response} from "express";
import unitService from "../services/unit-service";

let data: any = [];

const getAllUnits = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 6;
    try {
    data = await unitService.getAllUnits(page, pageSize)
    res.send(data);
    }
    catch (e: any) {
        res.send({ success: false, msg: e.message})
    }
}

const getUnitByID = async (req: Request, res: Response) => {
    console.log("aaa")

    const id = parseInt(req.params.id);
    data = await unitService.getUnitByID(id);
    res.send(data);
}

const addUnit = async (req: Request, res: Response) => {
     data = await unitService.addUnit(req.body);
     res.send(data);
}

const updateUnit = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await unitService.updateUnit(req.body, id);
    res.send(data);
}

const deleteUnit = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    data = await unitService.deleteUnit(id);
    res.send(data);
}

const searchUnits =async (req: Request, res: Response) => {
    console.log("1231231231")

    const startDate = new Date(req.query.startDate as unknown as string);   
    const endDate = new Date(req.query.endDate as unknown as string);
    const term = req.query.term as string;
    const noOfGuests = parseInt(req.query.noOfGuests as string)
    data = await unitService.searchUnits(startDate, endDate, term, noOfGuests);
    console.log('no_Guests:', noOfGuests, 'Start Date;', startDate, 'End Date:', endDate, "Search_term:", term)
    res.send(data);
}

const getUserIds = async (req: Request, res: Response) => {
    data = await unitService.getUserIds()
    res.send(data);
}

export default { getAllUnits, getUnitByID, addUnit, updateUnit, deleteUnit, searchUnits, getUserIds}