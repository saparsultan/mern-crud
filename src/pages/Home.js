import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <main className="main">
      <div className="main__left main-left">
        <div className="main-left__subtitle">Тестовое задание</div>
        <div className="main-left__title">
          Веб-приложение <br /> на NodeJS + React
        </div>
        <Link to="/friends" className="main-left__link">Перейти</Link>
      </div>

      <div className="main__right main-right">
        <div className="main-right__title">Требования:</div>
        <ul className="main-right__list">
          <li>
            Приложение должно содержать 2 страницы и компонент навигации
            (меню);
          </li>
          <li>
            Первая страница ознакомительная (информационная страница,
            нужно показать навыки в верстке);
          </li>
          <li>
            Вторая страница должна позволять ввести, редактировать и
            удалять текстовые данные, сохранить и удалять их в БД, и
            отобразить список всех сохраненных текстовых значений (текст
            бокс, вводим текст, нажимаем на кнопку, значение сохранилось в
            базе, и список всех значений в базе);
          </li>
          <li>База данных должна быть использована MongoDB.</li>
        </ul>
      </div>
    </main>
  </>
  )
}

export default Home