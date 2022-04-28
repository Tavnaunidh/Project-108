function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/51nZg7yI1/', modelReady)
}


    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        if (error){
            console.error(error)
        } else{
            random_number_r = Math.floor(Math.random() * 255) +1;
            random_number_g = Math.floor(Math.random() * 255) +1;
            random_number_b = Math.floor(Math.random() * 255) +1;

            document.getElementById("result_label").innerHTML = 'I can hear - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
            document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


            img = document.getElementById('dog.jpg');
            img1 = document.getElementById('cat.jfif');
            img2 = document.getElementById('background,jfif');
            

            if (results[0].label == "Dog") {
                img.src = 'giphy.gif';
                img1.src = 'cat.jfif';
                img2.src = 'background,jfif';
            }  else if (results[0].label == "Bell") {
                img.src = 'dog.jpg';
                img1.src = 'tenor.gif';
                img2.src = 'background,jfif';
              } else{
                img.src = 'dog.jpg';
                img1.src = 'cat.jfif';
                img2.src = 'background gif.gif.crdownload';
            

        }
    }
}