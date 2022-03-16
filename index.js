const buttons = document.getElementsByClassName('key_container_keyValue');
const display = document.getElementById('display');
var curr_value =0;
var next_value='';
var operator = null;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        let val = buttons[i].getAttribute('data-value');
        if (val == 'add') {
            curr_value+=Number(next_value);
            next_value='';
            operator='+'
            display.innerHTML=null;
            return;
        }
        if (val == 'sub') {
            curr_value+=Number(next_value);
            next_value='';
            operator='-'
            display.innerHTML=null;
            return;

        }
        if (val == 'multiply') {
            curr_value+=Number(next_value);
            next_value='';
            operator='*'
            display.innerHTML=null;
            return;

        }
        if (val == 'divide') {
            curr_value+=Number(next_value);
            next_value='';
            operator='/'
            display.innerHTML=null;
            return;

        }
        if (val == 'reset') {
            curr_value=0;
            next_value='';
            operator=null;
            display.innerHTML=null;
            return;
        }
        if (val == 'del') {
            next_value=next_value.slice(0,-1);
            display.innerHTML=next_value;
            return;
        }
        if (val == 'equal') {
            if (curr_value!=null && operator != null){
                let ans =calculation(curr_value,next_value,operator);
                display.innerHTML = ans;
                operator=null;
                curr_value=ans;
                next_value='';
            }
            return;
        }
        else {
            next_value+=val;
            display.innerHTML += val;
        }
        e.stopPropagation();
    })
}

var calculation = function(first_val , second_val , operator){
        return eval(first_val+ operator+ second_val )
}
