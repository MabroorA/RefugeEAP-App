import React from "react";

function List({props}) {
    const { title, pic, desc, link } = props;
    return(
    <div style={{ width: "80%", margin: "auto", padding: "2%"}}>
            <div style={{ fontWeight:"bolder", fontSize:"2rem"}}v>{title}</div>
            <div style={{ display: "flex"}}>
            <div>
                <img src={pic} alt={pic} style={{width:"200px", height:"140px", objectFit:"cover"}}></img>
            </div>
                <div style={{ paddingLeft:"8%"}}>
                    <div 
                    style={{ color:"black", 
                    padding: "2%", 
                    fontWeight: "600"}}>{desc}</div>
                    <button href={link} 
                    style={{ backgroundColor: "var(--clr-melon-1)",
                    textTransform: "uppercase",
                    color: "var(--clr-white)",
                    padding: "0.375rem 0.75rem",
                    letterSpacing: "var(--spacing)",
                    display: "inline-block",
                    transition: "var(--transition)",
                    fontSize:"0.875rem",
                    border: "2px solid transparent",
                    cursor: "pointer",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)", 
                    }}>LEARN MORE</button>
                </div>
            </div>
    </div>
    );
}

export default List;