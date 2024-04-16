// ** Next imports
import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from 'react'

const HtmlEditor = ({ rerender, defaultValue, onChange, ...props }) => {
  const editorRef = useRef(null)

  // // Handle editor content change
  // const handleEditorChange = (content, editor) => {
  //   if (onChange) {
  //     onChange(content)
  //   }
  // }

  const [editorContent, setEditorContent] = useState(defaultValue || '')

  // Effect to restore cursor position
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.selection.select(editorRef.current.selection.getNode())
      editorRef.current.selection.collapse(false)
    }
  }, [editorContent])

  // Handle editor content change
  const handleEditorChange = content => {
    setEditorContent(content)
    if (onChange) {
      onChange(content)
    }
  }

  return (
    <Editor
      apiKey='a95a8rzla1td9dserdosd8htcbewtbrjd9823nq9tn37s2ni'
      onInit={(evt, editor) => (editorRef.current = editor)}
      id='email-template'
      key={rerender}
      initialValue={defaultValue || ''}
      {...props}
      onEditorChange={handleEditorChange}
      init={{
        inline: false,
        height: 300,
        menubar: false,
        plugins: [
          'code',
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'wordcount'
        ],
        toolbar:
          'blocks | code |' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
      }}
    />
  )
}

export default HtmlEditor
