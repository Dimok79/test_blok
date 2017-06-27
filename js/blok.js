
const lixt_txt = ["раз"
                ,"Два"
                ,"Три"
                ,"Четыре"
                ,"Пять"
                ,"Шесть"
                ,"Семь"
                ,"Восемь"
                ,"Девять"
                ,"Десять"
];
        
function getRandom() {
    let min = 1;
    let max = 11;
  return Math.floor(Math.random() * (max - min) + min);
}


var Blok1 = function(p_txt){
    this.txt = p_txt;
    this.Blok_type = 1;
};

Blok1.prototype.onClick = function(){
    console.log("onClic " + this.txt);
};

Blok1.prototype.onClick_destroy = function(){
    console.log("onClick_destroy " + this.txt);
};


var Blok2 = function(p_txt){
    this.txt = p_txt;
    this.Blok_type = 2;
    this.db = true;
};

Blok2.prototype.ondbClick_blok = function(){
    this.db = !this.db;
};

Blok2.prototype.onClick_destroy = function(){
};

// Список блоков
var List_Bloks = function(){
    this.list = []; // сам список
    this.count_b1 = 0; 
    this.count_b2 = 0; 
};

List_Bloks.prototype.add_blok = function(p_blok){
    this.list.push(p_blok);
    if (p_blok instanceof Blok1){
        this.count_b1 ++;
    } else {
        this.count_b2 ++; 
    }    
    
};

List_Bloks.prototype.del_blok = function(bl){
    let ii = -1;
    for (var i = 0; i <= this.list.length-1; i++){
        if (this.list[i] == bl){
            ii = i;
        }
    }
    if (this.list[ii] instanceof Blok1){
        this.list.splice(ii, 1);
        this.count_b1 --;
    } else {
        if (confirm("Вы - уверенны что хотите удалить блок?")){
            this.list.splice(ii, 1);
            this.count_b2 --;
        }
    }
    
};

