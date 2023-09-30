import { useContext, useEffect, useState } from "react";
import useGetCountries from "../../Hock/useGetCountries";
import { useParams } from "react-router-dom";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from 'sweetalert';
const Details = () => {

    const {user, verifiedEmail} = useContext(AuthContext)
    const [countries, setCountries] = useState()

    const [country] = useGetCountries()
    
    const { id } = useParams()

    useEffect(()=>{

        const findCountries = country?.find(cont=> cont?.ccn3 === id)

        setCountries(findCountries)
    },[id, country])
    const handleSendVerification = () => {
        verifiedEmail()
        .then(()=>{
            swal("Check email!", "Check email and verified account!", "success");
        })
    }
    return (
        <>
        {
            !user.emailVerified
            ?
            <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Please verify your email</h1>
                <button className="btn" onClick={handleSendVerification}>Send verification</button>
            </div>
            :
            <div>
                <DetailsCard country={countries}/>
            </div>
        }
        </>
    );
};

export default Details;