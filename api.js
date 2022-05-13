fetch('https://digimon-api.vercel.app/api/digimon')
  .then( function(response){
    return response.json()
  })
  .then(function(data){
    digimons(data)
  })
  .catch(function(){
    console.log('Api não foi localizada')
  })

  function digimons(todosDigimon){
    for(digimon of todosDigimon){
      var div = document.createElement('div');
      div.innerHTML = ` <div class="card">
      <div class="nome">
        ${digimon.name}
      </div>
      <div id="niver" class="imagem" >
       <img src="${digimon.img}" width="125" height="125">
      </div>
      <div class="level">
      ${digimon.level}
      </div>
    </div>`
      document.getElementById('container').appendChild(div);
    } 
    
  }





  
