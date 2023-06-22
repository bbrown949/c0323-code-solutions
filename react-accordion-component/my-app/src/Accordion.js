import React, { useState } from 'react';

/**
 * Main accordion component. This component will be called in app.js,
 * provides functionality for the topics array in app.js
 * @returns
 */
export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {topics.map((topic) => (
        <Panel
          key={topic.id}
          title={topic.name}
          text={topic.text}
          isActive={activeIndex === topic.id}
          onShow={() =>
            activeIndex === topic.id
              ? setActiveIndex(0)
              : setActiveIndex(topic.id)
          }
        />
      ))}
    </div>
  );
}

function Panel({ title, isActive, onShow, text, key }) {
  return (
    <div onClick={onShow}>
      <h2>{title}</h2>
      <div>{isActive ? <PanelText text={text} /> : undefined}</div>
    </div>
  );
}

function PanelText({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
