import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.rePassword = React.createRef();
    this.state = { error: null };
  }

  logIn = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/login');
  };

  onClear = event => {
    event.preventDefault();
    this.firstName.current.value = null;
    this.lastName.current.value = null;
    this.title.current.value = null;
    this.email.current.value = null;
    this.password.current.value = null;
    this.rePassword.current.value = null;
  };

  onRegister = event => {
    event.preventDefault();
    if (this.password.current.value !== this.rePassword.current.value) {
      this.setState({ error: 'Different passwords' });
    } else {
      this.setState({ error: null });
      this.props
        .onRegisterUser(
          this.firstName.current.value,
          this.lastName.current.value,
          this.title.current.value,
          this.email.current.value,
          this.password.current.value,
        )
        .then(res => {
          if (res.value.result !== 'Ok') {
            this.setState({ error: 'error' });
          } else {
            this.props.gotoProfile();
          }
        });
    }
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: '10em' }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="col-md-12">
              <img src={logo} alt="logo" style={{ width: '100%' }} />
              <br />
              <br />
            </div>
            <form onSubmit={this.onRegister}>
              {this.state.error && (
                <div className="form-group row">{this.state.error}</div>
              )}
              <div className="form-group row">
                <input
                  className="form-control col-md-12"
                  type="text"
                  placeholder="First Name"
                  ref={this.firstName}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12"
                  type="text"
                  placeholder="Last Name"
                  ref={this.lastName}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12"
                  type="text"
                  placeholder="Title"
                  ref={this.title}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12"
                  type="email"
                  placeholder="Email"
                  ref={this.email}
                />
              </div>
              <div className="form-group row">
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
                  className="form-control col-md-12"
                  type="password"
                  name="rePassword"
                  placeholder="Re-Enter Password"
                  ref={this.rePassword}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12 btn btn-primary"
                  type="submit"
                  name="submit"
                  value="SIGN UP"
                  onClick={this.onRegister}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12 btn-outline-secondary"
                  type="submit"
                  name="submit"
                  value="CLEAR"
                  onClick={this.onClear}
                />
              </div>
              <div className="form-group row">
                Already have an account? &nbsp;
                <a onClick={this.logIn} href="/login">
                  Log In.
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default RegisterComponent;

export default withRouter(RegisterComponent);
