import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';

class InvitationUsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.email = React.createRef();
    this.role = React.createRef();
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
        this.role.current.value,
      )
      .then(res => {
        if (res.value.result !== 'Ok') {
          this.setState({ error: 'error' });
        }
      });
  };

  render() {
    return (
     <div>
       <div className={s.one}>
          <div>
            <img src={logo} className={s.logo} alt="logo" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
            <div className={s.two} />
      <div style={{width:"100%"}}>
        <div style={{padding:"1em 0em 0em 1em", width:"100%"}}>Invite New Users         
      <div style={{ width:"100%", display: 'flex', justifyContent:'space-around' }}>  
        <div className={s.ft}>
           <div>First Name</div>
              <div className="input-group  flex-nowrap" style={{width:"90%"}}>  
                <input type="text" ref={this.firstName} className="form-control" placeholder="First Name" />
              </div>
  
              <div>Email</div>
              <div className="input-group  flex-nowrap" style={{width:"90%"}}>               
                <input type="text" ref={this.email} className="form-control" placeholder="Email" />
              </div>         
           <div>Title</div>
              <div className="input-group  flex-nowrap" style={{width:"90%"}}>            
                <input type="text" ref={this.title} className="form-control" placeholder="Title" />
              </div>         
         </div> 
         <div className={s.fe}>
           <div>Last Name</div>
              <div className="input-group  flex-nowrap" style={{width:"90%"}}>              
                <input type="text" ref={this.lastName} className="form-control" placeholder="Last Name" />
              </div>          
           <div>Role</div>
              <div className="input-group  flex-nowrap" style={{width:"90%"}}>               
                <input type="text" ref={this.role} className="form-control" placeholder="Role" />
              </div>                  
         </div>       
      </div>
       <span style={{float:"right", marginRight:"50px"}}>
         <button className="form-control col-md-12 btn btn-primary"
                onClick={this.inviteUser}>SEND INVITATION</button>
       </span>
      </div>  
      </div>
      </div>   
     </div> 
    );
  }
}

export default withRouter(InvitationUsersComponent);

//<div className="container" style={{ paddingTop: '10em' }}>
      //   <div className="row justify-content-center">
      //     <div className="col-md-4">
      //       <div className="col-md-12">
      //         <img src={logo} alt="logo" style={{ width: '100%' }} />
      //         <br />
      //         <h1>Invitation Users</h1>
      //       </div>
      //       <form onSubmit={this.inviteUser}>
      //         {this.state.error && (
      //           <div className="form-group row">{this.state.error}</div>
      //         )}
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12"
      //             type="text"
      //             placeholder="First Name"
      //             ref={this.firstName}
      //           />
      //         </div>
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12"
      //             type="text"
      //             placeholder="Last Name"
      //             ref={this.lastName}
      //           />
      //         </div>
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12"
      //             type="email"
      //             placeholder="Email"
      //             ref={this.email}
      //           />
      //         </div>
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12"
      //             type="text"
      //             placeholder="Title"
      //             ref={this.title}
      //           />
      //         </div>
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12"
      //             type="text"
      //             placeholder="Role"
      //             ref={this.role}
      //           />
      //         </div>
      //         <div className="form-group row">
      //           <input
      //             className="form-control col-md-12 btn btn-primary"
      //             type="submit"
      //             name="submit"
      //             value="SEND INVITATION"
      //             onClick={this.inviteUser}
      //           />
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div></div>