import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Papa.parse('/data/gundam_cards_template.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setCards(results.data);
      },
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((card, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <img
            src={`/images/${card.image}`}
            alt={card.name}
            style={{ width: '126px', height: '176px' }}
          />
          <div>{card.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;