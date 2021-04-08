import PropTypes from 'prop-types'

const Test = ({ oyun }) => {
    const name = "Mehmet Akif"
    const x = true

    return (
        <>
            <div className="container">
                <h1>H1 Başlığı</h1>
                <h2>{ name + ' ' + (x ? 'Aykan' : 'Demir') }</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2>{ oyun }</h2>
            </div>
        </>
    )
}

// Oyun nesnesi için default değer
Test.defaultProps = {
    oyun: 'League of Legends'
}

Test.propTypes = {
    oyun: PropTypes.string.isRequired
}

export default Test
