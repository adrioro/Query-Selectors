/* Inspector
element
<a href=​"#">​Home​</a>​
element.innerText = "New Home"
"New Home"
*/

//var myElement = document.querySelector("nav ul li a"); // Selects one item.
var navigation = document.querySelectorAll('nav ul li a'); //Selects all the items.

//Dont use globals. Work inside objects instead. This is just for practice purposes.



if (navigation.length) {
    for (item in navigation) {
        var i = navigation[item];
        console.log(i.text + " - " + i.data('href'));

    }
}