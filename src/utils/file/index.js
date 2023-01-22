export const getSelectedImage = (file, setSelectedImage, certificate, type) => {
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
        setSelectedImage({base64: [reader.result], raw: file});
    };
}