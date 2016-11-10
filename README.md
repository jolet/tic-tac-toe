# Tic Tac Toe PhoneGap

A PhoneGap application that connects clasic tic-tac-toe game (local, 2 player) with native system calls.
Developed as uni assignment for "Mobile Application Development" class.

## Usage
Project build is available at https://build.phonegap.com/apps/2346289/builds

For local build, clone the repo (git clone https://github.com/jolet/tic-tac-toe.git) and run from command line

    phonegap app --port 8080

then open in browser http://localhost:8080/

Since the purpose of app is to test available system resources, app will ask for various system permissions when run, it is fine to deny this when run from browser if you are privacy conscious. When installing in phone it should also work fine without those permissions. Private data is held only locally on device and is never sent anywhere.


![alt tag](https://raw.githubusercontent.com/jolet/tic-tac-toe/master/www/res/phonegap_tic_tac_toe_preview.png)

![alt tag](https://raw.githubusercontent.com/jolet/tic-tac-toe/master/www/res/phonegap_tic_tac_toe_UI_info.png)

## Requested permissions
 When installing in android powered phone, application will ask for following permissions:

    ### Security
        - change your audio settings - (cordova Media plugin) - for playing audio effect after winning. If effect is not found, it will be downloaded from https://www.freesound.org/data/previews/162/162473_311243-lq.mp3 (I couldn't make local one in /res/success.mp3 to play)
        - full network access - (cordova network/media plugin) - for showing network state change on screen
        
    ### Privacy
        - approximate location (network based) - (cordova geolocation) - for showing location coordinates on screen
        - precise location (GPS and network based) - (cordova geolocation) - for showing location coordinates on screen

    ### Other
        - control vibration - for vibrate effect when tic tac toe game ends as tie
        - view network connections - (cordova network/media plugin) - for showing network state change on screen
        - record audio, modify or delete the contents of your USB storage, read the contents of your USB storage - (cordova Media plugin) - not used in this app, 
        
## Notes
    - application was tested in android and windows x64 platforms only. Other platforms were not tested. 

## Credits
    - jQuery Tic Tac Toe code from ThingsILearned By Dave Fowler http://thingsilearned.com/2009/06/02/tictactoe-in-jquery/
    - Phonegap hello world template from https://github.com/phonegap/phonegap-template-hello-world for quick start
    - Phonegap CLI for making everything available from command line http://docs.phonegap.com/references/phonegap-cli/
    - Phonegap Build for free builds https://build.phonegap.com
    - cool cordova page with nice docs https://cordova.apache.org/docs/en/latest/config_ref/index.html
    - cool professor for not making me reinvent the wheel and letting me integrate instead

## Todo
    - split game logic in separate file
    - fix android not playing local mp3 sound effect
    - add 2 player online mod
    - add AI mod
