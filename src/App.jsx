import './App.css'
import Counter from './Features/Counter'
import GreetingApp from './Features/GreetingApp'
import TemperatureConverter from './Features/TempConverter'
import TodoApp from './Features/TodoApp'

function App() {

  return (
    <div>
      <Counter/>
      <TodoApp/>
      <GreetingApp/>
      <TemperatureConverter/>
    </div>
  )
}

export default App
