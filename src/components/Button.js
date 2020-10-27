import React from 'react'

const Button = ({text}) => {
    return ( <button className="btn" style={{background:"#46B5FE",color:"white",fontWeight:"bold",fontSize:"1.1rem",padding:"0.8rem 1.2rem"}}>{text}</button> );
}
 
export default Button;