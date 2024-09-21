import React, { useState } from 'react'


function App() {

  let [data,setData]=useState({});

let handelsubmit=(e)=>{
  e.preventDefault();
  
}







  return (
    <>
    <form method="post" onSubmit={(handelsubmit)} >

    <table border={1} align='center'>
    <caption>
  <h2>User Data</h2>
</caption>
      <thead>
        <tbody>
          <th>
            <tr>
              <td>
               UserID
              </td>
              <td>
          <input type="text" name="" />
              </td>
            </tr>

            <tr>
              <td>
              EmailID
              </td>
              <td>
          <input type="text" name="" />
              </td>
            </tr>

            <tr>
              <td>
            Password
              </td>
              <td>
          <input type="password" name="" />
              </td>
            </tr>

            <tr>
              <td>
              Address
              </td>
              <td>
          <textarea name="Addresss" ></textarea>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td><input type="radio" name="Gender" id="Male" />Male
              <input type="radio" name="Gender" id="Female" />Female</td>
             
            </tr>

            <tr>
              <td>
              City
              </td>
              <td>
         <select name="" id="">
          <option value="">--Select City--</option>
          <option value="">Surat</option>
          <option value="">Ahmedabad</option>
          <option value="">Baroda</option>
          <option value="">Mumbai</option>
          <option value="">Other</option>
         </select>
              </td>
            </tr>
            
          
            
              <input type="submit" value="Submit" />
           
          </th>
      
        </tbody>
        
      </thead>
    </table>






    </form>
      
    </>
  )
}

export default App
