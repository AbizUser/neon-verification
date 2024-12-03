'use client'

import { useEffect, useState } from 'react'
import { TaskItem } from './task-item'

interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  status: string
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    const response = await fetch('/api/tasks')
    const data = await response.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskUpdated={fetchTasks} />
      ))}
    </div>
  )
}

