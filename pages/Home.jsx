function Home () {
    const background = {
        backgroundImage: 'url("https://wallpapercave.com/wp/wp5786926.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh'
    };

    return (
        <div style={background}>
            <div>Homepage: welcome!</div>
        </div>
    );
}

export default Home;