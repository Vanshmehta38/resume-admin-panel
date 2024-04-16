import { Box, Typography } from '@mui/material'

// ** Third Party Imports
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

export const ImageDropPicker = ({ files, setFiles, width, height, multiple, textSize }) => {
  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: multiple ?? true,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const ImageDisplay = files?.map(file => (
    <Box
      key={file.name}
      sx={{
        boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.1)',
        display: 'flex',

        gap: 2,
        position: 'relative'
      }}
    >
      <Image
        alt={file.name}
        className='single-file-image'
        src={URL.createObjectURL(file)}
        width={300}
        height={300}
        style={{
          maxWidth: width ? (+width / 100 >= 1 ? `${+width - 50}px` : '250px') : '250px',
          height: 'auto',
          width: 'auto',
          maxHeight: height ? (+height / 100 >= 1 ? `${+height - 50}px` : '250px') : '250px'
        }}
      />
      <Box
        sx={{ position: 'absolute', top: -15, right: -15 }}
        onClick={() => {
          setFiles([])
        }}
      >
        <Icon icon={'game-icons:cancel'} fontSize={+width && +width < 250 ? `1.3rem` : `1.75rem`} color='red' />
      </Box>
    </Box>
  ))

  return (
    <Box
      sx={{
        p: 4,
        border: '2px dotted black',
        minWidth: width ?? '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: height ?? '300px',
        backgroundColor: 'background.paper',
        borderRadius: '10px'
      }}
    >
      <Box>
        {files?.length ? (
          <Box sx={{ display: 'flex', gap: 3, overflowX: 'scroll' }}>{ImageDisplay}</Box>
        ) : (
          <Box
            {...getRootProps({ className: 'dropzone' })}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <input {...getInputProps()} />
            <Image
              width={width ? +width - 50 : 250}
              height={180}
              src={`/images/cards/imageUpload.png`}
              alt='Upload Image'
              priority
              style={{ height: 'auto' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <Typography sx={{ fontSize: textSize ? textSize : '24px' }}>
                Drop files here or click to upload.
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
