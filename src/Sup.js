import React from 'react';
import moment from 'moment';

let Sup = ({sup}) =>
<div className="sup-container">
    <div className="image-container">
    <div className="foo"></div>
    </div>
    <div className="content-container">
        <div className="username">
            <h3 className="sup-author-time">{sup.author}</h3>&nbsp;• {moment(sup.time).fromNow()}
        </div>
        <p className="sup-body">{sup.body}</p>
    </div>
</div>

export default Sup;


