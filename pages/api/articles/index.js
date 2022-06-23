import { articles } from '../../../data'

export default function handler(req, response) {
    return response.status(200).json(articles)
}