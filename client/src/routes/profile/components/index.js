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

  async componentDidMount () {
    await this.props.getData(this.props.auth.action.email);
    localStorage.setItem ('email', this.props.auth.action.email);
    await this.setState({roleAdmin: this.props.profile.role});
       if(this.state.roleAdmin === 'admin') {
        this.setState({isVisible: true})
      }
  }

  editProfile = () => {
    const email = localStorage.getItem('email');
    this.props.updateData(
      email,
      this.firstName.current.value,
      this.lastName.current.value,
      this.title.current.value,
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
             <div><img src={logo} className={s.logo} alt='logo'/></div>
           </div>
           <div style={{display:"flex"}}>
             <div className={s.two}></div>
                <div className="text-center">
                 <div style={{margin:"2em 0em 0em 2.5em"}}>
                  <span className={s.title}>My Profile</span>
                    <div className="profile-card">
							        <div className={s.image}>
							   	      <img src={image1} alt="image" />
							        </div>
                      <div style={{marginTop:"2em"}}>
                        {!this.state.isEdit ? (
                          <div>
							             <button type="button"  onClick={this.toggleState} className="btn btn-rounded">Edit My Profile</button>
                            {this.state.isVisible ? (
                              <div style={{marginTop:"2em"}}>
                                <button type="button" className="btn btn-rounded">Manage Users</button>
                              </div>
                                 ) : (
                                    <div></div>
                                 )}
                          </div>
                        ) : (
                          <div>
                          <button type="button"  onClick={this.saveBtn} className="btn btn-rounded">Save</button>
                          <button type="button"  onClick={this.toggleState} className="btn btn-rounded">Cancel</button>
                          </div>
                        )}
                      </div>
						        </div>
                  </div>
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
                  ref={this.firstName}
                />
              </div>
              <div>
                Last Name
                <input
                  type="text"
                  defaultValue={this.props.profile.lastName}
                  ref={this.lastName}
                />
              </div>
              <div>
                Title
                <input
                  type="text"
                  defaultValue={this.props.profile.title}
                  ref={this.title}
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
