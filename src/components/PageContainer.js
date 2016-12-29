import React, { PropTypes } from 'react';

function PageContainer({ children }) {
  return (
    <div className="page-container fade-in-up">
      <div className="page-content-wrapper">
        {children}
      </div>
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageContainer;