
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LocalCrud() {
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
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    useEffect(() => {
        if (id && arr.length > 0) {
            let foundMovie = arr.find((el) => el.id === id);
            if (foundMovie) {
                setState(foundMovie);
            }
        }
    }, [id, arr]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
        setErr((prevErr) => ({ ...prevErr, [name]: "" }));
    };

    const validateForm = () => {
        const errors = {};
        if(state.Image==""){
            errors.Image = "Image URL is required!";
        }
        if(state.Name==""){
            errors.Name = "Movie Name is required!";
        }
        if(state.Type==""){
            errors.Type = "Movie Type is required!";
        }
        setErr(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (id) {
            let updatedArr = arr.map((el) => (el.id === id ? state : el));
            setArr(updatedArr);
        } else {
            setArr([...arr, { ...state, id: Date.now().toString() }]);
        }

        navigate("/");
    };

    return (
        <div className="border mt-5 m-auto w-50" style={{ height: "400px" }}>
            <h1 className="text-center mt-3">Movie Details</h1>
            <form className="border w-75 m-auto mt-4 p-3" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="Image" 
                    value={state.Image} 
                    onChange={handleChange} 
                    placeholder="Enter Movie URL" 
                    className="form-control" 
                />
                {err.Image && <p className="text-danger">{err.Image}</p>}
                <br />

                <input 
                    type="text" 
                    name="Name" 
                    value={state.Name} 
                    onChange={handleChange} 
                    placeholder="Enter Movie Name" 
                    className="form-control" 
                />
                {err.Name && <p className="text-danger">{err.Name}</p>}
                <br />

                <input 
                    type="text" 
                    name="Type" 
                    value={state.Type} 
                    onChange={handleChange} 
                    placeholder="Enter Movie Type" 
                    className="form-control" 
                />
                {err.Type && <p className="text-danger">{err.Type}</p>}
                <br />

                <button type="submit" className="btn btn-danger" >{id ? "Update" : "Submit"}</button>
            </form>
        </div>
    );
}
