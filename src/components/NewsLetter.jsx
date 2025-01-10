import { LuLoaderCircle, LuMail } from "react-icons/lu";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";


const NewsLetter = () => {
  const axiosSecure = useAxiosSecure();
  const [load, setLoad] = useState(false)

  const handleSubscription = (e) => {
    e.preventDefault();
    setLoad(true)
    const email = e.target.email.value;
    if (email.trim("") === "") {
      return;
    }
    const uEmail = { email };
    axiosSecure.post("/subscription", uEmail).then((res) => {
      if (res.data.insertedId) {
        setLoad(false)
        Swal.fire({
          icon: "success",
          title: "Joined!",
          text: "Subscription Successful!",
          confirmButtonText: "Okay",
          scrollbarPadding: false,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "text-xl  md:text-3xl font-bold ",
            text: "text-3xl ",
            popup: "text-black rounded-3xl outline outline-[#16A34A]",
            confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
          },
        });
      }
      else{
        setLoad(false)
        Swal.fire({
            icon: "error",
            title: "Failed!",
            text: `${res.data.message}`,
            confirmButtonText: "Okay",
            scrollbarPadding: false,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: "text-xl  md:text-3xl font-bold ",
              text: "text-3xl ",
              popup: "text-black rounded-3xl outline outline-[#16A34A]",
              confirmButton: "bg-[#16A34A] rounded-full py-[10px] px-[30px]",
            },
          });
      }
    });

    e.target.reset();
  };
  return (
    <div className="md:w-10/12 mx-3 md:mx-auto py-10 mb-20">
      <div className="bg-secondaryTextColor/5 w-max mx-auto  p-4 rounded-badge">
        <LuMail className="text-6xl bg-white text-pColor p-5 rounded-3xl" />
      </div>
      <h1 className="text-xl md:text-3xl pt-5 bg-gradient-to-br from-pColor to-purple-600 mx-auto w-max bg-clip-text text-transparent font-semibold text-center pb-5">
        Join Service Scope Newsletter!
      </h1>
      <form onSubmit={handleSubscription}>
        <div className="border md:w-2/4 mx-3 md:mx-auto rounded-full flex items-center justify-between">
          <input
            type="email"
            name="email"
            placeholder="Enter your original account email"
            className="bg-transparent indent-3 flex-1 md:py-4 px-2 md:px-5 md:text-lg text-sm focus:outline-none"
          />
          <button className="btn text-xs md:text-sm rounded-full md:px-7 md:mr-2 bg-gradient-to-br from-pColor to-purple-600 text-white">
          {load &&  <LuLoaderCircle className="animate-spin"></LuLoaderCircle>} Join Now!
          </button>
        </div>
      </form>
      <p className="md:w-2/4 text-center mx-auto pt-3 text-sm px-5 text-secondaryTextColor/70">
        Subscribe to our newsletter and never miss out on trusted reviews,
        expert recommendations, and top-rated services delivered right to your
        inbox.
      </p>
    </div>
  );
};

export default NewsLetter;
