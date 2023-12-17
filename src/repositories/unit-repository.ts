import dbConnection from "../dbConnection";

const getAllUnits =async () => {
    try {
        const result = await dbConnection.query(`select * from Units`)
        return result;
    }
    catch(e: any) {
        return null;
    }
}

const getUnitById = async (id: number) => {
    try {
        const result = await dbConnection.query(`select * from Units where id = ?`, [id])
        return result
    }
    catch (e: any) {
        return null
    }
}

const addUnit = async (unit: any) => {
    try {
        const result = await dbConnection.query(`insert into Units (name, location, description, rating, image_path, price, noOfGuests, created, updated) 
                                                 values (?, ?, ?, ?, ?, ?, now(), now()) `,
                                                [unit.name, unit.location, unit.description, unit.rating, unit.image_path, unit.price, unit.noOfGuests] )
          return result                                      
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const updateUnit = async (_id: number, unit: any) => {
    try {
        const result = await dbConnection.query(`update Units
                                                set name = ?, location = ?, description = ?, rating = ?, image_path = ?, price = ?, noOfGuests = ?, 
                                                where id = ?`, 
                                                [unit.name, unit.location, unit.description, unit.rating, unit.image_path, unit.price, unit.noOfGuests])
         return result
         }
    catch (e: any) {
        return { success: false, msg: e.message }
    }

}

const deleteUnit =async (id: number) => {
    try {
        const result = await dbConnection.query(`delete from Units where id = ?`,
                                                [id])
         return result;                                       
    }
    catch (e: any){
        return { success: false, msg: e.message }
    }
    
}

const searchUnits = async (startDate: Date, endDate: Date, term: string, noOfGuests: number) => {
    try {
        const searchTerm: string = `%${term}$%`;
        const result = await dbConnection.query(`select * from Units where name like ? or location like ?
                                                and not exists (
                                                select 1 from Reservations where
                                                reservations.unit_id = Units.unit_id and
                                                reservations.end_date >= ? and 
                                                reservations.start_date <= ? and 
                                                noOfGuests >= ?
                                                )`,
                                               // group by Units.unit_id;`,
                                                [searchTerm, searchTerm, startDate, endDate, noOfGuests]);
                                        
         return result;
    }
    catch (e:any) {
        return { success: false, msg: e.message }
    }
}


export default { getAllUnits, getUnitById, addUnit, updateUnit, deleteUnit,  searchUnits}