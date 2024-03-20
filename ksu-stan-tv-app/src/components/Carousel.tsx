import "./Carousel.scss";

import { useEffect, useRef } from "react";

export function Carousel({ children }: { children: any }) {
  // const innerContainer = useRef(null);

  // const parent = () => {
  //   const el = useRef();

  // useEffect(() => {
  //   console.log(innerContainer.current);
  //   if (innerContainer.current) {
  //     console.log(Array.from(innerContainer.current.querySelectorAll("item")));
  //     //       const scrollHandler = (e) => {
  //     //         console.log(e);
  //     //       };
  //     //       el.current.addEventListener("scroll", scrollHandler);
  //     //       return () => {
  //     //         el.current.removeEventListener("scroll", scrollHandler);
  //     //       };
  //   }
  // }, []);

  //   return <Child ref={el} />;
  // };

  // useEffect(() => {
  // const container: HTMLElement = document.querySelector(".container");
  // const innerContainer: HTMLElement =
  //   document.querySelector(".items-container");

  // console.log(innerContainer, container);
  // innerContainer.addEventListener("onkeydown", (e: any) => {
  //   console.log(888);
  // });

  // // innerContainer.onkeydown = checkKey;

  // container.addEventListener("onkeydown",

  // (e: any)=> {
  //   e = e || window.event;

  //   if (e.keyCode == "38") {
  //     // up arrow
  //   } else if (e.keyCode == "40") {
  //     // down arrow
  //   } else if (e.keyCode == "37") {
  //     // left arrow
  //   } else if (e.keyCode == "39") {
  //     // right arrow
  //   }
  // }
  // })
  // }, []);

  function handleArrowKeyNav(e: any): void {
    if (e.keyCode === "37") {
      console.log("left");
    } else if (e.keyCode === "39") {
      console.log("right");
    }
  }

  return (
    <div className="container">
      <div className="items-container" onKeyDown={handleArrowKeyNav}>
        {children}
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <div className="items-container" onKeyDown={handleArrowKeyNav}>
  //       {data.map(({ image, id, title }: ProgramCardProps) => (
  //         <div className="item" key={`carousel-${id}`}>
  //           <ProgramCard id={id} image={image} title={title} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

// document.onkeydown = checkKey;

// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '38') {
//         // up arrow
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//     }

// }

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
