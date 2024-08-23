let myobj: {
    readonly name: string,
    readonly age: number,
    city: string,
    skills: {
        language: string,
        framework: string,
        db?: string // optional property
    }
} = {
    name: "ayman",
    age: 30,
    city: "cairo",
    skills: {
        language: "typescript",
        framework: "react",
        db: "mongo"
    }
}