import { Photo } from './../../components/photos/types';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Photo>
) {
    const photo:Photo = req.body
    const newPhoto = {...photo, favourite:!photo.favourite }
    res.status(200).json(newPhoto)
}