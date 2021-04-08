import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ game }) => {
    const name = 'Mehmet Akif';
    const x = true;
    const buttonClick = () => {
        console.log('click');
    };

    return (
        <header className="header">
            {/* <h1>H1 Başlığı</h1>
            <h2>{name + ' ' + (x ? 'Aykan' : 'Demir')}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>{game}</h2> */}
            <h1 className="gamelist">Oyun Listesi</h1>
            <Button text="OYUN EKLE" color="#000" click={buttonClick} />
        </header>
    );
};

// Defaul props
Header.defaultProps = {
    game: 'League of Legends',
};

// Props type control
Header.propTypes = {
    game: PropTypes.string.isRequired,
};

export default Header;
