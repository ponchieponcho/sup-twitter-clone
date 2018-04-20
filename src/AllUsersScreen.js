import React from 'react';
import SupList from './SupList';

class AllUsersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sups: []
        };
    }
    
componentDidMount () {
    this.fetchData();
}

fetchData() {
    fetch('http://localhost:3000/api/posts')
        .then((res) => {
            return res.json();
        })
        .then(sups => {
            this.setState({sups})
        })
}

render() {
    let {sups} = this.state;
    return(
        <SupList sups={sups} />
     )
}
    }

export default AllUsersScreen;
