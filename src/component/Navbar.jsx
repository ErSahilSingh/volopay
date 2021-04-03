import React from 'react'



const Navbar =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light  bg-white">
         <div className="container">
            <a className="navbar-brand text-primary fw-bold" href="#" > Volopay</a>
            
    
      <div>
          <a className="btn btn-primary text-white"><i className="fas fa-upload"></i> UPLOAD</a>
        
        
          <a className="btn btn-outline-primary"> SIGN UP</a>
        
       
        
        <a  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-sliders-h btn btn-light"></i></a>
        
      </div>
    
  </div>
</nav>

        </>
    )
}
export default Navbar;