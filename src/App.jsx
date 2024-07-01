import { useState } from 'react'
import HeaderMain from './components/header/HeaderMain'
import PatientMain from './components/patients/PatientMain'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#F6F7F8] px-4 xl:px-0'>
    <HeaderMain/>
    <PatientMain/>

    </div>
     
    </>
  )
}

export default App
