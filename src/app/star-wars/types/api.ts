export interface ResourceItem {
  readonly created: string;
  readonly edited: string;
  readonly url: string;
}

export interface ResultsList<T> {
  readonly count: number;
  readonly previous: string | null;
  readonly next: string | null;
  readonly results: readonly T[];
}

export interface ResultsListParams {
  readonly search?: string;
  readonly page?: string;
}

export interface Person extends ResourceItem {
  readonly birth_year: string; // The birth year of ...
  readonly eye_color: string; // The eye color of ...
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  homeworld: string | null;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}
