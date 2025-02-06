import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/textForm">Home</Link>
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>


            {/* <div className="colorButtons mx-3">
              <button className={`btn rounded-circle mx-1 btn-${props.mode === 'light' ? 'dark' : 'light'}`}
                style={{width: '40px',height: '40px',backgroundColor: '#701FBF',border: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}
                onMouseEnter={(e) => (e.target.style.borderColor = 'blue')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'transparent')}></button>
              <button className={`btn rounded-circle mx-1 btn-${props.mode === 'light' ? 'dark' : 'light'}`}
                style={{width: '40px',height: '40px',backgroundColor: '#A1197B',border: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}
                onMouseEnter={(e) => (e.target.style.borderColor = 'blue')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'transparent')}></button>
              <button className={`btn rounded-circle mx-1 btn-${props.mode === 'light' ? 'dark' : 'light'}`}
                style={{width: '40px',height: '40px',backgroundColor: '#1E9143',border: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}
                onMouseEnter={(e) => (e.target.style.borderColor = 'blue')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'transparent')}></button>
              <button className={`btn rounded-circle mx-1 btn-${props.mode === 'light' ? 'dark' : 'light'}`}
                style={{width: '40px',height: '40px',backgroundColor: '#9C9C9C',border: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}
                onMouseEnter={(e) => (e.target.style.borderColor = 'blue')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'transparent')}></button>
              <button className={`btn rounded-circle mx-1 btn-${props.mode === 'light' ? 'dark' : 'light'}`}
                style={{width: '40px',height: '40px',backgroundColor: '#042743',border: '3px solid transparent', transition: 'border-color 0.3s ease-in-out'}}
                onMouseEnter={(e) => (e.target.style.borderColor = 'blue')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'transparent')}></button>

            </div> */}


            <div className={`form-check form-switch text-${props.mode==='light'?'#042743':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
            </div>

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" onClick={props.toggleMode} type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired 
}


Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : "Set About-Here"
}