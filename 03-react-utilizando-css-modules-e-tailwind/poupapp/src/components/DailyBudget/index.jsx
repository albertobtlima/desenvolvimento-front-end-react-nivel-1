import styles from "./dailybudget.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const DailyBudget = ({ value }) => {
  return <p className={styles.dailybudget}>{formater.format(value)}</p>;
};
