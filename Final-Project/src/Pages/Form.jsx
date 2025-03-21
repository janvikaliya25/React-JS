
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        Image: "",
        Name: "",
        Type: ""
    });

    const [arr, setArr] = useState([]);
    const [err, setErr] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data")) || [];
        setArr(storedData);
    }, []);

    useEffect(() => {
        if (id && arr.length > 0) {
            let foundRecipe = arr.find((el) => el.id === id);
            if (foundRecipe) {
                setState(foundRecipe);
            }
        }
    }, [id, arr.length]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value.trimStart() }));
        setErr((prevErr) => ({ ...prevErr, [name]: "" }));
    };

    const validateForm = () => {
        const errors = {};
        if (!state.Image.trim()) {
            errors.Image = "Image URL is required!";
        }
        if (!state.Name.trim()) {
            errors.Name = "Recipe Name is required!";
        }
        if (!state.Type.trim()) {
            errors.Type = "Recipe Type is required!";
        }
        setErr(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        let updatedArr;
        if (id) {
            updatedArr = arr.map((el) => (el.id === id ? { ...state, id } : el));
        } else {
            updatedArr = [...arr, { ...state, id: Date.now().toString() }];
        }

        setArr(updatedArr);
        localStorage.setItem("data", JSON.stringify(updatedArr)); 

        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 border p-4 shadow rounded" style={{ width: "40%" }}>
                    <h2 className="text-center mb-4">{id ? "Edit Recipe" : "Add Recipe"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                name="Image" 
                                value={state.Image} 
                                onChange={handleChange} 
                                placeholder="Enter Recipe URL" 
                                className="form-control w-100" 
                            />
                            {err.Image && <p className="text-danger">{err.Image}</p>}
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                name="Name" 
                                value={state.Name} 
                                onChange={handleChange} 
                                placeholder="Enter Recipe Name" 
                                className="form-control w-100" 
                            />
                            {err.Name && <p className="text-danger">{err.Name}</p>}
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                name="Type" 
                                value={state.Type} 
                                onChange={handleChange} 
                                placeholder="Enter Recipe Type" 
                                className="form-control w-100" 
                            />
                            {err.Type && <p className="text-danger">{err.Type}</p>}
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger px-4">{id ? "Update" : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
