navigator.mediaDevices.getUserMedia({audio:true,video: true}).then((stream)=>{
  consola.log(stream)

  let video = document.getElementById('video')
  video.srcObject= stream

}).catch((err)=>console.log(err))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}


