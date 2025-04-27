function Player(name, level) {
    this.name = name;
    this.level = level;
    this.sayhi = function() {
        console.log( `Hello ${this.name}, your level is ${this.level}`);
    }
}
const player1 = new Player("Khoa", 10);
player1.sayhi();
// dùng kki bạn có một mẫu object rõ ràng, và muốn khởi tạo nhiều instance từ đó