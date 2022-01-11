import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AddNewExpense from './components/NewExpense/AddNewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [getExpenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showForm, setShowForm] = useState(false);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  const getYear = year => {
    console.log(year);
  };

  const changeShowForm = () => {
    console.log("button clicked");
    setShowForm((prevProp)=>!prevProp);
  };

  return(
    <div className='background'>
      {showForm ? <NewExpense changeShowForm={changeShowForm} onAddExpense={addExpenseHandler}/> : <AddNewExpense changeShowForm={changeShowForm}/>}
      <Expenses expenses={getExpenses} getYear={getYear}/>
    </div>
  );
}

export default App;
