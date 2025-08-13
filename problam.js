function totalFine(fare) {
      if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
      }
      let fine = fare + fare * (20 / 100) + 30;
      return fine;
}

console.log(totalFine(200)); // 270
console.log(totalFine(0)); // Invalid
console.log(totalFine(50)); // 90
console.log(totalFine(552)); // 692.4
console.log(totalFine(-35)); // Invalid
console.log(totalFine("65")); // Invalid
console.log(totalFine("Gorib tai ticket katinai")); // Invalid




function onlyCharacter(str) {
if (typeof str !== "string") {
    return "Invalid";
    }

    // let noSpaces = str.replaceAll(" ", "");
    // let noSpaces = str.replace(/\s+/g, "");

    let noSpaces = str.split(" ").join("");
    return noSpaces.toUpperCase();
}
console.log(onlyCharacter("  h e llo wor   ld")); 
console.log(onlyCharacter("Cy   bar- At  tac k  ")); 
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); 
console.log(onlyCharacter("Serv er : : Do wn")); 
console.log(onlyCharacter(["hack", "me"])); 
console.log(onlyCharacter(true));

function bestTeam(player1, player2) {
   if ( typeof player1 !== "object" || 
        typeof player2 !== "object" ||
        player1 === null ||
        player2 === null
   ) {
     return "Invalid";
   }
   let total1 = player1.foul + player1.cardY + player1.cardR;
   let total2 = player2.foul + player2.cardY + player2.cardR;

   if (total1 < total2) {
     return player1.name;
   } 
   else if (total2 < total1) {
     return player2.name;
   } 
   else (total2 = total1) 
     return "Tie";
}


console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
)); // Brazil

console.log(bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
)); // Tie

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
)); // Germany

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    "France"
)); // Invalid




function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       return true;
//     }
//   }
//   return false;
    
}

console.log(isSame([1, 2, 3], [1, 2, 3])); // true
console.log(isSame([34, 5, 7, 9], [34, 5, 7])); // false
console.log(isSame([1, undefined, 3], [1, null, 3])); // false
console.log(isSame([1, 4, 5], [1, 4, 5])); // true
console.log(isSame([1, "4", 4], [1, 4, 4])); // false
console.log(isSame([2, 5, 6], 256)); // Invalid
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6])); // Invalid



function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let total = 0;
  let passCount = 0;
  let failCount = 0;

  for (let mark of marks) {
    total = total + mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }
  let average = (total / marks.length).toFixed();
  // let average = Math.round(total / marks.length);
  return {
    finalScore: average,
    pass: passCount,
    fail: failCount,
  };
}


console.log(resultReport([]));
// { finalScore: 0, pass: 0, fail: 0 }

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// { finalScore: 79, pass: 6, fail: 1 }

console.log(resultReport([99, 87, 67, 12, 87]));
// { finalScore: 70, pass: 4, fail: 1 }

console.log(resultReport([99]));
// { finalScore: 99, pass: 1, fail: 0 }

console.log(resultReport(100));
// Invalid



