
const sendToCloudinary = image => {

    const data = new FormData();
    data.append('file', image);
    data.append('api_key', '486559554792269');
    data.append('upload_preset', 'uploader_app');

    const requestOptions = {
        method: 'POST',
        body: data
    };

    return fetch('https://api.cloudinary.com/v1_1/dhg7m0ay2/image/upload', requestOptions);

}

export default sendToCloudinary;