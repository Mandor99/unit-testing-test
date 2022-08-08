import { Photo } from './../../components/photos/types';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Photo[] | {message: string}> 
  //message for the error in catch (.response.data.message)) to be in the response if data fail
) {
  // res.status(500).json({message: 'this is MSG from server error'})
  res.status(200).json([
    {
      id: 1,
      title: `${
        req.query.name.toString() || 'Unknown'
      }: accusamus beatae ad facilis cum similique qui sunt`,
      thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
      favourite: false,
    },
    {
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
      favourite: false,
    },
    {
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
      favourite: false,
    },
    {
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
      favourite: false,
    },
    {
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      thumbnailUrl: `https://picsum.photos/150/150?${Math.random()}`,
      favourite: false,
    },
  ])
}
