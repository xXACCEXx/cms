var Ractive = require('ractive/ractive.min')

Ractive.components.uxpagelist = require('./uxPageList')
Ractive.components.uxsidebar = require('./uxSideBar')

var ractive;
window.addEventListener('DOMContentLoaded', function () {
	ractive = new Ractive({
		template: document.body.innerHTML,
		el: document.body,

		oncomplete: function () {
			this.el.classList.remove('is-invisible');
		}
	})
})