import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>homepage</div>
            </Link>

            <Link to='/characters'>
                <div>characters</div>
            </Link>

            <Link to='/about'>
                <div>about page</div>
            </Link>
        </div>
    )
}

//imported Link component from react-router-dom and used it to create nav links that handle my routing.
//the links connect to each of my pages.