myApp = angular.module('myApp', ['onsen']);

myApp.controller('Main', ['$scope', function($scope) {
  
  $scope.show = function() {
    ons.createDialog('tut.html').then(function(dialog) {
        dialog.show();
    });
  };
  
  
pianoNotes = [];

//Notes list
var notes = [
    {note: ['A', 'A', 'A'], octave: "0", path: "notes/0A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "0", path: "notes/0As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "0", path: "notes/0B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "1", path: "notes/1C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "1", path: "notes/1Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "1", path: "notes/1D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "1", path: "notes/1Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "1", path: "notes/1E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "1", path: "notes/1F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "1", path: "notes/1Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "1", path: "notes/1G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "1", path: "notes/1Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "1", path: "notes/1A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "1", path: "notes/1As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "1", path: "notes/1B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "2", path: "notes/2C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "2", path: "notes/2Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "2", path: "notes/2D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "2", path: "notes/2Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "2", path: "notes/2E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "2", path: "notes/2F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "2", path: "notes/2Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "2", path: "notes/2G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "2", path: "notes/2Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "2", path: "notes/2A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "2", path: "notes/2As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "2", path: "notes/2B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "3", path: "notes/3C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "3", path: "notes/3Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "3", path: "notes/3D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "3", path: "notes/3Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "3", path: "notes/3E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "3", path: "notes/3F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "3", path: "notes/3Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "3", path: "notes/3G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "3", path: "notes/3Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "3", path: "notes/3A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "3", path: "notes/3As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "3", path: "notes/3B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "4", path: "notes/4C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "4", path: "notes/4Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "4", path: "notes/4D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "4", path: "notes/4Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "4", path: "notes/4E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "4", path: "notes/4F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "4", path: "notes/4Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "4", path: "notes/4G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "4", path: "notes/4Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "4", path: "notes/4A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "4", path: "notes/4As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "4", path: "notes/4B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "5", path: "notes/5C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "5", path: "notes/5Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "5", path: "notes/5D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "5", path: "notes/5Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "5", path: "notes/5E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "5", path: "notes/5F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "5", path: "notes/5Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "5", path: "notes/5G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "5", path: "notes/5Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "5", path: "notes/5A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "5", path: "notes/5As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "5", path: "notes/5B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "6", path: "notes/6C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "6", path: "notes/6Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "6", path: "notes/6D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "6", path: "notes/6Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "6", path: "notes/6E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "6", path: "notes/6F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "6", path: "notes/6Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "6", path: "notes/6G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "6", path: "notes/6Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "6", path: "notes/6A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "6", path: "notes/6As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "6", path: "notes/6B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "7", path: "notes/7C", tag: document.createElement('audio')},
{note: ['D♭', 'C♯', 'D♭/C♯'], octave: "7", path: "notes/7Cs", tag: document.createElement('audio')},
{note: ['D', 'D', 'D'], octave: "7", path: "notes/7D", tag: document.createElement('audio')},
{note: ['E♭', 'D♯', 'E♭/D♯'], octave: "7", path: "notes/7Ds", tag: document.createElement('audio')},
{note: ['E', 'E', 'E'], octave: "7", path: "notes/7E", tag: document.createElement('audio')},
{note: ['F', 'F', 'F'], octave: "7", path: "notes/7F", tag: document.createElement('audio')},
{note: ['G♭', 'F♯', 'G♭/F♯'], octave: "7", path: "notes/7Fs", tag: document.createElement('audio')},
{note: ['G', 'G', 'G'], octave: "7", path: "notes/7G", tag: document.createElement('audio')},
{note: ['A♭', 'G♯', 'A♭/G♯'], octave: "7", path: "notes/7Gs", tag: document.createElement('audio')},
{note: ['A', 'A', 'A'], octave: "7", path: "notes/7A", tag: document.createElement('audio')},
{note: ['B♭', 'A♯', 'B♭/A♯' ], octave: "7", path: "notes/7As", tag: document.createElement('audio')},
{note: ['B', 'B', 'B'], octave: "7", path: "notes/7B", tag: document.createElement('audio')},
{note: ['C', 'C', 'C'], octave: "8", path: "notes/8C", tag: document.createElement('audio')}
];
//init src
for (i = 0; i < notes.length; i++) {
    var obj = notes[i];
    obj.tag.src = obj.path + ".mp3";
}

//MAIN PLAY FUNCTION
$scope.answers = [];
$scope.nextAnswers = [];
$scope.play = function(amount, diff, acc) {
    $('.again').slideDown('slow');
    $('.ans').slideDown('slow');
    $scope.answers = [];
    var range = [];
    //check device OS (iOS - Phonegap Media API; Android - Audio tag)
    if (monaca.isIOS) {

        for (i = 0; i < amount; i++) {
            if (diff == 0) {
                range[i] = Math.floor(Math.random() * 24) + 33;
            } else if (diff == 1) {
                range[i] = Math.floor(Math.random() * 48) + 21;
            } else {
                range[i] = Math.floor(Math.random() * notes.length);
            }
            var rand = notes[range[i]];
            $scope.answers[i] = {
                name: rand.note[acc] + rand.octave,
                ios: new Media(rand.path + ".mp3"),
                path: rand.path
            };
        }

        for (i = 0; i < $scope.answers.length; i++) {
            $scope.answers[i].ios.play();
      
        }
    //Android
    } else {
        for (i = 0; i < amount; i++) {
            do {
                if (diff == 0) {
                    var r = Math.floor(Math.random() * 24) + 33;
                } else if (diff == 1) {
                    var r = Math.floor(Math.random() * 48) + 21;
                } else {
                    var r = Math.floor(Math.random() * notes.length);
                }

            } while (range.indexOf(r) != -1);
            range[i] = r;
            var rand = notes[range[i]];
            
            $scope.answers[i] = {
                name: rand.note[acc] + rand.octave,
                path: rand.path,
                android: rand.tag
            };
            rand.tag.load();
        }

        for (i = 0; i < $scope.answers.length; i++) {
            $scope.answers[i].android.play();
        }

    }

}


//shows answers
$scope.showAns = function() {
    $('.ans').slideUp('slow');
    $('.answers').fadeIn( "slow");
    $('.answers:odd').css( "color", "gray" );
}

//plays individual sounds
$scope.playInd = function(ans) {
    if (monaca.isIOS) {
        ans.ios.play();
    } else {
        ans.android.load();
        ans.android.play();
    }
}

//repeats main play, but from answers
$scope.playAgain = function() {
    if (monaca.isIOS) {
        for (i = 0; i < $scope.answers.length; i++) {
            $scope.answers[i].ios.play();
        }
    } else {
        for (i = 0; i < $scope.answers.length; i++) {
            $scope.answers[i].android.load();
            $scope.answers[i].android.play();
        }
    }
}

}]); //controller end
