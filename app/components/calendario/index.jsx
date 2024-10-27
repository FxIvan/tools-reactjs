"use client";
import {
  daysInitials,
  listMonths,
  listYears,
  monthsAndDaysWithYears,
} from "@/constants/dates";
import { useState } from "react";

function SelectorMonths({ months, defaultOption }) {
  const [showOptions, setShowOptions] = useState(false);

  const showListOptions = () => {
    if (!showOptions) return null;
    return (
      <div className="select-list">
        {months.map((month, index) => (
          <button key={index}>{month}</button>
        ))}
      </div>
    );
  };

  const handleShowOption = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="ctn-selector-months">
      <button className="btn-default" onClick={handleShowOption}>
        {defaultOption}
      </button>
      <div className="select-list-ctn">{showListOptions()}</div>
    </div>
  );
}

function SelectorYears({ years, defaultOption }) {
  const [showOptions, setShowOptions] = useState(false);

  const showListOptions = () => {
    if (!showOptions) return null;
    return (
      <div className="select-list">
        {years.map((year, index) => (
          <button key={index}>{year}</button>
        ))}
      </div>
    );
  };

  const handleShowOption = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="ctn-selector-years">
      <button className="btn-default" onClick={handleShowOption}>
        {defaultOption}
      </button>
      <div className="select-list-ctn">{showListOptions()}</div>
    </div>
  );
}

function DatePicker({ dataCalendar, days }) {
  const daysNumber = (dayMax) => {
    const listOfDays = [];
    for (let i = 1; i <= dayMax; i++) {
      listOfDays.push(i);
    }
    return listOfDays;
  };
  return (
    <div className="ctn-date-picker">
      <div className="ctn-calendar">
        {dataCalendar.map((monthAndDay, index) => (
          <div key={index} className="ctn-month">
            <h4>{monthAndDay.month}</h4>
            <div className="ctn-days">
              {days.map((day, index) => (
                <button key={index} className="btn-day">
                  {day}
                </button>
              ))}
            </div>
            <div className="ctn-day-number">
              {daysNumber(monthAndDay.days).map((day, index) => (
                <button key={index} className="btn-number">
                  {day}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="ctn-calendar">
      <div className="ctn-calendar-selector">
        <div className="btn-months">
          <SelectorMonths months={listMonths} defaultOption={listMonths[0]} />
        </div>
        <div className="btn-years">
          <SelectorYears years={listYears} defaultOption={listYears[0]} />
        </div>
      </div>
      <div className="ctn-calendar-date-picker">
        <DatePicker dataCalendar={monthsAndDaysWithYears} days={daysInitials} />
      </div>
      <div className="ctn-calendar-hour-picker">
        <div></div>
      </div>
    </div>
  );
}
