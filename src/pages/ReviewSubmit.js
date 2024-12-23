import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ReviewSubmit = () => {
  const navigate = useNavigate();
  const FormData = useSelector((state) => state.user?.FormData);

  const handleSubmit = () => {
    console.log("Form submitted", FormData);
    navigate("/page/success");
  };

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Review & Submit</h1>
      {FormData ? (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <p><strong>First Name:</strong> {FormData.firstName}</p>
            <p><strong>Last Name:</strong> {FormData.lastName}</p>
            <p><strong>Phone:</strong> {FormData.phone}</p>
            <p><strong>Email:</strong> {FormData.email}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Preferences</h3>
            <p><strong>Email Notifications:</strong> {FormData.emailNotifications ? "Yes" : "No"}</p>
            <p><strong>SMS Notifications:</strong> {FormData.smsNotifications ? "Yes" : "No"}</p>
            <p><strong>Marketing Emails:</strong> {FormData.marketingEmails ? "Yes" : "No"}</p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-fit p-3 rounded-md bg-blue-800 hover:bg-green-500 hover:text-black mt-4"
          >
            Submit
          </button>
        </div>
      ) : (
        <p>No data available to review.</p>
      )}
    </div>
  );
};

export default ReviewSubmit;
