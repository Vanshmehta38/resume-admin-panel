/* eslint-disable no-console */
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3'

export const awsDelete = async fileName => {
  const s3Client = new S3Client({
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT,
    region: process.env.NEXT_PUBLIC_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY
    }
  })

  if (fileName) {
    const command = new DeleteObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_BUCKET_ID,
      Key: fileName
    })

    try {
      const results = await s3Client.send(command)

      return results
    } catch (err) {
      return null
    }
  } else {
    return null
  }
}
