
// emulation
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        
        callback(this[i], i, this)
    }
    
}

const approved = ['a', 'bs', 'sc']

approved.forEach2(
   function(n, index){
       console.log(n)
   }
)