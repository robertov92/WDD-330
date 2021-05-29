export default class Alert {
    constructor(alertId) {
        this.alert = document.getElementById(alertId);
    }

    show(message) {
        // removing a class that makes the alert visible
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }

    hide() {
        this.alert.classList.add('d-none');
    }
}