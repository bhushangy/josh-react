import React from 'react';

function Banner({ variant, action, actionText, children }) {
  return (
    <div className={`${variant} banner`}>
      {children}
      {action && (
        <button onClick={action} className="resetButton">
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
