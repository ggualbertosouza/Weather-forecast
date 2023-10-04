export type RequestProps = {
    wind: {
        speed?: string,
    },
    main: {
        temp?: number,
        humidity?: string,
    },
    weather:{
        0: {
            description: string,
        }
    },
    name?: string,
}