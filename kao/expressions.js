export const expressions = [
  // 通常
  {
    name: "normal",
    eyeX: () => Math.random()*20 - 10,
    eyeY: () => Math.random()*15 - 8,
    mouthY: () => Math.random()*6 - 3,
    mouthCurve: () => Math.random()*6 - 3
  },

  // 笑顔
  {
    name: "happy",
    eyeX: () => Math.random()*10 - 5,
    eyeY: () => Math.random()*10 - 5,
    mouthY: () => -3,
    mouthCurve: () => 10
  },

  // 悲しい
  {
    name: "sad",
    eyeX: () => Math.random()*10 - 5,
    eyeY: () => Math.random()*10 - 5,
    mouthY: () => 5,
    mouthCurve: () => -10
  },

  // 眠い
  {
    name: "sleepy",
    eyeX: () => Math.random()*5 - 2,
    eyeY: () => Math.random()*5 - 2,
    mouthY: () => 2,
    mouthCurve: () => 0
  },

  // ドヤ顔
  {
    name: "smug",
    eyeX: () => Math.random()*5 - 2,
    eyeY: () => Math.random()*5 - 2,
    mouthY: () => -2,
    mouthCurve: () => 4
  },

  // 無表情
  {
    name: "blank",
    eyeX: () => 0,
    eyeY: () => 0,
    mouthY: () => 0,
    mouthCurve: () => 0
  },

  // キョロキョロ
  {
    name: "look",
    eyeX: () => Math.random()*30 - 15,
    eyeY: () => Math.random()*10 - 5,
    mouthY: () => 0,
    mouthCurve: () => 0
  }
];