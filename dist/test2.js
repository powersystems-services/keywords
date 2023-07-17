import {VN_Keywords_Power_Systems } from "./keywords.js";


let strTest = "công tắc kỹ thuật số điều khiển vùng"

strTest = strTest.trim()

VN_Keywords_Power_Systems.forEach(function(i) {
    let re = new RegExp('(?<=[\\s,.:;"\']|^)' + i + '(?=[\\s,.:;"\']|$)', 'gi');

    if(strTest.match(re)) {
        console.log('match')
        console.log(re)
        console.log(i)
        console.log(strTest.match(re).length)
    }
})