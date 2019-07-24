import React from 'react';
import { withRouter } from 'react-router';
import DragAndDrop from './dragNDrop';
// import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const FileNameHidden = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  height: 19em;
  height: 200px;
  width: 200px;
  background-color: #d3d3d3;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
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

const WeddingImage = styled.img`
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
      file: null,
      image: null,

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
    this.setState({image: true})
  }

  removeImage = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ file: null, image: null });
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

  addImage = event => {
    event.preventDefault();
    this.props.image({
      lastModified: this.state.file.lastModified,
      lastModifiedDate: this.state.file.lastModifiedDate,
      name: this.state.file.name,
      size: this.state.file.size,
      type: this.state.file.type,
      image: this.state.image,
      email: this.props.profile.email
    });
    this.toggleState();
  };

  // handleUploadFile = (event) => {
  //   const data = new FormData();
  //   console.log(this.props.profile)
  //   data.append('file', this.props.profile.image.image);
  //   data.append('name', this.props.profile.image.name);
  //   data.append('description', this.props.profile.image.type);
  //   // '/files' is your node.js route that triggers our middleware
  //   axios.post('http://localhost:3300/api/images/imageAdd', data).then((response) => {
  //     console.log(response); // do something with the response
  //   });
  // }

  render() {
    const { firstName, lastName, title, email, role } = this.props.profile;
    return (
      <div>
        <div className={s.one}>
          <div>
            <img src={logo} className={s.logo} alt="logo" />
          </div>
        </div>
        <form
          onSubmit={this.addImage}
          encType="multipart/form-data"
          method="post"
        >
          <div style={{ display: 'flex' }}>
            <div className={s.two} />
            <div className="text-center">
              <div style={{ margin: '2em 0em 0em 2.5em' }}>
                <span className={s.title}>My Profile</span>
                <div className="profile-card">
                  <div>
                    <FileNameHidden
                      type="file"
                      onChange={this.onChangeFile}
                      ref={input => (this.inputFile = input)}
                      style={{ display: 'none' }}
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
                        <WeddingImage
                          alt="Wedding Day"
                          display={this.state.image ? '' : 'none'}
                          id="weddingImage"
                          src={`http://localhost:3300/uploads/${this.props.profile.image}`}
                        />
                      </ImageContainer>
                    </DragAndDrop>
                  </div>
                  <div style={{ marginTop: '2em' }}>
                    {!this.state.isEdit ? (
                      <div>
                        <Button
                          variant="outlined" 
                          color="primary"
                          onClick={this.toggleState}>
                          Edit My Profile
                        </Button>
                        {this.state.isVisible ? (
                          <div style={{ marginTop: '2em' }}>
                            <Button
                             variant="outlined" 
                             color="primary"
                             onClick={this.props.gotoUserManagment}>
                              Manage Users
                            </Button>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                    ) : (
                      <div>
                        <Button
                          type="button"
                          onClick={(this.saveBtn, this.addImage)}
                          variant="outlined" 
                          color="primary">
                          Save
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={this.toggleState}
                          variant="outlined" 
                          color="primary">
                          Cancel
                        </Button>
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
        </form>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
