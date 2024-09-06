import { Route, Routes} from 'react-router-dom'
import { SortingPage } from '../../pages/SortingPage/SortingPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { LocationsPage } from '../../pages/LocationsPage/LocationsPage'
import { ArticlesPage } from '../../pages/ArticlesPage/ArticlesPage'
import { OrderPage } from '../../pages/OrderPage/OrderPage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { ArticleList } from '../ArticleList/ArticleList'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails'
import { Sorting } from '../Sorting/Sorting'
import { SortingDetails } from '../SortingDetails/SortingDetails'

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path='/Sorting' element={<SortingPage/>}>
                <Route index element={<Sorting/>}></Route>
                <Route path=':section_id' element={<SortingDetails/>}></Route>
            </Route>

            <Route path='/Locations' element={<LocationsPage/>}></Route>

            <Route path='/Articles' element={<ArticlesPage/>}>
                <Route index element={<ArticleList/>}></Route>
                <Route path=':article_id' element={<ArticleDetails/>}></Route>
            </Route>

            <Route path='/Order' element={<OrderPage/>}></Route>
            <Route path='/Login' element={<LoginPage/>}></Route>
        </Routes>
    )
}