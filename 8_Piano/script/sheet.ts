import { littleStar } from './pianoItems.js'

export default class Sheet {
    key :HTMLButtonElement

    constructor(key:HTMLButtonElement) {
        this.key = key
    }
}