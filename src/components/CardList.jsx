import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import CardItem from './CardItem';
import '../styles/style.css'; // 統合CSSの読み込み

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Papa.parse('/data/gundam_cards_template_cleaned.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setCards(results.data);
      },
    });
  }, []);

  const handleAdd = (card) => {
    console.log('追加:', card);
    // 今後デッキに追加する処理をここに書く
  };

  const handleDetail = (card) => {
    console.log('詳細:', card);
    // 今後モーダル表示などをここに書く
  };

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <CardItem
          key={index}
          card={card}
          onAdd={handleAdd}
          onDetail={handleDetail}
        />
      ))}
    </div>
  );
};

export default CardList;