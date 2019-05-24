import React from 'react';
import Modal from 'react-modal';
import { Mutation } from 'react-apollo';
import { EVENTS_QUERY, CREATE_EVENT_MUTATION } from '../../queries';

import EventForm from '../Event/EventForm';
import './Event.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const EventModal = ({ isOpen, closeModal, event }) => {
  return (
    <Mutation
      mutation={CREATE_EVENT_MUTATION}
      update={(cache, { data: { eventCreate } }) => {
        const { eventsList } = cache.readQuery({
          query: EVENTS_QUERY
        });

        cache.writeQuery({
          query: EVENTS_QUERY,
          data: {
            eventsList: {
              ...eventsList,
              count: eventsList.count + 1,
              items: [...eventsList.items, eventCreate]
            }
          }
        });

        closeModal();
      }}
    >
      {createUpdateEvent => {
        return (
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Event Modal"
          >
            <p onClick={closeModal} className="close">
              X
            </p>
            <EventForm
              key="main"
              event={event}
              createUpdateEvent={createUpdateEvent}
            />
          </Modal>
        );
      }}
    </Mutation>
  );
};

export default EventModal;
