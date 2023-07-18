export default function ExpenseHeader () {
    return (
        <div className='expense-headers'>
            <div className='column'>DATE</div>
            <div className='column'>CATEGORY</div>
            <div className='column'>TYPE</div>
            <div className='column'>AMOUNT</div>
            <div className='delete'></div>
        </div>
    )
}