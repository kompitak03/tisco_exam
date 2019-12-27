function reverse_words(word) {
  console.log(
    word
      .split(" ")
      .reverse()
      .join(" ")
  );
}

// reverse_words("I like to read");

function sub(a, b) {
  let txtA = "a".repeat(a),
    txtB = "b".repeat(b),
    arr = [],
    arr2 = [],
    str = "",
    n = 0,
    n2 = 0;

  for (let i = 0; i < Math.ceil(a / 2); i++) {
    arr.push(txtA.slice(n, (n += 2)));
  }

  for (let i = 0; i < Math.ceil(b / 2); i++) {
    arr2.push(txtB.slice(n2, (n2 += 2)));
  }

  for (let o = 0; o < (arr.length + arr2.length) / 2; o++) {
    if (arr[o]) {
      str += arr[o];
    }
    if (arr2[o]) {
      str += arr2[o];
    }
  }

  console.log(str);
}

// sub(3, 4);

let head = 100,
  legs = 300;
function dogbird(head1, legs1) {
  return Number((legs1 - 2 * head1) / 2);
}

// console.log("birds: " + dogbird(head, legs));
// console.log("dogs: " + (head - dogbird(head, legs)));
