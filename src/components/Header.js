
import { Link } from "react-router-dom";
function Header() {
  
    return (
      <header>
       <div className='container'>
         <div className="heading">
           <h1>Movies-<span>Hub</span></h1>
            <nav>
             <ul>
               <li><Link to="/movie-hub">Movies</Link></li>
               <li ><Link to="/NotFound">Upcoming movies</Link></li>
               
               <li><Link to="/New">Add movies</Link></li>
               
               <li><Link to="/NotFound">Contact us</Link></li>
             </ul>
            </nav>
         </div>
       </div>
     </header>
    )
  }
  
  export default Header