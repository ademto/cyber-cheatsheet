import ToolTag from './ToolTag'
import { categories, allTools } from '../tools'

const Categories = () => {

    return (
        <>
            {categories.map(category => (
                <div key={category} className='mb-20'>
                    <h2 className='text-2xl mb-2'>{category}</h2>
                    <div className="h-1 bg-slate-100">
                        <div className="w-24 h-full bg-black"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto mt-10">
                        {allTools.map(tool => (
                            tool.categories.includes(category) && <ToolTag tool={tool} />
                        ))}
                        <p></p>
                    </div>
                </div>
            ))}        
        </>
    )
}

export default Categories