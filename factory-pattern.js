class Enemy {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    attack() {
        console.log(`${this.name} tấn công!`);
    }
}
class Zombie extends Enemy {
    constructor() {
        super('Zombie', 100);
    }
    attack() {
        console.log('Zombie cắn!');
    }
}
class Vampire extends Enemy {
    constructor() {
        super('Vampire', 150);
    }
    attack() {
        console.log('Vampire hút máu!');
    }
}
function createEnemy(type) {
    if (type === 'zombie') {
        return new Zombie();
    } else if (type === 'vampire') {
        return new Vampire();
    }
    return null;
}

const e1 = createEnemy('zombie');
const e2 = createEnemy('vampire');
e1.attack(); // Zombie cắn!
e2.attack(); // Vampire hút máu!
// dùng khi muốn tạo object linh hoạt mà không cần phải expose constructor