const judgeVegetable = function (vegetables, metric) {
  let winner = '';
  let winning = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > winning) {
      winning = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;
}
