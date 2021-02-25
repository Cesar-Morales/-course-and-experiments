let calc = '';
let numInit=false;
let var1; let op1;

document.querySelector(".buttons-container").addEventListener('click', function(event){
    buttonClicked(event.target.innerText)  //console.log(typeof(`${event.target.innerText}`));
})

function buttonClicked(value){
    switch(value){
        case '=':
            handleEquals();
            break;
        case 'C':
            handleClean();
            break;
        case '←':
            handleDeleteLast();
            break;
        default:
            handleDefault(value);
    };
}

function handleEquals(){
    const resolve = var1+op1+calc
    paragraph = document.querySelector('.value');
    calc = '';
    paragraph.innerText = eval(resolve);
}

function handleClean(){
    val = document.querySelector('.value');
    if (!numInit){
        return
    }
    numInit= false;
    calc = '';
    val.innerText = '0';
}

function handleDeleteLast(){
    paragraph = document.querySelector('.value');
    calc = calc.slice(0, -1);
    if(calc === ""){
        numInit=false;
        paragraph.innerText = 0
    } 
    else paragraph.innerText = calc;
}

function handleDefault(value){
    if(isNaN(parseInt(value))){
        operatorFunction(value);
    }else{ 
        numberFunction(value);
    }
}

function operatorFunction(value){
    if(value === '×'){
        op1 = '*';
    } else if (value === '÷'){
        op1 = '/';
    }else{
        op1 = value;
    }
    var1 = calc;
    calc = '';
}

function numberFunction(value){
    numInt=true;
    paragraph = document.querySelector('.value');
    calc += value;
    paragraph.innerText = calc;
}