import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // const expenseDate= new Date(2021, 2, 28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount= 293.98;

    // return (
    //     <div className="expense-item">
    //         <div>{expenseDate.toISOString("MMM dd, yyyy")}</div>
    //         <div className="expense-item__description">
    //             <h2>{expenseTitle}</h2>
    //             <div className="expense-item__price">${expenseAmount}</div>
    //         </div>
    //     </div>
    // );
    // const [title, setTitle] = useState(props.title);
    // console.log(title);

    // const clickHandler = () => {
    //     setTitle("Update...!");
    //     console.log(title);
    // };

    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                {/* <button onClick={clickHandler} className='click'>change title</button> */}
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;