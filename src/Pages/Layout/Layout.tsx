import styles from "./Layout.module.css";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/boxes">Boxes</Link>
        <Link to="/textures">Textures</Link>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};
