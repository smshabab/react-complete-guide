import './AddNewExpense.css';

const AddNewExpense = (props) => {
    return(
        <div className='background'>
                <button onClick={props.changeShowForm}>Add Expenses</button>
        </div>
    );

};

export default AddNewExpense;