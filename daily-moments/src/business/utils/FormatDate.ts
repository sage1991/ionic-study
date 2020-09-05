

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}


export { formatDate };