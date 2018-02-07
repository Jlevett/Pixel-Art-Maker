/*This was the page Jeremy Built as a requirement for the course*/

//Elements
const colorPicker =  document.querySelector('#colorButton');
const heightBox = document.querySelector('#inputHeight');
const widthBox =  document.querySelector('#inputWidth');
const submitBox = document.querySelector('#submitButton');
const tableArea=document.querySelector('table');

//Global variables: [Set to defaults]
let colorSelected = '#000000';
let height = 1;
let width = 1;

//Event Listeners
colorPicker.addEventListener('change', watchColorPicker, false);
heightBox.addEventListener('input', heightEntered,false);
widthBox.addEventListener('input', widthEntered,false);
submitBox.addEventListener('click',submitPressed,false);
tableArea.addEventListener('click',cellChangeColor,false);

//Color input
function watchColorPicker (color){
	colorSelected=color.target.value;
};
//Height input
function heightEntered(input){
	height = input.target.value;
};
//Width input
function widthEntered(input){
	width = input.target.value;
};

//'Submit' Button input
function submitPressed(){
	while (tableArea.firstChild) 
    	tableArea.removeChild(tableArea.firstChild);
	tableArea.insertAdjacentHTML('afterbegin',makeHTMLTable());
	event.preventDefault();//Needed to add in to prevent form resetting.
}

function makeHTMLTable(){
	let returnString='';
	for(var i=0;i<height;i++){
		returnString+='<tr>';
		for(var j=0;j<width;j++)
			returnString+='<td></td>';
		returnString+='</tr>';
	}
	return returnString;
}

//Changes the cell color
function cellChangeColor(event){
	if(event.path[0].nodeName == "TD")
			event.path[0].style.backgroundColor = colorSelected;
}
