import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';

class ProfileComponent extends React.Component {
   constructor(props) {
     super(props)
     
   }
  state = { isAdmin: true, userManagment: null };

  componentDidMount() {
    this.props.getData();
  }

 renderTableData() {
  return this.props.userManagment.map((data, index) => {
    const { firstName, lastName, title, role, email, active } = data; //destructuring
    return (
      <tr key={index}>
        <td><input type="checkbox" /></td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{title}</td>
        {this.state.isAdmin ? (
        <td>
            <select>
                <option value="admin">{role}</option>
                <option value="user">user</option>
                <option value="editor">editor</option>
            </select>
        </td>
        ) : (<td>{role}</td>)}
        <td>{email}</td>
        <td>
          <select>
            <option>{active}</option>
            <option>false</option>
            <option>true</option>
          </select>
        </td>
      </tr>
    );
  });
}

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
          <div style={{ width: '100%', margin: '15px 0px 0px 15px' }}>
            <span style={{ fontSize: '2em' }}>Manage Users</span>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Title</th>
                  <th>role</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>{Array.isArray(this.props.userManagment) && this.renderTableData()}</tbody>
              {/* <tbody>{!this.state.showTable || this.renderTableData()}</tbody> */}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
