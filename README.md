# Simple Buttons

The "minimum" in "minimum viable product". This is just three buttons that change the background colour of the app.

## Getting Started

Install meteor [here](https://www.meteor.com/install)

```bash
git clone https://github.com/DataMinerUK/simple-buttons.git
cd simple-buttons
meteor npm install
```

To run in the browser on localhost:3000:
```bash
PARTICLE_USERNAME=<username_for_particle_account> PARTICLE_PASSWORD=<password_for_particle_account> meteor
```

To run in ios emulator (requires Xcode):
```bash
meteor run ios
```

If you have an Apple developer account, you can also run your app on an iOS device. Run the following command:
```bash
meteor run ios-device
```
This will open Xcode with a project for your iOS app. You can use Xcode to then launch the app on any device or simulator that Xcode supports.
