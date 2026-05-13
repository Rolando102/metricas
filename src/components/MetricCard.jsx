import styles from './MetricCard.module.css';

const MetricCard = ({ label, value, unit, trend}) => {
  return (
    <article className={styles.card}>
        <h3>{label}</h3>
        <div className={styles.valueBox}>
            <span className={styles.indicador}></span>
            <p>{value} {unit}</p>
            <span className={styles[trend]}></span>
        </div>
    </article> 
  );
};

export default MetricCard;