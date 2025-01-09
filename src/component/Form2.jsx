import React, { useState } from "react";

const Form2 = () => {
  const defaultValues = {
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      errorMsg: "First Name can't be empty",
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      errorMsg: "Last Name can't be empty",
    },
    email: {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      errorMsg: "Email can't be empty",
    },
    password: {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      errorMsg: "Password can't be empty",
    },
    confirmPassword: {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Re-enter your password",
      errorMsg: "Confirm Password can't be empty",
    },
  };

  const [formData, setFormData] = useState(
    Object.fromEntries(
      Object.keys(defaultValues).map((key) => [
        key,
        { ...defaultValues[key], value: "", isError: false },
      ])
    )
  );
  const [isPassMatch, setIsPassMatch] = useState(true);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [id]: { ...prev[id], value },
      };

      // Ensure password match is checked after state update
      if (id === "password" || id === "confirmPassword") {
        const password = updatedFormData.password.value;
        const confirmPassword = updatedFormData.confirmPassword.value;
        setIsPassMatch(password === confirmPassword);
      }

      return updatedFormData;
    });

    // Validate the individual field
    validateField(id, value);
  };

  const validateField = (fieldId, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: { ...prev[fieldId], isError: !value },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every(
      (key) => formData[key].value && !formData[key].isError
    );

    if (!isValid || !isPassMatch) {
      alert("Please correct the errors in the form.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {Object.values(formData).map(
            ({ id, label, type, placeholder, value, isError, errorMsg }) => (
              <div key={id} className="form-item">
                <label
                  htmlFor={id}
                  className="block text-gray-700 font-medium mb-1"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    isError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {isError && (
                  <span className="text-red-500 text-sm">{errorMsg}</span>
                )}
                {id === "confirmPassword" && !isPassMatch && (
                  <span className="text-red-500 text-sm">
                    Passwords do not match
                  </span>
                )}
              </div>
            )
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
