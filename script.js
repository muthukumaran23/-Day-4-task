//1.To Compare two JSON have same properties without order:
var obj1={
    name:"person1",
    age:5
  }
  var obj2={
    age:5,
    name:"person1"
  }
  if(obj1===obj2){
    console.log("true");
  }
  else{
    console.log("false");
  }
  //Output:false
  
  
  //2.Using Rest countries API & Display all countries flags
   
  //Step-1:Create an XHR Object  
       
         var request1 = new XMLHttpRequest();
  
  //Step-2:Initiate a request
    
         request1.open("GET","https://restcountries.com/v2/all");
  
  //Step-3:Sending the request
    
         request1.send();
  
  //Step-4:Once the data successfully load from the server
  
         request1.onload = function () {
   
        var result1 = JSON.parse(request1.response);
        for(let i=0; i < result1.length ; i++){
        console.log(result1[i].flags);
        }
     }
  
  //3.Using Rest countries API & Display all Countries names,Regions,Sub-region,Population:
  
    // Step-1:Create an XHR Object  
       
       var request = new XMLHttpRequest();
  
     //Step-2:Initiate a request
       
       request.open("GET","https://restcountries.com/v2/all");
     
     //Step-3:Sending the request
       
       request.send();
     
     //Step-4:Once the data successfully load from the server
     
       request.onload = function () {
      
       var result = JSON.parse(request.response);
           
       var name="Country-Name";
       var region="Region";
       var subregion="Sub-region";
       var population="Population";    
     for(let i=0; i < result.length ; i++){
              
             
             console.log(name+':'+result[i].name)
             console.log(region+':'+result[i].region)
             console.log(subregion+':'+result[i].subregion)
             console.log(population+':'+result[i].population)
            
            }
        }