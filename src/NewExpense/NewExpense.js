import React from 'react'
import './NewExpense.css'
import Expense from '../components/Expense/Expense'

function NewExpense() {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  )
}

export default NewExpense
