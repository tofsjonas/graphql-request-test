import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLClient } from 'graphql-request';

@Controller()
export class AppController {
  private readonly client: GraphQLClient;
  constructor(private readonly appService: AppService) {
    this.client = new GraphQLClient('');
  }

  @Get()
  getHello(): string {
    console.log(this.client);
    return this.appService.getHello();
  }
}
