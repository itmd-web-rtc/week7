if ('mediaDevices' in navigator){

    let allDevices = []
    let globalStream = []

    let cameraButton = document.querySelector('#start-camera')
    cameraButton.addEventListener('click', function() {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream){
            let cameraVideo = document.querySelector('#camera')
            cameraVideo.srcObject = stream;
            globalStream = stream;
        })
        .catch(function(erro){
            console.error('Stream error:', error)
        })
    })

    function showDevices() {
        navigator.mediaDevices.enumerateDevices()
        .then(function(devices){
            console.log('Available Devices: ')
            devices.forEach(function(device) {
                console.log(device)
            })
        })
    }

    // end mediaDevice feature detection
}
