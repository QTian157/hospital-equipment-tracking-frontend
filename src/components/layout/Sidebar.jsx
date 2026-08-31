import {NavMenu} from './NavMenu';

import { useState } from 'react';
import Button from '../forms/inputs/Button.jsx'

export const Sidebar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Button
                id="hamburger"
                handleClick={() => setMenuOpen(!menuOpen)}
                label="☰"
            />
            <aside className={menuOpen ? "menu-open" : ""}>
                <NavMenu />
            </aside>
        </>
    );
}