import styles from "./aside.module.css";
import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="Logo Poupapp" />
      <footer className={styles.footer}>
        Desenvolvido por Alura & Alberto. Projeto sem fins comerciais.
      </footer>
    </aside>
  );
};
