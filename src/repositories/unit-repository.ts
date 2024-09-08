import dbConnection from "../dbConnection";

const getAllUnits =async (page: number, pageSize: number) => {
    try {
        const offset = (page - 1) * pageSize;
        const result = await dbConnection.query(`select * from Units LIMIT ? OFFSET ?`, [pageSize, offset]
        )
        console.log(result)
        return result;
    }
    catch(e: any) {
        return null;
    }
}

const getTotalCount = async () => {
    try {
        const result = await dbConnection.query(`select COUNT(*) as total from units`);
        return result[0].total;  
    } catch (e: any) {
        return null;
    }
}

const getUnitById = async (id: number) => {
    try {
        console.log(`Fetching unit with id: ${id}`)
        const result = await dbConnection.query(`select * from Units where id = ?`, [id])
 
        console.log(result)
        return result;
    }
    catch (e: any) {
        return null
    }
}

const addUnit = async (unit: any) => {
    try {
        const result = await dbConnection.query(`insert into Units (name, location, description, image_path, 
                                                 price, noOfGuests, amenities, user_id, latitude, longitude, created, updated) 
                                                 values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now()) `,
                                                [unit.name, unit.location, unit.description, unit.image_path, 
                                                 unit.price, unit.noOfGuests, unit.amenities, unit.user_id, unit.latitude, unit.longitude] )
          return result || []                                     
    }
    catch (e: any) {
        return { success: false, msg: e.message}
    }
}

const updateUnit = async (unit: any, id: number) => {

    //const amenities = JSON.stringify(unit.amenities)

    try {
        console.log("Unit:", unit, "id:", id)
        const result = await dbConnection.query(`update Units
                                                set name = ?, location = ?, description = ?, rating = ?, image_path = ?,
                                                price = ?, noOfGuests = ?, amenities = ?, latitude = ?, longitude = ?
                                                where id = ?`, 
                                                [unit.name, unit.location, unit.description, unit.rating, unit.image_path,
                                                 unit.price, unit.noOfGuests, unit.amenities, unit.latitude, unit.longitude, id])
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

  const queryParams: any[]= [];

  if (term) {
    query +=  `AND (name LIKE ? OR location LIKE ?)`;
    queryParams.push(`%${term}%`, `%${term}%`);
  }

  if (startDate && endDate) {
    query += `
    AND NOT EXISTS (
        SELECT 1
        FROM reservations r
        WHERE r.unit_id = units.id
          AND (
            (r.start_date <= ? AND r.end_date >= ?)
            OR
            (r.start_date <= ? AND r.end_date >= ?)
          )
      )`;

    queryParams.push(endDate, startDate, startDate, endDate);
    }

   if (noOfGuests) {
    query += `
    AND noOfGuests >= ?`;
    queryParams.push(noOfGuests);

    console.log('MySQL_ Query:', query)
    console.log('Query_Parameters:', queryParams)
   }
    
    try {
        const results  = await dbConnection.query(query, queryParams);  console.log('SearchResults:',results)
        return results;
    }
    catch (e:any) {
        return { success: false, msg: e.message }
    }
 }

 const getUserIds = async () => {
    try {
        const result = await dbConnection.query(`select DISTINCT user_id from units`)
        console.log('UserIds:', result)
        return result;
    }
    catch (e: any){
        return null
    }
 }


export default { getAllUnits, getUnitById, addUnit, updateUnit, deleteUnit,  searchUnits, getUserIds, getTotalCount}