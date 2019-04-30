var regForm = document.getElementById('reg-form');

let config = {
    apiKey: "AIzaSyC6-6aXNNf4OF4Ruwm3v9hFbJjkrfJhAK8",
    authDomain: "maharashtra-summit.firebaseapp.com",
    databaseURL: "https://maharashtra-summit.firebaseio.com",
    projectId: "maharashtra-summit",
    storageBucket: "maharashtra-summit.appspot.com",
    messagingSenderId: "195050543246"
};
firebase.initializeApp(config);

regForm.onsubmit = function(e) {
    e.preventDefault();

    let data = {};
    new FormData(regForm).forEach((value, key) => {data[key] = value;});

    // if(data.preference1 === data.preference2) {
    //     alert("Preference 1 and 2 cannot be the same!");
    //     return;
    // }

    firebase.firestore()
        .collection('registrations')
        .doc(Date.now().toString())
        .set(data)
        .then(() => {
            alert("Registered!");
        })
        .catch((e) => {
            console.warn("An error occured, contact Vikrant.");
            console.error(e);
        });
};
