import PropTypes from 'prop-types'

const Header = ({ oyun }) => {
    const name = "Mehmet Akif"
    const x = true

    return (
        <header className="header">
            <div className="container">
                <h1>H1 Başlığı</h1>
                <h2>{ name + ' ' + (x ? 'Aykan' : 'Demir') }</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2>{ oyun }</h2>
            </div>
        </header>
    )
}

// Oyun nesnesi için default değer
Header.defaultProps = {
    oyun: 'League of Legends'
}

Header.propTypes = {
    oyun: PropTypes.string.isRequired
}

export default Header
