//: Playground - noun: a place where people can play

import UIKit

var str : String = "Hello, Playground"

var trafficLight = "Red"

if trafficLight != "Green" {
    print("Stop!")
} else {
    print("Go!")
}

var number1 : Int = 33
var number2 : Int = 101

if number1 >= number2 {
    print("33 is greater than 101")
} else {
    print("33 is less than 101")
}

let tree1 = "Oak"
let tree2 = "Pecan"
let tree3 = "Maple"

let treeCompare1 = tree1 > tree2
let treeCompare2 = tree2 > tree3

var treeArray : [String] = [tree1, tree2, tree3]

for tree in treeArray {
    if tree == "Oak" {
        print("Furniture")
    } else if tree == "Pecan" {
        print("Pie")
    } else if tree == "Maple" {
        print("Syrup")
   }
}

treeArray += ["Cherry"]

for tree in treeArray {
    switch tree {
    case "Oak":
        print("Furniture")
    case "Pecan", "Cherry":
        print("Pie")
    case "Maple":
        print("Syrup")
    default:
        print("Wood")
    }
}




var base = 2
var target = 1000
var value = 0

while value < target {
    value += base
}

repeat {
    value += base
} while value < target


let speedLimit = 75;
var carSpeed = 0;

while carSpeed < 100 {
    carSpeed += 1
    switch carSpeed {
        case 0..<20:
            print("\(carSpeed): You're going really slow")
        case 20..<30:
            print("\(carSpeed): Pick up the pace")
        case 30..<40:
            print("\(carSpeed): Tap the accelerator")
        case 40..<50:
            print("\(carSpeed): Hitting your stride")
        case 50..<60:
            print("\(carSpeed): Moving at a good clip")
        case 60..<70:
            print("\(carSpeed): Now you're cruising")
        case 70...speedLimit:
            print("\(carSpeed): Warning... approaching the speed limit")
        default:
            print("\(carSpeed): You're going too fast!")
    }
    
    if carSpeed > speedLimit {
        break
    }
}
