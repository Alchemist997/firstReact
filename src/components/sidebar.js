import { NavLink } from "react-router-dom";
import css from './Sidebar.module.css'

let Sidebar = () => <aside className={css.aside}>
    <ul>
        <li>
            <NavLink to='/profile' activeClassName={css.activeLink}>Profile</NavLink>
        </li>
        <li>
            <NavLink to='/messages' activeClassName={css.activeLink}>Messages</NavLink>
        </li>
        <li>
            <NavLink to='/news' activeClassName={css.activeLink}>News</NavLink>
        </li>
        <li>
            <NavLink to='/music' activeClassName={css.activeLink}>Music</NavLink>
        </li>
        <li>
            <NavLink to='/settings' activeClassName={css.activeLink}>Settings</NavLink>
        </li>
    </ul>
</aside>

export default Sidebar