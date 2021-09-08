import React from 'react';
import SubHeader from '../../components/SubHeader';
import SideBar from '../../components/SideBar';
import SearchForm from '../../components/SearchForm';
import SearchResultsList from '../../components/SeacrhResultsList/SearchResultsList';
import HistoryPartnersList from '../../components/HistoryPartnersList';
import { Button, Grid } from 'antd';
import paths from '../../utils/paths';
import {Link} from "react-router-dom";
const { useBreakpoint } = Grid;

const partnersList = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Alex' },
  { id: 5, name: 'Alex' },
  { id: 6, name: 'Alex' },
  { id: 7, name: 'Alex' },
  { id: 8, name: 'Alex' },
  { id: 9, name: 'Alex' },
  { id: 10, name: 'Alex' },
  { id: 11, name: 'Alex' },
  { id: 12, name: 'Alex' },
  { id: 13, name: 'Alex' },
];

const historyList = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Alex' },
  { id: 5, name: 'Alex' },
];

export default function ConsultantLocatorPage() {
  const screens = useBreakpoint();

  return (
    <div className="locator locator--consultant">
      <SubHeader title="Consultant locator" />
      <div className="locator__container container">
        <SideBar>
          <Button type="default" className="sidebar__button">
            <Link to={paths.home}>Home Page</Link>
          </Button>
          {screens.sm && (
            <HistoryPartnersList list={historyList} label="Your Consultants" />
          )}
        </SideBar>

        <div className="locator__content">
          <div className="locator__search-container">
            <h2 className="search-title">Search</h2>
            <div className="search">
              <SearchForm
                label="Expertise"
                checkBoxValues={['Markiting', 'Business', 'Other_______']}
              />
              <p className="search__description">Search result</p>
              <SearchResultsList list={partnersList} />
            </div>
          </div>

          {!screens.sm && (
            <div className="locator__history-container">
              <HistoryPartnersList list={historyList} label="Your Partners" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
