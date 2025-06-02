import { Link } from 'react-router-dom'
import { allTools } from '../tools'
import { nanoid } from 'nanoid'


const ToolTag = ({ tool }) => {
  const exists = allTools.some(t => t.slug === tool.slug)
  console.log(exists ? "domiso" : "falado")
  const id = nanoid()
  return (
    <Link
      key={id}
      className={`${tool.bgColor} ${tool.textColor} px-6 py-4 rounded-lg`}
      to={`tools/${tool.slug}`}
    >
      {tool.name}
    </Link>
  )
}

export default ToolTag