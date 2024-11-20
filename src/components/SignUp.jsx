import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// Validation Schema
const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const SignUp = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = (values, { setSubmitting, setErrors }) => {
    // Send the form data to the server
    fetch("https://petapp-backend-abg7.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), // Send form data as JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup failed. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Signup successful:", data);

        // Store only the email in localStorage
        localStorage.setItem("email", values.email);

        // Redirect to the login page upon success
        navigate("/login"); // Redirect to the login page
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        setErrors({ password: error.message || "Signup failed. Please try again." });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="flex h-screen bg-green-200">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="bg-white p-8 rounded-lg shadow-lg w-3/4">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">PetPal</h1>
                <p className="text-gray-600">Sign Up</p>
              </div>

              {/* Username Field */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.username && touched.username ? (
                  <div className="text-red-500 text-sm">{errors.username}</div>
                ) : null}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Field
                  name="email"
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                ) : null}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>

              <div className="my-4 text-center text-gray-500">Or continue with</div>
              <div className="flex justify-center space-x-4 mb-4">
                <button className="bg-gray-100 p-2 rounded-full">
                  <img src="/path-to-google-logo.svg" alt="Google" />
                </button>
                <button className="bg-gray-100 p-2 rounded-full">
                  <img src="/path-to-facebook-logo.svg" alt="Facebook" />
                </button>
                <button className="bg-gray-100 p-2 rounded-full">
                  <img src="/path-to-apple-logo.svg" alt="Apple" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-blue-300 flex items-center justify-center">
        <img
          src="/path-to-cat-image.jpg"
          alt="Cat"
          className="w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
