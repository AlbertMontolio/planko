export const getLastKey = (trains) => {
  if (trains.length === 0) {
    return 0
  }
  return trains[trains.length - 1].id
}
