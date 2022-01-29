import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interfaces';
import { CONFIG_OPTIONS } from '../common/common.constants';
import * as jwt from 'jsonwebtoken';
import { AuthUser } from 'src/auth/auth-user.decorator';
@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}
  sign(userId: Object) {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }

  verify(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
