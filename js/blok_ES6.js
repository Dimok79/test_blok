
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


class blok {
    constructor () {
        this.txt = lixt_txt[getRandom()]
        this.simple = true // Простой
        this.list = []
//        this.addSpices(...spices)
    }
    add_blok(simple){
        this.list.push(...spices)
    }
/*    addSpices (...spices) {
        var currentSpice
        if (this.spices.length + spices.length > MAX_SPICES) {
            throw new Error(`more than ${MAX_SPICES} spices`)
        }
        if (spices.some(spice => {
            currentSpice = spice
            return this.spices.includes(spice)
        })) {
            throw new Error(`already have spice: ${currentSpice}`)
        }

        this.spices.push(...spices)

        return this
    }
*/    
}

try {
    module.exports = blok
} catch (err) {

}

