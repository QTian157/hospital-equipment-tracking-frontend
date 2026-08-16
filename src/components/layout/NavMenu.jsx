import {Link} from 'react-router'

export const NavMenu = () =>{
    return (
        <nav>
            <ul className="nav-menu">
                <li>
                    <Link className="link" to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/equipment">
                        Equipment
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/about">
                        About
                    </Link>
                </li>

            </ul>
        </nav>

    )
}