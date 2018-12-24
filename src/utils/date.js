const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', dateOptions).format(date);
}

export default {
  formatDate
}
