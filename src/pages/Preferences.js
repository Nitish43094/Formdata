import React, { useState } from "react";
const Preferences = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPreferences({
      ...preferences,
      [name]: checked,
    });
  };

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Preferences</h1>

      <form className="flex flex-col gap-4">
        {/* Email Notifications */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={preferences.emailNotifications}
            onChange={handleChange}
            className="rounded"
          />
          <label htmlFor="emailNotifications" className="text-lg">
            Receive Email Notifications
          </label>
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={preferences.smsNotifications}
            onChange={handleChange}
            className="rounded"
          />
          <label htmlFor="smsNotifications" className="text-lg">
            Receive SMS Notifications
          </label>
        </div>

        {/* Marketing Emails */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="marketingEmails"
            name="marketingEmails"
            checked={preferences.marketingEmails}
            onChange={handleChange}
            className="rounded"
          />
          <label htmlFor="marketingEmails" className="text-lg">
            Receive Marketing Emails
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-fit p-3 rounded-md bg-blue-800 hover:bg-green-500 hover:text-black mt-4"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default Preferences;
