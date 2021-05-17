import { useCounter } from "../lib/counter";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { counter, increase, decrease } = useCounter();

  return (
    <main className={styles.container}>
      <section>
        <span>{counter}</span>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </section>
    </main>
  );
}
