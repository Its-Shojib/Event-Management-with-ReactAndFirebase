import { useLoaderData } from "react-router-dom";
import DataCard from "../Components/DataCard";
import Banner from './../Components/Banner';

const Home = () => {
    let items = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-bold text-center mt-16 mb-5">Explore Our Services</h2>
            <div className="bg-gradient-to-r from-teal-300 to-purple-400 rounded-lg">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        items.map(item => <DataCard
                            key={item.id}
                            item={item}
                        ></DataCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;