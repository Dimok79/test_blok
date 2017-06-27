(function (exports) {
	'use strict';
	var STORAGE_KEY = 'list_txt';
	exports.txt_blokls = {
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (blok) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(blok));
		}
	};
})(window);


