# React Native: Simple Navigation App 

This project is a boilerplate react-native project which include TypeScirpt setup and ReactNavigation v5 integration.

## Instruction
### Setup RN environment

``` sh
# Set node path via anyenv and nodenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.zprofile
echo 'eval "$(anyenv init -)"' >> ~/.zprofile
exec $SHELL -l
anyenv install nodenv
exec $SHELL -l
nodenv --version

# choose your node version
nodenv install -l
nodenv install x.x.x

# set your node version for your local directory.
nodenv local x.x.x
```

### Making a React Native Project which include Native Code
```sh

# install cli
$ npm install -g react-native-cli
 
# make your project
$ react-native init AwesomeProject  
```

### Install TypeScript

```sh
$ yarn add -D typescript
 
# install type definitions
$ yarn add -D @types/react @types/react-native @types/react-test-renderer
 
# generate typescript project config file
$ npx tsc --init --pretty --sourceMap --target es2015 --outDir ./lib --module commonjs --jsx react
```

### App.js -> App.tsx

```sh
# Make App directory as TypeScript compiler entry point.
$ mkdir App
$ mv App.js ./App.tsx
```

```tsx
// index.js

import { AppRegistry } from 'react-native';

// ./lib is specified as ts-output destination in tsconfig.json
import App from './lib/App';
 
AppRegistry.registerComponent('SampleApp', () => App);
```

## Trouble Shooting

### NODE_BINARY does not found

>error: Can't find the 'node' binary to build the React Native bundle.  If you have a non-standard Node.js installation, select your project in Xcode, find  'Build Phases' - 'Bundle React Native code and images' and change NODE_BINARY to an  absolute path to your node executable. You can find it by invoking 'which node' in the terminal.

try [this](https://qiita.com/kabosu3d/items/bc4d9b1d80e221ca3e3e)