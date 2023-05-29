import { JikanResource, JikanResponse } from '@/shared/interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class GenresResponseDto implements JikanResponse<JikanResource[]> {
  @ApiProperty({ description: 'Response data' })
  data: GenresDataDto[];
}

export class GenresDataDto implements JikanResource {
  @ApiProperty({ description: 'The identifier of the self description.' })
  mal_id: number;

  @ApiProperty({ description: 'The name of the self description.' })
  name: string;

  @ApiProperty({ description: 'The url of the self description.' })
  url: string;

  @ApiProperty({ description: 'The count of the self description.' })
  count: number;
}
