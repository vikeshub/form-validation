import React, { useState } from "react";

const Form = () => {
  const defaultValues = {
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name...",
      value: "",
      isError: false,
      errorMsg: "First Name can't be empty",
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name...",
      value: "",
      isError: false,
      errorMsg: "Last Name can't be empty",
    },
    email: {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Email...",
      value: "",
      isError: false,
      errorMsg: "Email Name can't be empty",
    },
    password: {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password...",
      value: "",
      isError: false,
      errorMsg: "Password  can't be empty",
    },
    confirmPassword: {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password...",
      value: "",
      isError: false,
      errorMsg: "Confimr Password  can't be empty",
    },
  };
  const [formData, setFormData] = useState(defaultValues);
  const [isPassMatch, setIsPassMatch] = useState(true);

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    // console.log(key, value);
    
    const copyFormData = { ...formData };
    copyFormData[key].value = value;
    setFormData(copyFormData);
    isValidForm();
  };

  const passwordMatch = () => {
    const copyFormData = { ...formData };
    const pass = copyFormData["password"].value;
    const cPass = copyFormData["confirmPassword"].value;
    if (pass !== cPass) {
      setIsPassMatch(false);
    } else {
      setIsPassMatch(true);
    }
  };
  const isValidForm = () => {
    const copyFormData = { ...formData };
    Object.keys(copyFormData).forEach((key) => {
      const obj = copyFormData[key];
      obj.isError = !obj.value ? true : false;
      passwordMatch();
    });
    setFormData(copyFormData);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    isValidForm();
    console.log();
  };
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => {
            const { id, label, type, placeholder, value, isError, errorMsg } =
              formData[key];
            return (
              <div key={id} className="form-item">
                <label className="block text-gray-700 font-medium mb-1">
                  {label}
                </label>
                <input
                  onChange={handleInput}
                  id={id}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  className={`w-full px-3 py-2 border rounded-md ${
                    isError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {isError && (
                  <span className="text-red-500 text-sm">{errorMsg}</span>
                )}
                {key === "confirmPassword" && !isPassMatch && (
                  <span className="text-red-500 text-sm">
                    Password does not match
                  </span>
                )}
              </div>
            );
          })}
          <div className="form-item">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
