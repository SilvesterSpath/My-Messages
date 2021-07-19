import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ person: { persons, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    persons != null &&
    persons.map((i) => (
      <option key={i._id} value={`${i.firstName} ${i.lastName}`}>
        {i.firstName} {i.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  person: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  person: state.person,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
