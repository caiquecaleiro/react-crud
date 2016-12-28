import React, { PropTypes } from 'react';

function Portlet(props) {
  return (
    <div className="portlet light">
      <div className="portlet-title">
        <div className="caption font-red-sunglo">
          <span className="caption-subject bold uppercase">{props.title}</span>
        </div>
      </div>
      <div className="portlet-body">
        {props.children}
      </div>
    </div>
  );
}

Portlet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Portlet;