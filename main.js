setTimeout(() => {
  if (Notification.permission === "default") {
    if (confirm("アップデート通知を受け取りますか？")) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          alert("通知ONになりました 👍");
        }
      });
    }
  }
}, 2500);
console.log(Notification.permission);




import { expressions } from "./expressions.js";


const c = document.getElementById("c");
const ctx = c.getContext("2d");

let current = { eyeX:0, eyeY:0, blink:1, mouthY:0, mouthCurve:0 };
let target = { eyeX:0, eyeY:0, blink:1, mouthY:0, mouthCurve:0 };

// ランダム表情
function newTarget(){
  const exp = expressions[Math.floor(Math.random()*expressions.length)];

  target.eyeX = exp.eyeX();
  target.eyeY = exp.eyeY();
  target.mouthY = exp.mouthY();
  target.mouthCurve = exp.mouthCurve();
}
setInterval(newTarget, 2500);

// まばたき
setInterval(()=>{
  target.blink = 0;
  setTimeout(()=> target.blink = 1, 200);
}, 4000);

function lerp(a,b,t){ return a+(b-a)*t; }

function draw(){
  ctx.clearRect(0,0,300,300);

  for (let k in current){
    current[k] = lerp(current[k], target[k], 0.06);
  }

  const r = 12;
  let eyeY = 130 + current.eyeY;

  // 👀 目
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(110 + current.eyeX, eyeY, r, 0, Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(190 + current.eyeX, eyeY, r, 0, Math.PI*2);
  ctx.fill();

  // ✨ ハイライト
  let hx = current.eyeX * 0.4;
  let hy = current.eyeY * 0.2;

  ctx.fillStyle = "#fff";

  ctx.beginPath();
  ctx.arc(110 + current.eyeX - 5 + hx, eyeY - 5 + hy, 5, 0, Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(190 + current.eyeX - 5 + hx, eyeY - 5 + hy, 5, 0, Math.PI*2);
  ctx.fill();

  // 👁 まばたき
  let h = r * (1 - current.blink);

  ctx.fillRect(90 + current.eyeX, eyeY - r, 40, h/2);
  ctx.fillRect(90 + current.eyeX, eyeY + r - h/2, 40, h/2);

  ctx.fillRect(170 + current.eyeX, eyeY - r, 40, h/2);
  ctx.fillRect(170 + current.eyeX, eyeY + r - h/2, 40, h/2);

  // 👄 口
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;

  let baseY = 190 + current.mouthY;

  ctx.beginPath();
  ctx.moveTo(140, baseY);
  ctx.quadraticCurveTo(
    150,
    baseY + current.mouthCurve,
    160,
    baseY
  );
  ctx.stroke();

  requestAnimationFrame(draw);
}

draw();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("SW登録成功"))
    .catch(err => console.log("SW登録失敗", err));
}
