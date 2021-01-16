class Player{
    constructor(){

        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = 0;
    }

    getCount(){
        var refB = db.ref("playerCount");
        refB.on("value", function(data){ PlayerCount = data.val(); });
    }

    updateCount(count){
        db.ref("/").update({"playerCount" : count});
    }

    updateName(){
        var playerIndex = "Players/player"+this.index;
        db.ref(playerIndex).set({Name : this.name, Distance : this.distance});
    }

    static getPlayerInfo(){
        var Ref = db.ref("Players");
        Ref.on("value", (data) => {allPlayers = data.val();});

    }

    getRank(){
        var dbref = db.ref("CarsAtEnd");
        dbref.on("value", (data)=>{this.rank = data.val();});
    }

    static updateRank(rank){
        db.ref("/").update({CarsAtEnd : rank});
    }


    
}