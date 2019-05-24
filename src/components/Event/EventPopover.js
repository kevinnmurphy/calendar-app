import React from 'react';
import Popover from 'react-popover';
import { Mutation } from 'react-apollo';
import {EVENTS_QUERY, UPDATE_EVENT_MUTATION} from '../../queries'

import EventForm from '../Event/EventForm';

const EventItem = ({ event }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      onOuterAction={() => setIsPopoverOpen(false)}
      body={[
        <Mutation
        key={event.id}
          mutation={UPDATE_EVENT_MUTATION}
          update={(cache, { data: { eventUpdate } }) => {
            const { eventsList } = cache.readQuery({
              query: EVENTS_QUERY
            });

            cache.writeQuery({
              query: EVENTS_QUERY,
              data: {
                eventsList: {
                  ...eventsList,
                  count: eventsList.count + 1,
                  items: eventsList.items.map((item) => {
                    if(item.id === eventUpdate.id) {
                      return eventUpdate
                    }
                    return item
                  })
                }
              }
            });

            setIsPopoverOpen(false);
          }}
        >
          {createUpdateEvent => {
            return (
              <EventForm
                
                event={event}
                createUpdateEvent={createUpdateEvent}
              />
            );
          }}
        </Mutation>
      ]}
      tipSize={15}
      appendTarget={document.body}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>{event.title}</div>
    </Popover>
  );
};
export default EventItem;