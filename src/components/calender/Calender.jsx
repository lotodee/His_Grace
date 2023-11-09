import React, { useEffect, useState, useRef } from 'react';
import './Calender.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FestivalIcon from '@mui/icons-material/Festival';

const Calendar = ({ setSelectedOption }) => {
  const [active, setActive] = useState('Calendar');
  const calendarRef = useRef(null);
  const newsRef = useRef(null);
  const admissionsRef = useRef(null);

  useEffect(() => {
    if (active === 'Calendar') {
      calendarRef.current.classList.add('highlighted');
      newsRef.current.classList.remove('highlighted');
      admissionsRef.current.classList.remove('highlighted');
    } else if (active === 'News') {
      calendarRef.current.classList.remove('highlighted');
      newsRef.current.classList.add('highlighted');
      admissionsRef.current.classList.remove('highlighted');
    } else if (active === 'Admissions') {
      calendarRef.current.classList.remove('highlighted');
      newsRef.current.classList.remove('highlighted');
      admissionsRef.current.classList.add('highlighted');
    }
  }, [active]);

  const handleItemClick = (option) => {
    setActive(option);
    setSelectedOption(option);
  };

  return (
    <div className="calenderContainer">
      <div ref={calendarRef} className="calender" onClick={() => handleItemClick('Calendar')}>
        <span className="icon">
          <CalendarMonthIcon />
        </span>
        <div className="title">Calendar</div>
      </div>
      <div ref={newsRef} className="calender" onClick={() => handleItemClick('News')}>
        <span className="icon">
          <NewspaperIcon />
        </span>
        <div className="title">News/Events</div>
      </div>
      <div ref={admissionsRef} className="calender" onClick={() => handleItemClick('Admissions')}>
        <span className="icon">
          <FestivalIcon />
        </span>
        <div className="title">Admissions</div>
      </div>
    </div>
  );
};

export default Calendar;