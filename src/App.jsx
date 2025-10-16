import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: 'Kaur',
    age: 30
  }

  const myArr = [1,2,3,4,5]
  

  return (
    <>
    <h1 className='bg-green-600 text-black rounded-xl p-4'>Tailwind CSS</h1><br></br>
      {/* <Card userName = "Parwinder" someObj ={myObj}/> */}
      <Card username = "Parwinder" btnText="Click Me"/>
      <Card username = "Parminder" />
    </>
  )
}

export default App
