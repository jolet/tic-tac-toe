/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log("navigator.geolocation works well");

        var watchID = navigator.geolocation.watchPosition(geo.onSuccess, geo.onError, { timeout: 30000 });
        console.log(watchID);
    },

    changeStatusBar: function() {
      StatusBar.backgroundColorByHexString("#4B946A");
    },

    vibrate: function() {
      navigator.notification.vibrate( 1000 );
    },
  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var geo = {
      // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    onSuccess: function (position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;

        console.log(element.innerHTML)
    },

    // onError Callback receives a PositionError object
    //
    onError: function (error) {
      var element = document.getElementById('geolocation');
        element.innerHTML = 'code: '    + error.code    + '\n' + 'message: ' + error.message + '\n';
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    //var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
}

/* Main Game Handling class */
var TicTacToe = {
    turn: "O",  // Keeps a record of who's turn it is
    board: ["", "", "", "", "", "", "", "", "", ""],  // Keeps a record of the TicTacToe Board
    win: false, // records who won if the game is over

    // Clears and start*s a new game with a new board /
    restartGame: function() {
      // Draw the board
      var board_table = '<table id="le_table" cellpadding="0px" cellspacing="0px" align="center" border="0px" class="board"><tr><td id="ttt0"> </td><td id="ttt1"> </td><td id="ttt2"> </td></tr><tr><td id="ttt3"> </td><td id="ttt4"> </td><td id="ttt5"> </td></tr><tr><td id="ttt6"> </td><td id="ttt7"> </td><td id="ttt8"> </td></tr></table>';
      $("#board_div").html(board_table);
      $("#menu").hide();

      // clear the board
      this.board = ["", "", "", "", "", "", "", "", "", ""];

      // Add on-click events to each of the boxes of the board
      $("#board_div td").click(function(e) {
          TicTacToe.move( e.target.id );
         });

    },

    // Handles clicks spaces on the board /
    move: function(id) {
      app.changeStatusBar();
      var space = $("#" + id);  // Board space table element
      var num = id.replace("ttt", ""); // # representing the space on the board

      // If no one's gone there, and the game isn't over, go there!
      if (!this.board[num] && !this.win) {
        space.html( this.turn );
        this.board[num] = this.turn;
        this.nextTurn();  // End turn
      }
    },

    // Iterate turn and check if anyone one yet /
    nextTurn: function() {
      this.turn = (this.turn == "O") ? "X" : "O";
      this.win = this.check4Win();
      if (this.win) {
          this.endGame();
      }
    },

    // Display who won and options for new games /
    endGame: function() {
      app.vibrate(2000);
      if (this.win == "Cat") {
          $("#menu").html("Cats Game.");
      } else {
          $("#menu").html("Player " + this.win + " wins!");
      }
      $("#menu").append("<div id='play_again'>Play Again</div>");

      // Button for playing again.
      $("#play_again").click(function () { TicTacToe.restartGame();  });
      $("#menu").show();
      this.win = false;

    },

    // If any of these patters of board spaces have all X's or all O's somebody won!
    wins: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],

    // Check for whether someone won the game of it was a Cat's game. /
    check4Win: function() {

      // Loop through all possible winning combinations
      for (k in this.wins){
        var pattern = this.wins[k];
            var p = this.board[pattern[0]] + this.board[pattern[1]] + this.board[pattern[2]];
            if (p == "XXX") {
              return "X";  // X Won!
            } else if (p == "OOO") {
              return "O";  // O Won!
            }
          }

          // Check if all spaces in the board are filled, then its a Cat's game
          var cnt = 0;
          for (s in this.board) {
            if (this.board[s]) { cnt+=1; }
          }
          if (cnt == 9) {
            return "Cat";  // Cat's game!
          }
      }
    };

    $(document).ready(function() {
        // Start a game!
        TicTacToe.restartGame();
    });