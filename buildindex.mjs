import Fuse from './src/assets/vend/fuse.mjs';
import searchjson from './_site/assets/search.json' assert { type: 'json' };
import contentjson from './_site/assets/search.json' assert { type: 'json' };
import { promises as fs } from 'fs';

const keys = ['title', 'content', 'tags', 'categories'];

for (let ii = 0; ii < contentjson.length; ++ii) {
    searchjson[ii].content = contentjson[ii];
}
const index = Fuse.createIndex(keys, searchjson);
await fs.writeFile('./src/assets/index.json', JSON.stringify(index.toJSON()))
