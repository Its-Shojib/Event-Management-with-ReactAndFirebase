import { useLoaderData } from "react-router-dom";
import DataCard from "../Components/DataCard";
import Banner from './../Components/Banner';

const Home = () => {
    let items = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   items.map(item => <DataCard 
                   key={item.id}
                   item={item}
                   ></DataCard>) 
                }
            </div>
        </div>
    );
};

export default Home;