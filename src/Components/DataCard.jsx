import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DataCard = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    let {id,title,description,price,photo,day} = item;
    return (
        <div>
            <div className="card bg-indigo-200">
                <figure className="px-5 pt-5">
                    <img src={photo} alt="Shoes" className="rounded-xl h-72 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link className='bg-cyan-600 px-3 py-2 rounded-md' to={`/services/${id}`}>Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
DataCard.propTypes = {
    item: PropTypes.object,
}
export default DataCard;