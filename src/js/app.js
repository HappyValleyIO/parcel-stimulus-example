import { Application } from 'stimulus'
import HelloController from "./controllers/hello_controller.ts";

const application = Application.start()
application.register('hello', HelloController)
