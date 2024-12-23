import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonCart from "../components/SkeletonCart";

import AllServiceCart from "../components/AllServiceCart";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  const featuredServicesSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const [sleketonTime, setSkeletonTime] = useState(true);

  useEffect(() => {
    setSkeletonTime(true);
    axios.get("http://localhost:5000/all-services").then((res) => {
      setAllServices(res.data);
      setSkeletonTime(false);
    });
  }, []);



  return (
    <div className="w-10/12 mx-auto py-10">
      <h1 className="text-xl font-semibold">All Services</h1>

      {sleketonTime ? (
        <div className="grid grid-cols-4 gap-6  py-5">
          {featuredServicesSkeleton.map((skeleton, idx) => (
            <SkeletonCart key={idx}></SkeletonCart>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6  py-5">
          {allServices.map((service) => (
            <AllServiceCart service={service} key={service._id}></AllServiceCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
