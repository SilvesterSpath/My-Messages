import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ message: { messages, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  /*   const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');

    const data = await res.json();

    setLogs(data);
    setLoading(false);
  }; */

  if (loading || messages === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li>
        <h4 className='center'>Messages</h4>
      </li>
      {!loading && messages.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        messages && messages.map((i) => <LogItem message={i} key={i._id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  message: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getLogs })(Logs);
