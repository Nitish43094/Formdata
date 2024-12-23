import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { add } from "../store/formSlice";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSubmitdata = (data) => {
    // console.log("Form Data: ", data);
    toast.success("Submited")
    const newUser = { id: 1, name: "John Doe" }; // Example user
    dispatch(add(newUser)); // Dispatch the action to add the user

    navigate("/page/address-details");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleSubmitdata)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="firstName" className="text-xl font-semibold">First Name<sup className="text-red-600">*</sup></label>
          <input type="text" id="firstName" className="rounded-md p-2 bg-slate-600 w-full" placeholder="Enter First Name" {...register("firstName", { required: "First Name is required" })} />
          {errors.firstName && <span className="text-red-600">{errors.firstName.message}</span>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="lastName" className="text-xl font-semibold">Last Name<sup className="text-red-600">*</sup></label>
          <input type="text" id="lastName" className="rounded-md p-2 bg-slate-600 w-full" placeholder="Enter Last Name" {...register("lastName", { required: "Last Name is required" })} />
          {errors.lastName && <span className="text-red-600">{errors.lastName.message}</span>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone" className="text-xl font-semibold">Phone Number<sup className="text-red-600">*</sup></label>
          <input type="text" id="phone" className="rounded-md p-2 bg-slate-600 w-full" placeholder="Enter Phone Number" {...register("phone", { required: "Phone Number is required" })} />
          {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-xl font-semibold">Email<sup className="text-red-600">*</sup></label>
          <input type="email" id="email" className="rounded-md p-2 bg-slate-600 w-full" placeholder="Enter Email" {...register("email", { required: "Email is required" })} />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        </div>

        <button type="submit" className="w-fit p-3 rounded-md bg-blue-800 hover:bg-green-500 hover:text-black mt-4">Submit</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
