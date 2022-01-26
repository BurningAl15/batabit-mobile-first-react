/* eslint-disable react/no-unstable-nested-components */
import PropTypes from 'prop-types';
import './style.scss';
import { AiOutlineClockCircle, AiFillEye } from 'react-icons/ai';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function DataCard({ icon, title, description }) {
  function Icon(_icon) {
    switch (_icon) {
      case 0:
        return <AiOutlineClockCircle className="icon" />;
      case 1:
        return <AiFillEye className="icon" />;
      case 2:
        return <MdOutlineAttachMoney className="icon" />;
      case 3:
        return <IoMdCheckmarkCircleOutline className="icon" />;
      default:
        return <AiOutlineClockCircle className="icon" />;
    }
  }

  return (
    <div className="data-card-container">
      {Icon(icon)}
      <p className="data-card-title">{title}</p>
      <p className="data-card-description">{description}</p>
    </div>
  );
}

DataCard.propTypes = {
  icon: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

DataCard.defaultProps = {
  icon: 0,
  title: 'Tiempo real',
  description:
    'Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.',
};

export default DataCard;
