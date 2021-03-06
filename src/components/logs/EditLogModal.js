import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState([]);
  const [attention, setAttention] = useState(false);
  const [person, setPerson] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setPerson(current.person);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || person === '') {
      M.toast({ html: 'Please enter a message and person' });
    } else {
      updateLog({
        id: current._id,
        message: message,
        attention: attention,
        person: person,
        date: new Date(),
      });
      M.toast({ html: `Log updated by ${person}` });

      // Clear Fields
      setMessage('');
      setPerson('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Your Message</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='person'
              value={person}
              className='browser-default'
              onChange={(e) => setPerson(e.target.value)}
            >
              <option value=''>Select Person</option>

              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.message.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
