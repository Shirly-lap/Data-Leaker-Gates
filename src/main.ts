// Import our custom CSS
import './views/pages/scss/style.scss'
import { SignUp } from './views/pages/signUp';

const app = document.getElementById("app") as HTMLDivElement;



app.append(SignUp())
