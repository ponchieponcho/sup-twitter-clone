import React from 'react';
import SupList from './SupList';
import {connect} from 'react-redux';
import {actionUpdateSupList} from './actions/sups';

let mapStateToProps = (state) => {
    return {sups: state.sups};
  }

let mapDispatchToProps = (dispatch) => {
    return {updateSupList: () => {
        fetch('http://localhost:3000/api/posts')
        .then(res => res.json())
        .then(fetchSups => {
            dispatch(actionUpdateSupList(fetchSups))
        })
    }}
}

let AllUsersScreen = ({sups, updateSupList}) => {

   updateSupList();
//     console.log(sups)
    return (
        // <h1>hi</h1>
        <SupList sups={sups} />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersScreen);

