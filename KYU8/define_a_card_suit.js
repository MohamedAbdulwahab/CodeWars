/*
DESCRIPTION:
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// solution
function defineSuit(card) {
	if(card[1] === '♣' || card[2] === '♣') {
	  return 'clubs';
	} else if(card[1] === '♦' || card[2] === '♦') {
	  return 'diamonds';
	} else if(card[1] === '♥' || card[2] === '♥') {
	  return 'hearts';
	} else if(card[1] === '♠' || card[2] === '♠') {
	  return 'spades';
	}
}