const delayedResolution = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} milliseconds`);
        }, ms);
    });
};

const delayedRejection = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Rejected after ${ms} milliseconds`);
        }, ms);
    });
};

const handlePromises1 = (promise1) => {
    return promise1
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return `ERROR: ${err}`;
        });
};

const handlePromises2 = async (promise1) => {
    try {
        return await promise1;
    } catch (err) {
        return `ERROR: ${err}`;
    }
};

const racePromises = async (ms1, ms2) => {
    return Promise.race([delayedResolution(ms1), delayedRejection(ms2)])
        .then((value) => {
            return value;
        })
        .catch((err) => {
            return `ERROR: ${err}`;
        });
};

const handleMultiplePromises = async (promisesArr) => {
    const message = { resolved: 0, rejected: 0 };
    return Promise.allSettled(promisesArr).then((results) => {
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                message.resolved += 1;
            }
            if (result.status === "rejected") {
                message.rejected += 1;
            }
        });
        return message;
    });
};

const handleMultipleResolutions = async (promisesArr) => {
    return Promise.all(promisesArr)
        .then((results) => {
            return `All promises resolved`;
        })
        .catch((err) => {
            return `ERROR: At least one promise rejected`;
        });
};

export {
    delayedRejection,
    delayedResolution,
    handleMultiplePromises,
    handleMultipleResolutions,
    handlePromises1,
    handlePromises2,
    racePromises,
};
