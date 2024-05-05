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
        const result = await dbConnection.query(`insert into Units (name, location, description, image_path, price, noOfGuests, created, updated) 
                                                 values (?, ?, ?, ?, ?, ?, now(), now()) `,
                                                [unit.name, unit.location, unit.description, unit.image_path, unit.price, unit.noOfGuests] )
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
   
    let query = `
    SELECT *
    FROM units
    WHERE 1=1
  `;

  const queryParams = [];

  if (term) {
    query +=  `AND (name LIKE ? OR location LIKE ?)`;
    queryParams.push(`%${term}%`);
    queryParams.push(`%${term}%`);
  }

  /*if (startDate && endDate) {
    query += `
      AND EXISTS (
        SELECT 1
        FROM reservations r
        WHERE r.unit_id = units.id
          AND r.start_date <= ?
          AND r_end_date >= ?
      )
    `;
    queryParams.push(endDate, startDate);
    queryParams.push(endDate, startDate);
    }

   if (noOfGuests) {
    query += `
       AND EXISTS (
        SELECT 1 
        FROM reservations r 
        WHERE r.noOfGuests >= ?
       )`;
    queryParams.push(noOfGuests);
   }*/
    
    try {
        const results  = await dbConnection.query(query, queryParams)
        return results;
    }
    catch (e:any) {
        return { success: false, msg: e.message }
    }
}


export default { getAllUnits, getUnitById, addUnit, updateUnit, deleteUnit,  searchUnits}