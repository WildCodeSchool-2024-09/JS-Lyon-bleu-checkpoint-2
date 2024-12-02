/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  let array = [0,1]
  let finalArray = [...array];
  if(size  === 0 || size < 0){
    return []
  }
  

      for (let i = 0; i < size - 1; i++) {
        let sum = array[0] + array[1];
        finalArray.push(sum);
        array = [array[1], sum];
      }
      finalArray.pop()

      return finalArray;
}

export default getFibonacciSequence;
