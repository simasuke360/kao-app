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
  

  // 通常
  ,{
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
  },

  // 😡 怒り強め
  {
    name: "angry",
    eyeX: () => Math.random()*4 - 2,
    eyeY: () => -6,
    mouthY: () => 3,
    mouthCurve: () => -15
  },

  // 😲 びっくり
  {
    name: "surprised",
    eyeX: () => 0,
    eyeY: () => -8,
    mouthY: () => 10,
    mouthCurve: () => 20
  },

  // 🤩 テンションMAX
  {
    name: "excited",
    eyeX: () => Math.random()*15 - 7,
    eyeY: () => Math.random()*15 - 7,
    mouthY: () => -5,
    mouthCurve: () => 20
  },

  // 😕 困る
  {
    name: "confused",
    eyeX: () => Math.random()*3 - 1,
    eyeY: () => Math.random()*3 - 1,
    mouthY: () => 4,
    mouthCurve: () => -5
  },

  // 😉 ウィンク風
  {
    name: "wink",
    eyeX: () => Math.random()*2 - 1,
    eyeY: () => 0,
    mouthY: () => -2,
    mouthCurve: () => 8
  },

  // 🤖 バグっぽい動き
  {
    name: "glitch",
    eyeX: () => Math.random()*40 - 20,
    eyeY: () => Math.random()*40 - 20,
    mouthY: () => Math.random()*20 - 10,
    mouthCurve: () => Math.random()*30 - 15
  },

  // 😎 クール
  {
    name: "cool",
    eyeX: () => Math.random()*3 - 1,
    eyeY: () => -2,
    mouthY: () => -1,
    mouthCurve: () => 2
  },

  // 🥺 うるうる
  {
    name: "pleading",
    eyeX: () => 0,
    eyeY: () => 5,
    mouthY: () => 6,
    mouthCurve: () => -8
  },

  // 🤪 変顔
  {
    name: "crazy",
    eyeX: () => Math.random()*50 - 25,
    eyeY: () => Math.random()*30 - 15,
    mouthY: () => Math.random()*15 - 7,
    mouthCurve: () => Math.random()*40 - 20
  }
];

