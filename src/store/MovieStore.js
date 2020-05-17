
const initialState = {
    topMovies: null
}

const MovieStore = (state = initialState, action) => {
    if (action.type === 'SHOW_MOVIES') {
        return {
            topMovies: {
                'type': 'top-5-movies',
                'components': [{
                  'type': 'order-select',
                  'items': [{
                    'label': 'Release Date',
                    'valueToOrderBy': 'releaseDate'
                  }, {
                    'label': 'Rank',
                    'valueToOrderBy': 'rank'
                  }]
                }, {
                  'type': 'movie-list',
                  'items': [{
                    'id': 2,
                    'type': 'poster',
                    'rank': 2,
                    'synopsis': 'Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair\'s-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.',
                    'title': 'Raiders of the Lost Ark',
                    'imageUrl': 'https://preview.ibb.co/fn5Xyp/raiders.jpg',
                    'releaseDate': 1981
                  }, {
                    'id': 4,
                    'type': 'poster',
                    'rank': 1,
                    'synopsis': 'Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.',
                    'title': 'Blade Runner',
                    'imageUrl': 'https://preview.ibb.co/h9434U/blade_Runner.jpg',
                    'releaseDate': 1982
                  }, {
                    'id': 3,
                    'type': 'poster',
                    'rank': 4,
                    'synopsis': 'Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. Sarah is targeted because Skynet knows that her unborn son will lead the fight against them. With the virtually unstoppable Terminator in hot pursuit, she and Kyle attempt to escape.',
                    'title': 'The Terminator',
                    'imageUrl': 'https://preview.ibb.co/caykJp/terminator.jpg',
                    'releaseDate': 1984
                  }, {
                    'id': 5,
                    'type': 'poster',
                    'rank': 5,
                    'synopsis': 'A gadget salesman is looking for a special gift for his son and finds one at a store in Chinatown. The shopkeeper is reluctant to sell him the `mogwai\' but sells it to him with the warning to never expose him to bright light, water, or to feed him after midnight. All of this happens and the result is a gang of gremlins that decide to tear up the town on Christmas Eve.',
                    'title': 'Gremlins',
                    'imageUrl': 'https://preview.ibb.co/kVX1r9/gremlins.jpg',
                    'releaseDate': 1984
                  }, {
                    'id': 1,
                    'type': 'poster',
                    'rank': 3,
                    'synopsis': 'Douglas Quaid (Arnold Schwarzenegger) is a bored construction worker in the year 2084 who dreams of visiting the colonized Mars. He visits  \'Rekall, \' a company that plants false memories into people\'s brains, in order to experience the thrill of Mars without having to travel there. But something goes wrong during the procedure; Quaid discovers that his entire life is actually a false memory and that the people who implanted it in his head now want him dead.',
                    'title': 'Total Recall',
                    'imageUrl': 'https://preview.ibb.co/iw87W9/total_Recall.jpg',
                    'releaseDate': 1990
                  }]
                }]
              }

            
        }
    }
    return state;
};

export default MovieStore;