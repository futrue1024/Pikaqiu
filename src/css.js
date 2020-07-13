const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .skin {
    position: relative;
    border: 1px solid #edc21e;
    background: #edc21e;
    height: 100vh;
  }
  .san {
    position: relative;
    position: absolute;
    border: 10px solid black;
    border-color: black transparent transparent;
    width: 0px;
    height: 0px;
    top: 100px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
  }
  .yuan {
    border: 1px solid black;
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    margin-left: -10px;
    border-top-left-radius: 24px 14px;
    border-top-right-radius: 24px 14px;
    background: black;
  }

  .eyes {
    border: 2px solid #000000;
    height: 64px;
    width: 64px;
    position: absolute;
    left: 50%;
    top: 60px;
    margin-left: -32px;
    border-radius: 50%;
    background: #2e2e2e;
  }
  .eyes::after {
    /*注意伪元素要content为空，且默认是span属性元素8*/
    content: "";
    display: block;
    border: 2px solid #000000;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 6px;
    background: #ffffff;
    animation: wave1 2s infinite linear;
  }
  .eyes.left {
    /*注意相同div得id中间不可有空格*/
    transform: translateX(120px);
    position: relative;
  }
  .eyes.right {
    /*注意相同div得id中间不可有空格*/
    transform: translateX(-120px);
  }

  .mouth {
    width: 180px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 130px;
    margin-left: -90px;
    overflow: hidden;
  }
  .mouth .up .lip {
    border: 3px solid red;
    width: 80px;
    height: 30px;
    z-index: 1;
    position: relative;
    background: #edc21e;
  }
  .mouth .up .lip.left {
    border-color: transparent transparent #000000 #000000;
    border-bottom-left-radius: 40px 24px;
    transform: rotate(-20deg) translate(14px, -10px);
  }
  .mouth .up .lip.right {
    border-color: transparent #000000 #000000 transparent;
    border-bottom-right-radius: 40px 24px;
    transform: rotate(20deg) translate(68px, -72px);
  }
  .mouth .down .yuan1 {
    border: 3px solid #000000;
    width: 130px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -65px;
    bottom: 0;
    border-bottom-left-radius: 70px 260px;
    border-bottom-right-radius: 70px 260px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    height: 148px;
    width: 140px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    border-radius: 80%;
    background: #ff485f;
  }

  .face {
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -45px;
    background: #ff0000;
    top: 180px;
  }
  .face.left {
    transform: translateX(-220px);
  }
  .face.right {
    transform: translateX(220px);
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .san:hover {
    animation: wave 300ms infinite linear;
  }
  
  @keyframes wave1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, 0px);
    }
    50% {
      transform: translate(0px, 20px);
    }
    75% {
      transform: translate(20px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }`;
export default string;
