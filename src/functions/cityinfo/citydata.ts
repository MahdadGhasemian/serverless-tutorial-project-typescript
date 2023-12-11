export interface CityData {
  name: string;
  stage: string;
  description: string;
  mayor: string;
  population: number;
  zipCodes?: string;
}

export const generatedCityData: CityData[] = [
  {
    name: "Metropolis",
    stage: "Metropolitan",
    description:
      "A bustling city known for its towering skyscrapers and vibrant culture.",
    mayor: "John Smith",
    population: 2000000,
    zipCodes: "12345, 67890",
  },
  {
    name: "Harborville",
    stage: "Coastal",
    description:
      "A picturesque coastal town famous for its seafood and friendly community.",
    mayor: "Emma Johnson",
    population: 50000,
    zipCodes: "54321, 09876",
  },
  {
    name: "Greenfield",
    stage: "Suburban",
    description:
      "A green and peaceful suburban area with well-maintained parks and neighborhoods.",
    mayor: "Michael Davis",
    population: 100000,
    zipCodes: "13579, 24680",
  },
  {
    name: "Techburg",
    stage: "Innovative",
    description:
      "An innovative city at the forefront of technology, attracting tech enthusiasts worldwide.",
    mayor: "Sophia Rodriguez",
    population: 800000,
    zipCodes: "97531, 86420",
  },
  {
    name: "Historica",
    stage: "Historic",
    description:
      "A city with rich historical landmarks and a deep cultural heritage.",
    mayor: "William Turner",
    population: 150000,
    zipCodes: "64280, 31975",
  },
];
