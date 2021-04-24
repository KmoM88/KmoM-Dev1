let full_str = "images/fulls/";
let thumbs_str = "images/thumbs/";
let mydata_str = JSON.stringify(data);
let mydata_obj = JSON.parse(mydata_str);
// console.log(JSON.parse(mydata_str));
console.log(document.getElementById("main").innerHTML);
for (let j = 1; j <= mydata_obj.length; j++) {
    let i = mydata_obj.length - j;
    document.getElementById("main").innerHTML += '<article class="thumb"><a href="images/fulls/' + mydata_obj[i].name + '" class="image"><img src="images/thumbs/' + mydata_obj[i].name + '" alt="" /></a><h2>' + mydata_obj[i].title + '</h2><p>' + mydata_obj[i].subtitle + '</p></article>'
}

let thumbs = document.getElementById("main").innerHTML
