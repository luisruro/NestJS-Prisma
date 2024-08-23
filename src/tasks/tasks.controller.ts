import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    taskService: TasksService;

    constructor(taskService: TasksService) {
        this.taskService = taskService;
    }
    @Get()
    @ApiOperation({ summary: 'Get all tasks' }) // Para describir lo que hace
    @ApiResponse({ status: 200, description: 'Return all tasks' })
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.taskService.getTaskById(parseInt(id));
    }

    @Post()
    //@UsePipes(new ValidationPipe)//Ejecuta la validación, ambos son de nestjs. ValidationPipe valida el pipe y cuando se va a ejecutar va utilizar el CreateTaskDto para validar. Los quitamos para ponerlos globales en el main.ts
    createTasks(@Body() task: CreateTaskDto) {
        return this.taskService.createTask(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.taskService.updateTask(task);
    }

    @Patch()
    partialUpdateTasks() {
        return this.taskService.partialUpdateTask();
    }

    @Delete()
    deleteTasks() {
        return this.taskService.deleteTask();
    }
}
