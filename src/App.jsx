import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OurRecipes from './components/OurRecipes/OurRecipes'

function App() {

  return (
    <div className='max-w-[95%] lg:max-w-[91.667%] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App
