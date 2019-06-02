# Project Title

React Native TDD Example Project

## Installing

How to install Detox

```
npm install -g detox-cli
```

```
brew install wix/brew/applesimutils
```

After installing detox-cli, go to the project path

```
npm install detox --save-dev
```

```
detox init -r jest
```

And add configurations to package.json.

```
"detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/TDDRN/Build/Products/Debug-iphonesimulator/TDDRN.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "name": "iPhone 7"
    }
  }
}
```

## Running the tests

npm jest
npm detox