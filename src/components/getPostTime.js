// Generates timestamp from Unix Time code
export const getPostTime = (time) => {
    const seconds = Math.floor((new Date().getTime() / 1000 ) - time);

    let timePassed = seconds / 3600;
    if (timePassed > 1) {
        return `${Math.floor(timePassed)} hours`;
    };

    timePassed = seconds / 60;
    if (timePassed > 1) {
        return `${Math.floor(timePassed)} minutes`;
    };

    return `${Math.floor(timePassed)} seconds`;
};