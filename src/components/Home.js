import React from 'react';

const Home = ({ switchVisibleComponent, handleHover, HomeClass, ProjectsClass, AboutClass, ContactClass }) => {

  const divStyle = {
    height: '100vh',
    background: '#0C1324',
    boxSizing: 'border-box',
    padding: '10%'
  };

  const navStyle = {
    position: 'fixed',
    height: '40%',
    width: '10%',
    bottom: '30%',
    top: '30%',
    left: '4%'
  };

  const btnStyle = {
    display: 'block',
    height: '23%',
    width: '100%',
    margin: '0 0 5% 0',
    background: '#0C1324',
    borderRadius: '10px',
    fontSize: '1.3em',
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    cursor: 'pointer'
  };

  const container = {
    boxSizing: 'border-box',
    width: '700px',
    height: '100%',
    margin: '0 auto',
    padding: '5% 0',
    textAlign: 'center',
    display: 'table'
  };

  const contentContainer = {
    boxSizing: 'border-box',
    height: '100%',
    display: 'table-cell',
    verticalAlign: 'middle'
  };

  const h1Style = {
    fontSize: '3.5em',
    fontFamily: 'Bungee Inline, cursive',
    color: '#FFF'
  };

  const h2Style = {
    fontSize: '2.5em',
    fontFamily: 'Bungee Inline, cursive',
    color: '#FFF'
  };

  const pStyle = {
    marginTop: '10%',
    lineHeight: '1.5em',
    fontSize: '1.5em',
    fontFamily: 'Roboto, sans-serif',
    color: '#FFF'
  };

  const btnClass1 = HomeClass ? 'animated tada infinite' : '';
  const btnClass2 = ProjectsClass ? 'animated tada infinite' : '';
  const btnClass3 = AboutClass ? 'animated tada infinite' : '';
  const btnClass4 = ContactClass ? 'animated tada infinite' : '';

  return (
    <div style={divStyle} id="Home">
      <div style={navStyle} class="navContainer">
        <button
          className={btnClass1}
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Home"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Home
        </button>
        <button
          className={btnClass2}
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Projects"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Work
        </button>
        <button
          className={btnClass3}
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="About"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          About Me
        </button>
        <button
          className={btnClass4}
          style={btnStyle}
          onClick={switchVisibleComponent}
          value="Contact"
          onMouseEnter={(value) => handleHover(value)}
          onMouseLeave={(value) => handleHover(value)}
        >
          Contact
        </button>
      </div>
      <div style={container} className="mobileContainer">
        <div style={contentContainer} className="animated fadeInUp">
          <h1 style={h1Style} className="homeTitle">George Wilman</h1>
          <h2 style={h2Style}>Web Developer</h2>
          <p style={pStyle} className="homeP">Hi! I&apos;m George and I&apos;m a full-stack web developer based in London. Check out my work, find out more about me or get in touch. I&apos;d love to hear from you.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
