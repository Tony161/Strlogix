import React from 'react';

class ResetPasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      error: null,
    };
  }

  onResetPassword = event => {
    event.preventDefault();
    this.props
      .onResetPasswordUser(
        this.email.current.value,
        this.password.current.value,
      )
      .then(data => {
        if (data.value.status === 'success') {
          alert('New password has been set');
          this.props.gotoLogin();
        } else {
          this.setState({
            submitting: false,
            submitted: false,
            error: data.value.error,
          });
        }
      });
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: '10em' }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="text-center">
              <h5>Reset Password</h5>
            </div>
            <form onSubmit={this.onResetPassword}>
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
                  className="form-control col-md-12 btn btn-primary"
                  type="submit"
                  name="submit"
                  value="RESET PASSWORD"
                  onClick={this.onResetPassword}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ResetPasswordComponent;
