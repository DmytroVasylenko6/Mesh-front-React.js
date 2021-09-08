import React from 'react';
import SubHeader from '../../components/SubHeader';
import SideBar from '../../components/SideBar';
import SearchForm from '../../components/SearchForm';
import SearchResultsList from '../../components/SeacrhResultsList/SearchResultsList';
import ForumList from '../../components/ForumList';
import HistoryPartnersList from '../../components/HistoryPartnersList';
import {Button, Grid} from 'antd';
import paths from '../../utils/paths';
import {Link} from "react-router-dom";
const {useBreakpoint} = Grid;

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

const forumList = [
  {
    id: 1,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 2,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 3,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 4,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 5,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 6,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 7,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 8,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 9,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 10,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 11,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 12,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
  {
    id: 13,
    message:
      'Time to bring your ideas to life. Learn everything about the Mac app and its features — from navigating the interface and understanding Symbols, layers and Libraries, to collaborating ',
  },
];

export default function PartnerLocatorPage() {
  const screens = useBreakpoint();

  return (
    <div className="locator locator--partner">
      <SubHeader title="Partner locator" />
      <div className="locator__container container">
        <SideBar>
          <Button type="default" className="sidebar__button">
            <Link to={paths.home}>Home Page</Link>
          </Button>
          {
            screens.lg && (<HistoryPartnersList list={historyList} label="Your Partners" />)
          }
        </SideBar>

        <div className="locator__content">
          <div className="locator__search-container">
            <h2 className="search-title">Search</h2>
            <div className="search">
              <SearchForm
                label="Search by"
                checkBoxValues={['Company', 'Indusrty', 'Location']}
              />
              <p className="search__description">Search result</p>
              <SearchResultsList list={partnersList} />
            </div>
          </div>

          <div className="locator__forum-container">
            <h2 className="forum-title">Industry Forum</h2>
            <div className="forum">
              <ForumList list={forumList} />
            </div>
          </div>

          {
            !screens.lg && (
              <div className="locator__history-container">
                <HistoryPartnersList list={historyList} label="Your Partners" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
