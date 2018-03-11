//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"


func farenheitToCelsius(value: Double) -> Double {
    return (((value - 32) * 5) / 9)
}

func celsiusToFarenheit(value: Double) -> Double {
    return (((value * 9) / 5) + 32)
}

func buildASentence(subject: String, verb: String, noun: String) -> String {
//    return subject + " " + verb + " " + noun + "!"
    return "\(subject) \(verb) \(noun)!"
}

func addMyAccountBalances(balances: Double...) -> Double {
    var result : Double = 0
    
    for balance in balances {
        result += balance
    }
    
    return result
}

func findLargestBalance(balances: Double...) -> Double {
    var result : Double = -Double.infinity
    
    for balance in balances {
        if balance > result {
            result = balance
        }
    }
    
    return result
}

func findSmallestBalance(balances: Double...) -> Double {
    var result : Double = Double.infinity
    
    for balance in balances {
        if balance < result {
            result = balance
        }
    }
    
    return result
}

let account1 = ("State Bank Personal", 1011.10)
let account2 = ("State Bank Business", 24309.63)

func deposit(amount: Double, account: (name: String, balance: Double)) -> (String, Double) {
    let newBalance : Double = account.balance + amount
    return (account.name, newBalance)
}

func withdraw(amount: Double, account: (name: String, balance: Double)) -> (String, Double) {
    let newBalance : Double = account.balance - amount
    return (account.name, newBalance)
}

func bankVault(passcode: String) -> String {
    func openBankVault() -> String {
        return "Vault Opened"
    }
    
    func closeBankVault() -> String {
        return "Vault Closed"
    }
    
    if passcode == "secret" {
        return openBankVault()
    } else {
        return closeBankVault()
    }
}

func chooseTransaction(transaction: String) -> (Double, (String, Double)) -> (String, Double) {
    if transaction == "Deposit" {
        return deposit
    }
    
    return withdraw
}

func cashBestCheck(from: String, to: inout String, total: Double) -> String {
    if to == "Cash" {
        to = from
    }
    
    return "Check payable from \(from) to \(to) for $\(total) has been cashed"
}


let outdoorTemperatureInFarenheit = double_t(90)
let outdoorTemperatureInCelsius = farenheitToCelsius(value: outdoorTemperatureInFarenheit);
let outdoorTemperature = celsiusToFarenheit(value: outdoorTemperatureInCelsius);

buildASentence(subject: "Swift", verb: "is", noun: "cool")
buildASentence(subject: "I", verb: "<3", noun: "languages")

addMyAccountBalances(balances: 77.87)
addMyAccountBalances(balances: 10.52, 11.30, 100.60)
addMyAccountBalances(balances: 345.12, 1_000.80, 233.10, 104.80, 99.90)

findLargestBalance(balances: 345.12, 1_000.80, 233.10, 104.80, 99.90)
findSmallestBalance(balances: 345.12, 1_000.80, 233.10, 104.80, 99.90)

let mondayTransaction = deposit
let fridayTransaction = withdraw

let mondayBalance = mondayTransaction(300.0, account1)
let fridayBalance = fridayTransaction(1200, account2)

chooseTransaction(transaction: "withdraw")(63.17, account1)

bankVault(passcode: "secret")
var payee = "Cash"
cashBestCheck(from: "James Perry", to: &payee, total: 103.00)

extension Int {
    func progress(_ work: () -> ()) {
        for _ in 0..<self {
            work()
        }
    }
}

5.progress({
    print("Hello World")
})

extension String {
    mutating func decorate() {
        self = "*** " + self + " ***"
    }
}

var testString = "decorate this"
testString.decorate()


extension Double {
    var F: Double { return self }
    var C: Double { return (((self - 32.0) * 5.0) / 9.0) }
    var K: Double { return (((self - 32.0) / 1.8) + 273.15) }
}

var tempF = 80.4.F
var tempC = tempF.C
var tempK = tempF.K


extension Int {
    var kb: Int { return self * 1_024 }
    var mb: Int { return self * 1_024 * 1_024 }
    var gb: Int { return self * 1_024 * 1_024 * 1_024 }
}

var x: Int = 4.kb
var y = 8.mb
var z = 2.gb


var arr = [1, 2, 3]
var newarr = arr + [4, 5]
print(newarr)

// Generics
func areValueEqual<T: Equatable>(value1: T, value2: T) -> Bool {
    return value1 == value2
}

areValueEqual(value1: 3, value2: 3)
areValueEqual(value1: 3.3, value2: 1.4)
areValueEqual(value1: "first", value2: "second")

// Overloading operators
struct Matrix2x2 {
    var a11 = 0.0, a12 = 0.0
    var a21 = 0.0, a22 = 0.0
}

func + (left: Matrix2x2, right: Matrix2x2) -> Matrix2x2 {
    return Matrix2x2(a11: left.a11 + right.a11, a12: left.a12 + right.a12, a21: left.a21 + right.a21, a22: left.a22 + right.a22)
}

var A: Matrix2x2 = Matrix2x2(a11: 1, a12: 3, a21: 5, a22: 6)
var B: Matrix2x2 = Matrix2x2(a11: 2, a12: 6, a21: 4, a22: 8)

var C = A + B
