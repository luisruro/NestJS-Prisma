import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = [];
    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`); // este manejo de errores es propio de nest
        }
        return taskFound
    }

    createTask(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    partialUpdateTask() {
        return 'Aztualizando una tareas parcialmente';
    }

    updateTask(task: UpdateTaskDto) {
        return 'Actualizando una tarea';
    }

    deleteTask() {
        return 'Eliminando una tarea';
    }

}
