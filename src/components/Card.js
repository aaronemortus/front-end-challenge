import React, {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({card, clickCard}) => {
    return (
            <ReactCardFlip isFlipped={card.match === true ? true : card.click} flipDirection="horizontal" containerClassName="col-md-2 col-sm-4 col-4 card p-3">
                <div>
                    <img alt='reverse' onClick={() => clickCard(card)} src={window.location.origin + '/static/img/cover.png'} />
                </div>

                <div>
                    <img alt={'flip-' + card.tag + '-' +card.idx} src={window.location.origin + '/static/img/' + card.tag +'.png'} />
                </div>
            </ReactCardFlip>

    );
}

export default Card;
