import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = { error: null };
  }

  onLogon = event => {
    event.preventDefault();
    this.props
      .onLogonUser(
        this.email.current.value,
        this.password.current.value,
      )
      .then(response => {
        console.log(response);

        // if (this.props.getLogin.status !== 'success') {
        //   this.setState({ error: this.props.getLogin.error });
        // } else {
        //   this.props.onAddWedding();
        // }
      });
  };

  recoverPassword = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/recovery');
  };

  signUp = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: '10em' }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group row">
              <img src={logo} className="logo title" alt="logo" style={{ width: '350px', height: 'auto' }} />
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
              <div className="form-group row" style={{ display: 'none' }}>
                <input
                  className="form-control col-md-12"
                  type="phone"
                  placeholder="phone"
                  ref={this.phone}
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
              <div className="form-group row">
                <input
                  className="form-control col-md-12 btn btn-primary"
                  type="submit"
                  name="submit"
                  value="Login"
                />
              </div>
              <div className="form-group row">
                Forgot password?  &nbsp;
                <a
                  href="/recovery"
                  onClick={this.recoverPassword}
                >
                  Reset password
                </a>
              </div>
              <div className="form-group row">
                Don't have an account? &nbsp;
                <a onClick={this.signUp} href="/register">
                  Sign Up.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
