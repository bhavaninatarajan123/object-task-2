const users=[{
    first_name:'Mike',
    Last_name:'Sheridan',
    age:30
      },
{
    first_name:'Tim',
    Last_name:'Lee',
    age:45

},
{
    first_name:'John',
    Last_name:'Carte' ,
    age:25 
}
]
let b=users.map(function(e){
       var c= e.Last_name ;
      return c;
       
})
document.write(JSON.stringify(b));
