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
        operationArea: {
          default: null,
          type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      var self = this;
      this.operationArea.on(cc.Node.EventType.TOUCH_START, function (event) {
        self.node.x = event.getLocationX() - self.operationArea.width / 2;
      }, this);
      this.operationArea.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
        self.node.x = event.getLocationX() - self.operationArea.width / 2;
      }, this);
      // this.setInputControl();
    },

    // setInputControl: function () {
    //   var self = this;
    //   cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event){
    //     switch (event.keyCode) {
    //       case cc.KEY.a:
    //         self.moveLeft = true;
    //         break;
    //       case cc.KEY.d:
    //         self.moveRight = true;
    //         break;
    //     }
    //   });
    //
    //   cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event){
    //     switch(event.keyCode) {
    //       case cc.KEY.a:
    //         self.moveLeft = false;
    //         break;
    //       case cc.KEY.d:
    //         self.moveRight = false;
    //         break;
    //       }
    //   });
    // },

    start () {

    },
});
