import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;