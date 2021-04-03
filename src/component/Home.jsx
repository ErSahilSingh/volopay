import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Model from "./Model";
import Navbar from "./Navbar";
import Navbars from "./Navbars";

const Home =()=>{
    const [data, setdata] = useState([]);
    const [search, setsearch]= useState("");
    
    useEffect(() => {


        const fetchDate= async()=>{
            
               const results = await axios("https://api.giphy.com/v1/gifs/trending",{
                    
                params:{
                    api_key:"z679gymyX1e9pWFLNt1w6mrFusJ2paID"
                }

                });
                console.log(results)
                setdata(results.data.data);
        };
            fetchDate()
    },[]);

   const renderGifs=()=>{
            
            return data.map(el => {
                return(
                <div key={el.id} className='gif'>
                        <img src={el.images.fixed_height.url} />
                </div>
                )
            })
    }

            const handlesearchchange=event=>{
                
                setsearch(event.target.value);
            }

            const handlesubmit=async event=>{
                event.preventDefault()
                
                
                    const results= await axios("https://api.giphy.com/v1/gifs/search",{
                        params:{
                            api_key:"z679gymyX1e9pWFLNt1w6mrFusJ2paID",
                            q: search
                        }
                    });

                    setdata(results.data.data);
                
            }

    return(
        <>
        <Navbar/>
        
        <Model/>
        <div className="container-fluid ">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
                <div className="container justify-content-center ">
                
                    <form className="d-flex container ">
                        
                        <input value={search} id="myInput" onChange={handlesearchchange} className="form-control " type="text" placeholder="Search" />
                        <button onClick={handlesubmit} className="btn btn-outline-light" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    
                </div>
            </nav>
            
                <h3 className="container" ><strong> Tranding GIF's</strong></h3>
                    
                <div className="gifs container">{renderGifs()}</div>
            
        
        </div>
                        
        <Navbars/> 
    