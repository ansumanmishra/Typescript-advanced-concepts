interface Point {
    x: string;
    y: number;
}

type PointProps = keyof Point;

const a: PointProps = 'x';
const b: PointProps = 'y';

type ReadonlyProps<T> = {
    readonly [Key in keyof T]:  T[Key]
}

const obj: ReadonlyProps<Point> = {
    x: '11',
    y: 123
}

// obj.y = 15; // Throws error

// Adds a prefix to the keys of an object
type PrefixProp<T> = {
    [Key in keyof T as `format_${Key extends string ? Key : never}`]: T[Key]
}

const point1: PrefixProp<Point> = {
    format_x: 'aa',
    format_y: 123
}