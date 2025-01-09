import React, { useState } from "react";

const Form5 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({});
  const validationErrors = {};

  const checkValidation = () => {
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
    console.log(formData);
  };

  const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter Your Name..." },
    { name: "email", label: "Email", type: "email", placeholder: "Enter Your email..." },
    { name: "password", label: "Password", type: "password", placeholder: "Enter Your password..." },
    { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Confirm Your password..." },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(({ name, label, type, placeholder }) => (
          <div key={name}>
            <label className="block text-gray-700 font-semibold mb-1">{label}</label>
            <input
              onChange={handleChange}
              type={type}
              name={name}
              placeholder={placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form5;
