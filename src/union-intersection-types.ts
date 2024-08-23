

type a = {
    one: string,
    two: number,
    three: boolean
}

type B = a & {

}

type C = {
    four: string
}

type mix = C & a;

function printValues(obj: a): void {
    console.log(obj.one, obj.two, obj.three);
}