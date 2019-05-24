import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './Event.css';

const EventForm = ({ event, createUpdateEvent }) => {
  const [startAt, setStartDate] = React.useState(new Date(event.startAt));
  const [endAt, setEndDate] = React.useState(new Date(event.endAt));
  const [title, setTitle] = React.useState(event.title);
  const [email, setEmail] = React.useState(event.email);
  const [description, setDescription] = React.useState(event.description);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        event.title
          ? createUpdateEvent({
              variables: { data: { id: event.id, startAt, endAt, title, email, description } }
            })
          : createUpdateEvent({
              variables: { data: { startAt, endAt, title, email, description } }
            });
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
           {event.title &&  <div className="column column-50">
              <input
                className="button-danger"
                type="button"
                onClick={() => {
                  
                }}
                value="Delete"
              />
            </div>}
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default EventForm;
