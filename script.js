let Resume = {

    Name: "Anonymous",
    age: "25",
    experience: "5Years",
    gender: "male",
    location: "chennai",
    language_Know: "Englis , Tamil",
    skill:"Full Stack Developer",
    }
    
    //  using for loop
    for (i= 1 ;i<=Resume.length;i++){
         console.log(Resume[i]);
    }

    // using for in loop
    for(let i in Resume){
     console.log(Resume[i])
    }

     // using for of loop
     for (let i of Object.entries(Resume)){
          console.log(i);
     }

     //using ForEach Loop
     const entries = Object.entries(Resume);

     entries.forEach(([key,value])=>{
          console.log(`${key}: ${value}`);
     });

