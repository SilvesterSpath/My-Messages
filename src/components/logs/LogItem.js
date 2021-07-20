import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ message, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(message._id);
    M.toast({ html: 'Log Deleted' });
  };

  console.log(message);

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            message.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(message)}
        >
          {message.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{message._id} </span>
          last updated by:
          <span className='black-text'> {message.person} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{message.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  message: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
