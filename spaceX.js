console.log('This works');

const container = document.querySelector('.container');
//console.log(container);

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
//     const firstElement = data[0];
//     console.log(firstElement)
//     let capsuleID = firstElement.capsule_id;
//     console.log(capsuleID);
//     let detailes = firstElement.details;
//     console.log(detailes);
//     let landings= firstElement.landings;
//     console.log(landings)

    for (let i = 0; i <data.length; i++) {
        let eachCapsule = data[i];
        const obj = {
            capsuleID: eachCapsule.capsule_id,
            detailes: eachCapsule.details,
            landings: eachCapsule.landings
        }
        console.log(obj);

        const capsuleElement = document.createElement('p')
        capsuleElement.textContent = obj.capsuleID;

        container.appendChild(capsuleElement);
    }
})