const ROOT_URL = 'https://catfact.ninja';

module.exports = {
    show,
}

async function show(req, res) {
    const factData = await fetch(`${ROOT_URL}/fact`)
        .then(res => res.json());
        console.log(factData);
    res.render('cat/fact', { factData });
    }