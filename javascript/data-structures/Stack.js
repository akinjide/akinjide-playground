class Stack {
  constructor() {
    this.store = []
    this.top = 0
  }

  push(elem) {
    return this.store[this.top++] = elem
  }

  pop() {
    return this.store[--this.top]
  }

  peek() {
    return this.store[this.top - 1]
  }

  clear() {
    return this.top = 0
  }

  size() {
    return this.top
  }
}

export { Stack }
