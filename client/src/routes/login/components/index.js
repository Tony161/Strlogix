import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.Checkbox = React.createRef();
  }
  state = { rememberMe: false, error: null };

  handleCheckbox = () => {
    this.setState({ RememberMe: this.Checkbox.current.checked });
  };

  onLogon = event => {
    event.preventDefault();
    this.props
      .onLogonUser(this.email.current.value, this.password.current.value)
      .then(response => {
        if (response.value.status !== 'Wrong Password or Email') {
          this.props.gotoProfile();
          return response;
        } else {
          this.setState({ error: response.value.status });
        }
      });
  };

  resetPassword = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/resetPassword');
  };

  signUp = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    return (
     <div  className={s.Lwrap}>  
      <div className="container" > 
        <div className="row justify-content-center"> 
          <div className="col-md-4" style={{margin:"30px 0px 0px 0px"}}>
              <img src={logo} alt="logo" style={{ width: '100%' }} />
              <br />
              <br />
          <Paper style={{padding:"20px"}}>
            <form onSubmit={this.onLogon}>
              {this.state.error && (
                <div className="form-group row" style={{ color: 'red' }}>
                  {this.state.error}
                </div>
              )}
            <TextField style={{ width:'100%' }}
              id="standard-name"
              label="Email"
              type="email"
              inputRef={this.email}
              margin="normal"/> 
            <TextField style={{ width:'100%' }}
              id="standard-password-input"
              label="Password"
              inputRef={this.password}
              type="password"
              autoComplete="current-password"
              margin="normal"/>
            <div className="row justify-content-center">
                <Button 
                   variant="outlined"
                   color="primary" 
                   type="submit"
                   name="submit"
                   value="Login">login
                </Button>
            </div>     
            <br />
              <div className="row justify-content-center">
                  Forgot password? &nbsp;
                  <a href="/recovery" onClick={this.resetPassword}>
                    Reset password
                  </a>
              </div>
              <br />
              <div className="row justify-content-center">
                  Don't have an account? &nbsp;
                  <a onClick={this.signUp} href="/register">
                  Sign Up
                  </a>
              </div>
            </form>
           </Paper>
          </div>  
         </div>
        </div>
       </div>
    );
  }
}

export default withRouter(LoginComponent);
