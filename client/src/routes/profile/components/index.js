import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props) 
  }
  state = {
    isSubmitted: false,
  };

  getDataProfile = event => {
    var email;
    event.preventDefault();
    this.props.getData(email );

  };


  

  render() {
    return (
      <div >
      <div className={s.one}><img src={logo} style={{height: "3em"}} /></div>
        <div style={{display: "flex"}}>
         <div style={{height: "100vh", width: "5em", backgroundColor: "lightblue"}}></div>
          <div style={{ display:"flex", paddingLeft: "20px", paddingTop: "20px"}}>

           <div className="text-center">
            <div style={{fontSize: "3em"}}>My profile</div>
             
             <img src={image1} alt="photo" />
             
							<div className="profile-card-name">Vasily</div>
							  <button type="button" class="btn btn-rounded">Edit My Profile</button>
							</div>
              
              <div style={{fontSize:"1.5em", paddingLeft: "30px", marginTop: "3em"}}>
              <div>First Name</div>
              <div>Last Name</div>
              <div>Title</div>
              <div>email</div>
              <div>role</div>
              
              </div>
            </div>
          </div>
        </div>
      
       
    );
  }
}


export default withRouter(ProfileComponent);
