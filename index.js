module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  debugger
  var begs, beg, left, right, result;
  // initial a index and b index
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  // initial index. index will be pointing at a or b
  var i = ai;

  // make sure there is an a in the str and b is not at the first position
  if (ai >= 0 && bi > 0) {
    // collection of a indexes
    begs = [];
    // left position
    left = str.length;

    // i must be >=0 but < than char length
    // and there must be no result
    while (i < str.length && i >= 0 && ! result) {
      if (i == ai) {
        // add another a index to begs
        begs.push(i);
        // if there's another a in str
        ai = str.indexOf(a, i + 1);
        // if there is only one a, we got an result!
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        // there are more than one potential a indexes
        beg = begs.pop();
        // if beg is smaller than left
        if (beg < left) {
          // left becomes beg
          left = beg;
          // right becomes b index
          right = bi;
        }

        // if there's another b in str
        bi = str.indexOf(b, i + 1);
      }

      // if a index is greater than 0 and smaller than b index, i become a index.
      i = ai < bi && ai >= 0 ? ai : bi;
    }

    // if there are still something in begs
    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}

range('{', '}', 'e{{few}bb')
