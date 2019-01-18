[![Build Status](https://www.travis-ci.org/IceyIsAlreadyTaken/deepCopy.svg?branch=master)](https://www.travis-ci.org/IceyIsAlreadyTaken/deepCopy)

## Install
```
yarn add icey-deepcopy
```

## How to Use
```
import deepcopy from 'icey-deepcopy';

let obj1 = {
    name: 'obj1',
    friends: ['tom']
}

let obj2 = deepcopy(obj1);
obj1.friends.push('jack');
console.log('obj2', obj2); 
// {
//    name: 'obj1',
//    friends: ['tom']
// }
```