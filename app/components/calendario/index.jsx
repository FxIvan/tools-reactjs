"use client";
import {
  daysInitials,
  listMonths,
  listYears,
  monthsAndDaysWithYears,
} from "@/constants/dates";
import { useState } from "react";

function SelectorMonths({ defaultOption, showOptions, setShowOptions }) {
  const handleShowOption = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="ctn-selector-months">
      <button className="btn-default" onClick={handleShowOption}>
        {defaultOption}
      </button>
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

function DatePicker({ dataCalendar, days, showMonts }) {
  const daysNumber = (dayMax, startingDay) => {
    const listOfDays = [];

    for (let i = 0; i < startingDay; i++) {
      listOfDays.push(null);
    }

    for (let i = 1; i <= dayMax; i++) {
      listOfDays.push(i);
    }

    return listOfDays;
  };

  let startingDay = 0;

  const showDatePick = () => {
    if (!showMonts) return null;
    return (
      <div className="ctn-calendar-date-picker">
        <div className="ctn-date-picker">
          <div className="ctn-calendar">
            {dataCalendar.map((monthAndDay, index) => {
              const daysArray = daysNumber(monthAndDay.days, startingDay);

              startingDay = (startingDay + monthAndDay.days) % 7;

              return (
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
                    {daysArray.map((day, index) => (
                      <button key={index} className="btn-number">
                        {day ? day : ""} {/* Mostrar día o vacío si es null */}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return <>{showDatePick()}</>;
}

export default function Calendar() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="ctn-calendar">
      <div className="ctn-calendar-selector">
        <div className="btn-months">
          <SelectorMonths
            months={listMonths}
            defaultOption={listMonths[0]}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
          />
        </div>
        <div className="btn-years">
          <SelectorYears years={listYears} defaultOption={listYears[0]} />
        </div>
      </div>
      <DatePicker
        dataCalendar={monthsAndDaysWithYears}
        days={daysInitials}
        showMonts={showOptions}
      />
      <div className="ctn-calendar-hour-picker">
        <div></div>
      </div>
    </div>
  );
}
