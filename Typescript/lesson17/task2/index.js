export const callbackPrompt = {
    message : 'Call me',
    showPrompt()  {
        const phoneNumer = prompt(this.message);
        console.log(phoneNumer);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt, ms);
    }
};

callbackPrompt.showDeferredPrompt(1000);