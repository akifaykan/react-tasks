import Button from './Button';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1 className="gamelist">{title}</h1>
            {location.pathname === '/' && (
                <Button
                    text={showAdd ? 'PANELİ KAPAT' : 'OYUN EKLE'}
                    color={showAdd ? '#c82424' : '#000'}
                    click={onAdd}
                />
            )}
        </header>
    );
};

// Defaul props
Header.defaultProps = {
    title: 'Oyun Listesi',
};

// Props type control
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
