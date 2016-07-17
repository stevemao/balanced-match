module.exports = balanced;
function balanced(a, b, str) {

}

balanced.range = range;
function range(a, b, str) {
  var ai = str.indexOf(a);
  var bi = str.indexOf(b);

  if (ai === -1) {
    return;
  }

  if (bi < ai) {
    bi = str.indexOf(b, ai + 1);
  }

  if (bi === -1) {
    return;
  }

  var newAi = str.indexOf(a, ai + 1) {
    if (newAi !== -1) {
      ai = newAi;
    }
  }
}
