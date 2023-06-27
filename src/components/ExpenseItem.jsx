import'./ExpenseItem.css';

function ExpenseItem() {

    const item = {
        Name: 'Item Name',
        Date: new Date(),
        Price: '$294.67'
    }

    return (
        <div className="expense-item">
            <div>{item.Date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{item.Name}</h2>
                <div className='expense-item__price'>{item.Price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;