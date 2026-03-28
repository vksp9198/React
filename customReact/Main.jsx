

const MainContainer = document.querySelector('#root')
console.log(MainContainer)

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://github.com/vksp9198',
//         target: '_blank'
//     },
//     Children: 'click me to visit my Github profile'
// }

const ReactGoogle = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}
function customRender(ReactGoogle, MainContainer) {
    const domElement = document.createElement(ReactGoogle.type)
    domElement.innerHTML = ReactGoogle.Children
    domElement.setAttribute('href', ReactGoogle.props.href)
    domElement.setAttribute('target', ReactGoogle.props.target)


    MainContainer.appendChild(domElement)
}
customRender(ReactGoogle, MainContainer)

