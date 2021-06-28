import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className="">
    <div  className="container">
      <div className="">
        {title && <h2 className={title}>{title}</h2>}
        <ul className="">
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
            //   style={{ }}
            //   className={item}
            >
              <span className={label}>{label}</span>
              <span className={percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;