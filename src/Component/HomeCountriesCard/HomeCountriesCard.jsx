
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveCountries, have } from '../../Utility/localStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeCountriesCard = ({country}) => {
    const {flags, name, continents, ccn3} = country || {}

    const handleVisitedCountry = () => {
        saveCountries(ccn3)
        if(have){
            toast.error(`Already added ${name?.common}`, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
            toast.success(`successfully added ${name?.common}`, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl border flex flex-col">
            <figure className='flex-grow'>
                <img src={flags?.png} alt={`flag of ${name?.common}`} className="rounded-xl border" />
            </figure>
            <div className="card-body items-center text-center flex flex-col p-3">
                <h2 className="card-title flex-grow">{name?.common}</h2>
                <span>continent: {continents}</span>
                <Link to={`/details/${ccn3}`} state={name?.common} className='font-bold underline text-xs text-gray-500'>Details</Link>
                <div className="card-actions">
                <button 
                    onClick={handleVisitedCountry}
                    className="btn btn-primary btn-sm"
                >Visited</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

HomeCountriesCard.propTypes = {
    country : PropTypes.object,
};

export default HomeCountriesCard;