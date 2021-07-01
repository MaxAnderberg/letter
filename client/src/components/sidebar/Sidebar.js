import '../Main.scss';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const title = 'Home';
    return (
        <section className="sidebar">
            <p className="sidebar__title">{title}</p>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </section>
    )
}

export default Sidebar
