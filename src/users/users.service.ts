import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { LoginInput } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.user.findOne({ email });
      if (exists) {
        return { ok: true, error: 'aleady email' };
      }
      await this.user.save(this.user.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'could not make email' };
    }
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.user.findOne({ email });
      if (!user) {
        return {
          ok: false,
          error: 'no email',
        };
      }
      const passwordCorrect = await user.checkPassword(password);
      if (!passwordCorrect) {
        return {
          ok: false,
          error: 'wrong password',
        };
      }

      return {
        ok: true,
        token: 'tokenefwefwf',
      };
    } catch (e) {}
  }
}
