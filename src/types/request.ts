export type RequestProps = {
    wind: {
        speed?: string,
    },
    main: {
        temp?: string,
        humidity?: string,
    },
    weather:{
        0: {
            description: string,
        }
    },
    name?: string,
}