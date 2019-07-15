import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';

class InvitationUsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.email = React.createRef();
    this.state = { error: null };
  }

  inviteUser = event => {
    event.preventDefault();
      this.props
        .invitationUser(
          this.firstName.current.value,
          this.lastName.current.value,
          this.email.current.value,
          this.title.current.value,
        )
        .then(res => {
          if (res.value.result !== 'Ok') {
            this.setState({ error: 'error' });
          }
        });
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: '10em' }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="col-md-12">
              <img src={logo} alt="logo" style={{ width: '100%' }} />
              <br />
              <h1>Invitation Users</h1>
            </div>
            <form onSubmit={this.inviteUser}>
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
                  type="email"
                  placeholder="Email"
                  ref={this.email}
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
                  type="text"
                  placeholder="Role"
                  ref={this.role}
                />
              </div>
              <div className="form-group row">
                <input
                  className="form-control col-md-12 btn btn-primary"
                  type="submit"
                  name="submit"
                  value="SEND INVITATION"
                  onClick={this.inviteUser}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InvitationUsersComponent);
