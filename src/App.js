import Header from "./components/Header/Header";
import "./App.css";
import { useTranslation } from "react-i18next";
import Main from "./components/Main/Main";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Main
        title={t("Тест_для_Frontend_разработчиков")}
        time={t("40_мин")}
        dif={t("Возрастающая_сложность")}
        question={t("40_вопросов")}
        subtitle1={t("Добро_пожаловать")}
        subtitle2={t("Тест_будет")}
        start={t("Начать_тест")}
      />
    </>
  );
}

export default App;
