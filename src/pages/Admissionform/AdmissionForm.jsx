import React, { useState } from 'react'
import "./AdmissionForm.scss"
import  axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalComponent from '../../components/modal-component/ModalComponent';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '',
    boxShadow: 24,
    p: 4,
    transition:'1s all ease'
  };
  


const AdmissionForm = () => {
    const [opened, setOpen] = React.useState(true);

    const handleClose = () => setOpen(false);
  
 const[name,setName] = useState("");
 const[age,setAge] = useState("");
 const[designation,setDesignation] = useState("");
 const[salary,setSalary] = useState("");

//logic to submit
const handleSubmit=(e)=>{
e.preventDefault();
// console.log(`name = ${name}`, `age = ${age}` ,`salary = ${salary}` , `designation = ${designation}`)
const data = {
    Name:name,
    Age:age,
    Designation:designation, 
    Salary:salary

}
axios.post('https://sheet.best/api/sheets/77bd6c05-0c48-4680-a682-8a5bbcbfe3a5',data).then((response)=>{
    console.log(response);
    setName('');
    setAge('');
    setDesignation('');
    setSalary('');
})
setOpen(true);
}
  return (
            <div className="mainFormContainer">
                    <div className="formContainer">
        <br />
        <h1>Admissions Form</h1>
        <br />
        <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' required className='form-control'
            onChange={(e)=>{setName(e.target.value)}} value={name}
            />
            <br></br>
            <label htmlFor="">Age</label>
      
            <input type="text" placeholder='Enter your age' required className='form-control'
            onChange={(e)=>{setAge(e.target.value)}} value={age}
            />
            <br></br>
            <label htmlFor="">Designation</label>
           
            <input type="text" placeholder='Enter your designation' required className='form-control' 
            onChange={(e)=>{setDesignation(e.target.value)}} value={designation}
            />
            <br></br>
            <label htmlFor="">Salary</label>
            <input type="text" placeholder='Enter your salary' required className='form-control' 
            onChange={(e)=>{setSalary(e.target.value)}} value={salary}
            />
            <br></br>
            <div style={{display:'flex' , justifyContent:'flex-end'}}>
                <button type='submit' className='btn btn-ptimary'>Submit</button>
            </div>
          

        </form>
    </div>
  {opened && (
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >

      
       <ModalComponent handleClose={handleClose}/>

   </Modal>
  )}
    
     
    
            </div>
  )
}

export default AdmissionForm
