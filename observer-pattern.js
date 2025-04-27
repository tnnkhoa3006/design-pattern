class Boss {
    constructor(){
        this.observers = [],
        this.state = 'idle';
    }

    subcribe(observer){
        this.observers.push(observer);
    }

    unsubcribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyAll(){
        this.observers.forEach(observer => observer.update(this.state));
    }

    changeState(newstate){
        this.state = newstate;
        console.log(`Boss state changed to: ${this.state}`);
        this.notifyAll();
    }
}

class Player {
    constructor(name){
        this.name = name;
    }

    update(state){
        console.log(`${this.name} received boss state: ${state}`);
    }
}

const boss = new Boss();

const player1 = new Player("Khoa");
const player2 = new Player("Nguyen");

boss.subcribe(player1);
boss.subcribe(player2);

boss.changeState("attacking"); // Boss state changed to: attacking
boss.changeState("defending"); // Boss state changed to: defending

boss.unsubcribe(player1);

boss.changeState("dead"); // Boss state changed to: idle

boss.changeState("attacking"); // Boss state changed to: attacking
boss.changeState("defending"); // Boss state changed to: defending