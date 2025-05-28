
import Productform from "../Components/Productform";
import Productlist from "../Components/Productlist";
import { useState } from "react";

function Product() {
  const [swich, setSwich] = useState(true);
  const [state, setState] = useState({
    Image: "",
    Title: "",
    Price: "",
  });
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setArr([...arr, state]);
    
    setState({ Image: "", Title: "", Price: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#FAD0C4] via-[#E8E8E8] to-[#FFDEE9] text-black">
      <div className="fixed top-0 left-0 w-full h-[100px] flex justify-center items-center bg-white/20 backdrop-blur-md shadow-lg z-10">
        <button
          onClick={() => setSwich(false)}
          className={`w-[200px] py-3 mx-5 text-lg font-semibold rounded-lg transition-all duration-300 ${
            !swich
              ? "bg-[#FFC1CC] text-white shadow-lg scale-105"
              : "bg-[#F4C2C2] text-black"
          } hover:bg-[#E6A6A6] hover:text-white`}
        >
          Product
        </button>
        <button
          onClick={() => setSwich(true)}
          className={`w-[200px] py-3 mx-5 text-lg font-semibold rounded-lg transition-all duration-300 ${
            swich
              ? "bg-[#FFC1CC] text-white shadow-lg scale-105"
              : "bg-[#F4C2C2] text-black"
          } hover:bg-[#E6A6A6] hover:text-white`}
        >
          Form
        </button>
      </div>

      <div className="h-[120px]"></div>

      <div className="w-11/12 max-w-4xl my-10 p-8 rounded-xl backdrop-blur-md bg-white/30 shadow-2xl">
        {swich ? (
          <Productform
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            state={state}
          />
        ) : (
          <Productlist arr={arr} />
        )}
      </div>
    </div>
  );
}

export default Product;
