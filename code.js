var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["22beaa3f-1945-49d9-8bd2-491116fd365b","1356dc02-71b8-4d04-b283-a10996042b84","08575d87-3efc-490e-979e-e82d994a8595","ad9000ed-8665-4186-8621-4babc8a6d759","c3a19030-6733-4060-a337-148d4a07e3c3"],"propsByKey":{"22beaa3f-1945-49d9-8bd2-491116fd365b":{"name":"meteoro","sourceUrl":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/22beaa3f-1945-49d9-8bd2-491116fd365b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"4XB4KvycdnDkalh2U7oh1Q.ZJQX.P4Qg","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/22beaa3f-1945-49d9-8bd2-491116fd365b.png"},"1356dc02-71b8-4d04-b283-a10996042b84":{"name":"estrela","sourceUrl":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/1356dc02-71b8-4d04-b283-a10996042b84.png","frameSize":{"x":1000,"y":1038},"frameCount":1,"looping":true,"frameDelay":4,"version":"AX3m2IJYGLzlqopc5WYfwm3Q6L2_kXok","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1038},"rootRelativePath":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/1356dc02-71b8-4d04-b283-a10996042b84.png"},"08575d87-3efc-490e-979e-e82d994a8595":{"name":"apollo 17","sourceUrl":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/08575d87-3efc-490e-979e-e82d994a8595.png","frameSize":{"x":149,"y":220},"frameCount":1,"looping":true,"frameDelay":4,"version":"G7NAmBiMLrtxW1MdGNz9qmE1P_xoTT2l","loadedFromSource":true,"saved":true,"sourceSize":{"x":149,"y":220},"rootRelativePath":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/08575d87-3efc-490e-979e-e82d994a8595.png"},"ad9000ed-8665-4186-8621-4babc8a6d759":{"name":"lua","sourceUrl":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/ad9000ed-8665-4186-8621-4babc8a6d759.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"WaUx72xfIfTD5ywr5qzq0D4TYFQT2UIZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/ad9000ed-8665-4186-8621-4babc8a6d759.png"},"c3a19030-6733-4060-a337-148d4a07e3c3":{"name":"espaco","sourceUrl":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/c3a19030-6733-4060-a337-148d4a07e3c3.png","frameSize":{"x":510,"y":420},"frameCount":1,"looping":true,"frameDelay":4,"version":"NU8xuTDYBhio2C2ROyEyd0yM6exrNDjC","loadedFromSource":true,"saved":true,"sourceSize":{"x":510,"y":420},"rootRelativePath":"assets/v3/animations/or_NHqrTIcBpCXNsbdewZhBYIwrYtvOyeWexLj5DSPI/c3a19030-6733-4060-a337-148d4a07e3c3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var mtr1, mtr2, mtr3,mtr4, mtr5, mtr6, mtr7, mtr8;
var apollo17;
var lua;
var espaco;
var borda;
  
  borda = createSprite(200,30,500,5);
  espaco = createSprite(200,235,400,500);
  espaco.setAnimation("espaco");
  lua = createSprite(380,200,20,20);
  lua.setAnimation("lua");
  lua.scale = 0.28;
  apollo17= createSprite(30,180,13,13);
  apollo17.setAnimation("apollo 17");
  apollo17.scale = 0.18;
  
  mtr1 = createSprite(80,40,10,10);
  mtr1.setAnimation("meteoro");
  mtr1.scale = 0.05;
  mtr2 = createSprite(155,40,10,10);
  mtr2.setAnimation("meteoro");
  mtr2.scale = 0.05;
  mtr3 = createSprite(230,40,10,10);
  mtr3.setAnimation("meteoro");
  mtr3.scale = 0.05;
  mtr4 = createSprite(305,40,10,10);
  mtr4.setAnimation("meteoro");
  mtr4.scale = 0.05;
  mtr5 = createSprite(370,40,10,10);
  mtr5.setAnimation("estrela");
  mtr5.scale = 0.03;
  mtr6 = createSprite(370,80,10,10);
  mtr6.setAnimation("estrela");
  mtr6.scale = 0.03;
  mtr7 = createSprite(370,360,10,10);
  mtr7.setAnimation("estrela");
  mtr7.scale = 0.03;
  mtr8 = createSprite(370,320,10,10);
  mtr8.setAnimation("estrela");
  mtr8.scale = 0.03;
 
mtr1.velocityY = 25;
mtr2.velocityY = 25;
mtr3.velocityY = 25;
mtr4.velocityY = 25;
mtr5.velocityX = -25;
mtr6.velocityX = -25;
mtr7.velocityX = -25;
mtr8.velocityX = -25;


createEdgeSprites();

function draw() {
   background("white");
  text("Tentativas: " + life,20,20);
  strokeWeight(0);
  
if (keyDown(RIGHT_ARROW)){
  apollo17.x = apollo17.x + 4;
}
if (keyDown(LEFT_ARROW)){
  apollo17.x = apollo17.x - 4;
}
if (keyDown(UP_ARROW)){
  apollo17.y = apollo17.y - 4; 
}
if (keyDown(DOWN_ARROW)){
  apollo17.y = apollo17.y + 4;
}

if (keyDown("D")){
  apollo17.x = apollo17.x + 4;
}
if (keyDown("A")){
  apollo17.x = apollo17.x - 4;
}
if (keyDown("W")){
  apollo17.y = apollo17.y - 4; 
}
if (keyDown("S")){
  apollo17.y = apollo17.y + 4;
}


if (apollo17.isTouching(mtr1)||apollo17.isTouching(mtr2)||apollo17.isTouching(mtr3)||apollo17.isTouching(mtr4)||apollo17.isTouching(mtr5)||apollo17.isTouching(mtr6)||apollo17.isTouching(mtr7)||apollo17.isTouching(mtr8)){
  apollo17.x = 40;
  apollo17.y = 180;
  life = life + 1;
   playSound("assets/category_alerts/cartoon_negative_bling.mp3", false);
}
if (apollo17.isTouching(lua)){
  text("Você venceu! (aperte 'R' para recomeçar)",100,20);
mtr1.velocityY = 0;
mtr2.velocityY = 0;
mtr3.velocityY = 0;
mtr4.velocityY = 0;
mtr5.velocityX = 0;
mtr6.velocityX = 0;
mtr7.velocityX = 0;
mtr8.velocityX = 0;
   playSound("assets/category_human/character_calvin_boom_2.mp3", false);

}
if (keyDown("R")) {
  life = 0;
  apollo17.x = 30;
  apollo17.y = 180;
mtr1.velocityY = 25;
mtr2.velocityY = 25;
mtr3.velocityY = 25;
mtr4.velocityY = 25;
mtr5.velocityX = -25;
mtr6.velocityX = -25;
mtr7.velocityX = -25;
mtr8.velocityX = -25;
   playSound("assets/category_collect/energy_bar_recharge_4.mp3", false);
}

mtr1.bounceOff(edges);
mtr2.bounceOff(edges);
mtr3.bounceOff(edges);
mtr4.bounceOff(edges);
mtr1.bounceOff(borda);
mtr2.bounceOff(borda);
mtr3.bounceOff(borda);
mtr4.bounceOff(borda);
mtr5.bounceOff(edges);
mtr6.bounceOff(edges);
mtr7.bounceOff(edges);
mtr8.bounceOff(edges);
apollo17.bounceOff(edges);
apollo17.bounceOff(borda);

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
