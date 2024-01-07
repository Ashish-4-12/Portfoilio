// Corrected Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBXapK4IoazhbRMbyxoARSFefXj4gkLxvY",
    authDomain: "myportfolio-26fc7.firebaseapp.com",
    projectId: "myportfolio-26fc7",
    storageBucket: "myportfolio-26fc7.appspot.com",
    messagingSenderId: "355522656743",
    appId: "1:355522656743:web:eb9148283f0b67a1922542"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a reference to the storage service
var storage = firebase.storage();

// Specify the path to the file in storage
var storageRef = storage.ref("MyResume.pdf");

// Function to download the file
function downloadFile() {
    storageRef.getDownloadURL().then(function (url) {
        var link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.download = 'Ashishs_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(url)
    }).catch(function (error) {
        console.error("Error getting download URL: ", error);
    });
}

// Attach the downloadFile function to the click event of the download button
document.getElementById('astroIcon').addEventListener('click', downloadFile);
