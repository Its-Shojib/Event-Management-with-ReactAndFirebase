import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-5 bg-black text-white rounded mt-5">
                <nav className="grid grid-flow-col gap-4">
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link className="text-3xl" to='https://web.facebook.com/mdshojib.hossain.7927'><BsFacebook></BsFacebook></Link>
                        <Link className="text-3xl" to='https://www.linkedin.com/in/md-shojib-hossain/'><BsLinkedin></BsLinkedin></Link>
                        <Link className="text-3xl" to='https://twitter.com/Its_Shojib'><BsTwitter></BsTwitter></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 || All right reserved by Md Shojib Hossain</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;