import './App.css'
import CoffeeButton from '/src/components/CoffeeButton.jsx'
import TeaButton from '/src/components/TeaButton.jsx'


function App() {

  return (
  <div className="container">
    <CoffeeButton className="coffeeButton"/>
    <TeaButton className="TeaButton"/>
    </div>
  )
}

export default App
