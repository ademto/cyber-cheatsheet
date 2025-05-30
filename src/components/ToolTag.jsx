import { Link } from 'react-router-dom'

const ToolTag = ({ tool }) => {
  return (
    <Link className={`${tool.bgColor} ${tool.textColor} px-6 py-4 rounded-lg`} to={tool.name}>
      {tool.name}
    </Link>
  )
}

export default ToolTag