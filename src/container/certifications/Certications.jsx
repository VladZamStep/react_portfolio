import './certifications.css';
import { certificationsData } from '../../data/data';

const Certifications = () => {
    return (
        <section id="certifications">
            <h5 className="ff-sans-normal fs-400 uppercase">My Recent Certifications</h5>
            <div className="section__title">
                <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >Certifications</span>
                <h2 className="ff-anton fs-700 letter-spacing-2 uppercase" >Certifications</h2>
            </div>
            <div className="main__container certifications__container">
                {certificationsData.map(item => {
                    return (
                        <article key={item.id} className="certification__wrapper">
                            <div className="certification_img_container">
                                <img src={item.image1} />
                            </div>
                            <div className="certification__title letter-spacing-4 fs-400">{item.title}</div>
                            <div className="certification__btn uppercase">
                                <a href={item.fcc_link} target="_blank" className="btn btn-dark">See more on FCC</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
        </section >
    )
}
export default Certifications;