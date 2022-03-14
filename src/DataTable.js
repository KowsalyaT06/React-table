import React, {useState,useEffect } from "react";
import BasicTable  from './BasicTable';


const DataTable = () => {
    const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
         
           .then((response) => response.json())
         .then(json => setTableData(json))
         },[])
//    console.log(tableData)
      return(
          <>
       
        
         <BasicTable data={tableData}/>
         </>
      )
}
export default DataTable
