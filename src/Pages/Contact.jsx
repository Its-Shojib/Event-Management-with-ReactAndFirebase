import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="my-5 flex flex-col md:flex-row min-h-[600px] justify-center items-center">
            <div className="space-y-5 flex-1 md:ml-10">
                <h1 className="text-4xl font-bold">Contact our team</h1>
                <p className=" text-xl font-medium">If you have any queries about our Banqueting Suites or would like to book an appointment to discuss your requirements and take a tour of our premises, please don’t hesitate to get in touch.</p>
                <div className="space-y-4 text-lg">
                    <p className="flex gap-3 items-center"><FaLocationDot></FaLocationDot> Mirpur-1, Dhaka,Bangladesh</p>
                    <p className="flex gap-3 items-center"><AiOutlineMail></AiOutlineMail> mdshojib922@gmail.com</p>
                    <p className="flex gap-3 items-center"><AiOutlinePhone></AiOutlinePhone> 01790407979</p>
                </div>
            </div>
            <div className="flex-1">
                <img src="/logo.jpg" alt="" />
            </div>

        </div>
    );
};

export default Contact;