export interface InfoJson {
  type?: string; // this is sometimes set by the frontend, e.g. by the FileUpload module
  title: string;
  author: string;
  copyright: string;
  description: string;
}

export interface CluesJson {
  across: string[];
  down: string[];
}

export interface CellData {
  value?: string;
  black?: boolean;
  number?: number;
  revealed?: boolean;
  bad?: boolean;
  good?: boolean;
  pencil?: boolean;
  solvedBy?: {
    id: string;
    teamId: number;
  };
}
export type GridData = CellData[][];

export interface GameJson {
  info: InfoJson;
  grid: GridData;
  teamGrids: Record<string, GridData>;
  solution: string[][];
  clues: CluesJson;
}
/**
 * PuzzleJson: the json format of puzzles stored in the db (both firebase & postgres)
 * Fields are a bit messy & don't correspond perfectly with puzjs formats... see logic in FileUploader.js
 */

export interface PuzzleJson {
  grid: string[][];
  info: InfoJson;
  circles: string[];
  shades: string[];
  clues: CluesJson;
  private?: boolean;
}

export interface PuzzleStatsJson {
  numSolves: number;
}

export interface AddPuzzleRequest {
  puzzle: PuzzleJson;
  pid?: string; // if not provided, a new one is generated by backend
  isPublic: boolean;
}

export interface AddPuzzleResponse {
  pid: string;
}

export interface ListPuzzleRequest {
  filter: ListPuzzleRequestFilters;
  page: number;
  pageSize: number;
}

export interface ListPuzzleRequestFilters {
  sizeFilter: {
    Mini: boolean;
    Standard: boolean;
  };
  nameOrTitleFilter: string;
}

export interface ListPuzzleResponse {
  puzzles: {
    pid: string;
    content: PuzzleJson;
    stats: PuzzleStatsJson;
  }[];
}

export interface CreateGameResponse {}

export interface CreateGameRequest {
  gid: string;
  pid: string;
}

export interface RecordSolveRequest {
  gid: string;
  time_to_solve: number;
}

export interface RecordSolveResponse {}

export type CellCoords = {r: number; c: number};
