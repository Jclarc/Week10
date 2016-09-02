/**
 * Created by Jake on 8/30/2016.
 */



//spotify api
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data'
});









var action = process.argv[2];


// The switch-case will direct which function gets run.
switch(action){
    case 'my-tweets':
        myTweets();
        break;

    case 'spotify-this-song':
        spotifyThisSong();
        break;

    case 'movie-this':
        movieThis();
        break;

    case 'do-what-it-says':
        doWhatItSays();
        break;

    default:
        help();
        break;
}

//functions
function myTweets(){
//twitter api
    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

function spotifyThisSong(){

}

function movieThis(){

}

function doWhatItSays(){

}