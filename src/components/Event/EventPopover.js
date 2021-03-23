import React from 'react';
import Popover from 'react-popover';

import EventForm from '../Event/EventForm';

const EventPopover = ({ event }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  let title = 'Unknown',
    sqft = '',
    time = '';
  if (event.title) {
    title = event.title;
  }
  if (event.status === 'template' || event.status === 'install') {
    sqft += ` ${event.sqft}sf`;
  }
  if (event.installStart && event.installEnd) {
    time += ` ${event.installStart}-${event.installEnd}`;
  } else if (event.templateStart && event.templateEnd) {
    time += ` ${event.templateStart}-${event.templateEnd}`;
  } else {
    time += ` ${new Date(event.start).getHours()}-${event.end.getHours()}`;
  }

  let color, bg, sfColor;
  if (event.status) {
    switch (event.status) {
      case (event.status = 'template'):
        // color = 'green';
        color = 'rgb(50, 150, 50)';
        bg = 'rgb(200, 255, 200)';
        break;
      case (event.status = 'install'):
        // color = 'blue';
        color = 'rgb(50, 50, 150)';
        bg = 'rgb(200, 200, 255)';
        break;
      case (event.status = 'service'):
        // color = 'red';
        color = 'rgb(150, 50, 50)';
        bg = 'rgb(255, 200, 200)';

        break;
      default:
      // color = 'gray';
    }
  }
  sfColor = event.sqftConfirm ? 'rgb(250, 50, 150)' : 'rgb(255, 150, 50)';

  return (
    <Popover
      isOpen={isPopoverOpen}
      onOuterAction={() => setIsPopoverOpen(false)}
      body={[
        <EventForm
          key={event.id}
          event={event}
          closeModal={() => setIsPopoverOpen(false)}
        />,
      ]}
      tipSize={15}
      appendTarget={document.body}
    >
      {/* <div onClick={() => setIsPopoverOpen(true)}>{event.title}</div> */}
      {/* Set the calendar view props */}
      <div
        onClick={() => setIsPopoverOpen(true)}
        // style={{ color: color }}
        style={{
          backgroundColor: bg,
          color: color,
          // borderLeft: `2px solid ${color}`,
        }}
      >
        {/* Add confirm and set toggle for cheacks */}
        {/* <span>{confirm}</span> */}
        {title}
        <span
          style={{
            color: sfColor,
          }}
        >
          {sqft}
        </span>
        {time}
      </div>
    </Popover>
  );
};
export default EventPopover;
