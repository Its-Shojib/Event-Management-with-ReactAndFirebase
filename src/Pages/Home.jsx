import { useLoaderData } from "react-router-dom";
import DataCard from "../Components/DataCard";
import Banner from './../Components/Banner';
import WhyChooseUs from './../Components/WhyChooseUs';

const Home = () => {
    let items = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-bold text-center mt-16 mb-5">Explore Our Services</h2>
            <div className="bg-gradient-to-r from-teal-300 to-purple-400 rounded-lg">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:gap-10 md:px-20">
                    {
                        items.map(item => <DataCard
                            key={item.id}
                            item={item}
                        ></DataCard>)
                    }
                </div>
            </div>

            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;