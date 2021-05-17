import { useCounter } from "../lib/counter";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { counter, increase, decrease } = useCounter();

  return (
    <main className={styles.container}>
      <section>
        <span data-testid="counter-value">{counter}</span>
        <button onClick={increase} title="increase counter">
          +1
        </button>
        <button onClick={decrease} title="decrease counter">
          -1
        </button>
      </section>
    </main>
  );
}
