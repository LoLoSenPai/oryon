import axios from 'axios';

function getFloorPrice(collectionName) {
  return axios.get(`/api/floorPrices/${collectionName}`)
    .then((response) => response.data.floorPrice)
    .catch((error) => console.log(error));
}

function getCollectionInfo(collectionNames) {
  const promises = collectionNames.map((collectionName) => getFloorPrice(collectionName));
  return Promise.all(promises).then((floorPrices) => {
    const collectionInfo = {};
    collectionNames.forEach((collectionName, index) => {
      collectionInfo[collectionName] = {
        floorPrice: floorPrices[index]
      };
    });
    return collectionInfo;
  });
}

export default getCollectionInfo;
