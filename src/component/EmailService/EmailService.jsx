import React from "react";
import "./EmailService.css";
import emailjs from "@emailjs/browser";

const EmailService = () => {
    const [data, setData] = React.useState({
        email: "",
        subject: "",
        message: ""
    });

    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (emailData) => {
        // emailjs.send('serviceId', 'templateId', emailData, 'PublicKey')
        emailjs.send('service_uk3945o', 'template_ch0p0sw', emailData, 'myJyDoxiKVAC7xwli')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setData({
                    email: "",
                    subject: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error('There was an error sending the email:', error.text);
                setError(true);
                setErrorMessage("Failed to send email. Please try again later.");
            });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!data.email || !data.subject || !data.message) {
            setError(true);
            setErrorMessage("All fields are required");
            return;
        }

        if (!data.email.includes("@")) {
            setError(true);
            setErrorMessage("Invalid email");
            return;
        }

        setError(false);
        sendEmail(data);
    };

    return (
        <div className="email-container">
            <div className="email-card">
                <h2>Email Service</h2>
                <form className="email-form" onSubmit={handleOnSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="subject">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Enter the subject"
                        value={data.subject}
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={data.message}
                        onChange={handleOnChange}
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                    {error && <h1>{errorMessage}</h1>}
                </form>
            </div>
        </div>
    );
};

export default EmailService;