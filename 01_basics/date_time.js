// let myDate=new Date()
// console.log(myDate.toString())

// // let myCreateDate=new Date(2023,0,23)
// let myCreateDate=new Date("2023-01-14")

// console.log(myCreateDate.toLocaleString())

// let myTimeStamp=Date.now();
// console.log(myTimeStamp)

let newDate=new Date()
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday:"long",
})
