
import './App.css'
import Table from './components/Table';

function App() {

const netIncomes = [
  {brand: "McDonalds", income: 1291283}, 
  {brand: "Burger King", income: 1927361}, 
  {brand: "KFC", income: 1098463}
];

const total = netIncomes.reduce((acum, current) => acum + current.income, 0);
const averageIncome = (total / netIncomes.length).toFixed(2);

  return (
    <>
      <Table data={netIncomes}/>
      <p>Average income: ${averageIncome}</p>
    </>
  )
}

export default App
