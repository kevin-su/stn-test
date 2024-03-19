import "./Carousel.css";

import { Fragment, useEffect } from "react";

// type Caro

export function Carousel({
  data,
  options,
}: {
  data: Array<any>;
  options: any;
}): JSX.Element {
  return (
    <div className="container">
      <div className="items-container">
        {data.map(({ image, id }: { image: string; id: number }) => (
          <Fragment key={`carousel-${id}`}>
            <img src={image} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// useEffect(() => {
// }, []);

// https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2
//https://medium.com/@zenab.awada/creating-a-draggable-carousel-using-javascript-a84337110808
//
// const container: HTMLElement = document.querySelector(".container");
// const innerContainer: HTMLElement =
//   document.querySelector(".items-container");

// container.addEventListener("scroll", (e) => {
//   console.log(888);
// });

// window.addEventListener("scroll", () => {
//   console.log(777);
//   // scrollCount.innerHTML = scroll++;
//   // throttle(() => {
//   //   handleScrollAnimation();
//   //   throttleCount.innerHTML = count++;
//   // }, 250);
// });

// container.addEventListener("scroll", () => {
// console.log(888);
// scrollCount.innerHTML = scroll++;
// throttle(() => {
//   handleScrollAnimation();
//   throttleCount.innerHTML = count++;
// }, 250);
// });

// container.addEventListener("scroll", (e) => {
//   console.log(888);
// });

// let pressed = false;
// let startX = 0;
// let x = 0;

// container.addEventListener("touchmove", (e) => {
//   console.log(999);
// });

// container.addEventListener(
//   "touchmove",
//   function (event) {
//     console.log(999);
//   },
//   false
// );

// container.addEventListener("mouseover", (e) => {
//   pressed = true;
//   startX = e.offsetX - innerContainer.offsetLeft;
//   container.style.cursor = "grabbing";
//   container.style.cursor = "grab";
// });

// container.addEventListener("mouseout", () => {
//   container.style.cursor = "grab";
//   pressed = false;
// });

// // container.addEventListener("mousemove", (e) => {
// //   if (!pressed) return;
// //   e.preventDefault();

// //   x = e.offsetX;
// //   innerContainer.style.left = `${x - startX}px`;
// // });

// let boundItems = () => {
//   let outer = container.getBoundingClientRect();
//   let inner = innerContainer.getBoundingClientRect();

//   if (parseInt(innerContainer.style.left) > 0) {
//     innerContainer.style.left = "0px";
//   }

//   if (inner.right < outer.right) {
//     innerContainer.style.left = `-${inner.width - outer.width}px`;
//   }
// };

// container.addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;
//   innerContainer.style.left = `${x - startX}px`;
//   boundItems();
// });
