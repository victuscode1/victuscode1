import CustomerList from "./components/CustomerList"
import FilteredData from "./components/FilterData"
import SortingDemo from "./components/SortingDemo"
import ForEach from "./Lect6/ForEach"

function App() {

  return (
    <div className='container'>
      {/* <ForEach /> */}
       <FilteredData /> 
      <CustomerList />
    </div>
  )
}

export default App