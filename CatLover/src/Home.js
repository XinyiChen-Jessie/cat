import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007__480.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Buy a toy fish for cat Nene"
            price={10.5}
            rating={5}
            image="https://cdn.pixabay.com/photo/2020/09/27/13/23/cat-5606651__480.jpg"
          />
          <Product
            id="49538094"
            title="Buy a flower for Cat Mimi"
            price={2.0}
            rating={4}
            image="https://cdn.pixabay.com/photo/2016/11/06/19/42/cat-1803904__480.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Buy a cat cake for Coco"
            price={19.99}
            rating={3}
            image="https://cdn.pixabay.com/photo/2021/09/27/06/10/animal-6659568__480.jpg"
          />
          <Product
            id="23445930"
            title="Give Yeye a bath"
            price={9.99}
            rating={5}
            image="https://cdn.pixabay.com/photo/2018/10/16/06/05/cat-3750778__480.jpg"
          />
          <Product
            id="3254354345"
            title="Buy a toy ball for Kiki"
            price={8.99}
            rating={4}
            image="https://cdn.pixabay.com/photo/2016/03/03/20/46/cat-1234998__480.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Buy a bed for Riri"
            price={108.98}
            rating={4}
            image="https://cdn.pixabay.com/photo/2019/05/24/17/17/cat-4226750__480.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
