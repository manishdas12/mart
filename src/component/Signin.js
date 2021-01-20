import React from 'react'
import { Link } from 'react-router-dom';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';


function Signin() {
    return (         
            <div className="contentarea">
              <div className="container">
                <ValidationForm>
                  <div className="row">
                    <div className="offset-md-3 col-md-6 col-xs-12">
                      
                      <div className="form-group login-form-input-block">
                        <label className="control-label" htmlFor="email">Username *</label>
                        <TextInput name="email" type="email" className="form-control" id="email" placeholder="Username" required />
                      </div>
                      <div className="form-group login-form-input-block">
                        <label className="control-label" htmlFor="passwd">Password *</label>
                        <TextInput name="password" type="password" className="form-control" id="password" placeholder="Password" required  />
                      </div>
                      <button className="btn btn-round-edge btn-color1 btn-animation form_btn_trigger" type="submit">Login</button>
                      <Link className="btn btn-link px-0 text-right ml-2" >Forgot password?</Link>
                      <Link className="btn btn-link px-0 text-right ml-2" >Don’t have an account? Sign up now.</Link>
                    </div>
                  </div>
                </ValidationForm>
              </div>
            </div>
    )
}

export default Signin
