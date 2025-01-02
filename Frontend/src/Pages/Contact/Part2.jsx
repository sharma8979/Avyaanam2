import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be numeric").required("Phone number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="container  flex mx-auto p-6">
      
      <div className="bg-white px-32  w-[50%] rounded-lg ">
      <h1 className=" text-2xl mb-5">Send Us A Note</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg  text-gray-700">
              Name
            </label>
              <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg  text-gray-700">
              Email
            </label>
             <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg  text-gray-700">
              Phone Number
            </label>
             <input
              id="phone"
              name="phone"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg  text-gray-700">
              Address
            </label>
              <input
              id="address"
              name="address"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-sm">{formik.errors.address}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-cream  font-semibold rounded-md"
          >
            Send
          </button>
        </form>
      </div>

      <div className="w-[50%] px-10">
        <div className="w-[80%]">
            <h1 className="text-2xl ">Get In Touch!</h1>
            <h3 className="mt-5 text-gray-700">I love to hear from y'all! Drop me a line and tell me about your garden!
                 Include some pictures, and we might just feature your garden in our community blog! 
            </h3>
            <h3 className="mt-5 text-gray-700">
            Thank you for being a part of this space we are growing together. 
            </h3>
            <h3 className="mt-10 text-2xl">
            Jeri Barton
            </h3>
            <h3 className="mt-5 text-gray-700">
            3111 Fake Street, Anytown, AZ 12121
            </h3>
            <h3 className="mt-5 text-gray-700">
            (111) 555-1212
            </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
