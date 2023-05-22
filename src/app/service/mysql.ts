// import * as mysql from 'promise-mysql';

// let _pool: mysql.Pool;


// export const createPool = async () => {
//     const dbConfig: any = {
//         user: 'root',
//         password: 'root',
//         database: 'local',
//         host: 3306
//     }

//     return await mysql.createPool(dbConfig)
// }

// export const executeQuery = async (sqlQuery: any) => {
//     if(!_pool) {
//         _pool = await createPool();
//     }
//     let data;
//     return data = await _pool.query(sqlQuery)
// }