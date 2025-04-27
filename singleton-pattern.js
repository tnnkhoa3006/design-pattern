const GameManager  = (function () {
    let instance;

    function createInstance() {
        return {
            Player: [],
            addPlayer: function (name){
                this.Player.push(name);
                console.log(`Player ${name} dã vào game`);
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const game1 = GameManager.getInstance();
game1.addPlayer("Khoa");
const game2 = GameManager.getInstance();
game2.addPlayer("Nguyen");
console.log(game1 === game2); // true, cả hai đều là instance của GameManger


// Dùng khi bạn muốn giới hạn số lượng instance (1 cái duy nhất)