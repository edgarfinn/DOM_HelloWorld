const text = 'Hello World!'; //<= source text
const arr = text.split(""); //< source text converted to an array
const divDOM = document.createElement('div'); //< create a div
divDOM.id = 'rollercoaster'; // give div id = 'rollercoaster'
document.body.appendChild(divDOM); // append the div to the document body
const div = document.getElementById('rollercoaster'); // assign the div to variable 'div'

var count = 50; // initiate the font size base value to 50, from here it will undulate up and back down again in steps of 15px at a time

//looping through the input string:
for(var i=0;i<arr.length;i+=1) {
    var span = document.createElement('SPAN'); // create a span
    span.appendChild(document.createTextNode(arr[i])); // add the i'th letter from string array to span
    span.style.fontSize = count.toString().concat("px"); // set the font size for the span
    div.appendChild(span); //append this span to the div
    count = count + (i<Math.floor(arr.length/2) ? 15 : -15) // re-set the font-size counter depending on whether i is greater or less than the haf-way point of the array length
}
