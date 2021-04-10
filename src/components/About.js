import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about">
            <h2>Hakkımızda</h2>
            <h3>Version 1.0.0</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veritatis iste
                enim illum reiciendis molestiae qui corporis assumenda sint et vitae esse minus,
                dignissimos at. Eos, dicta? Vel, exercitationem eos.
            </p>
            <div className="backlink">
                <Link to="/">
                    {' '}
                    <FaLongArrowAltLeft /> Geri Dön
                </Link>
            </div>
        </div>
    );
};

export default About;
