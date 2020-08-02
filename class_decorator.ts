
function classDecorator<T extends new(...args: any[]) => {}>(targetClass: T) {
    return class extends targetClass {
        public newMember: boolean = true;
        public oldMember: number = 2;
        private myValue = 'Hello TypeScript';
    };
}

@classDecorator
class MyClass {
    public oldMember: string = '1';
    private _myValue: string;

    constructor(myValue: string) {
        this._myValue = myValue;
    }

    get myValue(): string {
        return this._myValue;
    }

    set myValue(myValue: string) {
        this._myValue = myValue;
    }
}

const myClass = new MyClass('Hello World!');
console.log(myClass.myValue);
