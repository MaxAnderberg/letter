import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import './Splash.scss';

const Splash = () => {
  return (
    <div className="splash-container-grid">
    <section className="left-column">
      <h1 className="left-column__title">letter</h1>
    </section>
    <section className="right-column">
      <h1 className="right-column__title">Happening now</h1>
      <h2 className="right-column__slogan">Join Letter Today</h2>
      <span className="input-group-btn">
        <Link to='/login'>Log in</Link>
      </span>
    </section>

    </div>
  )
}

export default Splash
