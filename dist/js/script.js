let menu = document.querySelector('#menu-icon');
let menu = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toogle('bx-x');
	navbar.classList.toogle('open');

}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        // O usuário está autenticado com o Google. Faça algo com `result.user`.
        console.log("Usuário autenticado:", result.user);
    }).catch(error => {
        // Handle errors here.
        console.error("Erro ao autenticar:", error);
    });
}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        // O usuário está autenticado com o Google. Faça algo com `result.user`.
        console.log("Usuário autenticado:", result.user);
    }).catch(error => {
        // Handle errors here.
        console.error("Erro ao autenticar:", error);
    });
}