import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvier';

const Profile = () => {
    let { user } = useContext(AuthContext)
    return (
        <div className="card">
            <figure className="px-10 pt-10">
                <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold">{user.displayName}</h2>
            </div>
        </div>

    );
};

export default Profile;