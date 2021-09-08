import React, { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'antd';
import paths from '../../utils/paths';
import { Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, isWide, onClick }) {
  const nav = useRef(null);
  const body = document.querySelector('body');

  if (isOpen && isWide) {
    body.classList.add('scroll-hidden');
  } else {
    body.classList.remove('scroll-hidden');
  }

  useEffect(() => {
    const navigationEl = document.getElementById('header_nav');
    if (navigationEl) {
      navigationEl.addEventListener('click', onClick);
    }
    return () => {
      if (navigationEl) {
        navigationEl.removeEventListener('click', onClick);
      }
    };
  });

  return (
    <CSSTransition
      nodeRef={nav}
      in={isOpen}
      timeout={500}
      classNames="burger-animation"
      unmountOnExit>
      <nav ref={nav} className="mobile-nav" id="header_nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <Button type="default" className="mobile-nav__button">
              <Link to={paths.home}>Home Page</Link>
            </Button>
          </li>
          <li className="mobile-nav__item">
            <Button type="default" className="mobile-nav__button">
              <Link to={paths.partnerLocator}>Partners locator</Link>
            </Button>
          </li>
          <li className="mobile-nav__item">
            <Button type="default" className="mobile-nav__button">
              <Link to={paths.consultantLocator}>Consultants locator</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
}
