import { Navigate } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
  
const PrivateRoute = ({ isAuthenticated, children }: any) => {
    isAuthenticated = AuthenticationService.isAuthenticated;
    if (!isAuthenticated) {    
      return <Navigate to="/login" />
    }
    return children
};
  
export default PrivateRoute;
