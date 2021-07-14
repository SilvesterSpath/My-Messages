import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first- and lastname' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as a person` });
      // Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Person</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              Enter firstname
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='Lastname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Enter lastname
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
