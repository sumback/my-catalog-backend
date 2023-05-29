import { WatchService } from '@/services/watch.service';
import { Controller } from '@nestjs/common';

@Controller('watch')
export class WatchController {
  constructor(private watchService: WatchService) {}

  // TODO
}
