import'./ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.expense.Date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.expense.Name}</h2>
                <div className='expense-item__price'>{props.expense.Price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;