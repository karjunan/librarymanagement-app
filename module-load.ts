interface Periodical {

}

class Magazine implements Periodical {

}

interface NewsPaper extends Periodical {
    
}   

export {
    Periodical, Magazine,NewsPaper as news
}