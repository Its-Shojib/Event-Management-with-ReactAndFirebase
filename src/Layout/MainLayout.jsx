
import { Outlet } from 'react-router-dom';
import Header from './../Components/Header';
const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Header></Header>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;