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
        <ExpenseItem />
      </div>
    </>

  );
}

export default App;
