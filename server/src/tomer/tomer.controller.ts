import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TomerService } from "./tomer.service";
import { TomerControllerBase } from "./base/tomer.controller.base";

@swagger.ApiTags("tomers")
@common.Controller("tomers")
export class TomerController extends TomerControllerBase {
  constructor(
    protected readonly service: TomerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
