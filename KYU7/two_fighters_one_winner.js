/* 
DESCRIPTION:
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

  function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

// solution
function declareWinner(fighter1, fighter2, firstAttacker) {
	let turn = firstAttacker;
	
	// keep fighting until one of the fighters' health <= 0
	while(fighter1.health >= 0 && fighter2.health >= 0) {
	  if(turn === fighter1.name) {
		fighter2.health -= fighter1.damagePerAttack;
		turn = fighter2.name;
	  } else if(turn === fighter2.name) {
		fighter1.health -= fighter2.damagePerAttack;
		turn = fighter1.name;
	  }
	}
	
	// here, one fighter health must be <= 0
	if(fighter1.health <= 0) {
	  return fighter2.name;
	} else if(fighter2.health <= 0) {
	  return fighter1.name;
	}
}