const majorScales = {
  C: {
    1: 'C',
    2: 'D',
    3: 'E',
    4: 'F',
    5: 'G',
    6: 'A',
    7: 'B',
  },
  G: {
    1: 'G',
    2: 'A',
    3: 'B',
    4: 'C',
    5: 'D',
    6: 'E',
    7: 'F#'
  },
  D: {
    1: 'D',
    2: 'E',
    3: 'F#',
    4: 'G',
    5: 'A',
    6: 'B',
    7: 'C#'
  },
  A: {
    1: 'A',
    2: 'B',
    3: 'C#',
    4: 'D',
    5: 'E',
    6: 'F#',
    7: 'G#'
  },
  E: {
    1: 'E',
    2: 'F#',
    3: 'G#',
    4: 'A',
    5: 'B',
    6: 'C#',
    7: 'D#',
  },
  B: {
    1: 'B',
    2: 'C#',
    3: 'D#',
    4: 'E',
    5: 'F#',
    6: 'G#',
    7: 'A#',
  },
  Fsharp: {
    1: 'F#',
    2: 'G#',
    3: 'A#',
    4: 'B',
    5: 'C#',
    6: 'D#',
    7: 'E#',
  },
  Gflat: {
    1: 'Gb',
    2: 'Ab',
    3: 'Bb',
    4: 'Cb',
    5: 'Db',
    6: 'Eb',
    7: 'F'
  },
  Dflat: {
    1: 'Db',
    2: 'Eb',
    3: 'F',
    4: 'Gb',
    5: 'Ab',
    6: 'Bb',
    7: 'C'
  },
  Aflat: {
    1: 'Ab',
    2: 'Bb',
    3: 'C',
    4: 'Db',
    5: 'Eb',
    6: 'F',
    7: 'G',
  },
  Eflat: {
    1: 'Eb',
    2: 'F',
    3: 'G',
    4: 'Ab',
    5: 'Bb',
    6: 'C',
    7: 'D',
  },
  Bflat: {
    1: 'Bb',
    2: 'C',
    3: 'D',
    4: 'Eb',
    5: 'F',
    6: 'G',
    7: 'A',
  },
  F: {
    1: 'F',
    2: 'G',
    3: 'A',
    4: 'Bb',
    5: 'C',
    6: 'D',
    7: 'E',
  }
}

const findMajorKeyChords = (mKey) => {

  switch (mKey) {
    case 'F#':
      mKey = 'Fsharp';
      break;
    case 'Gb':
      mKey = 'Gflat';
      break;
    case 'Db':
      mKey = 'Dflat';
      break;
    case 'Ab':
      mKey = 'Aflat';
      break;
    case 'Eb':
      mKey = 'Eflat';
      break;
    case 'Bb':
      mKey = 'Bflat';
      break;
  }

  if (!majorScales.hasOwnProperty(mKey)) {
    return console.log('Not a key!');
  };

  for (let key in majorScales) {
    if (key == mKey) {
      let extractedScale = Object.values(majorScales[key]);

      let scale = [...extractedScale]

      for (let i = 0; i < extractedScale.length; i++) {
        scale.push(extractedScale[i])
      }

      let chordArr = [];

      for (let i = 0; i < 7; i++) {
        chordArr.push([`${i + 1} chord: `, scale[i], scale[i + 2], scale[i + 4]]);
      }

      return chordArr;
    }
  }
}

const chordNames = (majorKeyChordArr) => {
  let arr = [];

  for (let i = 0; i < majorKeyChordArr.length; i++) {
    switch (i) {
      case 0:
        arr.push(majorKeyChordArr[i][1] + ' major');
        break;
      case 1:
        arr.push(majorKeyChordArr[i][1] + ' minor');
        break;
      case 2:
        arr.push(majorKeyChordArr[i][1] + ' minor');
        break;
      case 3:
        arr.push(majorKeyChordArr[i][1] + ' major');
        break;
      case 4:
        arr.push(majorKeyChordArr[i][1] + ' major');
        break;
      case 5:
        arr.push(majorKeyChordArr[i][1] + ' minor');
        break;  
      case 6:
        arr.push(majorKeyChordArr[i][1] + ' diminished');
        break;
      default:
        break;
      }
    }
    return arr;
  }

let keyOfG =findMajorKeyChords('Db');
let keyOfGChordNames = chordNames(keyOfG);
console.log(keyOfGChordNames);

/**
 * Features to implement
 */
