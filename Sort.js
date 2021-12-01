var dataSet = new Array();
var dataSetSorted = new Array();

// adds item from input field to array and refreshes the displayed list
function addElement(){
	dataSet.push(document.getElementById("input").value)
	document.getElementById("input").value = "";
	refreshSetDisplay();
}

// clears the old data and adds every item to the displayed list
function refreshSetDisplay(){
	clearDisplay();
	dataSet.forEach(element => drawSetItem(element));
}

// adds the dataSet array to the html element
function drawSetItem(element){
	var tag = document.createElement("p");
	var text = document.createTextNode(element); 
	tag.appendChild(text);
	var element = document.getElementById("set");
	element.appendChild(tag);
}

// removes all elements in the set element, for a better display
function clearDisplay(){
	var parent = document.getElementById("set")
	while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// clears the set and every display
function resetSet(){
	dataSet = new Array();
	refreshSetDisplay();
	clearOutput();
}

function sort(){
	// Uses JS default itteration sort. There was no time to implement and debug a faster algorithm. I would have used quick sort, but i could not reseach enough.
	dataSetSorted = dataSet.sort(function(a, b) {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: 'base'
		});
	});
	
	// get order and reverse if neccessary
	var order = document.querySelector('input[name="order"]:checked').value;
	console.log(order);
	if(order == "ascending"){
		//dataSetSorted = dataSet;
	}
	else{
		dataSetSorted = dataSetSorted.reverse();
	}
	
	// display the sorted data;
	displayOutput();
}

// clears the old output and adds every item to the displayed list
function displayOutput(){
	clearOutput();
	dataSetSorted.forEach(element => drawOutputItem(element));
}

// adds the dataSetSorted array to the html element
function drawOutputItem(element){
	var tag = document.createElement("p");
	var text = document.createTextNode(element); 
	tag.appendChild(text);
	var element = document.getElementById("output");
	element.appendChild(tag);
}

// removes all elements in the set element, for a better display
function clearOutput(){
	var parent = document.getElementById("output")
	while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
