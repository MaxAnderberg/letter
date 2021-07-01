import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";

const Splash = () => {
    return (
        <div>
        <span className="input-group-btn">
          <Link to='/login'>Log in</Link>
        </span>
        </div>
    )
}

export default Splash
