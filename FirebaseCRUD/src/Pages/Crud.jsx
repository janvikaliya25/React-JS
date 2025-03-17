export default function Crud(){
    return(
        <div>
             {/* <h1 className="text-center mt-4">crud</h1> */}
             <div className="border d-flex justify-content-between align-items-center">
                <div className="border">
                    <h1>CRUD</h1>
                    <div>
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter price"/>
                        <select name="" id="">
                            <option hidden>
                                   select catagory
                            </option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="border"></div>
             </div>
        </div>
    )
}