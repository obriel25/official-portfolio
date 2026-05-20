import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <MdEmail size={28} />,
    value: "obrieljefferson@gmail.com",
    link: "mailto:obrieljefferson@gmail.com"
  },
  {
    label: "GitHub",
    icon: <FaGithub size={28} />,
    value: "github.com/obriel25",
    link: "https://github.com/obriel25"
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    value: "linkedin.com/in/jefferson-obriel",
    link: "https://www.linkedin.com/in/jefferson-obriel-273797328/"
  }
];

const Contact = () => {

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xkoegaww", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center mb-4">
        Get In <span className="text-blue-400">Touch</span>
      </h2>
      <p className="mb-8 text-gray-400 text-center max-w-md">
        I am currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contacts.map((contact, index) => (
            <a  key={index}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 bg-gray-800 hover:bg-blue-500 text-white px-10 py-8 rounded-2xl transition duration-300 hover:scale-105 text-center"
          >
            <span className="text-blue-400">{contact.icon}</span>
            <span className="font-bold text-lg">{contact.label}</span>
            <span className="text-sm opacity-80">{contact.value}</span>
          </a>
        ))}
      </div>

     
      <form
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Send Message
        </button>

       
        {status === "success" && (
          <p className="text-green-400 text-center font-semibold">
             Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center font-semibold">
             Something went wrong. Please try again.
          </p>
        )}

      </form>

    </section>
  );
};

export default Contact;