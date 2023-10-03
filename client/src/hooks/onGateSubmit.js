export function onGateSubmit(e) {
    e.preventDefault()
    if (e.nativeEvent.submitter.name === 'Login') {
        console.log('logging in!')
    } else if (e.nativeEvent.submitter.name === 'Sign Up') {
        console.log('signed up!')
    }
}