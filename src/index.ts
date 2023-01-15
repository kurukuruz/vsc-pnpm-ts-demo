import { version } from 'node:process'
import { getHello } from './greet'

console.log(version)
console.log(getHello('world'))
