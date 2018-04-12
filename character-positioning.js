var input=process.argv.slice(2).join(" ");

function countletters(input){
  var countedletters={};


  for(var a=0; a<input.length; a++){
    if(countedletters[input[a]]==undefined){
      countedletters[input[a]]=String(a);
    } else{
      countedletters[input[a]]+=", "+String(a);
    }
  }
  delete countedletters[" "];
  console.log(countedletters);

}
countletters(input);
