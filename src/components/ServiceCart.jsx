import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import fakeThumb from '../assets/fakeThumb.jpg'

const ServiceCart = ({service}) => {
    const {price,serviceImage,serviceTitle,description,_id} = service
    const handleImage = (e) => {
      e.target.src = fakeThumb
    }
    return (
        <div className="card  duration-200 rounded-3xl  border border-secondaryTextColor/5">
        <figure className="p-2 md:p-5">
          <img
          className="w-full object-cover h-44 md:h-52 rounded-2xl"
           onError={handleImage}
            src={serviceImage}
            alt="" />
        </figure>
        <div className="card-body px-2 md:px-5 pt-0 pb-2 md:pb-5">
          <h2 className="md:text-xl font-bold truncate">{serviceTitle}</h2>
          <p className="line-clamp-2 text-sm md:text-base md:h-12 text-secondaryTextColor/50">{description}</p>
         
         <div className="flex items-center justify-between pt-2">
         <Link to={`/service-details/${_id}`}>
         <Button variant="contained" className="mt-1 myBtn">See Details <GoArrowRight /></Button>
         </Link>
         <h2 className="font-medium md:text-base text-pColor text-sm">${price}</h2>
         </div>
        </div>
      </div>
    );
};

ServiceCart.propTypes = {
    service: PropTypes.object
}
export default ServiceCart;
