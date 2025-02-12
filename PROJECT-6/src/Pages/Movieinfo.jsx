
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const [arr, setArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        setArr(data);
    }, []);

    const handleDelete = (id) => {
        const updatedArr = arr.filter((item) => item.id !== id);
        setArr(updatedArr);
        localStorage.setItem("data", JSON.stringify(updatedArr));
    };

    return (
        <div className="container mt-4">
            <h4 className="fw-bold">Recommended Movies</h4>
            <div>
                {arr.length === 0 ? (
                    <p className="text-center">No Movies Added.</p>
                ) : (
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        {arr.map((e, i) => (
                            <div key={i} className="border p-2 mt-4" style={{ width: "22%", height: "550px" }}>
                                <div className="w-100" style={{ borderRadius: "10px", height: "400px" }}>
                                    <img src={e.Image} alt={e.Image} className="w-100 h-100" style={{ borderRadius: "10px" }} />
                                </div>
                                <div>
                                    <h5 className="card-title mt-3 fw-bold">{e.Name}</h5>
                                    <p className="card-text text-secondary">Type: {e.Type}</p>
                                    <button className="btn btn-danger mt-3" style={{ width: "70px", fontSize: "12px" }} onClick={() => handleDelete(e.id)}>Delete</button>
                                    <Link to={`/LocalCrud/${e.id}`}><button className="btn btn-secondary ms-5 mt-3" style={{ width: "60px", fontSize: "12px" }}>Edit</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
