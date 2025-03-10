
import './section7.css';

function Section7() {
    return (
        <div className="m-auto mt-5" style={{ width: "94%" }}>
            <h1 className="text-center fw-light" style={{ fontSize: "30px", wordSpacing: "5px", letterSpacing: "5px" }}>SUGAR INSTA</h1>
            
            <div className="mt-5 d-flex justify-content-between align-items-center flex-wrap w-100 video-wrapper">
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/0ede6c19ed6a4a19b7127e82549adbd0.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/ff831fa9fb9347f9a1ab1cf8349f6ad4.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/e3353612e28f4b3ca736844682c85808.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/452c92eec593469ba10513027d104c74.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/0c67981286f34218bfe7ade0e0bf618c.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="video-container">
                    <video autoPlay muted loop className="h-100 w-100">
                        <source src="https://cdn.shopify.com/videos/c/o/v/bba6a69965e64571899829ac823e5ba8.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Section7;
