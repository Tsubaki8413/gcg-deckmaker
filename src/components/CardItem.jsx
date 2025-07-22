import React from 'react';

const CardItem = ({ card, onAdd, onDetail }) => {
  return (
    <div className="card-item img-contents">
      <div className="tab-img">
        <img src={`/images/${card.image}`} alt={card.name} />
      </div>
      <div className="tab-btn card-buttons">
        <button onClick={() => onAdd(card)}>追加</button>
        <button onClick={() => onDetail(card)}>詳細</button>
      </div>
      <p>{card.name}</p>
      <p>{card.card_number} / {card.color}</p>
      <p>AP: {card.ap} / HP: {card.hp}</p>
    </div>
  );
};

export default CardItem;