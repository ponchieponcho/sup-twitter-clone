import React from 'react';
import moment from 'moment';
import {HashRouter as NavLink} from 'react-router-dom';

let AuthorLink = ({sup}) => {
    // console.log(sup)
    return (<NavLink to={{pathname: `/users/${sup.name}`}}>{sup.name}</NavLink>)
}

let Sup = ({sup}) =>
<div className="sup-container">
    <div className="image-container">
    <img src={sup.thumbnailUrl} className="profile-image" alt="pic"/>
    </div>
    <div className="content-container">
        <div className="username">
            <h3 className="sup-author-time">{sup.name}</h3>&nbsp;• {moment(sup.time).fromNow()}
        </div>
        <p className="sup-body">{sup.body}</p>
    </div>
</div>

export default Sup;


