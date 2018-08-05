

var friendData = require("../data/friends");


module.exports = function(app) {
 

  app.get("/api/friendData", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friendData", function(req, res) {
    var bestMatch = {name: "", photo: "", friendDifference: ""};
    var userData = req.body;
    var userScore = userData.scores;
    var totalDifference;


    for(var i =0; i < friendData.length ; i++){
      var currentfriend = friendData[i];
      totalDifference = 0;

     for(var h = 0; h < currentfriend.scores.length; h++ ){
       var currentFriendScore = currentfriend.scores[h];
       var currentUserScores = userScore[h];

       totalDifference += Math.abs(parseInt(currentUserScores) - parseInt(currentFriendScore));
     }
     if(totalDifference <= bestMatch.friendDifference){
       bestMatch.name = currentFriend.name;
       bestMatch.photo = currentFriend.photo;
       bestMatch.friendDifference = totalDifference;
     }
    }
    friends.push(userData);

    res.json(bestMatch);
 
    
    
  });
};

  
    