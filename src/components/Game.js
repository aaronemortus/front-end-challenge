import React, {useState, useEffect, useContext} from 'react';
import Card from './Card';
import {shuffle, sleep} from '../helpers/functions'

const Game = () => {
  const [currentCard1, setcurrentCard1] = useState(null);
  const [currentCard2, setcurrentCard2] = useState(null);
  const [movments, setmovments] = useState(0);
  const [success, setsuccess] = useState(false);
  const [card1, setcard1] = useState({idx: 1, tag: '001', match: false, click: false});
  const [card2, setcard2] = useState({idx: 2, tag: '001', match: false, click: false});
  const [card3, setcard3] = useState({idx: 3, tag: '002', match: false, click: false});
  const [card4, setcard4] = useState({idx: 4, tag: '002', match: false, click: false});
  const [card5, setcard5] = useState({idx: 5, tag: '003', match: false, click: false});
  const [card6, setcard6] = useState({idx: 6, tag: '003', match: false, click: false});
  const [card7, setcard7] = useState({idx: 7, tag: '004', match: false, click: false});
  const [card8, setcard8] = useState({idx: 8, tag: '004', match: false, click: false});
  const [card9, setcard9] = useState({idx: 9, tag: '005', match: false, click: false});
  const [card10, setcard10] = useState({idx: 10, tag: '005', match: false, click: false});
  const [card11, setcard11] = useState({idx: 11, tag: '006', match: false, click: false});
  const [card12, setcard12] = useState({idx: 12, tag: '006', match: false, click: false});
  const [card13, setcard13] = useState({idx: 13, tag: '007', match: false, click: false});
  const [card14, setcard14] = useState({idx: 14, tag: '007', match: false, click: false});
  const [card15, setcard15] = useState({idx: 15, tag: '008', match: false, click: false});
  const [card16, setcard16] = useState({idx: 16, tag: '008', match: false, click: false});
  const [card17, setcard17] = useState({idx: 17, tag: '009', match: false, click: false});
  const [card18, setcard18] = useState({idx: 18, tag: '009', match: false, click: false});
  const [cs, setcs] = useState([]);

  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  useEffect(() => {
    setcs(shuffle(array));
  }, []);

  useEffect(async () => {
    if (currentCard1 !== null && currentCard2 !== null){
      if (currentCard1.tag === currentCard2.tag){
        matchCard(currentCard1.tag);
        setmovments(movments + 1);
      } else {
        await sleep(500);
        cleanClicks();
      }

      setcurrentCard1(null);
      setcurrentCard2(null);
    }

    if (movments === 9) {
      setsuccess(true);
    }
  }, [currentCard1, currentCard2])



  const matchCard = tag => {
    switch (tag) {
      case '001':
        setcard1({
          ...card1,
          match: true
        })
        setcard2({
          ...card2,
          match: true
        })
        break;

      case '002':
        setcard3({
          ...card3,
          match: true
        })
        setcard4({
          ...card4,
          match:true
        })
        break;

      case '003':
        setcard5({
          ...card5,
          match:true
        })

        setcard6({
          ...card6,
          match:true
        })

        break;

      case '004':
        setcard7({
          ...card7,
          match:true
        })

        setcard8({
          ...card8,
          match:true
        })

        break;

      case '005':
        setcard9({
          ...card9,
          match:true
        })

        setcard10({
          ...card10,
          match:true
        })

        break;

      case '006':
        setcard11({
          ...card11,
          match:true
        })

        setcard12({
          ...card12,
          match:true
        })

        break;

      case '007':
        setcard13({
          ...card13,
          match:true
        })

        setcard14({
          ...card14,
          match:true
        })

        break;

      case '008':
        setcard15({
          ...card15,
          match:true
        })

        setcard16({
          ...card16,
          match:true
        })

        break;

      case '009':
        setcard17({
          ...card17,
          match:true
        })

        setcard18({
          ...card18,
          match:true
        })

        break;

        default:
          break;
        }
    }

  const selectCard = card => {
    if (currentCard1 === null && currentCard2 === null) {
      setcurrentCard1(card);
      return
    }else if (currentCard1 !== null && currentCard2 === null) {
      setcurrentCard2(card);
      return
    }
  }

  const clickCard = card =>{
    selectCard(card)
    switch (card.idx) {
      case 1:
        setcard1({
          ...card1,
          click: true
        })
        break;

      case 2:
        setcard2({
          ...card2,
          click: true
        })
        break;

      case 3:
        setcard3({
          ...card3,
          click: true
        })
        break;

      case 4:
        setcard4({
          ...card4,
          click: true
        })
        break;

      case 5:
        setcard5({
          ...card5,
          click: true
        })
        break;

      case 6:
        setcard6({
          ...card6,
          click: true
        })
        break;

      case 7:
        setcard7({
          ...card7,
          click: true
        })
        break;

      case 8:
        setcard8({
          ...card8,
          click: true
        })
        break;

      case 9:
        setcard9({
          ...card9,
          click: true
        })
        break;

      case 10:
        setcard10({
          ...card10,
          click: true
        })
        break;


      case 11:
        setcard11({
          ...card11,
          click: true
        })
        break;

      case 12:
        setcard12({
          ...card12,
          click: true
        })
        break;

      case 13:
        setcard13({
          ...card13,
          click: true
        })
        break;

      case 14:
        setcard14({
          ...card14,
          click: true
        })
        break;

      case 15:
        setcard15({
          ...card15,
          click: true
        })
        break;

      case 16:
        setcard16({
          ...card16,
          click: true
        })
        break;

      case 17:
        setcard17({
          ...card17,
          click: true
        })
        break;

      case 18:
        setcard18({
          ...card18,
          click: true
        })
        break;

        default:
          break;
        }
    }

  const cleanClicks = () => {
    setcard1({
      ...card1,
      click: false
    })
    setcard2({
      ...card2,
      click: false
    })
    setcard3({
      ...card3,
      click: false
    })
    setcard4({
      ...card4,
      click: false
    })
    setcard5({
      ...card5,
      click: false
    })
    setcard6({
      ...card6,
      click: false
    })
    setcard7({
      ...card7,
      click: false
    })
    setcard8({
      ...card8,
      click: false
    })
    setcard9({
      ...card9,
      click: false
    })
    setcard10({
      ...card10,
      click: false
    })
    setcard11({
      ...card11,
      click: false
    })
    setcard12({
      ...card12,
      click: false
    })
    setcard13({
      ...card13,
      click: false
    })
    setcard14({
      ...card14,
      click: false
    })
    setcard15({
      ...card15,
      click: false
    })
    setcard16({
      ...card16,
      click: false
    })
    setcard17({
      ...card17,
      click: false
    })
    setcard18({
      ...card18,
      click: false
    })
  }

  const returnCard = idx => {
    switch (idx) {
      case 0:
        return card1;
      case 1:
        return card2;
      case 2:
        return card3;
      case 3:
        return card4;
      case 4:
        return card5;
      case 5:
        return card6;
      case 6:
        return card7;
      case 7:
        return card8;
      case 8:
        return card9;
      case 9:
        return card10;
      case 10:
        return card11;
      case 11:
        return card12;
      case 12:
        return card13;
      case 13:
        return card14;
      case 14:
        return card15;
      case 15:
        return card16;
      case 16:
        return card17;
      case 17:
        return card18;
    }
  }

  return (
    <div className='row game'>
      {
        cs.length > 0 ? (
          cs.map(idx =>
            <Card
              key={idx}
              card={returnCard(idx)}
              selectCard={selectCard}
              clickCard={clickCard}
            />
          )
        ) : null
      }

      {
        success === true ? <h1 className='display-5 text-center'>¡Felicidades! Haz terminado</h1> : null
      }
    </div>
    );
}

export default Game;
