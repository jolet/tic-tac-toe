# Tic Tac Toe PhoneGap

A PhoneGap application that connects clasic tic-tac-toe game (writen in jQuery) with native system calls.
Developed as uni assignment for "Mobile Application Development" class.

## Usage
Project build is available at https://build.phonegap.com/apps/2346289/builds

For local build, clone the repo (git clone https://github.com/jolet/tic-tac-toe.git) and run from command line

    phonegap app --port 8080

then open in browser http://localhost:8080/

Since the purpose of app is to test various system resources, app will ask for various system permissions when run, it is fine to deny this this when run from browser if you are privacy conscious. When installing in phone it should also work fine without those permissions. Private data is held only locally on device and is never sent anywhere.

Requested system resources when installing in android phone are

    Security
        - change your audio settings - (cordova Media plugin) - for playing audio effect after winning. If effect is not found, it will be downloaded from https://www.freesound.org/data/previews/162/162473_311243-lq.mp3 (I couldn't make local one in /res/success.mp3 to play)
        - full network access - (cordova network plugin) - for showing network state change on screen
        - modify your contacts - (cordova contacts plugin) - not sure why is it asked, probably because it is mentioned in config.xml file. Not implemented/used in this app.
        
    Privacy
        - precise location (GPS and network based) - (cordova geolocation) - for showing location coordinates on screen
        - read your contacts - (cordova contacts plugin) - not sure why is it asked, probably because it is mentioned in config.xml file. Not implemented/used in this app.
        - read phone status and identity
        - approximate location (network based)
        
    Other
        - control vibration - for vibrate effect when tic tac toe game ends as tie
        
        

#### PhoneGap CLI

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli

