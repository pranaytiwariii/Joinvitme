import React, { useState, useRef } from 'react';
import './style.css'; // You can create a CSS file to style your components
import LakesideHike from '../Components/bookExperience/LakesideHike'
import Itinerary from './bookExperience/Itinerary';
import Instapics from './Instapics'
import NewCard from './bookExperience/NewCard';
import Things from './bookExperience/Things';
import Inclution from './bookExperience/Inclution';

const topics = [
  { id: 1, name: 'About', content: <LakesideHike /> },
  { id: 2, name: 'Itinerary', content: <Itinerary /> },
  { id: 3, name: 'Images', content: <Instapics /> },
  { id: 4, name: 'Inclusion', content: <Inclution /> },
  { id: 5, name: 'Exclusion', content: <NewCard /> },
  { id: 6, name: 'Things to carry', content: <Things /> },
  // Add more topics as needed
];

const Scroll = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const scrollRef = useRef(null);

  const handleClick = (topicId) => {
    setSelectedTopic(topicId);

    // Scroll to the selected topic content
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.offsetWidth * (topicId - 1);
    }
  };

  return (
    <div className='px-40 py-20'>
      <div className="topic-list flex text-lg justify-between px-40" ref={scrollRef}>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`topic ${selectedTopic === topic.id ? 'selected' : ''}`}
            onClick={() => handleClick(topic.id)}
          >
            {topic.name}
          </div>
        ))}
      </div>

      <div className="content-container">
        {topics.map((topic) => (
          <div key={topic.id} className={`topic-content ${selectedTopic === topic.id ? 'active' : ''}`}>
            {topic.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
