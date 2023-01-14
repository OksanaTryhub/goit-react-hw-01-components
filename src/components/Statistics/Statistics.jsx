import css from './statistics.module.css';
import PropTypes from 'prop-types';

import getRandomColor from '../../utils/funcRandomColor';

export default function Statistics({ title, stats }) {
  const statElements = stats.map(statElement => (
    <li
      key={statElement.id}
      className={css.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={css.label}>{statElement.label}</span>
      <span className={css.percentage}>{statElement.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{statElements}</ul>
    </section>
  );
}

Statistics.defaltProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
