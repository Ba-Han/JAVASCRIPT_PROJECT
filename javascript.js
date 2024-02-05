var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('operator');

for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        //console.log(this.id);
        var outputValue = document.getElementById('output-value').innerHTML;
        document.getElementById('output-value').innerHTML = outputValue + this.id;
    });
}

for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if(this.id == 'clear') {
            document.getElementById('output-value').innerHTML = '';
            document.getElementById('history-value').innerHTML = '';
        } else if(this.id == 'backspace') {
            var out = document.getElementById('output-value').innerHTML;
            var res = out.substring(0, out.length - 1);
            //console.log(res);
            document.getElementById('output-value').innerHTML = res;
        } else {
            if(this.id == '='){
                var outPut = document.getElementById('output-value').innerHTML;
                var history = document.getElementById('history-value').innerHTML;
                //console.log(history + outPut);
                document.getElementById('history-value').innerHTML = history + outPut;
                var value = eval(history + outPut);
                document.getElementById('output-value').innerHTML = value;
            } else {
                var outValue = document.getElementById('output-value').innerHTML;
                document.getElementById('history-value').innerHTML = outValue + this.id;
                document.getElementById('output-value').innerHTML = '';
            }
        }
    });
}
