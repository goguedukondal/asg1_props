const box=({color_name,color_code})=>{

return(
    <>
    <div className="box"  style={{height:"14rem",width:"10rem",backgroundColor:"white",border:"0.5px solid black",marginBottom:"2rem",boxShadow: "1px 2px 9px "}}>
        <div className="color_part" style={{height:"10.5rem",width:"10rem",backgroundColor:`${color_code}`}}>
            

        </div>
        <div style={{marginLeft:"10px"}}>
            <p style={{fontSize:"large",marginBottom:"1px",marginTop:"2px"}}>{`${color_code}`}</p>
            <p style={{color:`${color_code}`,marginBottom:"1px",marginTop:"2px"}}>{`${color_name}`}</p>
        </div>
    </div>
    </>
);
}

export default box;