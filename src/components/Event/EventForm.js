import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import {
  useCreateUpdateMutation,
  useDeleteMutation,
} from './eventMutationHooks';

import 'react-datepicker/dist/react-datepicker.css';

import './Event.css';

const EventForm = ({ event, closeModal }) => {
  // const [startAt, setStartDate] = useState(new Date(event.startAt));
  // const [endAt, setEndDate] = useState(new Date(event.endAt));
  const [title, setTitle] = useState(event.title);
  const [type, setType] = useState(event.type);
  const [status, setStatus] = useState(event.status || 'none');

  const [sqft, setSqft] = useState(event.sqft);
  const [sqftConfirm, setSqftConfirm] = useState(event.sqftConfirm || false);

  const [templateStart, setTemplateStart] = useState(new Date(event.startAt));
  const [templateEnd, setTemplateEnd] = useState(
    templateStart.getTime() + 2 * 60 * 60 * 1000
  );
  const [templateConfirm, setTemplateConfirm] = useState(
    event.templateConfirm || false
  );

  const [installStart, setInstallStart] = useState(event.installStart || '');
  const [installEnd, setInstallEnd] = useState(event.installEnd || '');
  const [installConfirm, setInstallConfirm] = useState(
    event.installConfirm || false
  );

  const [notes, setNotes] = useState(event.notes);

  const [balanceCollected, setBalanceCollected] = useState(
    event.balanceCollected || false
  );

  const [customerName, setCustomerName] = useState(event.customerName || '');
  const [customerPhone, setCustomerPhone] = useState(event.customerPhone || '');
  const [customerEmail, setCustomerEmail] = useState(event.customerEmail || '');

  const [jobContact, setJobContact] = useState(event.jobContact || '');
  const [jobPhone, setJobPhone] = useState(event.jobPhone || '');
  const [jobLocation, setJobLocation] = useState(event.jobLocation || '');

  const payload = {
    title,
    type,
    status,
    sqft,
    sqftConfirm,
    customerName,
    customerPhone,
    customerEmail,
    jobContact,
    jobPhone,
    jobLocation,
    templateStart,
    templateEnd,
    templateConfirm,
    installStart,
    installEnd,
    installConfirm,
    notes,
    balanceCollected,
  };

  const eventExists = !!event.title;

  const createUpdateEvent = useCreateUpdateMutation(
    payload,
    event,
    eventExists,
    () => closeModal()
  );
  const deleteEvent = useDeleteMutation(event, () => closeModal());

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createUpdateEvent();
      }}
    >
      <fieldset>
        <div className='container'>
          <div className='row'>
            <div className='column'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Event name'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Type</label>
              <select
                id='project_type'
                placeholder='-Select-'
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='commercial'>Commercial</option>
                <option value='residential' selected='true'>
                  Residential
                </option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Status</label>
              <select
                id='project_status'
                placeholder='-Select-'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='none'>None</option>
                <option value='template'>Template</option>
                <option value='install'>Install</option>
                <option value='service'>Service</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Square Feet</label>
              <input
                type='number'
                placeholder='0'
                id='sqft'
                value={sqft}
                min='0'
                max='10000'
                onChange={(e) => setSqft(e.target.value)}
              />
            </div>
            <div className='row'>
              <label>Confirmed</label>
              <input
                type='checkbox'
                id='sqftconfirm'
                value={sqftConfirm}
                onChange={(e) => setSqftConfirm(e.target.value)}
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Customer</label>
              <label>Name</label>
              <input
                type='text'
                placeholder='First Last'
                id='customerName'
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <label>Phone</label>
              <input
                type='phone'
                placeholder='123-456-7890'
                id='customerName'
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
              <label>Email</label>
              <input
                type='email'
                placeholder='Email@gmail.com'
                id='customerEmail'
                value={setCustomerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Job</label>
              <label>Contact</label>
              <input
                type='text'
                placeholder='First Last'
                id='jobContact'
                value={jobContact}
                onChange={(e) => setJobContact(e.target.value)}
              />
              <label>Phone</label>
              <input
                type='phone'
                placeholder='123-456-7890'
                id='jobPhone'
                value={jobPhone}
                onChange={(e) => setJobPhone(e.target.value)}
              />
              <label>Location</label>
              <input
                type='text'
                placeholder='Address'
                id='jobLocation'
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Template</label>
            </div>
            <div className='row'>
              <label>Confirmed</label>
              <input
                type='checkbox'
                id='templateconfirm'
                value={templateConfirm}
                onChange={(e) => setTemplateConfirm(e.target.value)}
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Start</label>
              <DatePicker
                selected={templateStart}
                onChange={(date) => setTemplateStart(date)}
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeCaption='time'
                showTimeInput
              />
            </div>
            <div className='column'>
              <label>End</label>
              <DatePicker
                selected={templateEnd}
                onChange={(date) => setTemplateEnd(date)}
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeCaption='time'
                showTimeInput
              />
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Install</label>
            </div>
            <div className='row'>
              <label>Confirmed</label>
              <input
                type='checkbox'
                id='installconfirm'
                value={installConfirm}
                onChange={(e) => setInstallConfirm(e.target.value)}
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Start</label>
              <DatePicker
                selected={installStart}
                onChange={(date) => setInstallStart(date)}
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeCaption='time'
                showTimeInput
              />
            </div>

            <div className='column'>
              <label>End</label>
              <DatePicker
                selected={installEnd}
                onChange={(date) => setInstallEnd(date)}
                timeFormat='HH:mm'
                timeIntervals={15}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeCaption='time'
                showTimeInput
              />
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label>Balance</label>
            </div>
            <div className='row'>
              <label>Collected</label>
              <input
                type='checkbox'
                id='balanceCollected'
                value={balanceCollected}
                onChange={(e) => setBalanceCollected(e.target.value)}
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='column'>
              <label htmlFor='notes'>Additional Notes</label>
              <textarea
                placeholder='Additional notes'
                id='notes'
                columns='50'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='column column-50'>
              <input
                className='button-primary'
                type='submit'
                value={eventExists ? 'Update' : 'Create'}
              />
            </div>
            {eventExists && (
              <div className='column column-50'>
                <input
                  className='button-danger'
                  type='button'
                  onClick={deleteEvent}
                  value='Delete'
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
