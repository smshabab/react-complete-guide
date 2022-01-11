import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { propTypes } from 'react-bootstrap/esm/Image';

function Expenses(props){

    const [GetYear, SetYear] = useState('2022');

    const getYear = (year) => {
        SetYear(year);
        props.getYear(year);
    };

    let expenseItems = [];
    const itemNotFound = <p style={{color:"#fff", margin: "0 auto"}}>NO ITEMS FOUND</p>;
    
    (props.getYear!==GetYear) ? expenseItems = props.expenses.filter(obj => obj.date.getFullYear().toString()===GetYear).map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>) :
    expenseItems = props.expenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>);
    
    const displayExpenses = (expenseItems.length>=1) ? expenseItems : itemNotFound;

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={GetYear} getYear={getYear} />
            {displayExpenses}
        </Card>
    );
}

export default Expenses;
