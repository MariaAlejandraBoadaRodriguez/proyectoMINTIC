import login from './Images/login.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>  
      <div className="login-container">
        <div className="login-info-container">
            <h1 class="title">Login</h1>
            <div class="social-login">
                <div class="social-login-element">
                    <imgen src={"Images/google.svg"} alt="google-image"/>
                    <span>Google</span>
                </div>
            </div>
            <form class="inputs-container">
                <p>Olvidaste la Contraseña? <span class="span">Click here</span></p>
                <button class="btn">login</button>
                <p>No tienes cuenta? <span class="span">Sign Up</span></p>
            </form>
        </div>
        <img class="image-container" src={login} alt="IMAGEN"/>
    </div>
    </body>
    </div>
  );
}

export default App;
