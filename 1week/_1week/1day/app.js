var mod=require('./module.js')
var mod2=require('./tmp/')
var m = mod()
var m2 = mod2(5)

console.log(`result: ${m}`)
console.log(m2)