const keys = {
    q: "./sound/28.mp3",
    w: "./sound/29.mp3",
    e: "./sound/30.mp3",
    r: "./sound/31.mp3",
    t: "./sound/32.mp3",
    y: "./sound/33.mp3",
    u: "./sound/34.mp3",
    i: "./sound/35.mp3",
    o: "./sound/36.mp3",
    p: "./sound/37.mp3",
    a: "./sound/38.mp3",
    s: "./sound/39.mp3",
    d: "./sound/40.mp3",
    f: "./sound/41.mp3",
    g: "./sound/42.mp3",
    h: "./sound/43.mp3",
    j: "./sound/44.mp3",
    k: "./sound/45.mp3",
    l: "./sound/46.mp3",
    z: "./sound/47.mp3",
    x: "./sound/48.mp3",
    c: "./sound/49.mp3",
    v: "./sound/50.mp3",
    b: "./sound/51.mp3",
    n: "./sound/52.mp3",
    m: "./sound/53.mp3",
    1: "./sound/54.mp3",
    2: "./sound/55.mp3",
    3: "./sound/56.mp3",
    4: "./sound/57.mp3",
    5: "./sound/58.mp3",
    6: "./sound/59.mp3",
    7: "./sound/60.mp3",
    8: "./sound/61.mp3",
    9: "./sound/62.mp3",
    0: "./sound/63.mp3",
}

let sounds = {}

for(let key in keys){
    sounds[key] = new Audio(keys[key]);
}

document.addEventListener('keydown', function(e){
    let key = e.key.toLowerCase();
    
    if(sounds[key]){
        sounds[key].currentTime = 0;
        sounds[key].play();
    }

})