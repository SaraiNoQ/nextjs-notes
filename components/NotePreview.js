import {marked} from 'marked'
import sanitizeHtml from 'sanitize-html'

// 初始化 HTML净化器
const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3'
])
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ['alt', 'src']
  }
)

export default function NotePreview({ children }) {
  return (
    <div className="w-5/6 max-h-[75%] overflow-y-auto">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || ''), {
            allowedTags,
            allowedAttributes
          })
        }}
      />
    </div>
  )
}