import HomeCountriesCard from "../../Component/HomeCountriesCard/HomeCountriesCard";
import useGetCountries from "../../Hock/useGetCountries";

const Home = () => {
    const [countries] = useGetCountries()

    return (
        <>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold underline text-center mb-5">Countries: {countries?.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                {
                    countries?.map((country,i)=> 
                        <HomeCountriesCard
                            key={i}
                            country={country}
                        />
                    )
                }
            </div>
        </>
    );
};

export default Home;