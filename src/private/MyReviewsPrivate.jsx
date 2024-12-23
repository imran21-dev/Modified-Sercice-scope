import { useContext } from "react";
import { ThemeContext } from "../provider/ContextApi";
import { ClimbingBoxLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const MyReviewsPrivate = ({children}) => {
    const {user, processing} = useContext(ThemeContext)
    const {pathname} = useLocation()

    if (processing) {
        return  <div className="w-full absolute top-0 h-screen flex justify-center items-center"><ClimbingBoxLoader color="#FA6500"/></div>
    }

    if (user) {
        return children
    }

    return <Navigate state={{desiredRoute : pathname}} to='/login'></Navigate>
};

MyReviewsPrivate.propTypes = {
    children: PropTypes.element
}
export default MyReviewsPrivate;