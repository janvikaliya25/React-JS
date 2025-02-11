import { useEffect, useState } from "react"

export default function Movieinfo(){
    const [state,setState]=useState([]);

    useEffect(()=>{
        const a=JSON.parse(localStorage.getItem("data")) || [];
        setState(a);
    },[])
    return(
        <div>
            <h1>movie information</h1>
            {/* <div>
                {state.length == 0 ?
                <p>No Movie added..</p>
                :
                <div>
                    {state.map((e,i)=>{
                        <div key={i}>
                            <div>
                                <img src={e.Image} alt="" />
                            </div>
                            <div>
                               <h5 className="card-title">{movie.Name}</h5>
                               <p className="card-text">⭐ Rating: {movie.Rate}</p>
                               <p className="card-text">Type: {movie.Type}</p>
                            </div>
                        </div>
                    })}
                </div>
                }
            </div> */}
        </div>
    )
}