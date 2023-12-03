const Footer = () => {
    return (
        <div className='text-center mt-10 bg-dark'>
            <div className="container">
                <footer className="text-center text-lg-start">
                    <div className="container d-flex justify-content-center py-5">
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="fa fa-facebook-f"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="fa fa-youtube"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="fa fa-instagram"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="fa fa-twitter"></i>
                        </button>
                    </div>

                    <div className="text-center text-white p-3" >
                        © 2023 Copyright
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;