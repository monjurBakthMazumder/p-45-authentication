import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from 'sweetalert';
const Dashboard = () => {
    const {user,verifiedEmail} = useContext(AuthContext)
    const handleSendVerification = () => {
        verifiedEmail()
        .then(()=>{
            swal("Check email!", "Check email and verified account!", "success");
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            {
                !user.emailVerified
                ?
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Please verify your email</h1>
                    <button className="btn" onClick={handleSendVerification}>Send verification</button>
                </div>
                :
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Welcome to dashboard {user.displayName}</h1>
            }
        </div>
    );
};

export default Dashboard;