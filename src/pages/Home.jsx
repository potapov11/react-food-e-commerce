import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = React.useState(0);

  console.log(sortType);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://6672bf766ca902ae11b19b43.mockapi.io/items?category=" + categoryId)
      .then((res) => res.json())
      .then((arr) => {
        setIsLoading(false);
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj, index) => <PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />)}
      </div>
    </>
  );
};

export default Home;
