import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Administrator from '../screens/Administrator';
import Categorie from '../screens/Categorie';
import Quiz from '../screens/Quiz';
import CreateCategorie from '../screens/CreateCategorie';
import ModifyCategorie from '../screens/ModifyCategorie';
import ModifyQuiz from '../screens/ModifyQuiz';
import ModifyQuestion from '../screens/ModifyQuestion';
import ModifyAnswer from '../screens/ModifyAnswer';
import CreateQuiz from '../screens/CreateQuiz';


const screens ={
    Home:{
        screen: Home
    },

    Login:{
        screen:Login
    },
    Administrator:{
        screen:Administrator
    },
    Categorie:{
        screen:Categorie
    },
    Quiz:{
        screen:Quiz
    },
    CreateCategorie:{
        screen:CreateCategorie
    },
    ModifyCategorie:{
        screen:ModifyCategorie
    },
    ModifyQuiz:{
        screen:ModifyQuiz
    },
    ModifyQuestion:{
        screen:ModifyQuestion
    },
    ModifyAnswer:{
        screen:ModifyAnswer
    },
    CreateQuiz:{
        screen:CreateQuiz
    }


}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);