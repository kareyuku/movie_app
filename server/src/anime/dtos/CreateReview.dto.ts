import { IsNotEmpty, IsPositive, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsNotEmpty()
  content: string;

  @IsPositive()
  @Min(1)
  @Max(5)
  rate: number;
}
