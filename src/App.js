import ExpenseItem from "./components/ExpenseItem";

function App() {

  const items = [
    { Name: 'Item Name', Date: new Date(), Price: '$294.67' },
    { Name: 'Item Name', Date: new Date(), Price: '$294.67' },
    { Name: 'Item Name', Date: new Date(), Price: '$294.67' },
    { Name: 'Item Name', Date: new Date(), Price: '$294.67' },
  ]

  return (
    <>
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem Name={items[0].Name} Date={items[0].Date} Price={items[0].Price} />
      </div>
    </>

  );
}

export default App;
