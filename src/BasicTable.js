import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable(props) {
  const[search, setSearch]=useState("")
  const[filterData,setFilterData]=useState([])
  useEffect(()=>{
    if(search.length>0){
      let filter=props.data.filter((item)=>{
        return item.title.toLowerCase().startsWith(search.toLowerCase())
      })
        setFilterData(filter)
        // console.log("fil",filter)
    } 
  },[search])
  const handleChange=(e)=>{
    // console.log('e',e.target.value) 
    setSearch(e.target.value)
    // console.log('search',search)
   
  }
  // console.log("hello",filterData)
  const apiData = filterData.length >0 ? filterData : props.data;
  // console.log("hello api",apiData)
  return (
     <><input type='text'
      placeholder='search here'
      onChange={handleChange}  /><TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>

              <TableCell align="right">Id&nbsp;</TableCell>
              <TableCell align="right">Title</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {apiData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>

                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></>
  );
}
