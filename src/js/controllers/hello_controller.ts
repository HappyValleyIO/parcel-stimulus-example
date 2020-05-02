import { Controller } from 'stimulus'

export default class HelloController extends Controller {
    static targets =  ['input', 'greeting'];

    inputTarget!: HTMLInputElement;
    greetingTarget!: HTMLElement;

    connect() {
        console.log('Hello there!')
    }

    updateMessage() {
        const name = this.inputTarget.value

        this.greetingTarget.innerHTML = `And hello to you ${name}!`
    }
}