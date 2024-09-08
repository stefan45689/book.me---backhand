//import { result } from "lodash";
import unitRepository from "../repositories/unit-repository";

const getAllUnits = async (page: number, pageSize: number) => {
    const data = await unitRepository.getAllUnits(page, pageSize); 
    let result: any = []; 
    const total = await unitRepository.getTotalCount();

    if (!data || data.length == 0) {  
        return [];
    }

    data.forEach((unit: any) => {
        result.push({
            id: unit.id, 
            name: unit.name, 
            location: unit.location,
            description: unit.description, 
            rating: unit.rating ,
            image_path: unit.image_path,
            price: unit.price,
            noOfGuests: unit.noOfGuests,
            amenities: unit.amenities,
            user_id: unit.user_id,
            latitude: unit.latitude,
            longitude: unit.longitude,
            updated: unit.updated, 
            created: unit.created
        });
    })

    return {units: result, total}; 
}

const getUnitByID = async (id:number) => {
    const data = await unitRepository.getUnitById(id); 
    
    if (data && data.length > 0) {
        //let result: any = []
        let result = ({ 
            id: data[0].id, 
            name: data[0].name, 
            location: data[0].location,
            description: data[0].description, 
            rating: data[0].rating,
            image_path: data[0].image_path,
            price: data[0].price,
            noOfGuests: data[0].noOfGuests,
            amenities: data[0].amenities,
            user_id: data[0].user_id,
            latitude: parseFloat(data[0].latitude),
            longitude: parseFloat(data[0].longitude),
            updated: data[0].updated, 
            created: data[0].created })
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
    }

    return false;

}

const searchUnits =async (startDate: Date, endDate: Date, term: string, noOfGuests: number) => {
    const result = await unitRepository.searchUnits(startDate, endDate, term, noOfGuests)
    return result;
    
}

const getUserIds = async () => {
    const data = await unitRepository.getUserIds();
    let result: any [] = [];

    data.forEach((unit: any) => {
        result.push({
            user_id: unit.user_id
        })
    });
    return result;
}


export default { getAllUnits, getUnitByID, addUnit, updateUnit, deleteUnit, searchUnits, getUserIds}