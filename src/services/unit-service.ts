import { result } from "lodash";
import unitRepository from "../repositories/unit-repository";

const getAllUnits = async () => {
    const data = await unitRepository.getAllUnits(); 
    let result: any = []; 

    data.forEach((unit: any) => {
        result.push({
            id: unit.id, 
            name: unit.name, 
            location: unit.location,
            description: unit.description, 
            rating: unit.location ,
            image_path: unit.image_path,
            price: unit.price,
            noOfGuests: unit.noOfGuests,
            updated: unit.updated, 
            created: unit.created
        });
    })

    return result; 
}

const getUnitByID = async (id:number) => {
    const data = await unitRepository.getUnitById(id); 
    let result: any = []
    if (data && data.length > 0) {
        result = [{ 
            id: data[0].id, 
            name: data[0].name, 
            location: data[0].location,
            description: data[0].description, 
            rating: data[0].rating,
            image_path: data[0].image_path,
            price: data[0].price,
            noOfGuests: data[0].noOfGuests,
            updated: data[0].updated, 
            created: data[0].created }]
    return result;
    }

    return null; 
}

const addUnit = async (unit: any) => {
    const result = await unitRepository.addUnit(unit); 
    return result; 
}

const updateUnit = async (id: number, unit: any) => {
    const result = await unitRepository.updateUnit(id, unit); 
    return result; 
}

const deleteUnit = async (id: number) => {
    const data = await unitRepository.deleteUnit(id);
     if ( data.id == id) {
        return true;
    }; 

    return false;
     
}

const searchUnits =async (startDate: Date, endDate: Date, term: string, noOfGuests: number) => {
    const result = await unitRepository.searchUnits(startDate, endDate, term, noOfGuests)
    return result;
    
}


export default { getAllUnits, getUnitByID, addUnit, updateUnit, deleteUnit, searchUnits}