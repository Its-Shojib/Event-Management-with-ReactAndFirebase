
import { Outlet } from 'react-router-dom';
import Header from './../Components/Header';
import Footer from '../Components/Footer';
const MainLayout = () => {
    return (
        <div className='relative'>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Header></Header>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Outlet></Outlet>
            </div>
            <div className='max-w-screen-2xl mx-auto px-4'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;