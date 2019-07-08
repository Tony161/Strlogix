import React from 'react';
import { withRouter } from 'react-router';
import image1 from '../../../images/image1.png';
import s from './style.module.css';
import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }
  state = {
    isSubmitted: false,
  };
  
  componentDidMount = () => {
    this.props.getData(this.props.auth.action);
     console.log("ssssss",this.props.auth.action)
  }
  render() {
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
                    <div class="profile-card">
							        <div className={s.image}>
							   	      <img src={image1} alt="image" />
							        </div>
                      <div style={{marginTop:"30px"}}>
							          <button type="button" class="btn btn-rounded">Edit My Profile</button>
                      </div>
						        </div>
                  </div>
                </div>
              
              <div style={{fontSize:"1.5em", marginLeft:"60px", marginTop:"3em"}}>
                  <p><div>First Name</div></p>
                  <p><div>Last Name</div></p>
                  <p><div>Title</div></p>
                  <p><div>Email</div></p>
                  <p><div>Role</div></p>
              </div>
                 
            </div>
        </div> 

      


    );
  }
}

export default withRouter(ProfileComponent);
