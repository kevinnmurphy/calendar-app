import React from 'react';
import DatePicker from 'react-datepicker';
import { useMutation } from 'react-apollo-hooks';
import {
  EVENTS_QUERY,
  CREATE_EVENT_MUTATION,
  UPDATE_EVENT_MUTATION
} from '../../queries';

import 'react-datepicker/dist/react-datepicker.css';

import './Event.css';

const EventForm = ({ event, closeModal }) => {
  const [startAt, setStartDate] = React.useState(new Date(event.startAt));
  const [endAt, setEndDate] = React.useState(new Date(event.endAt));
  const [title, setTitle] = React.useState(event.title);
  const [email, setEmail] = React.useState(event.email);
  const [description, setDescription] = React.useState(event.description);

  const eventExists = !!event.title;
  const mutationType = eventExists
    ? UPDATE_EVENT_MUTATION
    : CREATE_EVENT_MUTATION;
  const createData = { startAt, endAt, title, email, description };
  const updateData = { ...createData, id: event.id };
  const data = eventExists ? updateData : createData;

  const transformCacheUpdateData = (eventsList, newData) => {
    const mutationResult = eventExists
      ? newData.eventUpdate
      : newData.eventCreate;

    const createTransformation = {
      ...eventsList,
      count: eventsList.count + 1,
      items: [...eventsList.items, mutationResult]
    };

    const updateTransformation = {
      ...eventsList,
      items: eventsList.items.map(item =>
        item.id === mutationResult.id ? mutationResult : item
      )
    };
    return eventExists ? updateTransformation : createTransformation;
  };

  const createUpdateEvent = useMutation(mutationType, {
    variables: {
      data
    },
    update: (cache, { data }) => {
      const { eventsList } = cache.readQuery({
        query: EVENTS_QUERY
      });

      cache.writeQuery({
        query: EVENTS_QUERY,
        data: {
          eventsList: transformCacheUpdateData(eventsList, data)
        }
      });
      
      closeModal();
    }
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createUpdateEvent();
      }}
    >
      <fieldset>
        <div className="container">
          <div className="row">
            <div className="column">
              <label>Start Date</label>
              <DatePicker
                selected={startAt}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </div>
            <div className="column">
              <label>End Date</label>
              <DatePicker
                selected={endAt}
                onChange={date => setEndDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Where should I remind you?"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="What are you up to?"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Where? How? Zoom? Skype"
                id="description"
                columns="50"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column column-50">
              <input
                className="button-primary"
                type="submit"
                value={event && event.title ? 'Update' : 'Create'}
              />
            </div>
            {event.title && (
              <div className="column column-50">
                <input
                  className="button-danger"
                  type="button"
                  onClick={() => {}}
                  value="Delete"
                />
              </div>
            )}
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default EventForm;
