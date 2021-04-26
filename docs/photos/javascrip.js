function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

let full_str = "images/fulls/";
let thumbs_str = "images/thumbs/";
let mydata_str = JSON.stringify(data);
let mydata_obj = JSON.parse(mydata_str);
mydata_obj = shuffle(mydata_obj);
// console.log(JSON.parse(mydata_str));
// console.log(document.getElementById("main").innerHTML);
for (let j = 1; j <= mydata_obj.length; j++) {
    let i = mydata_obj.length - j;
    document.getElementById("main").innerHTML += '<article class="thumb"><a href="images/fulls/' + mydata_obj[i].name + '" class="image"><img src="images/thumbs/' + mydata_obj[i].name + '" alt="" /></a><h2>' + mydata_obj[i].title + '</h2><p>' + mydata_obj[i].subtitle + '</p></article>'
}

let thumbs = document.getElementById("main").innerHTML
