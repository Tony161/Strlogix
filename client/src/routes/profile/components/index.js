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
     this.state = {isEdit: false};
  
  }
      
  toggleState = () =>
  this.setState({ isEdit: !this.state.isEdit });
  
  
    //  console.log("ssssss",this.props.getData)
  



  state = {

    isSubmitted: false,
  };


  // componentDidMount = () => {
  //   this.props.getData(this.props.auth.action.email )
  // }

  editProfile = (firstName,lastName,title) => {
    this.props.updateData(firstName,lastName,title);

  }

  render() {
    const {firstName, lastName, title, email, role} = this.props.profile;
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
                      <div style={{marginTop:"30px"}}>
                        {!this.state.isEdit ? (
							          <button type="button"  onClick={this.toggleState} className="btn btn-rounded">Edit My Profile</button>
                        ) : (
                          <button type="button"  onClick={this.toggleState} className="btn btn-rounded">Save</button>
                        )}
                      
                      </div>
						        </div>
                  </div>
                </div>
          {!this.state.isEdit ?  (   
              <div style={{fontSize:"1.5em", marginLeft:"60px", marginTop:"3em"}}>
                  <div>First Name</div>
                  <div>Last Name</div>
                  <div>Title</div>
                  <div>Email</div>
                  <div>Role</div>
              </div>
          ) : (
            <div style={{fontSize:"1.5em", marginLeft:"60px", marginTop:"3em"}}>
                  <div>First Name<input type="text" defaultValue={this.props.name} ref={this.firstName} /></div>
                  <div>Last Name<input type="text" defaultValue={this.props.surname} ref={this.lastName} /></div>
                  <div>Title</div>
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
