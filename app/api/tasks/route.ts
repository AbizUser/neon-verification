import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getTaskStatus } from '@/lib/utils'

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks)
}

export async function POST(request: Request) {
  const body = await request.json()
  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      dueDate: new Date(body.dueDate),
      status: getTaskStatus(new Date(body.dueDate), false),
    },
  })
  return NextResponse.json(task)
}