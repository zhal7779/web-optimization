import React, { useEffect, useRef } from "react";

function Card(props) {
  //이미지 lazy로딩(+ intersection observer)
  const imgRef = useRef(null);

  useEffect(() => {
    const handleObserver = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const pictureElement = target.parentElement;
          const sourceElement = pictureElement.querySelector("source");

          if (sourceElement) {
            sourceElement.srcset = sourceElement.dataset.srcset;
          }

          target.src = target.dataset.src;

          observe.unobserve(entry.target);
        }
      });
    };

    const options = {};

    const observer = new IntersectionObserver(handleObserver, options);

    observer.observe(imgRef.current);
  }, []);

  return (
    <div className="Card text-center">
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} ref={imgRef} alt="board_image" />
      </picture>
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
