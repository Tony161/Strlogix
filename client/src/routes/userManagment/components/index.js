import React from 'react';
import { withRouter } from 'react-router';
// import image1 from '../../../images/image1.png';
// import logo from '../../../images/StreetLogix_Logo_1.png';

class ProfileComponent extends React.Component {
  state = { isAdmin: false,
    userManagment: null,
    showTable:false
  };

async componentDidMount() {
   await this.props.getData();
   await this.setState({userManagment: this.props.userManagment })
   await this.setState({showTable: true })
 }



  renderTableData() {
       return this.state.userManagment.map((data, index) => {
         const { id, firstName, lastName, title, role, email, active } = data //destructuring
         return (
            <tr key={index}>
               <td>{id}</td>
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{title}</td>
               <td>{role}</td>
               <td>{email}</td>
               <td>{active}</td>
            </tr>
         )
      })
  }

  render() {
    return (
      <div>
        UserManagment
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Role</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
        {!this.state.showTable || this.renderTableData()}
        </tbody>
      </table>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
