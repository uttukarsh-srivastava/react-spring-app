// import React from 'react';
// import { useForm } from 'react-hook-form';

// const ContactForm = () => {
//   const {
//     register, 
//     formState: {errors}, 
//     handleSubmit
//   } = useForm({
//     mode: "all",
//   });

//   return (
//     <form id='contact-form' onSubmit={handleSubmit(data => console.log(data))}>
//         <p className='msg'>Send us a message</p>
//         {/* <div className="error"></div> */}
//         <div className="input-box">
//           <input 
//             placeholder='Name'
//             {...register("name", {
//               required: "Name is required",
//               minLength: {
//                 value: 3,
//                 message: "Name must be at least three characters long"
//               },
//               maxLength: {
//                 value: 30,
//                 message: "Name must be at most thirty characters long"
//               },
//             })}
//             />
//             <p style={{color: "red",}}>{errors.name?.message}</p>
//         </div>
//         <div className="input-box">
//           <input 
//             placeholder='Email'
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                 message: "Email must be valid"
//               }
//             })}
//             />
//             <p style={{color: "red",}}>{errors.email?.message}</p>
//         </div>
//         <div className="input-box">
//           <input 
//             placeholder='Subject'
//             {...register("subject", {
//               required: "Subject is required",
//               minLength: {
//                 value: 3,
//                 message: "Subject must be at least three characters long"
//               },
//               maxLength: {
//                 value: 30,
//                 message: "Subject must be at most thirty characters long"
//               },
//             })}
//             />
//             <p style={{color: "red",}}>{errors.subject?.message}</p>
//         </div>
//         <div className="input-box">
//           <textarea 
//             placeholder='Message'
//             rows={30}
//             cols={30}
//             {...register("message", {
//               required: "Message is required",
//               minLength: {
//                 value: 3,
//                 message: "Message must be at least three characters long"
//               },
//               maxLength: {
//                 value: 30,
//                 message: "Message must be at most thirty characters long"
//               },
//             })}
//           ></textarea>
//             <p style={{color: "red",}}>{errors.message?.message}</p>
//         </div>
//         <button 
//           id='btn'
//           type='submit'
//         >Send Message</button>
//     </form>
//   )
// }

// export default ContactForm

// src/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  // Submit handler with axios
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8080/api/contact", data); // ✅ backend endpoint
      alert("✅ Message sent successfully!");
      reset(); // clear form after success
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <p className="msg">Send us a message</p>

      <div className="input-box">
        <input
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "At least 3 characters" },
            maxLength: { value: 30, message: "At most 30 characters" },
          })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>

      <div className="input-box">
        <input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div className="input-box">
        <input
          placeholder="Subject"
          {...register("subject", {
            required: "Subject is required",
            minLength: { value: 3, message: "At least 3 characters" },
            maxLength: { value: 50, message: "At most 50 characters" },
          })}
        />
        <p style={{ color: "red" }}>{errors.subject?.message}</p>
      </div>

      <div className="input-box">
        <textarea
          placeholder="Message"
          rows={4}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 5, message: "At least 5 characters" },
            maxLength: { value: 500, message: "At most 500 characters" },
          })}
        ></textarea>
        <p style={{ color: "red" }}>{errors.message?.message}</p>
      </div>

      <button id="btn" type="submit">
        Send Message
      </button>
    </form>
  );
}
