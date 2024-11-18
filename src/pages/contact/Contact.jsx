import React from "react";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="bg-[#deb887] flex items-center justify-center min-h-screen ">
      <div className="  rounded-lg p-8 max-w-lg w-full text-center contactContainer">
        <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-6 text-sm">
          For business inquiries and collaborations, please contact me below and
          leave a link to your website or portfolio. I look forward to hearing from
          you!
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="text"
            placeholder="Name"
            className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>
          <button
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
          onClick={()=>{alert("Submitted")}}>
            Submit
          </button>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="http://www.linkedin.com/in/siva-parasad-morla-157556230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/morla_s_i_v_a_p_r_a_s_a_d_2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://m.facebook.com/profile.php?id=100019839381002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/sivaprasadmorla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
