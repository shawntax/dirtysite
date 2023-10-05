const fs = require('fs')
const jsonfile = require('jsonfile')
const parseISO = require('date-fns/parseISO')
const format = require('date-fns/format')

async function main() {
  fs.readdirSync('../content/events').map(async (fileName) => {
    const path = `../content/events/${fileName}`
    const event = await jsonfile.readFile(path)

    let newEvent = {
      ...event,
      publishDate: format(
        parseISO(event.publishDate),
        "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
      ),
      eventDate: format(
        parseISO(event.eventDate),
        "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
      ),
    }

    await jsonfile.writeFile(path, newEvent, { spaces: 2, finalEOL: false })
  })
}

main()
