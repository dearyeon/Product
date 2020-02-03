import { index } from '.';

index({ id: '165132950' })
    .then(value => console.log(value))
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));
