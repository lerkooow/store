import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff"></img>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
            {/* <svg className="icon">: Это элемент SVG, который создает контейнер для 
            отображения векторной графики. */}
            {/*<use xlinkHref={${process.env.PUBLIC_URL}/sprite.svg#search} />: Этот элемент <use>
            используется для вставки иконки из внешнего источника, указанного в атрибуте 
            xlinkHref. В данном случае, используется динамический путь к файлу "sprite.svg" 
            в общедоступной директории (process.env.PUBLIC_URL). 
            Затем, используется фрагмент #search для указания конкретной иконки внутри файла SVG. */}
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            ></input>
            {/* Атрибут autoComplete включает/отключает автозаполнение поля. 
            Если автозаполнение включено, то браузер будет автоматически заполнять поля формы, 
            основываясь на значениях, ранее введенных пользователем. */}
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
