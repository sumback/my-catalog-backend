import { MagazinesService } from '@/services/magazines.service';
import { Controller } from '@nestjs/common';

@Controller('magazines')
export class MagazinesController {
  constructor(private magazinesService: MagazinesService) {}

  // TODO
}
