import { findAllContent, findOneContent } from '@/controllers'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

  const { slug } = req.query

  const thisPost = await findOneContent({ slug: slug })
  const children = await findAllContent({ parent_id: thisPost?._id.toString() })

  return res.status(200).json(children)
}