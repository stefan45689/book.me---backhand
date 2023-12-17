import { Request, Response, urlencoded } from "express"; 
import unitService from "../services/unit-service";
import { parse } from "querystring";
import { parseArgs } from "util";

let data: any = [];

const getAllUnits = async (req: Request, res: Response) => {
    data = await unitService.getAllUnits()
    res.send(data);
}

const getUnitByID = async (req: Request, res: Response) => {
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
    const startDate = new Date ();   
    const endDate = new Date ();
    const term = req.params.term;   
    const noOfGuests = parseInt(req.params.noOfGuests)  
    data = await unitService.searchUnits(startDate, endDate, term, noOfGuests);
    res.send(data);
}

export default { getAllUnits, getUnitByID, addUnit, updateUnit, deleteUnit, searchUnits}