import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const steps = ["Personal Info", "Address Details", "Preferences", "Review & Submit"];
const urls = ["/page/personal-Info","/page/address-details","/page/preferences","/page/Review&Submit"]
const Stepper = () => {
  const namvigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <div className="lg:flex md:flex justify-between mb-4">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentStep(index)
              namvigate(urls[index])
            }}
            className={`px-4 py-2 ${index === currentStep ? "bg-blue-500" : "bg-gray-300"}`}
          >
            {step}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded ">
        {currentStep === 0 && <p>Step 1: Personal Info</p>}
        {currentStep === 1 && <p>Step 2: Address Details</p>}
        {currentStep === 2 && <p>Step 3: Preferences</p>}
        {currentStep === 3 && <p>Step 4: Review & Submit</p>}
      </div>
    </div>
  );
};

export default Stepper;
