fetch('https://ibb.co/Pz3Zd5Wk').then(r=>r.text()).then(t => console.log(t.match(/https:\/\/i\.ibb\.co\/[^"']+/g)[0]));
