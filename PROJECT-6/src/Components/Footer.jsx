export default function Footer(){
    return(
        <div className="border" style={{height:"600px"}}>
            <div className="d-flex justify-content-evenly align-items-center" style={{height:"80px",backgroundColor:"#313035"}}>
                <div className="container h-100 m-auto d-flex align-items-center" style={{position:"relative"}}>
                    <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
                    <h5 className="mt-3 ms-3 text-light fw-bold" style={{fontSize:"15px"}}>List your show</h5>
                    <p className="mt-4 ms-4 text-light" style={{fontSize:"15px"}}>Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow</p>
                    <button className="btn btn-danger" style={{right:"0",position:"absolute",width:"150px",fontSize:"15px",height:"40px"}}>Contact today</button>
                </div>
            </div>
            <div className="border" style={{height:"110px",backgroundColor:"#404043"}}>
                <div className="container border d-flex justify-content-evenly align-items-center h-100">
                    <div>
                        <img src="" alt="" />
                        <p>24/7 CUSTOMER CARE</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>RESEND BOOKING CONFIRMATION</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>SUBSCRIBE TO THE NEWSLETTER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}