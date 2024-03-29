import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import styles from "../../styles/Header.module.css";

import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, cart } = useSelector(({ user }) => user);

  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff"></img>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
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
              onChange={handleSearch}
              value={searchValue}
            ></input>
            {/* Атрибут autoComplete включает/отключает автозаполнение поля. 
            Если автозаполнение включено, то браузер будет автоматически заполнять поля формы, 
            основываясь на значениях, ранее введенных пользователем. */}
          </div>
          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading..."
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
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
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
