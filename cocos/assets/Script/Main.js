// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      timeDisplay: {
        default: null,
        type: cc.Label
      },
      pauseFlag: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.timer = 0;
    },
    backToIntro () {
      cc.director.loadScene('Intro');
    },

    start () {
    },

    gamePause () {
      this.pauseFlag = true;
    },

    gameOn () {
      this.pauseFlag = false;
    },

    update (dt) {
      if (this.pauseFlag) {
        return;
      }
      this.timer += dt;
      var dateTime = Math.floor(this.timer);
      var min = Math.floor(dateTime / 60);
      var sec = dateTime % 60;
      this.timeDisplay.string = (min >= 10 ? '' : '0') + min + ':' + (sec >= 10 ? '' : '0') + sec;
    },
});
