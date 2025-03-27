import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        setErrorMessage('');
        e.preventDefault();

        const templateParams = {
            from_name: formData.from_name,
            reply_to: formData.reply_to,
            message: formData.message,
            to_name: 'Zygimantas Buzas',
        };

        emailjs.send('service_11usmtt', 'template_6k14ego', templateParams, 'nT1nIHJFlODwFmE-g')
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ from_name: '', reply_to: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setErrorMessage('An error occurred while sending your message. Please try again later.');
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800/30 rounded-lg shadow-lg text-gray-300 flex flex-col md:flex-row gap-10">
            {/* Left Column: Text + Socials */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
                <p className="mb-4">
                    I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="mb-6">
                    Feel free to reach out using the form or connect with me on social media below.
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/zygimantas-buzas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/zygisGithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Contact Me</h3>

                {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

                <form onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="reply_to"
                            value={formData.reply_to}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
