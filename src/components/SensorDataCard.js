import React from "react";
import PropTypes from "prop-types";

const SensorCardComponent = ({ title, content, color, style }) => (
  <div className={`p-4 w-48 rounded-lg ${color}`} style={style}>
    <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
    <p className="text-white text-lg">{content}</p>
  </div>
);

// Define prop types
SensorCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

// Default props
SensorCardComponent.defaultProps = {
  color: "bg-blue-900",
  style: {},
};

export default SensorCardComponent;
