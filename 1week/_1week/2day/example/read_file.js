var fs = require('fs')

// var file = fs.readFileSync('hello.txt', 'UTF8')
// file=file.split('\n');
// fs.readFile('doc.json','utf8' ,function(err, data){
//     if (err)throw('it is your error')
//     var a =  JSON.parse(data)
//     console.log(a)
//     })

// task1
// var file = fs.readFileSync('hello.txt', 'UTF8')
// var tagList = file.replace(/([.,;])/g, '');
// tagList=tagList.split(' ');
// var newOb = {}
// tagList.map((item,i)=> (newOb[item]=item.length))
// console.log(newOb)

// Файл из 10 строк. Вычитать из содержимого файла строки по парамертру.
// Параметры вводить через консоль.(задача 1) : 2-ое предложение; 2) и предложения в котором есть слово "бука")

// var file = fs.readFileSync('sec.txt', 'UTF8')
// console.log(process.argv[2])
// var tagList = file.split('\n');
// task2
// var res = []
// tagList.map((item)=>(
//     item.indexOf(process.argv[2])>=0? res.push(item):null))
// tagList.map((item)=>(item.indexOf('бука')>=0? console.log('со словом бука:'+item):null))
// console.log('ваш поиск', res)

// task2.2
// var y=0
// function func(){
//     if (y<=tagList.length-1){
//         console.log(tagList[y]);
//         y++;
//     } else clearInterval(inter)
// }
// var inter = setInterval(func,1000)

// task3
// Вычитать файл JSON/ Вывести обьекты (свойства и значения) у которых есть свойство "name"
// fs.readFile('doc.json', 'UTF8', function(err,data){ 
//     // console.log(JSON.parse(data)[0].name)
//     console.log(JSON.parse(data).filter(
//         (item,index)=> item.name))
// })

// task5

fs.readFile('../task3.html', 'UTF8', function(err,data){ 
    
    var a = data.split('<hr>')
    // a= a.map((item, index)=>{item.replace(/(\<(\/?[^>]+)>)/g, ''); console.log(item)})
    
    var start = a.map((item)=> item.indexOf('<ol>')) 
    var end = a.map((item)=> item.indexOf('</ol>')) 
    // var res = a.map((item)=> item.substring(start,))) 


    // a = a.map((item)=> item.)
    // a= a.map((item, index)=>(item.replace(/(\<(\/?[^>]+)>)/g, '')))
    // /(\<(\/?[^>]+)>)/g
    // console.log(t)
    })
    

