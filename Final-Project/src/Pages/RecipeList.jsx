
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RecipeList() {
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
            <h4 className="fw-bold text-center">Recommended Recipes</h4>
            <div className="row g-4 mt-3 mb-5">
                {arr.length === 0 ? (
                    <p className="text-center">No Recipes Added.</p>
                ) : (
                    arr.map((e, i) => (
                        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow">
                                <div className="w-100" style={{ height: "300px" }}>
                                    <img
                                        src={e.Image}
                                        alt={e.Imagenpm}
                                        className="card-img-top h-100"
                                        style={{ objectFit: "cover", borderRadius: "5px" }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{e.Name}</h5>
                                    <p className="card-text text-secondary">Type: {e.Type}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(e.id)}
                                        >
                                            Delete
                                        </button>
                                        <Link to={`/Form/${e.id}`}>
                                            <button className="btn btn-secondary">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
