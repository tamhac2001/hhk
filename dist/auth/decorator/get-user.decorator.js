"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserId = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (data) {
        return request.user.data;
    }
    return request.user;
});
//# sourceMappingURL=get-user.decorator.js.map