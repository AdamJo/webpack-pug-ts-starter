import '../stylesheets/main.scss';
import '../container/index.ts';

const docStyle = document.documentElement.style;
const el = document.getElementById("nope");
el.addEventListener("mousemove", function({x, y}) {
  docStyle.setProperty('--widthDom', x+'px');
});

document.write('main ts file');
