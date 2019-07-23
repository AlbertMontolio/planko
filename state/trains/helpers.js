export const getLastKey = (trains) => {
  if (trains.length === 0) {
    return 0
  }
  return trains[trains.length - 1].id
}

export const getUserTrains = (trains, userId) => {
  return  trains.filter((train) => train.userId === userId)
}
