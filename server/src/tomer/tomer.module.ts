import { Module } from "@nestjs/common";
import { TomerModuleBase } from "./base/tomer.module.base";
import { TomerService } from "./tomer.service";
import { TomerController } from "./tomer.controller";
import { TomerResolver } from "./tomer.resolver";

@Module({
  imports: [TomerModuleBase],
  controllers: [TomerController],
  providers: [TomerService, TomerResolver],
  exports: [TomerService],
})
export class TomerModule {}
