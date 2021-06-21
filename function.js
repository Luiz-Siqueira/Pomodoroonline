(function(_0x162eed, _0xbbeab2) {
    var _0x2254a0 = function(_0x1b7df7) {
        while (--_0x1b7df7) {
            _0x162eed['push'](_0x162eed['shift']());
        }
    };
    _0x2254a0(++_0xbbeab2);
}(_0xbbea, 0xc1));
var _0x2254 = function(_0x162eed, _0xbbeab2) {
    _0x162eed = _0x162eed - 0x0;
    var _0x2254a0 = _0xbbea[_0x162eed];
    return _0x2254a0;
};
var interval_value;
var valor_interval;
var valor_break;
var break_value;
var i = 0x0;
var s = 0x0;

function sessionLength(_0x3ba480) {
    clearInterval(time);
    i = 0x0;
    session1 = document[_0x2254('0x2')](_0x2254('0x5'));
    valor_interval = parseFloat(session1[_0x2254('0x3')]);
    if (_0x3ba480 == 0x2 && valor_interval > 0x5) {
        length = session1[_0x2254('0x3')] = valor_interval - 0x5 + _0x2254('0x7');
    } else if (_0x3ba480 == 0x1 && valor_interval < 0x3c) {
        length = session1[_0x2254('0x3')] = valor_interval + 0x5 + _0x2254('0x7');
    }
    session1[_0x2254('0x3')] = length;
    interval_value = session1['innerHTML'];
    document['getElementById'](_0x2254('0x1'))['innerHTML'] = interval_value;
}

function breakLength(_0x50ba9e) {
    clearInterval(time);
    var _0x36c025 = document[_0x2254('0x2')](_0x2254('0x9'));
    valor_break = parseFloat(_0x36c025[_0x2254('0x3')]);
    if (_0x50ba9e == 0x2 && valor_break > 0x5) {
        length = _0x36c025[_0x2254('0x3')] = valor_break - 0x5 + ':00';
    } else if (_0x50ba9e == 0x1 && valor_break < 0x3c) {
        length = _0x36c025[_0x2254('0x3')] = valor_break + 0x5 + _0x2254('0x7');
    }
    _0x36c025[_0x2254('0x3')] = length;
    break_value = _0x36c025[_0x2254('0x3')];
}
var min;
var initial;
var seg;
var time;

function play() {
    clearInterval(time);
    i = i + 0x1;
    min = parseFloat(document[_0x2254('0x2')](_0x2254('0x1'))['innerHTML']);
    if (i == 0x1) {
        initial = document['getElementById'](_0x2254('0x1'))[_0x2254('0x3')];
        min = min - 0x1;
        seg = 0x3b;
    }
    clock();
    time = setInterval(clock, 0x3e8);
}

function clock() {
    if (min >= 0x0 && seg >= 0x0) {
        if (seg < 0xa) {
            seg = '0' + seg;
        }
        document['getElementById'](_0x2254('0x1'))[_0x2254('0x3')] = min + ':' + seg;
        if (seg == 0x0 && min != 0x0) {
            min = min - 0x1;
            seg = 0x3c;
        } else if (seg == 0x0 && min == 0x0) {
            var _0x415c16 = document['querySelector'](_0x2254('0x8'));
            _0x415c16[_0x2254('0x4')]();
            clearInterval(time);
            if (s == 0x1) {
                chamaSession();
            } else {
                chamaBreak();
            }
        }
        seg = seg - 0x1;
    }
}

function pause() {
    clearInterval(time);
}

function stop() {
    clearInterval(time);
    i = 0x0;
    document[_0x2254('0x2')]('session_clock')['innerHTML'] = initial;
}

function chamaSession() {
    document[_0x2254('0x2')](_0x2254('0x0'))[_0x2254('0x3')] = _0x2254('0xa');
    var _0x3b3959 = document[_0x2254('0x2')](_0x2254('0x5'))['innerHTML'];
    document[_0x2254('0x2')]('session_clock')[_0x2254('0x3')] = _0x3b3959;
    min = 0x0;
    seg = 0x0;
    i = 0x0;
    s = 0x0;
    play();
}

function chamaBreak() {
    document[_0x2254('0x2')](_0x2254('0x0'))['innerHTML'] = _0x2254('0x6');
    var _0x8696d2 = document['getElementById'](_0x2254('0x9'))[_0x2254('0x3')];
    document[_0x2254('0x2')]('session_clock')[_0x2254('0x3')] = _0x8696d2;
    min = 0x0;
    seg = 0x0;
    s = 0x1;
    i = 0x0;
    play();
}
