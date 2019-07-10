import React from 'react';
import { withRouter } from 'react-router';
// import image1 from '../../../images/image1.png';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css'


class ProfileComponent extends React.Component {
  state = { isAdmin: false,
  data: null,
  };

 async componentDidMount() {
  await this.props.getData();
  await this.setState({data: this.props.userManagment})
  console.log('aaaaaaaa', this.props.userManagment)
 }

  render() {
     
    return (
      <div>
        <div className={s.one}>
          <div><img src={logo} className={s.logo} alt='logo'/></div>
        </div>
          <div style={{display:"flex"}}>
            <div className={s.two}></div>
              <div style={{width:"100%", margin:"15px 0px 0px 15px"}}>
                <span style={{fontSize:"2em"}}>Manage Users</span>
                  <table style={{width:"100%"}}>
                   <thead>
                      <tr>
                        <th><input type="checkbox" /></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AAA</td>
                        <td>SS</td>
                        <td>CC</td>
                        <td>discription of title</td>
                        <td>
                          <select>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                          </select>
                        </td>
                        <td>mail@mail.ru</td>
                        <td>
                          <select>
                              <option value="true">True</option>
                              <option value="false">False</option>                             
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>  
          </div>  
      </div>
    );
  }
}

export default withRouter(ProfileComponent);
