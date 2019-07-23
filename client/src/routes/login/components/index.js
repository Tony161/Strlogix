import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';

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
      <div className={s.Lwrap}>
      <div className="container" style={{ paddingTop: '16.85em' }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="col-md-12">
              <img src={logo} alt="logo" style={{ width: '100%' }} />
              <br />
              <br />
            </div>
            <form onSubmit={this.onLogon}>
              {this.state.error && (
                <div className="form-group row" style={{ color: 'red' }}>
                  {this.state.error}
                </div>
              )}
              <div className="form-group row">
                <input
                  className="form-control col-md-12"
                  type="email"
                  placeholder="Email"
                  ref={this.email}
                />
              </div>
              
              <div className="form-group row" style={{ position: 'relative' }}>
                <input
                  className="form-control col-md-12"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={this.password}
                />
              </div>
              <label>
                <input
                  type="checkbox"
                  id="RememberMe"
                  ref={this.Checkbox}
                  onChange={this.handleCheckbox}
                  checked={this.state.rememberMe}
                  /> <span style={{color:"white"}}>&nbsp;&nbsp;Remember me</span>
              </label>
              <br />

              <div className="form-group row">
                <input
                  className="form-control col-md-12 btn btn-primary"
                  type="submit"
                  name="submit"
                  value="Login"
                />
              </div>
              <div className="form-group row">
                Forgot password? &nbsp;
                <a href="/recovery" onClick={this.resetPassword}>
                  <span style={{color:"white"}}>Reset password</span>
                </a>
              </div>
              <div className="form-group row">
                Don't have an account? &nbsp;
                <a onClick={this.signUp} href="/register">
                <span style={{color:"white"}}>Sign Up</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
