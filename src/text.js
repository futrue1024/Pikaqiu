import string from "./css.js";
let n = 0;
const demo = document.querySelector("#demo");
const text1 = document.querySelector("#text1");
html.scrollTop = html.scrollHeight;
//id可以直接引用，如果为class则不能直接引用。
let id;
let time = 100;
const player = {
  init: () => {
    demo.innerHTML = string.substring(0, n);
    text1.innerText = string.substring(0, n);
    player.paly();
    player.bindsEvents();
  },
  bindsEvents: () => {
    document.querySelector("#btnPause").onclick = player.pause;
    document.querySelector("#btnStart").onclick = player.paly;
    document.querySelector("#btnSlow").onclick = player.slow;
    document.querySelector("#btnFast").onclick = player.fast;
  },

  run: () => {
    n += 1;
    if (n > string.length) {
      //终止setInterval，使用clearInterval，需要接受setInterval的返回值。
      window.clearInterval(id);
      return;
    }
    demo.innerHTML = string.substring(0, n);
    text1.innerText = string.substring(0, n);
    text.scrollTop = text.scrollHeight; //让滚动条随着可滚动高度得变化不断向下，形成自动发滚动。
  },
  paly: () => {
    id = setInterval(player.run, time);
    //建立循环函数，返回id值，以方便后续终止循环。
    //直接将id提前绑定，因为后续逻辑每一步都需要用到id值
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause(); //先把之前的状态打断，在执行此次操作
    time = 500;
    player.paly();
  },
  fast: () => {
    player.pause();
    time = 20;
    player.paly();
    //一定要注意在终止再次开始在以后要获得id值方便下次操作。
  },
};
player.init();
//初始化操作。
