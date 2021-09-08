import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Loader() {
  return (
    <CSSTransition timeout={200} classNames="my-node">
      <div className="loader-overlay">
        <div className="water">
          <span className="loader-label">Mesh.</span>
        </div>
      </div>
    </CSSTransition>
  );
}
