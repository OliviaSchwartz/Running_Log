import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to ="/">Home</Link>
                <Link to= "/runs">Run Log</Link>
                <Link to ="/blogs">Blog</Link>
            </nav>
        </header>
    )
}

export default Header
