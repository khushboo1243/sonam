// import React from "react";
// import { useState } from "react";
// import axios from 'axios'
// function Movies() {
//     const [sreach, setSreach] = useState([]);
//     const [data, setData] = useState('');
//     axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=3583464c166eb3446babdeabbc188153&query=${data}`)
//         .then((res) => {
//             console.log(res, "res")
//             setSreach(res.res.data.results)
//         })
//         .catch((erro) => {
//             console.log(erro, 'erro')
//         })
//     return (
//         <div className="App">
//             <div className="container-fluid">
//                 <div className="row">
//                     <nav className="navbar navbar-expand-lg navbar-light bg-dark"></nav>
//                     <h3 className="head">React Movise sreach App</h3>
//                     <input className="sreach_bar" placeholder='Search...' value={data}
//                         onChange={(e) => setData(e.target.value)} />

//                     {sreach.length > 0 && (
//                         <div className="col-sm-10">
//                             {Object.values(sreach).map((key, index) => {
//                                 const link_img = "https://image.tmdb.org/t/p/w1280"
//                                 return (
//                                     <div className="card1 card col-sm-12">

//                                         <div>{sreach[index].title}</div>
//                                         <p>{sreach[index].release_date}</p>
//                                         <p className="prag">{sreach[index].overview}</p>
//                                         <img className=" card" src={link_img + sreach[index].poster_path}></img>
//                                     </div>
//                                 )
//                             })
//                             }
//                         </div>
//                     )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Movies;






import React, { useState, useEffect } from "react";
import axios from 'axios';
function Movise() {
    const [sreachApidata, setSreachApidata] = useState([]);
    const [data, setData] = useState("")
    axios.get(`https://dev.xpresscure.com/api/admin/lists_diseases`)
        .then((res) => {
            console.log(res)
            setSreachApidata(res)
        })
        .catch((erro) => {
            console.log(erro)
        })
    return (
        
        <div className="App">
            {sreachApidata.map((index)=>{
                return(
                    <h3>{index.department_name}</h3>
                )

            })}
           <h1>i am khushboo kumari</h1>
        </div>
    )
}
export default Movise;