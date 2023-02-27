export const addImage = (imageUri) => {
  return {
    type: "ADD_IMAGE",
    imageUri: imageUri,
  };
};
