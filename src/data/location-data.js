const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Comilla",
    latitude: 23.4607,
    longitude: 91.1809,
  },
  {
    location: "Tokyo",
    latitude: 35.6828387,
    longitude: 139.7594549,
  },
  {
    location: "Sydney",
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: "Cairo",
    latitude: 30.0443879,
    longitude: 31.2357257,
  },
  {
    location: "Paris",
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocations, getLocationByName };
