import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.state = {
      isEdit: false,
      isSubmitted: false,
      roleAdmin: null,
      isVisible: false,
    };
  }

  toggleState = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  async componentDidMount() {
    if (Object.keys(this.props.auth).length !== 0) {
      localStorage.setItem('email', this.props.auth.action.email);
    } else {
      localStorage.setItem('email', this.props.user.email);
    }
    const email = localStorage.getItem('email');
    await this.props.getData(email);
     this.setState({ roleAdmin: this.props.profile.role });
    if (this.state.roleAdmin === 'admin') {
      this.setState({ isVisible: true });
    }
  }
  componentWillUpdate(){
    const email = localStorage.getItem('email');
    this.props.getData(email);

  }

  editProfile = () => {
    const email = localStorage.getItem('email');
    this.props.updateData(
      email,
      this.firstName.value,
      this.lastName.value,
      this.title.value,
    );
  };

  saveBtn = () => {
    this.editProfile(this.firstName, this.lastName, this.title);
    this.toggleState();
  };

  render() {
    const { firstName, lastName, title, email, role } = this.props.profile;
    return (
      <div>
        <div className={s.one}>
          <div>
            <img src={logo} className={s.logo} alt="logo" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={s.two} />
          <div className="text-center">
            <div style={{ margin: '2em 0em 0em 2.5em' }}>
              <span className={s.title}>My Profile</span>
              <div className="profile-card">
                <div className={s.image}>
                  <img src={image1} alt="Photadd" />
                </div>
                <div style={{ marginTop: '2em' }}>
                  {!this.state.isEdit ? (
                    <div>
                      <button
                        type="button"
                        onClick={this.toggleState}
                        className="btn btn-rounded"
                      >
                        Edit My Profile
                      </button>
                      {this.state.isVisible ? (
                        <div style={{ marginTop: '2em' }}>
                          <button
                            type="button"
                            className="btn btn-rounded"
                            onClick={this.props.gotoUserManagment}
                          >
                            Manage Users
                          </button>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  ) : (
                    <div>
                      <button
                        type="button"
                        onClick={this.saveBtn}
                        className="btn btn-rounded"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={this.toggleState}
                        className="btn btn-rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {!this.state.isEdit ? (
            <div
              style={{
                fontSize: '1.5em',
                marginLeft: '60px',
                marginTop: '3em',
              }}
            >
              <div>First Name: &nbsp;{firstName}</div>
              <div>Last Name: &nbsp;{lastName}</div>
              <div>Title: &nbsp;{title}</div>
              <div>Email: &nbsp;{email}</div>
              <div>Role: &nbsp;{role}</div>
            </div>
          ) : (
            <div
              style={{
                fontSize: '1.5em',
                marginLeft: '60px',
                marginTop: '3em',
              }}
            >
              <div>
                First Name
                <input
                  type="text"
                  defaultValue={this.props.profile.firstName}
                  // ref={this.firstName}
                  ref={input => (this.firstName = input)}
                />
              </div>
              <div>
                Last Name
                <input
                  type="text"
                  defaultValue={this.props.profile.lastName}
                  ref={input => (this.lastName = input)}
                />
              </div>
              <div>
                Title
                <input
                  type="text"
                  defaultValue={this.props.profile.title}
                  ref={input => (this.title = input)}
                />
              </div>
              <div>Email</div>
              <div>Role</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
