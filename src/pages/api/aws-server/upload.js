/* eslint-disable no-console */
import { toFileName } from '@functions/to-file-name'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

export const awsUpload = async (fileName, file, privateKey) => {
  const s3Client = new S3Client({
    endpoint: process.env.NEXT_PUBLIC_ENDPOINT,
    region: process.env.NEXT_PUBLIC_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY
    }
  })
  const updatedFileName = !fileName.endsWith('/') ? fileName : fileName.slice(0, fileName.lastIndexOf('/'))
  const extension = file?.name?.slice(file?.name?.lastIndexOf('.'))
  const Key = toFileName(`${updatedFileName}${extension}`)

  if (fileName && file) {
    try {
      const command = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_BUCKET_ID,
        Key,
        Body: file,
        ACL: privateKey ? 'private' : 'public-read-write',
        ContentType: file.type,
        ContentDisposition: 'inline'
      })

      const results = await s3Client.send(command)

      if (results?.$metadata?.httpStatusCode === 200) {
        return { status: true, Key }
      } else {
        null
      }
    } catch (err) {
      console.info('error => ', err)

      return null
    }
  } else {
    return null
  }
}
