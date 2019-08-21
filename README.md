
# react-native-wrathys-lib-demo

[![npm version](https://badge.fury.io/js/react-native-wrathys-lib-demo.svg)](https://badge.fury.io/js/react-native-wrathys-lib-demo)

## Getting started

`$ npm install react-native-wrathys-lib-demo --save`

### Mostly automatic installation

`$ react-native link react-native-wrathys-lib-demo`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNWrathysLibDemoPackage;` to the imports at the top of the file
  - Add `new RNWrathysLibDemoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-wrathys-lib-demo'
  	project(':react-native-wrathys-lib-demo').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-wrathys-lib-demo/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation project(':react-native-wrathys-lib-demo')
  	```


## Usage
```javascript
import RNWrathysLibDemo from 'react-native-wrathys-lib-demo';

RNWrathysLibDemo.show("Test toast", RNWrathysLibDemo.SHORT);
// or
RNWrathysLibDemo.show("Test toast", RNWrathysLibDemo.LONG);
```
  
