import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
const LoginSocial = () => {
    const { singInWithGoogle, singInWithGithub} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleMediaLogin = (media) =>{
        media()
        .then(result=>{
            console.log(result.user);
            swal ( "Congratulation" ,  "Login Successful!" ,  "success" )
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        })
    }
    return (
        <>
            <button className="btn" onClick={()=>handleMediaLogin(singInWithGoogle)}>Login with Google</button>
            <button className="btn" onClick={()=>handleMediaLogin(singInWithGithub)}>Login with Github</button>
            <div className="divider mb-0">OR</div>
        </>
    );
};

export default LoginSocial;