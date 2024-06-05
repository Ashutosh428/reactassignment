"use client"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import  spbag  from "./images/spbag.png"
import  vanitybox  from "./images/vanitybox.png"
import  totbag from "./images/totbag.png"
import  sleeve from "./images/sleeve.png"
import  dufbag from "./images/dufbag.png"
import css from "./design.css"
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect } from "react";
import axios from "axios";

import { faMagnifyingGlass, faRupee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [count,setcount] = useState([]);
  useEffect(() => {
   async function callapp(){
      // const url = await fetch('https://fakestoreapi.com/products');
      // const res = await url.json();
      // console.log(res);
      // setcount(res);
      axios.get('https://fakestoreapi.com/products').then((response)=>{
console.log(response.data);
setcount(response.data)
      })

    }
   callapp();

  }, [])
  
 
  return ( 
   
      <>
    {/* <div className="col-md-4 col-lg-4">
      {count.map(item => (
        <>
        <h1>{item.id}</h1>
        <p>{item.title } {item.price}</p>
        <p></p>
      </>
        
      ))}
    </div> */}

    <div className="container bg-black text-white pt-2"> 
    <div className="row"> 
    <div className="col-md-3">
    <h5>TANN TRIM</h5>
    </div>
    <div className="col-md-9 text-end iconstop">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    <FontAwesomeIcon icon={faUser} />
    <FontAwesomeIcon icon={faBagShopping} />
    </div>
    </div>

   
    <div className="row justify-content-center">
    <div className="col-md-1">Bags</div>
    <div className="col-md-1">Travels</div>
   
    <div className="col-md-1">Gifting</div>
    <div className="col-md-1">Jewelery</div>
    <div className="col-md-1">Accesories</div>
    </div>
   

   <div className="row text-center justify-content-center mt-5 "> 
   <div className="col-md-2"> 
<Image src={spbag} alt="" className="img-fluid menuicon"width={60} height={60}/>
<p>All Bags</p>
   </div>
   <div className="col-md-2"> 
<Image src={vanitybox} alt="" className="img-fluid menuicon"width={60} height={60}/>
<p>Vanity Pouch</p>
   </div>

   <div className="col-md-2"> 
<Image src={totbag} alt="" className="img-fluid menuicon"width={60} height={60}/>
<p>Tote Bag</p>
   </div>
   <div className="col-md-2"> 
<Image src={sleeve} alt="" className="img-fluid menuicon"width={60} height={60}/>
<p>Sleeve Bag</p>
</div>
<div className="col-md-2"> 
<Image src={dufbag} alt="" className="img-fluid menuicon"width={60} height={60}/>
<p>Duf Bag</p>
   </div>
   
   </div>

   <div className="row"> 
   <h6>Bags . Backpacks</h6>
   {count.map(item => (
        <>
        <div className="col-md-3">
        <div className="card" style={{width: "15rem",marginBottom:"24px"}}>
  <img src={item.image} className="card-img-top img-fluid" alt="" style={{height:"180px",objectFit:"contain"}}/>

  <div class="card-body">
    <p class="card-text" style={{fontSize:"13px"}}>{item.title}.</p>
    <p style={{fontSize:"13px"}}> <FontAwesomeIcon icon={faRupee} /> {item.price}</p>
  </div>
</div>
       
       </div>
      
      </>
        
      ))}
  
   </div>
    </div>
    
  </>
 
  );
}
