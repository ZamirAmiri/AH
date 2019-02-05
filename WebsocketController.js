let instance = null;

class WebsocketController{
    constructor() {
        if(!instance){
           instance = this;
        }
        this.ws = new WebSocket("ws://192.168.2.7:8080/AddingHelp/actions");
        return instance;
    }
}

export default WebsocketController
