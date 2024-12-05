import Navbar from "./navbar"
import Categories from "./categories"
import Banner from "./udemy_banner"
import Recommended from "./udemy_recommended"
import Topics from "./topics"
import Most_Popular from "./popular"
import Footer from "./footer"
function App(){


    return(
        <div>
<Navbar></Navbar>
<Categories></Categories>
<Banner></Banner>
<Recommended></Recommended>
<Topics></Topics>
<Most_Popular></Most_Popular>
<Footer></Footer>
        </div>
    )
}
export default App