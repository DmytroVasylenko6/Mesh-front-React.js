import React from 'react';
import SubHeader from '../../components/SubHeader';
import SideBar from '../../components/SideBar';
import ProfileForm from '../../components/ProfileForm';
import { Button } from 'antd';
import paths from '../../utils/paths';
import {Link} from "react-router-dom";

export default function ConsultantProfilePage() {
  return (
    <div className="profile-page">
      <SubHeader title="Consultant Profile Page" />
      <div className="profile-page__container container">
        <SideBar>
          <Button type="default" className="sidebar__button">
            <Link to={paths.home}>HomePage</Link>
          </Button>
          <Button type="default" className="sidebar__button">
            <Link to={paths.consultantProfileSettings}>Profile Settings</Link>
          </Button>
        </SideBar>

        <div className="profile-content">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}