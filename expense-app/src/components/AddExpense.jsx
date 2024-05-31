import React, { useState } from 'react'
import { postDataFromServer } from '../service/service';
import './addexpense.css'

const AddExpense = (props) => {

  const [payeeName,setPayeeName] = useState("")
  const [price,setPrice] = useState()
  const [product,setProduct] = useState("")
  const [setDate,setSetDate] = useState("05-04-2022")


  const handlePayeeChange = (e) => {
    setPayeeName(e.target.value)
  }
  
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }
  
  const handleProductChange = (e) => {
    setProduct(e.target.value)
  }
  
  const handleDateChange = (e) => {
    setSetDate(e.target.value)
  }
  
   const handleSubmit= async(event) => {
    event.preventDefault();
    const response = {
         payeeName,
         product,
         price,
         setDate
    }
    const data = await postDataFromServer(response);
    props.onTrue()
   }

  return (
    <section >
      <div className='head'>
      <header className='add'>
        <h1>Add new item</h1>
        <p ><span style={{ color: 'red' }}>Read the below instructions before proceeding</span>
          <br />
          Make sure you fill all the fields where * is provided
        </p>
      </header>
      </div>
      <div className='form-add'>
      <form onSubmit={handleSubmit}>
           <article>
            
            <p>Name :</p>
            <select required 
            value={payeeName}
            onChange={handlePayeeChange}>
            <option value="" defaultChecked>Choose</option>
            <option value="Rahul" >Rahul</option>

            <option value="Ramesh" >Ramesh</option>
            </select>
           </article>

           <article>
            <p>Product purchased:</p>
            <input type="number" required
            value={product}
            onChange={handleProductChange}/>
           </article>

           <article>
            <p>Price:</p>
            <input type="number" required
            value={price}
            onChange={handlePriceChange}/>
           </article>

           <article>
            <p>Date:</p>
            <input type="date" required
            value={setDate}
            onChange={handleDateChange}/>
           </article>
           <div class="button-container">
          <button onClick={props.onClose}>Close</button>
          <button type='submit' className='button2'>Submit</button>
         </div>
      </form>
      </div>
    </section>
  )
}

export default AddExpense