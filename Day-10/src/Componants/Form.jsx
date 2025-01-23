import { useEffect, useState } from "react";
import {v4} from 'uuid'

function Form() {
    const [state, setState] = useState({
        img: "",
        title: "",
        price: "",
        id:v4()
    });

    const [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setArr([...arr, state]);
        setState({
            img: "",
            title: "",
            price: "",
            id:v4()
        });
    };
    console.log(arr)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="img"
                    value={state.img}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                />
                <br />
                <input
                    type="text"
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                />
                <br />
                <input
                    type="text"
                    name="price"
                    value={state.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
