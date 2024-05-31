import React, { useEffect, useState } from 'react'
import {getDataFromServer} from '../service/service'
import AddExpense from './AddExpense'


const ShowData = () => {
  const[items,setItems] = useState([])
  const[showForm,setShowForm] = useState(false)
  const[sum,setSum] = useState(0)
  const[rahulSpent,setRahulSpent] = useState(0)
  const[rameshSpent,setRameshSpent] = useState(0)





  useEffect(() =>  {
    const fetchData = async () => {
    const data = await getDataFromServer();
    setItems(data)
    setSum((data.reduce((res,each)=>(res = res + each.price),0)))
    let rahulSpent = 0;
    let rameshSpent = 0;
    data.map((each) => each.payeeName === "Rahul" ? (rahulSpent = rahulSpent + each.price ): rameshSpent = rameshSpent + each.price)
    setRahulSpent(rahulSpent)
    setRameshSpent(rameshSpent)

    }
    fetchData();
  },[showForm])
  
  function success(){
    setShowForm(false);
  }
  
  function cancel(){
    setShowForm(false);
  }

  return (
    <div>
       <header className="my-4" id='page-header'>Expense Tracker
      </header>
        
        <button className="btn btn-primary" id='add-button' onClick={() => setShowForm(true)}>Add</button>
        {showForm && (
          <div className='form'> <AddExpense onTrue={success} onClose={cancel}></AddExpense>   </div>
        )}
        
        <div className='exp'>
        <div className='use-inline date header-color'>Date</div>
        <div className='use-inline  header-color'>Product purchased </div>

        <div className='use-inline price header-color'>Price</div>

        <div className='use-inline header-color payee'>Payee</div>
        {items && items.map((eachItem) => (
          <div>
            <div className='use-inline date'>{eachItem.setDate}</div>
            <div className='use-inline'>{eachItem.product}</div>
            <div className='use-inline price'>{eachItem.price}</div>
            <div className='use-inline payee'>{eachItem.payeeName}</div>
            </div>
        ))}
        <hr />
        <div className='exp tot'>
        <div className='use-inline'>Total :</div>
        <span className='use-inline total'>{sum}</span> <br />
        
        <div className='use-inline'>Rahul Spent :</div>
        <span className='use-inline total rahul'>{rahulSpent}</span> <br />
        
        <div className='use-inline'>Ramesh Spent :</div>
        <span className='use-inline total ramesh'>{rameshSpent}</span>   <br />


        <span className='use-inline total payable'>{rahulSpent > rameshSpent ? "Pay Rahul" : "Pay Ramesh"}</span> 
        <span className='use-inline total payable price'>{Math.abs((rahulSpent - rameshSpent)/2)}</span>  
        </div>
        </div>
  
    </div>
  )
}

export default ShowData