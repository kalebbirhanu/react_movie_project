
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
  const imageurl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAB2CAMAAACwGoL7AAAAaVBMVEUAAACxBg/lCRMwAQSnBg5bAwi4Bg/oCROsBg4MAAGjBg44AgV1AwrrCRMqAQOqBg+dBQ+LAw2TAw6FAw3fCRPWCBK/BxDPBxLFBxFtBAlQAwd7AgxoAwogAgM9AgUlAAP0ChQbAQNHAwZehQz0AAADgklEQVR4nO2b23LiMBBEJRC2LHB08RXbOCT//5ErGTD2KPu66dpSPzIvp1StmWYEjCUlJSUlJSUlJSXh6jafd5pvu/LnB1HxS5xvXfPDTnm3rRaK7yWOvwW66nQgun9tqpDEfbknLt2mCknMCXHeb6yKSdwRJx9O7yokccYJ8NYWmMSqppfvXcUkNtQW92GtYhJrTbuFXquYxNwQW+TNioVK3BNblNOrCkosBO0W7asKSixd1C1eQwSUmLuWzr3qWUUlVoYSZ88qKrF2Dc2c50cVlZi7jA6Rpy1giY37S66HJVYVtcXhMalhibWTP+d6WGJpaEvOu6UlwxJzZaMAN4cqLrGwUYAToYpLrM1Ih8hii8KgEktT0QCXX7GJlVM0coqFWIISc+EsDXA5NrE0I7XFfVqIJSqxsu6HAFc4YGI31uSQ69kT6z0yELEwFQ1w5cgKK1CJfUe2hl69zhMrjUrsbVE1BPnOmFUClliYka45fYCzBpaYC2Mt7RZtUZm9LZCItbcFDXD5MLr9ISMRByNL2i3cxRNvDxmKONiCdot6sntbgBG7MbKFqfa2gCIORlbR3fPECpTYXz1vCxrgamud0qDEwRZRri+JLbCItSemuT7vxp0tsIilt8VIXHGoKwtL/OgWLT1kXblNf8MjttFitt8ZGYw4dIsowOXBFhqT2A9qf/eiXL+zBRpxsMX1Tg658d0Cltjbws10UtduE5LRiL0tzFDRu8e9LUCJwxAxp+/oCXW069XDI1bmxKJJbb0tYImFmtglCnDjamQ0Yt8tPHERdYu3kfGItZgYi346ZKzRoMRca08cbb/b6tWRAYmlJ/6IJvXFCVRiycNqPlq1KKtQiflCPJC75wPc08ioxAV9Qq2dE9DEjH6nDraAJb4sn9Kr14yPFxFA4mwhZtHLunXgxNGjCH/YApf4O9oCoBMX0XdqtxgZl5jR7XeZWY1NfKRXr64ENjGjv1Y/GANOfKGTOgv9DZn4HE9qjU3MolWLUeDEU7SBc+DELOoW3sjYxIJ2CynAiSc69noDTnyL3socODGj2++Sa3DiM121dAKcOMr1tUQnjnJ9i0480MVsbcCJWVfmD73unoIgzoLCI4hx1tphW52kzLK+65q6DMrL/uO3QFedMuXGaZjn4/H29fMfdYvP4/w9nK5WtV1z/sd8SUlJSUlJSUlJSf+z/gB0IkObTzKfnwAAAABJRU5ErkJggg=="
    return (
      <nav  className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src={imageurl}  alt ="" width="10px" height="10px" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
             <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link ">Movies</Link>  
            </li>
            <li className="nav-item">
              <Link to="/Feedback" className="nav-link disabled">Feedback</Link>  
            </li>
            
          </ul>
          <form className="d-flex">
            <input type="text" placeholder="search" className="form-controle me-2"/>
            <button type="button" className="btn btn-primary "> search</button>
          </form>
          <button className="btn btn-info btn-md"> 
     <Link to ="/form" className="nav-link">CREATE NEW ACCOUNT</Link>
    </button>
    <button className="btn btn-info btn-md ml-10px"> 
     <Link to ="/create" className="nav-link">SignIn</Link>
    </button>
        </div>
        </div>
    </nav>
    );
}
export default Navbar;