import { Navigate } from "react-router";

const LogOut=()=>{
    localStorage.removeItem('access_token');
    return <Navigate to="/"/> 
}

export default LogOut;