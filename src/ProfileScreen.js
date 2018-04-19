import React from 'react';
import SupList from './SupList';

let filterSups = (sups, userName) => {
    return sups.filter(sup => userName === sup.name);
}

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sups: [],
            match: props.match.params
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
    let {sups, match} = this.state;
    let newSups = filterSups(sups, match.id)
    
    return(
        <SupList sups={newSups} />
     )
}
    }

export default ProfileScreen