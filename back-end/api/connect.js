// JavaScript Assíncrono
//await async
// Fullfilled

import { MongoClient } from 'mongodb'
import { MONGO_URI } from '../config.js'

const URI = MONGO_URI

const client = new MongoClient(URI)

export const db = client.db('spotifyHashtag')
