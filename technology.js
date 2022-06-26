const counters = document.querySelectorAll('.switch');
const technologyName = document.querySelector('.technology-name')
const details = document.querySelector('.technology-description')
const image = document.querySelector('.technology-image img')

const data = () => {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            details.textContent = data.technology[0].description
            technologyName.textContent = data.technology[0].name
            counters[0].classList.add('active')
            if (innerWidth < 1024) {
                image.setAttribute('src', `${data.technology[0].images.landscape}`)
            } else {
                image.setAttribute('src', `${data.technology[0].images.portrait}`)
            }
            counters.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const indicatorId = indicator.id;
                    counters.forEach(indomie => {
                        indomie.classList.remove('active')
                    })
                    indicator.classList.add('active')
                    details.textContent = data.technology[indicatorId].description
                    technologyName.textContent = data.technology[indicatorId].name
                    counters[indicatorId].classList.add('active')
                    if (innerWidth < 1024) {
                        image.setAttribute('src', `${data.technology[indicatorId].images.landscape}`)
                    } else {
                        image.setAttribute('src', `${data.technology[indicatorId].images.portrait}`)
                    }
                })
            })
        })
}


data()