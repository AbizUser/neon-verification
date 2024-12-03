'use client'
import { TaskForm } from './components/task-form'
import { TaskList } from './components/task-list'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">タスク管理アプリ</h1>
      <TaskForm onTaskAdded={() => {}} />
      <div className="mt-8">
        <TaskList />
      </div>
    </main>
  )
}

