/* global AFRAME */
AFRAME.registerComponent('to-link', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');


    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {


    if (evt.currentTarget.id.substring(0, 1) == "i") {

      document.querySelector('#infoui').object3D.visible = true;
      document.querySelector('#infoui').object3D.position.set(0, 0.051, -0.3);
      document.getElementById('infoui').setAttribute('material', 'src:#' + evt.currentTarget.id.substring(2, 100));

    }
    else if (evt.currentTarget.id == "exitbut") {
      document.querySelector('#infoui').object3D.visible = false;
      document.querySelector('#infoui').object3D.position.set(100, 100, 100);
    }
    else if (evt.currentTarget.id == "SwitchtoTwo") {
      document.querySelector('#indexcam').object3D.position.set(0, 102.6, 0);

        document.querySelector('#SwitchtoOne').object3D.position.set(0, 0.7, -1.5);
        document.querySelector('#SwitchtoTwo').object3D.position.set(100, 100, 100);
    }
    else if (evt.currentTarget.id == "SwitchtoOne") {

      document.querySelector('#indexcam').object3D.position.set(0, 1.6, 0);
      document.querySelector('#SwitchtoTwo').object3D.position.set(0, 0.7, -1.5);
      document.querySelector('#SwitchtoOne').object3D.position.set(100, 100, 100);
  }
    else if (evt.currentTarget.id.substring(0, 1) == "r") {

      window.location.href = "/3DWeb/" + evt.currentTarget.id.substring(2, 100) + ".html";
    }

  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});
