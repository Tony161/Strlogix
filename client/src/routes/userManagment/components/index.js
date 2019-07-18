import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: true,
      userManagment: null,
      roleValue: null,
      activeValue: null,
      id: null,
    };
  }

  handleChange = id => event => {
    this.setState({ id, roleValue: event.target.value });
  };

  activeChange = id => event => {
    this.setState({ id, activeValue: event.target.value });
  };

  componentDidMount() {
    this.props.getData();
  }

  renderTableData() {
    return this.props.userManagment.map((data, index) => {
      const { id, firstName, lastName, title, role, email, active } = data; //destructuring
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{title}</td>
          {this.state.isAdmin ? (
            <td>
              <select
                id="Role"
                onChange={this.handleChange(id)}
                ref={ref => {
                  this.select = ref;
                }}
                defaultValue={role}
              >
                <option value="admin">admin</option>
                <option value="user">user</option>
                <option value="editor">editor</option>
              </select>
            </td>
          ) : (
            <td>{role}</td>
          )}
          <td>{email}</td>
          <td>
            <select
              id="Active"
              onChange={this.activeChange(id)}
              ref={ref => {
                this.select = ref;
              }}
              defaultValue={active}
            >
              {/* <option>{active}</option> */}
              <option value="0">false</option>
              <option value="1">true</option>
            </select>
          </td>
        </tr>
      );
    });
  }

  editProfile = () => {
    if (this.state.roleValue == null) {
      this.props.updateData(
        this.state.id,
        document.getElementById('Role').value,
        this.state.activeValue,
      );
    } else if (this.state.activeValue == null) {
      this.props.updateData(
        this.state.id,
        this.state.roleValue,
        document.getElementById('Active').value,
      );
    } else {
      this.props.updateData(
        this.state.id,
        this.state.roleValue,
        this.state.activeValue,
      );
    }
  };

  toggleState = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  saveBtn = () => {
    this.editProfile(this.firstName, this.lastName, this.title);
    this.toggleState();
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
          <div style={{ width: '100%', margin: '15px 0px 0px 15px' }}>
            <span style={{ fontSize: '2em' }}>Manage Users</span>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Title</th>
                  <th>role</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(this.props.userManagment) &&
                  this.renderTableData()}
              </tbody>
              {/* <tbody>{!this.state.showTable || this.renderTableData()}</tbody> */}
            </table>
            <div style={{ margin: '2em 0em 0em 0em' }}>
              <button
                onClick={this.editProfile}
                type="button"
                className="btn btn-rounded"
                disabled={!this.state.id}
              >
                Save Changes
              </button>
              <button
                style={{ float: 'right', marginRight: '5em' }}
                onClick={this.props.inviteUsers}
                type="button"
                className="btn btn-rounded"
              >
                Invite Users
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
