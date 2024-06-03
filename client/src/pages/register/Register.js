import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [input, setinput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    location: "",
  });
  const [status, setstatus] = useState("Active");
  const [image, setimage] = useState("");
  const [preview, setpreview] = useState(false);

  //handlechange=
  const habdlechange = (e) => {
    const { value, name } = e.target;
    setinput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  //preview set
  useEffect(() => {
    if (image) {
      setpreview(URL.createObjectURL(image));
    }
  }, [image]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, gender, location } = input;
    if (fname === "") {
      toast.error(" fname is required");
    } else if (lname === "") {
      toast.error("lname is required");
    } else if (email === "") {
      toast.error("please email is required");
    } else if (!email.includes("@")) {
      toast.error("please valid email is required");
    } else if (phone === "") {
      toast.error("please number is required");
    } else if (phone.length > 11) {
      toast.error("please required valid mobile number");
    } else if (status === "") {
      toast.error("please required status");
    } else if (gender === "") {
      toast.error("please gender is required");
    } else if (location === "") {
      toast.error("please location is required");
    } else {
      //console.log("registration successfull");
      const fetchdata = await fetch("http://localhost:6000/api/post1", {
        methods: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          gender,
          image,
          status,
          location,
          phone,
        }),
      });
      const response = await fetchdata.json();
      console.log(response);
    }
  };

  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  return (
    <div className="register bg-gradient-to-b p-7 from-slate-900 to-slate-700 text-white h-auto w-full">
      <h1 className="m-auto text-center text-2xl font-bold">
        register your pages
      </h1>
      <div className="mt-10">
        <img
          className=" h-[70px] w-[70px] rounded-full m-auto text-center"
          src={
            preview
              ? preview
              : "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.2.457771161.1694093368&semt=sph"
          }
          alt=""
        />
        <form className="py-10 " action="">
          {/**firasname  */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-3">
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                Firstname
              </label>
              <input
                className="md:w-[300px] h-11 w-auto p-1 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md text-gray-800"
                type="text"
                placeholder="enter your first name"
                name="fname"
                value={input.fname}
                onChange={habdlechange}
              />
            </div>

            {/**lastname  */}
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                Lirstname
              </label>
              <input
                className="md:w-[300px] h-11 w-auto p-1 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md text-gray-800"
                type="text"
                placeholder="enter your last name"
                name="lname"
                value={input.lname}
                onChange={habdlechange}
              />
            </div>
          </div>

          {/**email  */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-3">
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                email
              </label>
              <input
                className="md:w-[300px] h-11 w-auto p-1 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md text-gray-800"
                type="email"
                placeholder="enter your email"
                name="email"
                value={input.email}
                onChange={habdlechange}
              />
            </div>

            {/**phone  */}
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                phone
              </label>
              <input
                className="md:w-[300px] h-11 w-auto p-1 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md text-gray-800"
                type="phone"
                placeholder="enter yourphone name"
                name="phone"
                value={input.phone}
                onChange={habdlechange}
              />
            </div>
          </div>

          {/**gender */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-3">
            <div className="flex flex-col md:w-[300px] w-[auto] ">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                gender
              </label>
              <div className="text-xl font-semibold flex space-x-3">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value={"Male"}
                    onChange={habdlechange}
                  />
                   <label for="html">Male</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="gender"
                    value={"Fale"}
                    onChange={habdlechange}
                  />
                   <label for="css">Female</label>
                </div>
              </div>
            </div>

            {/**status  */}
            <div className="flex flex-col md:w-[300px]  ">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                Select
              </label>

              <Select
                onChange={(e) => setstatus(e.value)}
                className="  text-gray-800"
                options={options}
              />
            </div>
          </div>

          {/**flie */}

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-3">
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                Profile
              </label>
              <input
                type="file"
                name="profile"
                onChange={(e) => setimage(e.target.files[0])}
              />
            </div>

            {/**phone  */}
            <div className="flex flex-col">
              <label className="text-xl font-bold opacity-80" htmlFor="">
                location
              </label>
              <input
                className="md:w-[300px] h-11 w-auto p-1 mt-2 hover:outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md text-gray-800"
                type="phone"
                placeholder="enter yourlocation"
                name="location"
                value={input.location}
                onChange={habdlechange}
              />
            </div>
          </div>
          <button
            onClick={handlesubmit}
            className="mt-20 p-2 rounded-md  m-auto flex text-center text-2xl font-bold bg-red-500"
          >
            submit
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}
