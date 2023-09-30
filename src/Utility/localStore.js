const getStoredCountries = () => {
    const storeCountries = localStorage.getItem("countries")
    if(storeCountries){
        return JSON.parse(storeCountries)
    }
    return [];
}

let have;

const saveCountries = id => {
    const storeCountries = getStoredCountries();

    have = storeCountries.find(ccn3=> ccn3 === id)
    if(!have){
        storeCountries.push(id)
        localStorage.setItem("countries", JSON.stringify(storeCountries))
    }
}

export {getStoredCountries, saveCountries, have}