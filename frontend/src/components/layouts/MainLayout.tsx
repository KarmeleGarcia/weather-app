import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Navbar } from '../../organisms/Navbar';
//import { Footer } from '../../organisms/Footer';

export function MainLayout() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" end>
          {t("nav.home")}
        </NavLink>
      </nav>
      <main className="main-content">
        <Outlet /> {/* The active page renders here */}
      </main>
    </>
  );
}
