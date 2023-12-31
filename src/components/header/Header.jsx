import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faBed,
  faCar,
  faTaxi,
  faPlane,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faHotel} />
              <span>Hotel</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxi</span>
            </div>
          </div>
          <h1 className="headerTitle">
            A lifetime of discounts? It's on us!
          </h1>
          <p className="headerDesc">
            Gain rewards for your travel booking - Unlock instant savings up to
            10% or more ... with our absolutely free Rentro account!
          </p>
          <button className="headerBtn">Sign In / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where to go?"
                className="headerSearchInput"
              />
            </div>

            {/* <div className="headerSearchItem">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="headerIcon"
              />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(
                date[0].startDate,
                "MM/DD/YYYY"
              )} to ${format(date[0].endDate, "MM/DD/YYYY")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div> */}

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText">2 adults 2 children 1 room</span>
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
