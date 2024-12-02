# Welcome to the PetBuddy Application. 
## Description: 
 This a mobile application for maintaining the pets and for the owners to remember the import timing about the pet. Like taking the pet to the walk. 
 This application will remained the user about the remainders they made to remember the activities of the their pet.

# Environment set up:

## node :
 Install the node, we use npm to run and test so we need the node. 
 You can install the node using home brew.
 The command is ```brew install node```
 - version>=18
 ## watchman:
  Watchman is required to for testing. So install the watchman. You can install the watchman using homebrew.
  - The command is ```brew install watchman```
## mongoDB:
  The database used is mongoDB. 
  - Follow this [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x) to install the mongoDB for mac.
  - Follow this [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) to install the mongoDB for windows.
## Cocoapods: 
- Install the Cocoapods for the ios. Follow the bellow link to install the cocoapods. 
- link : https://guides.cocoapods.org/using/getting-started.html
# Start the Application:
 1. Install the dependencies
  - ```npm install```
  - To set up the vector icons follow this link:https://www.npmjs.com/package/react-native-vector-icons
2. For ios:
 -  ```cd ios && pod install```
3. Configure the metro:
 - ```npm i @react-native/metro-config```
4. Start the application in the emulator /simulator
  ## For ios:
   ```bash
      npm start 
      #or 
      npx react-native run-ios
   ```
  ## For android
  ```bash
    npm start 
    #or
    npx react-native run-android
  ```
## Features:
 1. The application ca handle the multiple users.
 2. One user can contain many pets.
 3. There will be a gallery for the pet and user can add images to the gallery.
 4. The user can add the remainders for pet and notification will be sent to the user at that time. Once the user click on the notification it will be added to the activities.
 5. User can view their details. 

 # UI images:
 ## Starting screen:
 ![alt text](<Simulator Screenshot - Anu - 2024-12-02 at 16.27.40.png>)
 ## Pet details screen
 ![alt text](<Simulator Screenshot - Anu - 2024-12-02 at 16.28.13.png>)

## Services screen
![alt text](<Simulator Screenshot - Anu - 2024-12-02 at 16.28.35.png>)

## Trainings screen.
![alt text](<Simulator Screenshot - Anu - 2024-12-02 at 16.32.13.png>)