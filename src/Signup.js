import './App.css';

function Signup (){
    return(
        <div className="sign-containor">
          
        <div className="signup">
          <input type="text" placeholder="first name"/>
        </div>
        
        <div className="signup">    
          <input type="text" placeholder="lastname"/>
        </div>

        <div className="signup">
          <input type="email" placeholder="email"/>
        </div>

        <div className="signup">
          <input type="text" placeholder="username"/>
        </div>

        <div className="signup">
          <input type="date" placeholder="date - of - birth"/>
        </div>

        <div className="signup">
          <input type="text" placeholder="contact no."/>
        </div>

        <div className="signup">
          <input type="password" placeholder="password"/>
        </div>
        
        <button type="submit">Log In</button>
      </div>
    )
}

export default Signup;