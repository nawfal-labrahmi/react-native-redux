import { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

// Access to the state via mapStateToProps, through the connect function.
// Any object returned by this method is available as a prop to the component.
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
