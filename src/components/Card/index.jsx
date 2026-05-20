import styles from './card.module.css';

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <header className={styles.header}>
        {children}
    </header>
  );
}

const CardBody = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;