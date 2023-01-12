import css from './statistics.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(statEl => (
          <li
            style={{
              backgroundColor: getRandomColor(),
              width: `calc(100% / ${stats.length})`,
            }}
            key={statEl.id}
            className={css.item}
          >
            <span className={css.label}>{statEl.label}</span>
            <span className={css.percentage}>{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
