/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  let commonLetter = 0;
  const givenArray = givenString.split("");
  const letterArray = letter.split("");
  if (givenArray.length === 0) {
    return commonLetter;
  }
  for (let i = 0; i < letterArray.length; i++) {
    // for (let j = 0; i < givenArray.length; j++) {
    //   if (letterArray[i] === givenArray[j]) {
    //     commonLetter++;
    //   }
    // }
  }
  return commonLetter;
}

export default countLetters;
