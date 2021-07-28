import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ person: { persons, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, [persons]);

  /*   const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');

    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }; */

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Person list</h4>
        <ul className='collection'>
          {!loading &&
            persons !== null &&
            persons.map((i) => <TechItem person={i} key={i._id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  person: state.person,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
