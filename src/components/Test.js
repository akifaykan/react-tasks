const Test = () => {
    const name = "Mehmet Akif"
    const x = true

    return (
        <div className="container">
            <h1>H1 Başlığı</h1>
            <h2>{ name + ' ' + (x ? 'Aykan' : 'Demir') }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor natus aut sapiente suscipit mollitia cum! Perferendis odio, necessitatibus totam omnis velit rerum, minima ut veniam debitis aut quibusdam ullam.</p>
        </div>
    )
}

export default Test
