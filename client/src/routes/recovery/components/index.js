import React from 'react';

class RestoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
  }

  onRecovery = event => {
    event.preventDefault();
     this.props.onRestoreUser(this.email.current.value)
       console.log(this.props.data)
  };

  render() {
    return (
      <form onSubmit={this.onRecovery}>
        <div>
          <input type="email" ref={this.email} />
        </div>
        <div>
          <input type="submit" name="submit" value="recovery" />
        </div>
      </form>
    );
  }
}
export default RestoreComponent;
