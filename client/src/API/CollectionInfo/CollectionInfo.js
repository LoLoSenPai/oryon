import axios from 'axios';

function getCollectionInfo(collectionName) {
  return axios.get(`https://api-mainnet.magiceden.io/v2/collections/${collectionName}/stats`)
    .then((response) => response.data.floorPrice)
    .catch((error) => console.log(error));
}

function CollectionInfo(collections) {
  const promises = collections.map((collectionName) => getCollectionInfo(collectionName));
  return Promise.all(promises).then((results) => {
    const floorPrices = {};
    collections.forEach((collectionName, index) => {
      floorPrices[collectionName] = results[index];
    });
    return floorPrices;
  });
}

export default CollectionInfo;
