import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DetailsCard = ({country}) => {
    const {flags, name, continents, area, capital, independent, landlocked,  population, region, startOfWeek, status, subregion, timezones} = country || {}
    console.log(country);

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="card bg-base-100 border flex flex-col sm:w-[400px] mx-auto">
            <figure className='flex-grow'>
                <img src={flags?.png} alt={`flag of ${name?.common}`} className="rounded-xl border w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name?.common}</h2>
                <span><b>Continent: </b> {continents}</span>
                <span><b>Area </b> {area}</span>
                <span><b>capital: </b> {capital}</span>
                <span><b>independent: </b> {independent}</span>
                <span><b>landlocked: </b> {landlocked}</span>
                <span><b>population: </b> {population}</span>
                <span><b>region: </b> {region}</span>
                <span><b>startOfWeek: </b> {startOfWeek}</span>
                <span><b>status: </b> {status}</span>
                <span><b>subregion: </b> {subregion}</span>
                <span><b>timezones: </b> {timezones}</span>
                <div className="card-actions justify-center">
                <button 
                    onClick={handleGoBack}
                    className="btn btn-primary"
                >Go Back</button>
                </div>
            </div>
        </div>
    );
};

DetailsCard.propTypes = {
    country: PropTypes.object,
};

export default DetailsCard;