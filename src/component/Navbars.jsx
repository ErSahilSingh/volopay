import React from 'react'



const Navbars=()=>{
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-bottom">
            <div className="container justify-content-center">
            <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <a class="btn-floating btn-sm text-white mx-1">
            <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm text-white mx-1">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm text-white mx-1">
            <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
         
        </ul>
            </div>
</nav>
        </>
    )
}

export default Navbars;