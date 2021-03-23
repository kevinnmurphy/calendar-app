/**
 * What is happening here?
 *
 * 1. Calendar renders with a list of events
 * 2. Give Calendar a custom Popover (EventPopover) component
 *    that will be used to edit events
 * 3. Render a Modal (EventModal) that will be used to create new events
 *
 */

import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import EventPopover from '../Event/EventPopover';
import EventModal from '../Event/EventModal';

import { useQuery } from '@apollo/react-hooks';
import { EVENTS_QUERY } from '../../queries';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import eventsList from './Events';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const transformItems = (eventsList) =>
  eventsList.items.map((item) => {
    return {
      ...item,
      description: item.description || '',
      start: new Date(item.startAt),
      end: new Date(item.endAt),
      //add the rest of the attributes
    };
  });

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, loading } = useQuery(EVENTS_QUERY);

  // if (error) return console.log(error);
  if (loading)
    return (
      <div className='calendar'>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className='calendar'>
      <div style={{ height: '100vh' }}>
        <BigCalendar
          localizer={localizer}
          // events={transformItems(eventsList)}
          events={transformItems(data && data.length > 0 ? data : eventsList)}
          components={{ event: EventPopover }}
          showMultiDayTimes
          selectable
          onSelectSlot={({ start, end }) => {
            setSelectedStartDate(start);
            setSelectedEndDate(end);
            setIsModalOpen(true);
          }}
        />

        <EventModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          event={{
            startAt: selectedStartDate,
            endAt: selectedEndDate,
            title: '',
            description: '',
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
