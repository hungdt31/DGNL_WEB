// Singleton.js
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Khởi tạo đối tượng
    this.data = {
      value: 0
    };
    
    // Lưu instance của đối tượng
    Singleton.instance = this;

  }

  // Các phương thức và thuộc tính của đối tượng
  setData(newData) {
    this.data = newData;
  }

  getData() {
    return this.data;
  }
  increaseValue() {
    this.data.value += 1
    // Singleton.instance = this
  }
  decreaseValue() {
    this.data.value -= 1
    // Singleton.instance = this
  }
}

export default Singleton;
