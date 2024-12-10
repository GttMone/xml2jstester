const feed = 'https://www.colibri.bg/xml/colibri_books.php';
import axios from 'axios';
import fs from 'node:fs/promises';
import { parseStringPromise as parseXMLFeed } from 'xml2js';
const res = await axios.get(feed, { auth: { username: 'guest', password: 'xmltoguest' } });
const parsedFeed = await parseXMLFeed(res.data, { async: true, explicitArray: false });
await fs.writeFile('output.json', JSON.stringify(parsedFeed, null, 2));
