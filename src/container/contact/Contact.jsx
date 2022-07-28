import React from "react";
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const dataContact = [
    {
        icon: <MdOutlineEmail />,
        contact_type: "Email",
        contact_value: "vladstep98@yandex.ru",
        contact_link: "https://mail.yandex.ru",
        id: 1
    },
    {
        icon: <BsWhatsapp />,
        contact_type: "WhatsApp",
        contact_value: "+7 (920) 313 39 31",
        contact_link: "https://wa.me/89203133931",
        id: 2
    }
]

const Contact = () => {
    return (
        <section id="contact">
            <h5 className="ff-sans-normal fs-400 uppercase">Wanna Send Me A Massage?</h5>
            <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >Contact Me</span>
            <h2 className="ff-anton fs-700 letter-spacing-2 uppercase">Contact Me</h2>
            <div className="main__container contact__container">
                <div className="contact__options">
                    {
                        dataContact.map(({ icon, contact_type, contact_value, contact_link, id }) => {
                            return (
                                <div className="contact__option">
                                    <a href={contact_link} target="_blank">
                                        <div className="contact__type">
                                            <span className="contact__icon">{icon}</span>
                                            <h4 className="fs-300">{contact_type}</h4>
                                            <h5 className="fs-400">{contact_value}</h5>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <form>
                    <input type="text" name="name" placeholder="Your Full Name" requared />
                    <input type="email" name="email" placeholder="Your Email" requared />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit" className="sendMessage__btn btn btn-dark">Send Message</button>
                </form>
            </div>
        </section >
    )
}
export default Contact;