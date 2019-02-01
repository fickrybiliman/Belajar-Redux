import React from 'react';

// Cara react component mendapatkan state dari redux
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    // Ini ambil state nya dari local state dari App.js
    <h1>
      { props.title }
    </h1>
  )
}

const mapStateToProps = (state) => {
  return {
    title : state.title
  }
}

export default connect(mapStateToProps)(Header);