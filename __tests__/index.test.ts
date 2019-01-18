import deepCopy from '../src/index';


describe("deepCopy", () => {
    it("should return self when source is not array nor object", () => {
        const fn1 = () => { console.log('hello') };
        const str1 = 'hello';
        const num1 = 123;
        const regex1 = /ab+c/;
        const bool1 = false;
        const null1 = null;
        const date1 = new Date('2019,01,19');

        expect(deepCopy(fn1)).toBe(fn1);
        expect(deepCopy(str1)).toBe('hello');
        expect(deepCopy(num1)).toBe(123);
        expect(deepCopy(regex1)).toEqual(/ab+c/);
        expect(deepCopy(bool1)).toBe(false);
        // expect(deepCopy(name)).toBeUndefined();
        expect(deepCopy(null1)).toBeNull();
        expect(deepCopy(date1)).toEqual(new Date('2019,01,19'));

    })
    it("should deep copy array", () => {
        const arr1 = ['jack', ['rose']];
        const arr2 = deepCopy(arr1);
        expect(arr2).toEqual(arr1);

        (arr1[1] as Array<string>).push('alice');
        arr1.push('tom');

        expect(arr1).toEqual(['jack', ['rose', 'alice'], 'tom']);
        expect(arr2).toEqual(['jack', ['rose']]);
    })
    it("should deep copy array in object", () => {
        const obj1 = {
            friends: ['jack', ['rose']],
        }
        const obj2 = deepCopy(obj1);

        expect(obj2).toEqual(obj1);

        (obj1.friends[1] as Array<string>).push('alice');
        obj1.friends.push('tom');
        expect(obj1).toEqual({
            friends: ['jack', ['rose', 'alice'], 'tom']
        })
        expect(obj2).toEqual({
            friends: ['jack', ['rose']]
        });

    });

    it("should deep copy object in object", () => {
        const obj1 = {
            foo: 'foo',
            bar: {
                name: 'bar'
            }
        }

        const obj2 = deepCopy(obj1);
        expect(obj2).toEqual(obj1);

        obj1.foo = 'change';
        obj1.bar.name = 'changebar';

        expect(obj1).toEqual({
            foo: 'change',
            bar: {
                name: 'changebar'
            }
        });

        expect(obj2).toEqual({
            foo: 'foo',
            bar: {
                name: 'bar'
            }
        })

    });

    it("should copy function in object", () => {
        const obj1 = {
            fn: () => { console.log('hello') }
        };
        const obj2 = deepCopy(obj1);
        expect(obj2).toEqual(obj1);
    })

    it("should copy own property", () => {
        var obj1 = Object.create({ 'favourite': 'watermelon' }, {
            foo: {
                writable: true,
                configurable: true,
                value: "hello",
                enumerable: true
            }
        });
        expect(obj1.favourite).toBe('watermelon');
        var obj2 = deepCopy(obj1);
        console.log(obj2);
        expect(obj2).toEqual({ foo: 'hello' });
        expect(obj2.favourite).toBeUndefined;
    });

})