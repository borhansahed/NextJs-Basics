import { name } from "../../data/name";


export default function handler(req, res) {
  res.status(200).json(name)
}
