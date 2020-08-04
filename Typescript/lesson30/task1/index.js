export const addImage = imgSrc => {
    const p = new Promise((resolveCb, rejectCb) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;

        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            const { width = 200, height = 100 } = imgElem;
            resolveCb(imgElem.width, imgElem.height);
        };

        imgElem.addEventListener('load', onImageLoaded);

        imgElem.addEventListener('error', () => rejectCb(new Error('Image load is failed...')));
    });

    return p;
};

const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.catch(error => console.log(error));

// addImage('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg', onImageLoaded);
