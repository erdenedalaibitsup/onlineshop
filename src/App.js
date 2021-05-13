import { BrowserRouter, Route } from "react-router-dom";
import Header from "./pages/admin/header/Header";
import Menu from "./pages/admin/menu/Menu";
import AdminProductSubTypeContent from './pages/admin/content/ProductSubTypeContent'
import AdminProductTypeContent from './pages/admin/content/ProductTypeContent'
import AdminProductContent from "./pages/admin/content/ProductAddContent";
import { ProductTypeProvider } from './pages/context/ProductTypeCtx'
import { ProductSubTypeProvider } from './pages/context/ProductSubTypeCtx'
import { ProductProvider } from './pages/context/ProductCtx'
import { adminHome, adminProductType, adminProductSubType } from './pages/admin/routes/route'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
  });

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path={adminHome}>
          <Header />
          <Menu />
        </Route>
        <Route path={adminHome} exact>
          <ProductProvider>
            <AdminProductContent></AdminProductContent>
          </ProductProvider>
        </Route>
        {/* <Route path={adminProductType} exact>
        <ProductTypeProvider>
          <AdminProductTypeContent></AdminProductTypeContent>
        </ProductTypeProvider>
      </Route> */}
        <Route path={adminProductSubType} exact>
          <ProductSubTypeProvider>
            <AdminProductSubTypeContent></AdminProductSubTypeContent>
          </ProductSubTypeProvider>
        </Route>


      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
