const LinkFilter = (contact: string) => {
    switch(contact){
        case 'github':
            return 'https://github.com/RyanLimaDev'
        case 'linkdin':
            return 'https://www.linkedin.com/in/ryanlimax/'
        default:
            return 'https://www.youtube.com/watch?v=bYDT2zWsQXU'
    }
}

export default LinkFilter