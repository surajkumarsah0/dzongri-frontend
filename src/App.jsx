import RestaurantFooter from "./components/RestaurantFooter"
import RestaurantNavbar from "./components/RestaurantNavbar"
import { Hero } from "./Pages/Hero"
import Menu from "./Pages/Menu"
import { BrowserRouter , Routes ,Route } from "react-router-dom"


function App() {
 

  return (
    <>
    <RestaurantNavbar />
    {/* routes */}
    
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
  

    <RestaurantFooter />
      
    </>
  )
}

export default App
