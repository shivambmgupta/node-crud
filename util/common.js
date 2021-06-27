import fs from 'fs';

const getRoute = (req) => {
    const route = req.route ? req.route.path : ''; 
    const baseUrl = req.baseUrl ? req.baseUrl : '';
    return route ? `${baseUrl === '/' ? '' : baseUrl}${route}` : 'unknown route'
  }

const FILE_PATH = 'stats.json'

export const readStats = () => {
    let result = {}
    try {
        result = JSON.parse(fs.readFileSync(FILE_PATH))
    } catch (err) {
        console.error(err)
    }
    return result;
}

export const dumpStats = (stats) => {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
    } catch (err) {
        console.error(err)
    }
}

export const tracker = ((req, res, next) => {
    res.on("end", () => {
        const stats = readStats()
        const event = `${req.method} ${getRoute(req)} ${res.statusCode}`
        stats[event] = stats[event] ? stats[event] + 1 : 1
        dumpStats(stats) 
    })
    next();
 });
