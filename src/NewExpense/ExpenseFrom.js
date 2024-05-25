import React from 'react'
import './ExpenseForm.css'
function ExpenseFrom() {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' min="2000-01-01" max="2024-05-24" />
                </div>
                <div className='new-expense__action'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseFrom
