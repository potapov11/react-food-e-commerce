import React, { useState } from "react";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export default function Categories({ value, onClickCategory }) {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li key={i} onClick={() => onClickCategory(i)} className={value === i ? "active" : ""}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
