export interface IPaginatedParamsDTO {
  page: number
  pageSize: number
}

export type IPaginatedResponseDTO<T> = {
  data: T[]
  items: number
  pages: number
};
