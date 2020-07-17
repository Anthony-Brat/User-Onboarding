import React from 'react';

function Form () {
return (
  <div className="signUp">
    <form>
    
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name"
    minlength="2" maxlength="18" size="20"/>
    
    <label htmlfor="email">Enter email:</label>
    <input type="email" id="email"
    pattern=".+@globex.com.com" size="30"/>

<label htmlFor="pass">Password (8 characters minimum):</label>
<input type="password" id="pass" name="password"
        minlength="8" />
        
        
      


      <p> <label>
          <input type="checkbox" name="terms"/>
          I agree to the terms of service
          </label></p> 


<button type="submit">Sign Up</button>
    </form>
    </div>
);
}

export default Form;