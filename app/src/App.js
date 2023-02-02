import styles from './App.module.scss'
import TextInput from "./components/TextInput";
import Button from "./components/Button";

function App() {
  return (
    <div className={styles.root}>

      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <p className={styles.headerText}>Sign in</p>

          <TextInput className={styles.textInput} placeholder="Email" />
          <TextInput className={styles.textInput} placeholder="Password" />

          {/* Password rules */}

          {/* OAuth's icons in-line section */}

          <Button className={styles.signInButton}>
            Sign in
          </Button>
        </form>

        <div className={styles.signUp}>
          <p className={styles.dontHaveAnAccount}>Don't have an account?</p>
          <button className={styles.signUpLink}>Sign up</button>
        </div>
      </div>

    </div>
  );
}

export default App;
