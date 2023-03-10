import styles from './Reviews.module.css';
import PropTypes from 'prop-types';

export default function Reviews({ array }) {
  return array.map(({ author, content, id, updated_at }) => {
    return (
      <article className={styles.coment} key={id}>
        <h3>{author}</h3>
        <b>{updated_at}</b>
        <p>{content}</p>
      </article>
    );
  });
}

Reviews.PropTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ),
};
