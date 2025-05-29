const ToolTag = ({ tool }) => {
  return (
    <a className={`${tool.bgColor} ${tool.textColor} px-6 py-4 rounded-lg`} href="#">
            {tool.name}
    </a>
  )
}

export default ToolTag