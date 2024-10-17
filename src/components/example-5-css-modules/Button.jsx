// src/components/example-5-css-modules/Button.jsx

import styles from './button.module.css';

const Button = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}</button>;
};

export default Button;
