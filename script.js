const options = {
    key: "2Y9er5VKrqFACCG3bmP7vVBE1hTENnwj", // REPLACE WITH YOUR KEY !!! 
    lat: 40.0,
    lon: 49.2,
    zoom: 5,
};

windyInit(options, windyAPI => {
    const { picker, utils, broadcast } = windyAPI;

    picker.on('pickerOpened', latLon => {
        // picker has been opened at latLon coords
        console.log(latLon);

        const { lat, lon, values, overlay } = picker.getParams();
        // -> 48.4, 14.3, [ U,V, ], 'wind'
        console.log(lat, lon, values, overlay);

        const windObject = utils.wind2obj(values);
        console.log(windObject);
    });

    picker.on('pickerMoved', latLon => {
        // picker was dragged by user to latLon coords
        console.log(latLon);
    });

    picker.on('pickerClosed', () => {
        // picker was closed
    });

    // Wait since wather is rendered
    broadcast.once('redrawFinished', () => {
        picker.open({ lat: 40.0, lon: 49.2 });
        // Opening of a picker (async)
    });
});
