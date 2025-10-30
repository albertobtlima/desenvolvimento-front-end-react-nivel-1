import AddTaskButton from './AddTaskButton'
import { useTheme } from '../../contexts/ThemeContext'

function EmptyState({ onAddTask }) {
  const theme = useTheme()
  return (
    <div className="text-center py-8">
      <div className="mb-6">
        <p className="text-purple-header text-paragraph-large font-medium mb-1">Para estudar</p>
        <p className={`${theme.textSecondary} text-label mb-6`}>
          Ainda não tem tarefas cadastradas,<br />
          adicione para começar!
        </p>
        
        <div className="flex justify-center mb-8">
          <div className={`w-20 h-20 border-2 border-dashed ${theme.isDark ? 'border-green-check' : 'border-purple-600'} rounded-lg flex items-center justify-center`}>
            <img 
              src="/src/assets/empty-file.png" 
              alt="Empty state" 
              className={`w-12 h-12 ${theme.isDark ? 'opacity-60' : 'opacity-80'}`}
              style={{
                filter: theme.isDark ? 'none' : 'brightness(0.7) contrast(1.2)'
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-purple-header text-paragraph-large font-medium mb-2">Concluído</p>
        <div className="w-full h-0.5 bg-purple-header mb-6"></div>
      </div>
      
      <AddTaskButton onClick={onAddTask} />
    </div>
  )
}

export default EmptyState