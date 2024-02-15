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

export default function NotePreview({ width, children }) {
  return (
    <div
      className={[
        "border-[1px] h-3/4 overflow-y-auto shadow-sm p-3",
        width ? "w-[62%]" : "w-5/6"
      ].join(" ")}>
      <div
        className="font-bold text-lg"
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