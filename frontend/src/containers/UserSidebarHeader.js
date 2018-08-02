import { connect } from 'react-redux';

import SidebarHeader from '../components/SidebarHeader';

const mapStateToProps = state => ({
  currentUser: state.currentUser 
});

export default connect(
  mapStateToProps
)(SidebarHeader);