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
  let count = 0
   const array = givenString.split('').map((x) => x === letter ? count ++ : null)
    const result = array.filter((x) => x !== null)
    const sortie = result.length
    return sortie
}

export default countLetters;
