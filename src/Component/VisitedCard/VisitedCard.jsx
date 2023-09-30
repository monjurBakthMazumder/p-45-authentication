import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VisitedCard = ({country}) => {
    const {flags, name, continents, ccn3} = country || {}
    return (
        <div className="card bg-base-100 shadow-xl border flex flex-col">
            <figure className='flex-grow'>
                <img src={flags?.png} alt={`flag of ${name?.common}`} className="rounded-xl border" />
            </figure>
            <div className="card-body items-center text-center flex flex-col p-3">
                <h2 className="card-title flex-grow">{name?.common}</h2>
                <span>continent: {continents}</span>
                <Link to={`/details/${ccn3}`} state={name?.common} className='font-bold underline text-xs text-gray-500'>Details</Link>
            </div>
        </div>
    );
};

VisitedCard.propTypes = {
    country: PropTypes.object,
};

export default VisitedCard;