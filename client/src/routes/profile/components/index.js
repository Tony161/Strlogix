import React from 'react';
import { withRouter } from 'react-router';
// import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';
import styled from 'styled-components';
import DragAndDrop from './dragNDrop';

const FileNameHidden = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  height: 11.5em;
  width: 11.5em;
  border-radius: 50%;
  cursor: pointer;
  background-color: lightgrey;
`;

const DelImage = styled.div`
  position: absolute;
  top: 5px;
  right: 8px;
  padding: 4px 3px;
  color: #000000;
  cursor: pointer;
  text-align: center;
  display: ${props => props.display};
`;

const ChooseFile = styled.h5`
  padding-top: 148px;
  display: ${props => props.display};
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: ${props => props.display};
`;

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
      image: null,
      file: null,
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

  handleDrop = file => {
    this.setState({ file });
    this.showImage(file);
  };

  onChangeFile = event => {
    const file = event.target.files[0];
    this.setState({ file });
    this.showImage(file);
  };

  showImage = file => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // FileReader support
    if (FileReader && file) {
      const fr = new FileReader();
      fr.onload = () =>
        (fileReader => {
          const img = document.getElementById('weddingImage');
          img.onload = () =>
            (img => {
              ctx.drawImage(img, 0, 0);
            })(img);
          img.src = fileReader.result;
          this.setState({ image: fileReader.result });
        })(fr);
      fr.readAsDataURL(file);
    }
  };

  onChangeImageClick = event => {
    event.preventDefault();
    this.inputFile.click();
  };

  removeImage = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ file: null, image: null });
  };

  addImage = event => {
    event.preventDefault();
    this.props.image({
      lastModified: this.state.file.lastModified,
      lastModifiedDate: this.state.file.lastModifiedDate,
      name: this.state.file.name,
      size: this.state.file.size,
      type: this.state.file.type,
      image: this.state.image,
    });
    this.toggleState();
  }
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
              <div>
                <FileNameHidden
                  type="file"
                  onChange={this.onChangeFile}
                  ref={input => (this.inputFile = input)}
                  // style={{ display: 'none' }}
                />
              </div>
              <div onClick={this.onChangeImageClick} id="photo">
                <DragAndDrop handleDrop={this.handleDrop}>
                  <ImageContainer>
                    <ChooseFile
                      className="text-primary text-center"
                      display={this.state.image ? 'none' : ''}
                    >
                      Choose File
                    </ChooseFile>
                    <DelImage display={this.state.image ? '' : 'none'}>
                      <i
                        className="font-icon-close-2"
                        onClick={this.removeImage}
                      />
                    </DelImage>
                    <ProfileImage
                      alt="Wedding Day"
                      display={this.state.image ? '' : 'none'}
                      id="weddingImage"
                      
                    />
                  </ImageContainer>
                </DragAndDrop>
              </div>
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
                        onClick={(this.saveBtn, this.addImage)}
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
