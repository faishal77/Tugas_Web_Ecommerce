"use client"

import { useEffect, useState } from "react";
 function products(){
    const [dataApi, setData] = useState([]);
    let UrlApi = "http://localhost:3000/api/products"

  useEffect(() => {
    fetch(UrlApi)
      .then((response) => response.json())
      .then((data) => 
      setData(data.data)
  
      );
  },);

  type DataType = {
    id:number;
    name:string;
    price:string;
    description:string;
  }
    return(
        <>
        {
          dataApi ? dataApi.map((datas:DataType)=>(
            <>
          <div key={datas.id} className="m-auto w-[90%] h-max mt-[5vmax] gap-4 flex lg:flex-row flex-col sm:flex-col md:flex-row">
          <div  className="card m-auto w-[100%] bg-base-100  shadow-xl">
          <figure><img src={datas.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
        {datas.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{datas.description}</p>
    <div className="card-actions mt-3">
      <div className="badge badge-outline">{datas.price}</div> 
    </div>
    <button className="btn btn-primary m-auto mt-5 w-[60%]">buy now</button>
  </div>
</div> 
            </div>
            </>
            )):<><h1>No data</h1></>
        }
  

        </>    
    )
}

export default products;