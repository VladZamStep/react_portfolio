import './contact.css';
import { contactData } from '../../data/data';

const Contact = () => {
    return (
        <section id="contact">
            <h5 className="ff-sans-normal fs-400 uppercase">Wanna Send Me A Massage?</h5>
            <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >Contact Me</span>
            <h2 className="ff-anton fs-700 letter-spacing-2 uppercase">Contact Me</h2>
            <div className="main__container contact__container">
                <div className="contact__options">
                    {contactData.map(item => (
                        <div className="contact__option" key={item.id}>
                            <a href={item.contact_link} target="_blank">
                                <div className="contact__type">
                                    <span className="contact__icon">{item.icon}</span>
                                    <h4 className="fs-300">{item.contact_type}</h4>
                                    <h5 className="fs-400">{item.contact_value}</h5>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <form>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit" className="sendMessage__btn btn btn-dark">Send Message</button>
                </form>
            </div>
        </section >
    )
}
export default Contact;