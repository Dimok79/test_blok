(function (exports) {
	'use strict';
        
var vList_Bloks = new List_Bloks();
	exports.app = new Vue({
            el:'#app'
           ,data:{
               message: 'Тест'
               ,LB: vList_Bloks
               ,select_b: {}
           }
           ,methods:{
                onClick_blok1: function(e) {
                        e.onClick();
                    }               
                ,onClick_blok: function(e) {
                    console.log("onClick_blok-");
                }
                ,ondbClick_blok: function(e) {
                    console.log("onDBClick_blok-");
                    if (e instanceof Blok2){
                        e.ondbClick_blok();
                    }
                }
                ,onClick_destroy: function(lbl) {
                    console.log("onClick_destroy-");
                    vList_Bloks.del_blok(lbl);
                }
                ,add_b1: function() {
                    vList_Bloks.add_blok(new Blok1(lixt_txt[getRandom()]));
                }    
                ,add_b2: function() {
                    vList_Bloks.add_blok(new Blok2(lixt_txt[getRandom()]));
                }    
           }
           ,computed: {
                class_blok: function () {
                    return {
                      active: true,
                      'text-danger': false
                    }
                }    
            }
           
        });
})(window);
