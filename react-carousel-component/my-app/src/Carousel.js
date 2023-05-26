import { useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaDizzy,
} from 'react-icons/fa';
import './carousel.css';

export default function Carousel({ data }) {
  const [currentIndex, setIndex] = useState(0);
  const currentImg = data[currentIndex];

  const rightClick = useEffect(() => {
    setIndex((prev) => (prev + 1) % data.length);
  }, [data]);

  function leftClick() {
    setIndex((currentIndex - 1 + data.length) % data.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  function dotClick(index) {
    setIndex(index);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="column-third align-arrows">
          <FaChevronLeft onClick={leftClick} className="arrow" />
        </div>
        <div className=" column-third">
          <img src={currentImg.imgUrl} alt={currentImg.name} />
        </div>
        <div className="column-third align-arrows">
          <FaChevronRight onClick={rightClick} className="arrow" />
        </div>
      </div>
      <div className="row">
        <div className="column-full align-dots">
          {data.map((data, index) => (
            <ProgressDot
              key={data.id}
              currentIndex={currentIndex}
              dotClick={dotClick}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressDot({ index, dotClick, currentIndex }) {
  return (
    <>
      {index === currentIndex ? (
        <FaDizzy size={50} className="dot-button" />
      ) : (
        <FaCircle
          size={50}
          onClick={() => dotClick(index)}
          className="dot-button"
        />
      )}
    </>
  );
}
