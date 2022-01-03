
document.getElementById('_btn').addEventListener('click',function(){
    
    var location_to=document.getElementById('_To').value
    var date=document.getElementById('_date').value
    var from=document.getElementById('_from').value
    var _class=document.getElementById('_class').value
    var coach=document.getElementById('_coach').value
    alert(`${location_to}  ${date} ${from} ${_class} ${coach}`)
    var table=`<table width="100%" border='4'><th>${location_to}</th><th>${date}</th><th>${from}</th><th>${_class}</th><th>${coach}</th></tr>`
    table+=`<tr><td>${location_to}</td><td>${date}</td><td>${from}</td><td>${_class}</td><td>${coach}</td></tr>`;
    document.getElementById('five').innerHTML=table
    window.location='ticket2.html'

})

// var data=document.getElementById('_btn').addEventListener('click',function(){
//         var to=document.getElementById('_To').value
//         var coach=document.getElementById('_coach').value
//         var _class=document.getElementById('_class').value
//         var from=document.getElementById('_from').value
//         var date=document.getElementById('_date').value
//     }   
// )

// console.log(data)




// var table=`<table  width="100%" border='4'><tr><th>TO</th><th>DATE</th><th>FROM</th><th>CLASS</th><th>TRAIN COACH</th></tr>`
// function add(x){
// }

// function call(){
    // var table=`<table  width="100%" border='4'>
    // <tr>
    //     <th>TO</th>
    //     <th>DATE</th>
    //     <th>FROM</th>
    //     <th>CLASS</th>
    //     <th>TRAIN COACH</th>
    // </tr>`
//     data.forEach(function(x){
//         table+=`<tr><td>${x.to}</td><td>${x.date}</td><td>${x.from}</td><td>${x._class}</td><td>${x.coach}</td></tr>`;
//     })
   
// }

// call()
// var table=`<table  width="100%" border='4'>
//     <tr>
//         <th>TO</th>
//         <th>DATE</th>
//         <th>FROM</th>
//         <th>CLASS</th>
//         <th>TRAIN COACH</th>
//     </tr>`

       





