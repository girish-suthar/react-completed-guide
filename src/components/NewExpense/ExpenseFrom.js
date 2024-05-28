import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseFrom(props) {
    const [enterTitle, setEnterTitile] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    // const[userInput,setUserInput] = useState({
    //     enterTitle :'',
    //     enterAmount :'',
    //     enterDate :'',
    // });

    const titleChangeHandler = (event) => {
        setEnterTitile(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterTitle:event.target.value,
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState,enterTitle:event.target.value};
        // });
    }
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount :event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate),
        };
        props.onSaveExpenseData(expenseDate);
        setEnterTitile('');
        setEnterAmount('');
        setEnterDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enterTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enterAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' min="2000-01-01" max="2024-05-24"
                        value={enterDate}
                        onChange={dateChangeHandler}
                    />
                    {/* <input type='Date' min="2000-01-01" max="2024-05-24" onChange={(event)=>{event.target.value}}/> */}
                </div>
                <div className='new-expense__action'>
                    <button type='submit'>Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseFrom
