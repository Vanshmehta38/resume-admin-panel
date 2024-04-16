/* eslint-disable no-console */
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

export const awsDownload = async (filename, duration) => {
  const s3Client = new S3Client({
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT,
    region: process.env.NEXT_PUBLIC_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY
    }
  })

  if (filename) {
    const command = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_BUCKET_ID,
      Key: filename,
      expiresIn: duration ? duration : 4
    })

    const url = await getSignedUrl(s3Client, command, {
      expiresIn: duration ? duration : 4
    })

    return url
  } else {
    return null
  }
}

// +==================+==================+==================+==================+==================+==================
