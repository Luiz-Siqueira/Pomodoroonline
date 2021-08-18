var interval_value;
var valor_interval;
var valor_break;
var break_value;
var i = 0;

function sessionLength(med) {
    clearInterval(time);
    i = 0;
    session1 = document.getElementById('session1');
    valor_interval = parseFloat(session1.innerHTML);
    if (med == 2 && valor_interval > 5) {
        //click on minus
        length = session1.innerHTML = valor_interval - 5 + ':00';
    } else if (med == 1 && valor_interval < 60) {
        //click on plus
        length = session1.innerHTML = valor_interval + 5 + ':00';
    }
    session1.innerHTML = length;
    interval_value = session1.innerHTML;
    document.getElementById('session_clock').innerHTML = interval_value;
}


function breakLength(med) {
    i = 0;
    clearInterval(time);
    var session2 = document.getElementById('session2');
    valor_break = parseFloat(session2.innerHTML);
    if (med == 2 && valor_break > 5) {
        //click on minus
        length = session2.innerHTML = valor_break - 5 + ':00';
    } else if (med == 1 && valor_break < 60) {
        //click on plus
        length = session2.innerHTML = valor_break + 5 + ':00';
    }
    session2.innerHTML = length;
    break_value = session2.innerHTML;
}


var min;
var initial;
var seg;
var time;

function play() {
    clearInterval(time);
    i = i + 1;
    min = parseFloat(document.getElementById('session_clock').innerHTML);
    if (i == 1) {
        initial = document.getElementById('session_clock').innerHTML;
        min = min - 1;
        seg = 59;
    }
    clock();
    time = setInterval(clock, 1000);
}





function clock() {
    if (min >= 0 && seg >= 0) {

        if (seg < 10) {
            seg = '0' + seg;
        }
        document.getElementById('session_clock').innerHTML = min + ':' + seg;
        if (seg == 00 && min != 0) {
            min = min - 1;
            seg = 60;
        }
        else if (seg == 00 && min == 00) {
            var audio = document.querySelector('audio');
            audio.play();
            clearInterval(time);
            chamaBreak()
        }

        seg = seg - 1;
    }
}

function pause() {
    clearInterval(time);
}

function stop() {
    clearInterval(time);
    i = 0;
    document.getElementById('session_clock').innerHTML = initial;
}



function chamaBreak() {
    document.getElementById('paragrafo_session').innerHTML = 'Break';
    var breaktime = document.getElementById('session2').innerHTML;
    document.getElementById('session_clock').innerHTML = breaktime;
    min = 0;
    seg = 0;
    i = 0; // deixa o numero 1 para entrar na condição na funcão play
    play();
}
