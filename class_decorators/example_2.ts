function someDecorator<T extends new(...args: any[]) => {}>(targetClass: T) {
    console.log('someDecorator evaluated');
    return class extends targetClass {
        constructor(...args: any[]) {
            super();
            console.log('someDecorator constructor called');
        }
    };
}

function anotherDecorator<T extends new(...args: any[]) => {}>(targetClass: T) {
    console.log('anotherDecorator evaluated');
    return class extends targetClass {
        constructor(...args: any[]) {
            super();
            console.log('anotherDecorator constructor called');
        }
    };
}

@someDecorator
@anotherDecorator
class SomeClass {
}

const someClass = new SomeClass();
