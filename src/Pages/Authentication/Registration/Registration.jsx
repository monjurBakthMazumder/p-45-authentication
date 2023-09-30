import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import LoginSocial from "../LoginSocial/LoginSocial";
import swal from 'sweetalert';

const Registration = () => {
    const navigate = useNavigate()

    const {createUser} = useContext(AuthContext)
    const handleRegistration = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
        if(password.length < 6){
            swal ( "Oops" ,  "Password must be 6 character or longer!" ,  "error" )
            return;
        }
        // create user
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
            navigate('/')
            updateProfile(auth.currentUser, {
                displayName: name,
            })
            .then(() => {
            })
            .catch((error) => {
                console.error(error);
            });
            sendEmailVerification(result.user)
            .then(()=>{
                swal("Check email!", "Check email and verified account!", "success");
            })
        })
        .catch(error=> {
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                <div className="card-body">
                    <LoginSocial/>
                    <form onSubmit={handleRegistration}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <p className="my-5 text-xs text-center font-bold">Already have account? Please <Link to={'/login'} className="text-blue-600 underline">Login</Link></p>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;