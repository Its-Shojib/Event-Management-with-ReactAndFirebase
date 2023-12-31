import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400,
});
const WhyChooseUs = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 my-10 bg-gray-400 rounded-xl">
            <div className="flex justify-center items-center flex-1 ">
                <div className="space-y-3 px-4" data-aos="flip-up">
                    <p className="text-xl font-semibold">OVER <span className="text-rose-800">20 YEARS</span> HOSTING EVENTS</p>
                    <h2 className="text-4xl font-bold "><span className="text-rose-800">Why</span> choose us?</h2>
                    <p className="text-lg font-semibold">Social Event Planner have been established for over 20 years,<br /> hosting thousands of weddings, birthday celebrations,<br /> christenings, charity fundraisers, gala balls, <br /> Christmas parties and a variety of corporate events. </p>

                    <Link to='/about'>
                        <button className="bg-orange-600 px-4 py-2 rounded-md text-white mt-5">See Our Brochure</button>
                    </Link>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white flex-1 p-4">
                {/* Card-1 */}
                <div className="card bg-black" data-aos="flip-up">
                    <figure className="px-10 pt-10">
                        <img src="/event.png" alt="" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Your next event</h2>
                        <p>Got something to celebrate? Then it’s time you celebrated the benefits of our Banqueting Suites as the perfect venue for your next event.</p>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="card bg-black" data-aos="flip-up">
                    <figure className="px-10 pt-10">
                        <img src="/people.png" alt="" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Large capacity</h2>
                        <p>Hold between 500-600 people and offer state-of-the-art technology to support a seamless event.</p>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="card bg-black" data-aos="flip-up">
                    <figure className="px-10 pt-10">
                        <img src="/experience.png" alt="" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Experience the finest</h2>
                        <p>Cutting edge AV equipment and RGB LED mood lighting can be adapted to suit your theme, along with large LED screens and a dedicated dancefloor.</p>
                    </div>
                </div>
                {/* Card-4 */}
                <div className="card bg-black" data-aos="flip-up">
                    <figure className="px-10 pt-10">
                        <img src="/car.png" alt="" className="rounded-xl h-40 bg-white" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Easily accessible</h2>
                        <p>Located in Dhaka, just 20 minutes away from Shajalal International Airport, with excellent transport links to Central Dhaka and 200 designated car parking spaces on site.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyChooseUs;