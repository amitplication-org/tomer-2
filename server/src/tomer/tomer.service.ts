import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TomerServiceBase } from "./base/tomer.service.base";

@Injectable()
export class TomerService extends TomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
