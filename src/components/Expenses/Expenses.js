import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){

    const [GetYear, SetYear] = useState('2020');

    const getYear = (year) => {
        console.log("Getting year from Expense.js");
        console.log(year);
        SetYear(year);
        props.getYear(year);
    };

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={GetYear} getYear={getYear} />
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
        </Card>
    );
}

export default Expenses;
