import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {


  return (
    <>
      <div className='md:mx-auto md:container'>
        {/* header section */}
        <Header></Header>

        {/* banner section */}
        <Banner></Banner>

        {/* our recipes */}
        <OurRecipes></OurRecipes>

        {/* recipes */}
        <div className='flex flex-col md:flex-row gap-x-4 mt-5'>
          <Recipes></Recipes>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
