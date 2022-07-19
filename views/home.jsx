const React = require('react')
const Def = require('./default')
const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                /* BOOTSTRAP CDN LINK (long) */
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

function home () {
    return (
        <Def>
            <main>
                <h1>HOME111</h1>
                <div>
                  <img src="images/drink.jpg" alt="Chia Fruit Shake" />
                </div>
                <div>Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page@</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

