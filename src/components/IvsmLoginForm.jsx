import React from "react";
import IvsmInput from "../UI/input/IvsmInput";
import IvsmButton from "../UI/button/IvsmButton";

const IvsmLoginForm = function({login}) {
  return (
    <form className="form" 
          onSubmit={login}
    >
      <IvsmInput id='login' 
                 type='text' 
                 title='ENTER WITH A NUMBER OR USERNAME'
      />

      <IvsmInput id='password' 
                 type='password'
                 title='ENTER A PASSWORD'
      />
      
      <IvsmButton className='form__button'>
        Enter
      </IvsmButton>
    </form>
  )
}

export default IvsmLoginForm