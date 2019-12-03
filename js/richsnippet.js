const endpoint = `https://api.kudobuzz.com/businesses/5be848898b01934776aca6fd/reviews/published?client_id=594a28ac7dc86ea1240e0f43&limit=1`
async function getReview() {
    const res = await fetch(endpoint)
    const data = await res.json()
    return data
}

function loadJSONLD(metadata) {
    const dataObject = {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: 'Ben Kissi',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: metadata.average,
            reviewCount: metadata.count
        }
    }

    const jsonLd = JSON.stringify(dataObject)

    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.appendChild(document.createTextNode(jsonLd))
    head.appendChild(script)
}

getReview().then((data) => {
    loadJSONLD(data.metadata)
}).catch((error) => {
    console.log(error)
})