import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast'
import { add } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
const AddressDetails = () => {
  const data = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log("FormData is", data);
  const [address, setAddress] = useState({
    village: "",
    pincode: "",
    city: "",
    state: ""
  })

  const changehandler = (e) => {
    setAddress((prev) => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }
  const submithandler = () =>{
    console.log(address);
    dispatch(add(address))
    toast.success("submitted")
  }
  return (
    <div>
      <form
        onSubmit={submithandler}
        className="flex flex-col w-full gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="village">Village<sup className="text-red-600">*</sup></label>
          <input
            name="village"
            id="village"
            value={address.village}
            placeholder="Village"
            className="bg-slate-600 rounded-md p-2"
            onChange={changehandler}
            required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="pincode">pincode<sup className="text-red-600">*</sup></label>
          <input
            name="pincode"
            id="pincode"
            value={address.pincode}
            placeholder="pincode"
            className="bg-slate-600 rounded-md p-2"
            onChange={changehandler}
            required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="city">city<sup className="text-red-600">*</sup></label>
          <input
            name="city"
            id="city"
            value={address.city}
            placeholder="city"
            className="bg-slate-600 rounded-md p-2"
            onChange={changehandler}
            required />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="state">state<sup className="text-red-600">*</sup></label>
          <input
            name="state"
            id="state"
            value={address.state}
            placeholder="state"
            className="bg-slate-600 rounded-md p-2"
            onChange={changehandler}
            required />
        </div>
        <button
          type="submit"
          className="w-fit bg-blue-800 p-2 rounded-md font-semibold">
          Submit
        </button>
      </form>

    </div>
  );
};

export default AddressDetails;
