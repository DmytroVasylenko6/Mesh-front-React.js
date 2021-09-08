import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import MobileMenu from '../MobileMenu';
import paths from '../../utils/paths';
import { Grid } from 'antd';
import defaultAvatar from '../../images/default-avatar.svg';
import logoHeader1x from '../../images/mesh-header.png';
import logoHeader2x from '../../images/mesh-header@2x.png';
import logoHeader3x from '../../images/mesh-header@3x.png';

const { useBreakpoint } = Grid;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const screens = useBreakpoint();
  const isWide = screens.xl;

  const lines = ['lines'];

  if (isOpen) {
    lines.push('active');
  }

  const toggling = () => setIsOpen(!isOpen);
  const handleClickNavItem = e => {
    if (e.target.nodeName === 'A') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <header className="site-header">
        <Container>
          {!isWide && (
            <>
              <div
                onClick={() => toggling()}
                className={classNames(lines.join(' '))}
                role="button"
                aria-label="toggle menu button"
                aria-expanded={isOpen}
                aria-controls="header_nav">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="site-header__logo-container">
                <Link to={paths.home} className="logo-link">
                  <img
                    className="site-header__logo"
                    srcSet={`${logoHeader1x} 1x, ${logoHeader2x} 2x, ${logoHeader3x} 3x`}
                    src={logoHeader1x}
                    alt="logo"
                    width="94"
                    height="25"
                  />
                </Link>
              </div>
            </>
          )}
          <div className="site-header__user-container">
            <button type="button" className="notification-button">
              <span className="active-notification"></span>
            </button>
            <img
              className="history-partners__image"
              src={defaultAvatar}
              alt="avatar"
              width="30"
              height="30"
            />
          </div>
        </Container>
        {!isWide ? (
          <MobileMenu
            isOpen={isOpen}
            isWide={isWide}
            onClick={handleClickNavItem}
          />
        ) : (
          ''
        )}
      </header>
    </>
  );
}
