let instance = null;

class Cache{
    constructor() {
        if(!instance){
           instance = this;
        }
        this.myUsername = '';
        this.myNumFollowers = 0;
        this.myNumFollowing = 0;
        this.myHelpcoins = 0;
        this.myEmail = '';
        this.myBirthdate = '';
        this.myAccumulated = 0;
        return instance;
    }
}

export default Cache;
