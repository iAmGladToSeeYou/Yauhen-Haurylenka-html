var arrDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function CreateElements(tag, className) {
  var elem = document.createElement(tag);
  elem.className = className;
  return elem;
}


var divContainer = CreateElements('div', 'container');
divContainer.style.background = 'url(123.jpg) 50% 50% no-repeat';
divContainer.style.backgroundSize = 'cover';
divContainer.style.width = '420px';
divContainer.style.height = '600px';
divContainer.style.margin = ' 200px auto 0px auto';
divContainer.style.border = '2px solid black';
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'column';
divContainer.style.boxSizing = 'contant-box';
divContainer.style.position = 'relative';
document.body.insertBefore(divContainer, document.body.firstChild);

var divMonthContainer = CreateElements('div', 'monthContainer');
divMonthContainer.style.width = '100%';
divMonthContainer.style.height = '50px';
divMonthContainer.style.borderBottom = '2px solid yellow';
divMonthContainer.style.display = 'flex';
divContainer.insertBefore(divMonthContainer, divContainer.firstChild);

var divMonth = CreateElements('div', 'month');
divMonth.style.width = '80%';
divMonth.style.height = '50px';
divMonth.style.display = 'flex';
divMonth.style.flexDirection = 'column';
divMonth.style.color = 'white';
divMonth.style.fontSize = '36px';
divMonth.style.textAlign = 'center';
divMonth.style.textShadow = '2px 2px 2px blue'
divMonthContainer.insertBefore(divMonth, divMonthContainer.firstChild);

var arrowLeft = CreateElements('div', 'arrowRigth');
arrowLeft.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';
arrowLeft.style.fontSize = '40px';
arrowLeft.style.color = 'white';
arrowLeft.style.width = '10%';
arrowLeft.style.height = '50px';
arrowLeft.style.boxSizing = 'border-box';
divMonthContainer.appendChild(arrowLeft);

var arrowRigth = CreateElements('div', 'arrowLeft');
arrowRigth.innerHTML = '<i class="fas fa-arrow-alt-circle-left"></i>';
arrowRigth.style.fontSize = '40px';
arrowRigth.style.color = 'white';
arrowRigth.style.width = '10%';
arrowRigth.style.height = '50px';
arrowRigth.style.boxSizing = 'border-box';
divMonthContainer.insertBefore(arrowRigth, divMonthContainer.firstChild);

var divDaysNameContainer = CreateElements('div', 'nameContainer');
divDaysNameContainer.style.width = '100%';
divDaysNameContainer.style.height = '50px';
divDaysNameContainer.style.borderBottom = '1px solid grey';
divDaysNameContainer.style.boxSizing = 'border-box';
divDaysNameContainer.style.display = 'flex';
divContainer.appendChild(divDaysNameContainer);

for(var i = 0; i < arrDays.length; i++ ) {
  var divDaysName = CreateElements('div', 'namecontainer_name');
  divDaysName.innerHTML = arrDays[i];
  divDaysName.style.width = '60px';
  divDaysName.style.height = '50px';
  divDaysName.style.fontSize = '20px';
  divDaysName.style.boxSizing = 'border-box';
  divDaysName.style.color = 'white';
  divDaysName.style.textAlign = 'center';
  divDaysName.style.paddingTop = '10px';
  divDaysName.style.textShadow = '3px 3px 2px blue';
  divDaysNameContainer.appendChild(divDaysName);
};

var divDate = CreateElements('div', "daysnumber");
divDate.style.width = '100%';
divDate.style.height = "360px";
divDate.style.borderBottom = "2px solid yellow";
divDate.style.boxSizing = 'border-box';
divDate.style.display = 'flex';
divDate.style.flexWrap = 'wrap';
divContainer.appendChild(divDate);


for(var i = 0; i < 42; i++) {

  var inputData = CreateElements('input', 'daysData');
  inputData.setAttribute('type', 'number');
  inputData.setAttribute('readonly', 'true');
  inputData.style.width = '60px';
  inputData.style.height = '60px';
  inputData.style.fontSize = '22px';
  inputData.style.textAlign = 'center';
  inputData.style.color = 'grey';
  inputData.style.boxSizing = 'border-box';
  inputData.style.backgroundColor = 'transparent';
  inputData.style.border = '1px solid rgba(144, 158, 181, 0.6)';

  divDate.appendChild(inputData);
};

var divDaysInfo = CreateElements("div", 'info');
divDaysInfo.style.width = '100%';
divDaysInfo.style.height = 'auto';
divDaysInfo.style.boxSizing = 'border-box';
divContainer.appendChild(divDaysInfo);


var daysInfo = CreateElements('div', 'daysinfo');
daysInfo.style.width = '150px';
daysInfo.style.height = '300px';
daysInfo.style.position = 'absolute';
daysInfo.style.top = '100px';
daysInfo.style.left = '100%';
daysInfo.style.background = 'url(123.jpg) 50% 50% no-repeat';
daysInfo.style.backgroundSize = 'cover';
daysInfo.style.display = 'none';
daysInfo.style.boxSizing = 'border-box'
divContainer.appendChild(daysInfo);
