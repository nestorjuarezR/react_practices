import { useState } from 'react'
import Navbar from './components/Navbar'
import Events from './components/Events'
import './App.css'
import SignupForm from './components/Events/components/EventItem/SignupForm'

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  console.log(searchTerm,10);
  return (
    <>
      {/* <Navbar onSearch = {handleNavbarSearch}/>
      <Events searchTerm={searchTerm}/> */}
      <SignupForm></SignupForm>
    </>
  )
}

export default App
