import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';


const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("In Expense : " + selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseList items={filterExpenses}/>
        
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            */}
        </Card>
    );
}

export default Expense
