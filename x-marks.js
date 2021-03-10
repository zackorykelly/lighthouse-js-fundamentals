const finalPosition = function (moves) {
  let position = [0, 0];
  for (move of moves) {
    if (move === 'north') {
      position[1] += 1;
    } else if (move === 'south') {
      position[1] -= 1;
    } else if (move === 'west') {
      position[0] -= 1;
    } else {
      position[0] += 1;
    }
  }
  return position;
}