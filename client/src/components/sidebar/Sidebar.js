import '../Main.scss';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const title = 'Letter';
    return (
        <section className="sidebar">
            <p className="sidebar__title">{title}</p>
            <p><NavLink to="/home">Home</NavLink></p>
            <p><NavLink to="/about">About</NavLink></p>
        </section>
    )
}

export default Sidebar
