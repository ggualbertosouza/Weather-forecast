export const animate = {
    open: {
        display: 'block',
        x: 0,
        scaleX: [0, 0.5, 1],
        scale: [0, 0.3, 0.6, 1],
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
    close: {
        scaleX: [1, 0.5, 0],
        x: 0,
        transition: {
            type: 'spring',
            duration: 1,
        },        
    }
}

export const buttonMotion ={
    open:{
        x:0,
        duration: 1,
    },
    close: {
        x: -130,
        duration: 1,
    }
}