import { Link } from "react-router-dom";
import WordFlicker from "../common/WordFlicker";
import AnimatedText from "../common/AnimatedText";
import classNames from "classnames";

const HomePage = () => {
    const text: string[] = [
        "At STORagE, we believe your career should leave a lasting impression, and we help you achieve that with our innovative resume constructor. Your journey to the perfect resume becomes simpler and more exciting with every click!",
        "Our constructor is designed so that even beginners can create a professional resume effortlessly. Simply choose sections, add content, and enjoy the results.",
        "Your resume is your business card. Choose colors, fonts, and layout to create a unique design that reflects your style.",
        "Every section of the constructor can be adapted to your needs. Add sections, rearrange blocks, change styles - it's your constructor, your rules!",
        "Our constructor utilizes powerful analytical tools to ensure your resume meets the requirements of employers and passes through applicant tracking systems."];
    return (
        <>
            <div className="container">
                <div className="row mt-10 w-100">
                    <hr />
                    <h1 className="text-center font-header">
                        <WordFlicker sentence="Welcome to STORagE - Your Resume Constructor for Success!" speed={40} />
                    </h1>
                    <hr />
                    <div className="row gap-4 gap-lg-2 mt-10">
                        <h2 className="font-header">
                            <WordFlicker sentence="Why STORagE?" speed={45} />
                        </h2>
                        {
                            text.map((text, index) => {
                                return (
                                    <div key={index} className={classNames("col-12 col-lg-7", index % 2 === 0 ? "" : "ms-auto")}>
                                        <hr />
                                        <AnimatedText text={text} />
                                        <hr />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="row mt-10 w-100">
                    <h2 className="text-center font-header site-font">
                        Start crafting an impressive resume now!
                    </h2>
                    <div className="row text-center justify-content-center my-4 gap-3">
                        <div className="col-lg-3">
                            <Link className="btn btn-dark py-2 w-100" to="/login">Login</Link>
                        </div>
                        <div className="col-lg-3">
                            <Link className="btn btn-dark py-2 w-100" to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;