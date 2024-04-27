import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>Home</div>
            </Link>

            <Link to='/characters'>
                <div>Characters</div>
            </Link>

            <Link to='/about'>
                <div>About Page</div>
            </Link>
        </div>
    )
}

//imported Link component from react-router-dom and used it to create nav links that handle my routing.
//the links connect to each of my pages.