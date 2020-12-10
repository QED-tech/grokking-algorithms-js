let graph = {}

graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = ['mango-seller']
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []


const search = (name) => {
    let search_queue = []
    search_queue = graph[name]
    let searched = []
    
    while (search_queue.length !== 0) {
        person = search_queue.shift()
        if (!searched.includes(person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller`)
                return true
            } else {
                pushToQueue(graph[person], search_queue)
                searched.push(person)
            }   
        }
    }
    return false
}

const pushToQueue = (list, queue) => {
    for (let i = 0; i < list.length; i += 1) {
        queue.push(list[i]);
    }
    return queue;
}

const personIsSeller = (name) => {
    return name === 'mango-seller'
}

search('you')