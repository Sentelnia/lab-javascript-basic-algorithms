// Iteration 1: Names and Input

let hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mathilde";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let result = '';
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i];
  if (i !== hacker1.length) {
    result += " ";
  }
};
console.log(result.toUpperCase());

let result2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  result2 += hacker2[i];
};
console.log(result2);

if ( hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?")
};

//bonus
//j'ai ajouté un espace à la fin des deux premiers paragraphes
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo lorem non dolor bibendum varius. Maecenas ut risus quis purus varius vestibulum. Donec et odio ut quam efficitur tempor nec id mi. Pellentesque tempus, tellus at fermentum egestas, arcu nisl iaculis turpis, gravida commodo ipsum odio sed dolor. Fusce posuere non mi a placerat. Donec at lobortis metus. Aliquam mollis quis risus a rhoncus. 

Quisque in magna a lacus malesuada pretium. Vivamus tincidunt a mauris ut eleifend. Aenean et aliquet lorem, eu ullamcorper arcu. Quisque vestibulum sapien eros. In suscipit eros ut congue elementum. Maecenas sem orci, elementum id porttitor a, facilisis at ex. Cras id purus sed ipsum maximus commodo a in libero. Fusce sed tincidunt arcu. Nullam sollicitudin venenatis ipsum volutpat faucibus. Nullam sit amet ornare dui, nec commodo massa. Sed eget lacinia leo, vel convallis mi. Suspendisse ultricies quis dolor ac commodo. 

Integer commodo convallis faucibus. Nam sit amet interdum sem, a rhoncus justo. Nullam condimentum orci vitae dolor congue varius. Integer tempus dolor quis nibh imperdiet, at malesuada est ullamcorper. Nulla a auctor mi, nec consectetur nisl. Ut consequat placerat dui, quis mollis nisi blandit ornare. Maecenas at erat faucibus, dictum nulla ac, rhoncus quam. Fusce eu velit quis erat accumsan semper vel vel libero. In non euismod enim. Nulla sit amet erat leo. Vivamus mi elit, pulvinar ultricies eros at, dignissim tincidunt risus.`

let count = 1 //on commence le compte à un pour commencer avec le premier mot
for (let i = 0 ; i <= lorem.length ; i++) {
  if (lorem[i] === " " ){
    count += 1;
  } 
}
console.log(count);

//Normalement on tombe bien sur 228

//compte des Et .. Il doit y avoir plus simple XD , mais par ex avec includes , il e compte aussi les et contenu dans d'autres mots
let countEt = 0
for (let i = 0 ; i <= lorem.length ; i++) {
  if (lorem[i-1] === " " && lorem[i] === "e" && lorem[i+1] === "t" && lorem[i + 2] === " ") {
    countEt += 1;
  }
}
console.log(countEt);