import './AddNewExpense.css';

const AddNewExpense = (props) => {
    return(
        <div className='controls'>
            <div className='actions'>
                <button onClick={props.changeShowForm}>Add Expenses</button>
            </div>
        </div>
    );

};

export default AddNewExpense;