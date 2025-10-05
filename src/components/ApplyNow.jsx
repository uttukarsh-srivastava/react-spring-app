// import React from 'react'

// const ApplyNow = () => {
//   return (
//       <form className='apply'>
//           <h3 style={{ marginBottom: '20px' }}>Apply Now</h3>
//         <div className="input-box">
//             <label>Firstname</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <label>Lastname</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <select style={{ width: '100%', border: 0, margin: '0 0 20px 0', fontSize: '15px', outline: 'none', borderBottom: '2px solid #cfcfcf', paddingBottom: '40px' }}>
//                 <option value="select">Select your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="others">Others</option>
//             </select>
//         </div>
//         <div className="input-box">
//             <label>Email</label>
//             <input type="email"/>
//         </div>
//         <div className="input-box">
//             <label>Phone Number</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <label>Nationality</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <label>State</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <label>Home Address</label>
//             <input type="text"/>
//         </div>
//         <div className="input-box">
//             <label>How did you know about us</label>
//             <textarea></textarea>
//         </div>
          
//           <button style={{ padding: '10px 17px', background: 'rgba(11, 11, 130, 1)', border: 0, color: '#fff', marginTop: '20px' }}>Apply Now</button>
//     </form>
//   )
// }

// export default ApplyNow

// src/ApplyNow.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ApplyNow() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Create FormData object for file upload
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      await axios.post("http://localhost:8080/api/admission", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("❌ Failed to submit application.");
    }
  };

  return (
    <form className="apply" onSubmit={handleSubmit(onSubmit)}>
      <h3 style={{ marginBottom: "20px" }}>Apply Now</h3>

      <div className="input-box">
        <label>Firstname</label>
        <input
          type="text"
          {...register("firstName", { required: "Firstname is required" })}
        />
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
      </div>

      <div className="input-box">
        <label>Lastname</label>
        <input
          type="text"
          {...register("lastName", { required: "Lastname is required" })}
        />
        <p style={{ color: "red" }}>{errors.lastName?.message}</p>
      </div>

      <div className="input-box">
        <label>Gender</label>
        <select {...register("gender", { required: "Gender is required" })}>
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <p style={{ color: "red" }}>{errors.gender?.message}</p>
      </div>

      <div className="input-box">
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div className="input-box">
        <label>Phone Number</label>
        <input
          type="text"
          {...register("phone", { required: "Phone number is required" })}
        />
        <p style={{ color: "red" }}>{errors.phone?.message}</p>
      </div>

      <div className="input-box">
        <label>Nationality</label>
        <input
          type="text"
          {...register("nationality", { required: "Nationality is required" })}
        />
        <p style={{ color: "red" }}>{errors.nationality?.message}</p>
      </div>

      <div className="input-box">
        <label>State</label>
        <input
          type="text"
          {...register("state", { required: "State is required" })}
        />
        <p style={{ color: "red" }}>{errors.state?.message}</p>
      </div>

      <div className="input-box">
        <label>Home Address</label>
        <input
          type="text"
          {...register("address", { required: "Address is required" })}
        />
        <p style={{ color: "red" }}>{errors.address?.message}</p>
      </div>

      <div className="input-box">
        <label>How did you know about us?</label>
        <textarea {...register("aboutUs")}></textarea>
      </div>

      <div className="input-box">
        <label>Upload your Document</label>
        <input type="file" {...register("document")} />
      </div>

      <button
        style={{
          padding: "10px 17px",
          background: "rgba(11, 11, 130, 1)",
          border: 0,
          color: "#fff",
          marginTop: "20px",
        }}
        type="submit"
      >
        Apply Now
      </button>
    </form>
  );
}
